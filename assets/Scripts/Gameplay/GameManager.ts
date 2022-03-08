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
import ScreenManager, {DlgConfig, ScreenConfig} from "../Common/ScreenManager";
import SpawnDataConfig, {BlockInfo} from "./SpawnDataConfig";
import GameState from "../Common/GameState";
import EndGameScript from "../Screen/End/EndGameScript";
import DatabaseManager from "../Common/DatabaseManager";
import CustomEventManager from "../Ultilities/CustomEventManager";
import GameConfig from "../Config/GameConfig";

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
    public CanvasWidth: number = 720;

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

    protected start(): void
    {
        CustomEventManager.Instance.node.on(CustomEventManager.Instance.UpdateCoinEvent, this.ShowDiamondText, this);
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
        this.TimeScale = 1;
        this.ScoreLabel.string = "";
        this.showStatusBar(false);
        if (GameState.isRevived != true)
        {
            if (GameState.isShowingRevive)
            {
                return;
            }
            GameState.isShowingRevive = true;
            this.scheduleOnce(() =>
            {
                ScreenManager.instance.onShowDlgByName(DlgConfig.WatchAdsToRevive);
            }, this.BlockList.length * 0.05 + 1);
        } else
        {
            this.scheduleOnce(() =>
            {
                this.CollectDiamondQty = 0;
                ScreenManager.instance.onShowScreenByName(ScreenConfig.EndGame);
                EndGameScript.instance.loadData();
            }, this.BlockList.length * 0.05 + 1);
        }
    }

    /**
     * Chuyển sang block tiếp theo (block trước được đáp xuống an toàn)
     */
    public SetNextBlock(IsHitDiamond: boolean): void
    {
        for (let i = 1; i < this.BlockList.length; i++)
        {
            this.BlockList[i].ChangeStateToNextIndex(this.MaxFlyingTime / 3);
        }

        if (IsHitDiamond == false)
        {
            this.CurrentDiamondStreak = 0;
        }
        else
        {
            this.CollectDiamond();
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
    @property(cc.Label)
    private DiamondLabel: cc.Label = null;
    @property(cc.Sprite)
    private DiamondSprite: cc.Sprite = null;
    @property(cc.Node)
    private TapNode: cc.Node = null;
    public CurrentScore: number = 0;
    public IsStarted: boolean = false;
    public IsPauseGame: boolean = false;

    public StartNewGame(): void
    {
        SpawnDataConfig.ResetForNewGame();

        for (let i = 0; i < this.BlockList.length; i++)
        {
            this.scheduleOnce(() =>
            {
                this.BlockList[i].OnGameOver();
            }, i * 0.05);
        }

        this.BlockList = [];
        this.KongiNode.ResetNewGame();
        this.IsPauseGame = true;
        this.IsStarted = false;
        this.CurrentScore = 0;
        this.CurrentBlockIndex = 0;
        this.SpawnFirstBlock();
        for (let i = 0; i < this.MaxBlockQty - 1; i++)
        {
            this.SpawnBlock();
        }
        this.ScoreLabel.string = this.CurrentScore.toString();
        this.showStatusBar(true);
        GameState.isRevived = false;
        GameState.isShowingRevive = false;
    }

    //#endregion GAMEPLAY
    //#region SPAWN BLOCKS
    @property(cc.Node)
    private BlockContainer: cc.Node = null;


    private CurrentSpawnedBlock: BlockScript = null;
    private CurrentBlockAngle: number;
    private CurrentDiamondRemain: number = 0;
    private CurrentBlockWidth: number;
    private CurrentBlockPosition: cc.Vec3;
    private CurrentBlockIndex: number = 0;//index của block được thêm vào danh sách, block càng về sau thì phải càng gần với background color
    public BlockList: BlockScript[] = [];

    private SpawnFirstBlock(): void
    {
        this.CurrentBlockIndex = 0;
        this.CurrentSpawnedBlock = SimplePool.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript);
        this.CurrentSpawnedBlock.SetBlockInfo(this.CanvasWidth, 0, BlockMoveType.Static,
            cc.v3(0, SpawnDataConfig.PositionYForFirstBlocks[this.CurrentBlockIndex]), this.CurrentBlockIndex, false);
        this.CurrentSpawnedBlock.EnableForCollision(false)
        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;
        this.BlockList.push(this.CurrentSpawnedBlock);
    }

    /**
     * Spawn các block (ko phải block đầu tiên)
     */
    private SpawnBlock(): void
    {
        this.CalculateNextBlockState();
        this.CurrentSpawnedBlock = SimplePool.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript);
        this.CurrentSpawnedBlock.SetBlockInfo(this.CurrentBlockWidth, this.CurrentBlockAngle, BlockMoveType.Static, this.CurrentBlockPosition, this.CurrentBlockIndex, this.CurrentDiamondRemain > -1);
        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;
        this.CurrentSpawnedBlock.node.setSiblingIndex(0);
        this.BlockList.push(this.CurrentSpawnedBlock);
    }


    private CalculateNextBlockState(): void
    {
        this.CurrentBlockIndex++;
        var nextBlockConfig: BlockInfo = SpawnDataConfig.GetNextSpawnInfo();
        if (this.CurrentBlockIndex >= SpawnDataConfig.BonusYForBlockIndex.length)
        {
            console.log("ko the xay ra, check bug");
        }

        if (SpawnDataConfig.CurrentSpawnIndex === 1 && this.CurrentBlockIndex > 3)
        {
            // xác suất spawn ra kim cương là 1/6
            if (Math.random() < 16)
            {
                this.CurrentDiamondRemain = 5;
            }
        }
        this.CurrentDiamondRemain--;

        this.CurrentBlockPosition = cc.v3(nextBlockConfig.PositionX,
            SpawnDataConfig.PositionYForFirstBlocks[cc.misc.clampf(this.CurrentBlockIndex, 0, SpawnDataConfig.PositionYForFirstBlocks.length - 1)] +
            SpawnDataConfig.BonusYForBlockIndex[cc.misc.clampf(this.CurrentBlockIndex, 0, SpawnDataConfig.BonusYForBlockIndex.length - 1)]);

        this.CurrentBlockWidth = NumberUltilities.GetRandomFloatNumber(nextBlockConfig.MinWidth, nextBlockConfig.MaxWidth);
        this.CurrentBlockAngle = nextBlockConfig.Angle;
    }

    //#endregion SPAWN BLOCKS

    //#region DIAMOND PACING
    @property(cc.Prefab)
    private diamondParticlePrefab: cc.Prefab = null;
    public TimeScale: number = 1;
    /**
     * Số diamond thu được trong session
     */
    public CollectDiamondQty: number = 0;
    private CurrentDiamondStreak: number = 0;
    public CollectDiamond(): void
    {
        this.CollectDiamondQty++;
        this.CurrentDiamondStreak++;

        this.DiamondLabel.string = `${ DatabaseManager.totalCoin + this.CollectDiamondQty }`;

        if (this.CurrentDiamondStreak == 5)
        {
            this.TimeScale = 0.3;
            console.log("zo zoz zo");
        }
    }

    public ShowDiamondText(): void
    {
        console.log("show diamond text");
        this.DiamondLabel.string = `${ DatabaseManager.totalCoin + this.CollectDiamondQty }`;
    }

    public SpawnDiamondParticle(spawnPosition: cc.Vec3): void
    {
        var diamondParticle: cc.Node = cc.instantiate(this.diamondParticlePrefab);
        diamondParticle.parent = this.node;
        diamondParticle.position = spawnPosition;
    }
    //#endregion DIAMOND PACING

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
            this.ColorList.push(NumberUltilities.GetLerpColor(this.BlockColor, this.levelColorList[0], 1 - Math.pow(1 / 3, i)));
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

    //#region SHOP REGION

    private positionMap: Map<string, cc.Vec2> = new Map(
        [
            ["default", cc.v2(0, 0)],
            ["aliens", cc.v2(0, 0)],
            ["bat", cc.v2(-6, -46)],
            ["cat", cc.v2(0, 0)],
            ["chef", cc.v2(5, 0)],
            ["clown", cc.v2(-33, 0)],
            ["cowboy", cc.v2(0, 0)],
            ["giraffe", cc.v2(0, 0)],
            ["hair", cc.v2(0, 0)],
            ["headphone", cc.v2(0, 0)],
            ["koala", cc.v2(0, 0)],
            ["magic_hat", cc.v2(0, 0)],
            ["monkey", cc.v2(0, 0)],
            ["mouse", cc.v2(-33, 0)],
            ["pig", cc.v2(10, -4)],
            ["pirate", cc.v2(-14, 0)],
            ["rabbit", cc.v2(0, 0)],
            ["reindeer", cc.v2(0, 0)],
            ["sheep", cc.v2(-5, 0)],
            ["viking", cc.v2(0, 0)],
            ["witch_hat", cc.v2(-6, 0)],
        ]);
    public ChangeCharacter(characterIndex: number)
    {
        cc.resources.load("Character/" + (GameConfig.listImageSource[characterIndex]), cc.SpriteFrame, function (err, spriteFrame: cc.SpriteFrame)
        {
            GameManager.Instance.KongiNode.BodySprite.spriteFrame = spriteFrame;
            GameManager.Instance.KongiNode.BodySprite.node.position = GameManager.Instance.positionMap[GameConfig.listImageSource[characterIndex]];
        });
    }

    //#endregion SHOP REGION


    //#region REVIVE
    public Revive()
    {
        GameState.isRevived = true;
        this.KongiNode.ResetAfterRevive();
        this.IsPauseGame = true;
        this.IsStarted = false;
    }

    //#endregion REVIVE


    public showStatusBar(isShowStatusBar: boolean)
    {
        this.DiamondLabel.node.active = isShowStatusBar;
        this.DiamondSprite.node.active = isShowStatusBar;
        this.ScoreLabel.node.active = isShowStatusBar;
    }
}