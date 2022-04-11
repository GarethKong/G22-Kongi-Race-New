// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class DeepEffectSpawner_HorizontalLine extends cc.Component
{
    @property
    private lineIndex: number = 0;

    private timeBetweenLine: number = 0.25;
    private intialVelocity: number = 250;
    private accelerator: number = 120;

    private currentVelocity: number = 0;
    private currentTimer: number = 0;
    protected onEnable(): void
    {
        this.node.opacity = 20;
        this.currentTimer = this.lineIndex * this.timeBetweenLine;
        this.currentVelocity = this.intialVelocity + this.currentTimer * this.accelerator;
        this.node.position = cc.v3(0, this.intialVelocity * this.currentTimer + this.accelerator * 0.5 * this.currentTimer * this.currentTimer, 0);
    }

    protected update(dt: number): void
    {
        this.currentTimer += dt;
        if (this.currentTimer >= 6 * this.timeBetweenLine)
        {
            this.node.opacity = 20;
            this.currentTimer = 0;
            this.currentVelocity = this.intialVelocity;
            this.node.position = cc.v3(0, 0, 0);
        }
        else
        {
            this.node.opacity += 20 * dt;
            this.currentVelocity += this.accelerator * dt;
            this.node.position = this.node.position.addSelf(cc.v3(0, this.currentVelocity * dt, 0));
        }
    }
}