import ItemShopScript from "./ItemShopScript";
import ScreenManager, {ScreenConfig} from "../../Common/ScreenManager";
import SoundManager from "../../Ultilities/SoundManager";
import DatabaseManager from "../../Common/DatabaseManager";

const {ccclass, property} = cc._decorator;

const TOTAL_ITEM = 10;

@ccclass
export default class ShopScript extends cc.Component {


    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null;
    @property(cc.Button)
    btnBack: cc.Button = null;

    @property(cc.Node)
    content: cc.Node = null;

    shopItemList = [];
    selectedItem: cc.Node = null;

    static chosenItem: number;

    static _ins: ShopScript;

    static get instance(): ShopScript {
        return this._ins || new ShopScript;
    }

    onLoad() {
        ShopScript._ins = this;
        let _this = this;
        this.btnBack.node.on('click', this.onBackBtnClick, this);
        this.loadData();
    }

    onBackBtnClick() {
        SoundManager.Instance.PlayButtonSound();
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Home);
    }


    start() {
        console.log("chosenItem", ShopScript.chosenItem);
        // GameConfig.achievement = Common.getAchievements();
    }

    loadData() {
        ShopScript.chosenItem[0] = DatabaseManager.getSkin()[0];
        this.content.removeAllChildren();
        for (let itemId = 1; itemId <= TOTAL_ITEM; itemId++) {
            let node = cc.instantiate(this.itemPrefab);
            let item = node.getComponent(ItemShopScript);
            item.initItem(itemId);
            node.parent = this.content;
            this.shopItemList.push(item);
        }
        this.content.height = Math.ceil(TOTAL_ITEM / 3) * this.node.height;
    }

    updateUnchosenItem(itemId) {
        let listItems = this.content.children;
        for (let a = 0; a < listItems.length; a++) {
            let item = listItems[a].getComponent(ItemShopScript);
            item.lockNode.active = itemId == a + 1;
        }
    }
}
