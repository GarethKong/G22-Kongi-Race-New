// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import FBGlobal from "../facebook/FBGlobal";
import {CrossAppData} from "./CrossPanel";
import resources = cc.resources;
import Utilities from "../Ultilities/Utilities";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CrossItem extends cc.Component {
    @property(cc.Sprite)
    private iconAvatar: cc.Sprite = null;

    @property(cc.Node)
    private selfButton: cc.Node = null;

    start() {
        this.selfButton.on('click', this.OnSelectSwitch, this);
    }

    private crossAppData: CrossAppData;

    setCrossItem(crossAppData: CrossAppData) {
        let self = this;
        this.crossAppData = crossAppData;
        Utilities.LoadSpriteFrame("Cross/" + this.crossAppData.appIcon).then((spFrame) => {
            self.iconAvatar.spriteFrame = spFrame;
        });
    }

    private OnSelectSwitch() {
        FBGlobal.instance.switchAppAsync(this.crossAppData.swichAppId);
    }
}
