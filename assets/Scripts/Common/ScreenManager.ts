import DialogManager from "./DialogManager";
import property = cc._decorator.property;
import ccclass = cc._decorator.ccclass;
import DatabaseManager from "./DatabaseManager";
import HomeScript from "../Screen/Home/HomeScript";

export const DlgConfig = {
    "WatchAdsToRevive": 0,
    "ConfirmDlg": 1,
};

export const ScreenConfig = {
    "Game": 0,
    "Home": 1,
    "Shop": 2,
    "EndGame": 3,
};

@ccclass
export default class ScreenManager extends cc.Component {
    @property(cc.Node)
    uiRoot: cc.Node = null;

    @property(cc.Prefab)
    dlgPrefabsList: cc.Prefab[] = [];

    @property(cc.Node)
    screenList: cc.Node[] = [];

    static _ins: ScreenManager;

    static get instance(): ScreenManager {
        return this._ins || new ScreenManager;
    }

    onLoad() {

        //DatabaseManager.addMoreCoin(999);
        ScreenManager._ins = this;
    }

    start() {
        let self = this;
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Home);
        DatabaseManager.loadPlayerData(function () {
            console.log("Binh check data 0");
            HomeScript.instance.loadData();
        });
    }

    onShowScreenByName(name: number) {
        for (let i = 0; i < Object.keys(ScreenConfig).length; i++) {
            let currentNode = this.screenList[i];
            if (i == ScreenConfig.Game) {
                currentNode.active = true;
            } else {
                currentNode.active = i == name;
            }
        }
    }


    onShowDlgByName(name: number): cc.Node {
        let prefab = this.dlgPrefabsList[name];
        return DialogManager.instance.showDlg(prefab, this.uiRoot);
    }
}