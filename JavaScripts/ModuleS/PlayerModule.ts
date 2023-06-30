import GameDataServer from "../Cache/GameDataServer";
import SkillConfig from "../Config/SkillConfig";
import PlayerInfo from "../entity/PlayerInfo";
import SkillInfo from "../entity/SkillInfo";
import SkillModule from "./SkillModule";


export default class PlayerModule {

    private static _instance: PlayerModule = new PlayerModule();
    public static GetInstance() {
        return this._instance;
    }

    public Init() {

        DataStorage.setTemporaryStorage(SystemUtil.isPIE)
        //初始化玩家进入游戏事件绑定
        Events.addPlayerJoinedListener(async (player) => {
            //加载玩家基础信息
            try {
                let retryTimes = 0
                let loadSuccess = false

                let playerInfo: PlayerInfo = new PlayerInfo()
                while (retryTimes < 2 && loadSuccess == false) {
                    let playerDataString = await DataStorage.asyncGetPlayerData(player)
                    //存在玩家数据
                    if (playerDataString != undefined) {
                        let playerData = JSON.parse(playerDataString)
                        for (let attribute in playerData) {
                            playerInfo[attribute] = playerData[attribute]
                        }
                        loadSuccess = true
                        break
                    }
                    else {
                        //首次登录该游戏的玩家
                        retryTimes++;
                    }
                }
                //设置最大血量和最大能量
                playerInfo.maxHealth = 100
                playerInfo.maxEnergy = 100

                //当前血量和能量值等于最大血量和能量值
                playerInfo.curHealth = playerInfo.maxHealth
                playerInfo.curEnergy = playerInfo.maxEnergy
                //设置玩家缓存数据
                GameDataServer.playerData.set(player.getUserId(), playerInfo);
                //Events.dispatchToClient(player, "SynPlayerDataToClient", playerInfo);
                return "SUCCESS";
            } catch (error) {
                console.log("获取玩家数据异常" + error);
                return error;
            }
        })

        /**
         * 获取玩家信息
         */
        Events.addClientListener("GetPlayerInfo", (player:Gameplay.Player)=>{
            console.log("服务器接收玩家信息请求")
            Events.dispatchToClient(player,"GetPlayerInfo", JSON.stringify(GameDataServer.getPlayerInfo(player)))
        })

        //玩家离开游戏
        Events.addPlayerLeftListener((player) => {
            //玩家离开存储一次数据
            this.StorePlayerData(player)
            //清楚玩家数据缓存
            GameDataServer.playerData.delete(player.getUserId());
        })

        //每隔30s一段时间玩家数据存储
        TimeUtil.setInterval(() => {
            Gameplay.getAllPlayers().forEach((player) => {
                this.StorePlayerData(player)
            })
        }, 25)

        //更新玩家信息
        Events.addClientListener("AddBasicAttribute", (player, attributeName:string, addValue:number)=>{
            try {
                let playerInfo:PlayerInfo = GameDataServer.getPlayerInfo(player)
                if(!playerInfo)
                {
                    throw new Error("玩家信息不存在")
                }
                if(playerInfo[attributeName] == null)
                {
                    throw new Error("属性名" + attributeName + "不存在！");
                }
                //不能超过玩家剩余属性点，否则算作弊
                let remainPowerPoints = playerInfo.level * 4 - playerInfo.meleePower - playerInfo.swordPower - playerInfo.fruitPower - playerInfo.defensePower
                if(remainPowerPoints <= 0)
                {
                    throw new Error("玩家属性点不足")
                }
                //改变属性点
                playerInfo[attributeName] = playerInfo[attributeName] + addValue
            } catch (error) {
                console.error("AddBasicAttribute Error:" + error)
            }
        })
    }

    
    /**
     * 更新书属性
     * @param player 玩家信息
     * @param attributeName 属性名
     * @param newValue 新值
     */
    public UpdateAttribute(player:Gameplay.Player, attributeName:string, newValue:any)
    {
        let playerInfo:PlayerInfo = GameDataServer.getPlayerInfo(player)
        //存在玩家信息
        if(playerInfo)
        {
            if(playerInfo[attributeName] == null)
            {
                throw new Error("属性名" + attributeName + "不存在！");
            }
            playerInfo[attributeName] = newValue
        }
    }


    /**
     * 属性值增加
     * @param player 
     * @param attributeName 
     * @param addValue 
     */
    public AddAttribute(player:Gameplay.Player, attributeName:string, addValue:any)
    {
        let playerInfo:PlayerInfo = GameDataServer.getPlayerInfo(player)
        //存在玩家信息
        if(playerInfo)
        {
            if(playerInfo[attributeName] == null)
            {
                throw new Error("属性名" + attributeName + "不存在！");
            }
            playerInfo[attributeName] = playerInfo[attributeName] + addValue
        }
        //通知客户端属性值改变了
        Events.dispatchToClient
    }
    

    /**
     * 切换装备技能
     */
    public SwitchEquipSkill(player: Gameplay.Player) {

    }

    /**
     * 装备技能
     */
    public EquipSkill(player: Gameplay.Player) {

    }

    /**
     * 卸下技能
     */
    public UnEquipSkill(player: Gameplay.Player) {

    }

    /**
     * 存储玩家数据
     */
    public async StorePlayerData(player) {

        //如果玩家信息不存在，不执行存储方法
        if (player == null) {
            return
        }
        //数据不存在删除缓存
        if (GameDataServer.getPlayerInfo(player) == null) {
            GameDataServer.playerData.delete(player.getUserId())
            return
        }

        //每隔1s同步玩家基础数据，胜利点数 + 跳跃值
        let retryTimes = 0;
        let success = false;
        while (!success && retryTimes <= 3) {
            //存储失败时，多次重试
            let playerInfo = GameDataServer.getPlayerInfo(player)
            if (playerInfo) {
                let playerStoreStr: string = JSON.stringify(playerInfo);
                //暂时不存储
                if (playerStoreStr == null || playerStoreStr == "") {
                    continue
                }
                let storeResultCode = await DataStorage.asyncSetPlayerData(player, playerStoreStr);
                if (storeResultCode == DataStorage.DataStorageResultCode.Success) {//存储成功
                    console.log("存储玩家数据成功" + storeResultCode);
                    return "SUCCESS";
                }
                else {
                    console.log("存储失败" + storeResultCode);
                    //存储失败需要回滚玩家数据
                    retryTimes++;
                }
            }
            else {
                console.log("玩家不存在： " + player.getUserId() + " end");
            }
            retryTimes++;
        }
    }
}