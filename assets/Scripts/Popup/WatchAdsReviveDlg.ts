// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../Gameplay/GameManager";
import DialogManager from "../Common/DialogManager";
import LoadingUI from "../component/LoadingUI";
import ScreenManager, {ScreenConfig} from "../Common/ScreenManager";
import EndGameScript from "../Screen/End/EndGameScript";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WatchAdsReviveDlg extends cc.Component {

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Button)
    btnNoThanks: cc.Button = null;

    @property(cc.Button)
    btnContinues: cc.Button = null;

    start(): void {
        this.btnNoThanks.node.on('click', this.NoThanks, this);
        this.btnContinues.node.on('click', this.Continues, this);
        LoadingUI._ins.startTimer();
    }

    private NoThanks(): void {
        DialogManager._ins.removeDlg(this.node);
        ScreenManager.instance.onShowScreenByName(ScreenConfig.EndGame);
        EndGameScript.instance.loadData();
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
