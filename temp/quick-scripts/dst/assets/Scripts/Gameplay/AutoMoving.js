
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Gameplay/AutoMoving.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67ed4clib9FWIBRkG1Ngs8c', 'AutoMoving');
// Scripts/Gameplay/AutoMoving.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AutoMoving = /** @class */ (function (_super) {
    __extends(AutoMoving, _super);
    function AutoMoving() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoMoving.prototype.SetMoveInfo = function (MoveSpeed, MinPosition, MaxPosition) {
        this.moveSpeed = MoveSpeed;
        this.minPosition = MinPosition;
        this.maxPosition = MaxPosition;
    };
    AutoMoving.prototype.update = function (dt) {
        // this.node.position = this.node.position.add()
    };
    AutoMoving = __decorate([
        ccclass
    ], AutoMoving);
    return AutoMoving;
}(cc.Component));
exports.default = AutoMoving;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVwbGF5L0F1dG9Nb3ZpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBZUEsQ0FBQztJQVZHLGdDQUFXLEdBQVgsVUFBWSxTQUFpQixFQUFFLFdBQW1CLEVBQUUsV0FBbUI7UUFFbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELDJCQUFNLEdBQU4sVUFBTyxFQUFVO1FBRWIsZ0RBQWdEO0lBQ3BELENBQUM7SUFkZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWU5QjtJQUFELGlCQUFDO0NBZkQsQUFlQyxDQWZ1QyxFQUFFLENBQUMsU0FBUyxHQWVuRDtrQkFmb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Nb3ZpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnRcbntcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgbWluUG9zaXRpb246IG51bWJlcjtcbiAgICBwcml2YXRlIG1heFBvc2l0aW9uOiBudW1iZXI7XG4gICAgU2V0TW92ZUluZm8oTW92ZVNwZWVkOiBudW1iZXIsIE1pblBvc2l0aW9uOiBudW1iZXIsIE1heFBvc2l0aW9uOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IE1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5taW5Qb3NpdGlvbiA9IE1pblBvc2l0aW9uO1xuICAgICAgICB0aGlzLm1heFBvc2l0aW9uID0gTWF4UG9zaXRpb247XG4gICAgfVxuICAgIHVwZGF0ZShkdDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCgpXG4gICAgfVxufVxuIl19