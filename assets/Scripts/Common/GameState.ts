import ccclass = cc._decorator.ccclass;

@ccclass
export default class GameState  {
    static isPauseGame = false;
    static isSoundOn = true;
    static isRevived = false;
    static currentScore = 0;
    static isVibrateOn = false;
}