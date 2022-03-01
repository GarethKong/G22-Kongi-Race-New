
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Ultilities/CustomEventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '031cfr7CmBE+K2CbQ246r0y', 'CustomEventManager');
// Scripts/Ultilities/CustomEventManager.ts

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
var CustomEventManager = /** @class */ (function (_super) {
    __extends(CustomEventManager, _super);
    function CustomEventManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NewGameEvent = "NewGame";
        _this.PauseGameEvent = "PauseGame";
        _this.ResumeGameEvent = "ResumeGame";
        _this.GameOverEvent = "GameOver";
        _this.ChangeBackgroundEvent = "ChangeEvent";
        _this.UpdateCoinEvent = "UpdateCoinEvent";
        _this.UpdateItemEvent = "UpdateItemEvent";
        _this.UpdateLifeEvent = "UpdateLifeEvent";
        return _this;
    }
    CustomEventManager_1 = CustomEventManager;
    CustomEventManager.prototype.onLoad = function () {
        CustomEventManager_1.Instance = this;
    };
    CustomEventManager.prototype.PostEvent = function (eventString) {
        this.node.emit(eventString);
    };
    CustomEventManager.prototype.PostEventWithParam_1 = function (eventString, param) {
        this.node.emit(eventString, param);
    };
    CustomEventManager.prototype.PostEventWithParam_2 = function (eventString, param_1, param_2) {
        this.node.emit(eventString, param_1, param_2);
    };
    CustomEventManager.prototype.PostEventWithParam_3 = function (eventString, param_1, param_2, param_3) {
        this.node.emit(eventString, param_1, param_2, param_3);
    };
    var CustomEventManager_1;
    CustomEventManager = CustomEventManager_1 = __decorate([
        ccclass
    ], CustomEventManager);
    return CustomEventManager;
}(cc.Component));
exports.default = CustomEventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VsdGlsaXRpZXMvQ3VzdG9tRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBc0NDO1FBN0JHLGtCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLG9CQUFjLEdBQVcsV0FBVyxDQUFDO1FBQ3JDLHFCQUFlLEdBQVcsWUFBWSxDQUFDO1FBQ3ZDLG1CQUFhLEdBQVcsVUFBVSxDQUFDO1FBQ25DLDJCQUFxQixHQUFXLGFBQWEsQ0FBQztRQUM5QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDO1FBQzVDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7UUFDNUMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFzQmhELENBQUM7MkJBdENvQixrQkFBa0I7SUFJekIsbUNBQU0sR0FBaEI7UUFFSSxvQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFZRCxzQ0FBUyxHQUFULFVBQVUsV0FBbUI7UUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGlEQUFvQixHQUFwQixVQUFxQixXQUFtQixFQUFFLEtBQVU7UUFFaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpREFBb0IsR0FBcEIsVUFBcUIsV0FBbUIsRUFBRSxPQUFZLEVBQUUsT0FBWTtRQUVoRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxpREFBb0IsR0FBcEIsVUFBcUIsV0FBbUIsRUFBRSxPQUFZLEVBQUUsT0FBWSxFQUFFLE9BQVk7UUFFOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7SUFyQ2dCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBc0N0QztJQUFELHlCQUFDO0NBdENELEFBc0NDLENBdEMrQyxFQUFFLENBQUMsU0FBUyxHQXNDM0Q7a0JBdENvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FdmVudE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnRcbntcblxuICAgIHN0YXRpYyBJbnN0YW5jZTogQ3VzdG9tRXZlbnRNYW5hZ2VyO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgQ3VzdG9tRXZlbnRNYW5hZ2VyLkluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBOZXdHYW1lRXZlbnQ6IHN0cmluZyA9IFwiTmV3R2FtZVwiO1xuICAgIFBhdXNlR2FtZUV2ZW50OiBzdHJpbmcgPSBcIlBhdXNlR2FtZVwiO1xuICAgIFJlc3VtZUdhbWVFdmVudDogc3RyaW5nID0gXCJSZXN1bWVHYW1lXCI7XG4gICAgR2FtZU92ZXJFdmVudDogc3RyaW5nID0gXCJHYW1lT3ZlclwiO1xuICAgIENoYW5nZUJhY2tncm91bmRFdmVudDogc3RyaW5nID0gXCJDaGFuZ2VFdmVudFwiO1xuICAgIFVwZGF0ZUNvaW5FdmVudDogc3RyaW5nID0gXCJVcGRhdGVDb2luRXZlbnRcIjtcbiAgICBVcGRhdGVJdGVtRXZlbnQ6IHN0cmluZyA9IFwiVXBkYXRlSXRlbUV2ZW50XCI7XG4gICAgVXBkYXRlTGlmZUV2ZW50OiBzdHJpbmcgPSBcIlVwZGF0ZUxpZmVFdmVudFwiO1xuXG5cbiAgICBQb3N0RXZlbnQoZXZlbnRTdHJpbmc6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5lbWl0KGV2ZW50U3RyaW5nKTtcbiAgICB9XG5cbiAgICBQb3N0RXZlbnRXaXRoUGFyYW1fMShldmVudFN0cmluZzogc3RyaW5nLCBwYXJhbTogYW55KTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoZXZlbnRTdHJpbmcsIHBhcmFtKTtcbiAgICB9XG5cbiAgICBQb3N0RXZlbnRXaXRoUGFyYW1fMihldmVudFN0cmluZzogc3RyaW5nLCBwYXJhbV8xOiBhbnksIHBhcmFtXzI6IGFueSk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5lbWl0KGV2ZW50U3RyaW5nLCBwYXJhbV8xLCBwYXJhbV8yKTtcbiAgICB9XG5cbiAgICBQb3N0RXZlbnRXaXRoUGFyYW1fMyhldmVudFN0cmluZzogc3RyaW5nLCBwYXJhbV8xOiBhbnksIHBhcmFtXzI6IGFueSwgcGFyYW1fMzogYW55KTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoZXZlbnRTdHJpbmcsIHBhcmFtXzEsIHBhcmFtXzIsIHBhcmFtXzMpO1xuICAgIH1cbn1cbiJdfQ==