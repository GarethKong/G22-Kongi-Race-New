
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/GameState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2da1DBLdlK+LmDhpWHZ6tg', 'GameState');
// Scripts/Common/GameState.ts

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
var GameState = /** @class */ (function (_super) {
    __extends(GameState, _super);
    function GameState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameState.isPauseGame = false;
    GameState.isShakeOn = false;
    GameState.isRevived = false;
    GameState.currentScore = 0;
    GameState.isVibrateOn = false;
    GameState = __decorate([
        ccclass
    ], GameState);
    return GameState;
}(cc.Component));
exports.default = GameState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbW1vbi9HYW1lU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFHdkM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBTUEsQ0FBQztJQUxVLHFCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLG1CQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLG1CQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLHNCQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLHFCQUFXLEdBQUcsS0FBSyxDQUFDO0lBTFYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQU03QjtJQUFELGdCQUFDO0NBTkQsQUFNQyxDQU5zQyxFQUFFLENBQUMsU0FBUyxHQU1sRDtrQkFOb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjY2NsYXNzID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgaXNQYXVzZUdhbWUgPSBmYWxzZTtcbiAgICBzdGF0aWMgaXNTaGFrZU9uID0gZmFsc2U7XG4gICAgc3RhdGljIGlzUmV2aXZlZCA9IGZhbHNlO1xuICAgIHN0YXRpYyBjdXJyZW50U2NvcmUgPSAwO1xuICAgIHN0YXRpYyBpc1ZpYnJhdGVPbiA9IGZhbHNlO1xufSJdfQ==