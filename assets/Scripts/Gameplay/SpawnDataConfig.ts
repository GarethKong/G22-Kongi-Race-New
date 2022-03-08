import NumberUltilities from "../Ultilities/NumberUltilities";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameDataConfig
{
    /**
     * Khoảng cách tối đa để vỡ viền
     * lưu ý khoảng cách này phải <= min của block width
     */
    static BreakEdgeDistance: number = 80;
    /**
     * Khoảng cách tối đa vẫn hit được diamond ở tâm
     */
    static HitDiamondSqrDistance: number = 2500;
    /**
     * số lượng spawn list
     */
    static SpawnConfigCount: number = 4;
    /**
     * Offset Y cho các block, dùng để di chuyển khi dịch chuyển index (ví dụ block 1 => block 0 thì dịch xuống 40 pixel)
     */
    static OffsetYForBlockIndex: number[] = [-40, -30, -24, -20, -16];

    /**
     * Bonus Y cho các block, tính từ OffsetY
     */
    static BonusYForBlockIndex: number[] = [0, 40, 70, 94, 114, 130];
    /**
     * Vị trý của Y cho các block đầu tiên
     */
    static PositionYForFirstBlocks: number[] = [-480, -320, -240, -160, -80, 0];

    /**
     * Index của list đang được lấy từ SpawnList
     */
    private static CurrentSpawnListIndex: number = 0;
    /**
     * Index của block trong list đang được lấy, nếu đạt mốc cuối thì random list tiếp theo
     */
    public static CurrentSpawnIndex: number = 0;
    private static SpawnList = {
        // 6 tường nghiêng vào nhau
        0: {
            BlockInfo: [
                {
                    Angle: 5,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 450,
                },
                {
                    Angle: -10,
                    PositionX: -200,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: 10,
                    PositionX: 200,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: -10,
                    PositionX: -200,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: 12.5,
                    PositionX: 250,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: -12.5,
                    PositionX: -250,
                    MinWidth: 200,
                    MaxWidth: 400,
                }
            ]
        },
        // đi S ngược 7 tường
        1: {
            BlockInfo: [
                {
                    Angle: -2.5,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 450,
                },
                {
                    Angle: -2.5,
                    PositionX: 80,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: 2.5,
                    PositionX: 120,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: 5,
                    PositionX: 0,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: 2.5,
                    PositionX: -80,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: -2.5,
                    PositionX: -160,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: -2.5,
                    PositionX: -80,
                    MinWidth: 200,
                    MaxWidth: 400,
                }
            ]
        },
        // 9 tường nghiêng vào nhau
        2: {
            BlockInfo: [
                {
                    Angle: 5,
                    PositionX: 0,
                    MinWidth: 300,
                    MaxWidth: 350,
                },
                {
                    Angle: -7.5,
                    PositionX: -180,
                    MinWidth: 300,
                    MaxWidth: 350,
                },
                {
                    Angle: 7.5,
                    PositionX: 180,
                    MinWidth: 300,
                    MaxWidth: 350,
                },
                {
                    Angle: -10,
                    PositionX: -200,
                    MinWidth: 300,
                    MaxWidth: 350,
                },
                {
                    Angle: 10,
                    PositionX: 200,
                    MinWidth: 300,
                    MaxWidth: 350,
                },
                {
                    Angle: -12.5,
                    PositionX: -250,
                    MinWidth: 200,
                    MaxWidth: 300,
                },
                {
                    Angle: 12.5,
                    PositionX: 250,
                    MinWidth: 200,
                    MaxWidth: 250,
                },
                {
                    Angle: -15,
                    PositionX: -250,
                    MinWidth: 200,
                    MaxWidth: 250,
                },
                {
                    Angle: 7.5,
                    PositionX: 250,
                    MinWidth: 250,
                    MaxWidth: 400,
                }
            ]
        },
        // đi S xuôi 7 tường
        3: {
            BlockInfo: [
                {
                    Angle: 2.5,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 450,
                },
                {
                    Angle: 2.5,
                    PositionX: -80,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: -2.5,
                    PositionX: -120,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: -5,
                    PositionX: 0,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: -2.5,
                    PositionX: 80,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: 2.5,
                    PositionX: 160,
                    MinWidth: 200,
                    MaxWidth: 400,
                },
                {
                    Angle: 2.5,
                    PositionX: 80,
                    MinWidth: 200,
                    MaxWidth: 400,
                }
            ]
        },
    }

    static GetNextSpawnInfo(): BlockInfo
    {
        this.CurrentSpawnIndex++;
        if (this.CurrentSpawnIndex > this.SpawnList[this.CurrentSpawnListIndex].BlockInfo.length)
        {
            this.CurrentSpawnListIndex = NumberUltilities.GetRandomIntNumber(0, this.SpawnConfigCount);
            this.CurrentSpawnIndex = 1;
        }
        return this.SpawnList[this.CurrentSpawnListIndex].BlockInfo[this.CurrentSpawnIndex - 1];
    }

    static ResetForNewGame()
    {
        this.CurrentSpawnIndex = 0;
    }
}

export class BlockInfo
{
    Angle: number;
    PositionX: number;
    MinWidth: number;
    MaxWidth: number;
}