
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Screen/Home/HomePlayerItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NjcmVlbi9Ib21lL0hvbWVQbGF5ZXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQU1JLDZCQUFZLFFBQWdCLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxNQUFlO1FBTDNFLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxrREFBbUI7QUFlaEM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFrREM7UUEvQ1csWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLHVCQUFpQixHQUFjLElBQUksQ0FBQzs7SUF5Q2hELENBQUM7SUFqQ0csK0JBQU0sR0FBTjtRQUNJLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLElBQXlCLEVBQUUsS0FBYSxFQUFFLGNBQW1CO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxJQUEwQjtRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1lBQy9DLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7Z0JBQzlELElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNyRDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBR0QsMENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7SUFFQSxDQUFDO0lBOUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDYztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUN3QjtJQVQzQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBa0RsQztJQUFELHFCQUFDO0NBbERELEFBa0RDLENBbEQyQyxFQUFFLENBQUMsU0FBUyxHQWtEdkQ7a0JBbERvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBsYXllciA9IEZCSW5zdGFudC5wbGF5ZXI7XG5pbXBvcnQgYXNzZXRNYW5hZ2VyID0gY2MuYXNzZXRNYW5hZ2VyO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGNsYXNzIFBsYXllckNvbm5lY3RlZERhdGEge1xuICAgIHBsYXllcklEOiBudW1iZXIgPSAwO1xuICAgIG5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgYXZhdGFyOiBzdHJpbmcgPSBcIlwiO1xuICAgIGlzU2VsZjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocGxheWVySUQ6IG51bWJlciwgYXZhdGFyOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaXNTZWxmOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucGxheWVySUQgPSBwbGF5ZXJJRDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSBhdmF0YXI7XG4gICAgICAgIHRoaXMuaXNTZWxmID0gaXNTZWxmO1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQbGF5ZXJJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJpdmF0ZSBhdmF0YXI6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBsYmxOYW1lOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgYnRuUGxheVdpdGhGcmllbmQ6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBjdXJyZW50Q2FsbGJhY2s6IGFueTtcbiAgICBjdXJyZW50UGxheWVyOiBQbGF5ZXJDb25uZWN0ZWREYXRhO1xuXG5cbiAgICBwbGF5ZXJJbmRleDogbnVtYmVyO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyB0aGlzLnBhdGhOb2RlLnpJbmRleCA9IC0gMTtcbiAgICB9XG5cbiAgICBpbml0KGRhdGE6IFBsYXllckNvbm5lY3RlZERhdGEsIGluZGV4OiBudW1iZXIsIGludml0ZUZyaWVuZENiOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBkYXRhO1xuXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShkYXRhKTtcbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtKGRhdGE6ICBQbGF5ZXJDb25uZWN0ZWREYXRhKTogdm9pZCB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5sYmxOYW1lLnN0cmluZyA9IGRhdGEubmFtZTtcbiAgICAgICAgaWYgKGRhdGEuYXZhdGFyICE9IFwiXCIgJiYgZGF0YS5hdmF0YXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7dXJsOiBkYXRhLmF2YXRhciwgdHlwZTogJ3BuZyd9LCBmdW5jdGlvbiAoZXJyLCBpbWcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZCBpbWFnZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hdmF0YXIuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoaW1nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaGFuZGxlQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENhbGxiYWNrKHRoaXMuY3VycmVudFBsYXllci5wbGF5ZXJJRCwgdGhpcy5jdXJyZW50UGxheWVyLmlzU2VsZik7XG4gICAgfVxuXG4gICAgb25CdXR0b25QbGF5Q2xpY2soKTogdm9pZCB7XG5cbiAgICB9XG59XG4iXX0=