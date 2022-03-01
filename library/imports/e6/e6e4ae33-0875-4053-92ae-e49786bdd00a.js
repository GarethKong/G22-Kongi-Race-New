"use strict";
cc._RF.push(module, 'e6e4a4zCHVAU5Ku5JeGvdAK', 'DatabaseManager');
// Scripts/Common/DatabaseManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameState_1 = require("./GameState");
var ccclass = cc._decorator.ccclass;
var DatabaseManager = /** @class */ (function (_super) {
    __extends(DatabaseManager, _super);
    function DatabaseManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatabaseManager.savePlayerData = function () {
        var data = {
            lastScore: this.lastScore,
            bestScore: this.bestScore,
            totalCoin: this.totalCoin,
            numberPlayed: this.numberPlayed,
        };
        var dataString = JSON.stringify(data);
        console.log("FlipperBall_PlayerData-savePlayerData:" + dataString);
        cc.sys.localStorage.setItem("FlipperBall_PlayerData", dataString);
    };
    DatabaseManager.loadPlayerData = function (callback) {
        var dataString = null;
        dataString = cc.sys.localStorage.getItem("FlipperBall_PlayerData");
        this.initPlayerData(dataString);
    };
    DatabaseManager.initPlayerData = function (dataString) {
        if (dataString != null && dataString != "{}" && typeof (dataString) == "string" && dataString.length > 0) {
            console.log("FlipperBall_PlayerData-loadPlayerData:" + dataString);
            this.parseDataLocal(dataString);
        }
        else {
            console.log("FlipperBall_PlayerData-loadPlayerData-NoDataReset");
            this.resetPlayerData();
        }
    };
    DatabaseManager.parseDataLocal = function (dataString) {
        var data = JSON.parse(dataString);
        var lastScore = data.lastScore;
        if (lastScore != null) {
            this.lastScore = lastScore;
        }
        else {
            this.lastScore = 0;
        }
        var bestScore = data.bestScore;
        if (bestScore != null) {
            this.bestScore = bestScore;
        }
        else {
            this.bestScore = 0;
        }
        var totalCoin = data.totalCoin;
        if (totalCoin != null) {
            this.totalCoin = totalCoin;
        }
        else {
            this.totalCoin = 0;
        }
        var numberPlayed = data.numberPlayed;
        if (numberPlayed != null) {
            this.numberPlayed = numberPlayed;
        }
        else {
            this.numberPlayed = 0;
        }
    };
    DatabaseManager.resetPlayerData = function () {
        this.bestScore = 0;
        this.numberPlayed = 0;
        this.totalCoin = 0;
        this.savePlayerData();
    };
    DatabaseManager.saveScore = function () {
        var score = GameState_1.default.currentScore;
        if (score > this.bestScore) {
            this.setBestScore(score);
        }
        this.setLastScore(score);
    };
    DatabaseManager.setLastScore = function (score) {
        cc.sys.localStorage.setItem('lastScore', score);
        this.savePlayerData();
    };
    DatabaseManager.getLastScore = function () {
        var lastScore = cc.sys.localStorage.getItem('lastScore');
        if (lastScore) {
            return lastScore;
        }
        else {
            return 0;
        }
    };
    DatabaseManager.setBestScore = function (score) {
        this.bestScore = score;
        cc.sys.localStorage.setItem('bestScore', score);
        this.savePlayerData();
    };
    DatabaseManager.getBestScore = function () {
        return this.bestScore;
    };
    DatabaseManager.addMoreCoin = function (num) {
        var currentCoin = Number(cc.sys.localStorage.getItem('numberTotalCoin')) + num;
        cc.sys.localStorage.setItem('numberTotalCoin', currentCoin);
        this.totalCoin = currentCoin;
        this.savePlayerData();
    };
    DatabaseManager.getTotalCoin = function () {
        return this.totalCoin;
    };
    DatabaseManager.setTotalTimePlayed = function (num) {
        this.numberPlayed = Number(cc.sys.localStorage.getItem('numberPlayed')) + num;
        cc.sys.localStorage.setItem('numberPlayed', this.numberPlayed);
        this.savePlayerData();
    };
    DatabaseManager.getTotalTimePlayed = function () {
        return this.numberPlayed;
    };
    DatabaseManager.lastScore = 0;
    DatabaseManager.bestScore = 0;
    DatabaseManager.totalCoin = 0;
    DatabaseManager.numberPlayed = 0;
    DatabaseManager = __decorate([
        ccclass
    ], DatabaseManager);
    return DatabaseManager;
}(cc.Component));
exports.default = DatabaseManager;

cc._RF.pop();