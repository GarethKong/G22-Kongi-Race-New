// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SimplePool from "../Ultilities/SimplePool";
import DeepEffectSpawner_Light from "./DeepEffectSpawner_Light";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DeepEffectSpawner_Light_Spawner extends cc.Component
{
    @property(cc.Prefab)
    private lightPrefab: cc.Prefab = null;

    private spawnTimer: number = 0;

    private spawnCooldown: number = 0.15;
    protected onLoad(): void
    {
        this.SpawnIntialLights();
    }

    protected update(dt: number): void
    {
        this.spawnTimer += dt;
        if (this.spawnTimer > this.spawnCooldown)
        {
            this.spawnTimer = 0;
            this.SpawnLight();
        }
    }

    private currentSquare: DeepEffectSpawner_Light;
    private lastAngleIndex: number = -1;
    private SpawnIntialLights(): void
    {
        for (let i = 0; i < 9; i++)
        {
            this.currentSquare = SimplePool.instance.Spawn(this.lightPrefab, this.node).getComponent(DeepEffectSpawner_Light);
            this.currentSquare.SetState(this.GetRandomAngleIndex(), i * this.spawnCooldown);
            this.currentSquare.node.parent = this.node;
        }
    }

    /**
     * Spawn các glow square khi hết cooldown
     */
    private SpawnLight(): void
    {
        this.currentSquare = SimplePool.instance.Spawn(this.lightPrefab, this.node).getComponent(DeepEffectSpawner_Light);
        this.currentSquare.SetState(this.GetRandomAngleIndex(), 0);
        this.currentSquare.node.parent = this.node;
    }

    private GetRandomAngleIndex(): number
    {
        let newAngleIndex: number = Math.floor(Math.random() * 9);
        if (newAngleIndex === this.lastAngleIndex)
        {
            if (newAngleIndex === 0)
            {
                newAngleIndex = 1;
            }
            else
            {
                newAngleIndex = this.lastAngleIndex - 1;
            }
        }
        this.lastAngleIndex = newAngleIndex;

        return this.lastAngleIndex;
    }
}