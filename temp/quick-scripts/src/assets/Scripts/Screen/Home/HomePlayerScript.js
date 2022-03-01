"use strict";
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