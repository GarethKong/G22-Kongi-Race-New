
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Ultilities/NumberUltilities.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VsdGlsaXRpZXMvTnVtYmVyVWx0aWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7SUF3Q0EsQ0FBQztJQXRDRzs7T0FFRztJQUNXLDhCQUFhLEdBQTNCO1FBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNXLG1DQUFrQixHQUFoQyxVQUFpQyxRQUFnQixFQUFFLFFBQWdCO1FBRS9ELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1cscUNBQW9CLEdBQWxDLFVBQW1DLFFBQWdCLEVBQUUsUUFBZ0I7UUFFakUsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQzVELENBQUM7SUFFYSw2QkFBWSxHQUExQixVQUEyQixVQUFvQixFQUFFLFFBQWtCLEVBQUUsU0FBaUI7UUFFbEYsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFDN0QsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUNqRCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQ2pELEdBQUcsQ0FDTixDQUFDO0lBQ04sQ0FBQztJQXRDZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F3Q3BDO0lBQUQsdUJBQUM7Q0F4Q0QsQUF3Q0MsSUFBQTtrQkF4Q29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclVsdGlsaXRpZXNcbntcbiAgICAvKipcbiAgICAgKiBSYW5kb20gZOG6pXUsIHRy4bqjIHbhu4EgMSAoY2hvIGTGsMahbmcpIHbDoCAtMSAoY2hvIMOibSlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbVNpZ24oKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEzhuqV5IGdpw6EgdHLhu4sgcmFuZG9tIElOVEVHRVIg4bufIHRyb25nIGtob+G6o25nIChCQU8gR+G7kk0pIE1JTiB2w6AgKEtPIEJBTyBH4buSTSkgTUFYXG4gICAgICogQHBhcmFtIG1pblZhbHVlIEdpw6EgdHLhu4sgdOG7kWkgdGhp4buDdSwgTuG6sE0gVFJPTkcgZ2nDoSB0cuG7iyB0cuG6oyB24buBXG4gICAgICogQHBhcmFtIG1heFZhbHVlIEdpw6EgdHLhu4sgdOG7kWkgxJFhLCBLTyBO4bqwTSBUUk9ORyBnacOhIHRy4buLIHRy4bqjIHbhu4FcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbUludE51bWJlcihtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heFZhbHVlIC0gbWluVmFsdWUpKSArIG1pblZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEzhuqV5IGdpw6EgdHLhu4sgcmFuZG9tIOG7nyB0cm9uZyBraG/huqNuZyAoQkFPIEfhu5JNKSBNSU4gdsOgIChLTyBCQU8gR+G7kk0pIE1BWFxuICAgICAqIEBwYXJhbSBtaW5WYWx1ZSBHacOhIHRy4buLIHThu5FpIHRoaeG7g3UsIE7hurBNIFRST05HIGdpw6EgdHLhu4sgdHLhuqMgduG7gVxuICAgICAqIEBwYXJhbSBtYXhWYWx1ZSBHacOhIHRy4buLIHThu5FpIMSRYSwgS08gTuG6sE0gVFJPTkcgZ2nDoSB0cuG7iyB0cuG6oyB24buBXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21GbG9hdE51bWJlcihtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXhWYWx1ZSAtIG1pblZhbHVlKSArIG1pblZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgR2V0TGVycENvbG9yKHN0YXJ0Q29sb3I6IGNjLkNvbG9yLCBlbmRDb2xvcjogY2MuQ29sb3IsIGxlcnBWYWx1ZTogbnVtYmVyKTogY2MuQ29sb3JcbiAgICB7XG4gICAgICAgIHJldHVybiBjYy5jb2xvcihjYy5taXNjLmxlcnAoc3RhcnRDb2xvci5yLCBlbmRDb2xvci5yLCBsZXJwVmFsdWUpLFxuICAgICAgICAgICAgY2MubWlzYy5sZXJwKHN0YXJ0Q29sb3IuZywgZW5kQ29sb3IuZywgbGVycFZhbHVlKSxcbiAgICAgICAgICAgIGNjLm1pc2MubGVycChzdGFydENvbG9yLmIsIGVuZENvbG9yLmIsIGxlcnBWYWx1ZSksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==