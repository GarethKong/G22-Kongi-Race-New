import ccclass = cc._decorator.ccclass;

export enum BuildType {
    LOCAL,
    FACEBOOK
}

export default class GameConfig {
    static REVIVE_COUNT_DOWN = 6;
    static TOTAL_ITEM_SHOP = 21;
    static IMAGE_SIZE_SHOP_ITEM = 80;
    static SKINS = [];
    static BUILD_TYPE = BuildType.FACEBOOK;

    //First item is empty to avoid index 0 when load image
    static listImageSource = ["", "default", "aliens", "bat", "cat", "chef", "clown", "cowboy", "giraffe", "hair", "headphone", "koala", "magic_hat", "monkey", "mouse", "pig", "pirate", "rabbit", "reindeer", "sheep", "viking", "witch_hat"];
}
