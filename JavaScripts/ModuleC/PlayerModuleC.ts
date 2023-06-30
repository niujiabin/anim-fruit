import MainUI from "../UI/MainUI";
import PlayerInfo from "../entity/PlayerInfo";

/**
 * 玩家客户端模块
 */
export default class PlayerModuleC {

    private static _instance: PlayerModuleC = new PlayerModuleC();
    public static GetInstance() {
        return this._instance;
    }

    public static playerInfo:PlayerInfo

    /**
     * 玩家客户端初始化
     */
    public Init()
    {
        //接受玩家信息
        Events.addServerListener("GetPlayerInfo",(playerInfoStr:string)=>{
            console.log("接收到玩家信息")
            PlayerModuleC.playerInfo = JSON.parse(playerInfoStr) as PlayerInfo
            //发送本地事件
            Events.dispatchLocal("SetLocalBasicUI");
        })
        
        //获取玩家基础信息
        if(PlayerModuleC.playerInfo == null)
        {
            console.log("客户端加载玩家信息")
            Events.dispatchToServer("GetPlayerInfo")
        }
    }

    /**
     * 获取剩余能量
     */
    public GetRemainPower():number
    {
        let playerInfo = PlayerModuleC.playerInfo
        return  PlayerModuleC.playerInfo.level * 4 - playerInfo.meleePower - playerInfo.fruitPower - playerInfo.swordPower - playerInfo.defensePower
    }

    public GetPlayerInfo()
    {

    }
}