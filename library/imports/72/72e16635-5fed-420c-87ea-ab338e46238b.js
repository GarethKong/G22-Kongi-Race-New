"use strict";
cc._RF.push(module, '72e16Y1X+1CDIfqqzOORiOL', 'FBGlobal');
// Scripts/facebook/FBGlobal.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FBConfig_1 = require("./FBConfig");
var Component = cc.Component;
var ccclass = cc._decorator.ccclass;
var SoundManager_1 = require("../Ultilities/SoundManager");
var GameState_1 = require("../Common/GameState");
var FBGlobal = /** @class */ (function (_super) {
    __extends(FBGlobal, _super);
    function FBGlobal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.payload = {
            action: 'CUSTOM',
            text: "Come and play with us!",
            // text: content,
            cta: "Play",
            // cta: ctaText,
            image: FBConfig_1.default.getBase64Image(),
            template: 'play_turn',
            // strategy: 'IMMEDIATE',
            data: { myReplayData: '...' },
            notification: 'PUSH',
        };
        return _this;
    }
    FBGlobal_1 = FBGlobal;
    Object.defineProperty(FBGlobal, "instance", {
        get: function () {
            return this._ins || new FBGlobal_1;
        },
        enumerable: false,
        configurable: true
    });
    FBGlobal.prototype.onLoad = function () {
        FBGlobal_1._ins = this;
    };
    //1. ADS SECTION
    // loadBannerAds -Banner don't need show
    // loadAdsInterestial - showAdsInterestial
    // loadVideoAdsFirst - showAdsVideo
    FBGlobal.prototype.loadBannerAds = function () {
        if (typeof FBInstant === "undefined")
            return;
        if (!FBConfig_1.default.isSupportBannerAds()) {
            return;
        }
        FBInstant.loadBannerAdAsync(FBConfig_1.default.bannerId).then(function () {
            console.log('success');
        });
    };
    FBGlobal.prototype.loadAdsInterestial = function () {
        if (typeof FBInstant === "undefined")
            return;
        if (!FBConfig_1.default.isSupportInterstitial()) {
            return;
        }
        FBInstant.getInterstitialAdAsync(FBConfig_1.default.interstitialId)
            .then(function (interstitial) {
            console.log("load inter ads đã gọi");
            FBConfig_1.default.preloadedInterstitial = interstitial;
            return interstitial.loadAsync();
        })
            .catch(function (err) {
            console.error("Interstitial failed to preload: " + err.message);
        });
    };
    FBGlobal.prototype.loadVideoAdsFirst = function () {
        if (typeof FBInstant === "undefined")
            return;
        if (!FBConfig_1.default.isSupportRewardVideo()) {
            return;
        }
        FBInstant.getRewardedVideoAsync(FBConfig_1.default.videoAdsID)
            .then(function (rewarded) {
            console.log("Video" + FBConfig_1.default.preloadedRewardedVideo);
            FBConfig_1.default.preloadedRewardedVideo = rewarded;
            return rewarded.loadAsync();
        })
            .catch(function (err) {
            console.error("Rewarded video failed to preload: " + err.message);
            FBConfig_1.default.numberTriedAds++;
            if (FBConfig_1.default.numberTriedAds <= 10) {
                FBGlobal_1.instance.loadVideoAdsFirst();
            }
        });
    };
    FBGlobal.prototype.showAdsInterestial = function () {
        if (FBConfig_1.default.preloadedInterstitial == null) {
            return;
        }
        console.log("Show ads inter already");
        FBConfig_1.default.preloadedInterstitial
            .showAsync()
            .then(function () {
            console.log("show inter ads đã gọi");
        })
            .catch(function (e) {
            FBConfig_1.default.numberTriedAds++;
            if (FBConfig_1.default.numberTriedAds <= 10) {
                console.log('Reload inter ads at init r nhe');
                FBGlobal_1.instance.loadAdsInterestial();
            }
        });
    };
    FBGlobal.prototype.showAdsVideo = function (onCLoseCallback, onFailedCallBack, arg) {
        console.log("Video" + FBConfig_1.default.preloadedRewardedVideo);
        SoundManager_1.default.Instance.pauseBGM();
        if (FBConfig_1.default.preloadedRewardedVideo === null) {
            FBGlobal_1.instance.loadVideoAdsFirst();
        }
        FBConfig_1.default.preloadedRewardedVideo
            .showAsync()
            .then(function () {
            SoundManager_1.default.Instance.resumeBGM();
            onCLoseCallback(arg);
            FBGlobal_1.instance.loadVideoAdsFirst();
        })
            .catch(function (e) {
            SoundManager_1.default.Instance.resumeBGM();
            console.error(e.message);
            onFailedCallBack("error");
            if (FBConfig_1.default.numberTriedAds <= 10) {
                console.log('Reload video ads r nhe');
                FBGlobal_1.instance.loadVideoAdsFirst();
                FBConfig_1.default.numberTriedAds++;
            }
        });
    };
    //2.SHARE- INVITE - TOURNAMENT SECTION
    // inviteAsync - Invite and play with friends
    // shareGame - Share wall with image
    // postSessionScore - Tournament function
    FBGlobal.prototype.inviteAsync = function (onSuccessCallback, onFailedCallBack) {
        if (typeof FBInstant === 'undefined')
            return;
        var self = this;
        FBInstant.context
            .chooseAsync()
            .then(function () {
            FBInstant.updateAsync({
                action: 'CUSTOM',
                cta: 'Play',
                image: FBConfig_1.default.getBase64Image(),
                text: {
                    default: "Come and get new challenge!!",
                    localizations: {}
                },
                template: 'pass_score',
                data: { myReplayData: '...' },
                strategy: 'IMMEDIATE',
                notification: 'NO_PUSH',
            }).then(function () {
                console.log('invite then already');
                onSuccessCallback();
            }).catch(function (e) {
                console.log('catch invite error ' + e);
                onFailedCallBack();
            });
        }).catch(function (e) {
            onFailedCallBack();
        });
    };
    FBGlobal.prototype.sendInvite = function (onSuccessCallback, onFailedCallBack, playerId) {
        var self = this;
        FBInstant.context
            .createAsync(playerId)
            .then(function () {
            console.log(FBInstant.context.getID());
            FBInstant.updateAsync(self.payload).then(function () {
                console.log('invite then already');
                onSuccessCallback();
            }).catch(function (e) {
                console.log('catch invite error ' + e);
                onFailedCallBack();
            });
        });
    };
    FBGlobal.prototype.shareGame = function (callbackSuccess) {
        if (typeof FBInstant === 'undefined')
            return;
        console.log('Share game already');
        var self = this;
        //if (typeof FBInstant === 'undefined') return;
        // var successCallback = params.successCallback;
        // var failCallback = params.failCallback;
        FBInstant.shareAsync({
            image: FBConfig_1.default.getBase64Image(),
            intent: 'SHARE',
            text: 'Come and play with us!',
            data: { myReplayData: '...' },
        }).then(function () {
            callbackSuccess();
            console.log('Share game already1');
        }).catch(function (error) {
            console.log('Share game already fail' + error);
        });
    };
    FBGlobal.prototype.postSessionScore = function (num) {
        if (typeof FBInstant === 'undefined')
            return;
        FBInstant.postSessionScoreAsync(num);
    };
    //3. COMMON SECTION
    // createShortcutAsync - Create game shortcut in section after gameover
    // haptic - Haptic function
    FBGlobal.prototype.createShortcutAsync = function () {
        if (typeof FBInstant === "undefined")
            return;
        FBInstant.canCreateShortcutAsync()
            .then(function (canCreateShortcut) {
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
    };
    FBGlobal.prototype.haptic = function () {
        if (typeof FBInstant === "undefined")
            return;
        if (GameState_1.default.isVibrateOn == true) {
            //   FBInstant.performHapticFeedbackAsync();
        }
    };
    //3. COMMON SECTION
    // createShortcutAsync - Create game shortcut in section after gameover
    // haptic - Haptic function
    FBGlobal.prototype.getFBScore = function () {
        if (typeof FBInstant === "undefined")
            return;
        FBConfig_1.default.fbName = FBInstant.player.getName();
        FBConfig_1.default.fbPhoto = FBInstant.player.getPhoto();
        FBInstant.player
            .getDataAsync(["data"])
            .then(function (data) {
            FBConfig_1.default.fbScore = data["maxscore"] || 0;
            FBConfig_1.default.metadata = data["metadata"] || 0;
            // if (callback) {
            //     callback(FBConfig.fbScore, FBConfig.metadata);
            // }
        })
            .catch(function (error) {
        });
    };
    FBGlobal.prototype.saveFBData = function (dataString) {
        if (typeof FBInstant === "undefined")
            return;
        FBInstant.player.setDataAsync({ data: dataString })
            .then(function () {
            FBConfig_1.default.fbScore = dataString["bestScore"];
            console.log("save score to fb player successed");
        })
            .catch(function (error) {
            console.log(error.message);
        });
        this.saveBestScore(dataString);
    };
    FBGlobal.prototype.saveBestScore = function (dataString) {
        var strNameAndPhoto = FBConfig_1.default.fbName + "_" + FBConfig_1.default.fbPhoto;
        var leaderboardName = "my_leaderboard." + FBInstant.context.getID();
        FBInstant.getLeaderboardAsync(leaderboardName)
            .then(function (leaderboard) {
            console.log(" save score to fb successed on setScoreAsync");
            return leaderboard.setScoreAsync(dataString["bestScore"], strNameAndPhoto);
        })
            .then(function (entry) {
            console.log("save score to fb successed get entry");
        })
            .catch(function (error) {
            console.log("Save scrore ranking error" + error);
        });
    };
    var FBGlobal_1;
    FBGlobal = FBGlobal_1 = __decorate([
        ccclass
    ], FBGlobal);
    return FBGlobal;
}(Component));
exports.default = FBGlobal;

cc._RF.pop();