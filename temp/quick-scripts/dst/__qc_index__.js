
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Common/DatabaseManager');
require('./assets/Scripts/Common/DialogManager');
require('./assets/Scripts/Common/GameState');
require('./assets/Scripts/Common/ScreenManager');
require('./assets/Scripts/Gameplay/AutoMoving');
require('./assets/Scripts/Gameplay/BlockScript');
require('./assets/Scripts/Gameplay/GameManager');
require('./assets/Scripts/Gameplay/PlayerScript');
require('./assets/Scripts/Popup/EndGamePopup');
require('./assets/Scripts/Screen/Home/HomePlayerItem');
require('./assets/Scripts/Screen/Home/HomePlayerScript');
require('./assets/Scripts/Screen/Home/HomeScript');
require('./assets/Scripts/Ultilities/CustomEventManager');
require('./assets/Scripts/Ultilities/NumberUltilities');
require('./assets/Scripts/Ultilities/SimplePool');
require('./assets/Scripts/Ultilities/SoundManager');
require('./assets/Scripts/facebook/FBConfig');
require('./assets/Scripts/facebook/FBGlobal');

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