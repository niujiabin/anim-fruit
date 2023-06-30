
/** 
 * AUTHOR: 爱挤牙膏的牛
 * TIME: 2023.06.29-22.42.49
 */

import PlayerModuleC from "../ModuleC/PlayerModuleC";
import BasicDataUI_Generate from "../ui-generate/BasicDataUI_generate";

export default class BasicDataUI extends BasicDataUI_Generate {

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UI.UILayerMiddle;

		//4个按钮
		let addBtnList = [
			{ btnUI: this.addMeleeBtn, attributeName: "meleePower" },
			{ btnUI: this.addSwordBtn, attributeName: "swordPower" },
			{ btnUI: this.addFruitBtn, attributeName: "fruitPower" },
			{ btnUI: this.addDefenseBtn, attributeName: "defensePower" },
		]

		//绑定4个添加按钮事件
		addBtnList.forEach((info) => {
			info.btnUI.onClicked.add(() => {
				try {
					let remainPower = PlayerModuleC.GetInstance().GetRemainPower();
					if (remainPower <= 0) {
						console.log("角色能力点不足")
						return
					}
					//本地变量
					PlayerModuleC.playerInfo[info.attributeName] -= 1
					//UI文本
					this[info.attributeName + "Text"].Text = PlayerModuleC.playerInfo[info.attributeName]
					//通知服务器改变属性
					Events.dispatchToServer("AddBasicAttribute", info.attributeName, 1)
					//客户端弹出增加成功提示
				} catch (error) {
					console.error("消耗能力点错误：" + error)
				}
			})
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
	//protected onDragLeave(InDragDropEvent:UI.PointerEvent,InDragDropOperation:UI.DragDropOperation) {
	//}

	/**
	 * 拖拽操作生成事件触发后，没有完成完成的拖拽事件而取消时触发
	 */
	//protected onDragCancelled(InDragDropEvent:UI.PointerEvent,InDragDropOperation:UI.DragDropOperation) {
	//}

}
