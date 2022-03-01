"use strict";
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