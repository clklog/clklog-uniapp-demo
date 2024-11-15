//本地存储的对象

export default class Storage{
	// 往本地库内添加数据
	public static set(key:string | undefined | null, data:any){
		let jsonData = JSON.stringify(data)
		if(key){
			uni.setStorageSync(key, jsonData);
		}
	}
	
	// 从本地库获取数据
	public static get<T>(key:string | undefined | null):T | null{
		if(key){
			let data = uni.getStorageSync(key);
			if(data){
				let anyData = JSON.parse(data)
				return anyData as T
			}else{
				return null
			}
		}else{
			return null
		}
	}
	
	// 从本地库删除数据
	public static remove(key:string | undefined | null){
		if(key){
			uni.removeStorageSync(key);
		}
	}
}