// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoMoving extends cc.Component
{
    private moveSpeed: number;
    private minPosition: number;
    private maxPosition: number;
    SetMoveInfo(MoveSpeed: number, MinPosition: number, MaxPosition: number)
    {
        this.moveSpeed = MoveSpeed;
        this.minPosition = MinPosition;
        this.maxPosition = MaxPosition;
    }
    update(dt: number)
    {
        // this.node.position = this.node.position.add()
    }
}
