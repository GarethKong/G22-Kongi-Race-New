// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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

    private Velocity: cc.Vec3 = cc.Vec3.ZERO;
    private Gravity: number = 0;
    private AngularVelocity: number = 0;
    protected update(dt: number): void
    {
        // if(GameManager.Instance.IsPauseGame) return;
        this.Velocity = this.Velocity.addSelf(cc.v3(0, -this.Gravity * dt));
        this.node.position = this.node.position.addSelf(this.Velocity.mul(dt));

        if (this.node.position.x < -540 + this.Radius || this.node.position.x > 540 - this.Radius)
        {
            this.BounceWithWall();
        }
    }

    private BounceWithWall(): void
    {
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
    }

    /**
     * Player lao xuống
     */
    public Landing(): void
    {
        this.Velocity = cc.v3(0, -GameManager.Instance.LandingVelocity);
    }

    public ResetNewGame():void
    {
        this.Velocity = cc.Vec3.ZERO;
        this.node.position = cc.Vec3.ZERO;
        this.Gravity = 0;
    }
}