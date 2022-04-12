// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SimplePool from "../Ultilities/SimplePool";
import ArrowDownPrepare from "./ArrowDownPrepare";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ArrowDownSpawner extends cc.Component
{
    @property(cc.Prefab)
    private arrowPrefab: cc.Prefab = null;

    private spawnTimer: number = 0;

    private spawnCooldown: number = 0.3;
    protected onLoad(): void
    {
        this.SpawnIntialArrow();
    }

    protected update(dt: number): void
    {
        this.spawnTimer += dt;
        if (this.spawnTimer > this.spawnCooldown)
        {
            this.spawnTimer = 0;
            this.SpawnArrow();
        }
    }

    private currentSquare: ArrowDownPrepare;
    private SpawnIntialArrow(): void
    {
        for (let i = 0; i < 9; i++)
        {
            this.currentSquare = SimplePool.instance.Spawn(this.arrowPrefab, this.node).getComponent(ArrowDownPrepare);
            this.currentSquare.SetState(i * this.spawnCooldown);
            this.currentSquare.node.parent = this.node;
        }
    }

    /**
     * Spawn các glow square khi hết cooldown
     */
    private SpawnArrow(): void
    {
        this.currentSquare = SimplePool.instance.Spawn(this.arrowPrefab, this.node).getComponent(ArrowDownPrepare);
        this.currentSquare.SetState(0);
        this.currentSquare.node.parent = this.node;
    }
}