"use strict";
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