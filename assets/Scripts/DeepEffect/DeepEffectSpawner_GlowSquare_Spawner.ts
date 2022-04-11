// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SimplePool from "../Ultilities/SimplePool";
import DeepEffectSpawner_GlowSquare from "./DeepEffectSpawner_GlowSquare";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DeepEffectSpawner_GlowSquare_Spawner extends cc.Component
{
    @property(cc.Prefab)
    private glowSquarePrefab: cc.Prefab = null;

    private spawnTimer: number = 0;

    private spawnCooldown: number = 0.25;
    protected onLoad(): void
    {
        this.SpawnIntialSquares();
    }

    protected update(dt: number): void
    {
        this.spawnTimer += dt;
        if (this.spawnTimer > this.spawnCooldown)
        {
            this.spawnTimer = 0;
            this.SpawnGlowSquare();
        }
    }

    private currentSquare: DeepEffectSpawner_GlowSquare;

    private SpawnIntialSquares(): void
    {
        for (let i = 0; i < 7; i++)
        {
            for (let j = 0; j < 9; j++)
            {
                this.currentSquare = SimplePool.instance.Spawn(this.glowSquarePrefab, this.node).getComponent(DeepEffectSpawner_GlowSquare);
                this.currentSquare.SetState(i, j * this.spawnCooldown);
                this.currentSquare.node.parent = this.node;
            }
        }
    }

    /**
     * Spawn các glow square khi hết cooldown
     */
    private SpawnGlowSquare(): void
    {
        for (let i = 0; i < 7; i++)
        {
            this.currentSquare = SimplePool.instance.Spawn(this.glowSquarePrefab, this.node).getComponent(DeepEffectSpawner_GlowSquare);
            this.currentSquare.SetState(i, 0);
            this.currentSquare.node.parent = this.node;
        }
    }
}