import Item from "./Item"

/**
 * 角色信息
 */
export default class PlayerInfo {
    /**
     * 等级
     */
    public level:number = 1
    /**
     * 经验值
     */
    public exp:number = 0
    /**
     * 阵营
     */
    public camp:string = ""
    /**
     * 角色出生点地图
     */
    public spawnLocateMap:string = ""
    /**
     * 角色当前所处的地图
     */
    public currentLocateMap:string = ""
    /**
     * 金钱
     */
    public money:number = 0
    /**
     * 生命
     */
    public maxHealth:number = 100
    /**
     * 当前生命
     */
    public curHealth:number = 0
    /**
     * 能量
     */
    public maxEnergy:number = 0
    /**
     * 当前能量
     */
    public curEnergy = 0
    /**
     * 当前真在执行的任务ID
     */
    public currentTaskID:string = ""
    /**
     * 当前任务已经完成的数量
     */
    public currentTaskCompletedCount = 0
    /**
     * 近战能力点
     */
    public meleePower:number = 0
    /**
     * 防御能力点
     */
    public defensePower:number = 0
    /**
     * 剑能力点
     */
    public swordPower:number = 0
    /**
     * 变身水果能力点
     */
    public fruitPower:number = 0
    /**
     * 当前装备项ID
     */
    public curUsingItemID:string = ""
    /**
     * 玩家当前所有装备的技能项
     */
    public curEquipingItemIDList:Array<string> = new Array<string>()
    /**
     * 物品列表
     */
    public itemList:Array<Item> = new Array<Item>();
    /**
     * 装备信息
     */
}