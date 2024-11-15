export default class ZcRouter{
	public static ins = new ZcRouter()
	
	// redirectTo不能使用success传递实例对象, 所以在此单例中声明data, 用于跨页面传递复杂参数
	public data:any = null
	
	// tabBar中注册的页面 
	public tabBarPath = [
		'/pages/rent/guo-pai-zu-fang/index',
		'/pages/rent/di-tu-zhao-fang/index',
		'/pages/rent/bang-wo-zhao-fang/index',
		'/pages/user/mine/index'
	]
	
	/**
	 * 微信栈有层数限制, 当页面栈等于9则使用redirectTo来避免微信页面栈溢出
	 * redirectTo不能使用success回调来传递参数, 所以负责的参数通过存放在ZcRouter单例上供下个页面获取
	 * @param url 跳转的路径
	 * @param data 传递到下一个页面的对象
	 * @param checkPagesLength 是否校验页面栈长度
	 */
	public async navigateTo (url:string,data:any = null, checkPagesLength:boolean = true){
	 	uni.hideKeyboard()
		this.data = data
		//需要在键盘收起后再进行跳转, 否则页面高度会获取会有问题, 所以延迟100毫秒再进行跳转
		setTimeout(()=>{			
			// 如果是tabBar页面则使用switchTab方法跳转
			if(this.tabBarPath.includes(url)){
				uni.switchTab({
					url:url
				})
				return
			}
			// 跳转其他页面需要判断页面栈长度是否过长
			var pages = getCurrentPages()
			// console.log(pages.length)
			if(pages.length < 9 || !checkPagesLength){			
				uni.navigateTo({
					url: url
				})
			}else{
				uni.redirectTo({
					url: url
				})
			}
		},100)
	 }
	 
	 public navigateBack(){
		 uni.hideKeyboard()
		 setTimeout(()=>{
		 	uni.navigateBack()
		 },100)
	 }
}