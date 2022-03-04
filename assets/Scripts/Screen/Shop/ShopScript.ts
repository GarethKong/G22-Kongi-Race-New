import ItemShopScript from "./ItemShopScript";
import ScreenManager, {ScreenConfig} from "../../Common/ScreenManager";
import SoundManager from "../../Ultilities/SoundManager";
import DatabaseManager from "../../Common/DatabaseManager";
import GameConfig from "../../Config/GameConfig";
import CustomEventManager from "../../Ultilities/CustomEventManager";
import GameManager from "../../Gameplay/GameManager";

const {ccclass, property} = cc._decorator;


@ccclass
export default class ShopScript extends cc.Component {
    @property(cc.Prefab)
    private itemPrefab: cc.Prefab = null;
    @property(cc.Button)
    private btnBack: cc.Button = null;
    @property(cc.Node)
    private content: cc.Node = null;
    @property(cc.Label)
    private lblCoins: cc.Label = null;
    @property(cc.Label)
    private lblUnlockStatus: cc.Label = null;

    @property({displayName: 'spacing'})
    public spacing: number = 0; // space between each item

    private shopItemList = [];
    private selectedItem: cc.Node = null;
    private itemTemplate: cc.Node = null

    private chosenItem: number;

    static _ins: ShopScript;

    static get instance(): ShopScript {
        return this._ins || new ShopScript;
    }

    onLoad() {
        ShopScript._ins = this;
        let _this = this;
        this.btnBack.node.on('click', this.onBackBtnClick, this);
        GameConfig.SKINS = DatabaseManager.getSkin();
        this.scheduleOnce(() => {
            CustomEventManager.Instance.node.on(CustomEventManager.Instance.UpdateShopItemEvent, _this.updateShopItem, _this);
        }, 0.01);
        this.loadData();
    }

    onBackBtnClick() {
        SoundManager.Instance.PlayButtonSound();
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Home);
    }

    loadData(): void {
        this.chosenItem = DatabaseManager.getSkin()[0];
        this.content.removeAllChildren();
        this.itemTemplate = cc.instantiate(this.itemPrefab);

        for (let itemId = 1; itemId <= GameConfig.TOTAL_ITEM_SHOP; itemId++) {
            let node = cc.instantiate(this.itemPrefab);
            let item = node.getComponent(ItemShopScript);
            item.initItem(itemId);
            this.content.addChild(node);
            node.setPosition(0, -node.height * (0.5 + itemId) - this.spacing * (itemId + 1));
            this.shopItemList.push(item);
        }
        this.content.height = Math.ceil(GameConfig.TOTAL_ITEM_SHOP / 3) * (this.itemTemplate.height + this.spacing);
        this.lblCoins.string = DatabaseManager.getTotalCoin() + "";
        this.lblUnlockStatus.string = this.getNumberItemUnlock() + "/" + GameConfig.TOTAL_ITEM_SHOP;
    }

    updateShopItem(itemId: number): void {
        console.log("Receive event done");
        GameConfig.SKINS = DatabaseManager.getSkin();
        this.shopItemList[itemId - 1].reloadItem();
        this.lblCoins.string = DatabaseManager.getTotalCoin() + "";
        this.lblUnlockStatus.string = this.getNumberItemUnlock() + "/" + GameConfig.TOTAL_ITEM_SHOP;
        GameManager.Instance.ChangeCharacter(itemId);
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Game);
    }

    getNumberItemUnlock(): number {
        let skins = DatabaseManager.getSkin();
        let count = 0;
        for (let i = 1; i < skins.length; i++) {
            if (skins[i] != 0) {
                count += 1;
            }
        }
        return count;
    }
}
