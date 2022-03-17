import DatabaseManager from "../../Common/DatabaseManager";
import SoundManager from "../../Ultilities/SoundManager";
import ScreenManager, {ScreenConfig} from "../../Common/ScreenManager";
import GameState from "../../Common/GameState";
import CustomEventManager from "../../Ultilities/CustomEventManager";
import GameManager from "../../Gameplay/GameManager";
import ShopScript from "../Shop/ShopScript";

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
        GameManager.Instance.showStatusBar(false);
        this.btnPlay.node.on('click', this.onBtnPlay, this);
        this.btnSound.node.on('click', this.onSoundBtnClick, this);
        this.btnRanking.node.on('click', this.onBtnRanking, this);
        this.btnShop.node.on('click', this.onBtnShop, this);
        CustomEventManager.Instance.node.on(CustomEventManager.Instance.UpdateScoreEvent, this.loadData, this);
        CustomEventManager.Instance.node.on(CustomEventManager.Instance.UpdateCoinEvent, this.loadData, this);
    }

    loadData(){
        console.log("Binh check data 1" + DatabaseManager.getBestScore());
        this.lblBestScore.string = "BEST: " + DatabaseManager.getBestScore();
        this.lblTotalStars.string = DatabaseManager.getTotalCoin() + "";
    }

    onEnable(){

    }


    onDisable() {
    }

    start() {
    }

    onBtnPlay(): void {
        if(GameManager.Instance.ReadyForPlaying == false) return;
        SoundManager.Instance.PlayButtonSound();
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Game);
        GameManager.Instance.StartNewGame();
        GameManager.Instance.showStatusBar(true);
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

    soundUpdate() {
        let sd = GameState.isSoundOn ? 0 : 1;
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
        ShopScript._ins.loadData();
    }
}
