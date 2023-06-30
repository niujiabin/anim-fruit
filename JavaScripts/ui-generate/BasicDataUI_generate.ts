
/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱挤牙膏的牛
 * UI: UI/BasicDataUI.ui
 * TIME: 2023.06.30-10.49.08
*/



@UI.UICallOnly('UI/BasicDataUI.ui')
export default class BasicDataUI_Generate extends UI.UIBehavior {
	@UI.UIMarkPath('RootCanvas/meleePowerText')
    public meleePowerText: UI.TextBlock=undefined;
    @UI.UIMarkPath('RootCanvas/defensePowerText')
    public defensePowerText: UI.TextBlock=undefined;
    @UI.UIMarkPath('RootCanvas/swordPowerText')
    public swordPowerText: UI.TextBlock=undefined;
    @UI.UIMarkPath('RootCanvas/fruitPowerText')
    public fruitPowerText: UI.TextBlock=undefined;
    @UI.UIMarkPath('RootCanvas/addMeleeBtn')
    public addMeleeBtn: UI.StaleButton=undefined;
    @UI.UIMarkPath('RootCanvas/addDefenseBtn')
    public addDefenseBtn: UI.StaleButton=undefined;
    @UI.UIMarkPath('RootCanvas/addSwordBtn')
    public addSwordBtn: UI.StaleButton=undefined;
    @UI.UIMarkPath('RootCanvas/addFruitBtn')
    public addFruitBtn: UI.StaleButton=undefined;
    

 
	/**
	* onStart 之前触发一次
	*/
	protected onAwake() {
	}
	 
}
 