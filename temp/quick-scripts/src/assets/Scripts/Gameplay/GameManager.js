"use strict";
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