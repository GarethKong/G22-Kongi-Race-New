import NumberUltilities from "../Ultilities/NumberUltilities";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameDataConfig
{
    /**
     * 
     */
    static SpawnConfigCount: number = 1;
    /**
     * Offset Y cho các block, dùng để di chuyển khi dịch chuyển index (ví dụ block 1 => block 0 thì dịch xuống 40 pixel)
     */
    static OffsetYForBlockIndex: number[] = [-40, -30, -24, -20, -16, -12, -8, -8, -8];

    /**
     * Bonus Y cho các block, tính từ OffsetY
     */
    static BonusYForBlockIndex: number[] = [0, 40, 70, 94, 114, 130, 142, 150, 158, 166];
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
    private static CurrentSpawnIndex: number = 100;
    private static SpawnList = {
        0: {
            BlockInfo: [
                {
                    Angle: 0,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 600,
                },
                {
                    Angle: 0,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 600,
                },
                {
                    Angle: 0,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 600,
                },
                {
                    Angle: 0,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 600,
                },
                {
                    Angle: 0,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 600,
                },
                {
                    Angle: 0,
                    PositionX: 0,
                    MinWidth: 350,
                    MaxWidth: 600,
                },
            ]
        }
    }

    static GetNextSpawnInfo(): BlockInfo
    {
        this.CurrentSpawnIndex++;
        if (this.CurrentSpawnIndex >= this.SpawnList[this.CurrentSpawnListIndex].BlockInfo.length)
        {
            this.CurrentSpawnListIndex = NumberUltilities.GetRandomIntNumber(0, this.SpawnConfigCount);
            this.CurrentSpawnIndex = 1;
        }

        return this.SpawnList[this.CurrentSpawnListIndex].BlockInfo[this.CurrentSpawnIndex - 1];
    }

    static ResetForNewGame()
    {
        this.CurrentSpawnIndex = 100;
    }
}

export class BlockInfo
{
    Angle: number;
    PositionX: number;
    MinWidth: number;
    MaxWidth: number;
}