
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