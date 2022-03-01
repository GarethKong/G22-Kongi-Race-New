
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