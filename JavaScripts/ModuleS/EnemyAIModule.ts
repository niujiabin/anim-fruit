import GameDataServer from "../Cache/GameDataServer";
import EnemyConfig from "../Config/EnemyConfig";
import NPC from "../NPC";
import EnemyInfo from "../entity/EnemyInfo";
import PlayerInfo from "../entity/PlayerInfo";
import AttackModule from "./AttackModule";

/**
 * 敌人AI模块
 */
export default class EnemyAIModule {

    public allEnemyAnchoreFolder;

    private static _instance: EnemyAIModule = new EnemyAIModule();
    public static GetInstance() {
        return this._instance;
    }
    
    /**
     * 对象池，key怪物所在区域  
     * value 怪物列表
     */
    public static EnemiesPool: Map<string, Array<EnemyInfo>> = new Map<string, Array<EnemyInfo>>()
    /**
     * 
     */
    public async Init() {
        //初始化变量
        await this.InitObj()

        //服务器逻辑
        if (SystemUtil.isServer()) {
            //生成怪物对象，一段时间把当前地图的怪物同步给当前区域玩家
            //服务器需要创建所有敌人对象
            this.InitServerEnemy()
            //AI寻路逻辑
            this.patrolOnServer()
        }
        //客户端逻辑
        else {
            //客户端生成怪物实体
            this.InitClientEnemy()
        }
    }


    /**
     * 
     * 服务器的寻路逻辑
     * 每200ms服务器所有怪物执行下一个位置的计算
     * 
     */
    patrolOnServer() {
        setInterval(() => {
            //遍历所有区域的所有怪物
            EnemyAIModule.EnemiesPool.forEach((enemiesArray, areaName) => {
                enemiesArray.forEach((enemy, index) => {
                    this.doPatrolOnServer(enemy)
                })
            })
        }, 200)
    }

    /**
     * 
     * 某个敌人执行搜寻逻辑
     * @param enemy 
     */
    doPatrolOnServer(enemy: EnemyInfo) {

        //如果玩家处于追击状态，且离追击玩家很近，则不再追击了，进入攻击状态
        if (enemy.runStatus == "chase"
            && Vector.distance(
                enemy.hatePlayer.character.worldLocation,
                enemy.curWorldPosition) < EnemyConfig.attackRadius) {
            //处于攻击前摇状态，此时装备发动技能或普通攻击
            enemy.runStatus = "preAttack"
            ///延时一定时间，发动攻击
            setTimeout(() => {
                //服务器开始计算伤害，普通攻击，只对仇恨玩家造成伤害
                //判断和玩家的距离
                if (enemy.runStatus == "preAttack"
                    && enemy.hatePlayer
                    && GameDataServer.getPlayerInfo(enemy.hatePlayer)
                    && Vector.distance(
                        enemy.hatePlayer.character.worldLocation,
                        enemy.curWorldPosition) < EnemyConfig.attackRadius) {
                    //敌人对玩家造成了伤害
                    AttackModule.GetInstance().damageCheckout(enemy, enemy.hatePlayer, "")
                }
            }, 200);
        }
        //判断敌人是否离出生点太远
        if (enemy.spawnWorldPosition && Vector.distance(enemy.spawnWorldPosition, enemy.curWorldPosition) >= EnemyConfig.returnRadius) {
            //计算返回方向
            enemy.moveDirection = Vector.subtract(
                enemy.spawnWorldPosition,
                enemy.curWorldPosition
            ).normalize()
        }
        //如果敌人主动攻击，找自己相对较近的玩家作为仇恨对象
        if (enemy.activeAttack) {
            let nearestPlayer;
            let minDistance = 99999
            Gameplay.getAllPlayers().forEach((player) => {
                let distance = Vector.distance(
                    player.character.worldLocation,
                    enemy.curWorldPosition)

                if (distance < minDistance && distance > EnemyConfig.minChaseRadius && distance < EnemyConfig.maxChaseRadius) {
                    nearestPlayer = player
                }
                //计算移动方向
                if (nearestPlayer) {
                    enemy.runStatus = "chase"//追赶状态
                    //设置仇恨玩家
                    enemy.hatePlayer = nearestPlayer
                    enemy.moveDirection = Vector.subtract(
                        nearestPlayer.character.worldLocation,
                        enemy.curWorldPosition
                    ).normalize()
                }
            })
        }
    }


    async InitObj() {
        this.allEnemyAnchoreFolder = await Core.GameObject.asyncFind("2391765D");
    }
    /**
     * 初始化客户端怪物信息
     */
    InitClientEnemy() {
        this.allEnemyAnchoreFolder.getChildren().forEach((enemyArea) => {
            //获取地图区域
            //根据地图区域创建敌方怪物信息
            enemyArea.getChildren().forEach((enemySpawnPoint) => {
                let enemyInfo: EnemyInfo = new EnemyInfo()
                enemyInfo.curWorldPosition = enemySpawnPoint.worldLocation
                console.log("客户端创建敌人信息" + JSON.stringify(enemyInfo))

                //创建某一个区域的怪物
                this.CreateOneEnemyModelByAreaAndSpawnPoint(enemyArea, enemySpawnPoint)


            })
        })
    }
    /**
     * 
     * 创建敌人模型 根据敌人所在区域和出生点
     * @param enemyArea 
     * @param enemySpawnPoint 
     */
    CreateOneEnemyModelByAreaAndSpawnPoint(enemyArea: any, enemySpawnPoint: any) {
        //创建敌人信息
        Core.GameObject.asyncSpawn({
            guid: EnemyConfig.allEnemy[0].prefabAssetID,//敌人资源id
            replicates: false
        }).then((enemyPrefab) => {
            let npc = enemyPrefab.getChildByName("Character") as Gameplay.NPC
            console.log(npc)
            npc.worldLocation = enemySpawnPoint.worldLocation
            let locationA = new Type.Vector(306.990, -958.060, 41.000)
            console.log("Move to")
            //执行moveto函数
            Gameplay.moveTo(npc, locationA, 3, () => {
                npc.maxWalkSpeed = 200;
                console.log("ok")
            }, () => {
                console.log("fail")
            })
        })
    }
    /**
     * 初始化服务器端敌人对象
     */
    InitServerEnemy() {
        this.allEnemyAnchoreFolder.getChildren().forEach((enemyArea) => {
            if (!EnemyAIModule.EnemiesPool.has(enemyArea)) {
                EnemyAIModule.EnemiesPool.set(enemyArea, new Array<EnemyInfo>())
            }
            enemyArea.getChildren().forEach((enemySpawnPoint) => {
                let enemyInfo: EnemyInfo = new EnemyInfo()
                enemyInfo.curWorldPosition = enemySpawnPoint.worldLocation
                console.log("服务器创建敌人信息" + JSON.stringify(enemyInfo))
                //向集合添加敌人
                EnemyAIModule.EnemiesPool.get(enemyArea).push(enemyInfo)
            })
        })
    }

    /**
     * 敌人被打死
     */
    public die() {

    }
    /**
     * 怪物重新复活
     */
    public reSpawn() {

    }

}
