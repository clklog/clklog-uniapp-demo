<!-- android / ios 集成下配置sdk方式 -->
<script lang="ts">
import { v4 as uuidv4 } from 'uuid'

// 一. 自定义生成sessionId
function generateMixedUUID() {
  const uuid = uuidv4()
  const digits = uuid.replace(/[^0-9]/g, '')
  const lowercase = uuid.replace(/[^a-z]/g, '')
  return digits + lowercase // 拼接
}
let currentSessionId = generateMixedUUID() // 自定义生成的sessionId;
//  将sessionId存储于StorageSync；
uni.setStorageSync('currentSessionId', currentSessionId)

//二. SDK 初始化
const sensors = uni.requireNativePlugin('Sensorsdata-UniPlugin-App')
sensors.initSDK({
  server_url: '',//配置sdk接收地址
  show_log: true, //是否开启日志
  global_properties: {
    // 配置全局属性，所有上报事件属性中均会携带
    $event_session_id: currentSessionId,
  }, //全局属性，object 类型
  app: {
    // Android & iOS 初始化配置
    remote_config_url: '',
    flush_interval: 15000, //两次数据发送的最小时间间隔，单位毫秒
    flush_bulkSize: 100, //设置本地缓存日志的最大条目数，最小 50 条， 默认 100 条
    flush_network_policy: 30, //设置 flush 时网络发送策略
    auto_track: 0, // 1 应用启动， 2 应用退出，3 应用启动和退出 默认 0
    encrypt: false, //是否开启加密
    track_crash: false, // 是否采集 AppCrash 事件
    add_channel_callback_event: false, //是否开启渠道事件
    javascript_bridge: false, // WebView 打通功能
    android: {
      //Android 特有配置
      session_interval_time: 30000,
      request_network: true,
      max_cache_size: 32, // 默认 32MB，最小 16MB
      mp_process_flush: false //使用小程序 SDK 时，小程序进程是否可发送数据
    },
    ios: {
      //iOS 特有配置
      max_cache_size: 10000 //最大缓存条数，默认 10000 条
    }
  }
})


export default {
  //四. SDK集成(sensors)全局注册
  globalData: {
    sensors: sensors,
    pageViewEventName: '$AppViewScreen' //配置sdk动态路由;事件采集名称
  }
}
</script>
<style></style>
