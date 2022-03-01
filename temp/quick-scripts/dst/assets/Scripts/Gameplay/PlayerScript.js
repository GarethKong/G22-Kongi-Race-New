
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay/PlayerScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52f2aKZM6ZMpJ/KPa3EI8mj', 'PlayerScript');
// Scripts/Gameplay/PlayerScript.ts

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
var GameManager_1 = require("./GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerScript = /** @class */ (function (_super) {
    __extends(PlayerScript, _super);
    function PlayerScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Radius = 0;
        _this.MaxRotateAngle = 0; // player có rotate khi đập xuống các mặt 
        //#region MOVE + ROTATE 
        _this.Velocity = cc.Vec3.ZERO;
        _this.Gravity = 0;
        _this.AngularVelocity = 0;
        return _this;
    }
    PlayerScript.prototype.update = function (dt) {
        // if(GameManager.Instance.IsPauseGame) return;
        this.Velocity = this.Velocity.addSelf(cc.v3(0, -this.Gravity * dt));
        this.node.position = this.node.position.addSelf(this.Velocity.mul(dt));
        if (this.node.position.x < -540 + this.Radius || this.node.position.x > 540 - this.Radius) {
            this.BounceWithWall();
        }
    };
    PlayerScript.prototype.BounceWithWall = function () {
        this.Velocity = cc.v3(-this.Velocity.x, this.Velocity.y);
        this.AngularVelocity = -this.AngularVelocity;
    };
    //#endregion MOVE + ROTATE
    /**
     * Nẩy player lên
     * @param pushUpAngle
     * @param pushUpVelocity
     */
    PlayerScript.prototype.Jump = function (pushUpAngle, pushUpVelocity, gravity) {
        var pushUpAngleInRadian = pushUpAngle * Math.PI / 180;
        this.Velocity = cc.v3(pushUpVelocity * -Math.sin(2 * pushUpAngleInRadian), pushUpVelocity * Math.cos(2 * pushUpAngleInRadian));
        this.Gravity = gravity;
    };
    /**
     * Player lao xuống
     */
    PlayerScript.prototype.Landing = function () {
        this.Velocity = cc.v3(0, -GameManager_1.default.Instance.LandingVelocity);
    };
    PlayerScript.prototype.ResetNewGame = function () {
        this.Velocity = cc.Vec3.ZERO;
        this.node.position = cc.Vec3.ZERO;
        this.Gravity = 0;
    };
    __decorate([
        property
    ], PlayerScript.prototype, "Radius", void 0);
    __decorate([
        property
    ], PlayerScript.prototype, "MaxRotateAngle", void 0);
    PlayerScript = __decorate([
        ccclass
    ], PlayerScript);
    return PlayerScript;
}(cc.Component));
exports.default = PlayerScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVwbGF5L1BsYXllclNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF1REM7UUFwRFcsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixvQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDLDBDQUEwQztRQUM5RSx3QkFBd0I7UUFFaEIsY0FBUSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIscUJBQWUsR0FBVyxDQUFDLENBQUM7O0lBNkN4QyxDQUFDO0lBNUNhLDZCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFFdkIsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ3pGO1lBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVPLHFDQUFjLEdBQXRCO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsMEJBQTBCO0lBQzFCOzs7O09BSUc7SUFDSSwyQkFBSSxHQUFYLFVBQVksV0FBbUIsRUFBRSxjQUFzQixFQUFFLE9BQWU7UUFFcEUsSUFBSSxtQkFBbUIsR0FBVyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLEVBQUUsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUMvSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSw4QkFBTyxHQUFkO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxtQ0FBWSxHQUFuQjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQW5ERDtRQURDLFFBQVE7Z0RBQ2tCO0lBRTNCO1FBREMsUUFBUTt3REFDMEI7SUFMbEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVEaEM7SUFBRCxtQkFBQztDQXZERCxBQXVEQyxDQXZEeUMsRUFBRSxDQUFDLFNBQVMsR0F1RHJEO2tCQXZEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnRcbntcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIFJhZGl1czogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIE1heFJvdGF0ZUFuZ2xlOiBudW1iZXIgPSAwOyAvLyBwbGF5ZXIgY8OzIHJvdGF0ZSBraGkgxJHhuq1wIHh14buRbmcgY8OhYyBt4bq3dCBcbiAgICAvLyNyZWdpb24gTU9WRSArIFJPVEFURSBcblxuICAgIHByaXZhdGUgVmVsb2NpdHk6IGNjLlZlYzMgPSBjYy5WZWMzLlpFUk87XG4gICAgcHJpdmF0ZSBHcmF2aXR5OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgQW5ndWxhclZlbG9jaXR5OiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIGlmKEdhbWVNYW5hZ2VyLkluc3RhbmNlLklzUGF1c2VHYW1lKSByZXR1cm47XG4gICAgICAgIHRoaXMuVmVsb2NpdHkgPSB0aGlzLlZlbG9jaXR5LmFkZFNlbGYoY2MudjMoMCwgLXRoaXMuR3Jhdml0eSAqIGR0KSk7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGRTZWxmKHRoaXMuVmVsb2NpdHkubXVsKGR0KSk7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5wb3NpdGlvbi54IDwgLTU0MCArIHRoaXMuUmFkaXVzIHx8IHRoaXMubm9kZS5wb3NpdGlvbi54ID4gNTQwIC0gdGhpcy5SYWRpdXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQm91bmNlV2l0aFdhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgQm91bmNlV2l0aFdhbGwoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5WZWxvY2l0eSA9IGNjLnYzKC10aGlzLlZlbG9jaXR5LngsIHRoaXMuVmVsb2NpdHkueSk7XG4gICAgICAgIHRoaXMuQW5ndWxhclZlbG9jaXR5ID0gLXRoaXMuQW5ndWxhclZlbG9jaXR5O1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb24gTU9WRSArIFJPVEFURVxuICAgIC8qKlxuICAgICAqIE7huql5IHBsYXllciBsw6puXG4gICAgICogQHBhcmFtIHB1c2hVcEFuZ2xlIFxuICAgICAqIEBwYXJhbSBwdXNoVXBWZWxvY2l0eSBcbiAgICAgKi9cbiAgICBwdWJsaWMgSnVtcChwdXNoVXBBbmdsZTogbnVtYmVyLCBwdXNoVXBWZWxvY2l0eTogbnVtYmVyLCBncmF2aXR5OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgcHVzaFVwQW5nbGVJblJhZGlhbjogbnVtYmVyID0gcHVzaFVwQW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB0aGlzLlZlbG9jaXR5ID0gY2MudjMocHVzaFVwVmVsb2NpdHkgKiAtTWF0aC5zaW4oMiAqIHB1c2hVcEFuZ2xlSW5SYWRpYW4pLCBwdXNoVXBWZWxvY2l0eSAqIE1hdGguY29zKDIgKiBwdXNoVXBBbmdsZUluUmFkaWFuKSk7XG4gICAgICAgIHRoaXMuR3Jhdml0eSA9IGdyYXZpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheWVyIGxhbyB4deG7kW5nXG4gICAgICovXG4gICAgcHVibGljIExhbmRpbmcoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5WZWxvY2l0eSA9IGNjLnYzKDAsIC1HYW1lTWFuYWdlci5JbnN0YW5jZS5MYW5kaW5nVmVsb2NpdHkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZXNldE5ld0dhbWUoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLlZlbG9jaXR5ID0gY2MuVmVjMy5aRVJPO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy5WZWMzLlpFUk87XG4gICAgICAgIHRoaXMuR3Jhdml0eSA9IDA7XG4gICAgfVxufSJdfQ==