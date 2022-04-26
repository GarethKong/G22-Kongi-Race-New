import ccclass = cc._decorator.ccclass;
import SpriteFrame = cc.SpriteFrame;

@ccclass
export default class Utilities {
    static lasttime = 0;

    static setLastTime() {
        var d = new Date();
        var n = d.getTime();
        this.lasttime = n;
    }

    static checkInterval() {
        var d = new Date();
        var n = d.getTime();
        return (n - this.lasttime) > 700;
    }


    // 显示当前截图
    // 其实也可以直接用rendertexture来作为SpriteFrame的纹理
    static showTexture(spFrame, dataUrl) {
        if (!spFrame) {
            console.warn("Need to add a sprite component");
            return;
        }
        var img = new Image();
        img.src = dataUrl;
        img.onload = function () {
            var texture = new cc.Texture2D();
            texture.initWithElement(img);
            texture.handleLoadedTexture();
            spFrame.spriteFrame = new cc.SpriteFrame(texture);
        }
    }

    //preload resource
    static preloadRes(imagepath: string) {
        cc.resources.preload("iconSprite/" + imagepath, SpriteFrame);
        console.log("Preload data" + "iconSprite/" + imagepath);
    }

    static playAnimScore(swapNode, prefab, score, centerX, centerY) {
        // let animNode = PoolManager.instance.getNode(prfb, this.node);

        let animNode = cc.instantiate(prefab);
        animNode.getChildByName("rootContent").getChildByName("txt").getComponent(cc.Label).string = "+" + score;
        animNode.position = cc.v3(centerX, centerY + 20, 0);
        animNode.parent = swapNode;

        let anim = animNode.getComponent(cc.Animation);

        if (anim) {
            anim.node.active = true;
            anim.play(void 0, 0);
            anim.once(cc.Animation.EventType.FINISHED, function () {
                animNode.removeFromParent(true);
                // PoolManager.instance.putNode(anim.node);
                // anim.node.active = false
            });
        }
    }

    static convertJsonToObject(objectString: string) {
        return JSON.parse(objectString);
    }

    static deepCopy(obj) {
        var copy;

        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.deepCopy(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.deepCopy(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    }

    static LoadPrf(assetPath): Promise<cc.Prefab> {
        return new Promise(function (c, e) {
            Utilities.safeLoadRes(assetPath, cc.Prefab, (resource) => {
                c(resource);
            });
        })
    }

    static LoadSpriteFrame(assetPath): Promise<cc.SpriteFrame> {
        return new Promise(function (c, e) {
            Utilities.safeLoadRes(assetPath, cc.SpriteFrame, (resource) => {
                c(resource);
            });
        })
    }

    private static safeLoadRes(url: string, type: typeof cc.Asset, completeCallback: (resource: any) => void) {
        let self = this;
        cc.loader.loadRes(url, type, (err, res) => {
            if (err) {
                cc.log(url + err)
                setTimeout(() => {
                    self.safeLoadRes(url, type, completeCallback)
                }, 0.5)
            } else {
                if (completeCallback) {
                    completeCallback(res);
                }
            }
        });
    }
};

