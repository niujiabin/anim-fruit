import PlayerInfo from "../entity/PlayerInfo";


export default class GameDataServer {

    //玩家信息维护
    public static playerData:Map<string, PlayerInfo> = new Map<string, PlayerInfo>();
    //玩家所有拥有的宠物对象维护,  某个玩家维护很多游戏对象
    public static playerPetAttachData:Map<string, string[]> = new Map<string, string[]>();

    /**
     *  getPlayerInfo
        playerId:string    
     */
    public static getPlayerInfo(player:Gameplay.Player) {
        return this.playerData.get(player.getUserId())
    }
}