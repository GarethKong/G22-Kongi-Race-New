import player = FBInstant.player;
import assetManager = cc.assetManager;

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

    currentCallback: any;
    currentPlayer: PlayerConnectedData;


    playerIndex: number;

    onLoad() {
        // this.pathNode.zIndex = - 1;
    }

    init(data: PlayerConnectedData, index: number, inviteFriendCb: any): void {
        this.playerIndex = index;
        this.currentPlayer = data;

        this.updateItem(data);
    }

    updateItem(data:  PlayerConnectedData): void {
        let that = this;
        this.lblName.string = data.name;
        if (data.avatar != "" && data.avatar != undefined) {
            cc.loader.load({url: data.avatar, type: 'png'}, function (err, img) {
                if (err) {
                    console.log("Load image failed");
                } else {
                    that.avatar.spriteFrame = new cc.SpriteFrame(img);
                }
            });
        }
    }


    handleButtonClick() {
        this.currentCallback(this.currentPlayer.playerID, this.currentPlayer.isSelf);
    }

    onButtonPlayClick(): void {

    }
}
