
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay/BlockScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVwbGF5L0Jsb2NrU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRix1REFBa0Q7QUFDbEQsMkRBQXNEO0FBQ3RELDZDQUF3QztBQUVsQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQThKQztRQTVKVyxnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQXFEdEMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFrQy9CLHVCQUF1QjtRQUV2QixvQkFBb0I7UUFDWixjQUFRLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1FBdUR6QywyQkFBMkI7SUFDL0IsQ0FBQztJQTlJYSw0QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUFFLG9CQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFB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LFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNpQjtJQVJsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBOEovQjtJQUFELGtCQUFDO0NBOUpELEFBOEpDLENBOUp3QyxFQUFFLENBQUMsU0FBUyxHQThKcEQ7a0JBOUpvQixXQUFXO0FBZ0toQyxJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFFckIscURBQVUsQ0FBQTtJQUNWLHFEQUFVLENBQUE7SUFDVixxRUFBa0IsQ0FBQTtJQUNsQixxRUFBa0IsQ0FBQTtBQUN0QixDQUFDLEVBTlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFNeEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEN1c3RvbUV2ZW50TWFuYWdlciBmcm9tIFwiLi4vVWx0aWxpdGllcy9DdXN0b21FdmVudE1hbmFnZXJcIjtcbmltcG9ydCBTaW1wbGVQb29sIGZyb20gXCIuLi9VbHRpbGl0aWVzL1NpbXBsZVBvb2xcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL1VsdGlsaXRpZXMvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja1NjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudFxue1xuICAgIHByaXZhdGUgQmxvY2tXaWR0aDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIEJsb2NrSGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbWlzdEJlZm9yZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBDZW50ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgWU9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgSXNBY3RpdmVGb3JDb2xsaXNpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkU2VsZih0aGlzLlZlbG9jaXR5Lm11bChkdCkpO1xuXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24ueSA8IC0xNTAwKSBTaW1wbGVQb29sLmluc3RhbmNlLkRlc3Bhd24odGhpcy5ub2RlKTtcbiAgICAgICAgaWYgKHRoaXMuSXNBY3RpdmVGb3JDb2xsaXNpb24gPT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb0hvcml6b250YWxMaW5lKEdhbWVNYW5hZ2VyLkluc3RhbmNlLktvbmdpTm9kZS5ub2RlKSA8PSBNYXRoLnBvdyhHYW1lTWFuYWdlci5JbnN0YW5jZS5Lb25naVJhZGl1cyArIHRoaXMuQmxvY2tIZWlnaHQgKiAwLjUsIDIpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb1ZlcnRpY2FsTGluZShHYW1lTWFuYWdlci5JbnN0YW5jZS5Lb25naU5vZGUubm9kZSkgPD0gTWF0aC5wb3coR2FtZU1hbmFnZXIuSW5zdGFuY2UuS29uZ2lSYWRpdXMgKyB0aGlzLkJsb2NrV2lkdGggKiAwLjUgKyAzMCwgMikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UuU2V0TmV4dEJsb2NrKCk7XG4gICAgICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UuUHVzaFVwS29uZ2kodGhpcy5ub2RlLmFuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLk1vdmVEb3duV2hlbkhpdFBsYXllcigpO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5JbnN0YW5jZS5QbGF5SGl0U291bmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7R2FtZU1hbmFnZXIuSW5zdGFuY2UuU2hvd0dhbWVPdmVyKCk7fSwgMC41KTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuSW5zdGFuY2UuUGxheUdhbWVPdmVyU291bmQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGxldCBkaXN0YW5jZUhvcml6b250YWwgPSB0aGlzLlNxckRpc3RhbmNlRnJvbVRhcmdldFRvSG9yaXpvbnRhbExpbmUoR2FtZU1hbmFnZXIuSW5zdGFuY2UuS29uZ2lOb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIGxldCBkaXN0YW5jZVZlcnRpY2FsID0gdGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb1ZlcnRpY2FsTGluZShHYW1lTWFuYWdlci5JbnN0YW5jZS5Lb25naU5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImhvcml6b250YWw6IFwiICsgZGlzdGFuY2VIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZlcnRpY2FsOiBcIiArIGRpc3RhbmNlVmVydGljYWwpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiV2lkdGg6IFwiICsgdGhpcy5CbG9ja1dpZHRoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIktvbmdpIFJhZGl1czogXCIgKyBHYW1lTWFuYWdlci5JbnN0YW5jZS5Lb25naVJhZGl1cyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1hbmFnZXIuSW5zdGFuY2UuS29uZ2lOb2RlLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIGNjLmdhbWUucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuSXNBY3RpdmVGb3JDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBFbmFibGVGb3JDb2xsaXNpb24oaXNEZWxheUZvckVuYWJsZTogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIGlmIChpc0RlbGF5Rm9yRW5hYmxlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5Jc0FjdGl2ZUZvckNvbGxpc2lvbiA9IHRydWU7fSwgMC4zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuSXNBY3RpdmVGb3JDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIENvbG9ySW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIENoYW5nZVN0YXRlVG9OZXh0SW5kZXgoY2hhbmdlRHVyYXRpb246IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIGNodXnhu4NuIG3DoHUgduG7gSBn4bqnbiB24bubaSBtw6B1IGfhu5FjXG4gICAgICAgIGlmICh0aGlzLkNvbG9ySW5kZXggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkNvbG9ySW5kZXgtLTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oY2hhbmdlRHVyYXRpb24sIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogR2FtZU1hbmFnZXIuSW5zdGFuY2UuQ29sb3JMaXN0W3RoaXMuQ29sb3JJbmRleF1cbiAgICAgICAgICAgICAgICAsIHNjYWxlOiBHYW1lTWFuYWdlci5JbnN0YW5jZS5TY2FsZUxpc3RbdGhpcy5Db2xvckluZGV4XVxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuYnkoY2hhbmdlRHVyYXRpb24sIHtwb3NpdGlvbjogY2MudjMoMCwgdGhpcy5ZT2Zmc2V0LCAwKX0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyNyZWdpb24gSU5JVCBCTE9DS1xuICAgIHB1YmxpYyBTZXRCbG9ja0luZm8oYmxvY2tXaWR0aDogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIG1vdmVUeXBlOiBCbG9ja01vdmVUeXBlLCBwb3NpdGlvbjogY2MuVmVjMywgY29sb3JJbmRleDogbnVtYmVyLCB5T2Zmc2V0OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhjb2xvckluZGV4KTtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuQmxvY2tXaWR0aCA9IGJsb2NrV2lkdGg7XG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IGJsb2NrV2lkdGg7XG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHN0YXJ0QW5nbGU7XG4gICAgICAgIHRoaXMubWlzdEJlZm9yZS53aWR0aCA9IGJsb2NrV2lkdGg7XG4gICAgICAgIHRoaXMuWU9mZnNldCA9IHlPZmZzZXQ7XG5cbiAgICAgICAgdGhpcy5Db2xvckluZGV4ID0gY29sb3JJbmRleDtcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gR2FtZU1hbmFnZXIuSW5zdGFuY2UuQ29sb3JMaXN0W3RoaXMuQ29sb3JJbmRleF07XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IEdhbWVNYW5hZ2VyLkluc3RhbmNlLlNjYWxlTGlzdFt0aGlzLkNvbG9ySW5kZXhdO1xuXG4gICAgICAgIHRoaXMuVmVsb2NpdHkgPSBjYy5WZWMzLlpFUk87IC8vIHTDuXkgbW92ZSB0eXBlXG4gICAgICAgIHRoaXMuSXNBY3RpdmVGb3JDb2xsaXNpb24gPSBmYWxzZTtcblxuICAgIH1cbiAgICAvLyNlbmRyZWdpb24gSU5JVCBCTE9DS1xuXG4gICAgLy8jcmVnaW9uIE1PVkUgQkxPQ0tcbiAgICBwcml2YXRlIFZlbG9jaXR5OiBjYy5WZWMzID0gY2MuVmVjMy5aRVJPO1xuICAgIHByaXZhdGUgTW92ZURvd25XaGVuSGl0UGxheWVyKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuVmVsb2NpdHkgPSBjYy52MygwLCAtMTAwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIE9uR2FtZU92ZXIoKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGFuZ2xlSW5SYWRpYW4gPSB0aGlzLm5vZGUuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLlZlbG9jaXR5ID0gY2MudjMoNDAwMCAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW4pLCAtNDAwMCAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW4pKTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uICBNT1ZFIEJMT0NLXG5cbiAgICAvLyNyZWdpb24gQ0hFQ0sgQ09MTFNJT05cbiAgICAvKipcbiAgICAgKiBraG/huqNuZyBjw6FjaCB04burIG5vZGUgKHRhcmdldCkgdOG7m2kgxJHGsOG7nW5nIHRo4bqzbmcgYXggKyBieSArIGMgPSAwXG4gICAgICovXG4gICAgcHJpdmF0ZSBTcXJEaXN0YW5jZUZyb21UYXJnZXRUb0xpbmUoYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgdGFyZ2V0OiBjYy5Ob2RlKTogbnVtYmVyXG4gICAge1xuICAgICAgICAvLyBheCArIGJ5ICsgYyA9IDBcbiAgICAgICAgLy8gcG9pbnQ6ICh4MCx5bylcbiAgICAgICAgLy8gZGlzdGFuY2U6IGFicyhheDAgKyBieTAgKyBjKSAvIHNxcnQoYSphICsgYipiKVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coYSAqIHRhcmdldC54ICsgYiAqIHRhcmdldC55ICsgYywgMikgLyAoYSAqIGEgKyBiICogYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQsOsbmggcGjGsMahbmcga2hv4bqjbmcgY8OhY2ggdOG7qyB0YXJnZXQgxJHhur9uIHRy4bulYyBk4buNYyBibG9ja1xuICAgICAqL1xuICAgIHByaXZhdGUgU3FyRGlzdGFuY2VGcm9tVGFyZ2V0VG9WZXJ0aWNhbExpbmUodGFyZ2V0OiBjYy5Ob2RlKTogbnVtYmVyXG4gICAge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmFuZ2xlID09PSAwIHx8IHRoaXMubm9kZS5hbmdsZSA9PT0gMTgwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb0xpbmUoMSwgMCwgLXRoaXMubm9kZS54LCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3FyRGlzdGFuY2VGcm9tVGFyZ2V0VG9MaW5lKE1hdGgudGFuKE1hdGguUEkgLyAxODAgKiAoOTAgKyB0aGlzLm5vZGUuYW5nbGUpKSwgLTEsXG4gICAgICAgICAgICAgICAgLU1hdGgudGFuKE1hdGguUEkgLyAxODAgKiAoOTAgKyB0aGlzLm5vZGUuYW5nbGUpKSAqIHRoaXMubm9kZS54ICsgdGhpcy5ub2RlLnksIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQsOsbmggcGjGsMahbmcga2hv4bqjbmcgY8OhY2ggdOG7qyB0YXJnZXQgxJHhur9uIHRy4bulYyBuZ2FuZyBibG9ja1xuICAgICAqL1xuICAgIHByaXZhdGUgU3FyRGlzdGFuY2VGcm9tVGFyZ2V0VG9Ib3Jpem9udGFsTGluZSh0YXJnZXQ6IGNjLk5vZGUpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT09IDkwIHx8IHRoaXMubm9kZS5hbmdsZSA9PT0gMjcwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5TcXJEaXN0YW5jZUZyb21UYXJnZXRUb0xpbmUoMSwgMCwgLSh0aGlzLkNlbnRlck5vZGUueCArIHRoaXMubm9kZS54KSwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlNxckRpc3RhbmNlRnJvbVRhcmdldFRvTGluZShNYXRoLnRhbihNYXRoLlBJIC8gMTgwICogKHRoaXMubm9kZS5hbmdsZSkpLCAtMSxcbiAgICAgICAgICAgICAgICAtTWF0aC50YW4oTWF0aC5QSSAvIDE4MCAqICh0aGlzLm5vZGUuYW5nbGUpKSAqICh0aGlzLkNlbnRlck5vZGUueCArIHRoaXMubm9kZS54KSArIHRoaXMubm9kZS55ICsgdGhpcy5DZW50ZXJOb2RlLnksIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uIENIRUNLIENPTExTSU9OXG59XG5cbmV4cG9ydCBlbnVtIEJsb2NrTW92ZVR5cGVcbntcbiAgICBTdGF0aWMgPSAwLFxuICAgIFJvdGF0ZSA9IDEsXG4gICAgTW92ZUhvcml6b250YWwgPSAyLFxuICAgIE1vdmVGb2xsb3dFZGdlID0gMyxcbn0iXX0=