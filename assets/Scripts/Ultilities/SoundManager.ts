// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import NumberUltilities from "./NumberUltilities";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SoundManager extends cc.Component
{
    @property(cc.AudioSource)
    private BackgroundSource: cc.AudioSource = null;
    @property(cc.AudioSource)
    private EffectSource: cc.AudioSource = null;
    public static Instance: SoundManager;
    protected onLoad(): void
    {
        if (SoundManager.Instance == null)
        {
            SoundManager.Instance = this;
        }
        else
        {
            this.destroy();
        }
        cc.game.addPersistRootNode(this.node);
    }
    //#region BACKGROUND MUSIC
    public PauseBackgroundMusic(): void
    {
        this.BackgroundSource.pause();
    }
    public ResumeBackgroundMusic(): void
    {
        this.BackgroundSource.resume();
    }

    public PlayBackgroundMusic(): void
    {
        this.BackgroundSource.play();
    }

    public ChangeBackgroundMusic(newBackgroundMusic: cc.AudioClip): void
    {
        this.BackgroundSource.clip = newBackgroundMusic;
    }
    //#endregion BACKGROUND MUSIC

    //#region SOUND EFFECT
    public PlaySoundEffect(efxClip: cc.AudioClip): void
    {
        this.EffectSource.clip = efxClip;
        this.EffectSource.play();
    }
    public MuteSoundEffect(): void
    {
        this.EffectSource.mute = true;
    }
    public UnmuteSoundEffect(): void
    {
        this.EffectSource.mute = false;
    }
    //#endregion SOUND EFFECT

    //#region EFFECT LIST
    // PHẦN NÀY TÙY TỪNG GAME
    // GIỮ LẠI HOẶC XÓA THÌ TÙY
    @property(cc.AudioClip)
    private buttonSound: cc.AudioClip = null;
    @property([cc.AudioClip])
    private hitSound: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private gameOverSound: cc.AudioClip = null;
    public PlayButtonSound(): void
    {
        this.PlaySoundEffect(this.buttonSound);
    }

    public PlayHitSound(): void
    {
        this.PlaySoundEffect(this.hitSound[NumberUltilities.GetRandomIntNumber(0, this.hitSound.length)]);
    }

    public PlayGameOverSound(): void
    {
        this.PlaySoundEffect(this.gameOverSound);
    }
    //#endregion EFFECT LIST


    //TODO Pause sound background

    pauseBGM(){

    }

    resumeBGM(){

    }
}
