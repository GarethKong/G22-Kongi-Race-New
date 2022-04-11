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
import SoundManager from "../Ultilities/SoundManager";
import BackgroundController from "./BackgroundController";
import FBGlobal from "../facebook/FBGlobal";

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
    public JumpUpVelocity: number = 0;
    @property
    public MaxFallingVelocity: number = 0; // chỉ tính cho Y
    @property
    private MaxFlyingTime: number = 1.2;
    private Gravity: number = 0;
    @property
    public CanvasWidth: number = 720;

    protected onLoad(): void
    {
        GameManager.Instance = this;
        FBGlobal.instance.loadAdsInterestial();
        FBGlobal.instance.loadVideoAdsFirst();
        this.GenerateScaleList();
        // THỜI GIAN GIỮA 2 LẦN JUMP LÀ 1.2S (NẾU KO TAP)
        // => GRAVITY * 0.6 = MaxVelocity
        this.Gravity = this.JumpUpVelocity * 2 / this.MaxFlyingTime; // gần đúng, vì còn có góc bắn lên ko thẳng + vận tốc xuống bị giới hạn
        //this.StartNewGame();
        this.TapNode.on(cc.Node.EventType.TOUCH_START, this.Landing, this);
    }

    protected start(): void
    {
        CustomEventManager.Instance.node.on(CustomEventManager.Instance.UpdateCoinEvent, this.ShowDiamondText, this);
    }

    protected update(dt: number): void
    {
        this.FlashFrameCount--;
        if (this.FlashFrameCount < 0)
        {
            this.flashNode.active = false;
        }
    }

    /**
     * Đáp xuống đất
     */
    private Landing(event: cc.Event.EventTouch): void
    {
        SoundManager.Instance.StartNewGameBGMusic();
        this.IsPauseGame = false;
        this.IsStarted = true;
        this.KongiNode.Landing();
    }

    /**
     * Rút cọc, GameOver
     */
    public ShowGameOver(): void
    {
        console.log("ShowGameOver ");
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
            if (GameState.isShowingRevive)
            {
                return;
            }
            GameState.isShowingRevive = true;
            this.scheduleOnce(() =>
            {
                this.CollectDiamondQty = 0;
                ScreenManager.instance.onShowScreenByName(ScreenConfig.EndGame);
                EndGameScript.instance.loadData();
            }, this.BlockList.length * 0.05 + 1);
        }
        FBGlobal.instance.createShortcutAsync();
    }

    /**
     * Chuyển sang block tiếp theo (block trước được đáp xuống an toàn)
     */
    public SetNextBlock(IsHitDiamond: boolean): void
    {
        if (GameManager.Instance.IsPauseGame) return;
        this.CurrentScore++;
        this.ScoreLabel.string = this.CurrentScore.toString();

        this.CheckMilestoneWhenHitBlock(this.CurrentScore);
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

        this.BlockList.splice(0, 1);
        this.SpawnBlock();
        this.BlockList[0].EnableForCollision(true);

        this.EstimateLandingTimeList.splice(0, 1);
    }

    public PushUpKongi(pushUpAngle: number): void
    {
        this.KongiNode.Jump(pushUpAngle, this.JumpUpVelocity, this.Gravity);
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
    public ReadyForPlaying: boolean = true;

    public StartNewGame(): void
    {
        this.ChangeBackgroundTheme(0);
        this.ChangeDeepEffect(0);
        this.TotalBlockSpawned = 0;
        SpawnDataConfig.ResetForNewGame();
        this.BlockList = [];
        this.KongiNode.ResetNewGame();
        this.IsPauseGame = true;
        this.IsStarted = false;
        this.CurrentScore = 0;
        this.CurrentBlockIndex = 0;
        GameConfig.sessionNumber += 1;
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

    private isOnClearAllBlockSchedule: boolean = false;
    /**
     * RÚT CỌC KHI GAMEOVER
     */
    public ClearAllBlock()
    {
        if (this.isOnClearAllBlockSchedule) return;
        this.isOnClearAllBlockSchedule = true;
        for (let i = 0; i < this.BlockContainer.childrenCount; i++)
        {
            // this.scheduleOnce(() =>
            // {
            //     this.BlockContainer.children[i].getComponent(BlockScript).OnGameOver();
            // }, i * 0.05);
            this.BlockContainer.children[i].getComponent(BlockScript).OnGameOver();
        }

        this.ReadyForPlaying = false;
        this.scheduleOnce(() =>
        {
            this.ReadyForPlaying = true;
            this.isOnClearAllBlockSchedule = false;
        }, 0.5);
    }

    //#endregion GAMEPLAY
    //#region SPAWN BLOCKS
    @property(cc.Node)
    private BlockContainer: cc.Node = null;


    private CurrentSpawnedBlock: BlockScript = null;
    private CurrentBlockAngle: number = 0;
    private CurrentDiamondRemain: number = -3; // < 0 là dc
    private CurrentBlockWidth: number;
    private CurrentBlockPosition: cc.Vec3 = cc.Vec3.ZERO;
    private CurrentBlockIndex: number = 0;//index của block được thêm vào danh sách, block càng về sau thì phải càng gần với background color
    public BlockList: BlockScript[] = [];
    public EstimateLandingTimeList: number[] = [];

    private TotalBlockSpawned: number = 0;

    private SpawnFirstBlock(): void
    {
        this.EstimateLandingTimeList = [0];
        this.blockCountToSpawnDiamond = Math.random() * 10 + 30;
        this.TotalBlockSpawned++;
        this.CurrentBlockIndex = 0;
        this.CurrentSpawnedBlock = SimplePool.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript);
        this.CurrentSpawnedBlock.SetBlockInfo(this.CanvasWidth, 0, BlockMoveType.Static,
            cc.v3(0, SpawnDataConfig.PositionYForFirstBlocks[this.CurrentBlockIndex]),
            this.CurrentBlockIndex, false, "", this.EstimateLandingTimeList, 0, 0);
        this.CurrentSpawnedBlock.EnableForCollision(false)
        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;
        this.BlockList.push(this.CurrentSpawnedBlock);

        this.RandomMoveType();
    }

    private CurrentMoveType: BlockMoveType = BlockMoveType.Static;
    private CurrentMoveBlockRemain: number = 0; // số block còn lại cho move type
    adads
    /**
     * Spawn các block (ko phải block đầu tiên)
     */
    private SpawnBlock(): void
    {
        let angleLastBlock = this.CurrentSpawnedBlock.node.angle;
        let posXLastBlock = this.CurrentSpawnedBlock.node.position.x;
        this.TotalBlockSpawned++;
        this.CalculateNextBlockState();

        this.CurrentSpawnedBlock = SimplePool.instance.Spawn(this.BlockPrefab, this.BlockContainer).getComponent(BlockScript);

        this.CurrentSpawnedBlock.SetBlockInfo(this.CurrentBlockWidth, this.CurrentBlockAngle, this.CurrentMoveType,
            this.CurrentBlockPosition, this.CurrentBlockIndex, this.CurrentDiamondRemain > -1,
            this.GetTextOnBlock(this.TotalBlockSpawned), this.EstimateLandingTimeList,
            angleLastBlock, posXLastBlock);
        //this.BlockList[this.BlockList.length - 1].node.angle, this.BlockList[this.BlockList.length - 1].node.position.x);

        this.CurrentSpawnedBlock.node.parent = this.BlockContainer;
        this.CurrentSpawnedBlock.node.setSiblingIndex(0);
        this.BlockList.push(this.CurrentSpawnedBlock);
    }


    private CalculateNextBlockState(): void
    {
        this.CurrentBlockIndex++;


        var nextBlockConfig: BlockInfo;
        if (this.CurrentMoveType === BlockMoveType.Rotate)
        {
            console.log("ROTATE CALCULATE");
            nextBlockConfig =
            {
                Angle: 0,
                PositionX: 0,
                MinWidth: 200,
                MaxWidth: 320,
                PacingTimeFromPreviousBlock: 0.36,
            }
        }
        else
        {
            nextBlockConfig = SpawnDataConfig.GetNextSpawnInfo();
        }

        if (this.CurrentBlockIndex >= SpawnDataConfig.BonusYForBlockIndex.length)
        {
            console.log("ko the xay ra, check bug");
        }

        // diamond logic
        this.blockCountToSpawnDiamond--;

        this.CurrentMoveBlockRemain--;
        if (Math.abs(nextBlockConfig.PositionX) < 10 && this.CurrentMoveBlockRemain <= 0)
        {
            // block cuối cùng của wave
            // random sang move type mới với wave mới
            this.RandomMoveType();

            if (this.blockCountToSpawnDiamond <= 0 && this.CurrentMoveType === BlockMoveType.Static)
            {
                this.CurrentDiamondRemain = 5;
                this.blockCountToSpawnDiamond = Math.random() * 10 + 15;
            }
        }

        let lastBlockPositionX: number = this.CurrentBlockPosition.x;
        this.CurrentDiamondRemain--;
        this.CurrentBlockPosition = cc.v3(nextBlockConfig.PositionX,
            SpawnDataConfig.PositionYForFirstBlocks[cc.misc.clampf(this.CurrentBlockIndex, 0, SpawnDataConfig.PositionYForFirstBlocks.length - 1)] +
            SpawnDataConfig.BonusYForBlockIndex[cc.misc.clampf(this.CurrentBlockIndex, 0, SpawnDataConfig.BonusYForBlockIndex.length - 1)]);

        if (this.CurrentBlockAngle < 1)
        {
            this.EstimateLandingTimeList.push(0.6);
        }
        else
        {
            this.EstimateLandingTimeList.push(-(this.CurrentBlockPosition.x - lastBlockPositionX) / this.JumpUpVelocity / Math.sin(cc.misc.degreesToRadians(2 * this.CurrentBlockAngle)));
        }

        this.CurrentBlockWidth = cc.misc.clampf(NumberUltilities.GetRandomFloatNumber(nextBlockConfig.MinWidth, nextBlockConfig.MaxWidth) * (1 - cc.misc.clampf(this.TotalBlockSpawned / 200, 0, 0.5)), 135, 720);

        this.CurrentBlockAngle = nextBlockConfig.Angle;
    }

    numberShowOnBlockList: number[] = [20, 50, 100, 150, 200, 300, 500, 750, 1000, 1250, 1500, 2000];
    private GetTextOnBlock(blockIndex: number): string
    {
        if (this.numberShowOnBlockList.indexOf(blockIndex, 0) > -1)
        {
            return blockIndex.toString();
        }
        if (blockIndex === DatabaseManager.bestScore)
        {
            return "BEST";
        }
        return "";
    }

    private RandomMoveType(): void
    {
        if (this.CurrentScore > 3)
        {
            this.CurrentMoveType = this.GetBlockMoveType(Math.round(Math.random() * 7));
        }
        else
        {
            this.CurrentMoveType = BlockMoveType.Static;
        }
        switch (this.CurrentMoveType)
        {
            case BlockMoveType.Rotate:
                this.CurrentMoveBlockRemain = Math.round(Math.random() * 3) + 6;
                break;
            default:
                this.CurrentMoveBlockRemain = 1;
                break;
        }
    }
    private GetBlockMoveType(index: number): BlockMoveType
    {
        // return BlockMoveType.Rotate;
        // 0 => 6
        switch (index)
        {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                return BlockMoveType.Static;
            case 5:
                return BlockMoveType.Rotate;
            case 6:
                return BlockMoveType.Move;
            default:
                return BlockMoveType.Rotate;
            //return BlockMoveType.Swing;
        }
    }
    //#endregion SPAWN BLOCKS

    //#region DIAMOND PACING    
    @property(cc.Prefab)
    private diamondParticlePrefab: cc.Prefab = null;
    @property(cc.Node)
    private flashNode: cc.Node = null;
    private blockCountToSpawnDiamond: number;
    public TimeScale: number = 1;
    /**
     * Số diamond thu được trong session
     */
    public CollectDiamondQty: number = 0;
    private CurrentDiamondStreak: number = 0;
    private FlashFrameCount: number = 0;
    public CollectDiamond(): void
    {
        this.CollectDiamondQty++;
        this.CurrentDiamondStreak++;

        this.DiamondLabel.string = `${ DatabaseManager.totalCoin + this.CollectDiamondQty }`;

        if (this.CurrentDiamondStreak == 5)
        {
            this.TimeScale = 0.5;
            this.flashNode.active = true;
            this.FlashFrameCount = 2;
        }
    }

    public ShowDiamondText(): void
    {
        console.log("show diamond text");
        this.DiamondLabel.string = `${ DatabaseManager.totalCoin }`;
    }

    public SpawnDiamondParticle(spawnPosition: cc.Vec3): void
    {
        var diamondParticle: cc.Node = cc.instantiate(this.diamondParticlePrefab);
        diamondParticle.parent = this.node;
        diamondParticle.position = spawnPosition;
    }
    //#endregion DIAMOND PACING

    //#region MÀU TỪNG ĐOẠN SCORE
    @property([cc.Color])
    private blockColorList: cc.Color[] = []; // các color cho block index 0 theo mốc
    @property([cc.Color])
    private levelColorList: cc.Color[] = [];

    public ColorList: cc.Color[] = [];

    private GenerateColorList(numberOfColor: number, milestoneIndex: number): void
    {
        this.ColorList = [];
        for (let i = 0; i < numberOfColor; i++)
        {
            this.ColorList.push(NumberUltilities.GetLerpColor(this.blockColorList[milestoneIndex], this.levelColorList[milestoneIndex], 1 - Math.pow(1 / 3, i)));
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
            GameManager.Instance.KongiNode.BodySprite.node.position = cc.v3(GameManager.Instance.positionMap.get(GameConfig.listImageSource[characterIndex]));
        });

        this.KongiNode.SetCharacter(characterIndex === 1);
    }

    //#endregion SHOP REGION

    //#region COLLISION EFFECT
    @property(cc.Prefab)
    private tailPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    private topEffectPrefab: cc.Prefab = null;
    public SpawnTailEffect(spawnPosition: cc.Vec3): void
    {
        var tailParticle: cc.Node = cc.instantiate(this.tailPrefab);
        // tailParticle.parent = this.KongiNode.node;
        // tailParticle.position = spawnPosition;
        tailParticle.parent = this.node;
        tailParticle.position = this.BlockList[0].node.position;
    }
    public SpawnTopEffect(spawnPosition: cc.Vec3, angle: number, width: number): void
    {
        var topParticle: cc.Node = cc.instantiate(this.topEffectPrefab);
        topParticle.parent = this.node;
        topParticle.position = spawnPosition;
        topParticle.angle = angle;
        topParticle.getComponent(cc.ParticleSystem).posVar = cc.v2(width, 0);
    }
    //#endregion COLLISION EFFECT

    //#region REVIVE
    public Revive()
    {
        GameState.isShowingRevive = false;
        GameState.isRevived = true;
        this.KongiNode.ResetAfterRevive();
        this.IsPauseGame = true;
        this.IsStarted = false;
    }

    //#endregion REVIVE


    //#region CHANGE COLOR + DEEP EFFECT WHEN REACH MILESTONE
    @property(BackgroundController)
    private backgroundController: BackgroundController = null;
    private currentMilestone: number = 0;

    private CheckMilestoneWhenHitBlock(currentScore: number)
    {
        if (this.numberShowOnBlockList.indexOf(currentScore, 0) > -1)
        {
            this.ChangeBackgroundTheme(cc.misc.clampf(this.currentMilestone + 1, 0, this.levelColorList.length - 1));

            this.ChangeDeepEffect(this.currentMilestone);
        }
    }
    private ChangeBackgroundTheme(milestoneIndex: number): void
    {
        this.currentMilestone = milestoneIndex;
        this.GenerateColorList(this.MaxBlockQty, milestoneIndex);
        this.backgroundController.ChangeBackgroundTheme(milestoneIndex, this.levelColorList[milestoneIndex]);

        for (let i = 0; i < this.BlockList.length; i++)
        {
            this.BlockList[i].ChangeColorWhenChangeMilestone();
        }
    }

    @property([cc.Node])
    private deepEffectList: cc.Node[] = [];
    private ChangeDeepEffect(milestoneIndex: number): void
    {
        milestoneIndex = milestoneIndex % this.deepEffectList.length;
        for (let i = 0; i < this.deepEffectList.length; i++)
        {
            this.deepEffectList[i].active = (i === milestoneIndex);
        }
    }
    //#endregion CHANGE COLOR + DEEP EFFECT WHEN REACH MILESTONE

    public showStatusBar(isShowStatusBar: boolean)
    {
        this.DiamondLabel.node.active = isShowStatusBar;
        this.DiamondSprite.node.active = isShowStatusBar;
        this.ScoreLabel.node.active = isShowStatusBar;
        this.ScoreLabel.string = this.CurrentScore.toString();
    }
}