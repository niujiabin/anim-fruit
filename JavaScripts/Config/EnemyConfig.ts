import BasicEnemyInfo from "../entity/BasicEnemyInfo"
import EnemyInfo from "../entity/EnemyInfo"

/**
 * 敌方配置信息
 */
export default class EnemyConfig {
    //在这个范围距离之内，对方会追击
    public static minChaseRadius = 100
    public static maxChaseRadius = 200
    //进入攻击范围距离
    public static attackRadius = 10
    //自动回原点距离
    public static returnRadius = 300

    /**
     * 某个ID的敌人信息
     */
    public static allEnemy: Map<string, BasicEnemyInfo> = new Map<string, BasicEnemyInfo>([
        ["1001", {
            id: "",
            prefabCharacterID: "",
            level: 1,
            name: "贼",
            activeAttack: false,
            maxHealth: 100,
            attackPower: 3,
            defensePower: 3,
            exp: 10,
            belongMapId: "1",
            moveSpeed: 50,
            skillList: []
        }],
        ["1002", {
            id: "",
            prefabCharacterID: "",
            level: 1,
            name: "贼",
            activeAttack: false,
            maxHealth: 100,
            attackPower: 3,
            defensePower: 3,
            exp: 10,
            belongMapId: "1",
            moveSpeed: 50,
            skillList: []
        }]
    ])
}