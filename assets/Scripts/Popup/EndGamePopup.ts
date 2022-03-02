// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../Gameplay/GameManager";
import DialogManager from "../Common/DialogManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EndGamePopup extends cc.Component {

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Button)
    btnTryAgain: cc.Button = null;

    @property(cc.Button)
    btnContinues: cc.Button = null;

    start(): void {
        this.btnTryAgain.node.on('click', this.TryAgain, this);
        this.btnContinues.node.on('click', this.Continues, this);
    }

    private TryAgain(): void {
        DialogManager._ins.removeDlg(this.node);
        GameManager.Instance.StartNewGame();
    }

    private Continues(): void {
        DialogManager._ins.removeDlg(this.node);
        GameManager.Instance.StartNewGame();
    }

    public ShowEndGamePopup(): void {
        this.node.active = true;
        this.scoreLabel.string = GameManager.Instance.CurrentScore.toString();
    }
}
