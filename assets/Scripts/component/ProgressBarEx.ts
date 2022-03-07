// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import LoadingUI from "./LoadingUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ProgressBarEx extends cc.Component {

    @property(cc.ProgressBar)
    bar: cc.ProgressBar = null;

    _from: number = 0;
    _to: number = 0;
    _duration: number = 0;
    _elapsed: number = 0;

    _percent: number = 0;

    _tween: cc.Tween = null;

    public timeRemaining = 6;
    public timerIsRunning = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // enabled：是否每帧执行该组件的 update 方法，同时也用来控制渲染组件是否显示
        //this.enabled = false;
    }

    isDone() {
        return this._elapsed >= this._duration;
    }

    progressTo(duration: number, percent: number) {
        if (percent < 0 || percent > 1.0) {
            return;
        }

        this.action(duration, percent);
        //this.tween(duration, percent);
    }

    tween(duration: number, percent: number) {
        if (this._tween) {
            this._tween.stop();
        }

        this._tween = cc.tween(this.bar).to(duration, {progress: percent})
            .call(() => {
                this._tween = null;
                //ComboUI._ins.resetComboToOne();
            })
            .start();
    }

    startComboRoll() {
        this.progressTo(6, 0);
    }


    setToFull() {
        this.bar.progress = 1;
        this.progressTo(6, 0);
        this.timerIsRunning = true;
    }

    action(duration: number, percent: number) {
        this._from = this.bar.progress;
        this._to = percent;
        this._elapsed = 0;
        this._duration = duration;
        this.enabled = true;
    }

    update(dt) {
        if (this.isDone()) {
            this.enabled = false;
            return;
        }

        this._elapsed += dt;

        let t = this._elapsed / (this._duration > 0.0000001192092896 ? this._duration : 0.0000001192092896);
        t = (1 > t ? t : 1);
        this.step(t > 0 ? t : 0);

        if (this.timerIsRunning) {
            if (this.timeRemaining > 0) {
                this.timeRemaining -= dt;
                this.displayTime(this.timeRemaining);
            } else {
                this.timeRemaining = 0;
                this.timerIsRunning = false;
            }
        }
    }

    step(dt) {
        let percent = this._from + (this._to - this._from) * dt;
        if (this._percent != percent) {
            // this._percent = cc.misc.clampf(progress, 0, 1);
            this._percent = cc.misc.clamp01(percent);
            this.bar.progress = this._percent;
        }
        if (percent == 0) {
            LoadingUI._ins.gameOverHandle();
        }
    }

    displayTime(timeToDisplay: number) {
        timeToDisplay += 1;
        let seconds = Math.floor(timeToDisplay % 60);
        LoadingUI._ins.updateTimeLabel(seconds);
    }
}