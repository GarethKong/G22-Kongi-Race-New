// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../Gameplay/GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EndGamePopup extends cc.Component
{
    @property(cc.Node)
    private tryAgainButton: cc.Node = null;
    @property(cc.Label)
    private scoreLabel: cc.Label = null;

    protected start(): void
    {
        this.tryAgainButton.on('click', this.TryAgain, this);
        this.node.active = false;
    }

    private TryAgain(): void
    {
        GameManager.Instance.StartNewGame();
        this.node.active = false;
    }

    public ShowEndGamePopup(): void
    {
        this.node.active = true;
        this.scoreLabel.string = GameManager.Instance.CurrentScore.toString();
    }
}
