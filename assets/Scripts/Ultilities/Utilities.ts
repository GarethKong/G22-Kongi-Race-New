import ccclass = cc._decorator.ccclass;


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
};

