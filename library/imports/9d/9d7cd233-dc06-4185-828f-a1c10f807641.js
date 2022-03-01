"use strict";
cc._RF.push(module, '9d7cdIz3AZBhYKPocEPgHZB', 'HomePlayerItem');
// Scripts/Screen/Home/HomePlayerItem.ts

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
exports.PlayerConnectedData = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerConnectedData = /** @class */ (function () {
    function PlayerConnectedData(playerID, avatar, name, isSelf) {
        this.playerID = 0;
        this.name = "";
        this.avatar = "";
        this.isSelf = false;
        this.playerID = playerID;
        this.name = name;
        this.avatar = avatar;
        this.isSelf = isSelf;
    }
    return PlayerConnectedData;
}());
exports.PlayerConnectedData = PlayerConnectedData;
var HomePlayerItem = /** @class */ (function (_super) {
    __extends(HomePlayerItem, _super);
    function HomePlayerItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatar = null;
        _this.lblName = null;
        _this.btnPlayWithFriend = null;
        return _this;
    }
    HomePlayerItem.prototype.onLoad = function () {
        // this.pathNode.zIndex = - 1;
    };
    HomePlayerItem.prototype.init = function (data, index, inviteFriendCb) {
        this.playerIndex = index;
        this.currentPlayer = data;
        this.updateItem(data);
    };
    HomePlayerItem.prototype.updateItem = function (data) {
        var that = this;
        this.lblName.string = data.name;
        if (data.avatar != "" && data.avatar != undefined) {
            cc.loader.load({ url: data.avatar, type: 'png' }, function (err, img) {
                if (err) {
                    console.log("Load image failed");
                }
                else {
                    that.avatar.spriteFrame = new cc.SpriteFrame(img);
                }
            });
        }
    };
    HomePlayerItem.prototype.handleButtonClick = function () {
        this.currentCallback(this.currentPlayer.playerID, this.currentPlayer.isSelf);
    };
    HomePlayerItem.prototype.onButtonPlayClick = function () {
    };
    __decorate([
        property(cc.Sprite)
    ], HomePlayerItem.prototype, "avatar", void 0);
    __decorate([
        property(cc.Label)
    ], HomePlayerItem.prototype, "lblName", void 0);
    __decorate([
        property(cc.Button)
    ], HomePlayerItem.prototype, "btnPlayWithFriend", void 0);
    HomePlayerItem = __decorate([
        ccclass
    ], HomePlayerItem);
    return HomePlayerItem;
}(cc.Component));
exports.default = HomePlayerItem;

cc._RF.pop();