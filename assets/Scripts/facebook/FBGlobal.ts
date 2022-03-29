import FBConfig from "../Config/FBConfig";
import Component = cc.Component;
import ccclass = cc._decorator.ccclass;
import SoundManager from "../Ultilities/SoundManager";
import GameState from "../Common/GameState";

@ccclass
export default class FBGlobal extends Component {

    static _ins: FBGlobal

    static get instance(): FBGlobal {
        return this._ins || new FBGlobal;
    }

    onLoad() {
        FBGlobal._ins = this;
    }

    //1. ADS SECTION
    // loadBannerAds -Banner don't need show
    // loadAdsInterestial - showAdsInterestial
    // loadVideoAdsFirst - showAdsVideo
    public loadBannerAds() {
        if (typeof FBInstant === "undefined") return;
        if (!FBConfig.isSupportBannerAds()) {
            return;
        }
        FBInstant.loadBannerAdAsync(
            FBConfig.bannerId
        ).then(() => {
            console.log('success');
        });
    }

    public loadAdsInterestial() {
        if (typeof FBInstant === "undefined") return;
        if (!FBConfig.isSupportInterstitial()) {
            return;
        }
        FBInstant.getInterstitialAdAsync(
            FBConfig.interstitialId
        )
            .then(function (interstitial: any) {
                console.log("load inter ads đã gọi");
                FBConfig.preloadedInterstitial = interstitial;
                return interstitial.loadAsync();
            })
            .catch(function (err: any) {
                console.error("Interstitial failed to preload: " + err.message);
            });
    }

    public loadVideoAdsFirst() {
        if (typeof FBInstant === "undefined") return;
        if (!FBConfig.isSupportRewardVideo()) {
            return;
        }
        FBInstant.getRewardedVideoAsync(
            FBConfig.videoAdsID
        )
            .then(function (rewarded: any) {
                console.log("Video" + FBConfig.preloadedRewardedVideo);
                FBConfig.preloadedRewardedVideo = rewarded;
                return rewarded.loadAsync();
            })
            .catch(function (err: any) {
                console.error("Rewarded video failed to preload: " + err.message);
                FBConfig.numberTriedAds++;
                if (FBConfig.numberTriedAds <= 10) {
                    FBGlobal.instance.loadVideoAdsFirst();
                }
            });
    }

    public showAdsInterestial() {
        if (FBConfig.preloadedInterstitial == null) {
            return;
        }
        console.log("Show ads inter already");
        FBConfig.preloadedInterstitial
            .showAsync()
            .then(function () {
                console.log("show inter ads đã gọi");
            })
            .catch(function (e: any) {
                FBConfig.numberTriedAds++;
                if (FBConfig.numberTriedAds <= 10) {
                    console.log('Reload inter ads at init r nhe')
                    FBGlobal.instance.loadAdsInterestial();
                }
            });
    }

    public showAdsVideo(onCLoseCallback: any, onFailedCallBack: any, arg: any) {
        console.log("Video" + FBConfig.preloadedRewardedVideo);
        SoundManager.Instance.pauseBGM();
        if (FBConfig.preloadedRewardedVideo === null) {
            FBGlobal.instance.loadVideoAdsFirst()
        }
        FBConfig.preloadedRewardedVideo
            .showAsync()
            .then(function () {
                SoundManager.Instance.resumeBGM();
                onCLoseCallback(arg);
                FBGlobal.instance.loadVideoAdsFirst()
            })
            .catch(function (e) {
                SoundManager.Instance.resumeBGM();
                console.error(e.message);
                onFailedCallBack("error");
                if (FBConfig.numberTriedAds <= 10) {
                    console.log('Reload video ads r nhe')
                    FBGlobal.instance.loadVideoAdsFirst()
                    FBConfig.numberTriedAds++;
                }
            });
    }

    //2.SHARE- INVITE - TOURNAMENT SECTION
    // inviteAsync - Invite and play with friends
    // shareGame - Share wall with image
    // postSessionScore - Tournament function
    public inviteAsync(onSuccessCallback: any, onFailedCallBack: any) {
        if (typeof FBInstant === 'undefined'){
            onSuccessCallback();
            return;
        }
        let self = this;
        FBInstant.context
            .chooseAsync()
            .then(function () {
                FBInstant.updateAsync({
                    action: 'CUSTOM',
                    cta: 'Play',
                    image: FBConfig.getBase64Image(),
                    text: {
                        default: "Come and get new challenge!!",
                        localizations: {}
                    },
                    template: 'pass_score',
                    data: {myReplayData: '...'},
                    strategy: 'IMMEDIATE',
                    notification: 'NO_PUSH',
                }).then(() => {
                    console.log('invite then already');
                    onSuccessCallback();
                }).catch(function (e) {
                    console.log('catch invite error ' + e);
                    onFailedCallBack();
                });
            }).catch(function (e) {
            onFailedCallBack();
        });
    }

