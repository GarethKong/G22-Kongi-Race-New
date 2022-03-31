import GameState from "./GameState";
import FBGlobal from "../facebook/FBGlobal";
import GameConfig, {BuildType} from "../Config/GameConfig";
import ccclass = cc._decorator.ccclass;
import GameManager from "../Gameplay/GameManager";
import CustomEventManager from "../Ultilities/CustomEventManager";
import HomeScript from "../Screen/Home/HomeScript";

@ccclass
export default class DatabaseManager {

    static lastScore = 0;
    static bestScore = 0;
    static totalCoin = 0;
    static numberPlayed = 0;

    //Array of current skins index 0 is what character selected, 21 next item is status of current
    //Size skin is 22
    static skin = [];

    static savePlayerData(): void {
        let data = {
            lastScore: this.lastScore,
            bestScore: this.bestScore,
            totalCoin: this.totalCoin,
            skin: this.skin,
            numberPlayed: this.numberPlayed,
        };

        let dataString = JSON.stringify(data);
        console.log("KongiRace_PlayerData-savePlayerData:" + dataString);
        cc.sys.localStorage.setItem("KongiRace_PlayerData", dataString);
        FBGlobal.instance.saveFBData(dataString);
    }

    static loadPlayerData(callback): void {
        let self = this;
        // let dataString = null;
        // dataString = cc.sys.localStorage.getItem("KongiRace_PlayerData");
        if (GameConfig.BUILD_TYPE == BuildType.LOCAL) {
            this.resetPlayerData();
            callback();
        } else {
            FBGlobal.instance.getFBScore(function (objectJson) {
                console.log("Parse local data" + objectJson);
                self.initPlayerData(objectJson);
                callback();
            });
        }
    }

    static initPlayerData(dataString) {
        if (dataString != null && dataString != "{}" && typeof (dataString) == "string" && dataString.length > 0) {
            console.log("KongiRace_PlayerData-loadPlayerData:" + dataString);
            this.parseDataLocal(dataString);
        } else {
            console.log("KongiRace_PlayerData-loadPlayerData-NoDataReset");
            this.resetPlayerData();
        }
    }

    static parseDataLocal(dataString: string): void {
        let converted = JSON.parse(dataString);
        let lastScore = converted['lastScore'];
        if (lastScore != null) {
            this.lastScore = lastScore;
        } else {
            this.lastScore = 0;
        }
        let bestScore = converted['bestScore'];
        if (bestScore != null) {
            this.bestScore = bestScore;
        } else {
            this.bestScore = 0;
        }
        console.log("Check best score" + bestScore);

        let skin = converted['skin'];
        if (skin != null) {
            this.skin = skin;
        } else {
            this.initSkinShop();
        }
        let totalCoin = converted['totalCoin'];
        if (totalCoin != null) {
            this.totalCoin = totalCoin;
        } else {
            this.totalCoin = 0;
        }
        let numberPlayed = converted['numberPlayed'];
        if (numberPlayed != null) {
            this.numberPlayed = numberPlayed;
        } else {
            this.numberPlayed = 0;
        }
    }

    static initSkinShop() {
        this.skin = [];
        //Selection 1, active 1, 20 in-active
        this.skin.push(1);
        this.skin.push(1);
        for (let i = 0; i < GameConfig.TOTAL_ITEM_SHOP - 1; i++) {
            this.skin.push(0);
        }
    }

    static resetPlayerData(): void {
        this.bestScore = 0;
        this.numberPlayed = 0;
        this.totalCoin = 0;
        this.initSkinShop();
        this.savePlayerData();
    }

    static saveScore() {
        let score = GameManager.Instance.CurrentScore;
        if (score > this.bestScore) {
            this.setBestScore(score);
            FBGlobal.instance.postSessionScore(this.bestScore);
        }
        this.setLastScore(score);
        CustomEventManager.Instance.PostEvent(CustomEventManager.Instance.UpdateScoreEvent);
    }

    static setLastScore(score: number) {
        cc.sys.localStorage.setItem('lastScore', score);
        this.savePlayerData();
    }

    static getLastScore() {
        let lastScore = cc.sys.localStorage.getItem('lastScore');
        if (lastScore) {
            return lastScore;
        } else {
            return 0;
        }
    }

    private static setBestScore(score: number) {
        this.bestScore = score;
        this.savePlayerData();
    }

    static getBestScore(): number {
        return this.bestScore;
    }

    static addMoreCoin(num): void {
        this.totalCoin = this.totalCoin + num;
        this.savePlayerData();
        CustomEventManager.Instance.PostEvent(CustomEventManager.Instance.UpdateCoinEvent);
    }

    static getTotalCoin(): number {
        return this.totalCoin;
    }

    static setTotalTimePlayed(num: number) {
        this.numberPlayed = Number(cc.sys.localStorage.getItem('numberPlayed')) + num;
        cc.sys.localStorage.setItem('numberPlayed', this.numberPlayed);
        this.savePlayerData();
    }

    static getTotalTimePlayed(): number {
        return this.numberPlayed;
    }

    static setSkin(value) {
        this.skin[0] = value;
        this.skin[value] = 1;
        this.savePlayerData();
    }

    static getSkin() {
        return this.skin;
    }

}