"use strict";
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