// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import NumberUltilities from "../Ultilities/NumberUltilities";
import SimplePool from "../Ultilities/SimplePool";
import BlockScript, {BlockMoveType} from "./BlockScript";
import PlayerScript from "./PlayerScript";
import ScreenManager, {DlgConfig} from "../Common/ScreenManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component
{
    public static Instance: GameManager;
    @property(PlayerScript)
    public KongiNode: PlayerScript = null;
    @property
    public KongiRadius: number = 0;

    @property(cc.Prefab)
    private BlockPrefab: cc.Prefab = null;
    @property
    private MaxBlockQty: number = 10;
    @property
    private MaxVelocity: number = 0;
    @property
    private MaxFlyingTime: number = 1.2;
    private Gravity: number = 0;
    @property
    public LandingVelocity: number = 500;
    @property
    private CanvasWidth: number = 1080;

    protected onLoad(): void
    {
        GameManager.Instance = this;
        this.GenerateColorList(this.MaxBlockQty);
        this.GenerateScaleList();
        // THỜI GIAN GIỮA 2 LẦN JUMP LÀ 1.2S (NẾU KO TAP)
        // => GRAVITY * 0.6 = MaxVelocity
        this.Gravity = this.MaxVelocity * 2 / this.MaxFlyingTime;
        this.StartNewGame();
        this.TapNode.on(cc.Node.EventType.TOUCH_START, this.Landing, this);
    }

    /**
     * Đáp xuống đất
     */
    private Landing(event: cc.Event.EventTouch): void
    {
        this.IsPauseGame = false;
        this.IsStarted = true;
        this.KongiNode.Landing();
    }

    /**
     * Rút cọc, GameOver
     */
    public ShowGameOver(): void
    {
        this.ScoreLabel.string = "";
        for (let i = 0; i < this.BlockList.length; i++)
        {
            this.scheduleOnce(() =>
            {
                this.BlockList[i].OnGameOver();
            }, i * 0.05);
        }

        this.scheduleOnce(() => {ScreenManager.instance.onShowDlgByName(DlgConfig.EndGame)}, this.BlockList.length * 0.05 + 1);
    }

    /**
     * Chuyển sang block tiếp theo (block trước được đáp xuống an toàn)
     */
    public SetNextBlock(): void
    {
        for (let i = 0; i < this.BlockList.length; i++)
        {
            this.BlockList[i].ChangeStateToNextIndex(this.MaxFlyingTime / 3);
        }
        this.CurrentBlockIndex--;
        this.CurrentScore++;
        this.ScoreLabel.string = this.CurrentScore.toString();
        this.BlockList.splice(0, 1);
        this.SpawnBlock();
        this.BlockList[0].EnableForCollision(true);


    }

    public PushUpKongi(pushUpAngle: number): void
    {
        this.KongiNode.Jump(pushUpAngle, this.MaxVelocity, this.Gravity);
    }




    //#region GAMEPLAY
    @property(cc.Label)
    private ScoreLabel: cc.Label = null;
    @property(cc.Node)
    private TapNode: cc.Node = null;
    public CurrentScore: number = 0;
    public IsStarted: boolean = false;
    public IsPauseGame: boolean = false;
    public StartNewGame(): void
    {
        this.BlockList = [];
        this.KongiNode.ResetNewGame();
        this.IsPauseGame = true;
        this.IsStarted = false;
        this.CurrentScore = 0;
        this.CurrentBlockIndex = 0;
        this.SpawnFirstBlock();
        for (let i = 0; i < 9; i++)
        {
            this.SpawnBlock();
        }
        this.ScoreLabel.string = this.CurrentScore.toString();


    }
    //#endregion GAMEPLAY
    //#region SPAWN BLOCKS
    @property(cc.Node)
    private BlockContainer: cc.Node = null;

    private StepAngle: number = 2.5
    private MaxAngleMultiplier: number = 10;

    private CurrentSpawnedBlock: BlockScript = null;
    private CurrentBlockAngle: number;
    private CurrentBlockWidth: number;
    private CurrentBlockPosition: cc.Vec3;
    private CurrentBlockYOffset: number;
    private CurrentBlockIndex: number = 0;//index của block được thêm vào danh sách, block càng về sau thì phải càng gần với background color
    private BlockList: BlockScript[] = [];

    private SpawnFirstBlock(): void
    {
        this.CurrentSpawnedBlock = SimplePool.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript);
        this.CurrentSpawnedBlock.SetBlockInfo(1080, 0, BlockMoveType.Static, cc.v3(0, -480), this.CurrentBlockIndex, 0); // 480 tùy chỉnh sau
        this.CurrentSpawnedBlock.EnableForCollision(false)
        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;


        this.CurrentBlockIndex++;

        this.CurrentBlockAngle = NumberUltilities.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * NumberUltilities.GetRandomSign() * this.StepAngle;
        this.CurrentBlockWidth = 800;
        this.CurrentBlockPosition = cc.v3(0, -360); // 360 tùy chỉnh sau
        this.CurrentBlockYOffset = -120;

        this.BlockList.push(this.CurrentSpawnedBlock);
    }
    /**
     * Spawn các block (ko phải block đầu tiên)
     */
    private SpawnBlock(): void
    {
        this.CurrentSpawnedBlock = SimplePool.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript);
        this.CurrentSpawnedBlock.SetBlockInfo(this.CurrentBlockWidth, this.CurrentBlockAngle, BlockMoveType.Static, this.CurrentBlockPosition, this.CurrentBlockIndex, this.CurrentBlockYOffset);
        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;
        this.CurrentSpawnedBlock.node.setSiblingIndex(0);

        this.CalculateNextBlockState();
        this.CurrentBlockIndex++;

        this.BlockList.push(this.CurrentSpawnedBlock);
    }


    private CalculateNextBlockState(): void
    {
        let playerVelocityX = -this.MaxVelocity * Math.sin(2 * this.CurrentBlockAngle * Math.PI / 180);
        let maxFlyingRange = playerVelocityX * this.MaxFlyingTime;
        let deltaBetweenTwoBlock = maxFlyingRange * NumberUltilities.GetRandomFloatNumber(0.3, 0.7);

        if (this.CurrentBlockIndex < 5)
        {
            this.CurrentBlockPosition = cc.v3(cc.misc.clampf(this.CurrentBlockPosition.x + deltaBetweenTwoBlock, -324, 324),
                this.CurrentBlockPosition.y + 120);
            this.CurrentBlockYOffset = -120;
        }
        else
        {
            this.CurrentBlockPosition = cc.v3(cc.misc.clampf(this.CurrentBlockPosition.x + deltaBetweenTwoBlock, -324, 324),
                this.CurrentBlockPosition.y + 30);
            this.CurrentBlockYOffset = -30;
        }


        this.CurrentBlockWidth = cc.misc.clampf(Math.abs(maxFlyingRange) * NumberUltilities.GetRandomFloatNumber(0.3, 0.7), 288, 540);

        if (this.CurrentBlockAngle > 0)
        {
            if (this.CurrentBlockPosition.x + playerVelocityX * this.MaxFlyingTime < -this.CanvasWidth / 2)
            {
                this.CurrentBlockAngle = -NumberUltilities.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
            else
            {
                this.CurrentBlockAngle = NumberUltilities.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
        }
        else
        {
            if (this.CurrentBlockPosition.x + playerVelocityX * this.MaxFlyingTime > this.CanvasWidth / 2)
            {
                this.CurrentBlockAngle = NumberUltilities.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
            else
            {
                this.CurrentBlockAngle = -NumberUltilities.GetRandomIntNumber(1, this.MaxAngleMultiplier + 1) * this.StepAngle;
            }
        }
    }
    //#endregion SPAWN BLOCKS


    //#region MÀU TỪNG ĐOẠN SCORE
    @property(cc.Color)
    private BlockColor: cc.Color = null;
    @property([cc.Color])
    private levelColorList: cc.Color[] = [];
    @property([cc.SpriteFrame])
    private backgroundSpriteFrameList: cc.SpriteFrame[] = [];
    public ColorList: cc.Color[] = [];

    private GenerateColorList(numberOfColor: number): void
    {
        for (let i = 0; i < numberOfColor; i++)
        {
            this.ColorList.push(NumberUltilities.GetLerpColor(this.BlockColor, this.levelColorList[0], 1 - Math.pow(2 / 3, i)));
        }
    }

    //#endregion MÀU TỪNG ĐOẠN SCORE

    //#region SCALE TỪNG BLOCK THEO INDEX
    public ScaleList: number[] = [];
    private DistanceToFirstBlock: number = 19; // khoảng cách từ mắt tới block đầu tiên, với quy ước các block sẽ cách nhau 1 đơn vị
    private GenerateScaleList()
    {
        for (let i = 0; i < this.MaxBlockQty; i++)
        {
            this.ScaleList.push(this.DistanceToFirstBlock / (this.DistanceToFirstBlock + i));
        }
    }

    //#endregion SCALE TỪNG BLOCK THEO INDEX

}