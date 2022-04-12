// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class CustomEventManager extends cc.Component
{

    static Instance: CustomEventManager;
    protected onLoad(): void
    {
        CustomEventManager.Instance = this;
    }

    NewGameEvent: string = "NewGame";
    PauseGameEvent: string = "PauseGame";
    ResumeGameEvent: string = "ResumeGame";
    GameOverEvent: string = "GameOver";
    ChangeBackgroundEvent: string = "ChangeEvent";
    UpdateCoinEvent: string = "UpdateCoinEvent";
    UpdateScoreEvent: string = "UpdateScoreEvent";
    UpdateItemEvent: string = "UpdateItemEvent";
    UpdateShopItemEvent: string = "UpdateShopItemEvent";
    UpdateSkinCharacterEvent: string = "UpdateSkinCharacterEvent";
    StartGameEvent: string = "StartGame";

    PostEvent(eventString: string): void
    {
        this.node.emit(eventString);
    }

    PostEventWithParam_1(eventString: string, param: any): void
    {
        this.node.emit(eventString, param);
    }

    PostEventWithParam_2(eventString: string, param_1: any, param_2: any): void
    {
        this.node.emit(eventString, param_1, param_2);
    }

    PostEventWithParam_3(eventString: string, param_1: any, param_2: any, param_3: any): void
    {
        this.node.emit(eventString, param_1, param_2, param_3);
    }
}
