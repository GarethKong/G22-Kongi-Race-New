
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