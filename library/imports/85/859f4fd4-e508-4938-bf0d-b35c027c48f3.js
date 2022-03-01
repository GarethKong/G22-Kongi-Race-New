"use strict";
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