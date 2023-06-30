import TaskInfo from "../entity/TaskInfo";

/**
 * 任务配置模块
 */
export default class TaskConfig  {

    public static taskList:Map<string, TaskInfo> = new Map<string, TaskInfo>([
        ["1001",{
            id : "1001",
            name : "普通怪物",
            description : "这是一个简单的任务",
            enemyID : "1001",
            killNumber : 5,
        }],
        ["1002",{
            id : "1002",
            name : "普通怪物",
            description : "这是一个简单的任务",
            enemyID : "1002",
            killNumber : 5,
        }],
        ["1003",{
            id : "1003",
            name : "普通怪物",
            description : "这是一个简单的任务",
            enemyID : "1002",
            killNumber : 5,
        }],
        ["1004",{
            id : "1004",
            name : "普通怪物",
            description : "这是一个简单的任务",
            enemyID : "1002",
            killNumber : 5,
        }]
    ])
}