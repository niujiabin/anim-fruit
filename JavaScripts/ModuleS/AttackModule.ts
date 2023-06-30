import GameDataServer from "../Cache/GameDataServer";
import EnemyInfo from "../entity/EnemyInfo";
import PlayerInfo from "../entity/PlayerInfo";
import EnemyAIModule from "./EnemyAIModule";
import TaskModule from "./TaskModule";


/**
 * 攻击模块
 */
export default class AttackModule {


    private static _instance: AttackModule = new AttackModule();
    public static GetInstance() {
        return this._instance;
    }

    /**
     * 
     * 攻击者使用了一个技能
     * @param player 
     * @param skillID 
     */
    public UseSkill(role : PlayerInfo | EnemyInfo, skillID:string)
    {
        //获取玩家信息
        // let playerInfo:PlayerInfo = GameDataServer.getPlayerInfo(player)
        //获取技能信息
        // let skillInfo = SkillConfig.GetById(skillID)
        //生成技能 参数：谁发出的技能 和 技能信息，谁接收到技能不一定
        // SkillModule.GenerateSkill(player, skillInfo)

        //玩家使用技能
        if(role instanceof PlayerInfo)
        {
            //创建技能碰撞模型

            //将技能特效挂载到碰撞模型

            //碰撞模型绑定碰撞事件

            //发射类技能用力进行发射，碰撞体不碰撞，但是可以检测，一旦碰撞到谁，判断时角色还是敌人，并进行伤害结算



            //一个碰撞事件只对碰到的某个固定单位生效一次，再次碰触不生效

            //玩家使用技能时

        }

        //敌人使用技能
        else
        {

        }
    }
    


    /**
     * 
     * 伤害结算
     * 攻击者使用某个技能对被攻击者造成一次伤害结算
     * @param attack
     * @param beAttacked 
     */
    public damageCheckout(attacker:any , beAttacker:any, skillID:string)
    {
        //敌人攻击玩家
        if(attacker instanceof EnemyInfo && beAttacker instanceof PlayerInfo)
        {
            let attackerObj = (attacker as EnemyInfo)
            let beAttackerObj = (beAttacker as PlayerInfo) 

        }
        //玩家攻击敌人
        else if(attacker instanceof PlayerInfo && beAttacker instanceof EnemyInfo)
        {
            let playerInfo = (attacker as PlayerInfo)
            let enemyInfo = (beAttacker as EnemyInfo)        
            
            let attackPower = 10
            let defensePower = 5

            //击败怪物
            if(attackPower - defensePower > enemyInfo.curHealth)
            {
                enemyInfo.curHealth = 0
                //任务结算
                TaskModule.GetInstance().CheckoutOneEnemy(playerInfo, enemyInfo)
                //敌人生命值为0，通知客户端使得敌人消失
                
                //一段时间之后，复活敌人
                setTimeout(() => {
                    //恢复敌人最大生命值
                    enemyInfo.curHealth = enemyInfo.maxHealth
                    //通知客户端恢复创建敌人模型（需要在开始时候生成一个怪物的唯一UUID，客户端需要根据这个去知道是哪个怪物被创建了）
                }, enemyInfo.respawnInterval * 1000)
            }

        }
        //玩家攻击玩家
        else if(attacker instanceof PlayerInfo && beAttacker instanceof PlayerInfo)
        {
            let attackerObj = (attacker as PlayerInfo)
            let beAttackerObj = (beAttacker as PlayerInfo) 


        }
    }
}