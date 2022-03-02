
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Common/DatabaseManager');
require('./assets/Scripts/Common/DialogManager');
require('./assets/Scripts/Common/GameState');
require('./assets/Scripts/Common/ScreenManager');
require('./assets/Scripts/Gameplay/AutoMoving');
require('./assets/Scripts/Gameplay/BlockScript');
require('./assets/Scripts/Gameplay/GameManager');
require('./assets/Scripts/Gameplay/PlayerScript');
require('./assets/Scripts/Popup/EndGamePopup');
require('./assets/Scripts/Screen/Home/HomePlayerItem');
require('./assets/Scripts/Screen/Home/HomePlayerScript');
require('./assets/Scripts/Screen/Home/HomeScript');
require('./assets/Scripts/Ultilities/CustomEventManager');
require('./assets/Scripts/Ultilities/NumberUltilities');
require('./assets/Scripts/Ultilities/SimplePool');
require('./assets/Scripts/Ultilities/SoundManager');
require('./assets/Scripts/facebook/FBConfig');
require('./assets/Scripts/facebook/FBGlobal');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Screen/Home/HomeScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba4b5/xf2dL+rWjR7CRu2EM', 'HomeScript');
// Scripts/Screen/Home/HomeScript.ts

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
var DatabaseManager_1 = require("../../Common/DatabaseManager");
var SoundManager_1 = require("../../Ultilities/SoundManager");
var ScreenManager_1 = require("../../Common/ScreenManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HomeScript = /** @class */ (function (_super) {
    __extends(HomeScript, _super);
    function HomeScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnPlay = null;
        _this.btnSound = null;
        _this.btnRanking = null;
        _this.btnShop = null;
        _this.lblBestScore = null;
        _this.lblTotalStars = null;
        return _this;
    }
    HomeScript_1 = HomeScript;
    HomeScript.prototype.onLoad = function () {
        HomeScript_1.instance = this;
        this.btnPlay.node.on('click', this.onBtnPlay, this);
        this.btnSound.node.on('click', this.onBtnSetting, this);
        this.btnRanking.node.on('click', this.onBtnRanking, this);
        this.btnShop.node.on('click', this.onBtnShop, this);
    };
    HomeScript.prototype.onEnable = function () {
        this.lblBestScore.string = "BEST: " + DatabaseManager_1.default.getBestScore();
        this.lblTotalStars.string = DatabaseManager_1.default.getTotalCoin() + "";
    };
    HomeScript.prototype.onDisable = function () {
    };
    HomeScript.prototype.start = function () {
    };
    HomeScript.prototype.onBtnPlay = function () {
        SoundManager_1.default.Instance.PlayButtonSound();
        ScreenManager_1.default.instance.onShowScreenByName(ScreenManager_1.ScreenConfig.Game);
    };
    HomeScript.prototype.onBtnSetting = function () {
    };
    HomeScript.prototype.onBtnRanking = function () {
    };
    HomeScript.prototype.onBtnShop = function () {
    };
    var HomeScript_1;
    __decorate([
        property(cc.Button)
    ], HomeScript.prototype, "btnPlay", void 0);
    __decorate([
        property(cc.Button)
    ], HomeScript.prototype, "btnSound", void 0);
    __decorate([
        property(cc.Button)
    ], HomeScript.prototype, "btnRanking", void 0);
    __decorate([
        property(cc.Button)
    ], HomeScript.prototype, "btnShop", void 0);
    __decorate([
        property(cc.Label)
    ], HomeScript.prototype, "lblBestScore", void 0);
    __decorate([
        property(cc.Label)
    ], HomeScript.prototype, "lblTotalStars", void 0);
    HomeScript = HomeScript_1 = __decorate([
        ccclass
    ], HomeScript);
    return HomeScript;
}(cc.Component));
exports.default = HomeScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NjcmVlbi9Ib21lL0hvbWVTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhEQUF5RDtBQUN6RCw0REFBdUU7QUFFakUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF3REM7UUF0RFcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsbUJBQWEsR0FBYSxJQUFJLENBQUM7O0lBdUMzQyxDQUFDO21CQXhEb0IsVUFBVTtJQXFCM0IsMkJBQU0sR0FBTjtRQUNJLFlBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyx5QkFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLHlCQUFlLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRCw4QkFBUyxHQUFUO0lBQ0EsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hDLHVCQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLDRCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGlDQUFZLEdBQVo7SUFFQSxDQUFDO0lBRUQsaUNBQVksR0FBWjtJQUVBLENBQUM7SUFFRCw4QkFBUyxHQUFUO0lBRUEsQ0FBQzs7SUFyREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNlO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2lCO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDbUI7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDb0I7SUFqQnRCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3RDlCO0lBQUQsaUJBQUM7Q0F4REQsQUF3REMsQ0F4RHVDLEVBQUUsQ0FBQyxTQUFTLEdBd0RuRDtrQkF4RG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YWJhc2VNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21tb24vRGF0YWJhc2VNYW5hZ2VyXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9VbHRpbGl0aWVzL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IFNjcmVlbk1hbmFnZXIsIHtTY3JlZW5Db25maWd9IGZyb20gXCIuLi8uLi9Db21tb24vU2NyZWVuTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSBidG5QbGF5OiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGJ0blNvdW5kOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGJ0blJhbmtpbmc6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgYnRuU2hvcDogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGxibEJlc3RTY29yZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbGJsVG90YWxTdGFyczogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgc3RhdGljIGluc3RhbmNlOiBIb21lU2NyaXB0O1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBIb21lU2NyaXB0Lmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5idG5QbGF5Lm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ0blBsYXksIHRoaXMpO1xuICAgICAgICB0aGlzLmJ0blNvdW5kLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ0blNldHRpbmcsIHRoaXMpO1xuICAgICAgICB0aGlzLmJ0blJhbmtpbmcubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQnRuUmFua2luZywgdGhpcyk7XG4gICAgICAgIHRoaXMuYnRuU2hvcC5ub2RlLm9uKCdjbGljaycsIHRoaXMub25CdG5TaG9wLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5sYmxCZXN0U2NvcmUuc3RyaW5nID0gXCJCRVNUOiBcIiArIERhdGFiYXNlTWFuYWdlci5nZXRCZXN0U2NvcmUoKTtcbiAgICAgICAgdGhpcy5sYmxUb3RhbFN0YXJzLnN0cmluZyA9IERhdGFiYXNlTWFuYWdlci5nZXRUb3RhbENvaW4oKSArIFwiXCI7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuICAgIG9uQnRuUGxheSgpOiB2b2lkIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLkluc3RhbmNlLlBsYXlCdXR0b25Tb3VuZCgpO1xuICAgICAgICBTY3JlZW5NYW5hZ2VyLmluc3RhbmNlLm9uU2hvd1NjcmVlbkJ5TmFtZShTY3JlZW5Db25maWcuR2FtZSk7XG4gICAgfVxuXG4gICAgb25CdG5TZXR0aW5nKCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgb25CdG5SYW5raW5nKCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgb25CdG5TaG9wKCk6IHZvaWQge1xuXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay/BlockScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba042X5uKJIE5CgFrUtfZf8', 'BlockScript');
// Scripts/Gameplay/BlockScript.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
exports.BlockMoveType = void 0;
var SimplePool_1 = require("../Ultilities/SimplePool");
var SoundManager_1 = require("../Ultilities/SoundManager");
var GameManager_1 = require("./GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlockScript = /** @class */ (function (_super) {
    __extends(BlockScript, _super);
    function BlockScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BlockWidth = 0;
        _this.BlockHeight = 0;
        _this.mistBefore = null;
        _this.CenterNode = null;
        _this.YOffset = 0;
        _this.IsActiveForCollision = false;
        _this.ColorIndex = 0;
        //#endregion INIT BLOCK
        //#region MOVE BLOCK
        _this.Velocity = cc.Vec3.ZERO;
        return _this;
        //#endregion CHECK COLLSION
    }
    BlockScript.prototype.update = function (dt) {
        this.node.position = this.node.position.addSelf(this.Velocity.mul(dt));
        if (this.node.position.y < -1500)
            SimplePool_1.default.instance.Despawn(this.node);
        if (this.IsActiveForCollision == false)
            return;
        if (this.SqrDistanceFromTargetToHorizontalLine(GameManager_1.default.Instance.KongiNode.node) <= Math.pow(GameManager_1.default.Instance.KongiRadius + this.BlockHeight * 0.5, 2)) {
            if (this.SqrDistanceFromTargetToVerticalLine(GameManager_1.default.Instance.KongiNode.node) <= Math.pow(GameManager_1.default.Instance.KongiRadius + this.BlockWidth * 0.5 + 30, 2)) {
                GameManager_1.default.Instance.SetNextBlock();
                GameManager_1.default.Instance.PushUpKongi(this.node.angle);
                this.MoveDownWhenHitPlayer();
                SoundManager_1.default.Instance.PlayHitSound();
            }
            else {
                this.scheduleOnce(function () { GameManager_1.default.Instance.ShowGameOver(); }, 0.5);
                SoundManager_1.default.Instance.PlayGameOverSound();
                // let distanceHorizontal = this.SqrDistanceFromTargetToHorizontalLine(GameManager.Instance.KongiNode.node);
                // let distanceVertical = this.SqrDistanceFromTargetToVerticalLine(GameManager.Instance.KongiNode.node);
                // this.node.color = cc.Color.GREEN;
                // console.log(this.node.position);
                // console.log("horizontal: " + distanceHorizontal);
                // console.log("vertical: " + distanceVertical);
                // console.log("Width: " + this.BlockWidth);
                // console.log("Kongi Radius: " + GameManager.Instance.KongiRadius);
                // console.log(GameManager.Instance.KongiNode.node.position);
                // cc.game.pause();
            }
            this.IsActiveForCollision = false;
        }
    };
    BlockScript.prototype.EnableForCollision = function (isDelayForEnable) {
        var _this = this;
        if (isDelayForEnable) {
            this.scheduleOnce(function () { _this.IsActiveForCollision = true; }, 0.3);
        }
        else {
            this.IsActiveForCollision = true;
        }
    };
    BlockScript.prototype.ChangeStateToNextIndex = function (changeDuration) {
        // chuyển màu về gần với màu gốc
        if (this.ColorIndex > 0) {
            this.ColorIndex--;
            cc.tween(this.node).to(changeDuration, {
                color: GameManager_1.default.Instance.ColorList[this.ColorIndex],
                scale: GameManager_1.default.Instance.ScaleList[this.ColorIndex]
            }).start();
            cc.tween(this.node).by(changeDuration, { position: cc.v3(0, this.YOffset, 0) }).start();
        }
    };
    //#region INIT BLOCK
    BlockScript.prototype.SetBlockInfo = function (blockWidth, startAngle, moveType, position, colorIndex, yOffset) {
        console.log(colorIndex);
        this.node.position = position;
        this.BlockWidth = blockWidth;
        this.node.width = blockWidth;
        this.node.angle = startAngle;
        this.mistBefore.width = blockWidth;
        this.YOffset = yOffset;
        this.ColorIndex = colorIndex;
        this.node.color = GameManager_1.default.Instance.ColorList[this.ColorIndex];
        this.node.scale = GameManager_1.default.Instance.ScaleList[this.ColorIndex];
        this.Velocity = cc.Vec3.ZERO; // tùy move type
        this.IsActiveForCollision = false;
    };
    BlockScript.prototype.MoveDownWhenHitPlayer = function () {
        this.Velocity = cc.v3(0, -1000);
    };
    BlockScript.prototype.OnGameOver = function () {
        var angleInRadian = this.node.angle * Math.PI / 180;
        this.Velocity = cc.v3(4000 * Math.sin(angleInRadian), -4000 * Math.cos(angleInRadian));
    };
    //#endregion  MOVE BLOCK
    //#region CHECK COLLSION
    /**
     * khoảng cách từ node (target) tới đường thẳng ax + by + c = 0
     */
    BlockScript.prototype.SqrDistanceFromTargetToLine = function (a, b, c, target) {
        // ax + by + c = 0
        // point: (x0,yo)
        // distance: abs(ax0 + by0 + c) / sqrt(a*a + b*b)
        return Math.pow(a * target.x + b * target.y + c, 2) / (a * a + b * b);
    };
    /**
     * Bình phương khoảng cách từ target đến trục dọc block
     */
    BlockScript.prototype.SqrDistanceFromTargetToVerticalLine = function (target) {
        if (this.node.angle === 0 || this.node.angle === 180) {
            return this.SqrDistanceFromTargetToLine(1, 0, -this.node.x, target);
        }
        else {
            return this.SqrDistanceFromTargetToLine(Math.tan(Math.PI / 180 * (90 + this.node.angle)), -1, -Math.tan(Math.PI / 180 * (90 + this.node.angle)) * this.node.x + this.node.y, target);
        }
    };
    /**
     * Bình phương khoảng cách từ target đến trục ngang block
     */
    BlockScript.prototype.SqrDistanceFromTargetToHorizontalLine = function (target) {
        if (this.node.angle === 90 || this.node.angle === 270) {
            return this.SqrDistanceFromTargetToLine(1, 0, -(this.CenterNode.x + this.node.x), target);
        }
        else {
            return this.SqrDistanceFromTargetToLine(Math.tan(Math.PI / 180 * (this.node.angle)), -1, -Math.tan(Math.PI / 180 * (this.node.angle)) * (this.CenterNode.x + this.node.x) + this.node.y + this.CenterNode.y, target);
        }
    };
    __decorate([
        property
    ], BlockScript.prototype, "BlockHeight", void 0);
    __decorate([
        property(cc.Node)
    ], BlockScript.prototype, "mistBefore", void 0);
    __decorate([
        property(cc.Node)
    ], BlockScript.prototype, "CenterNode", void 0);
    BlockScript = __decorate([
        ccclass
    ], BlockScript);
    return BlockScript;
}(cc.Component));
exports.default = BlockScript;
var BlockMoveType;
(function (BlockMoveType) {
    BlockMoveType[BlockMoveType["Static"] = 0] = "Static";
    BlockMoveType[BlockMoveType["Rotate"] = 1] = "Rotate";
    BlockMoveType[BlockMoveType["MoveHorizontal"] = 2] = "MoveHorizontal";
    BlockMoveType[BlockMoveType["MoveFollowEdge"] = 3] = "MoveFollowEdge";
})(BlockMoveType = exports.BlockMoveType || (exports.BlockMoveType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVwbGF5L0Jsb2NrU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRix1REFBa0Q7QUFDbEQsMkRBQXNEO0FBQ3RELDZDQUF3QztBQUVsQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQThKQztRQTVKVyxnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQXFEdEMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFrQy9CLHVCQUF1QjtRQUV2QixvQkFBb0I7UUFDWixjQUFRLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1FBdUR6QywyQkFBMkI7SUFDL0IsQ0FBQztJQTlJYSw0QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUFFLG9CQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFB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LFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNpQjtJQVJsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBOEovQjtJQUFELGtCQUFDO0NBOUpELEFBOEpDLENBOUp3QyxFQUFFLENBQUMsU0FBUyxHQThKcEQ7a0JBOUpvQixXQUFXO0FBZ0toQyxJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFFckIscURBQVUsQ0FBQTtJQUNWLHFEQUFVLENBQUE7SUFDVixxRUFBa0IsQ0FBQTtJQUNsQixxRUFBa0IsQ0FBQTtBQUN0QixDQUFDLEVBTlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFNeEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEN1c3RvbUV2ZW50TWFuYWdlciBmcm9tIFwiLi4vVWx0aWxpdGllcy9DdXN0b21FdmVudE1hbmFnZXJcIjtcbmltcG9ydCBTaW1wbGVQb29sIGZyb20gXCIuLi9VbHRpbGl0aWVzL1NpbXBsZVBvb2xcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL1VsdGlsaXRpZXMvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja1NjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudFxue1xuICAgIHByaXZhdGUgQmxvY2tXaWR0aDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIEJsb2NrSGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbWlzdEJlZm9yZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBDZW50ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgWU9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgSXNBY3RpdmVGb3JDb2xsaXNpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkU2VsZih0aGlzLlZlbG9jaXR5Lm11bChkdCkpO1xuXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24ueSA8IC0xNTAwKSBTaW1wbGVQb29sLmluc3RhbmNlLkRlc3Bhd24odGhpcy5ub2RlKTtcbiAgICAgICAgaWYgKHRoaXMuSXNBY3RpdmVGb3JDb2xsaXNpb24gPT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb0hvcml6b250YWxMaW5lKEdhbWVNYW5hZ2VyLkluc3RhbmNlLktvbmdpTm9kZS5ub2RlKSA8PSBNYXRoLnBvdyhHYW1lTWFuYWdlci5JbnN0YW5jZS5Lb25naVJhZGl1cyArIHRoaXMuQmxvY2tIZWlnaHQgKiAwLjUsIDIpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb1ZlcnRpY2FsTGluZShHYW1lTWFuYWdlci5JbnN0YW5jZS5Lb25naU5vZGUubm9kZSkgPD0gTWF0aC5wb3coR2FtZU1hbmFnZXIuSW5zdGFuY2UuS29uZ2lSYWRpdXMgKyB0aGlzLkJsb2NrV2lkdGggKiAwLjUgKyAzMCwgMikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UuU2V0TmV4dEJsb2NrKCk7XG4gICAgICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UuUHVzaFVwS29uZ2kodGhpcy5ub2RlLmFuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLk1vdmVEb3duV2hlbkhpdFBsYXllcigpO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5JbnN0YW5jZS5QbGF5SGl0U291bmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7R2FtZU1hbmFnZXIuSW5zdGFuY2UuU2hvd0dhbWVPdmVyKCk7fSwgMC41KTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuSW5zdGFuY2UuUGxheUdhbWVPdmVyU291bmQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGxldCBkaXN0YW5jZUhvcml6b250YWwgPSB0aGlzLlNxckRpc3RhbmNlRnJvbVRhcmdldFRvSG9yaXpvbnRhbExpbmUoR2FtZU1hbmFnZXIuSW5zdGFuY2UuS29uZ2lOb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIGxldCBkaXN0YW5jZVZlcnRpY2FsID0gdGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb1ZlcnRpY2FsTGluZShHYW1lTWFuYWdlci5JbnN0YW5jZS5Lb25naU5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImhvcml6b250YWw6IFwiICsgZGlzdGFuY2VIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZlcnRpY2FsOiBcIiArIGRpc3RhbmNlVmVydGljYWwpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiV2lkdGg6IFwiICsgdGhpcy5CbG9ja1dpZHRoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIktvbmdpIFJhZGl1czogXCIgKyBHYW1lTWFuYWdlci5JbnN0YW5jZS5Lb25naVJhZGl1cyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1hbmFnZXIuSW5zdGFuY2UuS29uZ2lOb2RlLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIGNjLmdhbWUucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuSXNBY3RpdmVGb3JDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBFbmFibGVGb3JDb2xsaXNpb24oaXNEZWxheUZvckVuYWJsZTogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIGlmIChpc0RlbGF5Rm9yRW5hYmxlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5Jc0FjdGl2ZUZvckNvbGxpc2lvbiA9IHRydWU7fSwgMC4zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuSXNBY3RpdmVGb3JDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIENvbG9ySW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIENoYW5nZVN0YXRlVG9OZXh0SW5kZXgoY2hhbmdlRHVyYXRpb246IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIGNodXnhu4NuIG3DoHUgduG7gSBn4bqnbiB24bubaSBtw6B1IGfhu5FjXG4gICAgICAgIGlmICh0aGlzLkNvbG9ySW5kZXggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkNvbG9ySW5kZXgtLTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oY2hhbmdlRHVyYXRpb24sIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogR2FtZU1hbmFnZXIuSW5zdGFuY2UuQ29sb3JMaXN0W3RoaXMuQ29sb3JJbmRleF1cbiAgICAgICAgICAgICAgICAsIHNjYWxlOiBHYW1lTWFuYWdlci5JbnN0YW5jZS5TY2FsZUxpc3RbdGhpcy5Db2xvckluZGV4XVxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuYnkoY2hhbmdlRHVyYXRpb24sIHtwb3NpdGlvbjogY2MudjMoMCwgdGhpcy5ZT2Zmc2V0LCAwKX0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyNyZWdpb24gSU5JVCBCTE9DS1xuICAgIHB1YmxpYyBTZXRCbG9ja0luZm8oYmxvY2tXaWR0aDogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIG1vdmVUeXBlOiBCbG9ja01vdmVUeXBlLCBwb3NpdGlvbjogY2MuVmVjMywgY29sb3JJbmRleDogbnVtYmVyLCB5T2Zmc2V0OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhjb2xvckluZGV4KTtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuQmxvY2tXaWR0aCA9IGJsb2NrV2lkdGg7XG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IGJsb2NrV2lkdGg7XG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHN0YXJ0QW5nbGU7XG4gICAgICAgIHRoaXMubWlzdEJlZm9yZS53aWR0aCA9IGJsb2NrV2lkdGg7XG4gICAgICAgIHRoaXMuWU9mZnNldCA9IHlPZmZzZXQ7XG5cbiAgICAgICAgdGhpcy5Db2xvckluZGV4ID0gY29sb3JJbmRleDtcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gR2FtZU1hbmFnZXIuSW5zdGFuY2UuQ29sb3JMaXN0W3RoaXMuQ29sb3JJbmRleF07XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IEdhbWVNYW5hZ2VyLkluc3RhbmNlLlNjYWxlTGlzdFt0aGlzLkNvbG9ySW5kZXhdO1xuXG4gICAgICAgIHRoaXMuVmVsb2NpdHkgPSBjYy5WZWMzLlpFUk87IC8vIHTDuXkgbW92ZSB0eXBlXG4gICAgICAgIHRoaXMuSXNBY3RpdmVGb3JDb2xsaXNpb24gPSBmYWxzZTtcblxuICAgIH1cbiAgICAvLyNlbmRyZWdpb24gSU5JVCBCTE9DS1xuXG4gICAgLy8jcmVnaW9uIE1PVkUgQkxPQ0tcbiAgICBwcml2YXRlIFZlbG9jaXR5OiBjYy5WZWMzID0gY2MuVmVjMy5aRVJPO1xuICAgIHByaXZhdGUgTW92ZURvd25XaGVuSGl0UGxheWVyKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuVmVsb2NpdHkgPSBjYy52MygwLCAtMTAwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIE9uR2FtZU92ZXIoKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGFuZ2xlSW5SYWRpYW4gPSB0aGlzLm5vZGUuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLlZlbG9jaXR5ID0gY2MudjMoNDAwMCAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW4pLCAtNDAwMCAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW4pKTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uICBNT1ZFIEJMT0NLXG5cbiAgICAvLyNyZWdpb24gQ0hFQ0sgQ09MTFNJT05cbiAgICAvKipcbiAgICAgKiBraG/huqNuZyBjw6FjaCB04burIG5vZGUgKHRhcmdldCkgdOG7m2kgxJHGsOG7nW5nIHRo4bqzbmcgYXggKyBieSArIGMgPSAwXG4gICAgICovXG4gICAgcHJpdmF0ZSBTcXJEaXN0YW5jZUZyb21UYXJnZXRUb0xpbmUoYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgdGFyZ2V0OiBjYy5Ob2RlKTogbnVtYmVyXG4gICAge1xuICAgICAgICAvLyBheCArIGJ5ICsgYyA9IDBcbiAgICAgICAgLy8gcG9pbnQ6ICh4MCx5bylcbiAgICAgICAgLy8gZGlzdGFuY2U6IGFicyhheDAgKyBieTAgKyBjKSAvIHNxcnQoYSphICsgYipiKVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coYSAqIHRhcmdldC54ICsgYiAqIHRhcmdldC55ICsgYywgMikgLyAoYSAqIGEgKyBiICogYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQsOsbmggcGjGsMahbmcga2hv4bqjbmcgY8OhY2ggdOG7qyB0YXJnZXQgxJHhur9uIHRy4bulYyBk4buNYyBibG9ja1xuICAgICAqL1xuICAgIHByaXZhdGUgU3FyRGlzdGFuY2VGcm9tVGFyZ2V0VG9WZXJ0aWNhbExpbmUodGFyZ2V0OiBjYy5Ob2RlKTogbnVtYmVyXG4gICAge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmFuZ2xlID09PSAwIHx8IHRoaXMubm9kZS5hbmdsZSA9PT0gMTgwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb0xpbmUoMSwgMCwgLXRoaXMubm9kZS54LCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3FyRGlzdGFuY2VGcm9tVGFyZ2V0VG9MaW5lKE1hdGgudGFuKE1hdGguUEkgLyAxODAgKiAoOTAgKyB0aGlzLm5vZGUuYW5nbGUpKSwgLTEsXG4gICAgICAgICAgICAgICAgLU1hdGgudGFuKE1hdGguUEkgLyAxODAgKiAoOTAgKyB0aGlzLm5vZGUuYW5nbGUpKSAqIHRoaXMubm9kZS54ICsgdGhpcy5ub2RlLnksIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQsOsbmggcGjGsMahbmcga2hv4bqjbmcgY8OhY2ggdOG7qyB0YXJnZXQgxJHhur9uIHRy4bulYyBuZ2FuZyBibG9ja1xuICAgICAqL1xuICAgIHByaXZhdGUgU3FyRGlzdGFuY2VGcm9tVGFyZ2V0VG9Ib3Jpem9udGFsTGluZSh0YXJnZXQ6IGNjLk5vZGUpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT09IDkwIHx8IHRoaXMubm9kZS5hbmdsZSA9PT0gMjcwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb0xpbmUoMSwgMCwgLSh0aGlzLkNlbnRlck5vZGUueCArIHRoaXMubm9kZS54KSwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlNxckRpc3RhbmNlRnJvbVRhcmdldFRvTGluZShNYXRoLnRhbihNYXRoLlBJIC8gMTgwICogKHRoaXMubm9kZS5hbmdsZSkpLCAtMSxcbiAgICAgICAgICAgICAgICAtTWF0aC50YW4oTWF0aC5QSSAvIDE4MCAqICh0aGlzLm5vZGUuYW5nbGUpKSAqICh0aGlzLkNlbnRlck5vZGUueCArIHRoaXMubm9kZS54KSArIHRoaXMubm9kZS55ICsgdGhpcy5DZW50ZXJOb2RlLnksIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uIENIRUNLIENPTExTSU9OXG59XG5cbmV4cG9ydCBlbnVtIEJsb2NrTW92ZVR5cGVcbntcbiAgICBTdGF0aWMgPSAwLFxuICAgIFJvdGF0ZSA9IDEsXG4gICAgTW92ZUhvcml6b250YWwgPSAyLFxuICAgIE1vdmVGb2xsb3dFZGdlID0gMyxcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Popup/EndGamePopup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '859f4/U5QhJOL8Ns1wCfEjz', 'EndGamePopup');
// Scripts/Popup/EndGamePopup.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var GameManager_1 = require("../Gameplay/GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EndGamePopup = /** @class */ (function (_super) {
    __extends(EndGamePopup, _super);
    function EndGamePopup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tryAgainButton = null;
        _this.scoreLabel = null;
        return _this;
    }
    EndGamePopup.prototype.start = function () {
        this.tryAgainButton.on('click', this.TryAgain, this);
        this.node.active = false;
    };
    EndGamePopup.prototype.TryAgain = function () {
        GameManager_1.default.Instance.StartNewGame();
        this.node.active = false;
    };
    EndGamePopup.prototype.ShowEndGamePopup = function () {
        this.node.active = true;
        this.scoreLabel.string = GameManager_1.default.Instance.CurrentScore.toString();
    };
    __decorate([
        property(cc.Node)
    ], EndGamePopup.prototype, "tryAgainButton", void 0);
    __decorate([
        property(cc.Label)
    ], EndGamePopup.prototype, "scoreLabel", void 0);
    EndGamePopup = __decorate([
        ccclass
    ], EndGamePopup);
    return EndGamePopup;
}(cc.Component));
exports.default = EndGamePopup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BvcHVwL0VuZEdhbWVQb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1REFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF3QkM7UUFyQlcsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7O0lBbUJ4QyxDQUFDO0lBakJhLDRCQUFLLEdBQWY7UUFFSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVPLCtCQUFRLEdBQWhCO1FBRUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTSx1Q0FBZ0IsR0FBdkI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFFLENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDcUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDaUI7SUFMbkIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXdCaEM7SUFBRCxtQkFBQztDQXhCRCxBQXdCQyxDQXhCeUMsRUFBRSxDQUFDLFNBQVMsR0F3QnJEO2tCQXhCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uL0dhbWVwbGF5L0dhbWVNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kR2FtZVBvcHVwIGV4dGVuZHMgY2MuQ29tcG9uZW50XG57XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSB0cnlBZ2FpbkJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudHJ5QWdhaW5CdXR0b24ub24oJ2NsaWNrJywgdGhpcy5UcnlBZ2FpbiwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIFRyeUFnYWluKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlLlN0YXJ0TmV3R2FtZSgpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dFbmRHYW1lUG9wdXAoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBHYW1lTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50U2NvcmUudG9TdHJpbmcoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Ultilities/NumberUltilities.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a36ec9cbZOnZVWVdYID9du', 'NumberUltilities');
// Scripts/Ultilities/NumberUltilities.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumberUltilities = /** @class */ (function () {
    function NumberUltilities() {
    }
    /**
     * Random dấu, trả về 1 (cho dương) và -1 (cho âm)
     */
    NumberUltilities.GetRandomSign = function () {
        return Math.random() >= 0.5 ? 1 : -1;
    };
    /**
     * Lấy giá trị random INTEGER ở trong khoảng (BAO GỒM) MIN và (KO BAO GỒM) MAX
     * @param minValue Giá trị tối thiểu, NẰM TRONG giá trị trả về
     * @param maxValue Giá trị tối đa, KO NẰM TRONG giá trị trả về
     * @returns
     */
    NumberUltilities.GetRandomIntNumber = function (minValue, maxValue) {
        return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    };
    /**
     * Lấy giá trị random ở trong khoảng (BAO GỒM) MIN và (KO BAO GỒM) MAX
     * @param minValue Giá trị tối thiểu, NẰM TRONG giá trị trả về
     * @param maxValue Giá trị tối đa, KO NẰM TRONG giá trị trả về
     * @returns
     */
    NumberUltilities.GetRandomFloatNumber = function (minValue, maxValue) {
        return Math.random() * (maxValue - minValue) + minValue;
    };
    NumberUltilities.GetLerpColor = function (startColor, endColor, lerpValue) {
        return cc.color(cc.misc.lerp(startColor.r, endColor.r, lerpValue), cc.misc.lerp(startColor.g, endColor.g, lerpValue), cc.misc.lerp(startColor.b, endColor.b, lerpValue), 255);
    };
    NumberUltilities = __decorate([
        ccclass
    ], NumberUltilities);
    return NumberUltilities;
}());
exports.default = NumberUltilities;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VsdGlsaXRpZXMvTnVtYmVyVWx0aWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7SUF3Q0EsQ0FBQztJQXRDRzs7T0FFRztJQUNXLDhCQUFhLEdBQTNCO1FBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNXLG1DQUFrQixHQUFoQyxVQUFpQyxRQUFnQixFQUFFLFFBQWdCO1FBRS9ELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1cscUNBQW9CLEdBQWxDLFVBQW1DLFFBQWdCLEVBQUUsUUFBZ0I7UUFFakUsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQzVELENBQUM7SUFFYSw2QkFBWSxHQUExQixVQUEyQixVQUFvQixFQUFFLFFBQWtCLEVBQUUsU0FBaUI7UUFFbEYsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFDN0QsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUNqRCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQ2pELEdBQUcsQ0FDTixDQUFDO0lBQ04sQ0FBQztJQXRDZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F3Q3BDO0lBQUQsdUJBQUM7Q0F4Q0QsQUF3Q0MsSUFBQTtrQkF4Q29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclVsdGlsaXRpZXNcbntcbiAgICAvKipcbiAgICAgKiBSYW5kb20gZOG6pXUsIHRy4bqjIHbhu4EgMSAoY2hvIGTGsMahbmcpIHbDoCAtMSAoY2hvIMOibSlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbVNpZ24oKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEzhuqV5IGdpw6EgdHLhu4sgcmFuZG9tIElOVEVHRVIg4bufIHRyb25nIGtob+G6o25nIChCQU8gR+G7kk0pIE1JTiB2w6AgKEtPIEJBTyBH4buSTSkgTUFYXG4gICAgICogQHBhcmFtIG1pblZhbHVlIEdpw6EgdHLhu4sgdOG7kWkgdGhp4buDdSwgTuG6sE0gVFJPTkcgZ2nDoSB0cuG7iyB0cuG6oyB24buBXG4gICAgICogQHBhcmFtIG1heFZhbHVlIEdpw6EgdHLhu4sgdOG7kWkgxJFhLCBLTyBO4bqwTSBUUk9ORyBnacOhIHRy4buLIHRy4bqjIHbhu4FcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbUludE51bWJlcihtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heFZhbHVlIC0gbWluVmFsdWUpKSArIG1pblZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEzhuqV5IGdpw6EgdHLhu4sgcmFuZG9tIOG7nyB0cm9uZyBraG/huqNuZyAoQkFPIEfhu5JNKSBNSU4gdsOgIChLTyBCQU8gR+G7kk0pIE1BWFxuICAgICAqIEBwYXJhbSBtaW5WYWx1ZSBHacOhIHRy4buLIHThu5FpIHRoaeG7g3UsIE7hurBNIFRST05HIGdpw6EgdHLhu4sgdHLhuqMgduG7gVxuICAgICAqIEBwYXJhbSBtYXhWYWx1ZSBHacOhIHRy4buLIHThu5FpIMSRYSwgS08gTuG6sE0gVFJPTkcgZ2nDoSB0cuG7iyB0cuG6oyB24buBXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21GbG9hdE51bWJlcihtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXhWYWx1ZSAtIG1pblZhbHVlKSArIG1pblZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgR2V0TGVycENvbG9yKHN0YXJ0Q29sb3I6IGNjLkNvbG9yLCBlbmRDb2xvcjogY2MuQ29sb3IsIGxlcnBWYWx1ZTogbnVtYmVyKTogY2MuQ29sb3JcbiAgICB7XG4gICAgICAgIHJldHVybiBjYy5jb2xvcihjYy5taXNjLmxlcnAoc3RhcnRDb2xvci5yLCBlbmRDb2xvci5yLCBsZXJwVmFsdWUpLFxuICAgICAgICAgICAgY2MubWlzYy5sZXJwKHN0YXJ0Q29sb3IuZywgZW5kQ29sb3IuZywgbGVycFZhbHVlKSxcbiAgICAgICAgICAgIGNjLm1pc2MubGVycChzdGFydENvbG9yLmIsIGVuZENvbG9yLmIsIGxlcnBWYWx1ZSksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/facebook/FBGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72e16Y1X+1CDIfqqzOORiOL', 'FBGlobal');
// Scripts/facebook/FBGlobal.ts

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
var FBConfig_1 = require("./FBConfig");
var Component = cc.Component;
var ccclass = cc._decorator.ccclass;
var SoundManager_1 = require("../Ultilities/SoundManager");
var GameState_1 = require("../Common/GameState");
var FBGlobal = /** @class */ (function (_super) {
    __extends(FBGlobal, _super);
    function FBGlobal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.payload = {
            action: 'CUSTOM',
            text: "Come and play with us!",
            // text: content,
            cta: "Play",
            // cta: ctaText,
            image: FBConfig_1.default.getBase64Image(),
            template: 'play_turn',
            // strategy: 'IMMEDIATE',
            data: { myReplayData: '...' },
            notification: 'PUSH',
        };
        return _this;
    }
    FBGlobal_1 = FBGlobal;
    Object.defineProperty(FBGlobal, "instance", {
        get: function () {
            return this._ins || new FBGlobal_1;
        },
        enumerable: false,
        configurable: true
    });
    FBGlobal.prototype.onLoad = function () {
        FBGlobal_1._ins = this;
    };
    //1. ADS SECTION
    // loadBannerAds -Banner don't need show
    // loadAdsInterestial - showAdsInterestial
    // loadVideoAdsFirst - showAdsVideo
    FBGlobal.prototype.loadBannerAds = function () {
        if (typeof FBInstant === "undefined")
            return;
        if (!FBConfig_1.default.isSupportBannerAds()) {
            return;
        }
        FBInstant.loadBannerAdAsync(FBConfig_1.default.bannerId).then(function () {
            console.log('success');
        });
    };
    FBGlobal.prototype.loadAdsInterestial = function () {
        if (typeof FBInstant === "undefined")
            return;
        if (!FBConfig_1.default.isSupportInterstitial()) {
            return;
        }
        FBInstant.getInterstitialAdAsync(FBConfig_1.default.interstitialId)
            .then(function (interstitial) {
            console.log("load inter ads đã gọi");
            FBConfig_1.default.preloadedInterstitial = interstitial;
            return interstitial.loadAsync();
        })
            .catch(function (err) {
            console.error("Interstitial failed to preload: " + err.message);
        });
    };
    FBGlobal.prototype.loadVideoAdsFirst = function () {
        if (typeof FBInstant === "undefined")
            return;
        if (!FBConfig_1.default.isSupportRewardVideo()) {
            return;
        }
        FBInstant.getRewardedVideoAsync(FBConfig_1.default.videoAdsID)
            .then(function (rewarded) {
            console.log("Video" + FBConfig_1.default.preloadedRewardedVideo);
            FBConfig_1.default.preloadedRewardedVideo = rewarded;
            return rewarded.loadAsync();
        })
            .catch(function (err) {
            console.error("Rewarded video failed to preload: " + err.message);
            FBConfig_1.default.numberTriedAds++;
            if (FBConfig_1.default.numberTriedAds <= 10) {
                FBGlobal_1.instance.loadVideoAdsFirst();
            }
        });
    };
    FBGlobal.prototype.showAdsInterestial = function () {
        if (FBConfig_1.default.preloadedInterstitial == null) {
            return;
        }
        console.log("Show ads inter already");
        FBConfig_1.default.preloadedInterstitial
            .showAsync()
            .then(function () {
            console.log("show inter ads đã gọi");
        })
            .catch(function (e) {
            FBConfig_1.default.numberTriedAds++;
            if (FBConfig_1.default.numberTriedAds <= 10) {
                console.log('Reload inter ads at init r nhe');
                FBGlobal_1.instance.loadAdsInterestial();
            }
        });
    };
    FBGlobal.prototype.showAdsVideo = function (onCLoseCallback, onFailedCallBack, arg) {
        console.log("Video" + FBConfig_1.default.preloadedRewardedVideo);
        SoundManager_1.default.Instance.pauseBGM();
        if (FBConfig_1.default.preloadedRewardedVideo === null) {
            FBGlobal_1.instance.loadVideoAdsFirst();
        }
        FBConfig_1.default.preloadedRewardedVideo
            .showAsync()
            .then(function () {
            SoundManager_1.default.Instance.resumeBGM();
            onCLoseCallback(arg);
            FBGlobal_1.instance.loadVideoAdsFirst();
        })
            .catch(function (e) {
            SoundManager_1.default.Instance.resumeBGM();
            console.error(e.message);
            onFailedCallBack("error");
            if (FBConfig_1.default.numberTriedAds <= 10) {
                console.log('Reload video ads r nhe');
                FBGlobal_1.instance.loadVideoAdsFirst();
                FBConfig_1.default.numberTriedAds++;
            }
        });
    };
    //2.SHARE- INVITE - TOURNAMENT SECTION
    // inviteAsync - Invite and play with friends
    // shareGame - Share wall with image
    // postSessionScore - Tournament function
    FBGlobal.prototype.inviteAsync = function (onSuccessCallback, onFailedCallBack) {
        if (typeof FBInstant === 'undefined')
            return;
        var self = this;
        FBInstant.context
            .chooseAsync()
            .then(function () {
            FBInstant.updateAsync({
                action: 'CUSTOM',
                cta: 'Play',
                image: FBConfig_1.default.getBase64Image(),
                text: {
                    default: "Come and get new challenge!!",
                    localizations: {}
                },
                template: 'pass_score',
                data: { myReplayData: '...' },
                strategy: 'IMMEDIATE',
                notification: 'NO_PUSH',
            }).then(function () {
                console.log('invite then already');
                onSuccessCallback();
            }).catch(function (e) {
                console.log('catch invite error ' + e);
                onFailedCallBack();
            });
        }).catch(function (e) {
            onFailedCallBack();
        });
    };
    FBGlobal.prototype.sendInvite = function (onSuccessCallback, onFailedCallBack, playerId) {
        var self = this;
        FBInstant.context
            .createAsync(playerId)
            .then(function () {
            console.log(FBInstant.context.getID());
            FBInstant.updateAsync(self.payload).then(function () {
                console.log('invite then already');
                onSuccessCallback();
            }).catch(function (e) {
                console.log('catch invite error ' + e);
                onFailedCallBack();
            });
        });
    };
    FBGlobal.prototype.shareGame = function (callbackSuccess) {
        if (typeof FBInstant === 'undefined')
            return;
        console.log('Share game already');
        var self = this;
        //if (typeof FBInstant === 'undefined') return;
        // var successCallback = params.successCallback;
        // var failCallback = params.failCallback;
        FBInstant.shareAsync({
            image: FBConfig_1.default.getBase64Image(),
            intent: 'SHARE',
            text: 'Come and play with us!',
            data: { myReplayData: '...' },
        }).then(function () {
            callbackSuccess();
            console.log('Share game already1');
        }).catch(function (error) {
            console.log('Share game already fail' + error);
        });
    };
    FBGlobal.prototype.postSessionScore = function (num) {
        if (typeof FBInstant === 'undefined')
            return;
        FBInstant.postSessionScoreAsync(num);
    };
    //3. COMMON SECTION
    // createShortcutAsync - Create game shortcut in section after gameover
    // haptic - Haptic function
    FBGlobal.prototype.createShortcutAsync = function () {
        if (typeof FBInstant === "undefined")
            return;
        FBInstant.canCreateShortcutAsync()
            .then(function (canCreateShortcut) {
            if (canCreateShortcut) {
                FBInstant.createShortcutAsync()
                    .then(function () {
                    console.log("create shortcut");
                })
                    .catch(function () {
                    console.log("create shortcut fail");
                });
            }
        });
    };
    FBGlobal.prototype.haptic = function () {
        if (typeof FBInstant === "undefined")
            return;
        if (GameState_1.default.isVibrateOn == true) {
            //   FBInstant.performHapticFeedbackAsync();
        }
    };
    //3. COMMON SECTION
    // createShortcutAsync - Create game shortcut in section after gameover
    // haptic - Haptic function
    FBGlobal.prototype.getFBScore = function () {
        if (typeof FBInstant === "undefined")
            return;
        FBConfig_1.default.fbName = FBInstant.player.getName();
        FBConfig_1.default.fbPhoto = FBInstant.player.getPhoto();
        FBInstant.player
            .getDataAsync(["data"])
            .then(function (data) {
            FBConfig_1.default.fbScore = data["maxscore"] || 0;
            FBConfig_1.default.metadata = data["metadata"] || 0;
            // if (callback) {
            //     callback(FBConfig.fbScore, FBConfig.metadata);
            // }
        })
            .catch(function (error) {
        });
    };
    FBGlobal.prototype.saveFBData = function (dataString) {
        if (typeof FBInstant === "undefined")
            return;
        FBInstant.player.setDataAsync({ data: dataString })
            .then(function () {
            FBConfig_1.default.fbScore = dataString["bestScore"];
            console.log("save score to fb player successed");
        })
            .catch(function (error) {
            console.log(error.message);
        });
        this.saveBestScore(dataString);
    };
    FBGlobal.prototype.saveBestScore = function (dataString) {
        var strNameAndPhoto = FBConfig_1.default.fbName + "_" + FBConfig_1.default.fbPhoto;
        var leaderboardName = "my_leaderboard." + FBInstant.context.getID();
        FBInstant.getLeaderboardAsync(leaderboardName)
            .then(function (leaderboard) {
            console.log(" save score to fb successed on setScoreAsync");
            return leaderboard.setScoreAsync(dataString["bestScore"], strNameAndPhoto);
        })
            .then(function (entry) {
            console.log("save score to fb successed get entry");
        })
            .catch(function (error) {
            console.log("Save scrore ranking error" + error);
        });
    };
    var FBGlobal_1;
    FBGlobal = FBGlobal_1 = __decorate([
        ccclass
    ], FBGlobal);
    return FBGlobal;
}(Component));
exports.default = FBGlobal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZhY2Vib29rL0ZCR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUNsQyxJQUFPLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBQ2hDLElBQU8sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLDJEQUFzRDtBQUN0RCxpREFBNEM7QUFHNUM7SUFBc0MsNEJBQVM7SUFBL0M7UUFBQSxxRUFvUkM7UUFsSUcsYUFBTyxHQUFrQztZQUNyQyxNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLGlCQUFpQjtZQUNqQixHQUFHLEVBQUUsTUFBTTtZQUNYLGdCQUFnQjtZQUNoQixLQUFLLEVBQUUsa0JBQVEsQ0FBQyxjQUFjLEVBQUU7WUFDaEMsUUFBUSxFQUFFLFdBQVc7WUFDckIseUJBQXlCO1lBQ3pCLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUM7WUFDM0IsWUFBWSxFQUFFLE1BQU07U0FDdkIsQ0FBQzs7SUF1SE4sQ0FBQztpQkFwUm9CLFFBQVE7SUFJekIsc0JBQVcsb0JBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxVQUFRLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksVUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFDeEMsMENBQTBDO0lBQzFDLG1DQUFtQztJQUM1QixnQ0FBYSxHQUFwQjtRQUNJLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVztZQUFFLE9BQU87UUFDN0MsSUFBSSxDQUFDLGtCQUFRLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUNoQyxPQUFPO1NBQ1Y7UUFDRCxTQUFTLENBQUMsaUJB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Q0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDOztJQW5SZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9SNUI7SUFBRCxlQUFDO0NBcFJELEFBb1JDLENBcFJxQyxTQUFTLEdBb1I5QztrQkFwUm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRkJDb25maWcgZnJvbSBcIi4vRkJDb25maWdcIjtcbmltcG9ydCBDb21wb25lbnQgPSBjYy5Db21wb25lbnQ7XG5pbXBvcnQgY2NjbGFzcyA9IGNjLl9kZWNvcmF0b3IuY2NjbGFzcztcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL1VsdGlsaXRpZXMvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi9Db21tb24vR2FtZVN0YXRlXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGQkdsb2JhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgX2luczogRkJHbG9iYWxcblxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogRkJHbG9iYWwge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBGQkdsb2JhbDtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEZCR2xvYmFsLl9pbnMgPSB0aGlzO1xuICAgIH1cblxuICAgIC8vMS4gQURTIFNFQ1RJT05cbiAgICAvLyBsb2FkQmFubmVyQWRzIC1CYW5uZXIgZG9uJ3QgbmVlZCBzaG93XG4gICAgLy8gbG9hZEFkc0ludGVyZXN0aWFsIC0gc2hvd0Fkc0ludGVyZXN0aWFsXG4gICAgLy8gbG9hZFZpZGVvQWRzRmlyc3QgLSBzaG93QWRzVmlkZW9cbiAgICBwdWJsaWMgbG9hZEJhbm5lckFkcygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGQkluc3RhbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICAgICAgaWYgKCFGQkNvbmZpZy5pc1N1cHBvcnRCYW5uZXJBZHMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEZCSW5zdGFudC5sb2FkQmFubmVyQWRBc3luYyhcbiAgICAgICAgICAgIEZCQ29uZmlnLmJhbm5lcklkXG4gICAgICAgICkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEFkc0ludGVyZXN0aWFsKCkge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgICBpZiAoIUZCQ29uZmlnLmlzU3VwcG9ydEludGVyc3RpdGlhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRkJJbnN0YW50LmdldEludGVyc3RpdGlhbEFkQXN5bmMoXG4gICAgICAgICAgICBGQkNvbmZpZy5pbnRlcnN0aXRpYWxJZFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaW50ZXJzdGl0aWFsOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgaW50ZXIgYWRzIMSRw6MgZ+G7jWlcIik7XG4gICAgICAgICAgICAgICAgRkJDb25maWcucHJlbG9hZGVkSW50ZXJzdGl0aWFsID0gaW50ZXJzdGl0aWFsO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnRlcnN0aXRpYWwubG9hZEFzeW5jKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnI6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnRlcnN0aXRpYWwgZmFpbGVkIHRvIHByZWxvYWQ6IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRWaWRlb0Fkc0ZpcnN0KCkge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgICBpZiAoIUZCQ29uZmlnLmlzU3VwcG9ydFJld2FyZFZpZGVvKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBGQkluc3RhbnQuZ2V0UmV3YXJkZWRWaWRlb0FzeW5jKFxuICAgICAgICAgICAgRkJDb25maWcudmlkZW9BZHNJRFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmV3YXJkZWQ6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmlkZW9cIiArIEZCQ29uZmlnLnByZWxvYWRlZFJld2FyZGVkVmlkZW8pO1xuICAgICAgICAgICAgICAgIEZCQ29uZmlnLnByZWxvYWRlZFJld2FyZGVkVmlkZW8gPSByZXdhcmRlZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV3YXJkZWQubG9hZEFzeW5jKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnI6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZXdhcmRlZCB2aWRlbyBmYWlsZWQgdG8gcHJlbG9hZDogXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgRkJDb25maWcubnVtYmVyVHJpZWRBZHMrKztcbiAgICAgICAgICAgICAgICBpZiAoRkJDb25maWcubnVtYmVyVHJpZWRBZHMgPD0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2UubG9hZFZpZGVvQWRzRmlyc3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0Fkc0ludGVyZXN0aWFsKCkge1xuICAgICAgICBpZiAoRkJDb25maWcucHJlbG9hZGVkSW50ZXJzdGl0aWFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlNob3cgYWRzIGludGVyIGFscmVhZHlcIik7XG4gICAgICAgIEZCQ29uZmlnLnByZWxvYWRlZEludGVyc3RpdGlhbFxuICAgICAgICAgICAgLnNob3dBc3luYygpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93IGludGVyIGFkcyDEkcOjIGfhu41pXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgRkJDb25maWcubnVtYmVyVHJpZWRBZHMrKztcbiAgICAgICAgICAgICAgICBpZiAoRkJDb25maWcubnVtYmVyVHJpZWRBZHMgPD0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbG9hZCBpbnRlciBhZHMgYXQgaW5pdCByIG5oZScpXG4gICAgICAgICAgICAgICAgICAgIEZCR2xvYmFsLmluc3RhbmNlLmxvYWRBZHNJbnRlcmVzdGlhbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QWRzVmlkZW8ob25DTG9zZUNhbGxiYWNrOiBhbnksIG9uRmFpbGVkQ2FsbEJhY2s6IGFueSwgYXJnOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJWaWRlb1wiICsgRkJDb25maWcucHJlbG9hZGVkUmV3YXJkZWRWaWRlbyk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5JbnN0YW5jZS5wYXVzZUJHTSgpO1xuICAgICAgICBpZiAoRkJDb25maWcucHJlbG9hZGVkUmV3YXJkZWRWaWRlbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2UubG9hZFZpZGVvQWRzRmlyc3QoKVxuICAgICAgICB9XG4gICAgICAgIEZCQ29uZmlnLnByZWxvYWRlZFJld2FyZGVkVmlkZW9cbiAgICAgICAgICAgIC5zaG93QXN5bmMoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5JbnN0YW5jZS5yZXN1bWVCR00oKTtcbiAgICAgICAgICAgICAgICBvbkNMb3NlQ2FsbGJhY2soYXJnKTtcbiAgICAgICAgICAgICAgICBGQkdsb2JhbC5pbnN0YW5jZS5sb2FkVmlkZW9BZHNGaXJzdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLkluc3RhbmNlLnJlc3VtZUJHTSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBvbkZhaWxlZENhbGxCYWNrKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgaWYgKEZCQ29uZmlnLm51bWJlclRyaWVkQWRzIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWxvYWQgdmlkZW8gYWRzIHIgbmhlJylcbiAgICAgICAgICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2UubG9hZFZpZGVvQWRzRmlyc3QoKVxuICAgICAgICAgICAgICAgICAgICBGQkNvbmZpZy5udW1iZXJUcmllZEFkcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vMi5TSEFSRS0gSU5WSVRFIC0gVE9VUk5BTUVOVCBTRUNUSU9OXG4gICAgLy8gaW52aXRlQXN5bmMgLSBJbnZpdGUgYW5kIHBsYXkgd2l0aCBmcmllbmRzXG4gICAgLy8gc2hhcmVHYW1lIC0gU2hhcmUgd2FsbCB3aXRoIGltYWdlXG4gICAgLy8gcG9zdFNlc3Npb25TY29yZSAtIFRvdXJuYW1lbnQgZnVuY3Rpb25cbiAgICBwdWJsaWMgaW52aXRlQXN5bmMob25TdWNjZXNzQ2FsbGJhY2s6IGFueSwgb25GYWlsZWRDYWxsQmFjazogYW55KSB7XG4gICAgICAgIGlmICh0eXBlb2YgRkJJbnN0YW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEZCSW5zdGFudC5jb250ZXh0XG4gICAgICAgICAgICAuY2hvb3NlQXN5bmMoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIEZCSW5zdGFudC51cGRhdGVBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ0NVU1RPTScsXG4gICAgICAgICAgICAgICAgICAgIGN0YTogJ1BsYXknLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogRkJDb25maWcuZ2V0QmFzZTY0SW1hZ2UoKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXCJDb21lIGFuZCBnZXQgbmV3IGNoYWxsZW5nZSEhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGl6YXRpb25zOiB7fVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3Bhc3Nfc2NvcmUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7bXlSZXBsYXlEYXRhOiAnLi4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5OiAnSU1NRURJQVRFJyxcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uOiAnTk9fUFVTSCcsXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZpdGUgdGhlbiBhbHJlYWR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhdGNoIGludml0ZSBlcnJvciAnICsgZSk7XG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbGVkQ2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBvbkZhaWxlZENhbGxCYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBheWxvYWQ6IEZCSW5zdGFudC5DdXN0b21VcGRhdGVQYXlsb2FkID0ge1xuICAgICAgICBhY3Rpb246ICdDVVNUT00nLFxuICAgICAgICB0ZXh0OiBcIkNvbWUgYW5kIHBsYXkgd2l0aCB1cyFcIixcbiAgICAgICAgLy8gdGV4dDogY29udGVudCxcbiAgICAgICAgY3RhOiBcIlBsYXlcIixcbiAgICAgICAgLy8gY3RhOiBjdGFUZXh0LFxuICAgICAgICBpbWFnZTogRkJDb25maWcuZ2V0QmFzZTY0SW1hZ2UoKSxcbiAgICAgICAgdGVtcGxhdGU6ICdwbGF5X3R1cm4nLFxuICAgICAgICAvLyBzdHJhdGVneTogJ0lNTUVESUFURScsXG4gICAgICAgIGRhdGE6IHtteVJlcGxheURhdGE6ICcuLi4nfSxcbiAgICAgICAgbm90aWZpY2F0aW9uOiAnUFVTSCcsXG4gICAgfTtcblxuICAgIHB1YmxpYyBzZW5kSW52aXRlKG9uU3VjY2Vzc0NhbGxiYWNrOiBhbnksIG9uRmFpbGVkQ2FsbEJhY2s6IGFueSwgcGxheWVySWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEZCSW5zdGFudC5jb250ZXh0XG4gICAgICAgICAgICAuY3JlYXRlQXN5bmMocGxheWVySWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coRkJJbnN0YW50LmNvbnRleHQuZ2V0SUQoKSk7XG4gICAgICAgICAgICAgICAgRkJJbnN0YW50LnVwZGF0ZUFzeW5jKHNlbGYucGF5bG9hZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZpdGUgdGhlbiBhbHJlYWR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhdGNoIGludml0ZSBlcnJvciAnICsgZSk7XG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbGVkQ2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaGFyZUdhbWUoY2FsbGJhY2tTdWNjZXNzID86IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coJ1NoYXJlIGdhbWUgYWxyZWFkeScpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vaWYgKHR5cGVvZiBGQkluc3RhbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIC8vIHZhciBzdWNjZXNzQ2FsbGJhY2sgPSBwYXJhbXMuc3VjY2Vzc0NhbGxiYWNrO1xuICAgICAgICAvLyB2YXIgZmFpbENhbGxiYWNrID0gcGFyYW1zLmZhaWxDYWxsYmFjaztcbiAgICAgICAgRkJJbnN0YW50LnNoYXJlQXN5bmMoe1xuICAgICAgICAgICAgaW1hZ2U6IEZCQ29uZmlnLmdldEJhc2U2NEltYWdlKCksXG4gICAgICAgICAgICBpbnRlbnQ6ICdTSEFSRScsXG4gICAgICAgICAgICB0ZXh0OiAnQ29tZSBhbmQgcGxheSB3aXRoIHVzIScsXG4gICAgICAgICAgICBkYXRhOiB7bXlSZXBsYXlEYXRhOiAnLi4uJ30sXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tTdWNjZXNzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hhcmUgZ2FtZSBhbHJlYWR5MScpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoYXJlIGdhbWUgYWxyZWFkeSBmYWlsJyArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3RTZXNzaW9uU2NvcmUobnVtOiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGQkluc3RhbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIEZCSW5zdGFudC5wb3N0U2Vzc2lvblNjb3JlQXN5bmMobnVtKTtcbiAgICB9XG5cbiAgICAvLzMuIENPTU1PTiBTRUNUSU9OXG4gICAgLy8gY3JlYXRlU2hvcnRjdXRBc3luYyAtIENyZWF0ZSBnYW1lIHNob3J0Y3V0IGluIHNlY3Rpb24gYWZ0ZXIgZ2FtZW92ZXJcbiAgICAvLyBoYXB0aWMgLSBIYXB0aWMgZnVuY3Rpb25cbiAgICBwdWJsaWMgY3JlYXRlU2hvcnRjdXRBc3luYygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGQkluc3RhbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICAgICAgRkJJbnN0YW50LmNhbkNyZWF0ZVNob3J0Y3V0QXN5bmMoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNhbkNyZWF0ZVNob3J0Y3V0OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FuQ3JlYXRlU2hvcnRjdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgRkJJbnN0YW50LmNyZWF0ZVNob3J0Y3V0QXN5bmMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHNob3J0Y3V0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgc2hvcnRjdXQgZmFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXB0aWMoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgRkJJbnN0YW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gICAgICAgIGlmIChHYW1lU3RhdGUuaXNWaWJyYXRlT24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gICBGQkluc3RhbnQucGVyZm9ybUhhcHRpY0ZlZWRiYWNrQXN5bmMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vMy4gQ09NTU9OIFNFQ1RJT05cbiAgICAvLyBjcmVhdGVTaG9ydGN1dEFzeW5jIC0gQ3JlYXRlIGdhbWUgc2hvcnRjdXQgaW4gc2VjdGlvbiBhZnRlciBnYW1lb3ZlclxuICAgIC8vIGhhcHRpYyAtIEhhcHRpYyBmdW5jdGlvblxuICAgIHB1YmxpYyBnZXRGQlNjb3JlKCkge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgICBGQkNvbmZpZy5mYk5hbWUgPSBGQkluc3RhbnQucGxheWVyLmdldE5hbWUoKTtcbiAgICAgICAgRkJDb25maWcuZmJQaG90byA9IEZCSW5zdGFudC5wbGF5ZXIuZ2V0UGhvdG8oKTtcbiAgICAgICAgRkJJbnN0YW50LnBsYXllclxuICAgICAgICAgICAgLmdldERhdGFBc3luYyhbXCJkYXRhXCJdKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIEZCQ29uZmlnLmZiU2NvcmUgPSBkYXRhW1wibWF4c2NvcmVcIl0gfHwgMDtcbiAgICAgICAgICAgICAgICBGQkNvbmZpZy5tZXRhZGF0YSA9IGRhdGFbXCJtZXRhZGF0YVwiXSB8fCAwO1xuICAgICAgICAgICAgICAgIC8vIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIC8vICAgICBjYWxsYmFjayhGQkNvbmZpZy5mYlNjb3JlLCBGQkNvbmZpZy5tZXRhZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVGQkRhdGEoZGF0YVN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgICBGQkluc3RhbnQucGxheWVyLnNldERhdGFBc3luYyh7ZGF0YTogZGF0YVN0cmluZ30pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgRkJDb25maWcuZmJTY29yZSA9IGRhdGFTdHJpbmdbXCJiZXN0U2NvcmVcIl07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlIHNjb3JlIHRvIGZiIHBsYXllciBzdWNjZXNzZWRcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNhdmVCZXN0U2NvcmUoZGF0YVN0cmluZyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVCZXN0U2NvcmUoZGF0YVN0cmluZykge1xuICAgICAgICBsZXQgc3RyTmFtZUFuZFBob3RvID0gRkJDb25maWcuZmJOYW1lICsgXCJfXCIgKyBGQkNvbmZpZy5mYlBob3RvO1xuICAgICAgICBsZXQgbGVhZGVyYm9hcmROYW1lID0gXCJteV9sZWFkZXJib2FyZC5cIiArIEZCSW5zdGFudC5jb250ZXh0LmdldElEKCk7XG4gICAgICAgIEZCSW5zdGFudC5nZXRMZWFkZXJib2FyZEFzeW5jKFxuICAgICAgICAgICAgbGVhZGVyYm9hcmROYW1lXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChsZWFkZXJib2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIHNhdmUgc2NvcmUgdG8gZmIgc3VjY2Vzc2VkIG9uIHNldFNjb3JlQXN5bmNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlYWRlcmJvYXJkLnNldFNjb3JlQXN5bmMoZGF0YVN0cmluZ1tcImJlc3RTY29yZVwiXSwgc3RyTmFtZUFuZFBob3RvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmUgc2NvcmUgdG8gZmIgc3VjY2Vzc2VkIGdldCBlbnRyeVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYXZlIHNjcm9yZSByYW5raW5nIGVycm9yXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay/PlayerScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52f2aKZM6ZMpJ/KPa3EI8mj', 'PlayerScript');
// Scripts/Gameplay/PlayerScript.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var GameManager_1 = require("./GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerScript = /** @class */ (function (_super) {
    __extends(PlayerScript, _super);
    function PlayerScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Radius = 0;
        _this.MaxRotateAngle = 0; // player có rotate khi đập xuống các mặt 
        //#region MOVE + ROTATE 
        _this.Velocity = cc.Vec3.ZERO;
        _this.Gravity = 0;
        _this.AngularVelocity = 0;
        return _this;
    }
    PlayerScript.prototype.update = function (dt) {
        // if(GameManager.Instance.IsPauseGame) return;
        this.Velocity = this.Velocity.addSelf(cc.v3(0, -this.Gravity * dt));
        this.node.position = this.node.position.addSelf(this.Velocity.mul(dt));
        if (this.node.position.x < -540 + this.Radius || this.node.position.x > 540 - this.Radius) {
            this.BounceWithWall();
        }
    };
    PlayerScript.prototype.BounceWithWall = function () {
        this.Velocity = cc.v3(-this.Velocity.x, this.Velocity.y);
        this.AngularVelocity = -this.AngularVelocity;
    };
    //#endregion MOVE + ROTATE
    /**
     * Nẩy player lên
     * @param pushUpAngle
     * @param pushUpVelocity
     */
    PlayerScript.prototype.Jump = function (pushUpAngle, pushUpVelocity, gravity) {
        var pushUpAngleInRadian = pushUpAngle * Math.PI / 180;
        this.Velocity = cc.v3(pushUpVelocity * -Math.sin(2 * pushUpAngleInRadian), pushUpVelocity * Math.cos(2 * pushUpAngleInRadian));
        this.Gravity = gravity;
    };
    /**
     * Player lao xuống
     */
    PlayerScript.prototype.Landing = function () {
        this.Velocity = cc.v3(0, -GameManager_1.default.Instance.LandingVelocity);
    };
    PlayerScript.prototype.ResetNewGame = function () {
        this.Velocity = cc.Vec3.ZERO;
        this.node.position = cc.Vec3.ZERO;
        this.Gravity = 0;
    };
    __decorate([
        property
    ], PlayerScript.prototype, "Radius", void 0);
    __decorate([
        property
    ], PlayerScript.prototype, "MaxRotateAngle", void 0);
    PlayerScript = __decorate([
        ccclass
    ], PlayerScript);
    return PlayerScript;
}(cc.Component));
exports.default = PlayerScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVwbGF5L1BsYXllclNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF1REM7UUFwRFcsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixvQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDLDBDQUEwQztRQUM5RSx3QkFBd0I7UUFFaEIsY0FBUSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIscUJBQWUsR0FBVyxDQUFDLENBQUM7O0lBNkN4QyxDQUFDO0lBNUNhLDZCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFFdkIsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ3pGO1lBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVPLHFDQUFjLEdBQXRCO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsMEJBQTBCO0lBQzFCOzs7O09BSUc7SUFDSSwyQkFBSSxHQUFYLFVBQVksV0FBbUIsRUFBRSxjQUFzQixFQUFFLE9BQWU7UUFFcEUsSUFBSSxtQkFBbUIsR0FBVyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLEVBQUUsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUMvSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSw4QkFBTyxHQUFkO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxtQ0FBWSxHQUFuQjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQW5ERDtRQURDLFFBQVE7Z0RBQ2tCO0lBRTNCO1FBREMsUUFBUTt3REFDMEI7SUFMbEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVEaEM7SUFBRCxtQkFBQztDQXZERCxBQXVEQyxDQXZEeUMsRUFBRSxDQUFDLFNBQVMsR0F1RHJEO2tCQXZEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnRcbntcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIFJhZGl1czogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIE1heFJvdGF0ZUFuZ2xlOiBudW1iZXIgPSAwOyAvLyBwbGF5ZXIgY8OzIHJvdGF0ZSBraGkgxJHhuq1wIHh14buRbmcgY8OhYyBt4bq3dCBcbiAgICAvLyNyZWdpb24gTU9WRSArIFJPVEFURSBcblxuICAgIHByaXZhdGUgVmVsb2NpdHk6IGNjLlZlYzMgPSBjYy5WZWMzLlpFUk87XG4gICAgcHJpdmF0ZSBHcmF2aXR5OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgQW5ndWxhclZlbG9jaXR5OiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIGlmKEdhbWVNYW5hZ2VyLkluc3RhbmNlLklzUGF1c2VHYW1lKSByZXR1cm47XG4gICAgICAgIHRoaXMuVmVsb2NpdHkgPSB0aGlzLlZlbG9jaXR5LmFkZFNlbGYoY2MudjMoMCwgLXRoaXMuR3Jhdml0eSAqIGR0KSk7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGRTZWxmKHRoaXMuVmVsb2NpdHkubXVsKGR0KSk7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5wb3NpdGlvbi54IDwgLTU0MCArIHRoaXMuUmFkaXVzIHx8IHRoaXMubm9kZS5wb3NpdGlvbi54ID4gNTQwIC0gdGhpcy5SYWRpdXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQm91bmNlV2l0aFdhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgQm91bmNlV2l0aFdhbGwoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5WZWxvY2l0eSA9IGNjLnYzKC10aGlzLlZlbG9jaXR5LngsIHRoaXMuVmVsb2NpdHkueSk7XG4gICAgICAgIHRoaXMuQW5ndWxhclZlbG9jaXR5ID0gLXRoaXMuQW5ndWxhclZlbG9jaXR5O1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb24gTU9WRSArIFJPVEFURVxuICAgIC8qKlxuICAgICAqIE7huql5IHBsYXllciBsw6puXG4gICAgICogQHBhcmFtIHB1c2hVcEFuZ2xlIFxuICAgICAqIEBwYXJhbSBwdXNoVXBWZWxvY2l0eSBcbiAgICAgKi9cbiAgICBwdWJsaWMgSnVtcChwdXNoVXBBbmdsZTogbnVtYmVyLCBwdXNoVXBWZWxvY2l0eTogbnVtYmVyLCBncmF2aXR5OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgcHVzaFVwQW5nbGVJblJhZGlhbjogbnVtYmVyID0gcHVzaFVwQW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLlZlbG9jaXR5ID0gY2MudjMocHVzaFVwVmVsb2NpdHkgKiAtTWF0aC5zaW4oMiAqIHB1c2hVcEFuZ2xlSW5SYWRpYW4pLCBwdXNoVXBWZWxvY2l0eSAqIE1hdGguY29zKDIgKiBwdXNoVXBBbmdsZUluUmFkaWFuKSk7XG4gICAgICAgIHRoaXMuR3Jhdml0eSA9IGdyYXZpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheWVyIGxhbyB4deG7kW5nXG4gICAgICovXG4gICAgcHVibGljIExhbmRpbmcoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5WZWxvY2l0eSA9IGNjLnYzKDAsIC1HYW1lTWFuYWdlci5JbnN0YW5jZS5MYW5kaW5nVmVsb2NpdHkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZXNldE5ld0dhbWUoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLlZlbG9jaXR5ID0gY2MuVmVjMy5aRVJPO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy5WZWMzLlpFUk87XG4gICAgICAgIHRoaXMuR3Jhdml0eSA9IDA7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5573a755vhKRrGuU/i6nGPE', 'GameManager');
// Scripts/Gameplay/GameManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var EndGamePopup_1 = require("../Popup/EndGamePopup");
var NumberUltilities_1 = require("../Ultilities/NumberUltilities");
var SimplePool_1 = require("../Ultilities/SimplePool");
var BlockScript_1 = require("./BlockScript");
var PlayerScript_1 = require("./PlayerScript");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.KongiNode = null;
        _this.KongiRadius = 0;
        _this.BlockPrefab = null;
        _this.MaxBlockQty = 10;
        _this.MaxVelocity = 0;
        _this.MaxFlyingTime = 1.2;
        _this.Gravity = 0;
        _this.LandingVelocity = 500;
        _this.CanvasWidth = 1080;
        _this.endGamePopup = null;
        //#region GAMEPLAY
        _this.ScoreLabel = null;
        _this.TapNode = null;
        _this.CurrentScore = 0;
        _this.IsStarted = false;
        _this.IsPauseGame = false;
        //#endregion GAMEPLAY
        //#region SPAWN BLOCKS
        _this.BlockContainer = null;
        _this.StepAngle = 2.5;
        _this.MaxAngleMultiplier = 10;
        _this.CurrentSpawnedBlock = null;
        _this.CurrentBlockIndex = 0; //index của block được thêm vào danh sách, block càng về sau thì phải càng gần với background color
        _this.BlockList = [];
        //#endregion SPAWN BLOCKS
        //#region MÀU TỪNG ĐOẠN SCORE
        _this.BlockColor = null;
        _this.levelColorList = [];
        _this.backgroundSpriteFrameList = [];
        _this.ColorList = [];
        //#endregion MÀU TỪNG ĐOẠN SCORE
        //#region SCALE TỪNG BLOCK THEO INDEX
        _this.ScaleList = [];
        _this.DistanceToFirstBlock = 19; // khoảng cách từ mắt tới block đầu tiên, với quy ước các block sẽ cách nhau 1 đơn vị
        return _this;
        //#endregion SCALE TỪNG BLOCK THEO INDEX
    }
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        GameManager_1.Instance = this;
        this.GenerateColorList(this.MaxBlockQty);
        this.GenerateScaleList();
        // THỜI GIAN GIỮA 2 LẦN JUMP LÀ 1.2S (NẾU KO TAP)
        // => GRAVITY * 0.6 = MaxVelocity
        this.Gravity = this.MaxVelocity * 2 / this.MaxFlyingTime;
        this.StartNewGame();
        this.TapNode.on(cc.Node.EventType.TOUCH_START, this.Landing, this);
    };
    /**
     * Đáp xuống đất
     */
    GameManager.prototype.Landing = function (event) {
        this.IsPauseGame = false;
        this.IsStarted = true;
        this.KongiNode.Landing();
    };
    /**
     * Rút cọc, GameOver
     */
    GameManager.prototype.ShowGameOver = function () {
        var _this = this;
        this.ScoreLabel.string = "";
        var _loop_1 = function (i) {
            this_1.scheduleOnce(function () {
                _this.BlockList[i].OnGameOver();
            }, i * 0.05);
        };
        var this_1 = this;
        for (var i = 0; i < this.BlockList.length; i++) {
            _loop_1(i);
        }
        this.scheduleOnce(function () { _this.endGamePopup.ShowEndGamePopup(); }, this.BlockList.length * 0.05 + 1);
    };
    /**
     * Chuyển sang block tiếp theo (block trước được đáp xuống an toàn)
     */
    GameManager.prototype.SetNextBlock = function () {
        for (var i = 0; i < this.BlockList.length; i++) {
            this.BlockList[i].ChangeStateToNextIndex(this.MaxFlyingTime / 3);
        }
        this.CurrentBlockIndex--;
        this.CurrentScore++;
        this.ScoreLabel.string = this.CurrentScore.toString();
        this.BlockList.splice(0, 1);
        this.SpawnBlock();
        this.BlockList[0].EnableForCollision(true);
    };
    GameManager.prototype.PushUpKongi = function (pushUpAngle) {
        this.KongiNode.Jump(pushUpAngle, this.MaxVelocity, this.Gravity);
    };
    GameManager.prototype.StartNewGame = function () {
        this.BlockList = [];
        this.KongiNode.ResetNewGame();
        this.IsPauseGame = true;
        this.IsStarted = false;
        this.CurrentScore = 0;
        this.CurrentBlockIndex = 0;
        this.SpawnFirstBlock();
        for (var i = 0; i < 9; i++) {
            this.SpawnBlock();
        }
        this.ScoreLabel.string = this.CurrentScore.toString();
    };
    GameManager.prototype.SpawnFirstBlock = function () {
        this.CurrentSpawnedBlock = SimplePool_1.default.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript_1.default);
        this.CurrentSpawnedBlock.SetBlockInfo(1080, 0, BlockScript_1.BlockMoveType.Static, cc.v3(0, -480), this.CurrentBlockIndex, 0); // 480 tùy chỉnh sau
        this.CurrentSpawnedBlock.EnableForCollision(false);
        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;
        this.CurrentBlockIndex++;
        this.CurrentBlockAngle = NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * NumberUltilities_1.default.GetRandomSign() * this.StepAngle;
        this.CurrentBlockWidth = 800;
        this.CurrentBlockPosition = cc.v3(0, -360); // 360 tùy chỉnh sau
        this.CurrentBlockYOffset = -120;
        this.BlockList.push(this.CurrentSpawnedBlock);
    };
    /**
     * Spawn các block (ko phải block đầu tiên)
     */
    GameManager.prototype.SpawnBlock = function () {
        this.CurrentSpawnedBlock = SimplePool_1.default.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript_1.default);
        this.CurrentSpawnedBlock.SetBlockInfo(this.CurrentBlockWidth, this.CurrentBlockAngle, BlockScript_1.BlockMoveType.Static, this.CurrentBlockPosition, this.CurrentBlockIndex, this.CurrentBlockYOffset);
        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;
        this.CurrentSpawnedBlock.node.setSiblingIndex(0);
        this.CalculateNextBlockState();
        this.CurrentBlockIndex++;
        this.BlockList.push(this.CurrentSpawnedBlock);
    };
    GameManager.prototype.CalculateNextBlockState = function () {
        var playerVelocityX = -this.MaxVelocity * Math.sin(2 * this.CurrentBlockAngle * Math.PI / 180);
        var maxFlyingRange = playerVelocityX * this.MaxFlyingTime;
        var deltaBetweenTwoBlock = maxFlyingRange * NumberUltilities_1.default.GetRandomFloatNumber(0.3, 0.7);
        if (this.CurrentBlockIndex < 5) {
            this.CurrentBlockPosition = cc.v3(cc.misc.clampf(this.CurrentBlockPosition.x + deltaBetweenTwoBlock, -324, 324), this.CurrentBlockPosition.y + 120);
            this.CurrentBlockYOffset = -120;
        }
        else {
            this.CurrentBlockPosition = cc.v3(cc.misc.clampf(this.CurrentBlockPosition.x + deltaBetweenTwoBlock, -324, 324), this.CurrentBlockPosition.y + 30);
            this.CurrentBlockYOffset = -30;
        }
        this.CurrentBlockWidth = cc.misc.clampf(Math.abs(maxFlyingRange) * NumberUltilities_1.default.GetRandomFloatNumber(0.3, 0.7), 288, 540);
        if (this.CurrentBlockAngle > 0) {
            if (this.CurrentBlockPosition.x + playerVelocityX * this.MaxFlyingTime < -this.CanvasWidth / 2) {
                this.CurrentBlockAngle = -NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
            else {
                this.CurrentBlockAngle = NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
        }
        else {
            if (this.CurrentBlockPosition.x + playerVelocityX * this.MaxFlyingTime > this.CanvasWidth / 2) {
                this.CurrentBlockAngle = NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
            else {
                this.CurrentBlockAngle = -NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
        }
    };
    GameManager.prototype.GenerateColorList = function (numberOfColor) {
        for (var i = 0; i < numberOfColor; i++) {
            this.ColorList.push(NumberUltilities_1.default.GetLerpColor(this.BlockColor, this.levelColorList[0], 1 - Math.pow(2 / 3, i)));
        }
    };
    GameManager.prototype.GenerateScaleList = function () {
        for (var i = 0; i < this.MaxBlockQty; i++) {
            this.ScaleList.push(this.DistanceToFirstBlock / (this.DistanceToFirstBlock + i));
        }
    };
    var GameManager_1;
    __decorate([
        property(PlayerScript_1.default)
    ], GameManager.prototype, "KongiNode", void 0);
    __decorate([
        property
    ], GameManager.prototype, "KongiRadius", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "BlockPrefab", void 0);
    __decorate([
        property
    ], GameManager.prototype, "MaxBlockQty", void 0);
    __decorate([
        property
    ], GameManager.prototype, "MaxVelocity", void 0);
    __decorate([
        property
    ], GameManager.prototype, "MaxFlyingTime", void 0);
    __decorate([
        property
    ], GameManager.prototype, "LandingVelocity", void 0);
    __decorate([
        property
    ], GameManager.prototype, "CanvasWidth", void 0);
    __decorate([
        property(EndGamePopup_1.default)
    ], GameManager.prototype, "endGamePopup", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "ScoreLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "TapNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "BlockContainer", void 0);
    __decorate([
        property(cc.Color)
    ], GameManager.prototype, "BlockColor", void 0);
    __decorate([
        property([cc.Color])
    ], GameManager.prototype, "levelColorList", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "backgroundSpriteFrameList", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVwbGF5L0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFpRDtBQUNqRCxtRUFBOEQ7QUFDOUQsdURBQWtEO0FBQ2xELDZDQUF5RDtBQUN6RCwrQ0FBMEM7QUFFcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF5UEM7UUFyUFUsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHdkIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFDNUIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVyQixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUU3QixpQkFBVyxHQUFXLElBQUksQ0FBQztRQTZCM0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBNkMxQyxrQkFBa0I7UUFFVixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFrQnBDLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFFZCxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVcsR0FBRyxDQUFBO1FBQ3ZCLHdCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUVo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Q0FBQyxzQkFBWSxDQUFDO2tEQUNlO0lBRXRDO1FBREMsUUFBUTtvREFDc0I7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDa0I7SUFFdEM7UUFEQyxRQUFRO29EQUN3QjtJQUVqQztRQURDLFFBQVE7b0RBQ3VCO0lBRWhDO1FBREMsUUFBUTtzREFDMkI7SUFHcEM7UUFEQyxRQUFRO3dEQUM0QjtJQUVyQztRQURDLFFBQVE7b0RBQzBCO0lBNkJuQztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO3FEQUNtQjtJQStDMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDaUI7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYztJQXdCaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDcUI7SUFpR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ2lCO0lBRXBDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3VEQUNtQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztrRUFDOEI7SUEvTnhDLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F5UC9CO0lBQUQsa0JBQUM7Q0F6UEQsQUF5UEMsQ0F6UHdDLEVBQUUsQ0FBQyxTQUFTLEdBeVBwRDtrQkF6UG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEVuZEdhbWVQb3B1cCBmcm9tIFwiLi4vUG9wdXAvRW5kR2FtZVBvcHVwXCI7XG5pbXBvcnQgTnVtYmVyVWx0aWxpdGllcyBmcm9tIFwiLi4vVWx0aWxpdGllcy9OdW1iZXJVbHRpbGl0aWVzXCI7XG5pbXBvcnQgU2ltcGxlUG9vbCBmcm9tIFwiLi4vVWx0aWxpdGllcy9TaW1wbGVQb29sXCI7XG5pbXBvcnQgQmxvY2tTY3JpcHQsIHtCbG9ja01vdmVUeXBlfSBmcm9tIFwiLi9CbG9ja1NjcmlwdFwiO1xuaW1wb3J0IFBsYXllclNjcmlwdCBmcm9tIFwiLi9QbGF5ZXJTY3JpcHRcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudFxue1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEdhbWVNYW5hZ2VyO1xuICAgIEBwcm9wZXJ0eShQbGF5ZXJTY3JpcHQpXG4gICAgcHVibGljIEtvbmdpTm9kZTogUGxheWVyU2NyaXB0ID0gbnVsbDtcbiAgICBAcHJvcGVydHlcbiAgICBwdWJsaWMgS29uZ2lSYWRpdXM6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgQmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBNYXhCbG9ja1F0eTogbnVtYmVyID0gMTA7XG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBNYXhWZWxvY2l0eTogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIE1heEZseWluZ1RpbWU6IG51bWJlciA9IDEuMjtcbiAgICBwcml2YXRlIEdyYXZpdHk6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIExhbmRpbmdWZWxvY2l0eTogbnVtYmVyID0gNTAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgQ2FudmFzV2lkdGg6IG51bWJlciA9IDEwODA7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5HZW5lcmF0ZUNvbG9yTGlzdCh0aGlzLk1heEJsb2NrUXR5KTtcbiAgICAgICAgdGhpcy5HZW5lcmF0ZVNjYWxlTGlzdCgpO1xuICAgICAgICAvLyBUSOG7nEkgR0lBTiBHSeG7rkEgMiBM4bqmTiBKVU1QIEzDgCAxLjJTIChO4bq+VSBLTyBUQVApXG4gICAgICAgIC8vID0+IEdSQVZJVFkgKiAwLjYgPSBNYXhWZWxvY2l0eVxuICAgICAgICB0aGlzLkdyYXZpdHkgPSB0aGlzLk1heFZlbG9jaXR5ICogMiAvIHRoaXMuTWF4Rmx5aW5nVGltZTtcbiAgICAgICAgdGhpcy5TdGFydE5ld0dhbWUoKTtcbiAgICAgICAgdGhpcy5UYXBOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkxhbmRpbmcsIHRoaXMpO1xuICAgIH1cblxuXG5cblxuICAgIC8qKlxuICAgICAqIMSQw6FwIHh14buRbmcgxJHhuqV0XG4gICAgICovXG4gICAgcHJpdmF0ZSBMYW5kaW5nKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5Jc1BhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLklzU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuS29uZ2lOb2RlLkxhbmRpbmcoKTtcbiAgICB9XG5cblxuICAgIEBwcm9wZXJ0eShFbmRHYW1lUG9wdXApXG4gICAgcHJpdmF0ZSBlbmRHYW1lUG9wdXA6IEVuZEdhbWVQb3B1cCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogUsO6dCBj4buNYywgR2FtZU92ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgU2hvd0dhbWVPdmVyKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuU2NvcmVMYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQmxvY2tMaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tMaXN0W2ldLk9uR2FtZU92ZXIoKTtcbiAgICAgICAgICAgIH0sIGkgKiAwLjA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLmVuZEdhbWVQb3B1cC5TaG93RW5kR2FtZVBvcHVwKCk7fSwgdGhpcy5CbG9ja0xpc3QubGVuZ3RoICogMC4wNSArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENodXnhu4NuIHNhbmcgYmxvY2sgdGnhur9wIHRoZW8gKGJsb2NrIHRyxrDhu5tjIMSRxrDhu6NjIMSRw6FwIHh14buRbmcgYW4gdG/DoG4pXG4gICAgICovXG4gICAgcHVibGljIFNldE5leHRCbG9jaygpOiB2b2lkXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQmxvY2tMaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkJsb2NrTGlzdFtpXS5DaGFuZ2VTdGF0ZVRvTmV4dEluZGV4KHRoaXMuTWF4Rmx5aW5nVGltZSAvIDMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrSW5kZXgtLTtcbiAgICAgICAgdGhpcy5DdXJyZW50U2NvcmUrKztcbiAgICAgICAgdGhpcy5TY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuQ3VycmVudFNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuQmxvY2tMaXN0LnNwbGljZSgwLCAxKTtcbiAgICAgICAgdGhpcy5TcGF3bkJsb2NrKCk7XG4gICAgICAgIHRoaXMuQmxvY2tMaXN0WzBdLkVuYWJsZUZvckNvbGxpc2lvbih0cnVlKTtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIFB1c2hVcEtvbmdpKHB1c2hVcEFuZ2xlOiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLktvbmdpTm9kZS5KdW1wKHB1c2hVcEFuZ2xlLCB0aGlzLk1heFZlbG9jaXR5LCB0aGlzLkdyYXZpdHkpO1xuICAgIH1cblxuXG5cblxuICAgIC8vI3JlZ2lvbiBHQU1FUExBWVxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIFNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIFRhcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBDdXJyZW50U2NvcmU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIElzU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBJc1BhdXNlR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBTdGFydE5ld0dhbWUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5CbG9ja0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5Lb25naU5vZGUuUmVzZXROZXdHYW1lKCk7XG4gICAgICAgIHRoaXMuSXNQYXVzZUdhbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLklzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLkN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrSW5kZXggPSAwO1xuICAgICAgICB0aGlzLlNwYXduRmlyc3RCbG9jaygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5TcGF3bkJsb2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuQ3VycmVudFNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICAgIFxuXG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvbiBHQU1FUExBWVxuICAgIC8vI3JlZ2lvbiBTUEFXTiBCTE9DS1NcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIEJsb2NrQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgU3RlcEFuZ2xlOiBudW1iZXIgPSAyLjVcbiAgICBwcml2YXRlIE1heEFuZ2xlTXVsdGlwbGllcjogbnVtYmVyID0gMTA7XG5cbiAgICBwcml2YXRlIEN1cnJlbnRTcGF3bmVkQmxvY2s6IEJsb2NrU2NyaXB0ID0gbnVsbDtcbiAgICBwcml2YXRlIEN1cnJlbnRCbG9ja0FuZ2xlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBDdXJyZW50QmxvY2tXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgQ3VycmVudEJsb2NrUG9zaXRpb246IGNjLlZlYzM7XG4gICAgcHJpdmF0ZSBDdXJyZW50QmxvY2tZT2Zmc2V0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBDdXJyZW50QmxvY2tJbmRleDogbnVtYmVyID0gMDsvL2luZGV4IGPhu6dhIGJsb2NrIMSRxrDhu6NjIHRow6ptIHbDoG8gZGFuaCBzw6FjaCwgYmxvY2sgY8OgbmcgduG7gSBzYXUgdGjDrCBwaOG6o2kgY8OgbmcgZ+G6p24gduG7m2kgYmFja2dyb3VuZCBjb2xvclxuICAgIHByaXZhdGUgQmxvY2tMaXN0OiBCbG9ja1NjcmlwdFtdID0gW107XG5cbiAgICBwcml2YXRlIFNwYXduRmlyc3RCbG9jaygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLkN1cnJlbnRTcGF3bmVkQmxvY2sgPSBTaW1wbGVQb29sLmluc3RhbmNlLlNwYXduKHRoaXMuQmxvY2tQcmVmYWIsIHRoaXMuQmxvY2tDb250YWluZXIpLmdldENvbXBvbmVudChCbG9ja1NjcmlwdCk7XG4gICAgICAgIHRoaXMuQ3VycmVudFNwYXduZWRCbG9jay5TZXRCbG9ja0luZm8oMTA4MCwgMCwgQmxvY2tNb3ZlVHlwZS5TdGF0aWMsIGNjLnYzKDAsIC00ODApLCB0aGlzLkN1cnJlbnRCbG9ja0luZGV4LCAwKTsgLy8gNDgwIHTDuXkgY2jhu4luaCBzYXVcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLkVuYWJsZUZvckNvbGxpc2lvbihmYWxzZSlcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLm5vZGUucGFyZW50ID0gdGhpcy5CbG9ja0NvbnRhaW5lcjtcblxuXG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrSW5kZXgrKztcblxuICAgICAgICB0aGlzLkN1cnJlbnRCbG9ja0FuZ2xlID0gTnVtYmVyVWx0aWxpdGllcy5HZXRSYW5kb21JbnROdW1iZXIoMSwgdGhpcy5NYXhBbmdsZU11bHRpcGxpZXIgKyAxKSAqIE51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tU2lnbigpICogdGhpcy5TdGVwQW5nbGU7XG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrV2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24gPSBjYy52MygwLCAtMzYwKTsgLy8gMzYwIHTDuXkgY2jhu4luaCBzYXVcbiAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tZT2Zmc2V0ID0gLTEyMDtcblxuICAgICAgICB0aGlzLkJsb2NrTGlzdC5wdXNoKHRoaXMuQ3VycmVudFNwYXduZWRCbG9jayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNwYXduIGPDoWMgYmxvY2sgKGtvIHBo4bqjaSBibG9jayDEkeG6p3UgdGnDqm4pXG4gICAgICovXG4gICAgcHJpdmF0ZSBTcGF3bkJsb2NrKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuQ3VycmVudFNwYXduZWRCbG9jayA9IFNpbXBsZVBvb2wuaW5zdGFuY2UuU3Bhd24odGhpcy5CbG9ja1ByZWZhYiwgdGhpcy5CbG9ja0NvbnRhaW5lcikuZ2V0Q29tcG9uZW50KEJsb2NrU2NyaXB0KTtcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLlNldEJsb2NrSW5mbyh0aGlzLkN1cnJlbnRCbG9ja1dpZHRoLCB0aGlzLkN1cnJlbnRCbG9ja0FuZ2xlLCBCbG9ja01vdmVUeXBlLlN0YXRpYywgdGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbiwgdGhpcy5DdXJyZW50QmxvY2tJbmRleCwgdGhpcy5DdXJyZW50QmxvY2tZT2Zmc2V0KTtcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLm5vZGUucGFyZW50ID0gdGhpcy5CbG9ja0NvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLm5vZGUuc2V0U2libGluZ0luZGV4KDApO1xuXG4gICAgICAgIHRoaXMuQ2FsY3VsYXRlTmV4dEJsb2NrU3RhdGUoKTtcbiAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tJbmRleCsrO1xuXG4gICAgICAgIHRoaXMuQmxvY2tMaXN0LnB1c2godGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgQ2FsY3VsYXRlTmV4dEJsb2NrU3RhdGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IHBsYXllclZlbG9jaXR5WCA9IC10aGlzLk1heFZlbG9jaXR5ICogTWF0aC5zaW4oMiAqIHRoaXMuQ3VycmVudEJsb2NrQW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IG1heEZseWluZ1JhbmdlID0gcGxheWVyVmVsb2NpdHlYICogdGhpcy5NYXhGbHlpbmdUaW1lO1xuICAgICAgICBsZXQgZGVsdGFCZXR3ZWVuVHdvQmxvY2sgPSBtYXhGbHlpbmdSYW5nZSAqIE51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tRmxvYXROdW1iZXIoMC4zLCAwLjcpO1xuXG4gICAgICAgIGlmICh0aGlzLkN1cnJlbnRCbG9ja0luZGV4IDwgNSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbiA9IGNjLnYzKGNjLm1pc2MuY2xhbXBmKHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24ueCArIGRlbHRhQmV0d2VlblR3b0Jsb2NrLCAtMzI0LCAzMjQpLFxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24ueSArIDEyMCk7XG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRCbG9ja1lPZmZzZXQgPSAtMTIwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbiA9IGNjLnYzKGNjLm1pc2MuY2xhbXBmKHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24ueCArIGRlbHRhQmV0d2VlblR3b0Jsb2NrLCAtMzI0LCAzMjQpLFxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24ueSArIDMwKTtcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrWU9mZnNldCA9IC0zMDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tXaWR0aCA9IGNjLm1pc2MuY2xhbXBmKE1hdGguYWJzKG1heEZseWluZ1JhbmdlKSAqIE51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tRmxvYXROdW1iZXIoMC4zLCAwLjcpLCAyODgsIDU0MCk7XG5cbiAgICAgICAgaWYgKHRoaXMuQ3VycmVudEJsb2NrQW5nbGUgPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbi54ICsgcGxheWVyVmVsb2NpdHlYICogdGhpcy5NYXhGbHlpbmdUaW1lIDwgLXRoaXMuQ2FudmFzV2lkdGggLyAyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrQW5nbGUgPSAtTnVtYmVyVWx0aWxpdGllcy5HZXRSYW5kb21JbnROdW1iZXIoMSwgdGhpcy5NYXhBbmdsZU11bHRpcGxpZXIgKyAxKSAqIHRoaXMuU3RlcEFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrQW5nbGUgPSBOdW1iZXJVbHRpbGl0aWVzLkdldFJhbmRvbUludE51bWJlcigxLCB0aGlzLk1heEFuZ2xlTXVsdGlwbGllciArIDEpICogdGhpcy5TdGVwQW5nbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbi54ICsgcGxheWVyVmVsb2NpdHlYICogdGhpcy5NYXhGbHlpbmdUaW1lID4gdGhpcy5DYW52YXNXaWR0aCAvIDIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tBbmdsZSA9IE51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tSW50TnVtYmVyKDEsIHRoaXMuTWF4QW5nbGVNdWx0aXBsaWVyICsgMSkgKiB0aGlzLlN0ZXBBbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbnRCbG9ja0FuZ2xlID0gLU51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tSW50TnVtYmVyKDEsIHRoaXMuTWF4QW5nbGVNdWx0aXBsaWVyICsgMSkgKiB0aGlzLlN0ZXBBbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyNlbmRyZWdpb24gU1BBV04gQkxPQ0tTXG5cblxuICAgIC8vI3JlZ2lvbiBNw4BVIFThu6pORyDEkE/huqBOIFNDT1JFXG4gICAgQHByb3BlcnR5KGNjLkNvbG9yKVxuICAgIHByaXZhdGUgQmxvY2tDb2xvcjogY2MuQ29sb3IgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuQ29sb3JdKVxuICAgIHByaXZhdGUgbGV2ZWxDb2xvckxpc3Q6IGNjLkNvbG9yW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwcml2YXRlIGJhY2tncm91bmRTcHJpdGVGcmFtZUxpc3Q6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBwdWJsaWMgQ29sb3JMaXN0OiBjYy5Db2xvcltdID0gW107XG5cbiAgICBwcml2YXRlIEdlbmVyYXRlQ29sb3JMaXN0KG51bWJlck9mQ29sb3I6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZDb2xvcjsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkNvbG9yTGlzdC5wdXNoKE51bWJlclVsdGlsaXRpZXMuR2V0TGVycENvbG9yKHRoaXMuQmxvY2tDb2xvciwgdGhpcy5sZXZlbENvbG9yTGlzdFswXSwgMSAtIE1hdGgucG93KDIgLyAzLCBpKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8jZW5kcmVnaW9uIE3DgFUgVOG7qk5HIMSQT+G6oE4gU0NPUkVcblxuICAgIC8vI3JlZ2lvbiBTQ0FMRSBU4buqTkcgQkxPQ0sgVEhFTyBJTkRFWFxuICAgIHB1YmxpYyBTY2FsZUxpc3Q6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBEaXN0YW5jZVRvRmlyc3RCbG9jazogbnVtYmVyID0gMTk7IC8vIGtob+G6o25nIGPDoWNoIHThu6sgbeG6r3QgdOG7m2kgYmxvY2sgxJHhuqd1IHRpw6puLCB24bubaSBxdXkgxrDhu5tjIGPDoWMgYmxvY2sgc+G6vSBjw6FjaCBuaGF1IDEgxJHGoW4gduG7i1xuICAgIHByaXZhdGUgR2VuZXJhdGVTY2FsZUxpc3QoKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLk1heEJsb2NrUXR5OyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuU2NhbGVMaXN0LnB1c2godGhpcy5EaXN0YW5jZVRvRmlyc3RCbG9jayAvICh0aGlzLkRpc3RhbmNlVG9GaXJzdEJsb2NrICsgaSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8jZW5kcmVnaW9uIFNDQUxFIFThu6pORyBCTE9DSyBUSEVPIElOREVYXG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/ScreenManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93a41LnPwBGeZugE3p+lJMq', 'ScreenManager');
// Scripts/Common/ScreenManager.ts

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
exports.ScreenConfig = void 0;
var DialogManager_1 = require("./DialogManager");
var property = cc._decorator.property;
var ccclass = cc._decorator.ccclass;
var DlgNameConfig = {
    "Setting": 0,
    "Setting2": 1,
    "LoseDlg": 2,
    "Summary": 3,
    "Complete": 4
};
exports.ScreenConfig = {
    "Game": 0,
    "Home": 1,
};
var ScreenManager = /** @class */ (function (_super) {
    __extends(ScreenManager, _super);
    function ScreenManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiRoot = null;
        _this.dlgPrefabsList = [];
        _this.screenList = [];
        return _this;
    }
    ScreenManager_1 = ScreenManager;
    Object.defineProperty(ScreenManager, "instance", {
        get: function () {
            return this._ins || new ScreenManager_1;
        },
        enumerable: false,
        configurable: true
    });
    ScreenManager.prototype.onLoad = function () {
        ScreenManager_1._ins = this;
    };
    ScreenManager.prototype.start = function () {
        ScreenManager_1.instance.onShowScreenByName(exports.ScreenConfig.Home);
    };
    ScreenManager.prototype.onShowScreenByName = function (name) {
        for (var i = 0; i < Object.keys(exports.ScreenConfig).length; i++) {
            var currentNode = this.screenList[i];
            currentNode.active = i == name;
        }
    };
    ScreenManager.prototype.onShowDlgByName = function (name) {
        // Common.playAudioEffect(AudioEffectID.ClickBtn, false);
        var a = DlgNameConfig[name];
        var prefab = this.dlgPrefabsList[a];
        DialogManager_1.default.instance.showDlg(prefab, this.uiRoot);
    };
    var ScreenManager_1;
    __decorate([
        property(cc.Node)
    ], ScreenManager.prototype, "uiRoot", void 0);
    __decorate([
        property(cc.Prefab)
    ], ScreenManager.prototype, "dlgPrefabsList", void 0);
    __decorate([
        property(cc.Node)
    ], ScreenManager.prototype, "screenList", void 0);
    ScreenManager = ScreenManager_1 = __decorate([
        ccclass
    ], ScreenManager);
    return ScreenManager;
}(cc.Component));
exports.default = ScreenManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbW1vbi9TY3JlZW5NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsSUFBTyxRQUFRLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDekMsSUFBTyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFFdkMsSUFBTSxhQUFhLEdBQUc7SUFDbEIsU0FBUyxFQUFFLENBQUM7SUFDWixVQUFVLEVBQUUsQ0FBQztJQUNiLFNBQVMsRUFBRSxDQUFDO0lBQ1osU0FBUyxFQUFFLENBQUM7SUFDWixVQUFVLEVBQUUsQ0FBQztDQUNoQixDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUc7SUFDeEIsTUFBTSxFQUFFLENBQUM7SUFDVCxNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUM7QUFHRjtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXNDQztRQXBDRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLG9CQUFjLEdBQWdCLEVBQUUsQ0FBQztRQUdqQyxnQkFBVSxHQUFjLEVBQUUsQ0FBQzs7SUE4Qi9CLENBQUM7c0JBdENvQixhQUFhO0lBWTlCLHNCQUFXLHlCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksZUFBYSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsOEJBQU0sR0FBTjtRQUNJLGVBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksZUFBYSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsSUFBWTtRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBWSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUdELHVDQUFlLEdBQWYsVUFBZ0IsSUFBWTtRQUN4Qix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsdUJBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7SUFuQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNhO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1M7SUFSVixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBc0NqQztJQUFELG9CQUFDO0NBdENELEFBc0NDLENBdEMwQyxFQUFFLENBQUMsU0FBUyxHQXNDdEQ7a0JBdENvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZ01hbmFnZXIgZnJvbSBcIi4vRGlhbG9nTWFuYWdlclwiO1xuaW1wb3J0IHByb3BlcnR5ID0gY2MuX2RlY29yYXRvci5wcm9wZXJ0eTtcbmltcG9ydCBjY2NsYXNzID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xuXG5jb25zdCBEbGdOYW1lQ29uZmlnID0ge1xuICAgIFwiU2V0dGluZ1wiOiAwLFxuICAgIFwiU2V0dGluZzJcIjogMSxcbiAgICBcIkxvc2VEbGdcIjogMixcbiAgICBcIlN1bW1hcnlcIjogMyxcbiAgICBcIkNvbXBsZXRlXCI6IDRcbn07XG5cbmV4cG9ydCBjb25zdCBTY3JlZW5Db25maWcgPSB7XG4gICAgXCJHYW1lXCI6IDAsXG4gICAgXCJIb21lXCI6IDEsXG59O1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWlSb290OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZGxnUHJlZmFic0xpc3Q6IGNjLlByZWZhYltdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzY3JlZW5MaXN0OiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHN0YXRpYyBfaW5zOiBTY3JlZW5NYW5hZ2VyO1xuXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBTY3JlZW5NYW5hZ2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucyB8fCBuZXcgU2NyZWVuTWFuYWdlcjtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNjcmVlbk1hbmFnZXIuX2lucyA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIFNjcmVlbk1hbmFnZXIuaW5zdGFuY2Uub25TaG93U2NyZWVuQnlOYW1lKFNjcmVlbkNvbmZpZy5Ib21lKTtcbiAgICB9XG5cbiAgICBvblNob3dTY3JlZW5CeU5hbWUobmFtZTogbnVtYmVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoU2NyZWVuQ29uZmlnKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5zY3JlZW5MaXN0W2ldO1xuICAgICAgICAgICAgY3VycmVudE5vZGUuYWN0aXZlID0gaSA9PSBuYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblNob3dEbGdCeU5hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIENvbW1vbi5wbGF5QXVkaW9FZmZlY3QoQXVkaW9FZmZlY3RJRC5DbGlja0J0biwgZmFsc2UpO1xuICAgICAgICBsZXQgYSA9IERsZ05hbWVDb25maWdbbmFtZV1cbiAgICAgICAgbGV0IHByZWZhYiA9IHRoaXMuZGxnUHJlZmFic0xpc3RbYV07XG4gICAgICAgIERpYWxvZ01hbmFnZXIuaW5zdGFuY2Uuc2hvd0RsZyhwcmVmYWIsIHRoaXMudWlSb290KTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay/AutoMoving.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67ed4clib9FWIBRkG1Ngs8c', 'AutoMoving');
// Scripts/Gameplay/AutoMoving.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AutoMoving = /** @class */ (function (_super) {
    __extends(AutoMoving, _super);
    function AutoMoving() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoMoving.prototype.SetMoveInfo = function (MoveSpeed, MinPosition, MaxPosition) {
        this.moveSpeed = MoveSpeed;
        this.minPosition = MinPosition;
        this.maxPosition = MaxPosition;
    };
    AutoMoving.prototype.update = function (dt) {
        // this.node.position = this.node.position.add()
    };
    AutoMoving = __decorate([
        ccclass
    ], AutoMoving);
    return AutoMoving;
}(cc.Component));
exports.default = AutoMoving;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVwbGF5L0F1dG9Nb3ZpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBZUEsQ0FBQztJQVZHLGdDQUFXLEdBQVgsVUFBWSxTQUFpQixFQUFFLFdBQW1CLEVBQUUsV0FBbUI7UUFFbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELDJCQUFNLEdBQU4sVUFBTyxFQUFVO1FBRWIsZ0RBQWdEO0lBQ3BELENBQUM7SUFkZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWU5QjtJQUFELGlCQUFDO0NBZkQsQUFlQyxDQWZ1QyxFQUFFLENBQUMsU0FBUyxHQWVuRDtrQkFmb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Nb3ZpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnRcbntcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgbWluUG9zaXRpb246IG51bWJlcjtcbiAgICBwcml2YXRlIG1heFBvc2l0aW9uOiBudW1iZXI7XG4gICAgU2V0TW92ZUluZm8oTW92ZVNwZWVkOiBudW1iZXIsIE1pblBvc2l0aW9uOiBudW1iZXIsIE1heFBvc2l0aW9uOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IE1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5taW5Qb3NpdGlvbiA9IE1pblBvc2l0aW9uO1xuICAgICAgICB0aGlzLm1heFBvc2l0aW9uID0gTWF4UG9zaXRpb247XG4gICAgfVxuICAgIHVwZGF0ZShkdDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCgpXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Ultilities/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '211a2eZkeJHwZaHmg4hM0t5', 'SoundManager');
// Scripts/Ultilities/SoundManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NumberUltilities_1 = require("./NumberUltilities");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BackgroundSource = null;
        _this.EffectSource = null;
        //#endregion SOUND EFFECT
        //#region EFFECT LIST
        // PHẦN NÀY TÙY TỪNG GAME
        // GIỮ LẠI HOẶC XÓA THÌ TÙY
        _this.buttonSound = null;
        _this.hitSound = [];
        _this.gameOverSound = null;
        return _this;
    }
    SoundManager_1 = SoundManager;
    SoundManager.prototype.onLoad = function () {
        if (SoundManager_1.Instance == null) {
            SoundManager_1.Instance = this;
        }
        else {
            this.destroy();
        }
        cc.game.addPersistRootNode(this.node);
    };
    //#region BACKGROUND MUSIC
    SoundManager.prototype.PauseBackgroundMusic = function () {
        this.BackgroundSource.pause();
    };
    SoundManager.prototype.ResumeBackgroundMusic = function () {
        this.BackgroundSource.resume();
    };
    SoundManager.prototype.ChangeBackgroundMusic = function (newBackgroundMusic) {
        this.BackgroundSource.clip = newBackgroundMusic;
    };
    //#endregion BACKGROUND MUSIC
    //#region SOUND EFFECT
    SoundManager.prototype.PlaySoundEffect = function (efxClip) {
        this.EffectSource.clip = efxClip;
        this.EffectSource.play();
    };
    SoundManager.prototype.MuteSoundEffect = function () {
        this.EffectSource.mute = true;
    };
    SoundManager.prototype.UnmuteSoundEffect = function () {
        this.EffectSource.mute = false;
    };
    SoundManager.prototype.PlayButtonSound = function () {
        this.PlaySoundEffect(this.buttonSound);
    };
    SoundManager.prototype.PlayHitSound = function () {
        this.PlaySoundEffect(this.hitSound[NumberUltilities_1.default.GetRandomIntNumber(0, this.hitSound.length)]);
    };
    SoundManager.prototype.PlayGameOverSound = function () {
        this.PlaySoundEffect(this.gameOverSound);
    };
    //#endregion EFFECT LIST
    //TODO Pause sound background
    SoundManager.prototype.pauseBGM = function () {
    };
    SoundManager.prototype.resumeBGM = function () {
    };
    var SoundManager_1;
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "BackgroundSource", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "EffectSource", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SoundManager.prototype, "buttonSound", void 0);
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "hitSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SoundManager.prototype, "gameOverSound", void 0);
    SoundManager = SoundManager_1 = __decorate([
        ccclass
    ], SoundManager);
    return SoundManager;
}(cc.Component));
exports.default = SoundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VsdGlsaXRpZXMvU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXNGQztRQW5GVyxzQkFBZ0IsR0FBbUIsSUFBSSxDQUFDO1FBRXhDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQTRDNUMseUJBQXlCO1FBRXpCLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBRW5CLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxjQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7O0lBMkIvQyxDQUFDO3FCQXRGb0IsWUFBWTtJQU9uQiw2QkFBTSxHQUFoQjtRQUVJLElBQUksY0FBWSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQ2pDO1lBQ0ksY0FBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDaEM7YUFFRDtZQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtRQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCwwQkFBMEI7SUFDbkIsMkNBQW9CLEdBQTNCO1FBRUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDTSw0Q0FBcUIsR0FBNUI7UUFFSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLDRDQUFxQixHQUE1QixVQUE2QixrQkFBZ0M7UUFFekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsNkJBQTZCO0lBRTdCLHNCQUFzQjtJQUNmLHNDQUFlLEdBQXRCLFVBQXVCLE9BQXFCO1FBRXhDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTSxzQ0FBZSxHQUF0QjtRQUVJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBQ00sd0NBQWlCLEdBQXhCO1FBRUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFZTSxzQ0FBZSxHQUF0QjtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxtQ0FBWSxHQUFuQjtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVNLHdDQUFpQixHQUF4QjtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCx3QkFBd0I7SUFHeEIsNkJBQTZCO0lBRTdCLCtCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtJQUVBLENBQUM7O0lBbEZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MERBQ3VCO0lBRWhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ21CO0lBa0Q1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNrQjtJQUV6QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3VEQUNvQjtJQTNEMUIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXNGaEM7SUFBRCxtQkFBQztDQXRGRCxBQXNGQyxDQXRGeUMsRUFBRSxDQUFDLFNBQVMsR0FzRnJEO2tCQXRGb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTnVtYmVyVWx0aWxpdGllcyBmcm9tIFwiLi9OdW1iZXJVbHRpbGl0aWVzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50XG57XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIHByaXZhdGUgQmFja2dyb3VuZFNvdXJjZTogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcbiAgICBwcml2YXRlIEVmZmVjdFNvdXJjZTogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IFNvdW5kTWFuYWdlcjtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmIChTb3VuZE1hbmFnZXIuSW5zdGFuY2UgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgfVxuICAgIC8vI3JlZ2lvbiBCQUNLR1JPVU5EIE1VU0lDXG4gICAgcHVibGljIFBhdXNlQmFja2dyb3VuZE11c2ljKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuQmFja2dyb3VuZFNvdXJjZS5wYXVzZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgUmVzdW1lQmFja2dyb3VuZE11c2ljKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuQmFja2dyb3VuZFNvdXJjZS5yZXN1bWUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQ2hhbmdlQmFja2dyb3VuZE11c2ljKG5ld0JhY2tncm91bmRNdXNpYzogY2MuQXVkaW9DbGlwKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5CYWNrZ3JvdW5kU291cmNlLmNsaXAgPSBuZXdCYWNrZ3JvdW5kTXVzaWM7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvbiBCQUNLR1JPVU5EIE1VU0lDXG5cbiAgICAvLyNyZWdpb24gU09VTkQgRUZGRUNUXG4gICAgcHVibGljIFBsYXlTb3VuZEVmZmVjdChlZnhDbGlwOiBjYy5BdWRpb0NsaXApOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLkVmZmVjdFNvdXJjZS5jbGlwID0gZWZ4Q2xpcDtcbiAgICAgICAgdGhpcy5FZmZlY3RTb3VyY2UucGxheSgpO1xuICAgIH1cbiAgICBwdWJsaWMgTXV0ZVNvdW5kRWZmZWN0KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuRWZmZWN0U291cmNlLm11dGUgPSB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgVW5tdXRlU291bmRFZmZlY3QoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5FZmZlY3RTb3VyY2UubXV0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb24gU09VTkQgRUZGRUNUXG5cbiAgICAvLyNyZWdpb24gRUZGRUNUIExJU1RcbiAgICAvLyBQSOG6pk4gTsOAWSBUw5lZIFThu6pORyBHQU1FXG4gICAgLy8gR0nhu64gTOG6oEkgSE/hurZDIFjDk0EgVEjDjCBUw5lZXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIGJ1dHRvblNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcbiAgICBwcml2YXRlIGhpdFNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBnYW1lT3ZlclNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIHB1YmxpYyBQbGF5QnV0dG9uU291bmQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5QbGF5U291bmRFZmZlY3QodGhpcy5idXR0b25Tb3VuZCk7XG4gICAgfVxuXG4gICAgcHVibGljIFBsYXlIaXRTb3VuZCgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLlBsYXlTb3VuZEVmZmVjdCh0aGlzLmhpdFNvdW5kW051bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tSW50TnVtYmVyKDAsIHRoaXMuaGl0U291bmQubGVuZ3RoKV0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBQbGF5R2FtZU92ZXJTb3VuZCgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLlBsYXlTb3VuZEVmZmVjdCh0aGlzLmdhbWVPdmVyU291bmQpO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb24gRUZGRUNUIExJU1RcblxuXG4gICAgLy9UT0RPIFBhdXNlIHNvdW5kIGJhY2tncm91bmRcblxuICAgIHBhdXNlQkdNKCl7XG5cbiAgICB9XG5cbiAgICByZXN1bWVCR00oKXtcblxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Ultilities/SimplePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b27d5D6fc1Lcr9pM5Hxa9xm', 'SimplePool');
// Scripts/Ultilities/SimplePool.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimplePool = /** @class */ (function () {
    function SimplePool() {
        this.dictPool = {};
        this.dictPrefab = {};
    }
    SimplePool_1 = SimplePool;
    Object.defineProperty(SimplePool, "instance", {
        get: function () {
            if (this.Instance) {
                return this.Instance;
            }
            this.Instance = new SimplePool_1();
            return this.Instance;
        },
        enumerable: false,
        configurable: true
    });
    SimplePool.prototype.Spawn = function (prefab, parent) {
        var name = prefab.data.name;
        this.dictPrefab[name] = prefab;
        var node;
        if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this.dictPool[name];
            if (pool.size() > 0) {
                node = pool.get();
            }
            else {
                node = cc.instantiate(prefab);
            }
        }
        else {
            //没有对应对象池，创建他！
            var pool = new cc.NodePool();
            this.dictPool[name] = pool;
            node = cc.instantiate(prefab);
        }
        // parent.addChild(node);
        return node;
    };
    SimplePool.prototype.Despawn = function (node) {
        var name = node.name;
        var pool = null;
        if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this.dictPool[name];
        }
        else {
            //没有对应对象池，创建他！
            pool = new cc.NodePool();
            this.dictPool[name] = pool;
        }
        pool.put(node);
    };
    SimplePool.prototype.ClearPool = function (name) {
        if (this.dictPool.hasOwnProperty(name)) {
            var pool = this.dictPool[name];
            pool.clear();
        }
    };
    var SimplePool_1;
    SimplePool = SimplePool_1 = __decorate([
        ccclass
    ], SimplePool);
    return SimplePool;
}());
exports.default = SimplePool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VsdGlsaXRpZXMvU2ltcGxlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7UUFFWSxhQUFRLEdBQWtDLEVBQUUsQ0FBQTtRQUM1QyxlQUFVLEdBQWdDLEVBQUUsQ0FBQTtJQXFFeEQsQ0FBQzttQkF4RW9CLFVBQVU7SUFNM0Isc0JBQWtCLHNCQUFRO2FBQTFCO1lBRUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUNqQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDeEI7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBVSxFQUFFLENBQUM7WUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRU0sMEJBQUssR0FBWixVQUFhLE1BQWlCLEVBQUUsTUFBZTtRQUUzQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLElBQWEsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUN0QztZQUNJLFVBQVU7WUFDVixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFDbkI7Z0JBQ0ksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUcsQ0FBQzthQUN0QjtpQkFFRDtnQkFDSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztTQUNKO2FBQ0Q7WUFDSSxjQUFjO1lBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFFM0IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FFakM7UUFDRCx5QkFBeUI7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDRCQUFPLEdBQWQsVUFBZSxJQUFhO1FBRXhCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQ3RDO1lBQ0ksVUFBVTtZQUNWLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQ0Q7WUFDSSxjQUFjO1lBQ2QsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU0sOEJBQVMsR0FBaEIsVUFBaUIsSUFBWTtRQUV6QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUN0QztZQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQzs7SUF2RWdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3RTlCO0lBQUQsaUJBQUM7Q0F4RUQsQUF3RUMsSUFBQTtrQkF4RW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVQb29sXG57XG4gICAgcHJpdmF0ZSBkaWN0UG9vbDoge1tuYW1lOiBzdHJpbmddOiBjYy5Ob2RlUG9vbH0gPSB7fVxuICAgIHByaXZhdGUgZGljdFByZWZhYjoge1tuYW1lOiBzdHJpbmddOiBjYy5QcmVmYWJ9ID0ge31cbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZTogU2ltcGxlUG9vbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLkluc3RhbmNlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5JbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSW5zdGFuY2UgPSBuZXcgU2ltcGxlUG9vbCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5JbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU3Bhd24ocHJlZmFiOiBjYy5QcmVmYWIsIHBhcmVudDogY2MuTm9kZSlcbiAgICB7XG4gICAgICAgIGxldCBuYW1lID0gcHJlZmFiLmRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5kaWN0UHJlZmFiW25hbWVdID0gcHJlZmFiO1xuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZTtcbiAgICAgICAgaWYgKHRoaXMuZGljdFBvb2wuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5bey5pyJ5a+55bqU55qE5a+56LGh5rGgXG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMuZGljdFBvb2xbbmFtZV07XG4gICAgICAgICAgICBpZiAocG9vbC5zaXplKCkgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBwb29sLmdldCgpITtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5rKh5pyJ5a+55bqU5a+56LGh5rGg77yM5Yib5bu65LuW77yBXG4gICAgICAgICAgICBsZXQgcG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICAgICAgdGhpcy5kaWN0UG9vbFtuYW1lXSA9IHBvb2w7XG5cbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFyZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRGVzcGF3bihub2RlOiBjYy5Ob2RlKVxuICAgIHtcbiAgICAgICAgbGV0IG5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgIGxldCBwb29sID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuZGljdFBvb2wuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5bey5pyJ5a+55bqU55qE5a+56LGh5rGgXG4gICAgICAgICAgICBwb29sID0gdGhpcy5kaWN0UG9vbFtuYW1lXTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5rKh5pyJ5a+55bqU5a+56LGh5rGg77yM5Yib5bu65LuW77yBXG4gICAgICAgICAgICBwb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICAgICAgICB0aGlzLmRpY3RQb29sW25hbWVdID0gcG9vbDtcbiAgICAgICAgfVxuICAgICAgICBwb29sLnB1dChub2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQ2xlYXJQb29sKG5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmRpY3RQb29sLmhhc093blByb3BlcnR5KG5hbWUpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMuZGljdFBvb2xbbmFtZV07XG4gICAgICAgICAgICBwb29sLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Ultilities/CustomEventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '031cfr7CmBE+K2CbQ246r0y', 'CustomEventManager');
// Scripts/Ultilities/CustomEventManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomEventManager = /** @class */ (function (_super) {
    __extends(CustomEventManager, _super);
    function CustomEventManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NewGameEvent = "NewGame";
        _this.PauseGameEvent = "PauseGame";
        _this.ResumeGameEvent = "ResumeGame";
        _this.GameOverEvent = "GameOver";
        _this.ChangeBackgroundEvent = "ChangeEvent";
        _this.UpdateCoinEvent = "UpdateCoinEvent";
        _this.UpdateItemEvent = "UpdateItemEvent";
        _this.UpdateLifeEvent = "UpdateLifeEvent";
        return _this;
    }
    CustomEventManager_1 = CustomEventManager;
    CustomEventManager.prototype.onLoad = function () {
        CustomEventManager_1.Instance = this;
    };
    CustomEventManager.prototype.PostEvent = function (eventString) {
        this.node.emit(eventString);
    };
    CustomEventManager.prototype.PostEventWithParam_1 = function (eventString, param) {
        this.node.emit(eventString, param);
    };
    CustomEventManager.prototype.PostEventWithParam_2 = function (eventString, param_1, param_2) {
        this.node.emit(eventString, param_1, param_2);
    };
    CustomEventManager.prototype.PostEventWithParam_3 = function (eventString, param_1, param_2, param_3) {
        this.node.emit(eventString, param_1, param_2, param_3);
    };
    var CustomEventManager_1;
    CustomEventManager = CustomEventManager_1 = __decorate([
        ccclass
    ], CustomEventManager);
    return CustomEventManager;
}(cc.Component));
exports.default = CustomEventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VsdGlsaXRpZXMvQ3VzdG9tRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBc0NDO1FBN0JHLGtCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLG9CQUFjLEdBQVcsV0FBVyxDQUFDO1FBQ3JDLHFCQUFlLEdBQVcsWUFBWSxDQUFDO1FBQ3ZDLG1CQUFhLEdBQVcsVUFBVSxDQUFDO1FBQ25DLDJCQUFxQixHQUFXLGFBQWEsQ0FBQztRQUM5QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDO1FBQzVDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7UUFDNUMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFzQmhELENBQUM7MkJBdENvQixrQkFBa0I7SUFJekIsbUNBQU0sR0FBaEI7UUFFSSxvQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFZRCxzQ0FBUyxHQUFULFVBQVUsV0FBbUI7UUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGlEQUFvQixHQUFwQixVQUFxQixXQUFtQixFQUFFLEtBQVU7UUFFaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpREFBb0IsR0FBcEIsVUFBcUIsV0FBbUIsRUFBRSxPQUFZLEVBQUUsT0FBWTtRQUVoRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxpREFBb0IsR0FBcEIsVUFBcUIsV0FBbUIsRUFBRSxPQUFZLEVBQUUsT0FBWSxFQUFFLE9BQVk7UUFFOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7SUFyQ2dCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBc0N0QztJQUFELHlCQUFDO0NBdENELEFBc0NDLENBdEMrQyxFQUFFLENBQUMsU0FBUyxHQXNDM0Q7a0JBdENvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FdmVudE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnRcbntcblxuICAgIHN0YXRpYyBJbnN0YW5jZTogQ3VzdG9tRXZlbnRNYW5hZ2VyO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgQ3VzdG9tRXZlbnRNYW5hZ2VyLkluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBOZXdHYW1lRXZlbnQ6IHN0cmluZyA9IFwiTmV3R2FtZVwiO1xuICAgIFBhdXNlR2FtZUV2ZW50OiBzdHJpbmcgPSBcIlBhdXNlR2FtZVwiO1xuICAgIFJlc3VtZUdhbWVFdmVudDogc3RyaW5nID0gXCJSZXN1bWVHYW1lXCI7XG4gICAgR2FtZU92ZXJFdmVudDogc3RyaW5nID0gXCJHYW1lT3ZlclwiO1xuICAgIENoYW5nZUJhY2tncm91bmRFdmVudDogc3RyaW5nID0gXCJDaGFuZ2VFdmVudFwiO1xuICAgIFVwZGF0ZUNvaW5FdmVudDogc3RyaW5nID0gXCJVcGRhdGVDb2luRXZlbnRcIjtcbiAgICBVcGRhdGVJdGVtRXZlbnQ6IHN0cmluZyA9IFwiVXBkYXRlSXRlbUV2ZW50XCI7XG4gICAgVXBkYXRlTGlmZUV2ZW50OiBzdHJpbmcgPSBcIlVwZGF0ZUxpZmVFdmVudFwiO1xuXG5cbiAgICBQb3N0RXZlbnQoZXZlbnRTdHJpbmc6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5lbWl0KGV2ZW50U3RyaW5nKTtcbiAgICB9XG5cbiAgICBQb3N0RXZlbnRXaXRoUGFyYW1fMShldmVudFN0cmluZzogc3RyaW5nLCBwYXJhbTogYW55KTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoZXZlbnRTdHJpbmcsIHBhcmFtKTtcbiAgICB9XG5cbiAgICBQb3N0RXZlbnRXaXRoUGFyYW1fMihldmVudFN0cmluZzogc3RyaW5nLCBwYXJhbV8xOiBhbnksIHBhcmFtXzI6IGFueSk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5lbWl0KGV2ZW50U3RyaW5nLCBwYXJhbV8xLCBwYXJhbV8yKTtcbiAgICB9XG5cbiAgICBQb3N0RXZlbnRXaXRoUGFyYW1fMyhldmVudFN0cmluZzogc3RyaW5nLCBwYXJhbV8xOiBhbnksIHBhcmFtXzI6IGFueSwgcGFyYW1fMzogYW55KTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoZXZlbnRTdHJpbmcsIHBhcmFtXzEsIHBhcmFtXzIsIHBhcmFtXzMpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/DialogManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '750beR1bQBB16YgeyRCdgbO', 'DialogManager');
// Scripts/Common/DialogManager.ts

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
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var GameState_1 = require("./GameState");
var DialogManager = /** @class */ (function (_super) {
    __extends(DialogManager, _super);
    function DialogManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.antiContactLayerPrefab = null;
        _this.uiRoot = null;
        _this.dlgList = null;
        _this.antiContactLayer = null;
        return _this;
    }
    DialogManager_1 = DialogManager;
    Object.defineProperty(DialogManager, "instance", {
        get: function () {
            return this._ins || new DialogManager_1;
        },
        enumerable: false,
        configurable: true
    });
    DialogManager.prototype.onLoad = function () {
        DialogManager_1._ins = this;
        this.dlgList = new Array();
        this.antiContactLayer = null;
    };
    DialogManager.prototype.start = function () {
    };
    /**
     * 展示对话框
     * @param {*对话框预设} prefab
     * @param {*父节点} parent
     * @param {*坐标} pos
     */
    DialogManager.prototype.showDlg = function (prefab, parent, pos) {
        if (pos === void 0) { pos = cc.v2(0, 0); }
        if (this.dlgList.length == 0) {
            this.setAntiContactLayerActive(true);
            GameState_1.default.isPauseGame = true;
        }
        var dlg = cc.instantiate(prefab);
        var newPos = cc.v2(pos.x, pos.y);
        parent.addChild(dlg);
        dlg.setPosition(newPos);
        this.antiContactLayer.setPosition(newPos);
        dlg.setScale(0.5);
        dlg.runAction(cc.scaleTo(0.3, 1, 1));
        this.dlgList.push(dlg);
        return dlg;
    };
    /**
     * 关闭特定窗口
     * @param {*窗口} dlg
     */
    DialogManager.prototype.removeDlg = function (dlg) {
        var idx = this.dlgList.indexOf(dlg);
        if (idx > -1) {
            this.dlgList.splice(idx, 1);
        }
        dlg.destroy();
        if (this.dlgList.length == 0) {
            this.setAntiContactLayerActive(false);
            GameState_1.default.isPauseGame = false;
        }
        if (this.antiContactLayer != null) {
            this.antiContactLayer.removeFromParent();
            this.antiContactLayer.destroy();
            this.antiContactLayer = null;
        }
    };
    /**
     * 关闭最上层窗口
     */
    DialogManager.prototype.popDlg = function () {
        var idx = this.dlgList.length - 1;
        var dlg = this.dlgList[idx];
        if (dlg != null) {
            dlg.destroy();
        }
        this.dlgList.splice(idx, 1);
        if (this.dlgList.length == 0) {
            this.setAntiContactLayerActive(false);
            GameState_1.default.isPauseGame = false;
        }
    };
    /**
     * 关闭所有窗口，一般在切换场景时调用
     */
    DialogManager.prototype.removeAllDlgs = function () {
        for (var i = 0; i < this.dlgList.length; i++) {
            var dlg = this.dlgList[i];
            if (dlg != null) {
                dlg.destroy();
            }
        }
        if (this.antiContactLayer != null) {
            this.antiContactLayer.removeFromParent();
            this.antiContactLayer.destroy();
            this.antiContactLayer = null;
        }
        GameState_1.default.isPauseGame = false;
    };
    // update (dt) {},
    /**
     * 设置防触层活性
     * @param isActive
     */
    DialogManager.prototype.setAntiContactLayerActive = function (isActive) {
        if (isActive) {
            if (this.antiContactLayer == null) {
                this.antiContactLayer = cc.instantiate(this.antiContactLayerPrefab);
                this.uiRoot.addChild(this.antiContactLayer);
            }
            this.antiContactLayer.active = true;
        }
        else {
            if (this.antiContactLayer != null) {
                this.antiContactLayer.active = false;
            }
        }
    };
    var DialogManager_1;
    __decorate([
        property(cc.Prefab)
    ], DialogManager.prototype, "antiContactLayerPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], DialogManager.prototype, "uiRoot", void 0);
    DialogManager = DialogManager_1 = __decorate([
        ccclass
    ], DialogManager);
    return DialogManager;
}(cc.Component));
exports.default = DialogManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbW1vbi9EaWFsb2dNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU8sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLElBQU8sUUFBUSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0FBQ3pDLHlDQUFvQztBQUdwQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTZJQztRQTFJRyw0QkFBc0IsR0FBYyxJQUFJLENBQUM7UUFHekMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixhQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLHNCQUFnQixHQUFHLElBQUksQ0FBQzs7SUFvSTVCLENBQUM7c0JBN0lvQixhQUFhO0lBYTlCLHNCQUFXLHlCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksZUFBYSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsOEJBQU0sR0FBTjtRQUNJLGVBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUdEOzs7OztPQUtHO0lBQ0gsK0JBQU8sR0FBUCxVQUFRLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBaUI7UUFBakIsb0JBQUEsRUFBQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsbUJBQVMsQ0FB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LGdCQUFnQixFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7UUFFRCxtQkFBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUdELGtCQUFrQjtJQUVsQjs7O09BR0c7SUFDSCxpREFBeUIsR0FBekIsVUFBMEIsUUFBaUI7UUFDdkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUMvQztZQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3hDO1NBQ0o7SUFDTCxDQUFDOztJQXpJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lFQUNxQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNLO0lBTk4sYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTZJakM7SUFBRCxvQkFBQztDQTdJRCxBQTZJQyxDQTdJMEMsRUFBRSxDQUFDLFNBQVMsR0E2SXREO2tCQTdJb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjY2NsYXNzID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xuaW1wb3J0IHByb3BlcnR5ID0gY2MuX2RlY29yYXRvci5wcm9wZXJ0eTtcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYW50aUNvbnRhY3RMYXllclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpUm9vdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBkbGdMaXN0OiBhbnkgPSBudWxsO1xuICAgIGFudGlDb250YWN0TGF5ZXIgPSBudWxsO1xuXG4gICAgc3RhdGljIF9pbnM6IERpYWxvZ01hbmFnZXI7XG5cbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IERpYWxvZ01hbmFnZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBEaWFsb2dNYW5hZ2VyO1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgRGlhbG9nTWFuYWdlci5faW5zID0gdGhpcztcbiAgICAgICAgdGhpcy5kbGdMaXN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuYW50aUNvbnRhY3RMYXllciA9IG51bGw7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDlsZXnpLrlr7nor53moYZcbiAgICAgKiBAcGFyYW0geyrlr7nor53moYbpooTorr59IHByZWZhYlxuICAgICAqIEBwYXJhbSB7KueItuiKgueCuX0gcGFyZW50XG4gICAgICogQHBhcmFtIHsq5Z2Q5qCHfSBwb3NcbiAgICAgKi9cbiAgICBzaG93RGxnKHByZWZhYiwgcGFyZW50LCBwb3MgPSBjYy52MigwLCAwKSkge1xuXG4gICAgICAgIGlmICh0aGlzLmRsZ0xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QW50aUNvbnRhY3RMYXllckFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgIEdhbWVTdGF0ZS5pc1BhdXNlR2FtZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRsZyA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgIGxldCBuZXdQb3MgPSBjYy52Mihwb3MueCwgcG9zLnkpO1xuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoZGxnKTtcbiAgICAgICAgZGxnLnNldFBvc2l0aW9uKG5ld1Bvcyk7XG4gICAgICAgIHRoaXMuYW50aUNvbnRhY3RMYXllci5zZXRQb3NpdGlvbihuZXdQb3MpO1xuICAgICAgICBkbGcuc2V0U2NhbGUoMC41KTtcbiAgICAgICAgZGxnLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMywgMSwgMSkpO1xuXG4gICAgICAgIHRoaXMuZGxnTGlzdC5wdXNoKGRsZyk7XG5cbiAgICAgICAgcmV0dXJuIGRsZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhbPpl63nibnlrprnqpflj6NcbiAgICAgKiBAcGFyYW0geyrnqpflj6N9IGRsZ1xuICAgICAqL1xuICAgIHJlbW92ZURsZyhkbGcpIHtcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuZGxnTGlzdC5pbmRleE9mKGRsZyk7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5kbGdMaXN0LnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGxnLmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAodGhpcy5kbGdMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFudGlDb250YWN0TGF5ZXJBY3RpdmUoZmFsc2UpO1xuXG4gICAgICAgICAgICBHYW1lU3RhdGUuaXNQYXVzZUdhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFudGlDb250YWN0TGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hbnRpQ29udGFjdExheWVyLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuYW50aUNvbnRhY3RMYXllci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmFudGlDb250YWN0TGF5ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDlhbPpl63mnIDkuIrlsYLnqpflj6NcbiAgICAgKi9cbiAgICBwb3BEbGcoKSB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLmRsZ0xpc3QubGVuZ3RoIC0gMTtcblxuICAgICAgICBsZXQgZGxnID0gdGhpcy5kbGdMaXN0W2lkeF07XG5cbiAgICAgICAgaWYgKGRsZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBkbGcuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kbGdMaXN0LnNwbGljZShpZHgsIDEpO1xuXG4gICAgICAgIGlmICh0aGlzLmRsZ0xpc3QubGVuZ3RoID09IDApIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRBbnRpQ29udGFjdExheWVyQWN0aXZlKGZhbHNlKTtcblxuICAgICAgICAgICAgR2FtZVN0YXRlLmlzUGF1c2VHYW1lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhbPpl63miYDmnInnqpflj6PvvIzkuIDoiKzlnKjliIfmjaLlnLrmma/ml7bosIPnlKhcbiAgICAgKi9cbiAgICByZW1vdmVBbGxEbGdzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGxnTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRsZyA9IHRoaXMuZGxnTGlzdFtpXTtcblxuICAgICAgICAgICAgaWYgKGRsZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGxnLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFudGlDb250YWN0TGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hbnRpQ29udGFjdExheWVyLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuYW50aUNvbnRhY3RMYXllci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmFudGlDb250YWN0TGF5ZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgR2FtZVN0YXRlLmlzUGF1c2VHYW1lID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9rumYsuinpuWxgua0u+aAp1xuICAgICAqIEBwYXJhbSBpc0FjdGl2ZVxuICAgICAqL1xuICAgIHNldEFudGlDb250YWN0TGF5ZXJBY3RpdmUoaXNBY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbnRpQ29udGFjdExheWVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFudGlDb250YWN0TGF5ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFudGlDb250YWN0TGF5ZXJQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMudWlSb290LmFkZENoaWxkKHRoaXMuYW50aUNvbnRhY3RMYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFudGlDb250YWN0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFudGlDb250YWN0TGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW50aUNvbnRhY3RMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/GameState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2da1DBLdlK+LmDhpWHZ6tg', 'GameState');
// Scripts/Common/GameState.ts

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
var ccclass = cc._decorator.ccclass;
var GameState = /** @class */ (function (_super) {
    __extends(GameState, _super);
    function GameState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameState.isPauseGame = false;
    GameState.isShakeOn = false;
    GameState.isRevived = false;
    GameState.currentScore = 0;
    GameState.isVibrateOn = false;
    GameState = __decorate([
        ccclass
    ], GameState);
    return GameState;
}(cc.Component));
exports.default = GameState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbW1vbi9HYW1lU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFHdkM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBTUEsQ0FBQztJQUxVLHFCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLG1CQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLG1CQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLHNCQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLHFCQUFXLEdBQUcsS0FBSyxDQUFDO0lBTFYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQU03QjtJQUFELGdCQUFDO0NBTkQsQUFNQyxDQU5zQyxFQUFFLENBQUMsU0FBUyxHQU1sRDtrQkFOb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjY2NsYXNzID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgaXNQYXVzZUdhbWUgPSBmYWxzZTtcbiAgICBzdGF0aWMgaXNTaGFrZU9uID0gZmFsc2U7XG4gICAgc3RhdGljIGlzUmV2aXZlZCA9IGZhbHNlO1xuICAgIHN0YXRpYyBjdXJyZW50U2NvcmUgPSAwO1xuICAgIHN0YXRpYyBpc1ZpYnJhdGVPbiA9IGZhbHNlO1xufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Screen/Home/HomePlayerItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d7cdIz3AZBhYKPocEPgHZB', 'HomePlayerItem');
// Scripts/Screen/Home/HomePlayerItem.ts

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
exports.PlayerConnectedData = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerConnectedData = /** @class */ (function () {
    function PlayerConnectedData(playerID, avatar, name, isSelf) {
        this.playerID = 0;
        this.name = "";
        this.avatar = "";
        this.isSelf = false;
        this.playerID = playerID;
        this.name = name;
        this.avatar = avatar;
        this.isSelf = isSelf;
    }
    return PlayerConnectedData;
}());
exports.PlayerConnectedData = PlayerConnectedData;
var HomePlayerItem = /** @class */ (function (_super) {
    __extends(HomePlayerItem, _super);
    function HomePlayerItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatar = null;
        _this.lblName = null;
        _this.btnPlayWithFriend = null;
        return _this;
    }
    HomePlayerItem.prototype.onLoad = function () {
        // this.pathNode.zIndex = - 1;
    };
    HomePlayerItem.prototype.init = function (data, index, inviteFriendCb) {
        this.playerIndex = index;
        this.currentPlayer = data;
        this.updateItem(data);
    };
    HomePlayerItem.prototype.updateItem = function (data) {
        var that = this;
        this.lblName.string = data.name;
        if (data.avatar != "" && data.avatar != undefined) {
            cc.loader.load({ url: data.avatar, type: 'png' }, function (err, img) {
                if (err) {
                    console.log("Load image failed");
                }
                else {
                    that.avatar.spriteFrame = new cc.SpriteFrame(img);
                }
            });
        }
    };
    HomePlayerItem.prototype.handleButtonClick = function () {
        this.currentCallback(this.currentPlayer.playerID, this.currentPlayer.isSelf);
    };
    HomePlayerItem.prototype.onButtonPlayClick = function () {
    };
    __decorate([
        property(cc.Sprite)
    ], HomePlayerItem.prototype, "avatar", void 0);
    __decorate([
        property(cc.Label)
    ], HomePlayerItem.prototype, "lblName", void 0);
    __decorate([
        property(cc.Button)
    ], HomePlayerItem.prototype, "btnPlayWithFriend", void 0);
    HomePlayerItem = __decorate([
        ccclass
    ], HomePlayerItem);
    return HomePlayerItem;
}(cc.Component));
exports.default = HomePlayerItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NjcmVlbi9Ib21lL0hvbWVQbGF5ZXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQU1JLDZCQUFZLFFBQWdCLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxNQUFlO1FBTDNFLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxrREFBbUI7QUFlaEM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFrREM7UUEvQ1csWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLHVCQUFpQixHQUFjLElBQUksQ0FBQzs7SUF5Q2hELENBQUM7SUFqQ0csK0JBQU0sR0FBTjtRQUNJLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLElBQXlCLEVBQUUsS0FBYSxFQUFFLGNBQW1CO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxJQUEwQjtRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1lBQy9DLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7Z0JBQzlELElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNyRDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBR0QsMENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7SUFFQSxDQUFDO0lBOUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDYztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUN3QjtJQVQzQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBa0RsQztJQUFELHFCQUFDO0NBbERELEFBa0RDLENBbEQyQyxFQUFFLENBQUMsU0FBUyxHQWtEdkQ7a0JBbERvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBsYXllciA9IEZCSW5zdGFudC5wbGF5ZXI7XG5pbXBvcnQgYXNzZXRNYW5hZ2VyID0gY2MuYXNzZXRNYW5hZ2VyO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGNsYXNzIFBsYXllckNvbm5lY3RlZERhdGEge1xuICAgIHBsYXllcklEOiBudW1iZXIgPSAwO1xuICAgIG5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgYXZhdGFyOiBzdHJpbmcgPSBcIlwiO1xuICAgIGlzU2VsZjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocGxheWVySUQ6IG51bWJlciwgYXZhdGFyOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaXNTZWxmOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucGxheWVySUQgPSBwbGF5ZXJJRDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSBhdmF0YXI7XG4gICAgICAgIHRoaXMuaXNTZWxmID0gaXNTZWxmO1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQbGF5ZXJJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJpdmF0ZSBhdmF0YXI6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBsYmxOYW1lOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgYnRuUGxheVdpdGhGcmllbmQ6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBjdXJyZW50Q2FsbGJhY2s6IGFueTtcbiAgICBjdXJyZW50UGxheWVyOiBQbGF5ZXJDb25uZWN0ZWREYXRhO1xuXG5cbiAgICBwbGF5ZXJJbmRleDogbnVtYmVyO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyB0aGlzLnBhdGhOb2RlLnpJbmRleCA9IC0gMTtcbiAgICB9XG5cbiAgICBpbml0KGRhdGE6IFBsYXllckNvbm5lY3RlZERhdGEsIGluZGV4OiBudW1iZXIsIGludml0ZUZyaWVuZENiOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBkYXRhO1xuXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShkYXRhKTtcbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtKGRhdGE6ICBQbGF5ZXJDb25uZWN0ZWREYXRhKTogdm9pZCB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5sYmxOYW1lLnN0cmluZyA9IGRhdGEubmFtZTtcbiAgICAgICAgaWYgKGRhdGEuYXZhdGFyICE9IFwiXCIgJiYgZGF0YS5hdmF0YXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7dXJsOiBkYXRhLmF2YXRhciwgdHlwZTogJ3BuZyd9LCBmdW5jdGlvbiAoZXJyLCBpbWcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZCBpbWFnZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hdmF0YXIuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoaW1nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaGFuZGxlQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENhbGxiYWNrKHRoaXMuY3VycmVudFBsYXllci5wbGF5ZXJJRCwgdGhpcy5jdXJyZW50UGxheWVyLmlzU2VsZik7XG4gICAgfVxuXG4gICAgb25CdXR0b25QbGF5Q2xpY2soKTogdm9pZCB7XG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Screen/Home/HomePlayerScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83bbd29eaFN5IyvKggA16m9', 'HomePlayerScript');
// Scripts/Screen/Home/HomePlayerScript.ts

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
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var HomePlayerItem_1 = require("./HomePlayerItem");
var FBGlobal_1 = require("../../facebook/FBGlobal");
var SoundManager_1 = require("../../Ultilities/SoundManager");
var ScreenManager_1 = require("../../Common/ScreenManager");
var HomePlayerScript = /** @class */ (function (_super) {
    __extends(HomePlayerScript, _super);
    function HomePlayerScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spacing = 0; // space between each item
        _this.spawnCount = 0; // how many items we actually spawn
        _this.bufferZone = 0; // when item is away from bufferZone, we relocate it
        _this.svLevel = null;
        _this.content = null;
        _this.itemPrefab = null;
        _this.items = null;
        _this.updateTimer = 0;
        _this.updateInterval = 0;
        _this.lastContentPosX = 0;
        _this.listRankSize = 0;
        _this.isDraw = false;
        _this.itemTemplate = null;
        return _this;
    }
    HomePlayerScript_1 = HomePlayerScript;
    Object.defineProperty(HomePlayerScript, "instance", {
        get: function () {
            return this._ins || new HomePlayerScript_1;
        },
        enumerable: false,
        configurable: true
    });
    HomePlayerScript.prototype.onLoad = function () {
        HomePlayerScript_1._ins = this;
        this.items = []; // array to store spawned items
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosX = 0; // use this variable to detect if we are scrolling up or down
        this.itemTemplate = cc.instantiate(this.itemPrefab);
    };
    HomePlayerScript.prototype.start = function () {
        this.loadData();
    };
    HomePlayerScript.prototype.loadData = function () {
        var self = this;
        var listData = [];
        for (var i = 0; i < 30; i++) {
            listData.push(i);
        }
        self.listRankSize = listData.length;
        self.updateRankingUIView(listData);
    };
    HomePlayerScript.prototype.updateRankingUIView = function (entries) {
        var self = this;
        this.content.width = entries.length * (this.itemTemplate.width + this.spacing) + this.spacing; // get total content height
        for (var i = 0; i < this.spawnCount; ++i) { // spawn items, we only need to do this once
            var item = cc.instantiate(this.itemPrefab);
            this.content.addChild(item);
            item.setPosition(item.width * (0.5 + i) + this.spacing * (i + 1), 0);
            //BINH TODO item.getComponent(HomePlayerItem).init(i + 1, self.inviteFriend.bind(this));
            this.items.push(item);
            console.log('Size list la' + this.items.length + 'height' + this.content.height);
        }
        console.log("already comehere3");
        this.scrollToFixedPosition();
    };
    HomePlayerScript.prototype.show = function () {
        this.isDraw = true;
    };
    HomePlayerScript.prototype.hide = function () {
        this.isDraw = false;
        this.node.active = false;
    };
    HomePlayerScript.prototype.update = function (dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval)
            return; // we don't need to do the math every frame
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isRight = this.content.x > this.lastContentPosX; // scrolling direction
        var offset = (this.itemTemplate.width + this.spacing) * items.length;
        for (var i = 0; i < items.length; ++i) {
            var viewPos = this.getPositionInView(items[i]);
            if (isRight) {
                //console.log('BINH: right');
                // if away from buffer zone and not reaching left of content
                if (viewPos.x > buffer && items[i].x - offset > 0) {
                    items[i].x = items[i].x - offset;
                    var item = items[i].getComponent(HomePlayerItem_1.default);
                    var itemId = item.playerIndex - items.length; // update item id
                    //BINH TODO item.updateItem(itemId);
                    console.log('BINH: update item left', this.lastContentPosX);
                }
            }
            else {
                // if away from buffer zone and not reaching right of content
                //console.log('BINH: left');
                if (viewPos.x < -buffer && items[i].x + offset < this.content.width) {
                    items[i].x = items[i].x + offset;
                    var item = items[i].getComponent(HomePlayerItem_1.default);
                    var itemId = item.playerIndex + items.length;
                    //BINH TODO item.updateItem(itemId);
                    console.log('BINH: update item right', this.lastContentPosX);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosX = this.content.x;
    };
    HomePlayerScript.prototype.inviteFriend = function (playerID, isSelf) {
        var self = this;
        if (isSelf == true) {
            var AVSuccessCb = function () {
                self.playTheGame();
            };
            var AVFailedCb = function () {
                self.playTheGame();
            };
            // Here `this` is referring to the component
            FBGlobal_1.default.instance.shareGame(AVSuccessCb);
        }
        else {
            var AVSuccessCb = function () {
                self.playTheGame();
            };
            var AVFailedCb = function () {
                self.playTheGame();
            };
            //FBGlobal.instance.inviteAsync(AVSuccessCb, AVFailedCb);
            FBGlobal_1.default.instance.sendInvite(AVSuccessCb, AVFailedCb, playerID + "");
            console.log('Goi r nhe hehe' + playerID + "is self" + isSelf);
        }
    };
    HomePlayerScript.prototype.playTheGame = function () {
        FBGlobal_1.default.instance.haptic();
        SoundManager_1.default.Instance.PlayButtonSound();
        ScreenManager_1.default.instance.onShowScreenByName(ScreenManager_1.ScreenConfig.Game);
        this.node.active = false;
    };
    HomePlayerScript.prototype.getPositionInView = function (item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.svLevel.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };
    HomePlayerScript.prototype.scrollToFixedPosition = function () {
        this.svLevel.scrollToOffset(cc.v2(0, 0), 2, false);
    };
    var HomePlayerScript_1;
    __decorate([
        property({ displayName: 'spacing' })
    ], HomePlayerScript.prototype, "spacing", void 0);
    __decorate([
        property({ displayName: 'spawnCount' })
    ], HomePlayerScript.prototype, "spawnCount", void 0);
    __decorate([
        property({ displayName: 'bufferZone' })
    ], HomePlayerScript.prototype, "bufferZone", void 0);
    __decorate([
        property(cc.ScrollView)
    ], HomePlayerScript.prototype, "svLevel", void 0);
    __decorate([
        property(cc.Node)
    ], HomePlayerScript.prototype, "content", void 0);
    __decorate([
        property(cc.Prefab)
    ], HomePlayerScript.prototype, "itemPrefab", void 0);
    HomePlayerScript = HomePlayerScript_1 = __decorate([
        ccclass
    ], HomePlayerScript);
    return HomePlayerScript;
}(cc.Component));
exports.default = HomePlayerScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NjcmVlbi9Ib21lL0hvbWVQbGF5ZXJTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDdkMsSUFBTyxRQUFRLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDekMsbURBQThDO0FBQzlDLG9EQUErQztBQUMvQyw4REFBeUQ7QUFDekQsNERBQXVFO0FBSXZFO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc0tDO1FBbktVLGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFHL0MsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7UUFHM0QsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQyxvREFBb0Q7UUFHNUUsYUFBTyxHQUFrQixJQUFJLENBQUM7UUFHOUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUVwQyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsa0JBQVksR0FBWSxJQUFJLENBQUE7O0lBMEloQyxDQUFDO3lCQXRLb0IsZ0JBQWdCO0lBaUNqQyxzQkFBVyw0QkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLGtCQUFnQixDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBR0QsaUNBQU0sR0FBTjtRQUNJLGtCQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FB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QyxRQUFRLENBQUMsRUFBQyxXQUFXLEVBQUUsWUFBWSxFQUFDLENBQUM7d0RBQ1I7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztxREFDYTtJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQ2dCO0lBbEJuQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXNLcEM7SUFBRCx1QkFBQztDQXRLRCxBQXNLQyxDQXRLNkMsRUFBRSxDQUFDLFNBQVMsR0FzS3pEO2tCQXRLb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNjY2xhc3MgPSBjYy5fZGVjb3JhdG9yLmNjY2xhc3M7XG5pbXBvcnQgcHJvcGVydHkgPSBjYy5fZGVjb3JhdG9yLnByb3BlcnR5O1xuaW1wb3J0IEhvbWVQbGF5ZXJJdGVtIGZyb20gXCIuL0hvbWVQbGF5ZXJJdGVtXCI7XG5pbXBvcnQgRkJHbG9iYWwgZnJvbSBcIi4uLy4uL2ZhY2Vib29rL0ZCR2xvYmFsXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9VbHRpbGl0aWVzL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IFNjcmVlbk1hbmFnZXIsIHtTY3JlZW5Db25maWd9IGZyb20gXCIuLi8uLi9Db21tb24vU2NyZWVuTWFuYWdlclwiO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGxheWVyU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7ZGlzcGxheU5hbWU6ICdzcGFjaW5nJ30pXG4gICAgcHVibGljIHNwYWNpbmc6IG51bWJlciA9IDA7IC8vIHNwYWNlIGJldHdlZW4gZWFjaCBpdGVtXG5cbiAgICBAcHJvcGVydHkoe2Rpc3BsYXlOYW1lOiAnc3Bhd25Db3VudCd9KVxuICAgIHB1YmxpYyBzcGF3bkNvdW50OiBudW1iZXIgPSAwOyAvLyBob3cgbWFueSBpdGVtcyB3ZSBhY3R1YWxseSBzcGF3blxuXG4gICAgQHByb3BlcnR5KHtkaXNwbGF5TmFtZTogJ2J1ZmZlclpvbmUnfSlcbiAgICBwdWJsaWMgYnVmZmVyWm9uZTogbnVtYmVyID0gMDsgLy8gd2hlbiBpdGVtIGlzIGF3YXkgZnJvbSBidWZmZXJab25lLCB3ZSByZWxvY2F0ZSBpdFxuXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgcHVibGljIHN2TGV2ZWw6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwdWJsaWMgaXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIGl0ZW1zOiBjYy5Ob2RlW10gPSBudWxsO1xuICAgIHVwZGF0ZVRpbWVyOiBudW1iZXIgPSAwO1xuICAgIHVwZGF0ZUludGVydmFsOiBudW1iZXIgPSAwO1xuICAgIGxhc3RDb250ZW50UG9zWDogbnVtYmVyID0gMDtcbiAgICBsaXN0UmFua1NpemU6IG51bWJlciA9IDA7XG5cbiAgICBpc0RyYXc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGxcblxuXG4gICAgc3RhdGljIF9pbnM6IEhvbWVQbGF5ZXJTY3JpcHQ7XG5cbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEhvbWVQbGF5ZXJTY3JpcHQge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBIb21lUGxheWVyU2NyaXB0O1xuICAgIH1cblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBIb21lUGxheWVyU2NyaXB0Ll9pbnMgPSB0aGlzO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107IC8vIGFycmF5IHRvIHN0b3JlIHNwYXduZWQgaXRlbXNcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSAwLjI7XG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NYID0gMDsgLy8gdXNlIHRoaXMgdmFyaWFibGUgdG8gZGV0ZWN0IGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAgb3IgZG93blxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cblxuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBsaXN0RGF0YSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3REYXRhLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5saXN0UmFua1NpemUgPSBsaXN0RGF0YS5sZW5ndGg7XG4gICAgICAgIHNlbGYudXBkYXRlUmFua2luZ1VJVmlldyhsaXN0RGF0YSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUmFua2luZ1VJVmlldyhlbnRyaWVzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jb250ZW50LndpZHRoID0gZW50cmllcy5sZW5ndGggKiAodGhpcy5pdGVtVGVtcGxhdGUud2lkdGggKyB0aGlzLnNwYWNpbmcpICsgdGhpcy5zcGFjaW5nOyAvLyBnZXQgdG90YWwgY29udGVudCBoZWlnaHRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwYXduQ291bnQ7ICsraSkgeyAvLyBzcGF3biBpdGVtcywgd2Ugb25seSBuZWVkIHRvIGRvIHRoaXMgb25jZVxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihpdGVtLndpZHRoICogKDAuNSArIGkpICsgdGhpcy5zcGFjaW5nICogKGkgKyAxKSwgMCk7XG4gICAgICAgICAgIC8vQklOSCBUT0RPIGl0ZW0uZ2V0Q29tcG9uZW50KEhvbWVQbGF5ZXJJdGVtKS5pbml0KGkgKyAxLCBzZWxmLmludml0ZUZyaWVuZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaXplIGxpc3QgbGEnICsgdGhpcy5pdGVtcy5sZW5ndGggKyAnaGVpZ2h0JyArIHRoaXMuY29udGVudC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxyZWFkeSBjb21laGVyZTNcIik7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9GaXhlZFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5pc0RyYXcgPSB0cnVlO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuaXNEcmF3ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVGltZXIgPCB0aGlzLnVwZGF0ZUludGVydmFsKSByZXR1cm47IC8vIHdlIGRvbid0IG5lZWQgdG8gZG8gdGhlIG1hdGggZXZlcnkgZnJhbWVcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLmJ1ZmZlclpvbmU7XG4gICAgICAgIGxldCBpc1JpZ2h0ID0gdGhpcy5jb250ZW50LnggPiB0aGlzLmxhc3RDb250ZW50UG9zWDsgLy8gc2Nyb2xsaW5nIGRpcmVjdGlvblxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuaXRlbVRlbXBsYXRlLndpZHRoICsgdGhpcy5zcGFjaW5nKSAqIGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IHZpZXdQb3MgPSB0aGlzLmdldFBvc2l0aW9uSW5WaWV3KGl0ZW1zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnQklOSDogcmlnaHQnKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIGxlZnQgb2YgY29udGVudFxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnggPiBidWZmZXIgJiYgaXRlbXNbaV0ueCAtIG9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0ueCA9IGl0ZW1zW2ldLnggLSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbaV0uZ2V0Q29tcG9uZW50KEhvbWVQbGF5ZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW0ucGxheWVySW5kZXggLSBpdGVtcy5sZW5ndGg7IC8vIHVwZGF0ZSBpdGVtIGlkXG4gICAgICAgICAgICAgICAgICAgIC8vQklOSCBUT0RPIGl0ZW0udXBkYXRlSXRlbShpdGVtSWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQklOSDogdXBkYXRlIGl0ZW0gbGVmdCcsIHRoaXMubGFzdENvbnRlbnRQb3NYKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIHJpZ2h0IG9mIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdCSU5IOiBsZWZ0Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy54IDwgLWJ1ZmZlciAmJiBpdGVtc1tpXS54ICsgb2Zmc2V0IDwgdGhpcy5jb250ZW50LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnggPSBpdGVtc1tpXS54ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zW2ldLmdldENvbXBvbmVudChIb21lUGxheWVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSWQgPSBpdGVtLnBsYXllckluZGV4ICsgaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAvL0JJTkggVE9ETyBpdGVtLnVwZGF0ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JJTkg6IHVwZGF0ZSBpdGVtIHJpZ2h0JywgdGhpcy5sYXN0Q29udGVudFBvc1gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgbGFzdENvbnRlbnRQb3NZXG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NYID0gdGhpcy5jb250ZW50Lng7XG4gICAgfVxuXG5cbiAgICBpbnZpdGVGcmllbmQocGxheWVySUQ6IG51bWJlciwgaXNTZWxmOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGlzU2VsZiA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgQVZTdWNjZXNzQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5VGhlR2FtZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBBVkZhaWxlZENiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheVRoZUdhbWUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBIZXJlIGB0aGlzYCBpcyByZWZlcnJpbmcgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2Uuc2hhcmVHYW1lKEFWU3VjY2Vzc0NiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBBVlN1Y2Nlc3NDYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXlUaGVHYW1lKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IEFWRmFpbGVkQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5VGhlR2FtZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vRkJHbG9iYWwuaW5zdGFuY2UuaW52aXRlQXN5bmMoQVZTdWNjZXNzQ2IsIEFWRmFpbGVkQ2IpO1xuICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2Uuc2VuZEludml0ZShBVlN1Y2Nlc3NDYiwgQVZGYWlsZWRDYiwgcGxheWVySUQgKyBcIlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb2kgciBuaGUgaGVoZScgKyBwbGF5ZXJJRCArIFwiaXMgc2VsZlwiICsgaXNTZWxmKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlUaGVHYW1lKCk6IHZvaWQge1xuICAgICAgICBGQkdsb2JhbC5pbnN0YW5jZS5oYXB0aWMoKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLkluc3RhbmNlLlBsYXlCdXR0b25Tb3VuZCgpXG4gICAgICAgIFNjcmVlbk1hbmFnZXIuaW5zdGFuY2Uub25TaG93U2NyZWVuQnlOYW1lKFNjcmVlbkNvbmZpZy5HYW1lKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgZ2V0UG9zaXRpb25JblZpZXcoaXRlbSkgeyAvLyBnZXQgaXRlbSBwb3NpdGlvbiBpbiBzY3JvbGx2aWV3J3Mgbm9kZSBzcGFjZVxuICAgICAgICBsZXQgd29ybGRQb3MgPSBpdGVtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaXRlbS5wb3NpdGlvbik7XG4gICAgICAgIGxldCB2aWV3UG9zID0gdGhpcy5zdkxldmVsLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICByZXR1cm4gdmlld1BvcztcbiAgICB9XG5cbiAgICBzY3JvbGxUb0ZpeGVkUG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMuc3ZMZXZlbC5zY3JvbGxUb09mZnNldChjYy52MigwLCAwKSwgMiwgZmFsc2UpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/facebook/FBConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed8ce+Wsh5MwLxZA3d8oK2Z', 'FBConfig');
// Scripts/facebook/FBConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FBConfig = /** @class */ (function () {
    function FBConfig() {
    }
    FBConfig.getBase64Image = function () {
        return 'data:image/webp;base64,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';
    };
    FBConfig.isSupportRewardVideo = function () {
        return FBInstant.getSupportedAPIs().indexOf('getRewardedVideoAsync') !== -1;
    };
    FBConfig.isSupportBannerAds = function () {
        return FBInstant.getSupportedAPIs().indexOf('loadBannerAdAsync') !== -1;
    };
    FBConfig.isSupportInterstitial = function () {
        return FBInstant.getSupportedAPIs().indexOf('getInterstitialAdAsync') !== -1;
    };
    FBConfig.fbScore = 0;
    FBConfig.metadata = 0;
    FBConfig.numberTriedAds = 0;
    //Ads
    FBConfig.preloadedInterstitial = null;
    FBConfig.preloadedRewardedVideo = null;
    FBConfig.videoAdsID = "";
    FBConfig.interstitialId = "";
    FBConfig.bannerId = "";
    return FBConfig;
}());
exports.default = FBConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZhY2Vib29rL0ZCQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQThCQSxDQUFDO0lBZlUsdUJBQWMsR0FBckI7UUFDSSxPQUFPLGlrNUJBQWlrNUIsQ0FBQztJQUM3azVCLENBQUM7SUFFTSw2QkFBb0IsR0FBM0I7UUFDSSxPQUFPLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUFFTSwyQkFBa0IsR0FBekI7UUFDSSxPQUFPLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFTSw4QkFBcUIsR0FBNUI7UUFDSSxPQUFPLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ2hGLENBQUM7SUF6Qk0sZ0JBQU8sR0FBRyxDQUFDLENBQUM7SUFDWixpQkFBUSxHQUFHLENBQUMsQ0FBQztJQUNiLHVCQUFjLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLEtBQUs7SUFDRSw4QkFBcUIsR0FBeUIsSUFBSyxDQUFDO0lBQ3BELCtCQUFzQixHQUF5QixJQUFLLENBQUM7SUFDckQsbUJBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsdUJBQWMsR0FBRyxFQUFFLENBQUM7SUFDcEIsaUJBQVEsR0FBRyxFQUFFLENBQUM7SUFpQnpCLGVBQUM7Q0E5QkQsQUE4QkMsSUFBQTtrQkE5Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGQkNvbmZpZyB7XG4gICAgLy9JbmZvIHVzZXJcbiAgICBzdGF0aWMgZmJOYW1lOiBhbnk7XG4gICAgc3RhdGljIGZiUGhvdG86IGFueTtcbiAgICBzdGF0aWMgZmJTY29yZSA9IDA7XG4gICAgc3RhdGljIG1ldGFkYXRhID0gMDtcbiAgICBzdGF0aWMgbnVtYmVyVHJpZWRBZHMgPSAwO1xuXG4gICAgLy9BZHNcbiAgICBzdGF0aWMgcHJlbG9hZGVkSW50ZXJzdGl0aWFsOiBGQkluc3RhbnQuQWRJbnN0YW5jZSA9IG51bGwhO1xuICAgIHN0YXRpYyBwcmVsb2FkZWRSZXdhcmRlZFZpZGVvOiBGQkluc3RhbnQuQWRJbnN0YW5jZSA9IG51bGwhO1xuICAgIHN0YXRpYyB2aWRlb0Fkc0lEID0gXCJcIjtcbiAgICBzdGF0aWMgaW50ZXJzdGl0aWFsSWQgPSBcIlwiO1xuICAgIHN0YXRpYyBiYW5uZXJJZCA9IFwiXCI7XG5cbiAgICBzdGF0aWMgZ2V0QmFzZTY0SW1hZ2UoKSB7XG4gICAgICAgIHJldHVybiAnZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUnBSVkFBQlhSVUpRVmxBNFdBb0FBQUFnQUFBQWZ3SUFad0VBU1VORFVCZ0NBQUFBQUFJWUFBQUFBQVF3QUFCdGJuUnlVa2RDSUZoWldpQUFBQUFBQUFBQUFBQUFBQUJoWTNOd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRQUE5dFlBQVFBQUFBRFRMUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBbGtaWE5qQUFBQThBQUFBSFJ5V0ZsYUFBQUJaQUFBQUJSbldGbGFBQUFCZUFBQUFCUmlXRmxhQUFBQmpBQUFBQlJ5VkZKREFBQUJvQUFBQUNoblZGSkRBQUFCb0FBQUFDaGlWRkpEQUFBQm9BQUFBQ2gzZEhCMEFBQUJ5QUFBQUJSamNISjBBQUFCM0FBQUFEeHRiSFZqQUFBQUFBQUFBQUVBQUFBTVpXNVZVd0FBQUZnQUFBQWNBSE1BVWdCSEFFSUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGaFpXaUFBQUFBQUFBQnZvZ0FBT1BVQUFBT1FXRmxhSUFBQUFBQUFBR0taQUFDM2hRQUFHTnBZV1ZvZ0FBQUFBQUFBSktBQUFBK0VBQUMyejNCaGNtRUFBQUFBQUFRQUFBQUNabVlBQVBLbkFBQU5XUUFBRTlBQUFBcGJBQUFBQUFBQUFBQllXVm9nQUFBQUFBQUE5dFlBQVFBQUFBRFRMVzFzZFdNQUFBQUFBQUFBQVFBQUFBeGxibFZUQUFBQUlBQUFBQndBUndCdkFHOEFad0JzQUdVQUlBQkpBRzRBWXdBdUFDQUFNZ0F3QURFQU5sWlFPQ0JXVXdBQVVGc0JuUUVxZ0FKb0FUNXROSlpJSkNLaUlhWDArWENBRFlsTnhicnJXL0ozMDkwZU4zaC85UDR1MTdObkY1dWxxYUNUbW9iZmYxWDVWZndEeDhaSitpL3RmOEQ2WVhJUGFKN0srK2ZzYjRzdjZIaXY4VjVDL1F2L1IvdzM1dGZOUC9jZjhqL0srN2IrbmY0bi9tL24vOUFYNm0vc0g2Nkg3aGU5Zis4ZjlUMUcvMWYvSC90ai8zdmlHLzEvN1RlN2IvSC82LzlxZmdFL3VQKzIvLy9ZZ2Z2VDdDUDh4LzJuLzQ5ZUQ5MXZoZS9zUC9JL2VILy8rOW4vLy8rNTdnSC80OXNiK0FmL1hqUC8yTTlKUHo3N2g4dzM3Zi9LWGlEK2g3bkg1ZS9mZjRqOTFmamIycC9NSFVDOWlmNWJoYndCZm52OXc5Skw3ei9vK2tmOHAvbmYrMTdnUDZ5ZjhIa1FmeEgvSC9hejRCUDUvL2R2L1AvamZ5QStwYi9RLyszKys5TWYxbC84djlWOENuOUUvdjNweWYvLzNWZnUxLy8vL1o4UGY3ZGtXWm1abVptWm1abVptWm1abVptWm1abVpXdmNhTnE0ODB4Uy9jR1h1OGJJai8vSmc3dTd1N3U3dTd1N3U3dTd1N3U3dTd1VFBQSzQ4UHJqTVYvN3MxMHQvMTJHZllCdGFLeFI5Z0cxb3JGSDJDbHNGTFlLV3dVcGxrSEdGc295aW4yMEFaWEZ0V2Y1aE52bFBUMUFGNXNudmU5NzN2ZTk3M3ZlOTczdmU5NzN2ZXpMWGR2aUZCSlNSSHJ3Ly9BVy8vSDV1bFdXWm1abVptWm1abVptWm1abUtTR3N5WXN0dGVKVzlRV2RoL08vL1JIT2NsdmtQTDk0enI1MHdMaUpDWTRGc1l2Q0hBY3l0ZjRqVlBUQzAvL005R0pqZ1d6YVR1YlgxQURvZXJTY2NseEZ6ald3WWdUSXdzWkZFL1lNeXRabEpuQ0g0V3RaekxSc1Fua3JxQ0VLcXFxcDRzUFo5U0I3YnJ5aVRtbVB4Q3pNek14UlVyM0NOSEloYWNZanlBazFRT0NPNGdYclZPSmRDdVBCMEs2Lzk1TDFnZWV2MWlISFIyVkdjaXE1bEcxMW4zeklYNzNRS1cwSEZzOTA4R0dwMHQ5cnJqQmZoZU1rUld0Z2Z1MlZwYXVvMTUwMWk3K3c3TnRMUEh4WVh5aWpOSThUOE1QQ1JFWk4rV3B0dG9pSXpjaHlaekZsMHFiRTB0N2ZkV0hHUThjY2c0WEw4aWhiVkdlY3luQ2V5OWtTaHlHNjZSNmZtL2wxZXdndjVPM09Ia1gwRktZd21CY1BtcDVmTjJ1SmRvTzcvNW5VZnduZFZZL3E4cWpKUVpWVGpkZTN1SE01Q3JMejlFMTVOTHBVc0pEb0ppa3MwM2FBRWpCRHVnM0xwNkpra25SMzBDcXpxTEdocmtpV016VGQxR0RCTDFGZExEQ0htVHhma2pmNWNpZUNwOGdVN0wxcmlzbVJFSXozRDIwTGpXMDMzc3B0STlKeDhnSGpZS0JvOGo2cGVXaS8wUFJsNUpVaVdwM1RCaG84QTYzcFF3dEswYWJIUmE1WFZ3cCtmL0hQaSsvREdjRmNvS0ZLcnc2bzA5YnpMYmNIZm5SaEJTMEhRQjcwSk1JZGE5VGI5N0lIalQzNXhkbGhzWXhneXlzcVk0ZFNyalVhZE5BOHBYWitkRmF4TWNUUTliSy8zTVl1aWFpQUNuS0taVXVsclJEQ0t0WW1TdTkraXdUaFZkQjMxdERNKzNxSFhRNUhyK0FTMGF6aHpTbnNtRHFpUnZodE8rNlBsRVhKb2RZYUdFczFSSVVQL0pGdXo1MjJOakQ1R2UxTjY5bkdEcEFSUUsvazVkamJUK01EOHM0RS9FRXFpRytpR1AwOUZ5ZWZQODh2K2tQVCtBWm12SXVQR1hOMGQ2ZFdRNVBvWnNsZS8xai9Ddlh1aXhZSHBibmd1ZFNhQmNMODFCblVKN25rRTNiY2Jqc1U5djBSTXcxNWY2bHZjMFBnMGU4cGM0UkZlaHdmNEpQVEtqMWRRRlR4T3MwY2R3cXVPaHpEUFYzTHVzMDlqUDNSRDRxbnZMbTk0QWcranhrSE9zaDFlaHgyTmtFeWczOVJKZEcydENRRGR5eWltRGNRVG8yQzNrZEpmTWYxdVR3WlF5emJvYW9vMDIxcG5rcnY4NUsyc09LcFZySk1PYUp1bnRPdU9kVGx5c0xRLzVLSit4N0Z1ZzZrcmc4Q3BQVGI5Z0VSTFJGUWU2dzBXSm52QldwY3dTRHJ6K2ZyR1ZsMXFmZ1ptVGxoSDd2eWY5YnZsVlhWL0NaNSt3eWpxUUUrYU1vQ3RFU3lvTTZxYmRTYjI4cjI3d2VLTjRvU05NNitmNW9wUTgrZ2VnQU5LcHFCVzZ4a05ueDB6bkQ1Qlg3VUEwSHpQVXdDZUZ5cmxPcktKNU1GYVNGZnFOMStRWlVIOGZrR2NqQXQ4S0pEQzV1YzRIVHFWdk45dG8xZk0zalNvcW9Hc0pmL04wTVY5YnNlWTdKV3lOZ0JYQytzd3NyVmZWSDdFL2o3ZmcySFU4WGpSY0RMQnMzYUxZdVo1S0U4UFhzdmhCRzNibWdIeHZycmJPK3VFMDRhRDM2aHUvL1NlR1d4Sk5ESUZtek54OEdiM2R4bmlCeUpIc3l1QkJrUXd0V05WWk5hS1Z4V0RNY3VsTjdMbGY3U2tEbTZXNURiQlFVNkgvSjVobkNKU2Izb25CeXQ5MGQ0cVZIemp2OWc1aXI2MWI2aVNxQjRHQlpyVjhuOVJUcy9PQWxnejgwMlM0dDVNczdpa2gxVXRJcDFQT1cyemRyUWViSHRkMGtxTWY4VWNzYUpRYWN3YkdpclhCWkFxMUJxVFJlcGV1TUg5TUNNQ3hqWlVMQ2lxQWE1SWllZWJXbnMzSnp0bUl5YzhjQnF2L1NERkFBdVlkOTN0QlFJRW41Vy9LaFAxNVR0S1ZsdzRRN3FPemxseGo1QlJyT2FvT09SQWZscmhvd29vLzcxTFZwT3VtWStDTDRMZzFINHUyR01seGFLcWZ0ZDBJZGR0Rk9YbnVTcG02TXZnYUdhcDRWU2VndFFwci9rSjc1MHlZcTR6SXlQK2Y4UHFhd1A0bnROTUVIdC9HUFZTYnJvbFJFNjRWK0tRM0w2OEZFeHB2WjhSWmo3SnVVdFZ1aXcvWjRremIyYzhHSkR5VU05MDU2cUFPQmJNR2g2Y1phREVqa1RjZmVQZWVqUU1ac3pOYU1sRitFVUpRZHRubTNHUC9wODVBYzBacHhXMmtFODlFNUxOR0E0RzcrMVM4aDBMbzJnRjBDWjdjeFpLaXhUR2FZUmlYTlNpODdLY09GN3B0M3hSZkR4cnJhMC84ZHY0a1lwNWoyQnB1ZHNmZ21wWGdERHMrdnZ6U3pqWU4wcTd3WTlkQ3ZpKzZDbEIzSnJZR0VxQnp0ZFBld2U2MFdIbkE2Mm81NlpSN3Bub1UrL2laS1RhdTJ6d2hWZTUweGpUbWx3dGVYYnRwOWROKzFWbC9keW1iL2ZIUEpra1dPM0RiUXFUb0EvMlFwZ2laV1pQWE9QcUwxcHpZWlprYm4zZ1FTRHk0dkdMRk9RSmNaVTJrWnhndG1ORjUyRmx0MUFxSCtYaVFxd2Y0VTVUbDZPOEtrT0lpL0NqajNOMGhxcXNNOTRvZk1YMXZ3dmJUR2NENjJjdjFaeFcyOWQxNkNWZ2s3dFB0VExHQ014dnUvWUhDdm5UclJVYlZ0UTREQ0UzY3hjcGtDbUlEKzF2eDhIWnVqVjFKNmhXTTlJTDNjWWtabmVUV2hOMkZkenVpMzNCT0VIQXNJUWRxUms3eWFZRG1SOXE4OWVUOWtoNmdlVURiM2ZMTC9UTTQwaEZ6YnpxSlhMUlE5dEpVUTFqWFd0NGNFK2d3RG5qVHBOaDVFamZ0cG81YTMvcmhZMmVjbUhjWHAxSFFqREwyTDh4OUJYYitOYTFXZW9mVm96dWxZcHVudmlqREJuUWpUODlEZ2Q1cDJTMk40UnBTR01jaWxmNEhMWDg2b2FxUmdPZzl5Yzk0azFtR3lQcDVzWllVV0wxcHE1WGQ4WjVFaWs5bW5PeitaV3B2VlpLeTdiZnd0Vmt3SXJQZnRWOXRDYndqTk00QW1wc3BTN0hCTDJ1STk0eFExMlJFNys3dTZ1ZTIyemFTM1BqM0lRdWpyRmwxZFlJNnlpRGJqL3BDTE96bGVqd2VzbkkxTUFyYi9sL2RCWkZLRnZONzJjaUY1aWhEZEttcWlZRTIwRjErbGZQS1pOeXN1MzdIanNzZWxlTXJFb2prRkRaUjNxNmxSSExmODltSnFnQUw3eGFlWG5RRU9sZmkzL2hDSzg1LzRoTzFaWTV0YXlxRzd2VWtCaFVFRzk3Vkdob1lCVTY1ZVdTL0ZtR2gwemlYY1FrWUoxdEpvU0dtTFphcitIb2F2cmE1SmFiZHJ2SEV5ZlVxZXRhYkFoVWNvc3Fzd2VPWUw0SHpyWUgvcjJyd0huRVZLLzh1Q2c3Y0swRk9EY3dVWVM2M2NHbm9ScmYrSHBLWGtXMWQzMW5BQXlQdVcxQ25SZGZadVYvdzNDazJUVUowRTczZVRkUFNpUUVwVHdZQWJLZmRPYTYwNGRlbyswODBHRjVENUFSMnRNVGV0UTBKay9FSzJ5S210YUdJb0xEdzJpQXgzb0FYSS9CcVd4ejBlblRCQUVsVmhIRFVSVGc3WDMyMjlPSms3MFhYQUVhUmxiMlZYZnJVcHpWTFFlZk40emk5Rkl0aGozSHFsbDZDaWM2U2NiZDNDd3Rzd3lkcldRV2o2M2tEbkQydnpJNERGQjNpcTB6dGRlM0w1RGlaaUVNR01pYXlnWXp5OUYxUlZWVlZYcnFxcW9BQVA3K0d0dWlQbHJzb3NNL0FBQUFBQUFBQUFBQXZ2L1JBaTNLeWNSWXNHQkswY0lhMStOcTJFdEh2NERLR3kwN1owdjNuUkh0TWF5aGN3YVlvVHN2S1NjSjVVYklSa1hXcVR2OTVxbE16VmFrdFY1dlVIL054NGxTWkQzNWN5TDN1Q3VmOEVhNEdCODMyRVZnMW1RM0JtL3VXK0NBdk1hay9VeHJHa1dBQUFBQUFBQUFBQUFDUDBsaEF0VkQ0S1k5eDQ3d0srTHYvR0FPYnlMTVQ0VlZ0QWczY2Z2bzl4WjJvc2g0VWx2T2pBSlBxcFNld3NYTlpsMHNHYXl6L0tZRTh4STRJYW4vdkJHVUZ6akZWWTlLSlM0V2VqV0J4RTZYc0NLVENVZ1daajhGZ0UvWDN3cy9UalNrYlUyN3lSRFZkWFVUekMyYjF5ZGF5RUpmU0svSlRXa2VUVkNWYlcrdE5CemVrcFJJTVQzVzF2clRRYzNwS1VTREU5MXJnQUFBSS9SY2JCRitXYzBBOWlKdTB5K3Z6eXZmQXZ2dkVPenJvUEt0R2wzWVZwZ1hlNmRMSDN0L1ZYU09MWGVFSXQzZFZxNUNBaEF5K2lpR0ZUWEtLQ0VhWUorUnR0MnpqRHQ0MFQxL0tjcXdYc0VKWEYvSW1jcnJJMkpRcVR3TE9hNDN2d2VTVHFXaGJUZGdvaEluOWVLYTVYT3NsbEU1S0RZVCtCY0NBTENpOUhVVWk0bmFJNEFBQUFBQUFBQUFBQUJMUDZuSkoyWG41RzczNGNhaW1pYU5kMWptZ1pOWXVmeFV3WjdMdHNmY29YTmtwVkloc3BneFNHUHVaZlFLMVhXMUU4Qk1Id0NuZmlXdkd2M0R6NUpiMTg0cFo3RFhUQzJ1anpoaHJGZnVJeHJnclBac3hIbmZmaGRhcnhSNnNpSE5nNlVnSHlWVTJiREQyQXVkYjhRQnlTa091cFFvTlh0S2ZuaGlya2UyNENCa1IyTmpBV1RSNGRIeWVrUnVsak5DVTQ5OGZBQUFBQUFBQUNGWmFxQnRzQUNzcE1oU0U3cFBQM3kxdGt0dVpaZC9YYi9FRmF6TjgzaGVtTmplNHZEc0dvSldJYXBMWlhMZ1NlNzE0ZTkzUHYrazkvSE9VUGpRM2k1NWFJTHlSaHlHWEtUTTlMTEx1WEliYkJEdmF1ZnNEb2FEMEJZdWdEckdKNDNwcnA2QWlORjd2K1JQTFpUVHcxRFR4djVYeXlRcDVOdklPWUk4ZEd2dDRwdDJsYndWd3dNdWtEZTVXem9jN1FIUXY5NXllV2Q2N2d0UC9mcWRvemd2bGFPd01EWk9nS3gzQ3NHa0YyUXRjY1BHMVVRYkpDb2JJZGl0aU9HcEoza3ZBdU5PbDhQRW03TzVOaGlyeXFuRVV4YVI0dlR6WGRtdVdaSFFDSjRqRmFxK1drcEtXUUFOcElERFhLVmhwOUtwS2VVa295ZTl6UGpUdmxmWFo0eCs0c2hRalVRYjRxQUlJNTR4T3podnhzSkt3UmM3M0lhbTlUc0ZJTTBRMWQxM01FeXFFWmlrTGR0ZHM4NjQxMWQ5T1pjQ2wwV3BYaXdBQUM4OW16N1B6cEpYTUE3QTIweDZiN0gvS0lqYVozU1JlVGQ4a1c5d00rUnFkclYzUlo3cXR5K3h3UWxGdFJETWxPTEhmOGE0bTBFK2Nuc0RyUkxsVWg4RFFPQjIrYWYwV0c2ZEYvRkEzUW5Bb0dCaEN0WC9vOXRjOFZFamJXdXQ3V3JZeSt3Z0FzVzIxWG5VK2RRYTdLd3ZReTRVNlVQY1NyQk9NVTdvWXBPSG01azIvenFIc1lZSkExajRaRHNML0FDZzkvRFJ2TlpoQ3dBQUM1b05IVkRrMUpHZWE4cy9Fc2R5VUN5NEtvbU9ldEdxVTBBdlRPNy9QWmxiQjl2TVQ2WFRtQnc0LytGbGROeWpaUnlBaUFaZ09hSEhROU5qN0pGZ2c5eDczNFU1Z1lQRzhwTm1PanVDODFuZThsbUJvQlYxL05wVFRyV2hkbkcyRWZ6RmU5ejhPRGMrbEtLVzR2RUt2dzF2QTlmeHkvTUwyQzR6L3QzTlpBRXRaVmRrd0RzWlB0WVBoOHhaeWV4VWRnUTNqR1pQT1psaDh0QWp5R0dDeEwyZWRpbEVxdVdHVlgyMDE3UWw3dmsvaisyOWpHYWZEMEgxZFgzSm1DOWxIOVlmWVJnamhleDVXQmZKaW5zVnY3SW9INWxiNUVIcUFPcDl3Z1lveVAxak5KYzlUQkwzN0JTUzBOc0JlNHpQZzJDN2ZML29jT0g3K0lZaUhsd2lEb1dGRmZmek0rNE5yeHFWeGdsL3psYmJIYWZlWVZPNXVTUE5rTTBDem54OEVJaWlnTnFoMjdaT21PV1VMOUxaYkM2M3YwNUF3Q25NMkttV0NZUnJGSWpwei9iWFJWOGVLRWRScVFRZitJUGF4S3JSMm1MVUltUjVrTDZEN20yTWh5UW1TazNsZklvTDZWRFlIcGhwSW5vZDlFa0Q0ZlNFTmk1aGpPQlVScFFYM3ZjY0tmcXA1SFRlRGN3ODNFUlY2dHk4aWNPd3hOcThFUGFiY1VOVUVVS0pGeW5OQ1BWOHpzWHZ3QkRUU1M2ZDdJS05CTjg2dEVCcEllWmxkKzQ1U0hmYXVxblBhSDZ1VVhGVnorZGhzdEZ4MkJrbFAwQXNOM1dEekk3RGNVSjh5d0JpK1NGZUlVOHk3QjFjWEUyQklycnVVUkVQL0x4OHltd0o4Ti9JSDVicmFpdldXYSt5dnFVK3NTZHg2blNNV3BOeXdqaHRzdEtLbjRINExuY1A1eTVqNWxiRUFpMHhZbnJ3NkRJV2hIaFZFZEw2N2FLaGV1elEvZkZMcSt6Y09MMmpueWh5WFJUSkQ0S1ZUNENUTWZPN3A5KzRjSkRrMXMzL1NQdStRbXFpWVpuYzVlT1FXYTFuWjFaMklNV2FHT3FsTFh0Yi8zY2tBM2EzQk5KSStGTnpKYWF3UzBuRE5oTnZVMlFwczNUVG5EUmlhWjBieDdkeG1ZbzlCUjQzeFJuQjFlbkFQZmpyYWlpZm5vZEYzZ2FzRHBmc0J1SEt5eEUrKzJ6RTgwTUkrQlhpZ3BPdGdJNEpnQW96ZVlBWWdLNnR0bmpLU2ZxTU44aVRqVEl5Y1daSGxhalNRV20xUjZNS1RnUEdYTjZMZVlDRS9LeFMzRFpjK2ZWV3hkK0tGZHNhNjJZSmlpZExrQU1Bbm5CK1h4Ry8zR04yeFgwSWlnMmViSzRTcVFsSXc0Y3R2SDhlOEUyNlFTQ1ZDZFQ1eEpXbnVZOEpkbUZQWkwxRmxLWmFTTGZvSXdUZHBwRHlsc2Jla1Z5b01YVmlaSGY4b3pCVVc2c0dLb0Y2MituQ3V4blFUZ3V1RUlXMDJRMXEyR0l1Q09WZjVOUEI4S1lsMWtkZDA4T3Y2N0lNSkdjQlBiTUxkTTlranNaeHIvRFdBc0NZODd5b2lZc3Q3NVpSTS9iTUY5WWk1aGVlREpQUW5zMmQ1emsyUTI4eTZvUGVoc05BN21UK1YyNG14bEZtSDQwWVd6ZXo5aCsxTkRCNy9uTU1EVU9yMjBuVGczZjJCWndvSGdiWTNlNHFQdG01SXVRVnRjbUdra1laSjVUUWNQU0dIV3RmM2s2UEZFQlJzNXNTVUJvVUNaUXo3VTJSSW5EQkxKRjR3WXlWREFEemxTSlNDVFdoWFVFRlFjU2wraTZlbEtNVzNSbHkyQ2l2T2I3bVRtM1pLVnVzNEg4cHpUUU96YnRqeGlHNCtMd0pKaTd5c1RqNUFCSEcyQ3BUQ1BWSjlBRkNocHp3UmlLUjlPckdsd25GeGJxQWF4QWZBUDcrazRFS1BPb3Z6VXlHeExBMnhzaGp1SlRKbjVYbXA5MHpyd3ZtcGgxS3dGNW1LSmN4TVBGdVlrS3N0dENBSjFoWVQrcC9ZeGtyUCtqVXhJcEk4N2JMbE1oTlQ4cFpIMGFhenZKbi9KeXdaMUQzNWI4bTZkTlJVZGp5MGk3dU1TOVd1YWU2VFFCRnA0cDAzeW9qbjNORnFVYUpsZ3c4V2orWHIzZjhHUWRna1IwT3ViM2VobkZnYS9Qa2Z5a1RQaDVDVDRpRmdhZjBPS3NUS1dOM01VaHZYQjZaSHJGZGh2bHpoSGRoT1c0TUtBYzQ0UDlyZHBtTmN1MDR3cEg4OGhURk9mWG1SUFdCdU85MTVqZExYSGloTklQeHIzZ3JvMm9heE5QVmZ2aE5IRzYzSElLWVpXb1V5ejZQbEhXQmFWTTU3Ly9BTU00VExnZ0NpQ1Baa2RxYnBRMUhTQ05TZjBPR25US3FTZkVMZU5kZjJ3THJlNGFwRU9BSXlqT092bStpMmM1NS85T1JFMjQ1S1cvWkZSK2J5RHdVb0VkOHdqSGwyZExTdUlpM0Z0dVBEZ3ZCM3hJVHpabEN6WkVrWjFzY0dNdEl6eFlnZXM5b3dSOXFreGVYRG56QXBRbmJhUXRTM0ZnVFFFUDdmU2JHeldDOHJSMjZweC9pR2dDakFHd0JTNWRQRWxjczRXeDdDUTZhYThVMkdWVGRyYkN4RVg2b2pKU0RSNWZqbkJYMDdFbjNFTE5CNHo5QkdlVHVVVFcwSWJTRjR1SHg2amdpQnZDNXpyL1JFb2FUeUhnbkU4V1NkUEhOVi9VTEZJVGMwWUFlWGYzM0tTS2NnYmx0UUV4T2JUc3RrT0tmOGpIUGluRlRURFhtNlZJeFZrUHp3ejJOTis5MlBaTVdjQTJPN2pMMGlIZVJkbEFYZ2FrOUoyTHMyTG9RMDV5VmtPUWFBTy80VXczNlVPaTFFRDVaaHh4OWhLUWx5bXJQYWNGcWJ1SStNSGlLLzVHbHE3RURmNnNpQVRITVNKdHFsaUlaekNwemF6NWdBQU9pRTVaTXhOVG0yODJ4Y1dBSmJUM2NBS0d4RmJPN2RNdEo2bVNDVllxM1dLeS8vUW1zYnBJSVloUjNNZzUwUkE3cmI4WUNGdUZ6MW1FWFkvUjlyNk52RUtBd0pReXQrdHd4am1aZGpvZC9HK0djVUh3b3JGV0krbjFGNGQzaDJES2NVcitYeWJQM204ZHBjemd6RGhIQ0k3V1BRakJhMTdJbm9tUko5MStUT3EvZ255MUNsZWNHellEdmdYc2xOazQycE1od1lnMU1WcWdIZ3dlV1J1QTFxT1pGbzRUK0FCeTRleFZZVlJjanhsT1kvckt0NjB0QU0wczBaMlpGUVExenRxdnR0WUtsRjdhVHZsc0ZoU1g0cXI1cnNqUDF4czFUK1laM1BDUXd4NHRUZzBwKys1N1JiRXF1b3JnQllkbDFuSTk1d28rV29vUEpVa2dZcXh0ZmxtMUlmOCtBcWJhRDM5SXBiSEwyenRlYm5YcjhQUDJaTXB1TlZlbjY5YUsyREc4NC9MWW1IbjFFaTVVSGVkL2JWbmJ2MnQxdzNYVTU4aERFcm95MWxpMHdYNVp4TWhVYXVOV3pVYTFYTkNSVmEwVUZ6N3RMSVkxdHRjZ2h4K1ZNb0x3TlBLKytod3UyNzl2aEZhcHdQT2Z4R1ZxUFpOZDhPemZJT3d4WHpYMDFvTDMxQ1lPdnAvZG52RDVlWHJ3MXRRQkRBa3hCM1ZWTFBkaTdTcnVKQUc1WFhkNFo3MDN3Vk8wTmhTY01LU3BHZzJmUXNCdnZHV21NZDFHb2oxTUJHc2hVcFFmUGhCR1Q5MFVPQTNGTzNoWlYwRUY2WUF1QWY4RlVHTjdvbjdMT0dCRE5VYmYrRE9oYXZkTGJaUEJkVW9tQ0xTT0tJcUFnbU5JNGVZSXpBY0xFL1NZVDJOT21SQTF2VEE0aTFmeGtsRFR3QWhxZXI1VlFFbGMvNHVQNFJEdDhFSDF3c0V4T1h6OHdWMWp5VU96ZVQ1RzBYZGZKR0hDRndoTDRRSk9FdFhxSW9ud0ZkMm9IR0ZzdGNFV1B5SWpDNUVKem00KzNmN28zZjh1OER4aHhJNUtwamhWRERXOWNyVVk2eUxQYk1KbFlXMGpqdEhGMGd4NFdOOEhBaHU5Y0tweWlFRjZOTzJpc2dwcys2eXBUYm1vUkpUTFR1bG01azkvMStXZEZoZUlRTTRzVDUwaTluYVRWZlFLRzJlU3BXT1R6a3pQYm5ZQ2V2am4yUVlNVVRyeThUbXV3c0RlQWNwZ1hxTWxtTGZIYzBIMkxyTzZMbDVQSXNzbkI3ZUNPejZwTS9EQ1FDRG10UGhWL1EvZmtEL3hBaWU2bkNrZEI5TzZBcXR5cUo1cUZCaFRKSFY4eldOVEZFaUN0d3BPUnViS1JPdUtMRnlRU2FhcWt6bnVwSlhPSzlCMzJPUGwreE1HUm41YkFXQlRPejRuRHB2dUN1ckFwZG9MdW10dkxIaTVjdEZObHAvU3JuQjNoclpBOWdiN0pVSVpsS0QwdWQ4MXNmY3ZneUlBUEVmSEE4RStIWEpvd2tHQzYraVpjbGkxVjFsemVxRHhWcmR1L3VNZmpYVWdwZUtEQWI0TlJnQURmSHZxMzBkTVVMNFNPVG1aTmJaNmRJTFYralBmeldPQ3YzVHB0dDBaKytuVERWZE1FTVcxQWV3akkzL0FrSXJ0SHorL3NVTjQrN3VqaDJIaVhPMjdjTEsxYXh1N2xzelNLbHNoTm5OUld0L2VVUWZNRXR5bEFhb3BOZmdVOWpwd2YzVzVnbzdrdnF0QU1JUTZ5cDFMYnErZzhNYVVEbmtpc0dFRnlUeUVWVWpwRTcvTXdDcTFMUGN3MkZJVER0M3c4L0NrSUJUanFVMGpqRlRsMWJCdXBmanhWejFWei9XaWVBbDN4bUZyYUxKSE55djlSZ1p1THJHWGJ6dnRLR2pYb2QxNFByZmdSMks4eFhObndWdEVXK0dWRk5teUNUanFQamgyY0tlTk5RUTMwMEN4Si9Kd1RUQS9Mb0V4ODI5YThEMEV6OWdqQ3ZKWWIreWlQNlpNdWkramFTT2dZbTBuZit0M0VYWU1DK2Ztb3pFelRXd2EvYWRBdnVtMUhSWExlTTBZV1QwVkR5TWxWdlN5bXRVcndRNU9GRVQ3YkJYMTJGdk9vYm40dTFNOTRZLzdiMkhXNndXd1hYbHBWbDVMWXlyWW83QUYvSlArUEtLRXpuT2ltcXlUSDFEc2dSY1kxcmF5aEJFMlNjR25INTdPeHdVc0M0MXpKK1RvMUpOQ0JwNWc3cmkxb2RNdkNoa1NWMWJwKzQ0UjhkbzNPUUtXdUhpNi9FZFZCMTg3alFDK0RTMVNVVWtjMWdSK1EvaytBSDVDVXQzMHBiYzhnV2RLTVMvQTN1cGhRN3F4QzY3V3Nyenl5ais5RHN5eXJWYXkwWEtXUmpWQXVCRXJoWXBIWmEydHQxNGtwRXo1R2dvNUtxc3EzOC9Td0pLNHhQVEptTmtiVTVmMC9kRWRxRmRST3owY01vZUlERHlPczJlczU3M2xVeVpJZjc1aUsxcVpIK0tUMEQrVjdKSWZxNHpUa1gyVGVpSHowK2cwVlpVaG0zc2psd0E0NjlxSFdqbGxXYTNacVVCeFhoV3dsM3p0Um9SdkFtZFpwWnUzOHBzZDh6OWVPSVBCc1djR216R2QraXVWalhxcGNsNmpsQ1JGQUJPRE56REZYQmdzZUJ4U3Bmc1NWb0F2ZE5HV2IzMWwwK1FvTWtCVHZ1WUlEcmcyS2h3UlNhY3g4RVVFczZJSkNzMmU3d3FBUXc0TzdRMVA4MUd0dVg0SHQ0bWhkcVp0bGZnZmp4dzhoZExhN2RwZ1Y0OWpwb3ZhWHV5U25BYkNWd0tKTElKbHkvOXV0eTdSWnFuWVdRWVE5RU1ET3VrT1hWTW90NUdaZmJ4Smh1M0hMcVVWR1prV0tka3JselRlQW1Yb3paSVR4MFZMQi9uN1hNdEI1OG1qWVJsNUlCNy9VRTRGWHNzeDZQTktDRGNyR3FWQ09WSGJ2dEJhYnlpSmRnOGc3QXkxZWxlTXAvbWJJYmcxdWl3TVplTDNYcSswZnJHRGRhNWlRTXRSVUpjWll0VGZNTnVHM0hNaHdjeXlTRWFRL2haOWxiNnV4ZG5mbGsyQmlFV2s1YUhkejBrU3FiVWFCYnc5cW5nUEo1a2ZPU01qUGMzTFVGbUhZSHF0aHNDQzFWWktHUmtFZ0dCZUFYR2E4Zmh0MFA3aU9jWU0wZks2VzFKV0d3MWRSMzNtSFo3Y0RWRnlYMkgrZ3pUMFRFL2o0bUFCRnhNTVRsUmRjZ3NuektmQzFwYVk0TUc3STRQajBCUEhvbVlKN2poVStaQzM5V081UkRXaW02dXZHUDRVR21BdFZscnQwbEZJU2VWZXFWSHdzTWpsZWNXRXJzZlBiWUR6aDNKTTdldjRnbksxam9OdkFHUzJvMWFNQTdVdWYvQXl4Q0tqdnVmQ1M4dVBaTHlXYnA2Kzd2Wk4xZWhLRmF5ckJKc3FYaUtTeGsyL2svRk9HeFhDNnNSTW5EZnJFaWFKY2grTTVpQk9rdmNSZThxOUd2bFl4blZmL21lMVBFMU1icDNRZUFzT1llNDFDT1pLMFVxM2xMMk1QZlU5OG5ybEg3c2lweUZETzlpUll3SkxvMks4Ulhkb1hTTGlkRnFKemsva2lpOTRkVlJKTUtQUWYvNnVvTUN4SHpsSE5OUnlMSjlwUERhaHY3SU9BL1lNV1Y3dXp0N3AzUndCY1oxY2docVpaMzd4K0VJVFBlUFB5Vmh1aHpnYldIV1FhT1dJcFlmNTBKbGozRDJqMUgwMTJCaHFjVEtWYmRTdDdNaEUvQ3dyQWRUR3BmekVXYXBVRnh3dEVvSENwdzFndGZkYnhrYW9KN29SaFk5VU9lTGFDR2NJbnVaK1FFM3dDWHhndjI4VEJFV3M2R2dBU2dtMExhZlkrSTdTM3NZZ1JER3VLVThWb1hEMTdCUHE2YXUrTHlIOUg4a3BZc1ZLdWg4bTB2dTFQS1daa3IycnZvaGhwRmFnKzVpbDFVbURzdWM0QlI4V3NYd3kzQ0VvZmRoS3p5S0h2VkJMak1jMW9hNml1Q3dnNnlqbjdmNU9zNWRuVzVEWVRybi9mWDN5U2pkaWVYRXU3b1h3cjNJRGVaUytyMnNsNnU4VzNHRHJoanJqT0ZiWFZWNHBRaUx2K3ZRdVRQNXJkQ3h5djhhWlVmdUY5WTRZSXVsWDE1R3hjQ1M5VS9wM2Q2WmxhT2xWWkQvaVlybGxBZGJDTXpMOVBQZkNPVzl1ZmJaeWIzd1ZWYUEzMmVDZXQvY2E3VXl0TUVRNnZ6UmpjU0NFVjFpQXRUNVhxVHNMZENDS1U5L0hzZndZdWQvQkllUnkzM3NNcnc3UUc4SGFxdmhtY0xNd01ia0w5S09iMFNTMWdUWm90WmNXZkE3aHlKWHhTUjFZMkhvRTZHUUJIM25DSXc2UzFGVXh5OTBycWNNTjdhblVCNk0rSU56Q0lBdzErQklzN2ZvOGl4L0E1QU1xcmlyU2ZmdXdhYjhMTVBIWVRwc0R1RTkxMWZaTWJOTzIwekVTYVVrZXJWRlAxYlZ4T2pVSDRkRzRYUFZveFpOcWVqTmZwVDdpWUs5MStDeGtUYUpzc3BCekQyYTJNbloyQ25GY3pwWm00S2dKaUw5dU4wem44OEhFUmdFSXlMTlBBYWJGT243QmtRK0pVNjV0TlRKLytaN3BjaGpBNUJwWGRBNnB1eTZWUE1PQ2VVUUJ4SUVNNGt0ZVdVa0MvRmZDZTZkR1AyZElRNW9SV01JNEJhNWUweVE3RlFXd1E2Z1JiYWlUellUWmhxS0txUlB0SGdSdkY4b3Bhdml2SEdNM09OV2k0UmE3S3kwc1pwWmJRZjVKY04wL29NVk5uZUdnalFrZEkzRnN0Q2s0RjJ1eFFTQ05ZYVloSVRZeis4em5HRUN4ZmJiaXh2OFEySVZaSFFjd3ZCTjRQdWo3c0l2MHpCVVJoUTVqS2FmVzF3dHlSWDRiQ2ZQOGJSUjIzeGZwR2QwcXRKVEd3ZUVKaXV1MEpMWkw2Sm9pNGxDT3pjME5vU1RQYVhMT3dmUVFqUUw5S3FrdXBMTTdlOEsvRjY1ZnFRWHF2NGd6MElWYkV6NDdacmR3S1BRWXBlcmh1RVI4N1cremd0V0pTcHVFYlIzWnRZbmxOemNvdjkxUWVPSWE1K2Q0VDdSQy9YNU1qVTNJcmxLSnUwTGY1Y2EzK3FOVFRFZm9za016cFBVaXpFY3lMbjFqTG1POVI4QmlpVlpncFNZTnVNaDAxR3g1WWI1MExPcCtxOEtIUldkUXFDaDBQL0xPUkEwTU9tT2w3U1pqM0V6RENLUlZ6bXd1dzVNb3NubG9TTVQ4NDFFNEtNRHlYZmFEa2hmSnkySGtiaGFzaWtYa1BtWlJPM210M1dyQmRKeWl1S3MwSjV1enlvYmZ2dHFjS1ZiSzZzdjdxdTJsT0oxTnNsUWRFclBPOTBvdWRlVTUvOEpYTVppa3lNeUd1VUl6aXdlLytucHRxVnV2ck4vT0JQVWdidUJsbjBtcEkvOE03WkF0K25SbWZLYyt5M29kOWhOaTJoRkVnblBCQU5CZjdyVEdXRkJLckVvRnFLVVNrbkI0M05CMzdaN25TZjA2Unhrc2JKQU9kWENhYVZyUlJDMml0ZnNQcWR0ZE15Y2lQdHd0d3hlYzFxT0FibXJpVGFQam1lRmZyZ3hxKzcxU0F6SEtlbDFwejZkY2tnNmpYbUpjVFNqRlM3MWE0cFVENFY0Y1lHZ3M0RWlMS2RDNFdvbkdDcUtsUTJ2L0Z3QVQyTy9GSVcwa1VndFBreWZ2Y0FXNUhWR3NtdS8zSTNyc2ViMGw2S3BIMjQ3MDhNUmxUSmhZSmF5MjFxc1ZMNUJhRmpMOGZCRmJUa2NrS2dyK1BaQ1dHUjk3OGFKcjJ3dDliaFlXN2xqN25SZzd2SXhqYU04R3dKQm02ZS9KeEFtYjRIaFkybU5oV2QySkI5TG5IbkNCTWJWZ0lvcTRZZnE1U0l0N05oaW9lUUZubUR4NDI0SzExK0kyNTdCdFRNUFgzZ1lKYW5yeURkUDYrck9tcGg1ZlY0SHlyQlF3SmJOTjdwQjJZTW80aEZ3S0VqaEFqN29IVS9aWTFLOWlocnI0UHNJRnZUbnN2TmRGUlJnS3ZqTDllalpCUW12c1d2SjlobU0zaTZyc3llN1BwU2pLQ3hwdEMzT2JtRXZZL1BKRGY2L0dDMy9HTnlqTTNNR2c2azN3dnlzcXM5MnFUa2REVlBBY3pFOGtva3lGSmUvYXhDV2JqWjRKQmRPWTRXZzlxUy9YQUkvN2FXQlNZdGZDRGJXMWkxYzhKcVJBRit0enRwUFhOU0YrSy9GdzVOeExDeW04aTVwVHZYQW9Kek9yRE5QMzdadzVabjFyb1ZzZzlQQ0J3OEtsMzZCYlVDekhHZDk5aklSYlljRXpZQTRGMFEyUUlwSVgxYUJaRzN6UWNSNy82QXA4Z1ByeXpGVG5nalJhQ0NJZnQ0cnlLb21nYUx6UTBVVGs4WUZFNXhkSno1czl6S09hQml3c1U4UnV5c0VJQXpYanZUOTc5Sm1wNThzUHlVYmR0VmxPc1BNQTlHeTdpVHF4ME4xV05YeEZraDBpZFlzUkQrZ0hoY2prbGNZcU1nMWxKNG9SQUQrcDNQZWFiUVBtN3NITnBrbkxjeVNvVnh1eW9PQS9aUzd5c3B6bThXcTJRQ3NCM2Z6OEdJdTVBd0hBN25aQklmK1lmQ2N0bFlDUGJiZ0NNQWZ4SnNuSUorS1VaSCt1cHdVNHVOdXpnbm1PRm55OER1d2pReUVrM05GbStGbnVZaE1LalVsVS9kRWwwQVZmYjZqRG5tOEhyQVRVa0trZkZGTHZ4ekh2ZUpUaHBmSi9vczAzdGNGdEY0cytvQ3BxYTRHbmVPV3JnNjlZTTRmOFFjamlYbUtETnpSTnZ2YjcxWkZvRFZhVmIrYWtLWFhycmcyVW50UFgyYi9nejdvV3VoODIwYmU1Qy9EaXdOV1dhOWsweFhuTXg0OThGUmRLbXFnWlFwb1YxWnhHakN5RkJ6T0JhMlhQRjNMYTZsSTJlWFIzZExVdEZRYTJ5U2s5YzZ5QkRkQ0dPYzZGdDFyL3FpM2JsNHIzSGhZTUthcWtxem5WVjJLaGRwOURrcGxBVGZLc043NUt4TUpaRWFTVTgzMDNieDNweTFwdnZqUUVhQkdEMVdpYXNBMnRoZm9aOFB6UVZYSkpCOUNCVUtESkU1d0Z0RUl0OG9wWVlVbW5FdVJFd3ZMU09hNU5mVjNiVTN3UE1PRFREcEc2T0ZTWERlOXBiTVYxbUpKYUoyNVArTEFpRGwxR3A0ZnBTSnhBblRxYkwwandVK3FHWUh0L0QxYzk3eC8rajYvZDllSUorY3RrVjFvb1dPM3VGb0VpNTNnRkEwWlRaZmFERytSdXBnY25WeFFHV2VPU1NlZnRUYmlUQStYaDFQRmpKWEE0Zmk4UjdLdXVSaHJOV0FMZkNGQmd5QlBTYS9NME93b0ZXMjNsS2RCQzA3dG9sbll4WXV0U0ZuaWtuRjNpR0dlRGZWMDV5US9QOVNjVjFZTElIRFM1Mkp5b0NKcmNYeHVhSHArVFI1eXV3OU02TnAvbDErekszd3lMM2prczkwOWsvaTR0Ym04WWZrU3hWcjc0QlNzVEJvdnU3VDJMQWNMRXpjUGtCeE5lNUEyUjAwVmdCNU14SnNzelh6bUxjNlVSSE1GN3RrMlRqTmZRMVhoZG5ZSlJxR1F0eHhCeFBYcGV2K1hQdC8wVjVIMjhtamtWYi8wYTRFNUdLcGE1ODJqMTNFWkVSMy9DdzJhM3JqTmJ1YTBOcGsyZnp1YjdoUzBRNUtQZWc5U2F2MVRjbUVWN2pvMmFLMjJsNkxUcUFXajVleVJFem9YVHNkdWVlcDA5U1dzV1dINlNDNjFsWStXbXRPSll3YVQ4bWIzUUxlTVd6YnFlRGd1SG9RTzlXV2NOdjFhUTJHL0l0OEx0bWJyb1V0T3Z6MDJHcnpsK3k2blJ6eGYrZlhTM3ppWFdkZXVWVDJTRGhtOUp2NVdrZUJXaDZrMFZ1ZjZXbHNVLy92RTdjUThvQmQwWllZUnB3ZGNyeWdlcDNKa29ZUkFZYXNyUjJoT0tKR0poYklseGVselloRGNLcGN1dk02YU5MZm5sZlZxS0ZISm15dkp0M29GcUJIZzMweEhvY2hpbXo5YnNRc2tvNGtvNWt2TVUzUWI2akl3RTJLVXJ0bGZMbEtpcXJjQ0s0NHV0cTAwUUUyMThxVkJhaE9ESHI4MXlNYUtFSjNtbmNtOElHTys4dW85UHVJNVMzMG1jcURsNFplZlJtM2RzK2FZOUxmWFVsQkczVStESG83VnNVczhCK2JlWUIyVjQ3bHZ0Um1VSE9iOXJQWCtLSko1Z1pJT1ZJd0FWaldmV1dPNmFMeFV5OUVnYzZUd21KUURKeXhhRzNyYXBmMU9xOEV0d0U4Y0ZGcG0yL2Voc3lnVXFUS25UMng5bnArMDBReWRldTBGTHViOUdhMTFKQnE0bVJXNW00a0Irdkl1ODdlQS82TDZFVC83T1VzWnFIbzVtSlcwTWZzdVRSUHdKbDFSdUNnMWxYR3IvRDV2T0dxWFIyTlVyV2h3TnZ2SENLd3dmYnR1dTFja1BtdDlLUmNueDhpYW5CV1lXbmdWc3ZiNGVlNmFJMXlNVXNzbVUzVEo1c2FyYTloZVVYWHpEd0xubHBMUjFpYktDVFM1Lzg2NVRBemNiTURqUG5mWnJPcGliQUkrUVdFSFZwSlRsNHVVK1FRM1RodkkyUWk1QWVkVEFneDRjektYVDc0bDNEZzFWNkNtK0x3emlxWEE2RDZrMDRrREJjU1ZHVTNVRkNsWXhMeXBPamtaamRseUQ2OHdIRitVdUF0RExHLy9JSXBMZ2p6THJ5Tlh6OE1YaGFIb3hNV0dyZUxkQVk2RXRJaEgvcFBLc0VacUJrQkk3T3VSWWw2STA5Q1U4ZUxuL1ZYejJxV3FDU2QvaHV6aXQybFZYWS8xTVk3bG9jdmt0TXRoNG92L2xNTlFTUm9SdGZ6MXVrK2hQVmlQalBaUHdEV2dQd3VwVUsxOUVMenA1R28zdkkvUGNRZzNkSE1ySzRSMGRRVGdhZjdOYSsyL0xxOFpLZTJEaXhVS3lyUWlCZXNleGhoMXVQcWJmaWhUaWVqZnplUkZ0c0pIZVBQWXZkdzhiNGtZMmRVdG55bk9kRmZpL2JzOUtrWWRycERDd2NBY09XM0xDTjdJNzJiVmZaRWtHYVNYUEVZVGNlNTRkMFVGOFZhUzByOFJ0UE9XamNpWTJFSWRtdkRrZnpQeTU4R2hBejRNbk9ydFJvNldWaHIwZnBQV0dwNnBoRVdsd2RsTEh2RTVlek9QWk5mejI2d1EwRHFEVC9vcmJzS1VveS9rU3V2bVpEd1lBd1Jndjk1UUtNV1B4eHNmZ3lqRHRacFNoTENuY0FPNkpoTVEyUUVZeUN0bXhtT21mRExhM0hVMzlEZWFuZnRiQVJMUWJlTUc5cVpBd1FDWnJneGFmWml1MUF5UzBYNmEwYjkwOC8yWXh4VzVxNHlMVkFrKytmVlFMUU8zem5IZTlveksxTC95WXFjdU5ZUDVvdnBFYy9ZaVM5MU1BUXE3TVN0dlBDaS81M1hESTFmK1JFT3BFYWVzdDJ4dzZhRDFVekx3bjNYcm92ckRDa1FJcm9EQlQ2bTlLeE5EZFVXZVpXbXRSTXBxbmpya2FoVWRUWmpwL2wxNGxITXNIN09VVlQxMEhPdjlZcFVBbkhMYWQwT3czd1h4NnpFdmlTKzJFZW53RisyTk10dnBXZE1qdGpSWEh2ZmZ2bUx1a1NOSWE1R3NGQVpPc2l2QTBpUVhMczZqa1hCbi9ORzVaUlFFTkRKak9TaTdjT0FPZFdRbFBYVDlnQTZ6alBEcUdYUHNVT0lwSU5UZkcvakQ2UHhKQWxhWG80NHJESmNrSmNiY3VMaFVSeWdPTFN6Z2UwTWV4R1FiaHNyT0FSOG5Xb2pjRDRNUklGbFgrdEVRcFRrMWxnaHEyQmEyZTVWZE1mUVFKQzdWUnVLdmdTd3ZrdjNUYkU4YmR6VEhPUWVKc3ZqTFBjMktwSGthN0ZhazJja3M0cHMyeWdSUGtDRXJLT0lrV2NJamZpZlg2ZDB1eCtFcHdOd2Q3eHh5NVBVNEhEaEhrRVJ3ZFlPbDZvZ2xJbWpJcFFQa3RGeUprMEVmV2U2ZDUwUXlnQkpoelpySW5zMWlMVXJnYXprVHR1M3dVQ0gvWlkvOUYxbEdiNWZ5Y01NR2prM09laWlJN3RwdDJxNU5IU0hGNG0wUnFOYWhYMFU0bFE0Z256RkloMWR6cGUrK0hOY1N5ZzVaRXd0VkZJbFlCUXdWY3FQWHVidStnbVpSc2RlZi9PSjFKV2craGN4em1HT0V4c0tWUy9Db2IxQzAyQ0Jsb2psdk1SV2xGdWVJMER2UkRxb09NV2pQdTIzRWs3NEZXQlEvVlRiczFaSVZFc1VGbzFXV1VPaHorWG9ZSWlxTmcvVE5ZTGp2emozNlIxS05xTE5CMW11Q3pmS2x0Y3RCRURtRVNsY0NmU2hIREhUdTFobDJTNmJLTDl4RlViZWxLMTRld1RaMXNtZ1lqOEpnaFk4UjhuL2hOTGtZbjFIM0s0a050QW1YTTlHUmw1c2NsbW1DT0dIaEF0M1p3UlJ6WEcxanhZdURoUGJtenl5U2lCY1ZMT3FUcTFqYjVscmVEQVFVL25UWFZrRUwwTWUxcVdtNU1kRFJrUFQ2R3pRd1B0OVBMOW1aUG5wVlhValNaSVRDdk9XM2FuQlZCckgrYjlCTzJnZGpUbU4vZit5NFZlNGRFeSs3dmtDelRzNlNEOFE0Ti9hS2p5ZWRXMHNqeW9tMWdrbTI2MTl4NjRON1pFVDFIQURhQk9YU08rb3Vzd1ZyVkViMGtJS00rUHhNVUhDYTBQeW1RTklCNXZuUERtUFR5VTVGbWY2SzYyOTF0TFM2ZW5GSmtWbHQ5TENISnYyMGRsTHV2dVdQUmhxTG0rNEYrSU1oWXMzaTF5Y0J2TGFWWXkrNGJjZFNkNXc2LzFlR2M0ekxVVnAwYmlvMzNDc3FLaDA1TCt2TTNVU200eUJ1Wm8zek41T3Q4TnNmczA0MUdNWlJqZ3NkckZENCthVjNFSlQ5UjJvUCt4Rk5zWnRacTZDcVlPNUdOcXowMmQzNzdzZzBJSi9lTlNqSUxzdXpNbWtDTW40MkViL2lXSm5QaFNJZ1Z3VmFWdWlubEp6NDhuRWhWNEhCdno3R1JkZzJTQmd0c0lESE1TM2grTzZqY0FySk1JVzMwVzhkWkZJMDdzK2NMV2lKaHJVN2dXNU9mTmJPV2tJNzdpUGc0ZE1LMkJkV2plZUdFRnhuaTU1Z0ZEK09yYVIrd1A2VmRzK25RU1h2UzEwbzYzY0NTRTk0MEdST1hOeVc5M2xqK3NDR1pRTnplNGRETlRaQ0RjbkY0OVFHMHkyTFVmamVFdU5IZk1QTDFtZHl2VmpTVzMzV3BUbDlEU0Q5N1FBNEZkeUlzSDVrSUgrdUJqTHVZcnIwcjdZd1JEaitPVTczdjRxT2dwUTdkRWhkdVRyV2pQR3FaVDhOOWJJT3Fpb1F6NDNSOUJhODlGdnNpZk1hSjBjRjFkVWR2U1R0Q1RhM2hGdTcrUlZEY2VYWlhZQ3R3YStTQ1J2ZWR2S0RIMW84L1YxUVR6ckRYb3U5a0Q2ZlZXMTk1aFpYQ3VwKzJ6Z3ZjK3pjbitmeWszWldjdXZzNDZyZy81bEIvUDZsVGM4NkNCdW9BT3lvUkZabmlqK1Aycjh1Z0xuLzlVQjk3dmxuSG5UVENBK1BDaVE3MExxWkFtSHVRSnh5eityZmNNT0tkalRrTjRuN3ZTUXJTcmxzTnFsdDRORWV3ZkljNjN5QkxSRC9OeUNDL1VnZzZOZVBrUXVaTGU2dUZ0S1BlZVZOVHZ3K25GRm10RzlsNkk2TFAxVWlyRFBxTlV2VHBlb0ViN25WejZuRW9zaEJueXZIcUdsTDEvT2tremtLQ1RyZE9Fby9UMFJkdHY3T2Q3WnVsbEFDMHlaSlZzVUFHcUQyQ2RYVC81Qjd6d1dFK3g4dDFOK3NQNVdQbExxVXNidlNKNUhDdVFNK3MxQUEvU0hXY1dJNmlFQXVudDY5dFJzQUgyRHpCQWh3RWZOL2hEbTl2dWpVc2lxdnFWd1IvOEMyVUhpZEFuZE5OdGYxNFlxWG92bDNOY0Nvd0VGTkc0bnh0Y3E2L0g4YlBZV25NMnlKNUczZ3FGT2VvRS9jTWljaGxDNDdtdUUvcmo4c0tveWdzQmdJSEsyNXhDbGoya3ROMlBCUHJ2RVlqVGZ0ZnZ1Y1paM0tmUXZETEdXWTUzb0ZicjUyMXRLYWJDazRZcWFZT1A4cXZNa1F1L1F5UEdYSmlPdis1RC8ya0ZCZ0dCY3VzdWZRWHRXWDdGUVNZZXlQZnYzSEhZaTNVc3VyeTgyL2hpWVM3cTMvd1J5TmpNYjNZLzVxQkhpKzh4anJHdyswYy9hSkJ6K3U0WkdJVFhmY0FoY0EyekVURWthQXB0Qm82eFgranpTVk5mbmh4OHF1V0JaVFdvSFdxWmEwSGZMaTFjaU8vOUFINE5sVGhnbUhvQkpyN01wNFE2cFZ5bzBuR2E2WHVPcTNhTjlaN0hGSFQzZjNaZlBkRHNRSEVlYmh6by9IRnV6ZGRKVDhpTFYxRnNIckhVMkM0c0tTMkJXMUFGWFNKckZTbll5YlBsTXNZOVRGbU1DWjhpMzJrK2lZcXdWcmYva2x2YVl6QmVqVnA1eEkxQy82Y3lxUkdHamllNFUvb3NUcE02WUJlYmIyMU1WbWQvbEpaZXVGTnp0S3hwcnZ3amJaZUN6RmNOZW0rUjBIY1ZENzd0MzBEemdrKy94a0habDlGQmdMeG4vVTV5VE01SUN3cGxLTlFHajhRZE85eFVTWXlUT3M2L3Jua1RNSjd2VkgzdUFNNXk2K2x0dmpLWW1WLzRPUXN4eEF4anZZZW9EQjgzQTJjZlVQVFFXZnIwajFNQlhSbWdIWGVPeVhOOXBIaUxjNE4rekJiVHMzNjM2STFHaXN5b1ZDb2cwSkluRHlYL3dvTEdDOWpqY2lqUUdoQ28vdDRXRHNTRDkzMy9xSXhRZXM2c3VQQ3FtVEhjd0tRVGFydmxvWjlCSW13SzdoRENlVWJZZ3FpaGpWRzhka3VWYnh3dWJNNUtEMTBjQnAxdzdoNzdZM2loWCtndXliUnhVbEczK0JTYS9saTZlUHZEL2NxVUxSWUxzWG5UNTJxdW9zNDg1ZXJuYndRTU1OM2w3b0tsS2o2b1VPYW5MRXZvWHlkaXlCcU9jZlFST0JtbEhIN1hUUWpPek1lYlNHYkhYSG9DLzNPUlNTUHVHdkU0OUgrUVltd3NuTHpPR284TmlxOWVJWmR4RUxTeXZmTHg4cytVenFFQk53UjVCUzFIZnlibUZCaDRESndoRmViSmVYM1BnUUNjMWJBUGVhbHRTaHM3VXIrT1RhbUxPdEM1N25tdW4zUmFLNTRla0lRbTRXRDhzLzF6R09XU2ZyZUQrbVNrdUorMEo5VlRHWEZCcXR1OW9oeHR1VERBYXpiMzlRU3JwcWNMT3oxQ3d5OG51N2ZsVnhiSXlIaW95YjdDaE0yaWZiMkxXSThvWEJnTHc0eSthYmR4YW94RktqbklEa0NSNmxsd2NyNjVNNTk2WTViN2cyRUZ1cDVwbWdOM1F5QldwTU1jTnF6dmllZm9vbHM1WFVlbEhIcW1CZk9OTEh6VEdVd3RTS1ZBdHNSTlh3RFBLaGt0L0JZeFZ3Tm9CZ2VLOWpReVAvSXIxOXNhN2NKZ0NURGh4ME5GSmRndzR1MjRBYlpzT2pYUkVmazcrempWVGdEcnUrWHlSTjVudnVyT1h6dGhBajEvT3FmdFhBQ3dRQk1NeWRZVC9zL2JxOG5LZjg1TjV6MktJTzU5enhlL01ubFFCSStkcEpWQS96Mm01NXJDZ1hkbmI3THdnTnkra1JmdWJiMytPckFlWWUrbXYrVXpQZFJJVS9MU3hUaWF3MVJpS3BzN3duN2tOZDc0bm9UTk8zY2ZhbE1lNGg4NUkvMGpZZWIvTjgxVjZucVZkV0hwYjhaT0pFMFpDVmk2RmpRRktDV29rY25SQkRZYk5lYWkvM3NPT01SOS85Z1JoVEI1OXhaSDhhUnZURWZoL2h6M21USnZCbXZhdTVUcUFlNFBqSjdhOGpyc0F2eENKVm84MmphN01ZV0lTZzhtQ05STDVqSDhLejl4RUxoTk9pTWZ4cDZZWXAzc2dvNURPWTMxN3ZuZStDdXVXdkluUE12cTRRYm5TRnhLYmEyR2hoTHR6Mlp5bTVzbDRsa2pLRCtGYXFrbm8vaS9FaDEzWFk1TytmZnBJbnNoN0daMDNtRm1IS05aWFFta2hmMkZqdXZFT29wWmlQVHpxeXE1ODhISWRjKzdLcUwvblhzWVhIZUZzTlZwQ0JVR0ZNeThRT0c3dFovRjlROXZnMmcwSnBnTXhIQVhlSWpLY05qSThJT0RyRU52SGo1cVNwRTJZRVlrY1Y2RE5lUzIvT3U5bU9xdlVhWEdHOVR3NlB5NWlwK21qQjZMQ0pZTndWMGRSMm5UaWRHeGpOZ1E3N255OXI2YzJCM1h1RmxVVFphNTRNVGUvN3R1VlpYY1VmcW9odDhkUnpiRWFvSldjVkJudi91N0Y5RE4vUFVoUms3YS9EODA0WEN5RWVNNXZaVDJOcjRxaFc1TDIvRGF3NnpFZ2h3TjVMQ3ZoRlBKdjhSdThBMzVxYWlnUHJtbVlVWDZwSXQzVlZSbktialVnTEs0ZVRQbmZjeUhWNnF4ZVNjOVFDKzRGVWtIMUNHek5VNGxoSkppZ0V0MmtsaHJJYTRreU9EQnhSNjYwN3lFYU1oYks3RVIyamNFY3NsWnoxdjN4L2RkRzhNd3RLYXI3bkFlYVdrNDRnTW9VRkgvRlVyNHVKaEhVWjRaTlhIekgzQ05rd0c5bzlkdnY4eVIxQmNLNmxKRVVMRjd1YmliN0dTRDRWZWp0M0IvT2Mwb1ptRzZBVzNOTzhWRFd0VkxwLzNpbEhPZHMyMFlUU0JIT3krOUEyZlBOVTZxRmtZRDYySmE3RFFNRkY5ZnBsTjhlTjhGNDd3ZXFQZE5xbDlYcGpnMi9nQWVjQ280Z2ZSR2d2MUY4WGx5M1RwQWlkd2VMVUl2MzBGVnozbVQzaUxEZmYzd01IRFIrQVdObWwvSWpHZzJBcVhqYXVrVjlIOUUzdVZralBrMWZTU2w3UkZYQmRhS1NidWJDZ0QwSUZRRXNJZmNSSjFibzg3SGNXZ1Ava1ZmOU9ZZ1RBa1NMV2FNbldqVlFEb3ltOWhqY2UwcnFrS2lyOUhaVFRMOEQ5YXkyN05NeWtaWFNpWVdFaDJNOExpL2RhbkgwMDhzSEdYeE1xWkkzLzEwYVlhOVhBYWFhNTdYV2NpWTQzcllZem5Hc2lydVJxYWZhNVFIR1htdFNSSytwdmxaNVErdjlWeWQxZmE3em9ReUcvc3R5NldXeHYvRGVPc3E5SXVmV29VZjdsSk92SGh5Mm9IN2JXM0tNWDE3bHNiZlRsdGRYeWNEdEN0ekdBQWZUQzZDL1g3SGU1WjNsS213b01TMURzN3ZweHJ1QlcvZzh5TjJ3ZU9EN0FYRWQvWHF0Z0pqWkRlNlMzQTdLd0l4TGZ5dTAyT21kWkNBOU9vcDlZanUrRnp3bXl0RS9mMEl1NXhhQ05qM2svOFUwdURqRDVGMHUrV3RMRjVLdldXb3YrUTJOVGpRTjRTbzh1bnVJUlY5eWFZUXFHa3J4WGtlQUl5YVhvNlZtM29MVGpzOUZ1ajZxZ21WOWpCSjBGTG83YmVCbTByQ1lad3NSUWlwOXg2OGQ2MHczd24rTE9sOVBkUlhzdGcvNXRJMzBpQWVzdHlobnFPYkxJcnBra2I3M3pmbXVkUGtaUjVNMkpzRktxTWg0L0tMaXIwdXFPb3QwRGNKUzIxbnVmUWdkVjY3TGovS1VOcWdsZlp3emhSTHlGRjNiWUsyNjNnVXFpZGhVTXkwY3ArcHZVWHF2cER0NDNYKzRXL0lxOFgwM3hzWjNVZjRNUVhZQ3k0R1BXUTh1T3VhU2cwMHVneUFQaTJKc1YzTkJ6eHRQcm94VmRKdG5vS0hoUTdORGNHVHpQWWxlV2Roa3VQaTZoQmVFTm1pYThDMGJtNElJMUNRRVFqLytFRFEwWW9NL3pJNnJrNVJzRGw4SE1DZnkyakd0UTJyYW9JbG5lT3dsL29kMkFPVFBTRWVVRFIrOEl2clBoTGduNnlWWVZkTDdBd1k4dlo0Nk9KSTlTaVcxQU1BSmh6M3hKYmhmcGhZYXVsaEFxOGc5L2ZScXhTVnhrUG5vL01PTCtwbnlnSTZVOVpnVUNDMU9PU290SXpJckMyeGc4akFVN3NGMkNBRSs3enpDaXB5Y3VFOThjelhyYWVkbGYrZytHUUo1SmFjYk5oSlRuTlZDWXhWTnU4SkxJUjcwQmwrY0xzUjFnRXZxSFgxbWQ2NDZqUFVDcFdoVFlmdmszNzVlNjJXalU5aEZDNnZlTVV6d3E3WHJHOTBsZThqRWM4ZVAzeDVuV1FITjBLSkFYUVhEcGw4c3RUR2U3bkhOMUoyMk9CMUlFeXlMMnV5Q2tqN3lpMkxpVnNEcnY5eEdEaGQvVWkxT2lsdmk1NkJ1UDk4Mmo4azRtdkJKZks1WXNXbzNPUGhyVG1ERkxDakdSblRYNVFNaVluYkh0akRaQWFXMktBYWwvZmsvTUdOV08yYU9KRE9jcmlqMmdBbkpKb1RHc08vZGpnRXUveC9XaTRtVEZoZVZXekR4OXppd2xPNXB3Ny9KRlFzNS9ROE9Ydk5BNW56WG9KYnVpbG5hUHVFeE90dDJTWmo4eS9Pa3lhQ2hENmFFSlJ3azRmcUR1UjF0d0NwT0I2b0V6YVlUWXNrK3A5OG8xS2RhUkxzZE1xYnpXSkpMa3kxUTdQTDREVDlRTXlrVGNPdTVQU21yckIzUVl6R3RqSTdYQW1UaDQrSUdQQURHMzIxWHdkWEt5NWNhZzVHZGdHQW1MaDIyLzFhTHRsQ1h2cEc4bW5uZnB5NzJlMC9JRFVQWFhmQyttOGYwOEswNFI2bXAzaGh1bWU5WENEcnJsSWtiSDJQbUcvbjdUbXUwaXNZc25QekF3TjM3WUk1YWxrc1Z1NWttRzVxVXVyc2Z2ellzNnJ1N09mdzV5R01oYisrMDhEZHh2bnYrNWJTL29Hd3ZDekxnQ0w5dWF2b25RVHU2MlZ1cDZHeVU2Mmorb0ZJZlVoUDdaTVY0VlJQWUcwcjdZWGxsTFB6dEpYN3pFZS9qU2ovSmVxaU1ZUjc4OUdFNWd2YXVLLzdTTHVpNnVKalVac2JpWHVkTmVhZzlXNlFvSVB5VW9zUnVGTWp2cHFwUTNseG9jSUxZaERJU0hqRE1XMk9SbkhlWE5KNVJ2a1F5TkIzMDNVYlNHZU4ycEMxWjdWOHZWLzBzOElaOUg3L1FOb1BpU2s2ZGJ3cFlZaHhGdVI3TVZTdFROeCtMQVBGWW03T1VLS2luN0t0czRZRnRwdFRVQnBKZzIvaU1zS0U5OXM1aEhuclhFM1hBQUxYRFYwKzd1MG9uUTh5amowdFVyd1QwcUlMZDdPOU9ZV0YyLzVBSlVTbFlSNSticUM3NC9qL2srcUcwM1cydnJDQ0dTQ2FGSTNqZmovV3FubUl3ZzBVcUVVL1pBdmcwMjNLRnFXZjQySnJYem1wR3NQbnF3MVMzblNyRE1ERUpiSVpiODFnQ1NSb2NiYzZJdGZpOHUvcE9RQnIvMkU3UWZwRVRuNlc2aGdPOWpEQlZlN1IwY1BXa1ZoeVNCUUZXNlhxQTVWeDQwd09hTk9qNTREZnVzbHh0UXEvUU03eDl6aUVUY0I5d1ZUR0ZNQ090VkNubDJtdkJDTC9kZHVQSXRIaG9PK2tQR0JaQ3JuNi8zeVB1NlZRSkt2aHFsTG5OeWFUbXNmdFFJWXVwWGZlWDlXZE9iQXhuTWVsKyt5Mk55YzI3MXJiTlQvMmdaWHRyZ1NPTGFGK2dVNm5SbGJ6RjI3U0JNejZLYXRRd1g1dldGeDlBd1dnNXV0VEVoSXhnZmo5aUduN3h5aTJWdEd1MitGMTFsbzlwV0VhNEpFOElDaHFHTitBSEp0Nml1bDVCM0dEcWNGY2ptZzJRMGRMT0w5cGlLWUF6c0Z1ODllek5VaTZZbzMwSDZIUXhQcHpxcVlOWDFTMmVkaFAzaGNnNzlaN1NuMzZUUEZXTEQrZ0tzYXZmUUg0UWVuS0NzQUJLcTNHbm5FTjdtdUVZSkUrWW9zcEF4bmttRlJqUC85SEMwaUtpZ0UwdVZ0WnpXL0VoZ1RPOWJHVG9nbWtJN3VQdzdmWHlZcjlvS3dEY0s5blF2SHVqOTNJRGJqNmllWXl6a1FoWTdYbkVPZ1BrNFErNGRzUzJSRFZUSWY5QjIreWZDNVl6TGVFZTFGVVpRL2ZZVStCREhkUXpFYTJ3eUxjVHp3ODhac2Y0UzNJY3BXWmlRNW9uT2hZYUc5dlN3UWlOelZqUXpoTGZaaWJJTlZWNVpCUlVIcW1WWTRyemRLVExRT0F2YjUyeEZBMTBNckFKTVJ1NmZ3aWpEKytkRHB1eGFWMTZ4U0pUeklhSS9hMjcvRGUwRmltemltZVhPYlpxbmtWU1l6TGhUc0ZWZTZUSld4OUx1YUtzSzFZUHFYTVZBK0xBWHdqcW5XMDllaFM1WVVscXdOWGtndnhJbXEyZUJRY0RiVFlHZHBTdURtNUZxdmJOOTJxOGl1WDBQRjBUS1p0aDQ3NGY0ZUM1UTE5RXByZjZKdFhROFo2RTMzNG5qWU4rRnVvc0ZkUUsvOTIzaXlCejl6ZWFuaUdsbDk5a0lzMkRieklrOGZzZkx3UUhhWHdHTGhlalVjaFhYSjQ5eFRQdFhVVHJ5eHdtUkc5ek9aTS9iWCtFOW5mM1Y4RjRjOGhQdUNkSXNSOTliZXpqVndTbVNENUEyOU5lOXZOQ1FKUkZXQm9wRm04UzV0UlFvdkdqRkZWejhJNFptTWVFYTUyZWZobkwzbENGNXBWbW8zaElkVUNqdFNlQS9xcnQ2S0RpQ2JCZGtQWmlSVmxRTXFQT1hvSTVKcHQ4QnROTjNqT0FTUmF2YTZoSE10aS9VUVdSWm9Xd2JhYjlUTUpPN0dDdDI5bW1QWWsrZkhYNUZFbjd4djZrbGxIMnJFVjNPcEtIVFdOZ3YzYnczOEw0Mm4ydVhlbnVnemczUkZjanlNNVVmL2cvZGRvR2dCdjVpNHFzR1g5bmlRTTVJS2dCNFdaRkVlOUVZellrSzE4U1JVck9KdzlrYmdoc1g3WkdSdjgxL1VZN2s1YXBiUmVrNGN5MzBJaDh1QXNVbGU1MGZFdjJKSUltc2g0bFpWSklMdjNlMjZSbWhKMHAxbXdwSDd2bVZyVEhNSTVlNGtEaFA3TlBkZzVnSW81SWdncEx1dWlGeDBJbnRrWHhudS9LVHg5Wm93cUZRd0xMZzd2VjVvN1BFbGlMbXVMQzVGd0VVMVFLZldIMmJrZnVMSFo2NEdYcHpnREt2ZDRjc2NsYjRvK1lBcDNBNU9TUDJsUk5HTmxpQmNRT3liMUdOdVBoMC93N3JZcE9lSDFrLzB2eXlLQ0E2ZnZZVytKVERVUnNoZkdqOTVEWGM2RFVNZXF5TTFWSWVYeTZlRXMrRmZNYUlOcmRSM2l5VW9XMmd0RS9IaVZ4R3Axek1NVzc0cTBtU0oxc1QyOVdlcVBmbXhlOXBTYkUvUElwc25RTnNmWk5nMm5oZ3I3ZXJjSTUweGpnUHc0ZFVrNTJ6Q2ZaL2kvSWJEQ0U3M0cvZk1DV0owa0UxMmN4VTRhOFVhblQ2Y2xqQzRnUWUvNzd1T2hIOHMzMWV5UEVSYW5zcGl3aXFDaHlsVENpZllVT2NYMzk4anRFVFpOYVB5ZmZUZlVOSW1nQ1piUUtidTF0UUEwcXBVRHFjYnExSjkvK2xMaXV2UVFnRC85YzBtdlNkTUxkamdKanNONkFvZVFhcGFvcXVkTkhSMVJCUEloamFxek1wY2p0VWlhVURUVHFNY01qZndCMFRNdTFBMm0rV2RYa3p1NGVVNGZOZzhTN3UySEFpbDd3K0NvbUp0YjVpY3Z1Nm53UmJwVXNhYjYxUUYyaU5GMlJ3UndtNlZXWC8yNndFOXFLUWxpUzBORGRXbGxrdmpVdnhKK2tneTNUYzVDYXhMalgrMEswR01jeE1TRVRXZ0x4Wk16QWRuSGRGL0t1ZTVBcmZleUNnNGFqZEp4bElITjRpNVhoa1VWTlRjVGhNa3ZGelAyeHdpOVlRbW5ERllMU09OWk5XOG1yL2h5NkMwSERERzBONjB1c1psR0RSblMwRk1UOHBjNytrYXFabWxqaldVSlJCbVlHUE9zUjhJcUpRMmgyRU5Fa3duVTkrY3pYR0tzWE9XbjFac0U1cXgxUWdYbjA2cVVuU0cvNVNMSmFFcEVzb3dxYmZjYjdvZjNpMlBrYk1RVVQxN29BUkltYWhyZ09DNGJVZXpIcWR1TEV2MXlFLzJNSU9lSEtWcTQyektWZG1CRVZoTC91ZmR1djh2dUlUeXplL1lYSTdDdkQvNzZRWkFHVkttbzAwdzNYUDg2eXBBaXYzS3JDNUVUUEp2ak5HWTVoc1JtZFUxYUpzYTNxejQyVko1RHVpVEpWWTdtRjdqdmpBbFhSWkdja2FZcWJDYzhlK1RnaDgzcW5YeGFNMlUxL1dIMjN2NEo5cHA0bVdUT0NucStnSi9HUThPaDY1TklUU1hna1orMXp5a1FnMFhqQ3BCNklVQlphbGlrek15UHNLdFplUkp1N0R4blZ3UUp1VXhHQzArVytKRFE2MXNXb2tuRU1tUk5aZU9iakxGQk9MTEttc01TWFh3M2VIbm5UR0RFMXpMVCtoUXBQZGExaDNGTnJFMDNPUFkrWTJVeGdpdzRZMVAxUEdzYUxWVnUyeXRjVHk5VXJMNGJjMjcvTDYzcUM5ZGNucVQ2U0tkL1hWNUxDMGJYY0FlcFFkMzFHNDZKMzBGWXRkTFNUQURLaEllVEhHeXRlK1pXYWV5YXFmdFRxa0I3azk2a0NiNFA4dkRzY3BncmRZZXdocGZKTDlpSE41TWFGM2x6QmdiUEVvVkphOEZ4aGpwZkV6clkvclhKVnNiZjNzdXdHbFJZSU4wZjFuSlRNSkEwYytBcnpURUpBSFJNZlhTcFdJVVRBeDdQQjFqaTN0YmFjZ3Jvb2x5bHZ5S2FOMEp0RmdjUVgxMEtaYW9oL1VQcGk1aTIxbzg3MW5Jb08ySXJzOUtPd1U3SVk5WlZSMnNHL2VnTUdWN1c3dmNzZlQzQlZSZytpQnVpTktYc3N6RVdYMm5nbXdGVlhYTXp0d2FXR1NKWDhNbjRZQjVXYncrc2RZRktaRXBGdkxxdVN4anJpU1pSUUMwZmlSNTdoMlMxQW9hNkMwckNnQnAwVEZ2eUtuZGxGWC9jaUoxdmRvUGt5bFVKN0ViSGdYWFZ4dGwxUVRsSTEvampNc29JMXRlbzFjY1FuQjROZm5DYnBaeDM5Q0JwRGYvZUpERHBPekUxVXdVU3haRU1WUmhRRWE5Yys2L2tucXU4ZlZzUnZweVJjSmEvYzQxVjhXMUExcnBLZHp3TXVWVVYxKy9JdHVBNkdFNG11MUlXUEhSVHBZdVFkbmxxaGEzejh6VlVwQUFVTjhweEU1Tlc5eFBKa1FvMkZ5SFBJYk5DMHZ2Rnh1ZVROOWp4L2VVMkhuN3BEMzN5ZG5mdHZaNTFPNmcxbURxTmZrRkVYdVJ5U2ZsL1haaG00VzNzMWQzK2dsOTlxRDJRSmU1TjN6em9iS05YaEp6dk5FTjJBKy9pc2Z0TXloNW9EbFcxZGJaYVBoK0pOV0hlNWdlQmRkRmZvSHJnVkZ6ZjBQNklmbDhndWRDcmwyN3dsNjdmc3NGSTZ5Um85U24rcFNVVmFzMmNweGlJMWlvMUdmQVpWT25mWWViUElQZXMrWWdSOU1Kd2VZQkJ1UXBsam90NVRQcEVScDlMakFUTllRL0t1OUVZUGFpWkFFL1UzUmFOUXpEekxJc09qc1NESmFlY1EvSVJMeTFkbWdwdDdvVExvMUVwb29VSnF2d3UzTXBpaVB0SzcxK3B3em5NQmZiUTFCY0RzcDRoVVhvdkRNaGc1bGJSYk9rQVlzRWkzTnpzTXd5ZUZxQlNmeFYxemhRZWUrUUhXdUEyZWtaUWxKeVNMTXlDMit2c0I2QzFWbkROVSswcVg3TkNNbmhFZXVwRTY1RVBCMHhJcVVQQVBsNWN1aEs2UVQ4b3ptNWQvWUc4c003bE1MZDczbnpZVjkwcTgxc2RPSzhjQlpqUEpBWVp4U21BVUhyZWhSL0x0L1FDL1ZqM2RQdmFidlFKUWNLTUJXVUtzZXVyNDQ5UkRRNFp2cHpvYVI4RTY5NnJIU2RSY3J3dUJSeUM2SXZud3o5U3ZxdTVGSHhQdXJyTzRxMTVhZUZEM3gxVldOWjVPYnF1elRFZkd5R25wT1c2OVplaUxOK3V2U0lzcUl0MU5sOHh2NXVyajZONGZGKytPQzFpMm4yQUNlVXJVLzJoVGlDdU9pYy9mSlNaRW1kVUVTVGxQdFdUUDZsYmU2MnFnU2JrOU9uYUREWWZBdTVtNWdzNmRYQ3FVRVlKK0haOUpBRWxFbHZLSnBkTnBxSitEdHVJNzNaelRDTUxheWwvemI0RU1SdjZ1SlU4VFRHYVJDanliSjlpanJEd0JZOXIwc1AwaHBJV1ZFUCs4NUxLa0xpdnIyYnNkSDJrYVBGYXFsVVBtS0IwZ1BOWlVuREI4L1ozREVNbTBicGxIY0thcTl6cTllUlJMS200cG9JN0FjSndnV2FyTk1FdVFKZ0owb3U0TDRnRmlUWFZhYllELzhSWE44RkNVN2RsVVVkeUFjREZkeDh2SlVKdnVJMzUwcFB4ci9HVlNYSGs3Wm00VTE5U0E2ajRGNlVOVFNHRUNtcm1vWVA0aHE3VHBCa3ZKbllYZTZnazNBME9vcVJLaFVBSjI0MTFIbFZoUGlITEFheEQzUFpwUUMzMWVYV2pqWDZmdnBLbkN4TTIrSUhRemFVVUNGQUdGalRDVkI3K0hicytZeEFZZE5WdW5hVkxiWHM4VnQzaUtybEtWV3RXS2FmOTVHS0k0VFNOOE4yZ1JKU3NNdk92WDNMemZtaU9lUzhQeTBXMHA1V0NVM1dHT0E1TXF1MHhXTThUMFpQMXE1R2xpOGhWS1pTSndsZFNKc1JBUktqWHNlNGswdGpRRjVLaThqeFVDNnFneWVnVTBHbEZzdllENkQvUGJLZk5VWGk5NkpkOHI1UGlsbElqVTlkZ1RXTTdOYzdGZGVFdHgyNXZDcjkrTElyT055NE1yK0NvVHN0cmRGRnVnc1Q2SjMwZWh4d000L1N5OUVRdjhoQ2lUeWNPUEhYbGhQNjIrS1NOT1Q1U3Vod3ZIa2hkbGo4dE1LK0YxT2RvTE1LbmhBbzNSNDhBME9YRWROUFhONy9KWUxLNWI1RnpySC9MaHN3NGo3UzUvOGRIK0cvc2VqV2ZSMDFWT0t4UmVZS3d2RTFYRTRaNGNxV1Z2WWVuZ1dwNXcvdHdWSDMrWmdaK2dCQm9tWnVwRFAvcmxFclFFK2pkTmRsQTBKNStaWDREZzlJdlpOenlVVUkyc3A1Y2NhcmJZTndsZ29GeDB2WXFFWTB3VGlGOFBJNnNzSjVUREU2T1ZXOFFNdVE5QWFmL0NIbXFkSU5EaWthZ3hlN05DU1JLKzFzdmR4bDBrVzV2U2dBWVcyeER1NUlNQzZWQmpVUXFjdHV2THl6WVdYSEJ0V29sY28wb0FCbk5IQmtqaWRNU2FNaG1jSlhEZHg4eW5MQzlySktlNGErMnFVZS8rQWpTUWduQyt6K3Q5UGtMcS8vZll0NU5HR0lTaG9DeHpydUxhdlF5clkweWd5SUFRRFhXaXVwdkxramFxTWxFazJFSkpjT2xQRVR2am9BRHRZSjEwS0EyS2FRR0k2R1dJL1V6K0w1NlBRR3JXUnlUTUtnanJzVFdtSkhTNGtlKzBweGhGZ0o1RjRFTFMrcW9lT3BRVUVoM3lSQ2s3ZGY4dHFzZ0cxd0xDa2RHTEsvWFVUTFBoeTVJcGZBeE4wNGhqNEkxRTRkZmF4T1FJcjF6TC8rM1l5YlBEcWlOYVRyay9XMmYxbld0cVpIUUgwOFFiUjBjR3BnS3ViRkVxbXc2VFlBVk1BeDBldGhIV1BTS2QwSW1UTUJFSjBaTHJJY3dLMW1tdXR5SGR2TXRGL1BFc3NMelhwa1pOUVRSYnBpRWFrRGJwbERuaFRGa01hb3gwbnI5b3dCY1FBdGNJdGRZTU8ySk02MGhGTnhQUW8xbWZoTU40V0NqblJXUFo3V3VkLy95S29iNkErVVg5eXVUVkYzelIxOGZQMm8vYStTYTIvckZoSnpWT0o3L1c5Sk9vQ3dhQ1VPTDlYVnVEQXZiS0w3bVFUbSt4UjZ3MVQ5b25LRVpMbVE0c0lEeVQwM1dSeDB5MG1iY3V2aDhpSzJuQzlyaExMTW5DVXBqVlRBRHFubGxnVlk4OEE0RnNLVVNOWW9pazhuLzQyWTkyTUwyYlczK0FLRW00Ri8wWExGem4wN3c3WVNNVEpxTTBueDlSQ1F1WENxanJySENoRW9MSnJnZHRUVk1CQXFSc0Y1OXJCOFhXWEtBbTNNZUFERGo1SGhnUTZzbTRlZEF6dmxmWW9SZ0JFVmx2Ni8zeWJqelFOV2Jzc05GSGNWVVl4RzNWbDAxbGhpMWprTzJJaHNqR2x3T3ZPQmlpT0FFaG9oa0ZqQzNrUGUwa0VvUGtBZHU0Yk5hZGQrNE5LdWdIRjd3dFpHZWdxK2VyNFFneEtWcytTbHlkMjcwM2MrcmZHTE1KZmozODB0MjgwdzRPWUFIanNhelY1Z1pNamFibm5XcU4xNE1iVmlIaFZuUFgzUmREWnF2NWV1NElKdUFDMnhVaVh3RVNNVGhBc1JnYy9LNTBvakRGajdYSG40Skh5N3pPZHVXd1FBTzZDK0h6TVA5NE81VEkvd2lhd0tPY2RXTkpSUDhUUXp4TVRTVFZZRlJmejkxY2VWQjZGTFBwNzNWaHpGR0VVa2xJWG9zcmRRbmxjRUJxbTkrZkIvMFRYK2xXbFkvcElwbldJaUM1VGVCSElsV3FsOE5sQ1d3ZTU5WVoxd25xQ1BpSmhBQ0xiL3BWZWdkN1Y3VnVTY2dPZzVFdnA5RWFHamZwK2ozaEZ5YkROU2VzRGRhQ2ZocThSWGxvR0JFRFFGb0xLb21QYzc0eVl4ckhjd2V4T242S3owZ0NlOGR6MHNOc0hRQ2tRc2VXTXdnSmtoZTZaclUwN1pHc3A1amdYejlJRGxWWXhGME1lZWVpVHJmbXREUitNQkdTaVRvYzVjOHJwV1FsQ09USWE3SWUrT21HL0pQa3ZoTEY5cmtYRHZNKzcvMHkzdEU1eXBrblYvR1hEYUFUTElXa3NTM2xHWld0N282aE9Wbmd0RVVGWjFVWG82WG5NcUJPa2RHZjU0ZGJYSkFwYWFKbTJZVFh5dVVmdHY4S3kzKzJxZlJDbk1iVUliLzB3ZmlFd21qelV1bm03ZkJMSjNUNU5PR25Gd1NVOXBINnk3aDN5WUl2ZFBTN3JiZmpGMXJ1eFZKMllBbEdVZUdtQXdUeG8wSXIzanhVWm85Vlg2dWRuWFI5SGRUVVh0MzdOWHpDWWpwbmF3NGZLRmp5ZkVBeEVwaFFrQkFwNVBXTFVCQkdDVGEzMHZNYWtId1lxOE9OTzBnS2FPUGFVMEEwYkpJRStqT1cwNEN6d2kyQ081M3lWbmJWa1k5dFZyYmtkRkxXM1R4VHBRQjgyMTczRk9KMnppK05QTnpBUTN1VXArM2hBMFVCbU50VkdQVWhZcDdXc1g0emFqMGxXamFLM1NwME1xVTJuNkZNcTR3eTJ3Mm41VVJqVytWWEY2ZXBiNkFHR2Rhd2k0WWtpRU5iclVCVE9sTldIZkZpNjRrV0VWeWYrdGZ4RmY0ZmZSVnFGU2h4NEhJS1k1d0x4aVhzK2U5MW5QYnYwK1loQmRRd3Q0anE0ZUhFQXZiN0ZVZEU3NmVHUUsvOFZOcTkvME14NktmeFl6NERXUHVPWEQ4amRJTEo1ZEZ0S3FKNWlhMmNHcFNxd0o2RUhTbVlXa1RNenFDM0c2TkpJdVpoQ0ZXQ0txeHI0cm9BRENiZlFHR1hsMVAvZGVNc1lFUE9xUnBCZWx5U1VOU3pjUnlCNUpnaVJkRGFJMGowV2lMRmg1WXRreEFxZ3RoYTErMGlsVEc4VGFNbXE1ajVBWGc2b0hmUUxrUXdQZHZRaXZ3bHNReXhaUzZmdmUwc0RkU01NM3kyT0E2aWxBNzlwNE55NkVXL1NUNjQwY0tFZ0ZlK1lHeUlWOHZzSVNhK0RPU0Y2d2F1SUpieGJpVURjcVdtL2UxanBGczYwWGNTS2VhcThTZGlITVZUY2FETEpuZndaa1V6U0xRNWtvcEJoUmNJaDhreG9MajlINzJPNjM0azF4UzgzTlF6YVRFQVQxZmZlRFB5NnJtZklHSjJyRnVLc3RVdFdZUmM3K3JaeTFoRGhZSkpSNmVoekRaZUlkM1pDYkFmSzg2WXZtdXBGS0RiUjBXU3Y4YlhYZVNubEpZejlQOFNneHR3dWh6bm5FQjdobzZ4RWxpU3NHaVY4WkorYXM3RERNZnFtdlpGcTcvd3JWb1NoUkx6eFRBS3Qwd3htQlJkdkJPd0RFZlFRWjhZN1pPeHlxbGxLTmUyUzRPbVVtRWk1a005c0xENUtqT1E1TGdoWm9hZjRjcytWc0lQR3FtdmNEZnBsQTJHWmhQUkkrT24vS0hyZ1VPemlMaWdIbTZibkJja0NqeFJJTjFuVTV3cHlaRlhwOTFZNUZ0dks5WjRmb05jTm1WM3lLY1FkaXlUMWoyUVliUTk4dHpIU0JiQ25QS1IxSDFlQ3RSOVdUcFlwc0FHeGo0di9YN1hJenBuWGYxUWxNbGhMcEdYeXZLekxEa1JaZkhya3hqc3ljMmN4S2xmbUxsUVBLdmNKZmNEakZoQ3hSV1dRejlsTVdkVTBTMjdlL0hXTkY1elZuWnVURzRtMjdJR0VnQUFBaStUdWF6dUNjUkZJSDVsWVkwelk4VjF1Ui9xNGxYRm1ENnpZdWVKbFlDWmtNSTBGcnM4OGZhdnFnY3dvRTRRa1h5VXZHaXBFd2o1VHoxY09ETStpd2src1lLUjBsSVBPQkNDVU9WM2V2Q2Y5TnZoRzlROVF6aFBLQ2dBaGMyRXhWZUxzaWRKeWdka1RpQVhFMDhwQTFuZXdrSkcrVVdwY1dYNjNuVVVueWFRZ0NUcFdxM3RyUDcxSEl5dlNvclRKUjhncm1XdU42YjVlbzUvMllNNklLMFU4cnpNdU81TTAybGUwbjdXWW9rM1dFNE9kcHRMekpaNjRZNUdFZGhjUWE5MmRUcUN1SVgxcnNoM25FdTZtK3R3ZEpEWXBadWxKc2dnZTNrMWkwL1pYNzdnWjVCejVVMmJjd001N1dnZFZ6dHpTTGdBUjU1Mnh5U2x4Zk1wK2NUTUF3Y0FMZXhBSEM4YzNRQjRZQUFBQT09JztcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNTdXBwb3J0UmV3YXJkVmlkZW8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBGQkluc3RhbnQuZ2V0U3VwcG9ydGVkQVBJcygpLmluZGV4T2YoJ2dldFJld2FyZGVkVmlkZW9Bc3luYycpICE9PSAtMVxuICAgIH1cblxuICAgIHN0YXRpYyBpc1N1cHBvcnRCYW5uZXJBZHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBGQkluc3RhbnQuZ2V0U3VwcG9ydGVkQVBJcygpLmluZGV4T2YoJ2xvYWRCYW5uZXJBZEFzeW5jJykgIT09IC0xXG4gICAgfVxuXG4gICAgc3RhdGljIGlzU3VwcG9ydEludGVyc3RpdGlhbCgpIHtcbiAgICAgICAgcmV0dXJuIEZCSW5zdGFudC5nZXRTdXBwb3J0ZWRBUElzKCkuaW5kZXhPZignZ2V0SW50ZXJzdGl0aWFsQWRBc3luYycpICE9PSAtMVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------
