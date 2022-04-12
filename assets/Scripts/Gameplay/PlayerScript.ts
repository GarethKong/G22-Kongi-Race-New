// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundManager from "../Ultilities/SoundManager";
import BlockScript from "./BlockScript";
import GameManager from "./GameManager";
import GameDataConfig from "./SpawnDataConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerScript extends cc.Component
{
    @property
    private Radius: number = 0;
    @property
    private MaxRotateAngle: number = 0; // player có rotate khi đập xuống các mặt 

    @property(cc.Sprite)
    public BodySprite: cc.Sprite = null;
    //#region MOVE + ROTATE 

    private IsLanding: boolean = false;
    private Velocity: cc.Vec3 = cc.Vec3.ZERO;
    private Gravity: number = 0;
    private AngularVelocity: number = 0;

    private punchScale: cc.Vec3 = cc.v3(0.4, 0.6); // scale khi nhân vật nhún hạ đất
    private normalScale: number = 0.5; // scale lúc trạng thái bình thường
    protected update(dt: number): void
    {
        if (GameManager.Instance.IsStarted == false) return;
        if (this.IsLanding) return;
        // if(GameManager.Instance.IsPauseGame) return;
        this.node.angle = cc.misc.clampf(this.node.angle + this.AngularVelocity * dt * GameManager.Instance.TimeScale, -10, 10);
        this.Velocity.y = cc.misc.clampf(this.Velocity.y - this.Gravity * dt * GameManager.Instance.TimeScale,
            -GameManager.Instance.MaxFallingVelocity, GameManager.Instance.JumpUpVelocity);

        if (this.Velocity.y < -0.5 * GameManager.Instance.MaxFallingVelocity)
        {
            if (this.isDefaultCharacter)
            {
                this.BodySprite.spriteFrame = this.handUpSpriteFrame;
            }
        }

        this.node.position = this.node.position.addSelf(this.Velocity.mul(dt * GameManager.Instance.TimeScale));

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
        this.AngularVelocity = pushUpAngle * 3;

        this.scheduleOnce(() =>
        {
            if (this.isDefaultCharacter)
            {
                this.BodySprite.spriteFrame = this.handDownSpriteFrame;
            }
        }, 0.1);
    }

    /**
     * Player lao xuống
     */
    public Landing(): void
    {
        GameManager.Instance.TimeScale = 1;
        this.IsLanding = true;
        this.node.setScale(this.punchScale);

        if (this.isDefaultCharacter)
        {
            this.BodySprite.spriteFrame = this.handUpSpriteFrame;
        }

        let cosBlockAngle: number = Math.cos(GameManager.Instance.BlockList[0].node.angle * Math.PI / 180);

        if (Math.abs(this.node.x - GameManager.Instance.BlockList[0].node.x) >
            (GameManager.Instance.BlockList[0].BlockWidth / 2 + 30) * cosBlockAngle)
        {
            // DEAD
            GameManager.Instance.DisableTapNode();

            GameManager.Instance.IsPauseGame = true;

            GameManager.Instance.BlockList[0].WaitForLanding = true;

            cc.tween(this.node).to(0.17, {position: cc.v3(this.node.x, -1000)})
                .call(() =>
                {
                    console.log("SHOW GAMEOVER PLAYERSCRIPT")
                    this.scheduleOnce(() => {GameManager.Instance.ShowGameOver();}, 0.5);
                    SoundManager.Instance.PlayGameOverSound();
                })
                .start();
        }
        else
        {
            // ALIVE
            let hitPosition: cc.Vec3;
            if (Math.abs(this.node.x - GameManager.Instance.BlockList[0].node.x) >
                (GameManager.Instance.BlockList[0].BlockWidth / 2) * cosBlockAngle)
            {
                if (this.node.x > GameManager.Instance.BlockList[0].node.x)
                {
                    hitPosition = this.GetCollistionPos((GameManager.Instance.BlockList[0].BlockWidth / 2) * cosBlockAngle + GameManager.Instance.BlockList[0].node.x - 5);
                }
                else
                {
                    hitPosition = this.GetCollistionPos(-(GameManager.Instance.BlockList[0].BlockWidth / 2) * cosBlockAngle + GameManager.Instance.BlockList[0].node.x + 5);
                }
            }
            else
            {
                hitPosition = this.GetCollistionPos(this.node.x);
            }

            GameManager.Instance.SpawnTailEffect(this.node.position);
            GameManager.Instance.SpawnTopEffect(GameManager.Instance.BlockList[0].node.position, GameManager.Instance.BlockList[0].node.angle, GameManager.Instance.BlockList[0].BlockWidth);
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
        this.IsLanding = false;
        this.node.scale = this.normalScale;
        this.node.angle = 0;

        if (this.isDefaultCharacter)
        {
            this.BodySprite.spriteFrame = this.handDownSpriteFrame;
        }
    }

    public ResetAfterRevive(): void
    {
        this.Velocity = cc.Vec3.ZERO;
        this.node.position = cc.v3(GameManager.Instance.BlockList[0].node.x, 300, 0);
        this.Gravity = 0;
        this.IsLanding = false;
        this.node.scale = this.normalScale;
        this.node.angle = 0;

        if (this.isDefaultCharacter)
        {
            this.BodySprite.spriteFrame = this.handDownSpriteFrame;
        }
    }

    //#region TÍNH GIAO ĐIỂM CỦA PLAYER VÀ CURRENT BLOCK
    private GetCollistionPos(playerPosX: number): cc.Vec3
    {
        let collistionY: number;
        // phương trình đường thẳng của mặt trên block là: y = ax + c
        let a: number = Math.tan(Math.PI / 180 * (GameManager.Instance.BlockList[0].node.angle));
        // let b: number = -1;
        let c: number = -Math.tan(Math.PI / 180 * (GameManager.Instance.BlockList[0].node.angle)) * GameManager.Instance.BlockList[0].node.x + GameManager.Instance.BlockList[0].node.y;

        collistionY = a * playerPosX + c;
        return cc.v3(playerPosX, collistionY);
    }
    //#endregion TÍNH GIAO ĐIỂM CỦA PLAYER VÀ CURRENT BLOCK

    //#region ANIMATION KONGI
    private isDefaultCharacter: boolean = true;
    @property(cc.SpriteFrame)
    private handUpSpriteFrame: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private handDownSpriteFrame: cc.SpriteFrame = null;
    public SetCharacter(isDefaultCharacter: boolean): void
    {
        this.isDefaultCharacter = isDefaultCharacter;
    }
    //#endregion ANIMATION KONGI
}