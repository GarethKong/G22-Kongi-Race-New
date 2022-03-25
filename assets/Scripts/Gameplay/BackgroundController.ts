// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BackgroundController extends cc.Component
{

    @property([cc.SpriteFrame])
    private backgroundSpriteFrameList: cc.SpriteFrame[] = [];

    @property(cc.Node)
    private backgroundBelow: cc.Node = null; // chỉ đổi màu theo màu milestone

    @property(cc.Sprite)
    private backgroundSprite: cc.Sprite = null; // đổi sprite frame theo milestone
    @property(cc.Node)
    private backgroundMist: cc.Node = null; // chỉ đổi màu theo màu milestone

    public ChangeBackgroundTheme(backgroundIndex: number, backgroundColor: cc.Color): void
    {
        this.backgroundSprite.spriteFrame = this.backgroundSpriteFrameList[backgroundIndex];
        this.backgroundBelow.color = backgroundColor;
        this.backgroundMist.color = backgroundColor;
    }
}
