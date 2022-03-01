"use strict";
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