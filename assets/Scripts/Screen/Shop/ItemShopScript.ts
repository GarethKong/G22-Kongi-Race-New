// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShopScript from "./ShopScript";
import DatabaseManager from "../../Common/DatabaseManager";
import ScreenManager, {DlgConfig} from "../../Common/ScreenManager";
import ConfirmDlg from "./UnlockingScript";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ItemShopScript extends cc.Component {

    @property(cc.Sprite)
    itemSprite: cc.Sprite = null;

    @property(cc.Node)
    lockNode: cc.Node = null;

    isUnlocked: boolean = false;
    id: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on('click', this.onClick, this);

    }

    initItem(id) {
        this.id = id;
        this.isUnlocked = DatabaseManager.skin[id] == 0;
        this.lockNode.active = this.isUnlocked;
    }

    onClick(event) {
        if (this.lockNode.active) return;
        if (this.isUnlocked) {
            let dlg = ScreenManager.instance.onShowDlgByName(DlgConfig.ConfirmDlg);
            dlg.getComponent(ConfirmDlg).init(this.id);
        } else {
            ShopScript.chosenItem[0] = this.id;
            console.log("chosen item", ShopScript.chosenItem);
            DatabaseManager.setSkin(0, this.id);
            ShopScript._ins.updateUnchosenItem(this.id);
        }
    }

    // update (dt) {}
}
