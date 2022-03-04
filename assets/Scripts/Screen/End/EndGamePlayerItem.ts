import {PlayerConnectedData} from "./EndGameScript";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EndGamePlayerItem extends cc.Component {
    @property(cc.Label)
    rankLabel: cc.Label = null!;

    @property(cc.Label)
    nameLabel: cc.Label = null!;

    @property(cc.Sprite)
    avatarSprite: cc.Sprite = null!;

    @property(cc.Sprite)
    backgroundSprite: cc.Sprite = null!;

    @property(cc.Sprite)
    btnSprite: cc.Sprite = null!;

    @property(cc.Node)
    btnInviteFriend: cc.Node = null!;

    currentCallback: any;
    currentPlayer: PlayerConnectedData;


    // @property(Button)
    // btnPlay: Button = null!;

    initItem(data: PlayerConnectedData, index: number, inviteFriendCb: any) {
        let that = this;
        this.currentCallback = inviteFriendCb;
        this.currentPlayer = data;
        if (data.avatar != "" && data.avatar != undefined) {
            cc.loader.load({url: data.avatar, type: 'png'}, function (err, img) {
                if (err) {
                    console.log("Load image failed");
                } else {
                    that.avatarSprite.spriteFrame = new cc.SpriteFrame(img);
                }
            });
        }
        this.rankLabel.node.active = true;
        this.rankLabel.string = (index + 1).toString();
        this.nameLabel.string = data.name;
        if (index % 2 == 0) {
            cc.loader.loadRes("EndGame/backBlur1", cc.SpriteFrame, function (err, spriteFrame) {
                if (!err) {
                    that.backgroundSprite.spriteFrame = spriteFrame;
                }
            });
        } else {
            cc.loader.loadRes("EndGame/backBlur2", cc.SpriteFrame, function (err, spriteFrame) {
                if (!err) {
                    that.backgroundSprite.spriteFrame = spriteFrame;
                }
            });
        }
        if (data.isSelf == false) {
            cc.loader.loadRes("EndGame/btnPlay", cc.SpriteFrame, function (err, spriteFrame) {
                if (!err) {
                    that.btnSprite.spriteFrame = spriteFrame;
                }
            });
        } else {
            cc.loader.loadRes("EndGame/btnShare", cc.SpriteFrame, function (err, spriteFrame) {
                if (!err) {
                    that.btnSprite.spriteFrame = spriteFrame;
                }
            });
        }
        this.btnInviteFriend.on('click', this.handleButtonClick, this);
    }

    handleButtonClick() {
        this.currentCallback(this.currentPlayer.playerID, this.currentPlayer.isSelf);
    }
}
