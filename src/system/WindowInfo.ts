//获取运行设备信息的类
//每次进入页面都需要重新获取, 数值会随着页面是否有导航栏 & tabbar而动态改变
/**
 * |------------------------|
 * |       zcSafeTop        |在app中只包含状态栏高度, 在小程序中包含状态栏加药丸行的高度
 * |------------------------|
 * |       navigation       |项目中的自定义导航栏
 * |------------------------|
 * |       contentHeight    |内容区域高度
 * |                        |
 * |                        |
 * |                        |
 * |                        |
 * |                        |
 * |                        |
 * |------------------------| 
 */

import System from "@/system/index"
export default class WindowInfo{
	//可用的屏幕高度
	public windowHeight = 0
	// 状态栏高度
	public statusBarHeight = 0
	// 本项目兼容app和微信小程序, 所以在微信小程序中顶部安全区域会额外增加88rpx , 为了不让"药丸组件"和项目导航栏发生重叠
	public zcSafeTop = 0
	// 导航栏高度
	public navgateBarHeight = 88
	// 底部安全区域的高度
	public bottomHeight = 0
	// 内容区域高度
	public contentHeight = 0
	
	/**
	 * 创建WindowInfo的工厂函数
	 * @param navigationStyleCustom:boolean 页面是否使用自定义导航栏
	 * @param tabBarPage:boolean 页面是否是pages.json tabBar中配置的页面
	 */
	public static create(navigationStyleCustom:boolean, tabBarPage:boolean){
		let res = uni.getWindowInfo()
		let instance = new WindowInfo()
		instance.updateModel(res, navigationStyleCustom, tabBarPage)
		return instance
	}
	
	public updateModel(res:any,navigationStyleCustom:boolean, tabBarPage:boolean){
		let ratio = 375/res.windowWidth
		//可用的屏幕高度折算成rpx
		if(System.instance.isWeb && tabBarPage){
			this.windowHeight = (res.windowHeight * ratio - res.safeAreaInsets.bottom * ratio) * 2
		}else{
			this.windowHeight = res.windowHeight * ratio * 2
		}
		//底部安全区域的高度
		// 底部安全距离为0时, 按钮会贴底边, 所以为了美观, 底部安全距离设定为40
		if (tabBarPage){
			this.bottomHeight = 40	
		}else{
			this.bottomHeight = res.safeAreaInsets.bottom ? res.safeAreaInsets.bottom * 2  * ratio :40
		}
		
		//状态栏高度折算成rpx
		this.statusBarHeight = res.statusBarHeight * 2 * ratio		
		
		// 顶部安全距离
		if(System.instance.isWeixin){
			this.zcSafeTop = this.statusBarHeight +  this.navgateBarHeight
		}else{
			this.zcSafeTop = this.statusBarHeight
		}
		
		//内容区域高度
		if(System.instance.isWeixin){
			if(navigationStyleCustom){
				//当页面使用自定义导航栏, 内容区域的高度等于下面的公式, 微信因为有药丸, 所以需要额外
				this.contentHeight = this.windowHeight - this.statusBarHeight - this.navgateBarHeight * 2
			}else{
				this.contentHeight = this.windowHeight
			}	
		}else{			
			//当页面使用自定义导航栏, 内容区域的高度等于下面的公式
			this.contentHeight = this.windowHeight - this.statusBarHeight - this.navgateBarHeight
		}
		// uni.getWindowInfo() 获取到的数据
		// console.log(res)
		// 转换后的数据
		// console.log(this)
	}
}