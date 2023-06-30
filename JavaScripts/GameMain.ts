import GameAssetsConfig from "./Assets/GameAssetsConfig";
import AssetLoadModuleC from "./ModuleC/AssetLoadModuleC";
import PlayerModuleC from "./ModuleC/PlayerModuleC";
import EnemyAIModule from "./ModuleS/EnemyAIModule";
import PlayerModule from "./ModuleS/PlayerModule";
import MainUI from "./UI/MainUI";

@Core.Class
export default class GameMain extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //EnemyAIModule.GetInstance().Init()
        if (SystemUtil.isServer()) {

            //加载玩家模块
            PlayerModule.GetInstance().Init()

            this.useUpdate = true
            console.log(12345)
            Events.addPlayerJoinedListener((player)=>{
                setTimeout(() => {
                    player.character.playAnimation(GameAssetsConfig.animationAssets.get("1001").assetID, 1, 1)
                    player.character.addImpulse(new Vector(0,-20000,0), true)
                    
                }, 2000);
            })
            Gameplay.getAllPlayers().forEach((player)=>{
                
            })
        }
        else {

            //初始化UI界面
            //将玩家信息同步到UI界面
            let mainUI = UI.UIManager.instance.getUI(MainUI)

            //初始化客户端各个模块
            PlayerModuleC.GetInstance().Init()            

            AssetLoadModuleC.GetInstance().Init()
            //角色冲刺测试
            this.characterDash()
            // Core.GameObject.asyncFind("10D8913B").then((Area_1_List)=>{
            //     let allnpc = Area_1_List.getChildren()
            //     allnpc.forEach((npc:Gameplay.NPC)=>{
            //        npc.ready().then(()=>{
            //         let locationA = new Type.Vector(306.990,-958.060,41.000);
            //         //执行moveto函数
            //         Gameplay.moveTo(npc, locationA)3
            //        })
            //     })
            // })
        }
    }
    characterDash() {
        console.log("characterDash")
        let player = Gameplay.getCurrentPlayer()
        //获取相机方向
        let centerLocation = Gameplay.getSightBeadLocation()
        //加载动画信息
        // let ThrusterOG = this.gameObject as Gameplay.PhysicsThruster; //指定推进器功能对象
        // ThrusterOG.strength = 1650000;  //设置推进力
        // ThrusterOG.enable = true;      //开启推进器
        // ThrusterOG.relativeRotation = new Rotation(0,0,0)
        //角色冲刺一端距离
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {
        //每一帧更新敌人实时位置
        EnemyAIModule.EnemiesPool.forEach((enemiesArray, areaName) => {
            enemiesArray.forEach((enemy, index) => {
                if (enemy.moveDirection) {
                    //实时更新怪物在服务器的位置，这里不调用c++，只给属性赋值
                    enemy.curWorldPosition = Vector.multiply(enemy.moveDirection, enemy.moveSpeed)
                }
            })
        })
        //每隔若干帧执行
    }
    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}