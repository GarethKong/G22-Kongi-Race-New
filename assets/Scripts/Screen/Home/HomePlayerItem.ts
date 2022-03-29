import player = FBInstant.player;
import assetManager = cc.assetManager;
import HomePlayerScript from "./HomePlayerScript";
import resources = cc.resources;
import SpriteFrame = cc.SpriteFrame;

const {ccclass, property} = cc._decorator;

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
export default class HomePlayerItem extends cc.Component {

    @property(cc.Sprite)
    private avatar: cc.Sprite = null;

    @property(cc.Label)
    private lblName: cc.Label = null;

    @property(cc.Button)
    private btnPlayWithFriend: cc.Button = null;

    @property(cc.Sprite)
    private btnSprite: cc.Sprite = null;

    currentCallback: any;
    currentPlayer: PlayerConnectedData;

    playerIndex: number;

    onLoad() {
        // this.pathNode.zIndex = - 1;
    }

    init(index: number, data: PlayerConnectedData, inviteFriendCb: any): void {
        this.playerIndex = index;
        this.currentPlayer = data;
        this.currentCallback = inviteFriendCb;
        this.updateItem(this.currentPlayer);
    }

    updateItem(data: PlayerConnectedData): void {
        let that = this;
        if (data.name != "" && data.name != undefined) {
            this.lblName.string = data.name;
        }
        if (data.avatar != "" && data.avatar != undefined) {
            cc.loader.load({url: data.avatar, type: 'png'}, function (err, img) {
                if (err) {
                    console.log("Load image failed");
                } else {
                    that.avatar.spriteFrame = new cc.SpriteFrame(img);
                }
            });
        }

        if (data.isSelf == false) {
            console.log("Khong phai minh"+ data.isSelf);
            cc.loader.loadRes("EndGame/btnPlay", cc.SpriteFrame, function (err, spriteFrame) {
                that.btnSprite.spriteFrame = spriteFrame;
            });
        } else {
            console.log(" phai minh"+ data.isSelf);
            cc.loader.loadRes("EndGame/btnShare", cc.SpriteFrame, function (err, spriteFrame) {
                that.btnSprite.spriteFrame = spriteFrame;
            });
        }
        this.btnPlayWithFriend.node.on('click', this.handleButtonClick, this);
    }

    handleButtonClick() {
        this.currentCallback(this.currentPlayer.playerID, this.currentPlayer.isSelf);
    }
}
