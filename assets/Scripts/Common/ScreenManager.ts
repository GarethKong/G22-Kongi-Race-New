import DialogManager from "./DialogManager";
import property = cc._decorator.property;
import ccclass = cc._decorator.ccclass;

export const DlgConfig = {
    "EndGame": 0,
};

export const ScreenConfig = {
    "Game": 0,
    "Home": 1,
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
        ScreenManager._ins = this;
    }

    start() {
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Home);
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


    onShowDlgByName(name: number): void {
        let prefab = this.dlgPrefabsList[name];
        DialogManager.instance.showDlg(prefab, this.uiRoot);
    }
}