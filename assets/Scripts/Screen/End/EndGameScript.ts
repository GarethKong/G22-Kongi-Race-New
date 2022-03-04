import DatabaseManager from "../../Common/DatabaseManager";
import FBGlobal from "../../facebook/FBGlobal";
import FBConfig from "../../Config/FBConfig";
import EndGamePlayerItem from "./EndGamePlayerItem";
import SoundManager from "../../Ultilities/SoundManager";
import ScreenManager, {ScreenConfig} from "../../Common/ScreenManager";
import GameManager from "../../Gameplay/GameManager";
import LoadingUI from "../../component/LoadingUI";

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

const {ccclass, property} = cc._decorator;

@ccclass
export default class EndGameScript extends cc.Component {

    @property({displayName: 'spacing'})
    private spacing: number = 0; // space between each item

    @property({displayName: 'spawnCount'})
    private spawnCount: number = 0; // how many items we actually spawn

    @property({displayName: 'bufferZone'})
    private bufferZone: number = 0; // when item is away from bufferZone, we relocate it

    @property(cc.ScrollView)
    private listConnectedPlayer: cc.ScrollView = null!;

    @property(cc.Label)
    private lblLastScore: cc.Label = null!;

    @property(cc.Node)
    private content: cc.Node = null!;

    @property(cc.Prefab)
    private itemPrefab: cc.Prefab = null!;

    @property(cc.Button)
    private btnShare: cc.Button = null!;

    @property(cc.Button)
    private btnClose: cc.Button = null!;

    @property(cc.Button)
    private btnShop: cc.Button = null!;

    @property(cc.Button)
    private btnInviteFriend: cc.Button = null!;

    private items: cc.Node[] = null!;
    private updateTimer: number = 0;
    private updateInterval: number = 0;
    private lastContentPosY: number = 0;
    private listRankSize: number = 0;

    private isDraw: boolean = false;

    private itemTemplate: cc.Node = null!;
    private indexPlayer: number = 1;


    static _ins: EndGameScript;

    static get instance(): EndGameScript {
        return this._ins || new EndGameScript;
    }

    start() {
        this.loadData();
    }

    onLoad() {
        this.btnClose.node.on('click', this.onClose, this);
        this.btnShare.node.on('click', this.onShare, this);
        this.btnShop.node.on('click', this.onShop, this);
        this.btnInviteFriend.node.on('click', this.onPlayWithFriend, this);
        EndGameScript._ins = this;
        this.items = []; // array to store spawned items
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
        this.itemTemplate = cc.instantiate(this.itemPrefab);
    }

    loadData(): void {
        let self = this;
        console.log('BINH Goi r nhe hehe');
        this.initialize(function (entries: any) {
            self.content.removeAllChildren();
            let listData = self.convertDateToPlayer(entries);
            self.listRankSize = listData.length;
            self.updateRankingUIView(listData);
        });
        this.lblLastScore.string = DatabaseManager.getLastScore() + "";
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

    updateRankingUIView(entries: PlayerConnectedData[]): void {
        let self = this;
        this.content.height = entries.length * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
        for (let i = 0; i < entries.length; ++i) {
            var item = cc.instantiate(this.itemPrefab);
            this.content.addChild(item);
            item.setPosition(0, -item.height * (0.5 + i) * 0.5 - this.spacing * (i + 1));
            let rankItem = item.getComponent(EndGamePlayerItem)! as EndGamePlayerItem;
            rankItem.initItem(entries[i], i, self.inviteFriend.bind(this));
            console.log("already comehere2" + entries[i].name);
            this.items.push(item);
            console.log('Size list la' + this.items.length + 'height' + this.content.height);
        }
        console.log("already comehere3");
        this.scrollToFixedPosition();
    }

    private convertDateToPlayer(datas): PlayerConnectedData[] {
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

    onClose() {
        FBGlobal.instance.haptic();
        SoundManager.Instance.PlayButtonSound();
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Home);
    }

    onShare() {
        SoundManager.Instance.PlayButtonSound();
        let AVSuccessCb = function () {
        };
        let AVFailedCb = function () {
        };
        // Here `this` is referring to the component
        FBGlobal.instance.shareGame();
    }

    onShop(): void {
        FBGlobal.instance.haptic();
        SoundManager.Instance.PlayButtonSound();
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Shop);
    }

    onPlayWithFriend(): void {
        let self = this;
        let AVSuccessCb = function () {
            self.playTheGame();
        };
        let AVFailedCb = function () {
            self.playTheGame();
        };
        // Here `this` is referring to the component
        FBGlobal.instance.inviteAsync(AVSuccessCb, AVFailedCb)
    }

    playTheGame() {
        FBGlobal.instance.haptic();
        SoundManager.Instance.PlayButtonSound();
        ScreenManager.instance.onShowScreenByName(ScreenConfig.Game);
        GameManager.Instance.StartNewGame();
        this.node.active = false;
    }

    show(): void {
        this.isDraw = true;
    }

    hide(): void {
        this.isDraw = false;
        this.node.active = false;
    }

    update(dt: number) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        this.updateTimer = 0;
        let items = this.items;
        let buffer = this.bufferZone;
        let isDown = this.content.y < this.lastContentPosY; // scrolling direction
        let offset = (this.itemTemplate.height + this.spacing) * items.length;
        for (let i = 0; i < items.length; ++i) {
            let viewPos = this.getPositionInView(items[i]);

            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && items[i].y + offset < 0) {
                    items[i].y = items[i].y + offset;
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && items[i].y - offset > -this.content.height) {
                    items[i].y = items[i].y - offset;
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.content.y;
    }

    getPositionInView(item: any): cc.Vec2 { // get item position in scrollview's node space
        if (item != null && item.parent != null) {
            let worldPos = item.parent.convertToWorldSpaceAR(item.position);
            let viewPos = this.listConnectedPlayer.node.convertToNodeSpaceAR(worldPos);
            return viewPos;
        } else {
            return cc.v2(0, 0);
        }
    }

    scrollToFixedPosition(): void {
        this.listConnectedPlayer.scrollToOffset(cc.v2(0, (this.indexPlayer - 2) * (this.itemTemplate.height + this.spacing)), 2, false);
    }
}
