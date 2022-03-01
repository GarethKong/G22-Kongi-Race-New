"use strict";
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