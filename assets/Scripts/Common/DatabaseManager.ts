import GameState from "./GameState";
import ccclass = cc._decorator.ccclass;
import FBGlobal from "../facebook/FBGlobal";

@ccclass
export default class DatabaseManager extends cc.Component {

    static lastScore = 0;
    static bestScore = 0;
    static totalCoin = 0;
    static numberPlayed = 0;
    static skin = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    static savePlayerData(): void {
        let data = {
            lastScore: this.lastScore,
            bestScore: this.bestScore,
            totalCoin: this.totalCoin,
            skin: this.skin,
            numberPlayed: this.numberPlayed,
        };

        let dataString = JSON.stringify(data);
        console.log("FlipperBall_PlayerData-savePlayerData:" + dataString);
        cc.sys.localStorage.setItem("FlipperBall_PlayerData", dataString);
    }

    static loadPlayerData(callback): void {
        let dataString = null;
        dataString = cc.sys.localStorage.getItem("FlipperBall_PlayerData");
        this.initPlayerData(dataString);
        FBGlobal.instance.getFBScore();
    }

    static initPlayerData(dataString) {
        if (dataString != null && dataString != "{}" && typeof (dataString) == "string" && dataString.length > 0) {
            console.log("FlipperBall_PlayerData-loadPlayerData:" + dataString);
            this.parseDataLocal(dataString);
        } else {
            console.log("FlipperBall_PlayerData-loadPlayerData-NoDataReset");
            this.resetPlayerData();
        }
    }

    static parseDataLocal(dataString: string): void {
        let data = JSON.parse(dataString);
        let lastScore = data.lastScore;
        if (lastScore != null) {
            this.lastScore = lastScore;
        } else {
            this.lastScore = 0;
        }
        let bestScore = data.bestScore;
        if (bestScore != null) {
            this.bestScore = bestScore;
        } else {
            this.bestScore = 0;
        }
        let skin = data.skin;
        if (skin != null) {
            this.skin = skin;
        } else {
            this.skin = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        let totalCoin = data.totalCoin;
        if (totalCoin != null) {
            this.totalCoin = totalCoin;
        } else {
            this.totalCoin = 0;
        }
        let numberPlayed = data.numberPlayed;
        if (numberPlayed != null) {
            this.numberPlayed = numberPlayed;
        } else {
            this.numberPlayed = 0;
        }
    }

    static resetPlayerData(): void {
        this.bestScore = 0;
        this.numberPlayed = 0;
        this.totalCoin = 0;
        this.savePlayerData();
    }

    static saveScore() {
        let score = GameState.currentScore;
        if (score > this.bestScore) {
            this.setBestScore(score);
        }
        this.setLastScore(score);
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

    static setBestScore(score: number) {
        this.bestScore = score;
        cc.sys.localStorage.setItem('bestScore', score);
        this.savePlayerData();
    }

    static getBestScore(): number {
        return this.bestScore;
    }

    static addMoreCoin(num): void {
        let currentCoin = Number(cc.sys.localStorage.getItem('numberTotalCoin')) + num;
        cc.sys.localStorage.setItem('numberTotalCoin', currentCoin);
        this.totalCoin = currentCoin;
        this.savePlayerData();
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

    static setSkin(skin_id, value) {
        this.skin[skin_id] = value;
        this.savePlayerData();
    }

    static getSkin() {
        return this.skin;
    }

}