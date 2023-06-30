
/**
 * 游戏中的所有资源
 */
export default class GameAssetsConfig{

    /**
     * 所有动画资源
     */
    public static animationAssets :Map<string,any> = new Map<string,any>([

        ["1001",{
            id:"1001",
            name:"左冲刺",
            assetID :"151007"
        }],
        ["1002",{
            id:"1002",
            name:"右冲刺",
            assetID :"151008"
        }]

    ])
}