// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CrossItem from "./CrossItem";

const {ccclass, property} = cc._decorator;

export class CrossAppData {
    appIcon: string = "";
    swichAppId: string = "";

    constructor(appIcon: string, swichAppID: string) {
        this.appIcon = appIcon;
        this.swichAppId = swichAppID;
    }
}

@ccclass
export default class CrossPanel extends cc.Component {

    @property(cc.Node)
    private listCross: cc.Node = null;

    @property(cc.Prefab)
    private crossPrefab: cc.Prefab = null;

    listAppCross: CrossAppData[] = null;

    onLoad() {
        this.initListData();
    }

    initListData() {
        this.listAppCross = [];
        this.listAppCross.push(new CrossAppData("pinball", "430779692035478"));
        this.listAppCross.push(new CrossAppData("kg1", "7037554929620212"));
        this.listAppCross.push(new CrossAppData("cleardot", "220547386930843"));
        this.listAppCross.push(new CrossAppData("arrowmaster", "996977144429332"));

        for (let i = 0; i < this.listAppCross.length; ++i) { // spawn items, we only need to do this once
            let item = cc.instantiate(this.crossPrefab);
            this.listCross.addChild(item);
            item.getComponent(CrossItem).setCrossItem(this.listAppCross[i]);
        }
    }
}


