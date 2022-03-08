// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundManager from "../Ultilities/SoundManager";
import BlockScript from "./BlockScript";
import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerScript extends cc.Component
{
    @property
    private Radius: number = 0;
    @property
    private MaxRotateAngle: number = 0; // player có rotate khi đập xuống các mặt 
    //#region MOVE + ROTATE 

    private IsLanding: boolean = false;
    private Velocity: cc.Vec3 = cc.Vec3.ZERO;
    private Gravity: number = 0;
    private AngularVelocity: number = 0;

    private punchScale: cc.Vec3 = cc.v3(0.3, 0.5); // scale khi nhân vật nhún hạ đất
    private normalScale: number = 0.4; // scale lúc trạng thái bình thường
    protected update(dt: number): void
    {
        if (GameManager.Instance.IsStarted == false) return;
        if (this.IsLanding) return;
        // if(GameManager.Instance.IsPauseGame) return;
        this.node.angle = this.node.angle + this.AngularVelocity * dt;
        this.Velocity = this.Velocity.addSelf(cc.v3(0, -this.Gravity * dt));
        this.node.position = this.node.position.addSelf(this.Velocity.mul(dt));

        if (this.node.position.x < -GameManager.Instance.CanvasWidth / 2 + this.Radius || this.node.position.x > GameManager.Instance.CanvasWidth / 2 - this.Radius)
        {
            this.BounceWithWall();
        }
    }

    private BounceWithWall(): void
    {
        console.log("Bounce with wall");
        this.Velocity = cc.v3(-this.Velocity.x, this.Velocity.y);
        this.AngularVelocity = -this.AngularVelocity;
    }
    //#endregion MOVE + ROTATE
    /**
     * Nẩy player lên
     * @param pushUpAngle 
     * @param pushUpVelocity 
     */
    public Jump(pushUpAngle: number, pushUpVelocity: number, gravity: number): void
    {
        let pushUpAngleInRadian: number = pushUpAngle * Math.PI / 180;
        this.Velocity = cc.v3(pushUpVelocity * -Math.sin(2 * pushUpAngleInRadian), pushUpVelocity * Math.cos(2 * pushUpAngleInRadian));
        this.Gravity = gravity;
        this.AngularVelocity = pushUpAngle * 5;
    }

    /**
     * Player lao xuống
     */
    public Landing(): void
    {
        this.IsLanding = true;

        let hitPosition: cc.Vec3 = this.GetCollistionPos();

        this.node.setScale(this.punchScale);

        if (Math.abs(hitPosition.x - GameManager.Instance.BlockList[0].node.x) >
            GameManager.Instance.BlockList[0].BlockWidth / 2 * Math.cos(GameManager.Instance.BlockList[0].node.angle * Math.PI / 180))
        {
            // DEAD
            GameManager.Instance.IsPauseGame = true;

            cc.tween(this.node).to(0.17, {position: cc.v3(this.node.x, -1000)})
                .call(() =>
                {
                    this.scheduleOnce(() => {GameManager.Instance.ShowGameOver();}, 0.5);
                    SoundManager.Instance.PlayGameOverSound();
                })
                .start();
        }
        else
        {
            // ALIVE
            // if (Math.abs(this.node.position.y - hitPosition.y) < 50)
            // {
            //     this.node.position = hitPosition;
            //     this.LandOnBlock();
            // }
            // else
            // {
            //     cc.tween(this.node).to(0.04, {position: hitPosition})
            //         .call(() =>
            //         {
            //             this.LandOnBlock();
            //         })
            //         .start();
            // }

            this.node.position = hitPosition;
            this.LandOnBlock();
        }
    }

    private LandOnBlock()
    {
        this.IsLanding = false;
        GameManager.Instance.BlockList[0].CheckCollisionOnTopBlock();
        cc.tween(this.node).to(0.2, {scale: this.normalScale}).start();

    }

    public ResetNewGame(): void
    {
        this.Velocity = cc.Vec3.ZERO;
        this.node.position = cc.Vec3.ZERO;
        this.Gravity = 0;
    }

    public ResetAfterRevive(): void
    {
        this.Velocity = cc.Vec3.ZERO;
        this.node.position = cc.v3(0, 300, 0);
        this.Gravity = 0;
        this.IsLanding = false;
        this.node.scale = this.normalScale;
    }

    //#region TÍNH GIAO ĐIỂM CỦA PLAYER VÀ CURRENT BLOCK
    private GetCollistionPos(): cc.Vec3
    {
        let collistionY: number;
        // phương trình đường thẳng của mặt trên block là: y = ax + c
        let a: number = Math.tan(Math.PI / 180 * (GameManager.Instance.BlockList[0].node.angle));
        // let b: number = -1;
        let c: number = -Math.tan(Math.PI / 180 * (GameManager.Instance.BlockList[0].node.angle)) * GameManager.Instance.BlockList[0].node.x + GameManager.Instance.BlockList[0].node.y;

        collistionY = a * this.node.x + c;
        return cc.v3(this.node.x, collistionY);
    }
    //#endregion TÍNH GIAO ĐIỂM CỦA PLAYER VÀ CURRENT BLOCK
}