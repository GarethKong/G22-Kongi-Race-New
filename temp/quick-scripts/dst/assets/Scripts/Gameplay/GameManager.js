
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5573a755vhKRrGuU/i6nGPE', 'GameManager');
// Scripts/Gameplay/GameManager.ts

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
var EndGamePopup_1 = require("../Popup/EndGamePopup");
var NumberUltilities_1 = require("../Ultilities/NumberUltilities");
var SimplePool_1 = require("../Ultilities/SimplePool");
var BlockScript_1 = require("./BlockScript");
var PlayerScript_1 = require("./PlayerScript");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.KongiNode = null;
        _this.KongiRadius = 0;
        _this.BlockPrefab = null;
        _this.MaxBlockQty = 10;
        _this.MaxVelocity = 0;
        _this.MaxFlyingTime = 1.2;
        _this.Gravity = 0;
        _this.LandingVelocity = 500;
        _this.CanvasWidth = 1080;
        _this.endGamePopup = null;
        //#region GAMEPLAY
        _this.ScoreLabel = null;
        _this.TapNode = null;
        _this.CurrentScore = 0;
        _this.IsStarted = false;
        _this.IsPauseGame = false;
        //#endregion GAMEPLAY
        //#region SPAWN BLOCKS
        _this.BlockContainer = null;
        _this.StepAngle = 2.5;
        _this.MaxAngleMultiplier = 10;
        _this.CurrentSpawnedBlock = null;
        _this.CurrentBlockIndex = 0; //index của block được thêm vào danh sách, block càng về sau thì phải càng gần với background color
        _this.BlockList = [];
        //#endregion SPAWN BLOCKS
        //#region MÀU TỪNG ĐOẠN SCORE
        _this.BlockColor = null;
        _this.levelColorList = [];
        _this.backgroundSpriteFrameList = [];
        _this.ColorList = [];
        //#endregion MÀU TỪNG ĐOẠN SCORE
        //#region SCALE TỪNG BLOCK THEO INDEX
        _this.ScaleList = [];
        _this.DistanceToFirstBlock = 19; // khoảng cách từ mắt tới block đầu tiên, với quy ước các block sẽ cách nhau 1 đơn vị
        return _this;
        //#endregion SCALE TỪNG BLOCK THEO INDEX
    }
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        GameManager_1.Instance = this;
        this.GenerateColorList(this.MaxBlockQty);
        this.GenerateScaleList();
        // THỜI GIAN GIỮA 2 LẦN JUMP LÀ 1.2S (NẾU KO TAP)
        // => GRAVITY * 0.6 = MaxVelocity
        this.Gravity = this.MaxVelocity * 2 / this.MaxFlyingTime;
        this.StartNewGame();
        this.TapNode.on(cc.Node.EventType.TOUCH_START, this.Landing, this);
    };
    /**
     * Đáp xuống đất
     */
    GameManager.prototype.Landing = function (event) {
        this.IsPauseGame = false;
        this.IsStarted = true;
        this.KongiNode.Landing();
    };
    /**
     * Rút cọc, GameOver
     */
    GameManager.prototype.ShowGameOver = function () {
        var _this = this;
        this.ScoreLabel.string = "";
        var _loop_1 = function (i) {
            this_1.scheduleOnce(function () {
                _this.BlockList[i].OnGameOver();
            }, i * 0.05);
        };
        var this_1 = this;
        for (var i = 0; i < this.BlockList.length; i++) {
            _loop_1(i);
        }
        this.scheduleOnce(function () { _this.endGamePopup.ShowEndGamePopup(); }, this.BlockList.length * 0.05 + 1);
    };
    /**
     * Chuyển sang block tiếp theo (block trước được đáp xuống an toàn)
     */
    GameManager.prototype.SetNextBlock = function () {
        for (var i = 0; i < this.BlockList.length; i++) {
            this.BlockList[i].ChangeStateToNextIndex(this.MaxFlyingTime / 3);
        }
        this.CurrentBlockIndex--;
        this.CurrentScore++;
        this.ScoreLabel.string = this.CurrentScore.toString();
        this.BlockList.splice(0, 1);
        this.SpawnBlock();
        this.BlockList[0].EnableForCollision(true);
    };
    GameManager.prototype.PushUpKongi = function (pushUpAngle) {
        this.KongiNode.Jump(pushUpAngle, this.MaxVelocity, this.Gravity);
    };
    GameManager.prototype.StartNewGame = function () {
        this.BlockList = [];
        this.KongiNode.ResetNewGame();
        this.IsPauseGame = true;
        this.IsStarted = false;
        this.CurrentScore = 0;
        this.CurrentBlockIndex = 0;
        this.SpawnFirstBlock();
        for (var i = 0; i < 9; i++) {
            this.SpawnBlock();
        }
        this.ScoreLabel.string = this.CurrentScore.toString();
    };
    GameManager.prototype.SpawnFirstBlock = function () {
        this.CurrentSpawnedBlock = SimplePool_1.default.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript_1.default);
        this.CurrentSpawnedBlock.SetBlockInfo(1080, 0, BlockScript_1.BlockMoveType.Static, cc.v3(0, -480), this.CurrentBlockIndex, 0); // 480 tùy chỉnh sau
        this.CurrentSpawnedBlock.EnableForCollision(false);
        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;
        this.CurrentBlockIndex++;
        this.CurrentBlockAngle = NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * NumberUltilities_1.default.GetRandomSign() * this.StepAngle;
        this.CurrentBlockWidth = 800;
        this.CurrentBlockPosition = cc.v3(0, -360); // 360 tùy chỉnh sau
        this.CurrentBlockYOffset = -120;
        this.BlockList.push(this.CurrentSpawnedBlock);
    };
    /**
     * Spawn các block (ko phải block đầu tiên)
     */
    GameManager.prototype.SpawnBlock = function () {
        this.CurrentSpawnedBlock = SimplePool_1.default.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript_1.default);
        this.CurrentSpawnedBlock.SetBlockInfo(this.CurrentBlockWidth, this.CurrentBlockAngle, BlockScript_1.BlockMoveType.Static, this.CurrentBlockPosition, this.CurrentBlockIndex, this.CurrentBlockYOffset);
        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;
        this.CurrentSpawnedBlock.node.setSiblingIndex(0);
        this.CalculateNextBlockState();
        this.CurrentBlockIndex++;
        this.BlockList.push(this.CurrentSpawnedBlock);
    };
    GameManager.prototype.CalculateNextBlockState = function () {
        var playerVelocityX = -this.MaxVelocity * Math.sin(2 * this.CurrentBlockAngle * Math.PI / 180);
        var maxFlyingRange = playerVelocityX * this.MaxFlyingTime;
        var deltaBetweenTwoBlock = maxFlyingRange * NumberUltilities_1.default.GetRandomFloatNumber(0.3, 0.7);
        if (this.CurrentBlockIndex < 5) {
            this.CurrentBlockPosition = cc.v3(cc.misc.clampf(this.CurrentBlockPosition.x + deltaBetweenTwoBlock, -324, 324), this.CurrentBlockPosition.y + 120);
            this.CurrentBlockYOffset = -120;
        }
        else {
            this.CurrentBlockPosition = cc.v3(cc.misc.clampf(this.CurrentBlockPosition.x + deltaBetweenTwoBlock, -324, 324), this.CurrentBlockPosition.y + 30);
            this.CurrentBlockYOffset = -30;
        }
        this.CurrentBlockWidth = cc.misc.clampf(Math.abs(maxFlyingRange) * NumberUltilities_1.default.GetRandomFloatNumber(0.3, 0.7), 288, 540);
        if (this.CurrentBlockAngle > 0) {
            if (this.CurrentBlockPosition.x + playerVelocityX * this.MaxFlyingTime < -this.CanvasWidth / 2) {
                this.CurrentBlockAngle = -NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
            else {
                this.CurrentBlockAngle = NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
        }
        else {
            if (this.CurrentBlockPosition.x + playerVelocityX * this.MaxFlyingTime > this.CanvasWidth / 2) {
                this.CurrentBlockAngle = NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
            else {
                this.CurrentBlockAngle = -NumberUltilities_1.default.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
        }
    };
    GameManager.prototype.GenerateColorList = function (numberOfColor) {
        for (var i = 0; i < numberOfColor; i++) {
            this.ColorList.push(NumberUltilities_1.default.GetLerpColor(this.BlockColor, this.levelColorList[0], 1 - Math.pow(2 / 3, i)));
        }
    };
    GameManager.prototype.GenerateScaleList = function () {
        for (var i = 0; i < this.MaxBlockQty; i++) {
            this.ScaleList.push(this.DistanceToFirstBlock / (this.DistanceToFirstBlock + i));
        }
    };
    var GameManager_1;
    __decorate([
        property(PlayerScript_1.default)
    ], GameManager.prototype, "KongiNode", void 0);
    __decorate([
        property
    ], GameManager.prototype, "KongiRadius", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "BlockPrefab", void 0);
    __decorate([
        property
    ], GameManager.prototype, "MaxBlockQty", void 0);
    __decorate([
        property
    ], GameManager.prototype, "MaxVelocity", void 0);
    __decorate([
        property
    ], GameManager.prototype, "MaxFlyingTime", void 0);
    __decorate([
        property
    ], GameManager.prototype, "LandingVelocity", void 0);
    __decorate([
        property
    ], GameManager.prototype, "CanvasWidth", void 0);
    __decorate([
        property(EndGamePopup_1.default)
    ], GameManager.prototype, "endGamePopup", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "ScoreLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "TapNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "BlockContainer", void 0);
    __decorate([
        property(cc.Color)
    ], GameManager.prototype, "BlockColor", void 0);
    __decorate([
        property([cc.Color])
    ], GameManager.prototype, "levelColorList", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GameManager.prototype, "backgroundSpriteFrameList", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVwbGF5L0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFpRDtBQUNqRCxtRUFBOEQ7QUFDOUQsdURBQWtEO0FBQ2xELDZDQUF5RDtBQUN6RCwrQ0FBMEM7QUFFcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF5UEM7UUFyUFUsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHdkIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFDNUIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVyQixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUU3QixpQkFBVyxHQUFXLElBQUksQ0FBQztRQTZCM0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBNkMxQyxrQkFBa0I7UUFFVixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFrQnBDLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFFZCxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVcsR0FBRyxDQUFBO1FBQ3ZCLHdCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUVo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Q0FBQyxzQkFBWSxDQUFDO2tEQUNlO0lBRXRDO1FBREMsUUFBUTtvREFDc0I7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDa0I7SUFFdEM7UUFEQyxRQUFRO29EQUN3QjtJQUVqQztRQURDLFFBQVE7b0RBQ3VCO0lBRWhDO1FBREMsUUFBUTtzREFDMkI7SUFHcEM7UUFEQyxRQUFRO3dEQUM0QjtJQUVyQztRQURDLFFBQVE7b0RBQzBCO0lBNkJuQztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO3FEQUNtQjtJQStDMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDaUI7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYztJQXdCaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDcUI7SUFpR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ2lCO0lBRXBDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3VEQUNtQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztrRUFDOEI7SUEvTnhDLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F5UC9CO0lBQUQsa0JBQUM7Q0F6UEQsQUF5UEMsQ0F6UHdDLEVBQUUsQ0FBQyxTQUFTLEdBeVBwRDtrQkF6UG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEVuZEdhbWVQb3B1cCBmcm9tIFwiLi4vUG9wdXAvRW5kR2FtZVBvcHVwXCI7XG5pbXBvcnQgTnVtYmVyVWx0aWxpdGllcyBmcm9tIFwiLi4vVWx0aWxpdGllcy9OdW1iZXJVbHRpbGl0aWVzXCI7XG5pbXBvcnQgU2ltcGxlUG9vbCBmcm9tIFwiLi4vVWx0aWxpdGllcy9TaW1wbGVQb29sXCI7XG5pbXBvcnQgQmxvY2tTY3JpcHQsIHtCbG9ja01vdmVUeXBlfSBmcm9tIFwiLi9CbG9ja1NjcmlwdFwiO1xuaW1wb3J0IFBsYXllclNjcmlwdCBmcm9tIFwiLi9QbGF5ZXJTY3JpcHRcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudFxue1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEdhbWVNYW5hZ2VyO1xuICAgIEBwcm9wZXJ0eShQbGF5ZXJTY3JpcHQpXG4gICAgcHVibGljIEtvbmdpTm9kZTogUGxheWVyU2NyaXB0ID0gbnVsbDtcbiAgICBAcHJvcGVydHlcbiAgICBwdWJsaWMgS29uZ2lSYWRpdXM6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgQmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBNYXhCbG9ja1F0eTogbnVtYmVyID0gMTA7XG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBNYXhWZWxvY2l0eTogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIE1heEZseWluZ1RpbWU6IG51bWJlciA9IDEuMjtcbiAgICBwcml2YXRlIEdyYXZpdHk6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIExhbmRpbmdWZWxvY2l0eTogbnVtYmVyID0gNTAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgQ2FudmFzV2lkdGg6IG51bWJlciA9IDEwODA7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5HZW5lcmF0ZUNvbG9yTGlzdCh0aGlzLk1heEJsb2NrUXR5KTtcbiAgICAgICAgdGhpcy5HZW5lcmF0ZVNjYWxlTGlzdCgpO1xuICAgICAgICAvLyBUSOG7nEkgR0lBTiBHSeG7rkEgMiBM4bqmTiBKVU1QIEzDgCAxLjJTIChO4bq+VSBLTyBUQVApXG4gICAgICAgIC8vID0+IEdSQVZJVFkgKiAwLjYgPSBNYXhWZWxvY2l0eVxuICAgICAgICB0aGlzLkdyYXZpdHkgPSB0aGlzLk1heFZlbG9jaXR5ICogMiAvIHRoaXMuTWF4Rmx5aW5nVGltZTtcbiAgICAgICAgdGhpcy5TdGFydE5ld0dhbWUoKTtcbiAgICAgICAgdGhpcy5UYXBOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkxhbmRpbmcsIHRoaXMpO1xuICAgIH1cblxuXG5cblxuICAgIC8qKlxuICAgICAqIMSQw6FwIHh14buRbmcgxJHhuqV0XG4gICAgICovXG4gICAgcHJpdmF0ZSBMYW5kaW5nKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5Jc1BhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLklzU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuS29uZ2lOb2RlLkxhbmRpbmcoKTtcbiAgICB9XG5cblxuICAgIEBwcm9wZXJ0eShFbmRHYW1lUG9wdXApXG4gICAgcHJpdmF0ZSBlbmRHYW1lUG9wdXA6IEVuZEdhbWVQb3B1cCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogUsO6dCBj4buNYywgR2FtZU92ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgU2hvd0dhbWVPdmVyKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuU2NvcmVMYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQmxvY2tMaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuQmxvY2tMaXN0W2ldLk9uR2FtZU92ZXIoKTtcbiAgICAgICAgICAgIH0sIGkgKiAwLjA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLmVuZEdhbWVQb3B1cC5TaG93RW5kR2FtZVBvcHVwKCk7fSwgdGhpcy5CbG9ja0xpc3QubGVuZ3RoICogMC4wNSArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENodXnhu4NuIHNhbmcgYmxvY2sgdGnhur9wIHRoZW8gKGJsb2NrIHRyxrDhu5tjIMSRxrDhu6NjIMSRw6FwIHh14buRbmcgYW4gdG/DoG4pXG4gICAgICovXG4gICAgcHVibGljIFNldE5leHRCbG9jaygpOiB2b2lkXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQmxvY2tMaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkJsb2NrTGlzdFtpXS5DaGFuZ2VTdGF0ZVRvTmV4dEluZGV4KHRoaXMuTWF4Rmx5aW5nVGltZSAvIDMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrSW5kZXgtLTtcbiAgICAgICAgdGhpcy5DdXJyZW50U2NvcmUrKztcbiAgICAgICAgdGhpcy5TY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuQ3VycmVudFNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuQmxvY2tMaXN0LnNwbGljZSgwLCAxKTtcbiAgICAgICAgdGhpcy5TcGF3bkJsb2NrKCk7XG4gICAgICAgIHRoaXMuQmxvY2tMaXN0WzBdLkVuYWJsZUZvckNvbGxpc2lvbih0cnVlKTtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIFB1c2hVcEtvbmdpKHB1c2hVcEFuZ2xlOiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLktvbmdpTm9kZS5KdW1wKHB1c2hVcEFuZ2xlLCB0aGlzLk1heFZlbG9jaXR5LCB0aGlzLkdyYXZpdHkpO1xuICAgIH1cblxuXG5cblxuICAgIC8vI3JlZ2lvbiBHQU1FUExBWVxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIFNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIFRhcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBDdXJyZW50U2NvcmU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIElzU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBJc1BhdXNlR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBTdGFydE5ld0dhbWUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5CbG9ja0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5Lb25naU5vZGUuUmVzZXROZXdHYW1lKCk7XG4gICAgICAgIHRoaXMuSXNQYXVzZUdhbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLklzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLkN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrSW5kZXggPSAwO1xuICAgICAgICB0aGlzLlNwYXduRmlyc3RCbG9jaygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5TcGF3bkJsb2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuQ3VycmVudFNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICAgIFxuXG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvbiBHQU1FUExBWVxuICAgIC8vI3JlZ2lvbiBTUEFXTiBCTE9DS1NcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIEJsb2NrQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgU3RlcEFuZ2xlOiBudW1iZXIgPSAyLjVcbiAgICBwcml2YXRlIE1heEFuZ2xlTXVsdGlwbGllcjogbnVtYmVyID0gMTA7XG5cbiAgICBwcml2YXRlIEN1cnJlbnRTcGF3bmVkQmxvY2s6IEJsb2NrU2NyaXB0ID0gbnVsbDtcbiAgICBwcml2YXRlIEN1cnJlbnRCbG9ja0FuZ2xlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBDdXJyZW50QmxvY2tXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgQ3VycmVudEJsb2NrUG9zaXRpb246IGNjLlZlYzM7XG4gICAgcHJpdmF0ZSBDdXJyZW50QmxvY2tZT2Zmc2V0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBDdXJyZW50QmxvY2tJbmRleDogbnVtYmVyID0gMDsvL2luZGV4IGPhu6dhIGJsb2NrIMSRxrDhu6NjIHRow6ptIHbDoG8gZGFuaCBzw6FjaCwgYmxvY2sgY8OgbmcgduG7gSBzYXUgdGjDrCBwaOG6o2kgY8OgbmcgZ+G6p24gduG7m2kgYmFja2dyb3VuZCBjb2xvclxuICAgIHByaXZhdGUgQmxvY2tMaXN0OiBCbG9ja1NjcmlwdFtdID0gW107XG5cbiAgICBwcml2YXRlIFNwYXduRmlyc3RCbG9jaygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLkN1cnJlbnRTcGF3bmVkQmxvY2sgPSBTaW1wbGVQb29sLmluc3RhbmNlLlNwYXduKHRoaXMuQmxvY2tQcmVmYWIsIHRoaXMuQmxvY2tDb250YWluZXIpLmdldENvbXBvbmVudChCbG9ja1NjcmlwdCk7XG4gICAgICAgIHRoaXMuQ3VycmVudFNwYXduZWRCbG9jay5TZXRCbG9ja0luZm8oMTA4MCwgMCwgQmxvY2tNb3ZlVHlwZS5TdGF0aWMsIGNjLnYzKDAsIC00ODApLCB0aGlzLkN1cnJlbnRCbG9ja0luZGV4LCAwKTsgLy8gNDgwIHTDuXkgY2jhu4luaCBzYXVcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLkVuYWJsZUZvckNvbGxpc2lvbihmYWxzZSlcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLm5vZGUucGFyZW50ID0gdGhpcy5CbG9ja0NvbnRhaW5lcjtcblxuXG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrSW5kZXgrKztcblxuICAgICAgICB0aGlzLkN1cnJlbnRCbG9ja0FuZ2xlID0gTnVtYmVyVWx0aWxpdGllcy5HZXRSYW5kb21JbnROdW1iZXIoMSwgdGhpcy5NYXhBbmdsZU11bHRpcGxpZXIgKyAxKSAqIE51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tU2lnbigpICogdGhpcy5TdGVwQW5nbGU7XG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrV2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24gPSBjYy52MygwLCAtMzYwKTsgLy8gMzYwIHTDuXkgY2jhu4luaCBzYXVcbiAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tZT2Zmc2V0ID0gLTEyMDtcblxuICAgICAgICB0aGlzLkJsb2NrTGlzdC5wdXNoKHRoaXMuQ3VycmVudFNwYXduZWRCbG9jayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNwYXduIGPDoWMgYmxvY2sgKGtvIHBo4bqjaSBibG9jayDEkeG6p3UgdGnDqm4pXG4gICAgICovXG4gICAgcHJpdmF0ZSBTcGF3bkJsb2NrKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuQ3VycmVudFNwYXduZWRCbG9jayA9IFNpbXBsZVBvb2wuaW5zdGFuY2UuU3Bhd24odGhpcy5CbG9ja1ByZWZhYiwgdGhpcy5CbG9ja0NvbnRhaW5lcikuZ2V0Q29tcG9uZW50KEJsb2NrU2NyaXB0KTtcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLlNldEJsb2NrSW5mbyh0aGlzLkN1cnJlbnRCbG9ja1dpZHRoLCB0aGlzLkN1cnJlbnRCbG9ja0FuZ2xlLCBCbG9ja01vdmVUeXBlLlN0YXRpYywgdGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbiwgdGhpcy5DdXJyZW50QmxvY2tJbmRleCwgdGhpcy5DdXJyZW50QmxvY2tZT2Zmc2V0KTtcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLm5vZGUucGFyZW50ID0gdGhpcy5CbG9ja0NvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrLm5vZGUuc2V0U2libGluZ0luZGV4KDApO1xuXG4gICAgICAgIHRoaXMuQ2FsY3VsYXRlTmV4dEJsb2NrU3RhdGUoKTtcbiAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tJbmRleCsrO1xuXG4gICAgICAgIHRoaXMuQmxvY2tMaXN0LnB1c2godGhpcy5DdXJyZW50U3Bhd25lZEJsb2NrKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgQ2FsY3VsYXRlTmV4dEJsb2NrU3RhdGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IHBsYXllclZlbG9jaXR5WCA9IC10aGlzLk1heFZlbG9jaXR5ICogTWF0aC5zaW4oMiAqIHRoaXMuQ3VycmVudEJsb2NrQW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IG1heEZseWluZ1JhbmdlID0gcGxheWVyVmVsb2NpdHlYICogdGhpcy5NYXhGbHlpbmdUaW1lO1xuICAgICAgICBsZXQgZGVsdGFCZXR3ZWVuVHdvQmxvY2sgPSBtYXhGbHlpbmdSYW5nZSAqIE51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tRmxvYXROdW1iZXIoMC4zLCAwLjcpO1xuXG4gICAgICAgIGlmICh0aGlzLkN1cnJlbnRCbG9ja0luZGV4IDwgNSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbiA9IGNjLnYzKGNjLm1pc2MuY2xhbXBmKHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24ueCArIGRlbHRhQmV0d2VlblR3b0Jsb2NrLCAtMzI0LCAzMjQpLFxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24ueSArIDEyMCk7XG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRCbG9ja1lPZmZzZXQgPSAtMTIwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbiA9IGNjLnYzKGNjLm1pc2MuY2xhbXBmKHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24ueCArIGRlbHRhQmV0d2VlblR3b0Jsb2NrLCAtMzI0LCAzMjQpLFxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrUG9zaXRpb24ueSArIDMwKTtcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrWU9mZnNldCA9IC0zMDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tXaWR0aCA9IGNjLm1pc2MuY2xhbXBmKE1hdGguYWJzKG1heEZseWluZ1JhbmdlKSAqIE51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tRmxvYXROdW1iZXIoMC4zLCAwLjcpLCAyODgsIDU0MCk7XG5cbiAgICAgICAgaWYgKHRoaXMuQ3VycmVudEJsb2NrQW5nbGUgPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbi54ICsgcGxheWVyVmVsb2NpdHlYICogdGhpcy5NYXhGbHlpbmdUaW1lIDwgLXRoaXMuQ2FudmFzV2lkdGggLyAyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrQW5nbGUgPSAtTnVtYmVyVWx0aWxpdGllcy5HZXRSYW5kb21JbnROdW1iZXIoMSwgdGhpcy5NYXhBbmdsZU11bHRpcGxpZXIgKyAxKSAqIHRoaXMuU3RlcEFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJsb2NrQW5nbGUgPSBOdW1iZXJVbHRpbGl0aWVzLkdldFJhbmRvbUludE51bWJlcigxLCB0aGlzLk1heEFuZ2xlTXVsdGlwbGllciArIDEpICogdGhpcy5TdGVwQW5nbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50QmxvY2tQb3NpdGlvbi54ICsgcGxheWVyVmVsb2NpdHlYICogdGhpcy5NYXhGbHlpbmdUaW1lID4gdGhpcy5DYW52YXNXaWR0aCAvIDIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5DdXJyZW50QmxvY2tBbmdsZSA9IE51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tSW50TnVtYmVyKDEsIHRoaXMuTWF4QW5nbGVNdWx0aXBsaWVyICsgMSkgKiB0aGlzLlN0ZXBBbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbnRCbG9ja0FuZ2xlID0gLU51bWJlclVsdGlsaXRpZXMuR2V0UmFuZG9tSW50TnVtYmVyKDEsIHRoaXMuTWF4QW5nbGVNdWx0aXBsaWVyICsgMSkgKiB0aGlzLlN0ZXBBbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyNlbmRyZWdpb24gU1BBV04gQkxPQ0tTXG5cblxuICAgIC8vI3JlZ2lvbiBNw4BVIFThu6pORyDEkE/huqBOIFNDT1JFXG4gICAgQHByb3BlcnR5KGNjLkNvbG9yKVxuICAgIHByaXZhdGUgQmxvY2tDb2xvcjogY2MuQ29sb3IgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuQ29sb3JdKVxuICAgIHByaXZhdGUgbGV2ZWxDb2xvckxpc3Q6IGNjLkNvbG9yW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwcml2YXRlIGJhY2tncm91bmRTcHJpdGVGcmFtZUxpc3Q6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBwdWJsaWMgQ29sb3JMaXN0OiBjYy5Db2xvcltdID0gW107XG5cbiAgICBwcml2YXRlIEdlbmVyYXRlQ29sb3JMaXN0KG51bWJlck9mQ29sb3I6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZDb2xvcjsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkNvbG9yTGlzdC5wdXNoKE51bWJlclVsdGlsaXRpZXMuR2V0TGVycENvbG9yKHRoaXMuQmxvY2tDb2xvciwgdGhpcy5sZXZlbENvbG9yTGlzdFswXSwgMSAtIE1hdGgucG93KDIgLyAzLCBpKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8jZW5kcmVnaW9uIE3DgFUgVOG7qk5HIMSQT+G6oE4gU0NPUkVcblxuICAgIC8vI3JlZ2lvbiBTQ0FMRSBU4buqTkcgQkxPQ0sgVEhFTyBJTkRFWFxuICAgIHB1YmxpYyBTY2FsZUxpc3Q6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBEaXN0YW5jZVRvRmlyc3RCbG9jazogbnVtYmVyID0gMTk7IC8vIGtob+G6o25nIGPDoWNoIHThu6sgbeG6r3QgdOG7m2kgYmxvY2sgxJHhuqd1IHRpw6puLCB24bubaSBxdXkgxrDhu5tjIGPDoWMgYmxvY2sgc+G6vSBjw6FjaCBuaGF1IDEgxJHGoW4gduG7i1xuICAgIHByaXZhdGUgR2VuZXJhdGVTY2FsZUxpc3QoKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLk1heEJsb2NrUXR5OyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuU2NhbGVMaXN0LnB1c2godGhpcy5EaXN0YW5jZVRvRmlyc3RCbG9jayAvICh0aGlzLkRpc3RhbmNlVG9GaXJzdEJsb2NrICsgaSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8jZW5kcmVnaW9uIFNDQUxFIFThu6pORyBCTE9DSyBUSEVPIElOREVYXG5cbn0iXX0=