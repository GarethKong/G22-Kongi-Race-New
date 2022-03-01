"use strict";
cc._RF.push(module, 'ed8ce+Wsh5MwLxZA3d8oK2Z', 'FBConfig');
// Scripts/facebook/FBConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FBConfig = /** @class */ (function () {
    function FBConfig() {
    }
    FBConfig.getBase64Image = function () {
        return 'data:image/webp;base64,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';
    };
    FBConfig.isSupportRewardVideo = function () {
        return FBInstant.getSupportedAPIs().indexOf('getRewardedVideoAsync') !== -1;
    };
    FBConfig.isSupportBannerAds = function () {
        return FBInstant.getSupportedAPIs().indexOf('loadBannerAdAsync') !== -1;
    };
    FBConfig.isSupportInterstitial = function () {
        return FBInstant.getSupportedAPIs().indexOf('getInterstitialAdAsync') !== -1;
    };
    FBConfig.fbScore = 0;
    FBConfig.metadata = 0;
    FBConfig.numberTriedAds = 0;
    //Ads
    FBConfig.preloadedInterstitial = null;
    FBConfig.preloadedRewardedVideo = null;
    FBConfig.videoAdsID = "";
    FBConfig.interstitialId = "";
    FBConfig.bannerId = "";
    return FBConfig;
}());
exports.default = FBConfig;

cc._RF.pop();