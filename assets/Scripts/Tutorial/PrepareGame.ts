// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CustomEventManager from "../Ultilities/CustomEventManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PrepareGame extends cc.Component
{
    @property(cc.Node)
    private tapText: cc.Node = null;
    @property(cc.Node)
    private arrowEffect: cc.Node = null;
    protected start(): void
    {
        CustomEventManager.Instance.node.on(CustomEventManager.Instance.NewGameEvent, this.ShowPrepareGame, this);
        CustomEventManager.Instance.node.on(CustomEventManager.Instance.StartGameEvent, this.HidePrepareGame, this);
    }

    private ShowPrepareGame(): void
    {
        this.tapText.active = true;
        this.arrowEffect.active = true;
    }

    private HidePrepareGame(): void
    {
        this.tapText.active = false;
        this.arrowEffect.active = false;
    }
}
