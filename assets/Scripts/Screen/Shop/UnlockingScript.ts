// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


const {ccclass, property} = cc._decorator;

@ccclass
export default class ConfirmDlg extends cc.Component {

    @property(cc.Sprite)
    spItem: cc.Sprite = null;

    @property(cc.Label)
    lbTitle: cc.Label = null;

    @property(cc.Button)
    btnClose: cc.Button = null;

    @property(cc.Button)
    areaClose: cc.Button = null;

    @property(cc.Button)
    btnBuyItem: cc.Button = null;

    onLoad() {
        this.btnClose.node.on('click', this.onBtnClose, this);
        this.areaClose.node.on('click', this.onBtnClose, this);
        this.btnBuyItem.node.on('click', this.onBtnBuyItem, this);
    }

    init(id: number) {

    }

    onBtnBuyItem() {

    }

    onBtnClose() {

    }
}
