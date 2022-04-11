// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class DeepEffectSpawner_Triangle extends cc.Component
{
    @property([cc.Node])
    private effectNodeList: cc.Node[] = [];
    private tweenList: cc.Tween[] = [];

    protected onEnable(): void
    {
        for (let i = 0; i < this.effectNodeList.length; i++)
        {
            this.effectNodeList[i].scale = 0;
            this.effectNodeList[i].opacity = 128;

            this.scheduleOnce(() =>
            {
                let tempTween: cc.Tween = cc.tween(this.effectNodeList[i])
                    .repeatForever(
                        cc.tween(this.effectNodeList[i]).to(3, {scale: 2, opacity: 0}, {easing: 'linear'})
                            .call(() => 
                            {
                                this.effectNodeList[i].scale = 0;
                                this.effectNodeList[i].opacity = 128;
                            })
                    ).start();
                this.tweenList.push(tempTween);
            }, 3 * i / this.effectNodeList.length);
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
