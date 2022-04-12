// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SimplePool from "../Ultilities/SimplePool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ArrowDownPrepare extends cc.Component
{
    private velocityValue: number = 100;
    public SetState(flyTime: number)
    {
        this.flyTimer = flyTime;

        this.node.position = cc.v3(0, -this.velocityValue * this.flyTimer);
        this.node.opacity = 256 + this.node.position.y;
    }

    private flyTimer: number = 0;

    protected update(dt: number): void
    {
        this.flyTimer += dt;
        this.node.position = this.node.position.addSelf(cc.v3(0, -this.velocityValue * dt));
        this.node.opacity = 256 + this.node.position.y;
        if (this.flyTimer > 3)
        {
            SimplePool.instance.Despawn(this.node);
        }
    }
}