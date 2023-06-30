
@Core.Class
export default class NPC extends Core.Script {

    protected async onStart(): Promise<void> {

        //通过GUID找到NPC对象
        // let NPC5 = await Core.GameObject.asyncFind("39A98239") as Gameplay.NPC;

        // //NPC数据准备好后执行相应逻辑
        // NPC5.ready().then(() => {

        //     //非玩家对象会在5s后进行寻路
        //     setTimeout(() => {
        //         // 设置角色移动速度
        //         // NPC5.maxWalkSpeed = 200;
        //         //设定移动终点
        //         let locationA = new Type.Vector(306.990,-958.060,41.000)
        //         console.log("Move to")
        //         //执行moveto函数
        //         Gameplay.moveTo(NPC5, locationA, 3, ()=>{
        //             NPC5.maxWalkSpeed = 200;
        //             console.log("ok")
        //         }, ()=>{
        //             console.log("fail")
        //         })

        //     }, 2000);

        // });

    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {

    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}