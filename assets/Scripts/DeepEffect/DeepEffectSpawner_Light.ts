import SimplePool from "../Ultilities/SimplePool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DeepEffectSpawner_Light extends cc.Component
{
    private velocityValue: number = 500;
    public SetState(directionIndex: number, flyTime: number)
    {
        this.flyTimer = flyTime;
        let directionAngle: number = 30 + 15 * directionIndex;

        let directionAngleInRadian: number = cc.misc.degreesToRadians(directionAngle);
        this.velocity = cc.v3(-this.velocityValue * Math.cos(directionAngleInRadian), this.velocityValue * Math.sin(directionAngleInRadian), 0);

        this.node.position = this.velocity.mul(this.flyTimer);
        this.node.opacity = Math.max(this.node.position.y - 100, 0) * 0.3;

        this.node.angle = -directionAngle;
    }

    private flyTimer: number = 0;

    private velocity: cc.Vec3;
    protected update(dt: number): void
    {
        this.flyTimer += dt;
        this.node.position = this.node.position.addSelf(this.velocity.mul(dt));
        this.node.opacity = Math.max(this.node.position.y - 100, 0) * 0.3;
        if (this.flyTimer > 3)
        {
            SimplePool.instance.Despawn(this.node);
        }
    }
}