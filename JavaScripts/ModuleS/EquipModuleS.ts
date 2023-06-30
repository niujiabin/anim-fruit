import GameDataServer from "../Cache/GameDataServer";
import PlayerInfo from "../entity/PlayerInfo";

/**
 * 装备模块
 */
export default class EquipModuleS {

    private static _instance: EquipModuleS = new EquipModuleS();

    public static GetInstance() {
        return this._instance;
    }
    
    public Init()
    {

    }

    /**
     * 装备
     */
    public SwitchUsingEquipmentItem(player:Gameplay.Player, equipItemID:string)
    {
        let playerInfo:PlayerInfo = GameDataServer.getPlayerInfo(player)
        if(!playerInfo)
        {
            return
        }
        //第一次装备
        if(playerInfo.curUsingItemID == "")
        {
            this.Equip(player, equipItemID)
        }
        //卸下
        else if(playerInfo.curUsingItemID == equipItemID)
        {
            this.UnEquip(player, playerInfo.curUsingItemID)
        }
        //切换另一个
        else if(playerInfo.curUsingItemID != "" && playerInfo.curUsingItemID != equipItemID)
        {
            this.UnEquip(player, playerInfo.curUsingItemID)
            this.Equip(player, equipItemID)
        }
        
    }
    /**
     * 卸载装备
     * @param player 
     * @param curUsingItemID 
     */
    UnEquip(player: Gameplay.Player, curUsingItemID: string) {
        let playerInfo:PlayerInfo = GameDataServer.getPlayerInfo(player)
        if(playerInfo)
        {
            playerInfo.curUsingItemID = ""
        }
    }
    
    /**
     * 使用一个装备
     * @param player 
     * @param equipItemID 
     */
    Equip(player: Gameplay.Player, equipItemID: string) {
        let playerInfo:PlayerInfo = GameDataServer.getPlayerInfo(player)
        if(playerInfo)
        {
            playerInfo.curUsingItemID = equipItemID
        }
    }
}