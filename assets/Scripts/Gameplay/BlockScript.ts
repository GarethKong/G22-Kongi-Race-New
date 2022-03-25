// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CustomEventManager from "../Ultilities/CustomEventManager";
import SimplePool from "../Ultilities/SimplePool";
import SoundManager from "../Ultilities/SoundManager";
import GameManager from "./GameManager";
import GameDataConfig from "./SpawnDataConfig";
import SpawnDataConfig from "./SpawnDataConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlockScript extends cc.Component
{
    public BlockWidth: number = 0;
    @property
    private BlockHeight: number = 0;
    @property(cc.Node)
    private mistBefore: cc.Node = null;
    @property(cc.Node)
    private blockNode: cc.Node = null;
    @property(cc.Node)
    private CenterNode: cc.Node = null;
    @property(cc.Node)
    private diamondNode: cc.Node = null;
    @property(cc.Label)
    private blockNumberText: cc.Label = null;
    private IsActiveForCollision: boolean = false;
    public IsIgnorePauseGame: boolean = false;


    private estimateTimeList: number[] = []; // list thời gian va chạm giữa các block phía trước nó (nếu tính va chạm các trung điểm)
    private estimateTimeToCollision: number = 0; // thời gian còn lại tính cho va chạm (ước lượng)
    private remainOffsetY: number = 0; // khoảng cách còn lại để đến mốc Y cuối cùng

    private currentMoveType: BlockMoveType;
    private moveVelocityX: number = 100; // tốc độ di chuyển ngang
    private targetPosX: number; // vị trí ước tính đến đúng pacing thì block sẽ nằm ở đó
    private maxOffsetTargetPosX: number = 50; // khoảng cách tối đa block có thể lệch với target

    private rotateAngle: number; // góc lệch cho quay rotate
    private rotateSpeed: number = 15; // tốc độ quay mỗi giây
    private rotateSpeedInRadian: number;
    private rotateRadius: number = 1280; // bán kính quay


    protected update(dt: number): void
    {
        if (GameManager.Instance.IsPauseGame && this.IsIgnorePauseGame === false) return;
        this.node.position = this.node.position.addSelf(this.Velocity.mul(dt * GameManager.Instance.TimeScale));
        let angleInRadian = cc.misc.degreesToRadians(-this.rotateAngle);

        switch (this.currentMoveType)
        {
            case BlockMoveType.Move_Left:
                this.node.position.x -= this.moveVelocityX * dt * GameManager.Instance.TimeScale;
                if (this.node.position.x < this.targetPosX - this.maxOffsetTargetPosX)
                {
                    this.currentMoveType = BlockMoveType.Move_Right;
                }
                break;
            case BlockMoveType.Move_Right:
                this.node.position.x += this.moveVelocityX * dt * GameManager.Instance.TimeScale;
                if (this.node.position.x > this.targetPosX + this.maxOffsetTargetPosX)
                {
                    this.currentMoveType = BlockMoveType.Move_Left;
                }
                break;
            case BlockMoveType.Rotate_Right:
                this.node.angle += this.rotateSpeed * GameManager.Instance.TimeScale * dt;
                this.rotateAngle = this.node.angle;
                this.node.position = this.node.position.addSelf(cc.v3(this.rotateRadius * Math.cos(angleInRadian) * GameManager.Instance.TimeScale * dt * this.rotateSpeedInRadian,
                    this.rotateRadius * Math.sin(-angleInRadian) * GameManager.Instance.TimeScale * dt * this.rotateSpeedInRadian));
                break;
            case BlockMoveType.Rotate_Left:
                this.node.angle -= this.rotateSpeed * GameManager.Instance.TimeScale * dt;
                this.rotateAngle = this.node.angle;
                this.node.position = this.node.position.addSelf(cc.v3(-this.rotateRadius * Math.cos(angleInRadian) * GameManager.Instance.TimeScale * dt * this.rotateSpeedInRadian,
                    this.rotateRadius * Math.sin(angleInRadian) * GameManager.Instance.TimeScale * dt * this.rotateSpeedInRadian));
                break;
        }

        this.node.position = this.node.position.addSelf(cc.v3(0, this.MoveDownVelocityOnChangeBlockIndex * GameManager.Instance.TimeScale * dt));

        this.estimateTimeToCollision -= dt * GameManager.Instance.TimeScale;

        let velocityY = 0;
        if (this.estimateTimeToCollision <= 0)
        {
            velocityY = 0;
        }
        else
        {
            velocityY = this.remainOffsetY / this.estimateTimeToCollision;
        }

        // this.node.position.y -= this.remainOffsetY * dt * GameManager.Instance.TimeScale * velocityY;

        if (this.node.position.y < -1500)
        {
            this.breakEdgeContainer.active = false;
            this.blockNode.position = cc.Vec3.ZERO;
            this.blockNode.color = GameManager.Instance.ColorList[GameManager.Instance.ColorList.length - 1];

            SimplePool.instance.Despawn(this.node);
        }

        if (this.WaitForLanding == false)
        {
            this.AutoCollisionWithPlayer();
        }
    }



    public EnableForCollision(isDelayForEnable: boolean)
    {
        if (isDelayForEnable)
        {
            this.scheduleOnce(() => {this.IsActiveForCollision = true;}, 0.3);
        }
        else
        {
            this.IsActiveForCollision = true;
        }
    }

    private MoveDownVelocityOnChangeBlockIndex: number = 0; // vận tốc di chuyển xuống khi có sự thay đổi blockIndex
    private BlockIndex: number = 0;
    public ChangeStateToNextIndex(changeDuration: number): void
    {
        // chuyển màu về gần với màu gốc
        if (this.BlockIndex > 0)
        {
            this.BlockIndex--;
            cc.tween(this.node).to(changeDuration, {
                scale: GameManager.Instance.ScaleList[this.BlockIndex]
            }).start();


            cc.tween(this.blockNode).to(changeDuration, {
                color: GameManager.Instance.ColorList[this.BlockIndex]
            }).start();

            this.MoveDownVelocityOnChangeBlockIndex = SpawnDataConfig.OffsetYForBlockIndex[this.BlockIndex] / (changeDuration * 1.2);
            // cc.tween(this.node).by(changeDuration * 1.5, {position: cc.v3(0, SpawnDataConfig.OffsetYForBlockIndex[this.BlockIndex], 0)}).start();

            // this.estimateTimeToCollision = 0;
            // this.estimateTimeList.splice(0, 1);
            // for (let i = 0; i < this.estimateTimeList.length; i++)
            // {
            //     this.estimateTimeToCollision += this.estimateTimeList[i];
            // }
        }
    }

    public ChangeColorWhenChangeMilestone()
    {
        this.blockNode.color = GameManager.Instance.ColorList[this.BlockIndex];

        this.squareBottom.color = GameManager.Instance.ColorList[0];
        this.squareRear.color = GameManager.Instance.ColorList[0];
        this.squareRotate.color = GameManager.Instance.ColorList[0];
        this.triangleNode.color = GameManager.Instance.ColorList[0];
    }

    //#region INIT BLOCK
    public SetBlockInfo(blockWidth: number, startAngle: number, moveType: BlockMoveType,
        position: cc.Vec3, blockIndex: number, hasDiamond: boolean, blockText: string,
        estimateTimeList: number[]): void
    {
        this.IsIgnorePauseGame = false;
        this.node.position = position;
        this.BlockWidth = blockWidth;
        this.blockNode.width = blockWidth;
        this.mistBefore.width = blockWidth;
        this.node.angle = startAngle;
        this.mistBefore.width = blockWidth;

        this.BlockIndex = blockIndex;
        this.blockNode.color = GameManager.Instance.ColorList[this.BlockIndex];
        this.node.scale = GameManager.Instance.ScaleList[this.BlockIndex];
        this.squareBottom.color = GameManager.Instance.ColorList[0];
        this.squareRear.color = GameManager.Instance.ColorList[0];
        this.squareRotate.color = GameManager.Instance.ColorList[0];
        this.triangleNode.color = GameManager.Instance.ColorList[0];

        this.Velocity = cc.Vec3.ZERO; // tùy move type
        this.IsActiveForCollision = false;
        this.WaitForLanding = false;

        this.diamondNode.active = hasDiamond;
        this.blockNumberText.string = blockText;

        this.estimateTimeList = Object.assign([], estimateTimeList);

        this.estimateTimeToCollision = 0;
        for (let i = 0; i < estimateTimeList.length; i++)
        {
            this.estimateTimeToCollision += estimateTimeList[i];
        }

        this.remainOffsetY = SpawnDataConfig.BonusYForBlockIndex[this.BlockIndex];
        this.currentMoveType = moveType;

        this.targetPosX = position.x;

        // đối với các block có di chuyển thì phải tính lại vị trí các thứ của block để đến đúng thời điểm user có thể nhảy xuống được tại tâm của mặt trên block
        switch (moveType)
        {
            case BlockMoveType.Move_Left:
                // TOAN TOAN TOAN
                break;
            case BlockMoveType.Move_Right:

                break;
            case BlockMoveType.Rotate_Left:
                this.rotateAngle = this.rotateSpeed * this.estimateTimeToCollision;
                this.node.angle = this.rotateAngle;
                this.node.position = this.node.position.addSelf(cc.v3(
                    this.rotateRadius * Math.sin(cc.misc.degreesToRadians(this.rotateAngle)),
                    this.rotateRadius * (1 - Math.cos(cc.misc.degreesToRadians(this.rotateAngle)))));

                break;
            case BlockMoveType.Rotate_Right:
                this.rotateAngle = -this.rotateSpeed * this.estimateTimeToCollision;
                this.node.angle = this.rotateAngle;
                this.node.position = this.node.position.addSelf(cc.v3(
                    this.rotateRadius * Math.sin(cc.misc.degreesToRadians(this.rotateAngle)),
                    this.rotateRadius * (1 - Math.cos(cc.misc.degreesToRadians(this.rotateAngle)))));
                break;
        }

        this.rotateSpeedInRadian = cc.misc.degreesToRadians(this.rotateSpeed);
    }
    //#endregion INIT BLOCK

    //#region MOVE BLOCK KHI HIT
    private Velocity: cc.Vec3 = cc.Vec3.ZERO;
    private MoveDownWhenHitPlayer(): void
    {
        this.Velocity = cc.v3(0, -1000);
        this.IsIgnorePauseGame = true;
    }

    public OnGameOver(): void
    {
        this.IsIgnorePauseGame = true;
        this.currentMoveType = BlockMoveType.Static;
        let angleInRadian = this.node.angle * Math.PI / 180;
        this.Velocity = cc.v3(4000 * Math.sin(angleInRadian), -4000 * Math.cos(angleInRadian));
    }
    //#endregion  MOVE BLOCK KHI HIT

    //#region CHECK COLLSION
    public WaitForLanding: boolean = false; // TRUE nếu như người chơi đang tap vào màn hình => block ở update để chờ ở đây
    public AutoCollisionWithPlayer()
    {
        if (this.IsActiveForCollision == false) return;
        if (this.SqrDistanceFromTargetToHorizontalLine(GameManager.Instance.KongiNode.node) <= Math.pow(GameManager.Instance.KongiRadius + this.BlockHeight * 0.5, 2))
        {
            this.CheckCollisionOnTopBlock();
        }
    }


    public CheckCollisionOnTopBlock()
    {
        this.currentMoveType = BlockMoveType.Static;
        let sqrDistanceToVerticalAxix = this.SqrDistanceFromTargetToVerticalLine(GameManager.Instance.KongiNode.node);
        if (sqrDistanceToVerticalAxix <= Math.pow(GameManager.Instance.KongiRadius + this.BlockWidth * 0.5 + 30, 2))
        {
            SoundManager.Instance.PlayHitSound();
            // check hit diamond:
            let canHitDiamond: boolean = sqrDistanceToVerticalAxix <= GameDataConfig.HitDiamondSqrDistance && this.diamondNode.active;

            // check break edge:
            let canBreakEdge: boolean = sqrDistanceToVerticalAxix >= Math.pow(this.BlockWidth / 2 - GameDataConfig.BreakEdgeDistance, 2);

            if (canHitDiamond)
            {
                // ăn diamond
                SoundManager.Instance.PlayCollectDiamondSound();
                this.diamondNode.active = false;
                GameManager.Instance.SpawnDiamondParticle(this.node.position);
            }
            if (canBreakEdge)
            {
                // vỡ viền tối thiểu là 50
                this.BreakEdge(cc.misc.clampf(this.BlockWidth / 2 - Math.sqrt(sqrDistanceToVerticalAxix), 30, GameDataConfig.BreakEdgeDistance), this.node.x < GameManager.Instance.KongiNode.node.x);
            }

            this.MoveDownWhenHitPlayer();
            GameManager.Instance.SetNextBlock(canHitDiamond);
            GameManager.Instance.PushUpKongi(this.node.angle);
            this.blockNumberText.string = "";
        }
        else
        {
            this.scheduleOnce(() => {GameManager.Instance.ShowGameOver();}, 0.5);
            SoundManager.Instance.PlayGameOverSound();
        }
        this.IsActiveForCollision = false;
    }
    /**
     * khoảng cách từ node (target) tới đường thẳng ax + by + c = 0
     */
    private SqrDistanceFromTargetToLine(a: number, b: number, c: number, target: cc.Node): number
    {
        // ax + by + c = 0
        // point: (x0,yo)
        // distance: abs(ax0 + by0 + c) / sqrt(a*a + b*b)
        return Math.pow(a * target.x + b * target.y + c, 2) / (a * a + b * b);
    }

    /**
     * Bình phương khoảng cách từ target đến trục dọc block
     */
    private SqrDistanceFromTargetToVerticalLine(target: cc.Node): number
    {
        if (this.node.angle === 0 || this.node.angle === 180)
        {
            return this.SqrDistanceFromTargetToLine(1, 0, -this.node.x, target);
        }
        else
        {
            return this.SqrDistanceFromTargetToLine(Math.tan(Math.PI / 180 * (90 + this.node.angle)), -1,
                -Math.tan(Math.PI / 180 * (90 + this.node.angle)) * this.node.x + this.node.y, target);
        }
    }
    /**
     * Bình phương khoảng cách từ target đến trục ngang block
     */
    private SqrDistanceFromTargetToHorizontalLine(target: cc.Node): number
    {
        if (this.node.angle === 90 || this.node.angle === 270)
        {
            return this.SqrDistanceFromTargetToLine(1, 0, -(this.CenterNode.x + this.node.x), target);
        }
        else
        {
            return this.SqrDistanceFromTargetToLine(Math.tan(Math.PI / 180 * (this.node.angle)), -1,
                -Math.tan(Math.PI / 180 * (this.node.angle)) * (this.CenterNode.x + this.node.x) + this.node.y + this.CenterNode.y, target);
        }
    }
    //#endregion CHECK COLLSION
    //#region BREAK EDGE
    @property(cc.Node)
    private breakEdgeContainer: cc.Node = null;
    @property(cc.Node)
    private squareBottom: cc.Node = null;
    @property(cc.Node)
    private squareRear: cc.Node = null;
    @property(cc.Node)
    private squareRotate: cc.Node = null;
    @property(cc.Node)
    private triangleNode: cc.Node = null;
    /**
     * 
     * @param distanceToRear Khoảng cách từ điểm vỡ tới viền phải
     * @param isRightSide TRUE nếu vỡ bên phải
     */
    private BreakEdge(distanceToRear: number, isRightSide: boolean): void
    {
        this.breakEdgeContainer.active = true;
        this.blockNode.position = cc.v3(0, -200);

        this.squareBottom.setContentSize(this.BlockWidth, 2000);
        this.squareRear.setContentSize(this.BlockWidth - distanceToRear, 200);

        this.squareRotate.setContentSize(Math.sqrt(distanceToRear * distanceToRear + 40000), SpawnDataConfig.BreakEdgeDistance);

        if (isRightSide)
        {
            this.squareRear.position = cc.v3(-distanceToRear / 2, 0);
            this.triangleNode.setContentSize(distanceToRear, 200);
            this.triangleNode.position = cc.v3((this.BlockWidth - distanceToRear) / 2, -100);
            this.triangleNode.angle = 180;

            this.squareRotate.angle = 270 + Math.atan(distanceToRear / 200) * 180 / Math.PI;
            this.squareRotate.position = this.triangleNode.position.clone();

            this.triangleNode.position = this.triangleNode.position.addSelf(cc.v3(10, -10));

            cc.tween(this.triangleNode).to(0.5, {position: this.triangleNode.position.addSelf(cc.v3(20, -40)), angle: 180 - 5 - Math.random() * 5}).start();
        }
        else
        {
            this.squareRear.position = cc.v3(distanceToRear / 2, 0);
            this.triangleNode.setContentSize(200, distanceToRear);
            this.triangleNode.position = cc.v3(-(this.BlockWidth - distanceToRear) / 2, -100);
            this.triangleNode.angle = 270;

            this.squareRotate.angle = 90 - Math.atan(distanceToRear / 200) * 180 / Math.PI;
            this.squareRotate.position = this.triangleNode.position.clone();

            this.triangleNode.position = this.triangleNode.position.addSelf(cc.v3(-10, -10));

            cc.tween(this.triangleNode).to(0.5, {position: this.triangleNode.position.addSelf(cc.v3(-20, -40)), angle: 270 + 5 + Math.random() * 5}).start();
        }
    }
    //#endregion BREAK EDGE
}

export enum BlockMoveType
{
    Static = 0,
    Rotate_Right = 1,
    Rotate_Left = 2,
    Move_Right = 3,
    Move_Left = 4,
    Swing = 5, // lắc, đung đưa
}