import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import HomePlayerItem from "./HomePlayerItem";
import FBGlobal from "../../facebook/FBGlobal";
import SoundManager from "../../Ultilities/SoundManager";
import ScreenManager, {ScreenConfig} from "../../Common/ScreenManager";
import FBConfig from "../../Config/FBConfig";
import GameManager from "../../Gameplay/GameManager";


export class PlayerConnectedData {
    playerID: number = 0;
    name: string = "";
    avatar: string = "";
    isSelf: boolean = false;

    constructor(playerID: number, avatar: string, name: string, isSelf: boolean) {
        this.playerID = playerID;
        this.name = name;
        this.avatar = avatar;
        this.isSelf = isSelf;
    }
}

@ccclass
export default class HomePlayerScript extends cc.Component {

    @property({displayName: 'spacing'})
    public spacing: number = 0; // space between each item

    @property({displayName: 'spawnCount'})
    public spawnCount: number = 0; // how many items we actually spawn

    @property({displayName: 'bufferZone'})
    public bufferZone: number = 0; // when item is away from bufferZone, we relocate it

    @property(cc.ScrollView)
    public svLevel: cc.ScrollView = null;

    @property(cc.Node)
    public content: cc.Node = null;

    @property(cc.Prefab)
    public itemPrefab: cc.Prefab = null;

    items: cc.Node[] = null;
    updateTimer: number = 0;
    updateInterval: number = 0;
    lastContentPosX: number = 0;
    listRankSize: number = 0;

    isDraw: boolean = false;

    itemTemplate: cc.Node = null;

    listPlayerConnected: PlayerConnectedData[] = null;


    static _ins: HomePlayerScript;

    static get instance(): HomePlayerScript {
        return this._ins || new HomePlayerScript;
    }


    onLoad() {
        HomePlayerScript._ins = this;
        this.items = []; // array to store spawned items
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosX = 0; // use this variable to detect if we are scrolling up or down
        this.itemTemplate = cc.instantiate(this.itemPrefab);
    }

    start() {
        this.loadData();
    }

    loadData(): void {
        let self = this;
        this.initialize(function (entries: any) {
            self.content.removeAllChildren();
            self.listPlayerConnected = self.convertDateToPlayer(entries);
            self.listRankSize = self.listPlayerConnected.length;
            self.updateRankingUIView(self.listPlayerConnected);
        });
    }

    convertDateToPlayer(datas): PlayerConnectedData[] {
        let listData = [];
        if (datas.length == 0) {
        } else {
            for (let i = 0; i < datas.length; i++) {
                let rank = datas[i].getID();
                let name = datas[i].getName();
                let avatar = datas[i].getPhoto();
                let player = new PlayerConnectedData(rank, avatar, name, name == FBConfig.fbName);
                listData.push(player);
            }
        }
        //Add them chinh nguoi choi vao random index cua array
        let indexCurrentPlayer = Math.floor(Math.random() * listData.length);
        listData.splice(indexCurrentPlayer, 0, new PlayerConnectedData(indexCurrentPlayer, FBConfig.fbPhoto, FBConfig.fbName, true));
        return listData;
    }

    initialize(callback: any): void {
        if (typeof FBInstant === 'undefined') {
            callback([]);
            return;
        }
        FBGlobal.instance.getConnectedPlayersInfo(function (players: FBInstant.ConnectedPlayer[]) {
            if (players) {
                if (callback) {
                    callback(players)
                    console.log('callback already');
                }
            } else {
                console.log(' no entries');
            }
        });
    }

    updateRankingUIView(entries) {
        let self = this;
        this.content.width = entries.length * (this.itemTemplate.width + this.spacing) + this.spacing; // get total content height
        for (let i = 0; i < entries.length; ++i) { // spawn items, we only need to do this once
            var item = cc.instantiate(this.itemPrefab);
            this.content.addChild(item);
            item.setPosition(item.width * (0.5 + i) + this.spacing * (i + 1), 0);
            item.getComponent(HomePlayerItem).init(i, entries[i], self.inviteFriend.bind(this));
            this.items.push(item);
            //console.log('Size list la' + this.items.length + 'height' + this.content.height);
        }
        this.scrollToFixedPosition();
    }

    show() {
        this.isDraw = true;
    }

    hide() {
        this.isDraw = false;
        this.node.active = false;
    }

    update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        this.updateTimer = 0;
        let items = this.items;
        let buffer = this.bufferZone;
        let isRight = this.content.x > this.lastContentPosX; // scrolling direction
        let offset = (this.itemTemplate.width + this.spacing) * items.length;
        for (let i = 0; i < items.length; ++i) {
            let viewPos = this.getPositionInView(items[i]);
            if (isRight) {
                //console.log('BINH: right');

                // if away from buffer zone and not reaching left of content
                if (viewPos.x > buffer && items[i].x - offset > 0) {
                    items[i].x = items[i].x - offset;
                    let item = items[i].getComponent(HomePlayerItem);
                    let itemId = item.playerIndex - items.length; // update item id
                    item.updateItem(this.listPlayerConnected[itemId]);
                    console.log('BINH: update item left', this.lastContentPosX);
                }
            } else {
                // if away from buffer zone and not reaching right of content
                //console.log('BINH: left');

                if (viewPos.x < -buffer && items[i].x + offset < this.content.width) {
                    items[i].x = items[i].x + offset;
                    let item = items[i].getComponent(HomePlayerItem);
                    let itemId = item.playerIndex + items.length;
                    item.updateItem(this.listPlayerConnected[itemId]);
                    console.log('BINH: update item right', this.lastContentPosX);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosX = this.content.x;
    }


    inviteFriend(playerID: number, isSelf: boolean): void {
        let self = this;
        if (isSelf == true) {
            let AVSuccessCb = function () {
                self.playTheGame();
            };
            let AVFailedCb = function () {
                self.playTheGame();
            };
            // Here `this` is referring to the component
            FBGlobal.instance.shareGame(AVSuccessCb);
        } else {
            let AVSuccessCb = function () {
                self.playTheGame();
            };
            let AVFailedCb = function () {
                self.playTheGame();
            };
            //FBGlobal.instance.inviteAsync(AVSuccessCb, AVFailedCb);
            FBGlobal.instance.sendInvite(AVSuccessCb, AVFailedCb, playerID + "");
            console.log('Goi r nhe hehe' + playerID + "is self" + isSelf);
        }
    }

    playTheGame(): void {
        if(GameManager.Instance.ReadyForPlaying == false) return;
        SoundManager.Instance.PlayButtonSound();
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Game);
        GameManager.Instance.StartNewGame();
        GameManager.Instance.showStatusBar(true);
    }


    getPositionInView(item) { // get item position in scrollview's node space
        let worldPos = item.parent.convertToWorldSpaceAR(item.position);
        let viewPos = this.svLevel.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    }

    scrollToFixedPosition() {
        this.svLevel.scrollToOffset(cc.v2(0, 0), 2, false);
    }
}
