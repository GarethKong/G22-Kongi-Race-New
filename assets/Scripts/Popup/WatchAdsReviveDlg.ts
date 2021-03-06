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
import SoundManager from "../Ultilities/SoundManager";
import FBGlobal from "../facebook/FBGlobal";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WatchAdsReviveDlg extends cc.Component {

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Button)
    btnNoThanks: cc.Button = null;

    @property(cc.Button)
    btnContinues: cc.Button = null;

    public static Instance: WatchAdsReviveDlg;

    protected onLoad(): void {
        WatchAdsReviveDlg.Instance = this;
    }

    start(): void {
        this.btnNoThanks.node.on('click', this.NoThanks, this);
        this.btnContinues.node.on('click', this.Continues, this);
        this.scoreLabel.string = GameManager.Instance.CurrentScore.toString();
        LoadingUI._ins.startTimer();
    }

    public NoThanks(): void {
        console.log("Load ads revive fail1");
        DialogManager._ins.removeDlg(this.node);
        ScreenManager.instance.onShowScreenByName(ScreenConfig.EndGame);
        EndGameScript.instance.loadData();
        console.log("Load ads revive fail2");
    }

    private Continues(): void {
        SoundManager.Instance.PlayButtonSound();
        LoadingUI._ins.setToDone();
        let _this = this;
        let AVSuccessCb = function (arg) {
            console.log("Load ads revive success" + _this.node);
            DialogManager._ins.removeDlg(_this.node);
            GameManager.Instance.Revive();
            GameManager.Instance.showStatusBar(true);
        };
        let AVFailedCb = function (arg) {
            console.log("Load ads revive fail");
            _this.NoThanks();
        };
        FBGlobal.instance.showAdsVideo(AVSuccessCb.bind(this), AVFailedCb.bind(this), null);
    }

    public ShowEndGamePopup(): void {
        // this.node.active = true;
        // this.scoreLabel.string = GameManager.Instance.CurrentScore.toString();
    }
}
