import NumberUltilities from "../Ultilities/NumberUltilities";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameDataConfig
{
    /**
     * Khoảng cách tối đa để vỡ viền
     * lưu ý khoảng cách này phải <= min của block width
     */
    static BreakEdgeDistance: number = 60;
    /**
     * Khoảng cách tối đa vẫn hit được diamond ở tâm
     */
    static HitDiamondSqrDistance: number = 2500;
    /**
     * số lượng spawn list
     */
    static SpawnConfigCount: number = 6;
    /**
     * Offset Y cho các block, dùng để di chuyển khi dịch chuyển index (ví dụ block 1 => block 0 thì dịch xuống 40 pixel)
     */
    static OffsetYForBlockIndex: number[] = [-40, -30, -30, -30, -30]; // [-40, -30, -24, -20, -16]

    /**
     * Bonus Y cho các block, tính từ OffsetY
     */
    static BonusYForBlockIndex: number[] = [0, 40, 70, 100, 130, 160];
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
        // 6 tường nghiêng vào nhau, sang trái trước
        0: {
            BlockInfo: [
                {
                    BlockIndexInWave: 0,
                    Angle: 5,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 450,
                    PacingTimeFromPreviousBlock: 0.66,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 1,
                    Angle: -10,
                    PositionX: -110,
                    MinWidth: 300,
                    MaxWidth: 400,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 2,
                    Angle: 12.5,
                    PositionX: 110,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 3,
                    Angle: -17.5,
                    PositionX: -160,
                    MinWidth: 280,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 4,
                    Angle: 15,
                    PositionX: 210,
                    MinWidth: 250,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 5,
                    Angle: -3,
                    PositionX: -110,
                    MinWidth: 250,
                    MaxWidth: 320,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: true
                }
            ]
        },
        // đi S ngược 12 tường
        1: {
            BlockInfo: [
                {
                    BlockIndexInWave: 0,
                    Angle: -3.5,
                    PositionX: 0,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 1,
                    Angle: -3.5,
                    PositionX: 70,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 2,
                    Angle: -3.5,
                    PositionX: 140,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 3,
                    Angle: 3.5,
                    PositionX: 210,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 4,
                    Angle: 3.5,
                    PositionX: 140,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 5,
                    Angle: 3.5,
                    PositionX: 70,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 6,
                    Angle: 3.5,
                    PositionX: 0,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 7,
                    Angle: 3.5,
                    PositionX: -70,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 8,
                    Angle: 3.5,
                    PositionX: -140,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 9,
                    Angle: -3.5,
                    PositionX: -210,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 10,
                    Angle: -3.5,
                    PositionX: -140,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 11,
                    Angle: -2.5,
                    PositionX: -70,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: true
                },
            ]
        },
        // 9 tường nghiêng vào nhau
        2: {
            BlockInfo: [
                {
                    BlockIndexInWave: 0,
                    Angle: 5.4,
                    PositionX: 0,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 1,
                    Angle: -11,
                    PositionX: -120,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 2,
                    Angle: 14,
                    PositionX: 120,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 3,
                    Angle: -17,
                    PositionX: -180,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 4,
                    Angle: 18,
                    PositionX: 180,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 5,
                    Angle: -18,
                    PositionX: -200,
                    MinWidth: 200,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 6,
                    Angle: 15.5,
                    PositionX: 180,
                    MinWidth: 200,
                    MaxWidth: 250,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 7,
                    Angle: -12.5,
                    PositionX: -150,
                    MinWidth: 200,
                    MaxWidth: 250,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 8,
                    Angle: 3,
                    PositionX: 120,
                    MinWidth: 250,
                    MaxWidth: 400,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: true
                }
            ]
        },
        // đi S xuôi 12 tường
        3: {
            BlockInfo: [
                {
                    BlockIndexInWave: 0,
                    Angle: 3.5,
                    PositionX: 0,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 1,
                    Angle: 3.5,
                    PositionX: -70,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 2,
                    Angle: 3.5,
                    PositionX: -140,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 3,
                    Angle: -3.5,
                    PositionX: -210,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 4,
                    Angle: -3.5,
                    PositionX: -140,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 5,
                    Angle: -3.5,
                    PositionX: -70,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 6,
                    Angle: -3.5,
                    PositionX: 0,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 7,
                    Angle: -3.5,
                    PositionX: 70,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 8,
                    Angle: -3.5,
                    PositionX: 140,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 9,
                    Angle: 3.5,
                    PositionX: 210,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 10,
                    Angle: 3.5,
                    PositionX: 140,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 11,
                    Angle: 2.5,
                    PositionX: 70,
                    MinWidth: 250,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: true
                },
            ]
        },
        // 6 tường nghiêng vào nhau, sang phải trước, đảo ngược 0
        4: {
            BlockInfo: [
                {
                    BlockIndexInWave: 0,
                    Angle: -5,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 450,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 1,
                    Angle: 10,
                    PositionX: 110,
                    MinWidth: 300,
                    MaxWidth: 400,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 2,
                    Angle: -12.5,
                    PositionX: -110,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 3,
                    Angle: 17.5,
                    PositionX: 160,
                    MinWidth: 280,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 4,
                    Angle: -15,
                    PositionX: -210,
                    MinWidth: 250,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 5,
                    Angle: 3,
                    PositionX: 110,
                    MinWidth: 250,
                    MaxWidth: 320,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: true
                }
            ]
        },
        // 9 tường nghiêng vào nhau, đảo ngược 2
        5: {
            BlockInfo: [
                {
                    BlockIndexInWave: 0,
                    Angle: -5.4,
                    PositionX: 0,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 1,
                    Angle: 11,
                    PositionX: 120,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 2,
                    Angle: -14,
                    PositionX: -120,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 3,
                    Angle: 17,
                    PositionX: 180,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 4,
                    Angle: -18,
                    PositionX: -180,
                    MinWidth: 300,
                    MaxWidth: 350,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 5,
                    Angle: 18,
                    PositionX: 200,
                    MinWidth: 200,
                    MaxWidth: 300,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 6,
                    Angle: -15.5,
                    PositionX: -180,
                    MinWidth: 200,
                    MaxWidth: 250,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 7,
                    Angle: 12.5,
                    PositionX: 150,
                    MinWidth: 200,
                    MaxWidth: 250,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: false
                },
                {
                    BlockIndexInWave: 8,
                    Angle: -3,
                    PositionX: -120,
                    MinWidth: 250,
                    MaxWidth: 400,
                    PacingTimeFromPreviousBlock: 0.4,
                    IsLastBlock: true
                }
            ]
        }
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
    BlockIndexInWave: number;
    Angle: number;
    PositionX: number;
    MinWidth: number;
    MaxWidth: number;
    PacingTimeFromPreviousBlock: number;
    IsLastBlock: boolean;
}