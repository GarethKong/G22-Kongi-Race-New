"use strict";
cc._RF.push(module, '3a36ec9cbZOnZVWVdYID9du', 'NumberUltilities');
// Scripts/Ultilities/NumberUltilities.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumberUltilities = /** @class */ (function () {
    function NumberUltilities() {
    }
    /**
     * Random dấu, trả về 1 (cho dương) và -1 (cho âm)
     */
    NumberUltilities.GetRandomSign = function () {
        return Math.random() >= 0.5 ? 1 : -1;
    };
    /**
     * Lấy giá trị random INTEGER ở trong khoảng (BAO GỒM) MIN và (KO BAO GỒM) MAX
     * @param minValue Giá trị tối thiểu, NẰM TRONG giá trị trả về
     * @param maxValue Giá trị tối đa, KO NẰM TRONG giá trị trả về
     * @returns
     */
    NumberUltilities.GetRandomIntNumber = function (minValue, maxValue) {
        return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    };
    /**
     * Lấy giá trị random ở trong khoảng (BAO GỒM) MIN và (KO BAO GỒM) MAX
     * @param minValue Giá trị tối thiểu, NẰM TRONG giá trị trả về
     * @param maxValue Giá trị tối đa, KO NẰM TRONG giá trị trả về
     * @returns
     */
    NumberUltilities.GetRandomFloatNumber = function (minValue, maxValue) {
        return Math.random() * (maxValue - minValue) + minValue;
    };
    NumberUltilities.GetLerpColor = function (startColor, endColor, lerpValue) {
        return cc.color(cc.misc.lerp(startColor.r, endColor.r, lerpValue), cc.misc.lerp(startColor.g, endColor.g, lerpValue), cc.misc.lerp(startColor.b, endColor.b, lerpValue), 255);
    };
    NumberUltilities = __decorate([
        ccclass
    ], NumberUltilities);
    return NumberUltilities;
}());
exports.default = NumberUltilities;

cc._RF.pop();