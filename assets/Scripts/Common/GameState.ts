import ccclass = cc._decorator.ccclass;

@ccclass
export default class GameState extends cc.Component {
    static isPauseGame = false;
    static isShakeOn = false;
    static isRevived = false;
    static currentScore = 0;
    static isVibrateOn = false;
}