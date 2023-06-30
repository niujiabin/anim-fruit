
/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱挤牙膏的牛
 * UI: UI/MainUI.ui
 * TIME: 2023.06.30-10.49.08
*/



@UI.UICallOnly('UI/MainUI.ui')
export default class MainUI_Generate extends UI.UIBehavior {
	@UI.UIMarkPath('RootCanvas/healthBar')
    public healthBar: UI.ProgressBar=undefined;
    @UI.UIMarkPath('RootCanvas/energyBar')
    public energyBar: UI.ProgressBar=undefined;
    @UI.UIMarkPath('RootCanvas/healthText')
    public healthText: UI.TextBlock=undefined;
    @UI.UIMarkPath('RootCanvas/energyText')
    public energyText: UI.TextBlock=undefined;
    @UI.UIMarkPath('RootCanvas/levelText')
    public levelText: UI.TextBlock=undefined;
    @UI.UIMarkPath('RootCanvas/healthBar_1')
    public healthBar_1: UI.ProgressBar=undefined;
    @UI.UIMarkPath('RootCanvas/levelText_1')
    public levelText_1: UI.TextBlock=undefined;
    @UI.UIMarkPath('RootCanvas/monetText')
    public monetText: UI.TextBlock=undefined;
    @UI.UIMarkPath('RootCanvas/basicDataBtn')
    public basicDataBtn: UI.StaleButton=undefined;
    @UI.UIMarkPath('RootCanvas/itemBtn')
    public itemBtn: UI.StaleButton=undefined;
    @UI.UIMarkPath('RootCanvas/shopBtn')
    public shopBtn: UI.StaleButton=undefined;
    @UI.UIMarkPath('RootCanvas/closeBtn')
    public closeBtn: UI.StaleButton=undefined;
    

 
	/**
	* onStart 之前触发一次
	*/
	protected onAwake() {
	}
	 
}
 