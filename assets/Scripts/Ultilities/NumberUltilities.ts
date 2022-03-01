// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NumberUltilities
{
    /**
     * Random dấu, trả về 1 (cho dương) và -1 (cho âm)
     */
    public static GetRandomSign(): number
    {
        return Math.random() >= 0.5 ? 1 : -1;
    }
    /**
     * Lấy giá trị random INTEGER ở trong khoảng (BAO GỒM) MIN và (KO BAO GỒM) MAX
     * @param minValue Giá trị tối thiểu, NẰM TRONG giá trị trả về
     * @param maxValue Giá trị tối đa, KO NẰM TRONG giá trị trả về
     * @returns 
     */
    public static GetRandomIntNumber(minValue: number, maxValue: number): number
    {
        return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    }

    /**
     * Lấy giá trị random ở trong khoảng (BAO GỒM) MIN và (KO BAO GỒM) MAX
     * @param minValue Giá trị tối thiểu, NẰM TRONG giá trị trả về
     * @param maxValue Giá trị tối đa, KO NẰM TRONG giá trị trả về
     * @returns 
     */
    public static GetRandomFloatNumber(minValue: number, maxValue: number): number
    {
        return Math.random() * (maxValue - minValue) + minValue;
    }

    public static GetLerpColor(startColor: cc.Color, endColor: cc.Color, lerpValue: number): cc.Color
    {
        return cc.color(cc.misc.lerp(startColor.r, endColor.r, lerpValue),
            cc.misc.lerp(startColor.g, endColor.g, lerpValue),
            cc.misc.lerp(startColor.b, endColor.b, lerpValue),
            255
        );
    }

}
