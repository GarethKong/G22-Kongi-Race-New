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
    @property([cc.Node])
    private effectNodeList: cc.Node[] = [];
    private tweenList: cc.Tween[] = [];

    protected onEnable(): void
    {
        for (let i = 0; i < this.effectNodeList.length; i++)
        {
            this.effectNodeList[i].position = cc.v3(0, 80 * i);

            let tempTween: cc.Tween = cc.tween(this.effectNodeList[i])
                .repeatForever(
                    cc.tween(this.effectNodeList[i]).to(0.25, {position: cc.v3(0, 80 * (i + 1))}, {easing: 'linear'})
                        .call(() => 
                        {
                            this.effectNodeList[i].position = cc.v3(0, 80 * i);
                        })
                ).start();
            this.tweenList.push(tempTween);
        }
    }

    protected onDisable(): void
    {
        for (let i = 0; i < this.effectNodeList.length; i++)
        {
            this.tweenList[i].stop();
        }
    }
}