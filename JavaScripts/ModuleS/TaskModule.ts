import GameDataServer from "../Cache/GameDataServer";
import EnemyConfig from "../Config/EnemyConfig";
import TaskConfig from "../Config/TaskConfig";
import BasicEnemyInfo from "../entity/BasicEnemyInfo";
import EnemyInfo from "../entity/EnemyInfo";
import PlayerInfo from "../entity/PlayerInfo";
import TaskInfo from "../entity/TaskInfo";

/**
 * 任务模块
 */
export default class TaskModule{


    private static _instance: TaskModule = new TaskModule();

    public static GetInstance() {
        return this._instance;
    }

    /**
     * 初始化
     */
    public Init()
    {

        //接受新的任务
        Events.addClientListener("receiveTask", (player, receiveTaskID:string)=>{
            let resultInfo:ResultInfo = this.receiveTask(player, receiveTaskID)
        })
    }

    /**
     * 结算一个敌人
     * @param playerInfo 
     * @param enemyInfo 
     */
    public CheckoutOneEnemy(playerInfo: PlayerInfo, enemyInfo: EnemyInfo):ResultInfo
    {
        try {
            //获取当前执行的任务ID
            if(playerInfo.currentTaskID == "")//此时未接收任务
            {
                return 
            }
            //存在任务
            if(!TaskConfig.taskList.has(playerInfo.currentTaskID))
            {
                return
            }
            let taskInfo:TaskInfo = TaskConfig.taskList.get(playerInfo.currentTaskID)
            //获得经验
            playerInfo.exp += enemyInfo.exp
            //击杀数量+1
            playerInfo.currentTaskCompletedCount += 1
        } catch (error) {
            
        }
        
    }

    /**
     * 完成一个任务
     * @param player 
     * @param taskID 
     */
    public completeTask(player:Gameplay.Player, taskID:string):ResultInfo
    {
        let playerInfo:PlayerInfo = GameDataServer.getPlayerInfo(player)
        if(playerInfo)
        {
            //判断任务是否完成

        }
    }


    /**
     * 领取一个任务
     * @param player 玩家
     * @param receiveTaskID 领取的任务
     */
    public receiveTask(player:Gameplay.Player, receiveTaskID:string):ResultInfo
    {
        try {
            let playerInfo:PlayerInfo = GameDataServer.getPlayerInfo(player)
            if(!playerInfo)
            {
                throw new Error("玩家信息不存在")
            }            
            let taskInfo:TaskInfo = TaskConfig.taskList.get(receiveTaskID)
            if(!taskInfo)
            {
                throw new console.error("任务信息不存在");
            }
            let basicEnemyInfo:BasicEnemyInfo = EnemyConfig.allEnemy.get(taskInfo.enemyID)
            if(!basicEnemyInfo)
            {
                throw new Error("需要领取的敌人不存在")
            }
            //判断任务领取级别
            if(playerInfo.level < basicEnemyInfo.level)
            {
                throw new Error("玩家等级不足")
            }
            //设置玩家任务
            playerInfo.currentTaskID = receiveTaskID
            //重置击杀个数
            playerInfo.currentTaskCompletedCount = 0
            //通知客户端任务任务领取完成
            
        } catch (error) {
            
        }
    }
}