
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Ultilities/SimplePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b27d5D6fc1Lcr9pM5Hxa9xm', 'SimplePool');
// Scripts/Ultilities/SimplePool.ts

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
var SimplePool = /** @class */ (function () {
    function SimplePool() {
        this.dictPool = {};
        this.dictPrefab = {};
    }
    SimplePool_1 = SimplePool;
    Object.defineProperty(SimplePool, "instance", {
        get: function () {
            if (this.Instance) {
                return this.Instance;
            }
            this.Instance = new SimplePool_1();
            return this.Instance;
        },
        enumerable: false,
        configurable: true
    });
    SimplePool.prototype.Spawn = function (prefab, parent) {
        var name = prefab.data.name;
        this.dictPrefab[name] = prefab;
        var node;
        if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this.dictPool[name];
            if (pool.size() > 0) {
                node = pool.get();
            }
            else {
                node = cc.instantiate(prefab);
            }
        }
        else {
            //没有对应对象池，创建他！
            var pool = new cc.NodePool();
            this.dictPool[name] = pool;
            node = cc.instantiate(prefab);
        }
        // parent.addChild(node);
        return node;
    };
    SimplePool.prototype.Despawn = function (node) {
        var name = node.name;
        var pool = null;
        if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this.dictPool[name];
        }
        else {
            //没有对应对象池，创建他！
            pool = new cc.NodePool();
            this.dictPool[name] = pool;
        }
        pool.put(node);
    };
    SimplePool.prototype.ClearPool = function (name) {
        if (this.dictPool.hasOwnProperty(name)) {
            var pool = this.dictPool[name];
            pool.clear();
        }
    };
    var SimplePool_1;
    SimplePool = SimplePool_1 = __decorate([
        ccclass
    ], SimplePool);
    return SimplePool;
}());
exports.default = SimplePool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VsdGlsaXRpZXMvU2ltcGxlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7UUFFWSxhQUFRLEdBQWtDLEVBQUUsQ0FBQTtRQUM1QyxlQUFVLEdBQWdDLEVBQUUsQ0FBQTtJQXFFeEQsQ0FBQzttQkF4RW9CLFVBQVU7SUFNM0Isc0JBQWtCLHNCQUFRO2FBQTFCO1lBRUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUNqQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDeEI7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBVSxFQUFFLENBQUM7WUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRU0sMEJBQUssR0FBWixVQUFhLE1BQWlCLEVBQUUsTUFBZTtRQUUzQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLElBQWEsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUN0QztZQUNJLFVBQVU7WUFDVixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFDbkI7Z0JBQ0ksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUcsQ0FBQzthQUN0QjtpQkFFRDtnQkFDSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztTQUNKO2FBQ0Q7WUFDSSxjQUFjO1lBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFFM0IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FFakM7UUFDRCx5QkFBeUI7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDRCQUFPLEdBQWQsVUFBZSxJQUFhO1FBRXhCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQ3RDO1lBQ0ksVUFBVTtZQUNWLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQ0Q7WUFDSSxjQUFjO1lBQ2QsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU0sOEJBQVMsR0FBaEIsVUFBaUIsSUFBWTtRQUV6QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUN0QztZQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQzs7SUF2RWdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3RTlCO0lBQUQsaUJBQUM7Q0F4RUQsQUF3RUMsSUFBQTtrQkF4RW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVQb29sXG57XG4gICAgcHJpdmF0ZSBkaWN0UG9vbDoge1tuYW1lOiBzdHJpbmddOiBjYy5Ob2RlUG9vbH0gPSB7fVxuICAgIHByaXZhdGUgZGljdFByZWZhYjoge1tuYW1lOiBzdHJpbmddOiBjYy5QcmVmYWJ9ID0ge31cbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZTogU2ltcGxlUG9vbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLkluc3RhbmNlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5JbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSW5zdGFuY2UgPSBuZXcgU2ltcGxlUG9vbCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5JbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU3Bhd24ocHJlZmFiOiBjYy5QcmVmYWIsIHBhcmVudDogY2MuTm9kZSlcbiAgICB7XG4gICAgICAgIGxldCBuYW1lID0gcHJlZmFiLmRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5kaWN0UHJlZmFiW25hbWVdID0gcHJlZmFiO1xuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZTtcbiAgICAgICAgaWYgKHRoaXMuZGljdFBvb2wuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5bey5pyJ5a+55bqU55qE5a+56LGh5rGgXG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMuZGljdFBvb2xbbmFtZV07XG4gICAgICAgICAgICBpZiAocG9vbC5zaXplKCkgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBwb29sLmdldCgpITtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5rKh5pyJ5a+55bqU5a+56LGh5rGg77yM5Yib5bu65LuW77yBXG4gICAgICAgICAgICBsZXQgcG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICAgICAgdGhpcy5kaWN0UG9vbFtuYW1lXSA9IHBvb2w7XG5cbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFyZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRGVzcGF3bihub2RlOiBjYy5Ob2RlKVxuICAgIHtcbiAgICAgICAgbGV0IG5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgIGxldCBwb29sID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuZGljdFBvb2wuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5bey5pyJ5a+55bqU55qE5a+56LGh5rGgXG4gICAgICAgICAgICBwb29sID0gdGhpcy5kaWN0UG9vbFtuYW1lXTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5rKh5pyJ5a+55bqU5a+56LGh5rGg77yM5Yib5bu65LuW77yBXG4gICAgICAgICAgICBwb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICAgICAgICB0aGlzLmRpY3RQb29sW25hbWVdID0gcG9vbDtcbiAgICAgICAgfVxuICAgICAgICBwb29sLnB1dChub2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQ2xlYXJQb29sKG5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmRpY3RQb29sLmhhc093blByb3BlcnR5KG5hbWUpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMuZGljdFBvb2xbbmFtZV07XG4gICAgICAgICAgICBwb29sLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19