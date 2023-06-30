import GameAssetsConfig from "../Assets/GameAssetsConfig";


export default class AssetLoadModuleC  {

    private static _instance: AssetLoadModuleC = new AssetLoadModuleC();
    public static GetInstance() {
        return this._instance;
    }
    
    /**
     * 执行初始化
     */
    public Init()
    {
        //加载动画资源
        console.log("开始加载动画资源信息")
        GameAssetsConfig.animationAssets.forEach((value, key)=>{
            Util.AssetUtil.asyncDownloadAsset(value.assetID).then((downResult)=>{
                if(downResult)
                    console.log("加载动画资源信息成功：" + value.assetID)
                else
                    console.log("加载动画资源信息失败：" + value.assetID)
            })
        })
        //加载特效信息


        //加载图片信息


    }
}