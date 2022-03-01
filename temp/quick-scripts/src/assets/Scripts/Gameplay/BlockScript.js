"use strict";
cc._RF.push(module, 'ba042X5uKJIE5CgFrUtfZf8', 'BlockScript');
// Scripts/Gameplay/BlockScript.ts

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
exports.BlockMoveType = void 0;
var SimplePool_1 = require("../Ultilities/SimplePool");
var SoundManager_1 = require("../Ultilities/SoundManager");
var GameManager_1 = require("./GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlockScript = /** @class */ (function (_super) {
    __extends(BlockScript, _super);
    function BlockScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BlockWidth = 0;
        _this.BlockHeight = 0;
        _this.mistBefore = null;
        _this.CenterNode = null;
        _this.YOffset = 0;
        _this.IsActiveForCollision = false;
        _this.ColorIndex = 0;
        //#endregion INIT BLOCK
        //#region MOVE BLOCK
        _this.Velocity = cc.Vec3.ZERO;
        return _this;
        //#endregion CHECK COLLSION
    }
    BlockScript.prototype.update = function (dt) {
        this.node.position = this.node.position.addSelf(this.Velocity.mul(dt));
        if (this.node.position.y < -1500)
            SimplePool_1.default.instance.Despawn(this.node);
        if (this.IsActiveForCollision == false)
            return;
        if (this.SqrDistanceFromTargetToHorizontalLine(GameManager_1.default.Instance.KongiNode.node) <= Math.pow(GameManager_1.default.Instance.KongiRadius + this.BlockHeight * 0.5, 2)) {
            if (this.SqrDistanceFromTargetToVerticalLine(GameManager_1.default.Instance.KongiNode.node) <= Math.pow(GameManager_1.default.Instance.KongiRadius + this.BlockWidth * 0.5 + 30, 2)) {
                GameManager_1.default.Instance.SetNextBlock();
                GameManager_1.default.Instance.PushUpKongi(this.node.angle);
                this.MoveDownWhenHitPlayer();
                SoundManager_1.default.Instance.PlayHitSound();
            }
            else {
                this.scheduleOnce(function () { GameManager_1.default.Instance.ShowGameOver(); }, 0.5);
                SoundManager_1.default.Instance.PlayGameOverSound();
                // let distanceHorizontal = this.SqrDistanceFromTargetToHorizontalLine(GameManager.Instance.KongiNode.node);
                // let distanceVertical = this.SqrDistanceFromTargetToVerticalLine(GameManager.Instance.KongiNode.node);
                // this.node.color = cc.Color.GREEN;
                // console.log(this.node.position);
                // console.log("horizontal: " + distanceHorizontal);
                // console.log("vertical: " + distanceVertical);
                // console.log("Width: " + this.BlockWidth);
                // console.log("Kongi Radius: " + GameManager.Instance.KongiRadius);
                // console.log(GameManager.Instance.KongiNode.node.position);
                // cc.game.pause();
            }
            this.IsActiveForCollision = false;
        }
    };
    BlockScript.prototype.EnableForCollision = function (isDelayForEnable) {
        var _this = this;
        if (isDelayForEnable) {
            this.scheduleOnce(function () { _this.IsActiveForCollision = true; }, 0.3);
        }
        else {
            this.IsActiveForCollision = true;
        }
    };
    BlockScript.prototype.ChangeStateToNextIndex = function (changeDuration) {
        // chuyển màu về gần với màu gốc
        if (this.ColorIndex > 0) {
            this.ColorIndex--;
            cc.tween(this.node).to(changeDuration, {
                color: GameManager_1.default.Instance.ColorList[this.ColorIndex],
                scale: GameManager_1.default.Instance.ScaleList[this.ColorIndex]
            }).start();
            cc.tween(this.node).by(changeDuration, { position: cc.v3(0, this.YOffset, 0) }).start();
        }
    };
    //#region INIT BLOCK
    BlockScript.prototype.SetBlockInfo = function (blockWidth, startAngle, moveType, position, colorIndex, yOffset) {
        console.log(colorIndex);
        this.node.position = position;
        this.BlockWidth = blockWidth;
        this.node.width = blockWidth;
        this.node.angle = startAngle;
        this.mistBefore.width = blockWidth;
        this.YOffset = yOffset;
        this.ColorIndex = colorIndex;
        this.node.color = GameManager_1.default.Instance.ColorList[this.ColorIndex];
        this.node.scale = GameManager_1.default.Instance.ScaleList[this.ColorIndex];
        this.Velocity = cc.Vec3.ZERO; // tùy move type
        this.IsActiveForCollision = false;
    };
    BlockScript.prototype.MoveDownWhenHitPlayer = function () {
        this.Velocity = cc.v3(0, -1000);
    };
    BlockScript.prototype.OnGameOver = function () {
        var angleInRadian = this.node.angle * Math.PI / 180;
        this.Velocity = cc.v3(4000 * Math.sin(angleInRadian), -4000 * Math.cos(angleInRadian));
    };
    //#endregion  MOVE BLOCK
    //#region CHECK COLLSION
    /**
     * khoảng cách từ node (target) tới đường thẳng ax + by + c = 0
     */
    BlockScript.prototype.SqrDistanceFromTargetToLine = function (a, b, c, target) {
        // ax + by + c = 0
        // point: (x0,yo)
        // distance: abs(ax0 + by0 + c) / sqrt(a*a + b*b)
        return Math.pow(a * target.x + b * target.y + c, 2) / (a * a + b * b);
    };
    /**
     * Bình phương khoảng cách từ target đến trục dọc block
     */
    BlockScript.prototype.SqrDistanceFromTargetToVerticalLine = function (target) {
        if (this.node.angle === 0 || this.node.angle === 180) {
            return this.SqrDistanceFromTargetToLine(1, 0, -this.node.x, target);
        }
        else {
            return this.SqrDistanceFromTargetToLine(Math.tan(Math.PI / 180 * (90 + this.node.angle)), -1, -Math.tan(Math.PI / 180 * (90 + this.node.angle)) * this.node.x + this.node.y, target);
        }
    };
    /**
     * Bình phương khoảng cách từ target đến trục ngang block
     */
    BlockScript.prototype.SqrDistanceFromTargetToHorizontalLine = function (target) {
        if (this.node.angle === 90 || this.node.angle === 270) {
            return this.SqrDistanceFromTargetToLine(1, 0, -(this.CenterNode.x + this.node.x), target);
        }
        else {
            return this.SqrDistanceFromTargetToLine(Math.tan(Math.PI / 180 * (this.node.angle)), -1, -Math.tan(Math.PI / 180 * (this.node.angle)) * (this.CenterNode.x + this.node.x) + this.node.y + this.CenterNode.y, target);
        }
    };
    __decorate([
        property
    ], BlockScript.prototype, "BlockHeight", void 0);
    __decorate([
        property(cc.Node)
    ], BlockScript.prototype, "mistBefore", void 0);
    __decorate([
        property(cc.Node)
    ], BlockScript.prototype, "CenterNode", void 0);
    BlockScript = __decorate([
        ccclass
    ], BlockScript);
    return BlockScript;
}(cc.Component));
exports.default = BlockScript;
var BlockMoveType;
(function (BlockMoveType) {
    BlockMoveType[BlockMoveType["Static"] = 0] = "Static";
    BlockMoveType[BlockMoveType["Rotate"] = 1] = "Rotate";
    BlockMoveType[BlockMoveType["MoveHorizontal"] = 2] = "MoveHorizontal";
    BlockMoveType[BlockMoveType["MoveFollowEdge"] = 3] = "MoveFollowEdge";
})(BlockMoveType = exports.BlockMoveType || (exports.BlockMoveType = {}));

cc._RF.pop();