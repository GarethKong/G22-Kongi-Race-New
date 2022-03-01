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

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlockScript extends cc.Component
{
    private BlockWidth: number = 0;
    @property
    private BlockHeight: number = 0;
    @property(cc.Node)
    private mistBefore: cc.Node = null;
    @property(cc.Node)
    private CenterNode: cc.Node = null;

    private YOffset: number = 0;

    private IsActiveForCollision: boolean = false;



    protected update(dt: number): void
    {
        this.node.position = this.node.position.addSelf(this.Velocity.mul(dt));

        if (this.node.position.y < -1500) SimplePool.instance.Despawn(this.node);
        if (this.IsActiveForCollision == false) return;

        if (this.SqrDistanceFromTargetToHorizontalLine(GameManager.Instance.KongiNode.node) <= Math.pow(GameManager.Instance.KongiRadius + this.BlockHeight * 0.5, 2))
        {
            if (this.SqrDistanceFromTargetToVerticalLine(GameManager.Instance.KongiNode.node) <= Math.pow(GameManager.Instance.KongiRadius + this.BlockWidth * 0.5 + 30, 2))
            {
                GameManager.Instance.SetNextBlock();
                GameManager.Instance.PushUpKongi(this.node.angle);
                this.MoveDownWhenHitPlayer();
                SoundManager.Instance.PlayHitSound();
            }
            else
            {
                this.scheduleOnce(() => {GameManager.Instance.ShowGameOver();}, 0.5);
                SoundManager.Instance.PlayGameOverSound();

                // let distanceHorizontal = this.SqrDistanceFromTargetToHorizontalLine(GameManager.Instance.KongiNode.node);
                // let distanceVertical = this.SqrDistanceFromTargetToVerticalLine(GameManager.Instance.KongiNode.node);
                // this.node.color = cc.Color.GREEN;
                // console.log(this.node.position);
                // console.log("horizontal: " + distanceHorizontal);
                // console.log("vertical: " + distanceVertical);
                // console.log("Width: " + this.BlockWidth);
                // console.log("Kongi Radius: " + GameManager.Instance.KongiRadius);
                // console.log(GameManager.Instance.KongiNode.node.position);
                // cc.game.pause();
            }
            this.IsActiveForCollision = false;
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

    private ColorIndex: number = 0;
    public ChangeStateToNextIndex(changeDuration: number): void
    {
        // chuyển màu về gần với màu gốc
        if (this.ColorIndex > 0)
        {
            this.ColorIndex--;
            cc.tween(this.node).to(changeDuration, {
                color: GameManager.Instance.ColorList[this.ColorIndex]
                , scale: GameManager.Instance.ScaleList[this.ColorIndex]
            }).start();
            cc.tween(this.node).by(changeDuration, {position: cc.v3(0, this.YOffset, 0)}).start();
        }
    }

    //#region INIT BLOCK
    public SetBlockInfo(blockWidth: number, startAngle: number, moveType: BlockMoveType, position: cc.Vec3, colorIndex: number, yOffset: number): void
    {
        console.log(colorIndex);
        this.node.position = position;
        this.BlockWidth = blockWidth;
        this.node.width = blockWidth;
        this.node.angle = startAngle;
        this.mistBefore.width = blockWidth;
        this.YOffset = yOffset;

        this.ColorIndex = colorIndex;
        this.node.color = GameManager.Instance.ColorList[this.ColorIndex];
        this.node.scale = GameManager.Instance.ScaleList[this.ColorIndex];

        this.Velocity = cc.Vec3.ZERO; // tùy move type
        this.IsActiveForCollision = false;

    }
    //#endregion INIT BLOCK

    //#region MOVE BLOCK
    private Velocity: cc.Vec3 = cc.Vec3.ZERO;
    private MoveDownWhenHitPlayer(): void
    {
        this.Velocity = cc.v3(0, -1000);
    }

    public OnGameOver(): void
    {
        let angleInRadian = this.node.angle * Math.PI / 180;
        this.Velocity = cc.v3(4000 * Math.sin(angleInRadian), -4000 * Math.cos(angleInRadian));
    }
    //#endregion  MOVE BLOCK

    //#region CHECK COLLSION
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
}

export enum BlockMoveType
{
    Static = 0,
    Rotate = 1,
    MoveHorizontal = 2,
    MoveFollowEdge = 3,
}