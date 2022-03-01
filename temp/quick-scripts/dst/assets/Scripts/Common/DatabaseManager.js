
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/DatabaseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbW1vbi9EYXRhYmFzZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLElBQU8sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBR3ZDO0lBQTZDLG1DQUFZO0lBQXpEOztJQTJIQSxDQUFDO0lBcEhVLDhCQUFjLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLEdBQUc7WUFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDbEMsQ0FBQztRQUVGLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNuRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLFVBQXNCLFFBQVE7UUFDMUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSw4QkFBYyxHQUFyQixVQUFzQixVQUFVO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLElBQUksVUFBVSxDQUFDLE1B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QyxTQUFTLEdBMkh4RDtrQkEzSG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL0dhbWVTdGF0ZVwiO1xuaW1wb3J0IGNjY2xhc3MgPSBjYy5fZGVjb3JhdG9yLmNjY2xhc3M7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhYmFzZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGxhc3RTY29yZSA9IDA7XG4gICAgc3RhdGljIGJlc3RTY29yZSA9IDA7XG4gICAgc3RhdGljIHRvdGFsQ29pbiA9IDA7XG4gICAgc3RhdGljIG51bWJlclBsYXllZCA9IDA7XG5cbiAgICBzdGF0aWMgc2F2ZVBsYXllckRhdGEoKTogdm9pZCB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgbGFzdFNjb3JlOiB0aGlzLmxhc3RTY29yZSxcbiAgICAgICAgICAgIGJlc3RTY29yZTogdGhpcy5iZXN0U2NvcmUsXG4gICAgICAgICAgICB0b3RhbENvaW46IHRoaXMudG90YWxDb2luLFxuICAgICAgICAgICAgbnVtYmVyUGxheWVkOiB0aGlzLm51bWJlclBsYXllZCxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZsaXBwZXJCYWxsX1BsYXllckRhdGEtc2F2ZVBsYXllckRhdGE6XCIgKyBkYXRhU3RyaW5nKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiRmxpcHBlckJhbGxfUGxheWVyRGF0YVwiLCBkYXRhU3RyaW5nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFBsYXllckRhdGEoY2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgbGV0IGRhdGFTdHJpbmcgPSBudWxsO1xuICAgICAgICBkYXRhU3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiRmxpcHBlckJhbGxfUGxheWVyRGF0YVwiKTtcbiAgICAgICAgdGhpcy5pbml0UGxheWVyRGF0YShkYXRhU3RyaW5nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdFBsYXllckRhdGEoZGF0YVN0cmluZykge1xuICAgICAgICBpZiAoZGF0YVN0cmluZyAhPSBudWxsICYmIGRhdGFTdHJpbmcgIT0gXCJ7fVwiICYmIHR5cGVvZiAoZGF0YVN0cmluZykgPT0gXCJzdHJpbmdcIiAmJiBkYXRhU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmxpcHBlckJhbGxfUGxheWVyRGF0YS1sb2FkUGxheWVyRGF0YTpcIiArIGRhdGFTdHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5wYXJzZURhdGFMb2NhbChkYXRhU3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmxpcHBlckJhbGxfUGxheWVyRGF0YS1sb2FkUGxheWVyRGF0YS1Ob0RhdGFSZXNldFwiKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQbGF5ZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcGFyc2VEYXRhTG9jYWwoZGF0YVN0cmluZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShkYXRhU3RyaW5nKTtcbiAgICAgICAgbGV0IGxhc3RTY29yZSA9IGRhdGEubGFzdFNjb3JlO1xuICAgICAgICBpZiAobGFzdFNjb3JlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFNjb3JlID0gbGFzdFNjb3JlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0U2NvcmUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBkYXRhLmJlc3RTY29yZTtcbiAgICAgICAgaWYgKGJlc3RTY29yZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJlc3RTY29yZSA9IGJlc3RTY29yZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmVzdFNjb3JlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG90YWxDb2luID0gZGF0YS50b3RhbENvaW47XG4gICAgICAgIGlmICh0b3RhbENvaW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50b3RhbENvaW4gPSB0b3RhbENvaW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvdGFsQ29pbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG51bWJlclBsYXllZCA9IGRhdGEubnVtYmVyUGxheWVkO1xuICAgICAgICBpZiAobnVtYmVyUGxheWVkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyUGxheWVkID0gbnVtYmVyUGxheWVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJQbGF5ZWQgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc2V0UGxheWVyRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iZXN0U2NvcmUgPSAwO1xuICAgICAgICB0aGlzLm51bWJlclBsYXllZCA9IDA7XG4gICAgICAgIHRoaXMudG90YWxDb2luID0gMDtcbiAgICAgICAgdGhpcy5zYXZlUGxheWVyRGF0YSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlU2NvcmUoKSB7XG4gICAgICAgIGxldCBzY29yZSA9IEdhbWVTdGF0ZS5jdXJyZW50U2NvcmU7XG4gICAgICAgIGlmIChzY29yZSA+IHRoaXMuYmVzdFNjb3JlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJlc3RTY29yZShzY29yZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRMYXN0U2NvcmUoc2NvcmUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRMYXN0U2NvcmUoc2NvcmU6IG51bWJlcikge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RTY29yZScsIHNjb3JlKTtcbiAgICAgICAgdGhpcy5zYXZlUGxheWVyRGF0YSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRMYXN0U2NvcmUoKSB7XG4gICAgICAgIGxldCBsYXN0U2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RTY29yZScpO1xuICAgICAgICBpZiAobGFzdFNjb3JlKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFzdFNjb3JlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0QmVzdFNjb3JlKHNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5iZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZXN0U2NvcmUnLCBzY29yZSk7XG4gICAgICAgIHRoaXMuc2F2ZVBsYXllckRhdGEoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QmVzdFNjb3JlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlc3RTY29yZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkTW9yZUNvaW4obnVtKTogdm9pZCB7XG4gICAgICAgIGxldCBjdXJyZW50Q29pbiA9IE51bWJlcihjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ251bWJlclRvdGFsQ29pbicpKSArIG51bTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdudW1iZXJUb3RhbENvaW4nLCBjdXJyZW50Q29pbik7XG4gICAgICAgIHRoaXMudG90YWxDb2luID0gY3VycmVudENvaW47XG4gICAgICAgIHRoaXMuc2F2ZVBsYXllckRhdGEoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG90YWxDb2luKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQ29pbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0VG90YWxUaW1lUGxheWVkKG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubnVtYmVyUGxheWVkID0gTnVtYmVyKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbnVtYmVyUGxheWVkJykpICsgbnVtO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ251bWJlclBsYXllZCcsIHRoaXMubnVtYmVyUGxheWVkKTtcbiAgICAgICAgdGhpcy5zYXZlUGxheWVyRGF0YSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb3RhbFRpbWVQbGF5ZWQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyUGxheWVkO1xuICAgIH1cbn0iXX0=