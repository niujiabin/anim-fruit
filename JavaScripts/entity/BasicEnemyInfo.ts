
/**
 * 基础敌人信息
 * 
 * 敌人的基础，具体敌人是根据此创建的
 */
export default class BasicEnemyInfo {
    /**
     * 敌人id
     */
    public id: string = ""
    /**
 * 预制体ID
 */
    public prefabCharacterID: string
    /**
* 等级
*/
    public level: number
    /**
     * 敌人名字
     */
    public name: string = ""
    /**
     * 是否主动攻击
     */
    public activeAttack = false
    /**
     * 最大生命值
     */
    public maxHealth: number
    /**
     * 攻击力
     */
    public attackPower: number
    /**
     * 防御力
     */
    public defensePower: number
    /**
     * 击杀后获得经验值
     */
    public exp: number
    /**
     * 所属地图ID
     */
    public belongMapId: string
    /**
     * 移动速度
     */
    public moveSpeed: number = 0
    /**
 * 敌人所有的技能状态信息，比如，敌人在一定时间之后使用某个技能进行攻击
 */
    public skillList;
}