"use strict";
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