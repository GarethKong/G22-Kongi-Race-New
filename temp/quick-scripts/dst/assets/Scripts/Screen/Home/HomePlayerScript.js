
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Screen/Home/HomePlayerScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83bbd29eaFN5IyvKggA16m9', 'HomePlayerScript');
// Scripts/Screen/Home/HomePlayerScript.ts

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
var HomePlayerItem_1 = require("./HomePlayerItem");
var FBGlobal_1 = require("../../facebook/FBGlobal");
var SoundManager_1 = require("../../Ultilities/SoundManager");
var ScreenManager_1 = require("../../Common/ScreenManager");
var HomePlayerScript = /** @class */ (function (_super) {
    __extends(HomePlayerScript, _super);
    function HomePlayerScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spacing = 0; // space between each item
        _this.spawnCount = 0; // how many items we actually spawn
        _this.bufferZone = 0; // when item is away from bufferZone, we relocate it
        _this.svLevel = null;
        _this.content = null;
        _this.itemPrefab = null;
        _this.items = null;
        _this.updateTimer = 0;
        _this.updateInterval = 0;
        _this.lastContentPosX = 0;
        _this.listRankSize = 0;
        _this.isDraw = false;
        _this.itemTemplate = null;
        return _this;
    }
    HomePlayerScript_1 = HomePlayerScript;
    Object.defineProperty(HomePlayerScript, "instance", {
        get: function () {
            return this._ins || new HomePlayerScript_1;
        },
        enumerable: false,
        configurable: true
    });
    HomePlayerScript.prototype.onLoad = function () {
        HomePlayerScript_1._ins = this;
        this.items = []; // array to store spawned items
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosX = 0; // use this variable to detect if we are scrolling up or down
        this.itemTemplate = cc.instantiate(this.itemPrefab);
    };
    HomePlayerScript.prototype.start = function () {
        this.loadData();
    };
    HomePlayerScript.prototype.loadData = function () {
        var self = this;
        var listData = [];
        for (var i = 0; i < 30; i++) {
            listData.push(i);
        }
        self.listRankSize = listData.length;
        self.updateRankingUIView(listData);
    };
    HomePlayerScript.prototype.updateRankingUIView = function (entries) {
        var self = this;
        this.content.width = entries.length * (this.itemTemplate.width + this.spacing) + this.spacing; // get total content height
        for (var i = 0; i < this.spawnCount; ++i) { // spawn items, we only need to do this once
            var item = cc.instantiate(this.itemPrefab);
            this.content.addChild(item);
            item.setPosition(item.width * (0.5 + i) + this.spacing * (i + 1), 0);
            //BINH TODO item.getComponent(HomePlayerItem).init(i + 1, self.inviteFriend.bind(this));
            this.items.push(item);
            console.log('Size list la' + this.items.length + 'height' + this.content.height);
        }
        console.log("already comehere3");
        this.scrollToFixedPosition();
    };
    HomePlayerScript.prototype.show = function () {
        this.isDraw = true;
    };
    HomePlayerScript.prototype.hide = function () {
        this.isDraw = false;
        this.node.active = false;
    };
    HomePlayerScript.prototype.update = function (dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval)
            return; // we don't need to do the math every frame
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isRight = this.content.x > this.lastContentPosX; // scrolling direction
        var offset = (this.itemTemplate.width + this.spacing) * items.length;
        for (var i = 0; i < items.length; ++i) {
            var viewPos = this.getPositionInView(items[i]);
            if (isRight) {
                //console.log('BINH: right');
                // if away from buffer zone and not reaching left of content
                if (viewPos.x > buffer && items[i].x - offset > 0) {
                    items[i].x = items[i].x - offset;
                    var item = items[i].getComponent(HomePlayerItem_1.default);
                    var itemId = item.playerIndex - items.length; // update item id
                    //BINH TODO item.updateItem(itemId);
                    console.log('BINH: update item left', this.lastContentPosX);
                }
            }
            else {
                // if away from buffer zone and not reaching right of content
                //console.log('BINH: left');
                if (viewPos.x < -buffer && items[i].x + offset < this.content.width) {
                    items[i].x = items[i].x + offset;
                    var item = items[i].getComponent(HomePlayerItem_1.default);
                    var itemId = item.playerIndex + items.length;
                    //BINH TODO item.updateItem(itemId);
                    console.log('BINH: update item right', this.lastContentPosX);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosX = this.content.x;
    };
    HomePlayerScript.prototype.inviteFriend = function (playerID, isSelf) {
        var self = this;
        if (isSelf == true) {
            var AVSuccessCb = function () {
                self.playTheGame();
            };
            var AVFailedCb = function () {
                self.playTheGame();
            };
            // Here `this` is referring to the component
            FBGlobal_1.default.instance.shareGame(AVSuccessCb);
        }
        else {
            var AVSuccessCb = function () {
                self.playTheGame();
            };
            var AVFailedCb = function () {
                self.playTheGame();
            };
            //FBGlobal.instance.inviteAsync(AVSuccessCb, AVFailedCb);
            FBGlobal_1.default.instance.sendInvite(AVSuccessCb, AVFailedCb, playerID + "");
            console.log('Goi r nhe hehe' + playerID + "is self" + isSelf);
        }
    };
    HomePlayerScript.prototype.playTheGame = function () {
        FBGlobal_1.default.instance.haptic();
        SoundManager_1.default.Instance.PlayButtonSound();
        ScreenManager_1.default.instance.onShowScreenByName(ScreenManager_1.ScreenConfig.Game);
        this.node.active = false;
    };
    HomePlayerScript.prototype.getPositionInView = function (item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.svLevel.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };
    HomePlayerScript.prototype.scrollToFixedPosition = function () {
        this.svLevel.scrollToOffset(cc.v2(0, 0), 2, false);
    };
    var HomePlayerScript_1;
    __decorate([
        property({ displayName: 'spacing' })
    ], HomePlayerScript.prototype, "spacing", void 0);
    __decorate([
        property({ displayName: 'spawnCount' })
    ], HomePlayerScript.prototype, "spawnCount", void 0);
    __decorate([
        property({ displayName: 'bufferZone' })
    ], HomePlayerScript.prototype, "bufferZone", void 0);
    __decorate([
        property(cc.ScrollView)
    ], HomePlayerScript.prototype, "svLevel", void 0);
    __decorate([
        property(cc.Node)
    ], HomePlayerScript.prototype, "content", void 0);
    __decorate([
        property(cc.Prefab)
    ], HomePlayerScript.prototype, "itemPrefab", void 0);
    HomePlayerScript = HomePlayerScript_1 = __decorate([
        ccclass
    ], HomePlayerScript);
    return HomePlayerScript;
}(cc.Component));
exports.default = HomePlayerScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NjcmVlbi9Ib21lL0hvbWVQbGF5ZXJTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDdkMsSUFBTyxRQUFRLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDekMsbURBQThDO0FBQzlDLG9EQUErQztBQUMvQyw4REFBeUQ7QUFDekQsNERBQXVFO0FBSXZFO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc0tDO1FBbktVLGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFHL0MsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7UUFHM0QsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQyxvREFBb0Q7UUFHNUUsYUFBTyxHQUFrQixJQUFJLENBQUM7UUFHOUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUVwQyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsa0JBQVksR0FBWSxJQUFJLENBQUE7O0lBMEloQyxDQUFDO3lCQXRLb0IsZ0JBQWdCO0lBaUNqQyxzQkFBVyw0QkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLGtCQUFnQixDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBR0QsaUNBQU0sR0FBTjtRQUNJLGtCQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FB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QyxRQUFRLENBQUMsRUFBQyxXQUFXLEVBQUUsWUFBWSxFQUFDLENBQUM7d0RBQ1I7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztxREFDYTtJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQ2dCO0lBbEJuQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXNLcEM7SUFBRCx1QkFBQztDQXRLRCxBQXNLQyxDQXRLNkMsRUFBRSxDQUFDLFNBQVMsR0FzS3pEO2tCQXRLb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNjY2xhc3MgPSBjYy5fZGVjb3JhdG9yLmNjY2xhc3M7XG5pbXBvcnQgcHJvcGVydHkgPSBjYy5fZGVjb3JhdG9yLnByb3BlcnR5O1xuaW1wb3J0IEhvbWVQbGF5ZXJJdGVtIGZyb20gXCIuL0hvbWVQbGF5ZXJJdGVtXCI7XG5pbXBvcnQgRkJHbG9iYWwgZnJvbSBcIi4uLy4uL2ZhY2Vib29rL0ZCR2xvYmFsXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9VbHRpbGl0aWVzL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IFNjcmVlbk1hbmFnZXIsIHtTY3JlZW5Db25maWd9IGZyb20gXCIuLi8uLi9Db21tb24vU2NyZWVuTWFuYWdlclwiO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGxheWVyU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7ZGlzcGxheU5hbWU6ICdzcGFjaW5nJ30pXG4gICAgcHVibGljIHNwYWNpbmc6IG51bWJlciA9IDA7IC8vIHNwYWNlIGJldHdlZW4gZWFjaCBpdGVtXG5cbiAgICBAcHJvcGVydHkoe2Rpc3BsYXlOYW1lOiAnc3Bhd25Db3VudCd9KVxuICAgIHB1YmxpYyBzcGF3bkNvdW50OiBudW1iZXIgPSAwOyAvLyBob3cgbWFueSBpdGVtcyB3ZSBhY3R1YWxseSBzcGF3blxuXG4gICAgQHByb3BlcnR5KHtkaXNwbGF5TmFtZTogJ2J1ZmZlclpvbmUnfSlcbiAgICBwdWJsaWMgYnVmZmVyWm9uZTogbnVtYmVyID0gMDsgLy8gd2hlbiBpdGVtIGlzIGF3YXkgZnJvbSBidWZmZXJab25lLCB3ZSByZWxvY2F0ZSBpdFxuXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgcHVibGljIHN2TGV2ZWw6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwdWJsaWMgaXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIGl0ZW1zOiBjYy5Ob2RlW10gPSBudWxsO1xuICAgIHVwZGF0ZVRpbWVyOiBudW1iZXIgPSAwO1xuICAgIHVwZGF0ZUludGVydmFsOiBudW1iZXIgPSAwO1xuICAgIGxhc3RDb250ZW50UG9zWDogbnVtYmVyID0gMDtcbiAgICBsaXN0UmFua1NpemU6IG51bWJlciA9IDA7XG5cbiAgICBpc0RyYXc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGxcblxuXG4gICAgc3RhdGljIF9pbnM6IEhvbWVQbGF5ZXJTY3JpcHQ7XG5cbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEhvbWVQbGF5ZXJTY3JpcHQge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBIb21lUGxheWVyU2NyaXB0O1xuICAgIH1cblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBIb21lUGxheWVyU2NyaXB0Ll9pbnMgPSB0aGlzO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107IC8vIGFycmF5IHRvIHN0b3JlIHNwYXduZWQgaXRlbXNcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSAwLjI7XG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NYID0gMDsgLy8gdXNlIHRoaXMgdmFyaWFibGUgdG8gZGV0ZWN0IGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAgb3IgZG93blxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cblxuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBsaXN0RGF0YSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3REYXRhLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5saXN0UmFua1NpemUgPSBsaXN0RGF0YS5sZW5ndGg7XG4gICAgICAgIHNlbGYudXBkYXRlUmFua2luZ1VJVmlldyhsaXN0RGF0YSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUmFua2luZ1VJVmlldyhlbnRyaWVzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jb250ZW50LndpZHRoID0gZW50cmllcy5sZW5ndGggKiAodGhpcy5pdGVtVGVtcGxhdGUud2lkdGggKyB0aGlzLnNwYWNpbmcpICsgdGhpcy5zcGFjaW5nOyAvLyBnZXQgdG90YWwgY29udGVudCBoZWlnaHRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwYXduQ291bnQ7ICsraSkgeyAvLyBzcGF3biBpdGVtcywgd2Ugb25seSBuZWVkIHRvIGRvIHRoaXMgb25jZVxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihpdGVtLndpZHRoICogKDAuNSArIGkpICsgdGhpcy5zcGFjaW5nICogKGkgKyAxKSwgMCk7XG4gICAgICAgICAgIC8vQklOSCBUT0RPIGl0ZW0uZ2V0Q29tcG9uZW50KEhvbWVQbGF5ZXJJdGVtKS5pbml0KGkgKyAxLCBzZWxmLmludml0ZUZyaWVuZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaXplIGxpc3QgbGEnICsgdGhpcy5pdGVtcy5sZW5ndGggKyAnaGVpZ2h0JyArIHRoaXMuY29udGVudC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxyZWFkeSBjb21laGVyZTNcIik7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9GaXhlZFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5pc0RyYXcgPSB0cnVlO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuaXNEcmF3ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVGltZXIgPCB0aGlzLnVwZGF0ZUludGVydmFsKSByZXR1cm47IC8vIHdlIGRvbid0IG5lZWQgdG8gZG8gdGhlIG1hdGggZXZlcnkgZnJhbWVcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLmJ1ZmZlclpvbmU7XG4gICAgICAgIGxldCBpc1JpZ2h0ID0gdGhpcy5jb250ZW50LnggPiB0aGlzLmxhc3RDb250ZW50UG9zWDsgLy8gc2Nyb2xsaW5nIGRpcmVjdGlvblxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuaXRlbVRlbXBsYXRlLndpZHRoICsgdGhpcy5zcGFjaW5nKSAqIGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IHZpZXdQb3MgPSB0aGlzLmdldFBvc2l0aW9uSW5WaWV3KGl0ZW1zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnQklOSDogcmlnaHQnKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIGxlZnQgb2YgY29udGVudFxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnggPiBidWZmZXIgJiYgaXRlbXNbaV0ueCAtIG9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0ueCA9IGl0ZW1zW2ldLnggLSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbaV0uZ2V0Q29tcG9uZW50KEhvbWVQbGF5ZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW0ucGxheWVySW5kZXggLSBpdGVtcy5sZW5ndGg7IC8vIHVwZGF0ZSBpdGVtIGlkXG4gICAgICAgICAgICAgICAgICAgIC8vQklOSCBUT0RPIGl0ZW0udXBkYXRlSXRlbShpdGVtSWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQklOSDogdXBkYXRlIGl0ZW0gbGVmdCcsIHRoaXMubGFzdENvbnRlbnRQb3NYKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIHJpZ2h0IG9mIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdCSU5IOiBsZWZ0Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy54IDwgLWJ1ZmZlciAmJiBpdGVtc1tpXS54ICsgb2Zmc2V0IDwgdGhpcy5jb250ZW50LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnggPSBpdGVtc1tpXS54ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zW2ldLmdldENvbXBvbmVudChIb21lUGxheWVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSWQgPSBpdGVtLnBsYXllckluZGV4ICsgaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAvL0JJTkggVE9ETyBpdGVtLnVwZGF0ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JJTkg6IHVwZGF0ZSBpdGVtIHJpZ2h0JywgdGhpcy5sYXN0Q29udGVudFBvc1gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgbGFzdENvbnRlbnRQb3NZXG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NYID0gdGhpcy5jb250ZW50Lng7XG4gICAgfVxuXG5cbiAgICBpbnZpdGVGcmllbmQocGxheWVySUQ6IG51bWJlciwgaXNTZWxmOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGlzU2VsZiA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgQVZTdWNjZXNzQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5VGhlR2FtZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBBVkZhaWxlZENiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheVRoZUdhbWUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBIZXJlIGB0aGlzYCBpcyByZWZlcnJpbmcgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2Uuc2hhcmVHYW1lKEFWU3VjY2Vzc0NiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBBVlN1Y2Nlc3NDYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXlUaGVHYW1lKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IEFWRmFpbGVkQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5VGhlR2FtZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vRkJHbG9iYWwuaW5zdGFuY2UuaW52aXRlQXN5bmMoQVZTdWNjZXNzQ2IsIEFWRmFpbGVkQ2IpO1xuICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2Uuc2VuZEludml0ZShBVlN1Y2Nlc3NDYiwgQVZGYWlsZWRDYiwgcGxheWVySUQgKyBcIlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb2kgciBuaGUgaGVoZScgKyBwbGF5ZXJJRCArIFwiaXMgc2VsZlwiICsgaXNTZWxmKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlUaGVHYW1lKCk6IHZvaWQge1xuICAgICAgICBGQkdsb2JhbC5pbnN0YW5jZS5oYXB0aWMoKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLkluc3RhbmNlLlBsYXlCdXR0b25Tb3VuZCgpXG4gICAgICAgIFNjcmVlbk1hbmFnZXIuaW5zdGFuY2Uub25TaG93U2NyZWVuQnlOYW1lKFNjcmVlbkNvbmZpZy5HYW1lKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgZ2V0UG9zaXRpb25JblZpZXcoaXRlbSkgeyAvLyBnZXQgaXRlbSBwb3NpdGlvbiBpbiBzY3JvbGx2aWV3J3Mgbm9kZSBzcGFjZVxuICAgICAgICBsZXQgd29ybGRQb3MgPSBpdGVtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaXRlbS5wb3NpdGlvbik7XG4gICAgICAgIGxldCB2aWV3UG9zID0gdGhpcy5zdkxldmVsLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICByZXR1cm4gdmlld1BvcztcbiAgICB9XG5cbiAgICBzY3JvbGxUb0ZpeGVkUG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMuc3ZMZXZlbC5zY3JvbGxUb09mZnNldChjYy52MigwLCAwKSwgMiwgZmFsc2UpO1xuICAgIH1cbn1cbiJdfQ==