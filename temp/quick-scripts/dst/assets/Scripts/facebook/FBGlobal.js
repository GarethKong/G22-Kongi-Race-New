
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/facebook/FBGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZhY2Vib29rL0ZCR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUNsQyxJQUFPLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBQ2hDLElBQU8sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLDJEQUFzRDtBQUN0RCxpREFBNEM7QUFHNUM7SUFBc0MsNEJBQVM7SUFBL0M7UUFBQSxxRUFvUkM7UUFsSUcsYUFBTyxHQUFrQztZQUNyQyxNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLGlCQUFpQjtZQUNqQixHQUFHLEVBQUUsTUFBTTtZQUNYLGdCQUFnQjtZQUNoQixLQUFLLEVBQUUsa0JBQVEsQ0FBQyxjQUFjLEVBQUU7WUFDaEMsUUFBUSxFQUFFLFdBQVc7WUFDckIseUJBQXlCO1lBQ3pCLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUM7WUFDM0IsWUFBWSxFQUFFLE1BQU07U0FDdkIsQ0FBQzs7SUF1SE4sQ0FBQztpQkFwUm9CLFFBQVE7SUFJekIsc0JBQVcsb0JBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxVQUFRLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksVUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFDeEMsMENBQTBDO0lBQzFDLG1DQUFtQztJQUM1QixnQ0FBYSxHQUFwQjtRQUNJLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVztZQUFFLE9BQU87UUFDN0MsSUFBSSxDQUFDLGtCQUFRLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUNoQyxPQUFPO1NBQ1Y7UUFDRCxTQUFTLENBQUMsaUJB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Q0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDOztJQW5SZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9SNUI7SUFBRCxlQUFDO0NBcFJELEFBb1JDLENBcFJxQyxTQUFTLEdBb1I5QztrQkFwUm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRkJDb25maWcgZnJvbSBcIi4vRkJDb25maWdcIjtcbmltcG9ydCBDb21wb25lbnQgPSBjYy5Db21wb25lbnQ7XG5pbXBvcnQgY2NjbGFzcyA9IGNjLl9kZWNvcmF0b3IuY2NjbGFzcztcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL1VsdGlsaXRpZXMvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi9Db21tb24vR2FtZVN0YXRlXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGQkdsb2JhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgX2luczogRkJHbG9iYWxcblxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogRkJHbG9iYWwge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBGQkdsb2JhbDtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEZCR2xvYmFsLl9pbnMgPSB0aGlzO1xuICAgIH1cblxuICAgIC8vMS4gQURTIFNFQ1RJT05cbiAgICAvLyBsb2FkQmFubmVyQWRzIC1CYW5uZXIgZG9uJ3QgbmVlZCBzaG93XG4gICAgLy8gbG9hZEFkc0ludGVyZXN0aWFsIC0gc2hvd0Fkc0ludGVyZXN0aWFsXG4gICAgLy8gbG9hZFZpZGVvQWRzRmlyc3QgLSBzaG93QWRzVmlkZW9cbiAgICBwdWJsaWMgbG9hZEJhbm5lckFkcygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGQkluc3RhbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICAgICAgaWYgKCFGQkNvbmZpZy5pc1N1cHBvcnRCYW5uZXJBZHMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEZCSW5zdGFudC5sb2FkQmFubmVyQWRBc3luYyhcbiAgICAgICAgICAgIEZCQ29uZmlnLmJhbm5lcklkXG4gICAgICAgICkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEFkc0ludGVyZXN0aWFsKCkge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgICBpZiAoIUZCQ29uZmlnLmlzU3VwcG9ydEludGVyc3RpdGlhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRkJJbnN0YW50LmdldEludGVyc3RpdGlhbEFkQXN5bmMoXG4gICAgICAgICAgICBGQkNvbmZpZy5pbnRlcnN0aXRpYWxJZFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaW50ZXJzdGl0aWFsOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgaW50ZXIgYWRzIMSRw6MgZ+G7jWlcIik7XG4gICAgICAgICAgICAgICAgRkJDb25maWcucHJlbG9hZGVkSW50ZXJzdGl0aWFsID0gaW50ZXJzdGl0aWFsO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnRlcnN0aXRpYWwubG9hZEFzeW5jKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnI6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnRlcnN0aXRpYWwgZmFpbGVkIHRvIHByZWxvYWQ6IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRWaWRlb0Fkc0ZpcnN0KCkge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgICBpZiAoIUZCQ29uZmlnLmlzU3VwcG9ydFJld2FyZFZpZGVvKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBGQkluc3RhbnQuZ2V0UmV3YXJkZWRWaWRlb0FzeW5jKFxuICAgICAgICAgICAgRkJDb25maWcudmlkZW9BZHNJRFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmV3YXJkZWQ6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmlkZW9cIiArIEZCQ29uZmlnLnByZWxvYWRlZFJld2FyZGVkVmlkZW8pO1xuICAgICAgICAgICAgICAgIEZCQ29uZmlnLnByZWxvYWRlZFJld2FyZGVkVmlkZW8gPSByZXdhcmRlZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV3YXJkZWQubG9hZEFzeW5jKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnI6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZXdhcmRlZCB2aWRlbyBmYWlsZWQgdG8gcHJlbG9hZDogXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgRkJDb25maWcubnVtYmVyVHJpZWRBZHMrKztcbiAgICAgICAgICAgICAgICBpZiAoRkJDb25maWcubnVtYmVyVHJpZWRBZHMgPD0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2UubG9hZFZpZGVvQWRzRmlyc3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0Fkc0ludGVyZXN0aWFsKCkge1xuICAgICAgICBpZiAoRkJDb25maWcucHJlbG9hZGVkSW50ZXJzdGl0aWFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlNob3cgYWRzIGludGVyIGFscmVhZHlcIik7XG4gICAgICAgIEZCQ29uZmlnLnByZWxvYWRlZEludGVyc3RpdGlhbFxuICAgICAgICAgICAgLnNob3dBc3luYygpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93IGludGVyIGFkcyDEkcOjIGfhu41pXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgRkJDb25maWcubnVtYmVyVHJpZWRBZHMrKztcbiAgICAgICAgICAgICAgICBpZiAoRkJDb25maWcubnVtYmVyVHJpZWRBZHMgPD0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbG9hZCBpbnRlciBhZHMgYXQgaW5pdCByIG5oZScpXG4gICAgICAgICAgICAgICAgICAgIEZCR2xvYmFsLmluc3RhbmNlLmxvYWRBZHNJbnRlcmVzdGlhbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QWRzVmlkZW8ob25DTG9zZUNhbGxiYWNrOiBhbnksIG9uRmFpbGVkQ2FsbEJhY2s6IGFueSwgYXJnOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJWaWRlb1wiICsgRkJDb25maWcucHJlbG9hZGVkUmV3YXJkZWRWaWRlbyk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5JbnN0YW5jZS5wYXVzZUJHTSgpO1xuICAgICAgICBpZiAoRkJDb25maWcucHJlbG9hZGVkUmV3YXJkZWRWaWRlbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2UubG9hZFZpZGVvQWRzRmlyc3QoKVxuICAgICAgICB9XG4gICAgICAgIEZCQ29uZmlnLnByZWxvYWRlZFJld2FyZGVkVmlkZW9cbiAgICAgICAgICAgIC5zaG93QXN5bmMoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5JbnN0YW5jZS5yZXN1bWVCR00oKTtcbiAgICAgICAgICAgICAgICBvbkNMb3NlQ2FsbGJhY2soYXJnKTtcbiAgICAgICAgICAgICAgICBGQkdsb2JhbC5pbnN0YW5jZS5sb2FkVmlkZW9BZHNGaXJzdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLkluc3RhbmNlLnJlc3VtZUJHTSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBvbkZhaWxlZENhbGxCYWNrKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgaWYgKEZCQ29uZmlnLm51bWJlclRyaWVkQWRzIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWxvYWQgdmlkZW8gYWRzIHIgbmhlJylcbiAgICAgICAgICAgICAgICAgICAgRkJHbG9iYWwuaW5zdGFuY2UubG9hZFZpZGVvQWRzRmlyc3QoKVxuICAgICAgICAgICAgICAgICAgICBGQkNvbmZpZy5udW1iZXJUcmllZEFkcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vMi5TSEFSRS0gSU5WSVRFIC0gVE9VUk5BTUVOVCBTRUNUSU9OXG4gICAgLy8gaW52aXRlQXN5bmMgLSBJbnZpdGUgYW5kIHBsYXkgd2l0aCBmcmllbmRzXG4gICAgLy8gc2hhcmVHYW1lIC0gU2hhcmUgd2FsbCB3aXRoIGltYWdlXG4gICAgLy8gcG9zdFNlc3Npb25TY29yZSAtIFRvdXJuYW1lbnQgZnVuY3Rpb25cbiAgICBwdWJsaWMgaW52aXRlQXN5bmMob25TdWNjZXNzQ2FsbGJhY2s6IGFueSwgb25GYWlsZWRDYWxsQmFjazogYW55KSB7XG4gICAgICAgIGlmICh0eXBlb2YgRkJJbnN0YW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEZCSW5zdGFudC5jb250ZXh0XG4gICAgICAgICAgICAuY2hvb3NlQXN5bmMoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIEZCSW5zdGFudC51cGRhdGVBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ0NVU1RPTScsXG4gICAgICAgICAgICAgICAgICAgIGN0YTogJ1BsYXknLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogRkJDb25maWcuZ2V0QmFzZTY0SW1hZ2UoKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXCJDb21lIGFuZCBnZXQgbmV3IGNoYWxsZW5nZSEhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGl6YXRpb25zOiB7fVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3Bhc3Nfc2NvcmUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7bXlSZXBsYXlEYXRhOiAnLi4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5OiAnSU1NRURJQVRFJyxcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uOiAnTk9fUFVTSCcsXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZpdGUgdGhlbiBhbHJlYWR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhdGNoIGludml0ZSBlcnJvciAnICsgZSk7XG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbGVkQ2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBvbkZhaWxlZENhbGxCYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBheWxvYWQ6IEZCSW5zdGFudC5DdXN0b21VcGRhdGVQYXlsb2FkID0ge1xuICAgICAgICBhY3Rpb246ICdDVVNUT00nLFxuICAgICAgICB0ZXh0OiBcIkNvbWUgYW5kIHBsYXkgd2l0aCB1cyFcIixcbiAgICAgICAgLy8gdGV4dDogY29udGVudCxcbiAgICAgICAgY3RhOiBcIlBsYXlcIixcbiAgICAgICAgLy8gY3RhOiBjdGFUZXh0LFxuICAgICAgICBpbWFnZTogRkJDb25maWcuZ2V0QmFzZTY0SW1hZ2UoKSxcbiAgICAgICAgdGVtcGxhdGU6ICdwbGF5X3R1cm4nLFxuICAgICAgICAvLyBzdHJhdGVneTogJ0lNTUVESUFURScsXG4gICAgICAgIGRhdGE6IHtteVJlcGxheURhdGE6ICcuLi4nfSxcbiAgICAgICAgbm90aWZpY2F0aW9uOiAnUFVTSCcsXG4gICAgfTtcblxuICAgIHB1YmxpYyBzZW5kSW52aXRlKG9uU3VjY2Vzc0NhbGxiYWNrOiBhbnksIG9uRmFpbGVkQ2FsbEJhY2s6IGFueSwgcGxheWVySWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEZCSW5zdGFudC5jb250ZXh0XG4gICAgICAgICAgICAuY3JlYXRlQXN5bmMocGxheWVySWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coRkJJbnN0YW50LmNvbnRleHQuZ2V0SUQoKSk7XG4gICAgICAgICAgICAgICAgRkJJbnN0YW50LnVwZGF0ZUFzeW5jKHNlbGYucGF5bG9hZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZpdGUgdGhlbiBhbHJlYWR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhdGNoIGludml0ZSBlcnJvciAnICsgZSk7XG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbGVkQ2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaGFyZUdhbWUoY2FsbGJhY2tTdWNjZXNzID86IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coJ1NoYXJlIGdhbWUgYWxyZWFkeScpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vaWYgKHR5cGVvZiBGQkluc3RhbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIC8vIHZhciBzdWNjZXNzQ2FsbGJhY2sgPSBwYXJhbXMuc3VjY2Vzc0NhbGxiYWNrO1xuICAgICAgICAvLyB2YXIgZmFpbENhbGxiYWNrID0gcGFyYW1zLmZhaWxDYWxsYmFjaztcbiAgICAgICAgRkJJbnN0YW50LnNoYXJlQXN5bmMoe1xuICAgICAgICAgICAgaW1hZ2U6IEZCQ29uZmlnLmdldEJhc2U2NEltYWdlKCksXG4gICAgICAgICAgICBpbnRlbnQ6ICdTSEFSRScsXG4gICAgICAgICAgICB0ZXh0OiAnQ29tZSBhbmQgcGxheSB3aXRoIHVzIScsXG4gICAgICAgICAgICBkYXRhOiB7bXlSZXBsYXlEYXRhOiAnLi4uJ30sXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tTdWNjZXNzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hhcmUgZ2FtZSBhbHJlYWR5MScpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoYXJlIGdhbWUgYWxyZWFkeSBmYWlsJyArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3RTZXNzaW9uU2NvcmUobnVtOiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGQkluc3RhbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIEZCSW5zdGFudC5wb3N0U2Vzc2lvblNjb3JlQXN5bmMobnVtKTtcbiAgICB9XG5cbiAgICAvLzMuIENPTU1PTiBTRUNUSU9OXG4gICAgLy8gY3JlYXRlU2hvcnRjdXRBc3luYyAtIENyZWF0ZSBnYW1lIHNob3J0Y3V0IGluIHNlY3Rpb24gYWZ0ZXIgZ2FtZW92ZXJcbiAgICAvLyBoYXB0aWMgLSBIYXB0aWMgZnVuY3Rpb25cbiAgICBwdWJsaWMgY3JlYXRlU2hvcnRjdXRBc3luYygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGQkluc3RhbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICAgICAgRkJJbnN0YW50LmNhbkNyZWF0ZVNob3J0Y3V0QXN5bmMoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNhbkNyZWF0ZVNob3J0Y3V0OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FuQ3JlYXRlU2hvcnRjdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgRkJJbnN0YW50LmNyZWF0ZVNob3J0Y3V0QXN5bmMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHNob3J0Y3V0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgc2hvcnRjdXQgZmFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXB0aWMoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgRkJJbnN0YW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gICAgICAgIGlmIChHYW1lU3RhdGUuaXNWaWJyYXRlT24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gICBGQkluc3RhbnQucGVyZm9ybUhhcHRpY0ZlZWRiYWNrQXN5bmMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vMy4gQ09NTU9OIFNFQ1RJT05cbiAgICAvLyBjcmVhdGVTaG9ydGN1dEFzeW5jIC0gQ3JlYXRlIGdhbWUgc2hvcnRjdXQgaW4gc2VjdGlvbiBhZnRlciBnYW1lb3ZlclxuICAgIC8vIGhhcHRpYyAtIEhhcHRpYyBmdW5jdGlvblxuICAgIHB1YmxpYyBnZXRGQlNjb3JlKCkge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgICBGQkNvbmZpZy5mYk5hbWUgPSBGQkluc3RhbnQucGxheWVyLmdldE5hbWUoKTtcbiAgICAgICAgRkJDb25maWcuZmJQaG90byA9IEZCSW5zdGFudC5wbGF5ZXIuZ2V0UGhvdG8oKTtcbiAgICAgICAgRkJJbnN0YW50LnBsYXllclxuICAgICAgICAgICAgLmdldERhdGFBc3luYyhbXCJkYXRhXCJdKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIEZCQ29uZmlnLmZiU2NvcmUgPSBkYXRhW1wibWF4c2NvcmVcIl0gfHwgMDtcbiAgICAgICAgICAgICAgICBGQkNvbmZpZy5tZXRhZGF0YSA9IGRhdGFbXCJtZXRhZGF0YVwiXSB8fCAwO1xuICAgICAgICAgICAgICAgIC8vIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIC8vICAgICBjYWxsYmFjayhGQkNvbmZpZy5mYlNjb3JlLCBGQkNvbmZpZy5tZXRhZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVGQkRhdGEoZGF0YVN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIEZCSW5zdGFudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgICBGQkluc3RhbnQucGxheWVyLnNldERhdGFBc3luYyh7ZGF0YTogZGF0YVN0cmluZ30pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgRkJDb25maWcuZmJTY29yZSA9IGRhdGFTdHJpbmdbXCJiZXN0U2NvcmVcIl07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlIHNjb3JlIHRvIGZiIHBsYXllciBzdWNjZXNzZWRcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNhdmVCZXN0U2NvcmUoZGF0YVN0cmluZyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVCZXN0U2NvcmUoZGF0YVN0cmluZykge1xuICAgICAgICBsZXQgc3RyTmFtZUFuZFBob3RvID0gRkJDb25maWcuZmJOYW1lICsgXCJfXCIgKyBGQkNvbmZpZy5mYlBob3RvO1xuICAgICAgICBsZXQgbGVhZGVyYm9hcmROYW1lID0gXCJteV9sZWFkZXJib2FyZC5cIiArIEZCSW5zdGFudC5jb250ZXh0LmdldElEKCk7XG4gICAgICAgIEZCSW5zdGFudC5nZXRMZWFkZXJib2FyZEFzeW5jKFxuICAgICAgICAgICAgbGVhZGVyYm9hcmROYW1lXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChsZWFkZXJib2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIHNhdmUgc2NvcmUgdG8gZmIgc3VjY2Vzc2VkIG9uIHNldFNjb3JlQXN5bmNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlYWRlcmJvYXJkLnNldFNjb3JlQXN5bmMoZGF0YVN0cmluZ1tcImJlc3RTY29yZVwiXSwgc3RyTmFtZUFuZFBob3RvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmUgc2NvcmUgdG8gZmIgc3VjY2Vzc2VkIGdldCBlbnRyeVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYXZlIHNjcm9yZSByYW5raW5nIGVycm9yXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=