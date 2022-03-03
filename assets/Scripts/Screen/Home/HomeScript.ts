import DatabaseManager from "../../Common/DatabaseManager";
import SoundManager from "../../Ultilities/SoundManager";
import ScreenManager, {ScreenConfig} from "../../Common/ScreenManager";
import GameState from "../../Common/GameState";
const {ccclass, property} = cc._decorator;

@ccclass
export default class HomeScript extends cc.Component {
    @property(cc.Button)
    private btnPlay: cc.Button = null;

    @property(cc.Button)
    private btnSound: cc.Button = null;

    @property(cc.Button)
    private btnRanking: cc.Button = null;

    @property(cc.Button)
    private btnShop: cc.Button = null;

    @property(cc.Label)
    private lblBestScore: cc.Label = null;

    @property(cc.Label)
    private lblTotalStars: cc.Label = null;

    @property([cc.SpriteFrame])
    spList: cc.SpriteFrame[] = [];

    static instance: HomeScript;
    isSoundChanged: boolean = false;


    onLoad() {
        HomeScript.instance = this;
        this.btnPlay.node.on('click', this.onBtnPlay, this);
        this.btnSound.node.on('click', this.onSoundBtnClick, this);
        this.btnRanking.node.on('click', this.onBtnRanking, this);
        this.btnShop.node.on('click', this.onBtnShop, this);
    }

    onEnable() {
        this.lblBestScore.string = "BEST: " + DatabaseManager.getBestScore();
        this.lblTotalStars.string = DatabaseManager.getTotalCoin() + "";
    }

    onDisable() {
    }

    start() {
    }

    onBtnPlay(): void {
        SoundManager.Instance.PlayButtonSound();
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Game);
    }

    onBtnSetting(): void {

    }

    onBtnRanking(): void {

    }

    onSoundBtnClick() {
        SoundManager.Instance.PlayButtonSound();
        GameState.isSoundOn = !GameState.isSoundOn;
        this.isSoundChanged = true;
        // console.log(MainGame._ins.camera.parent.name)
        this.soundUpdate();
    }

    soundUpdate () {
        let sd = GameState.isSoundOn? 0 : 1;
        this.btnSound.node.getComponent(cc.Sprite).spriteFrame = this.spList[sd];

        if (this.isSoundChanged) {
            if (GameState.isSoundOn) {
                SoundManager.Instance.PlayBackgroundMusic();
            } else {
                SoundManager.Instance.PauseBackgroundMusic();
            }
            this.isSoundChanged = false;
        }
    }

    onBtnShop(): void {
        SoundManager.Instance.PlayButtonSound();
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Shop);
    }
}
