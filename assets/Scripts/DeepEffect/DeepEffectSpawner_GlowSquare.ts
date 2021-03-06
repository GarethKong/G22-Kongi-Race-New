// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SimplePool from "../Ultilities/SimplePool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DeepEffectSpawner_GlowSquare extends cc.Component
{
    private velocityValue: number = 240;
    public SetState(directionIndex: number, flyTime: number)
    {
        this.flyTimer = flyTime;
        let directionAngle: number = Math.PI / 8 * (directionIndex + 1);
        this.velocity = cc.v3(-this.velocityValue * Math.cos(directionAngle), this.velocityValue * Math.sin(directionAngle), 0);

        this.node.position = this.velocity.mul(this.flyTimer);
        this.node.opacity = Math.max(this.node.position.y - 100, 0) * 0.3;
        this.node.scale = 0.5 + this.flyTimer / 3;

    }

    private flyTimer: number = 0;

    private velocity: cc.Vec3;
    protected update(dt: number): void
    {
        this.flyTimer += dt;
        this.node.position = this.node.position.addSelf(this.velocity.mul(dt));
        this.node.opacity = Math.max(this.node.position.y - 100, 0) * 0.3;
        this.node.scale = 0.5 + this.flyTimer / 3;
        if (this.flyTimer > 3)
        {
            SimplePool.instance.Despawn(this.node);
        }
    }
}