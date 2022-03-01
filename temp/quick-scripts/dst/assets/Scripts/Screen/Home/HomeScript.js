
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