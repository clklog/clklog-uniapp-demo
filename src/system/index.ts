/**
 * 获取运行设备信息的单例
 * uni.getSystemInfoSync的返回字段过多, 在实际使用时, 字段根据需求可以自行添加
 */
export default class System{
	// 单例实例
	public static instance = new System()
	//uniapp生成的设备id
	public deviceId = ''
	// uni- app框架相关的信息，如uni-app框架的编译器版本、运行时版本
	public uniPlatform = ''
	// 系统名称
	public osName = ''
	
	
	// 搜索方式（来源）
	// APP APP
	// WEB_HOME_PAGE（WEB首页
	// WEB_HOUSE_LIST_PAGE（WEB搜索页-WEB房源列表页或混排页面
	// WEB_HOUSE_DETAIL_PAGE（WEB房源详情页)
	// WEB_SP_LIST_PAGE（WEB专区列表页
	// WEB_SP_DETAIL_PAGE（WEB专区详情页)
	// WEB_OTHER_PAGE（WEB其他网页）
	// WECHAT_MINI_PROGRAM（新版小程序）
	public channelType = ''
	
	
	public get isWeb (){
		return this.uniPlatform == 'web'
	}
	
	public get isWeixin(){
		return this.uniPlatform == 'mp-weixin'
	}
	
	//导航栏的高度
	// 渠道
	public static create(){
		let instance = new System()
		return instance
	}
	
	
	private constructor () {
		let res = uni.getSystemInfoSync()
		this.deviceId = res.deviceId
		this.uniPlatform = res.uniPlatform
		this.osName = res.osName
		// setChannelType
		if(res.uniPlatform == 'mp-weixin'){
			this.channelType = 'WECHAT_MINI_PROGRAM'
		}else if(res.osName == 'ios' || res.osName == 'android'){
			this.channelType = 'APP'
		}
	}
}