import DialogManager from "./DialogManager";
import property = cc._decorator.property;
import ccclass = cc._decorator.ccclass;

const DlgNameConfig = {
    "Setting": 0,
    "Setting2": 1,
    "LoseDlg": 2,
    "Summary": 3,
    "Complete": 4
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
            currentNode.active = i == name;
        }
    }


    onShowDlgByName(name: string): void {
        // Common.playAudioEffect(AudioEffectID.ClickBtn, false);
        let a = DlgNameConfig[name]
        let prefab = this.dlgPrefabsList[a];
        DialogManager.instance.showDlg(prefab, this.uiRoot);
    }
}