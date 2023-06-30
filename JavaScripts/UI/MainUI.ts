
/** 
 * AUTHOR: 爱挤牙膏的牛
 * TIME: 2023.06.24-10.50.36
 */

import PlayerModuleC from "../ModuleC/PlayerModuleC";
import MainUI_Generate from "../ui-generate/MainUI_generate";

export default class MainUI extends MainUI_Generate {

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UI.UILayerMiddle;

		//设置本地信息
		Events.addLocalListener("SetLocalBasicUI", ()=>{
			let playerInfo = PlayerModuleC.playerInfo
			this.levelText.text = playerInfo.level.toString() + "级"
			this.monetText.text = "￥"+playerInfo.money.toString()
			this.healthText.text = playerInfo.curHealth + "/" + playerInfo.maxHealth
			this.energyText.text = playerInfo.curEnergy + "/" + playerInfo.maxEnergy
			this.healthBar.currentValue = playerInfo.curHealth / playerInfo.maxHealth
			this.energyBar.currentValue = playerInfo.curEnergy / playerInfo.maxEnergy

			console.log("设置玩家当前信息成功:"+PlayerModuleC.playerInfo)
		})

		/**
		 * 数据按钮
		 */
		this.basicDataBtn.onClicked.add(()=>{


		})

		/**
		 * 背包按钮
		 */
		this.itemBtn.onClicked.add(()=>{

		})


		/**
		 * 商店按钮
		 */
		this.shopBtn.onClicked.add(()=>{

		})


		/**
		 * 关闭按钮
		 */
		this.closeBtn.onClicked.add(()=>{

		})

		
	}

	/** 
	 * 构造UI文件成功后，onStart之后 
	 * 对于UI的根节点的添加操作，进行调用
	 * 注意：该事件可能会多次调用
	 */
	protected onAdded() {
	}

	/** 
	 * 构造UI文件成功后，onAdded之后
	 * 对于UI的根节点的移除操作，进行调用
	 * 注意：该事件可能会多次调用
	 */
	protected onRemoved() {
	}

	/** 
	* 构造UI文件成功后，UI对象再被销毁时调用 
	* 注意：这之后UI对象已经被销毁了，需要移除所有对该文件和UI相关对象以及子对象的引用
	*/
	protected onDestroy() {
	}

	/**
	* 每一帧调用
	* 通过canUpdate可以开启关闭调用
	* dt 两帧调用的时间差，毫秒
	*/
	//protected onUpdate(dt :number) {
	//}

	/**
	 * 设置显示时触发
	 */
	//protected onShow(...params:any[]) {
	//}

	/**
	 * 设置不显示时触发
	 */
	//protected onHide() {
	//}

	/**
	 * 当这个UI界面是可以接收事件的时候
	 * 手指或则鼠标触发一次Touch时触发
	 * 返回事件是否处理了
	 * 如果处理了，那么这个UI界面可以接收这次Touch后续的Move和End事件
	 * 如果没有处理，那么这个UI界面就无法接收这次Touch后续的Move和End事件
	 */
	//protected onTouchStarted(InGeometry :UI.Geometry,InPointerEvent:UI.PointerEvent) :UI.EventReply{
	//	return UI.EventReply.unHandled; //UI.EventReply.handled
	//}

	/**
	 * 手指或则鼠标再UI界面上移动时
	 */
	//protected onTouchMoved(InGeometry :UI.Geometry,InPointerEvent:UI.PointerEvent) :UI.EventReply{
	//	return UI.EventReply.unHandled; //UI.EventReply.handled
	//}

	/**
	 * 手指或则鼠标离开UI界面时
	 */
	//protected onTouchEnded(InGeometry :UI.Geometry,InPointerEvent:UI.PointerEvent) :UI.EventReply{
	//	return UI.EventReply.unHandled; //UI.EventReply.handled
	//}

	/**
	 * 当在UI界面上调用detectDrag/detectDragIfPressed时触发一次
	 * 可以触发一次拖拽事件的开始生成
	 * 返回一次生成的拖拽事件 newDragDrop可以生成一次事件
	 */
	//protected onDragDetected(InGeometry :UI.Geometry,InPointerEvent:UI.PointerEvent):UI.DragDropOperation {
	//	return this.newDragDrop(null);
	//}

	/**
	 * 拖拽操作生成事件触发后经过这个UI时触发
	 * 返回true的话表示处理了这次事件，不会再往这个UI的下一层的UI继续冒泡这个事件
	 */
	//protected onDragOver(InGeometry :UI.Geometry,InDragDropEvent:UI.PointerEvent,InDragDropOperation:UI.DragDropOperation):boolean {
	//	return true;
	//}

	/**
	 * 拖拽操作生成事件触发后在这个UI释放完成时
	 * 返回true的话表示处理了这次事件，不会再往这个UI的下一层的UI继续冒泡这个事件
	 */
	//protected onDrop(InGeometry :UI.Geometry,InDragDropEvent:UI.PointerEvent,InDragDropOperation:UI.DragDropOperation):boolean {
	//	return true;
	//}

	/**
	 * 拖拽操作生成事件触发后进入这个UI时触发
	 */
	//protected onDragEnter(InGeometry :UI.Geometry,InDragDropEvent:UI.PointerEvent,InDragDropOperation:UI.DragDropOperation) {
	//}

	/**
	 * 拖拽操作生成事件触发后离开这个UI时触发
	 */
	//protected onDragLeave(InGeometry :UI.Geometry,InDragDropEvent:UI.PointerEvent) {
	//}
	
	/**
	 * 拖拽操作生成事件触发后，没有完成完成的拖拽事件而取消时触发
	 */
	//protected onDragCancelled(InGeometry :UI.Geometry,InDragDropEvent:UI.PointerEvent) {
	//}
	
}
