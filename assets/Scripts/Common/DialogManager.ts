import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import GameState from "./GameState";

@ccclass
export default class DialogManager extends cc.Component {

    @property(cc.Prefab)
    antiContactLayerPrefab: cc.Prefab = null;

    @property(cc.Node)
    uiRoot: cc.Node = null;

    dlgList: any = null;
    antiContactLayer = null;

    static _ins: DialogManager;

    static get instance(): DialogManager {
        return this._ins || new DialogManager;
    }

    onLoad() {
        DialogManager._ins = this;
        this.dlgList = new Array();
        this.antiContactLayer = null;
    }

    start() {
    }


    /**
     * 展示对话框
     * @param {*对话框预设} prefab
     * @param {*父节点} parent
     * @param {*坐标} pos
     */
    showDlg(prefab, parent, pos = cc.v2(0, 0)) {

        if (this.dlgList.length == 0) {
            this.setAntiContactLayerActive(true);
            GameState.isPauseGame = true;
        }
        let dlg = cc.instantiate(prefab);
        let newPos = cc.v2(pos.x, pos.y);
        parent.addChild(dlg);
        dlg.setPosition(newPos);
        this.antiContactLayer.setPosition(newPos);
        dlg.setScale(0.5);
        dlg.runAction(cc.scaleTo(0.3, 1, 1));

        this.dlgList.push(dlg);

        return dlg;
    }

    /**
     * 关闭特定窗口
     * @param {*窗口} dlg
     */
    removeDlg(dlg) {
        let idx = this.dlgList.indexOf(dlg);
        if (idx > -1) {
            this.dlgList.splice(idx, 1);
        }

        dlg.destroy();

        if (this.dlgList.length == 0) {
            this.setAntiContactLayerActive(false);

            GameState.isPauseGame = false;
        }

        if (this.antiContactLayer != null) {
            this.antiContactLayer.removeFromParent();
            this.antiContactLayer.destroy();
            this.antiContactLayer = null;
        }
    }


    /**
     * 关闭最上层窗口
     */
    popDlg() {
        let idx = this.dlgList.length - 1;

        let dlg = this.dlgList[idx];

        if (dlg != null) {
            dlg.destroy();
        }

        this.dlgList.splice(idx, 1);

        if (this.dlgList.length == 0) {

            this.setAntiContactLayerActive(false);

            GameState.isPauseGame = false;
        }
    }

    /**
     * 关闭所有窗口，一般在切换场景时调用
     */
    removeAllDlgs() {
        for (let i = 0; i < this.dlgList.length; i++) {
            let dlg = this.dlgList[i];

            if (dlg != null) {
                dlg.destroy();
            }
        }

        if (this.antiContactLayer != null) {
            this.antiContactLayer.removeFromParent();
            this.antiContactLayer.destroy();
            this.antiContactLayer = null;
        }

        GameState.isPauseGame = false;
    }


    // update (dt) {},

    /**
     * 设置防触层活性
     * @param isActive
     */
    setAntiContactLayerActive(isActive: boolean) {
        if (isActive) {
            if (this.antiContactLayer == null) {
                this.antiContactLayer = cc.instantiate(this.antiContactLayerPrefab);
                this.uiRoot.addChild(this.antiContactLayer);
            }
            this.antiContactLayer.active = true;
        } else {
            if (this.antiContactLayer != null) {
                this.antiContactLayer.active = false;
            }
        }
    }
}