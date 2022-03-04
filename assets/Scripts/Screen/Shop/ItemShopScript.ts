// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DatabaseManager from "../../Common/DatabaseManager";
import GameConfig from "../../Config/GameConfig";
import CustomEventManager from "../../Ultilities/CustomEventManager";
import Utilities from "../../Ultilities/Utilities";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ItemShopScript extends cc.Component {

    @property(cc.Sprite)
    private itemSprite: cc.Sprite = null;

    @property(cc.Node)
    lockNode: cc.Node = null;

    isLocked: boolean = false;
    id: number = 0;

    onLoad() {
        this.node.on('click', this.onClick, this);
    }

    initItem(id) {
        let that = this;
        this.id = id;
        this.isLocked = GameConfig.SKINS[id] == 0;
        this.lockNode.active = this.isLocked;
        cc.loader.loadRes("Character/" + (GameConfig.listImageSource[id]), cc.SpriteFrame, function (err, spriteFrame) {
            that.itemSprite.spriteFrame = spriteFrame;
            that.itemSprite.node.height = GameConfig.IMAGE_SIZE_SHOP_ITEM;
            that.itemSprite.node.width = GameConfig.IMAGE_SIZE_SHOP_ITEM;
        });
    }

    onClick(event) {
        if (!Utilities.checkInterval()) {
            return;
        }
        Utilities.setLastTime();
        if (this.isLocked) {
            if (DatabaseManager.getTotalCoin() < 200) {
                return;
            } else {
                DatabaseManager.setSkin(this.id);
                DatabaseManager.addMoreCoin(-200);
                CustomEventManager.Instance.PostEventWithParam_1(CustomEventManager.Instance.UpdateShopItemEvent, this.id);
                console.log("Send event done")
                // this.lockNode.active = false;
                // this.reloadItem();
            }
        } else {
            DatabaseManager.setSkin(this.id);
            CustomEventManager.Instance.PostEventWithParam_1(CustomEventManager.Instance.UpdateShopItemEvent, this.id);
        }
    }

    reloadItem() {
        this.isLocked = GameConfig.SKINS[this.id] == 0;
        this.lockNode.active = this.isLocked;
    }
}
