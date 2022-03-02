import DatabaseManager from "../../Common/DatabaseManager";
import SoundManager from "../../Ultilities/SoundManager";
import ScreenManager, {ScreenConfig} from "../../Common/ScreenManager";

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

    static instance: HomeScript;

    onLoad() {
        HomeScript.instance = this;
        this.btnPlay.node.on('click', this.onBtnPlay, this);
        this.btnSound.node.on('click', this.onBtnSetting, this);
        this.btnRanking.node.on('click', this.onBtnRanking, this);
        this.btnShop.node.on('click', this.onBtnShop, this);
        DatabaseManager.loadPlayerData(function () {
            console.log("Loaded facebook name+ avatar");
        });
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

    onBtnShop(): void {

    }
}