    payload: FBInstant.CustomUpdatePayload = {
        action: 'CUSTOM',
        text: "Come and play with us!",
        // text: content,
        cta: "Play",
        // cta: ctaText,
        image: FBConfig.getBase64Image(),
        template: 'play_turn',
        // strategy: 'IMMEDIATE',
        data: {myReplayData: '...'},
        notification: 'PUSH',
    };

    public sendInvite(onSuccessCallback: any, onFailedCallBack: any, playerId: string) {
        let self = this;
        FBInstant.context
            .createAsync(playerId)
            .then(function () {
                console.log(FBInstant.context.getID());
                FBInstant.updateAsync(self.payload).then(() => {
                    console.log('invite then already');
                    onSuccessCallback();
                }).catch(function (e) {
                    console.log('catch invite error ' + e);
                    onFailedCallBack();
                });
            });
    }

    public shareGame(callbackSuccess ?: any, onFailedCallBack ?: any) {
        if (typeof FBInstant === 'undefined') return;
        console.log('Share game already');
        let self = this;
        //if (typeof FBInstant === 'undefined') return;
        // var successCallback = params.successCallback;
        // var failCallback = params.failCallback;
        FBInstant.shareAsync({
            image: FBConfig.getBase64Image(),
            intent: 'SHARE',
            text: 'Come and play with us!',
            data: {myReplayData: '...'},
        }).then(() => {
            callbackSuccess();
            console.log('Share game already1');
        }).catch((error: any) => {
            onFailedCallBack();
            console.log('Share game already fail' + error);
        });
    }

    public postSessionScore(num: any) {
        if (typeof FBInstant === 'undefined') return;
        FBInstant.postSessionScoreAsync(num);
    }

    //3. COMMON SECTION
    // createShortcutAsync - Create game shortcut in section after gameover
    // haptic - Haptic function
    public createShortcutAsync() {
        if (typeof FBInstant === "undefined") return;
        FBInstant.canCreateShortcutAsync()
            .then(function (canCreateShortcut: any) {
                if (canCreateShortcut) {
                    FBInstant.createShortcutAsync()
                        .then(function () {
                            console.log("create shortcut");
                        })
                        .catch(function () {
                            console.log("create shortcut fail");
                        });
                }
            });
    }

    public haptic() {
        if (typeof FBInstant === "undefined") return;
        if (GameState.isVibrateOn == true) {
            //   FBInstant.performHapticFeedbackAsync();
        }
    }

    //3. COMMON SECTION
    // createShortcutAsync - Create game shortcut in section after gameover
    // haptic - Haptic function
    public getFBScore(callback) {
        if (typeof FBInstant === "undefined") return;
        FBConfig.fbName = FBInstant.player.getName();
        FBConfig.fbPhoto = FBInstant.player.getPhoto();
        FBInstant.player
            .getDataAsync(["metaData"])
            .then((data) => {
                let converted = JSON.parse(data['metaData']);
                FBConfig.fbScore = converted['bestScore'];
                if (callback) {
                    callback(data['metaData']);
                }
            })
            .catch((error: any) => {
                console.log("Check score fb error" + error);
            });
    }

    public saveFBData(dataString) {
        if (typeof FBInstant === "undefined") return;
        FBInstant.player.setDataAsync({metaData: dataString})
            .then(() => {
                console.log("save score to fb player success");
            })
            .catch(error => {
                console.log("Error save fb" + error.message);
            });
        this.saveBestScore(dataString);
    }

    public saveBestScore(dataString) {
        let strNameAndPhoto = FBConfig.fbName + "_" + FBConfig.fbPhoto;
        let leaderboardName = "my_leaderboard." + FBInstant.context.getID();
        FBInstant.getLeaderboardAsync(
            leaderboardName
        )
            .then((leaderboard) => {
                console.log(" save score to fb successed on setScoreAsync");
                return leaderboard.setScoreAsync(dataString["bestScore"], strNameAndPhoto);
            })
            .then((entry) => {
                console.log("save score to fb successed get entry");
            })
            .catch((error) => {
                console.log("Save scrore ranking error" + error);
            });
    }

    //4. GET PLAYER CONNECTED SECTION
    // getConnectedPlayersInfo - Get a list info user connect to player
    public getConnectedPlayersInfo(onSuccessCallback: any) {
        console.log("getConnectedPlayersInfo");
        FBInstant.player.getConnectedPlayersAsync()
            .then(function (players: FBInstant.ConnectedPlayer[]) {
                console.log("TEST" + players.map(function (player) {
                    console.log("id" + player.getID() + "photo" + player.getPhoto() + "name" + player.getName());
                    // return {
                    //     id: player.getID(),
                    //     name: player.getName(),
                    // }
                }));
                onSuccessCallback(players);
            });
    }
}
