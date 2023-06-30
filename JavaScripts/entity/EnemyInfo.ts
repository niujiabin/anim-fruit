import BasicEnemyInfo from "./BasicEnemyInfo"

/**
 * 敌人信息
 */
export default class EnemyInfo extends  BasicEnemyInfo{

    /**
     * 仇恨玩家ID
     */
    public hatePlayer:Gameplay.Player = null
    /**
     * 当前玩家的运行状态，初始为静止状态
     */
    public runStatus:string = "idle"
    /**
     * 当前生命值
     */
    public curHealth:number
    /**
     * 敌人前进方向，为了计算移动距离
     */
    public moveDirection:Vector
    /**
     * 当前所处世界坐标
     */
    public curWorldPosition:Vector
    /**
     *  出生点世界坐标x 
     */
    public spawnWorldPosition:Vector
    /**
     * 复活间隔
     */
    public respawnInterval = 10
    /**
     * 当前敌人使用的技能
     */
    public curSkillkID:string
}