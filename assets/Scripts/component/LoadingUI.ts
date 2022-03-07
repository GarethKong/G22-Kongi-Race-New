// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameConfig from "../Config/GameConfig";
import ProgressBarEx from "./ProgressBarEx";
import WatchAdsReviveDlg from "../Popup/WatchAdsReviveDlg";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingUI extends cc.Component {

    @property(cc.Node)
    progressBar: cc.Node = null;

    @property(cc.Label)
    lblTime: cc.Label = null;

    numberCurrentCombo = 0;

    totalTime: number = 0;

    originalTime: number = 0;

    countTimeCb: any;


    static _ins: LoadingUI;

    static get instance(): LoadingUI {
        return this._ins || new LoadingUI;
    }

    onLoad() {
        LoadingUI._ins = this;

        this.totalTime = GameConfig.REVIVE_COUNT_DOWN;
        this.originalTime = 1000;
        this.updateTimeLabel(6);
    }

    resetTimer() {
        this.totalTime = GameConfig.REVIVE_COUNT_DOWN;
        this.originalTime = 1000;
    }

    start() {
    }

    startTimer() {
        // this.unschedule(this.countTimeCb);
        // console.log("Start timer")
        // // Time interval in units of seconds
        // let self = this;
        // // Time of repetition
        // var repeat = 1;
        // // Start delay
        // var delay = 1;
        // this.countTimeCb = function () {
        //     if (self.totalTime === 0) {
        //         // Cancel this timer at the sixth call-back
        //         this.unschedule(self.countTimeCb);
        //         //Show Game over time out
        //         self.updateTimeLabel(self.totalTime);
        //         self.gameOverHandle();
        //         return;
        //     }
        //     self.updateTimeLabel(self.totalTime);
        //     self.totalTime--;
        // }
        // this.schedule(this.countTimeCb, 1, self.originalTime);
        this.progressBar.getComponent(ProgressBarEx).setToFull();
    }


    gameOverHandle() {
        //   GameManager._ins.gameOver(TypeOver.GAMEOVER);
        WatchAdsReviveDlg.Instance.NoThanks();
    }

    updateTimeLabel(time) {
        //this.lblTime.string =Common.secondsToDhms(time);
        this.lblTime.string = time + "";
    }
}
