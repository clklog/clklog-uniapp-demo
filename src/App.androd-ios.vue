<!-- android / ios 集成下配置sdk方式 -->
<script lang="ts">
import { v4 as uuidv4 } from 'uuid'

// 生成sessionId
function generateMixedUUID() {
  const uuid = uuidv4()
  const digits = uuid.replace(/[^0-9]/g, '')
  const lowercase = uuid.replace(/[^a-z]/g, '')
  return digits + lowercase // 拼接
}
// 生成sessionId;
let currentSessionId = generateMixedUUID()
//  将sessionId存储于StorageSync；
// uni.setStorageSync('currentSessionId', currentSessionId)

// 神策SDK初始化
const sensors = uni.requireNativePlugin('Sensorsdata-UniPlugin-App')
sensors.initSDK({
  //接收地址为clklog-receiver 的接收服务地址，project和token参数必须传入，token是每个project对应的随机字符串，请自行随机生成。
  server_url: 'https://xiaoxiangai-8003.test.zcunsoft.com/api/gp?project=gpzf_clklog&token=c12ae331-2629-4379-9dbd-c96b0b5006ea',
  show_log: true, //是否开启日志
  global_properties: {
    // 配置全局属性，所有上报事件属性中均会携带
    $event_session_id: currentSessionId
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
  //SDK集成(sensors)全局注册
  globalData: {
    sensors: sensors,
    pageViewEventName: '$AppViewScreen' //ios 和 android中的页面浏览事件名称为$AppViewScreen
  }
}
</script>
<style></style>
