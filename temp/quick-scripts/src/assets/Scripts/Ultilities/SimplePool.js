"use strict";
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