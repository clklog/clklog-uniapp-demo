// // 一. sdk 离线引入插件配置
// let sensors = {};
// let platform = uni.getSystemInfoSync().platform;
// if (platform == "android" || platform == "ios") {
//   sensors = uni.requireNativePlugin("Sensorsdata-UniPlugin-App");
//   sensors.initSDK({
//     server_url: 
//     "",
//     // "https://xiaoxiangai-8003.test.zcunsoft.com/api/gp?project=gpzf_clklog&token=123456790",
//     show_log: true, //是否开启日志
//     global_properties: {}, //全局属性，object 类型
//     app: {
//       // Android & iOS 初始化配置
//       remote_config_url: "",
//       flush_interval: 15000, //两次数据发送的最小时间间隔，单位毫秒
//       flush_bulkSize: 100, //设置本地缓存日志的最大条目数，最小 50 条， 默认 100 条
//       flush_network_policy: 30, //设置 flush 时网络发送策略
//       auto_track: 0, // 1 应用启动， 2 应用退出，3 应用启动和退出 默认 0
//       encrypt: false, //是否开启加密
//       track_crash: false, // 是否采集 AppCrash 事件
//       add_channel_callback_event: false, //是否开启渠道事件
//       javascript_bridge: false, // WebView 打通功能
//       android: {
//         //Android 特有配置
//         session_interval_time: 30000,
//         request_network: true,
//         max_cache_size: 32, // 默认 32MB，最小 16MB
//         mp_process_flush: false, //使用小程序 SDK 时，小程序进程是否可发送数据
//       },
//       ios: {
//         //iOS 特有配置
//         max_cache_size: 10000, //最大缓存条数，默认 10000 条
//       },
//     },
//   });
//   console.log("离线插件引入成功");
// }
// // 二.注册track 事件
// export function AppViewScreen(params) {
//   sensors.track("$AppViewScreen", params);
// }

export function getCurrentPageTitle(pageNum) {
  let num = pageNum ? pageNum : 1;
  let pages = getCurrentPages();
  let currentPage = pages[pages.length - num];
  // console.log(currentPage.$page.meta.navigationBar.titleText, "获取动态标题");
  return currentPage.$page.meta.navigationBar.titleText || "";
}
// 判断平台类型
export function platformType() {
  return uni.getSystemInfoSync().platform || "";
}
