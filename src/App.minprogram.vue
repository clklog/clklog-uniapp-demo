<!-- 小程序情况下配置sdk方式 -->
<script lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import localstorage from '@/localstorage/index'
import sensors from '@/common/uni-app-sdk-0.1.0/index.js' //引入uni-app-js

//生成sessionId
function generateMixedUUID() {
  const hexString = Math.random().toString(16).substring(2)
  const fullHexString = hexString.padStart(16, '0')
  const digits = fullHexString.replace(/[^0-9]/g, '')
  const lowercase = fullHexString.replace(/[^a-z]/g, '')
  return digits + lowercase // 拼接
}

const currentSessionId = generateMixedUUID()
// uni.setStorageSync('currentSessionId', currentSessionId)

//SDK 初始化
sensors.init({
  //接收地址为clklog-receiver 的接收服务地址，project和token参数必须传入，token是每个project对应的随机字符串，请自行随机生成。
  server_url: 'https://xiaoxiangai-8003.test.zcunsoft.com/api/gp?project=gpzf_clklog&token=c12ae331-2629-4379-9dbd-c96b0b5006ea',
  show_log: true, //是否开启日志
  name: 'sensors',
  global_properties: {
    // 配置全局属性，所有上报事件属性中均会携带
    $event_session_id: currentSessionId
  },
  autoTrack: {
    //小程序全埋点配置
    appLaunch: true, // 默认为 true，false 则关闭 $MPLaunch 事件采集
    appShow: true, // 默认为 true，false 则关闭 $MPShow 事件采集
    appHide: true, // 默认为 true，false 则关闭 $MPHide 事件采集
    pageShow: false, // 默认为 true，false 则关闭 $MPViewScreen 事件采集    ----------
    pageShare: true, // 默认为 true，false 则关闭 $MPShare 事件采集
    mpClick: true, // 默认为 false，true 则开启 $MPClick 事件采集， VUE3 不支持
    mpFavorite: true, // 默认为 true，false 则关闭 $MPAddFavorites 事件采集
    pageLeave: true // 默认为 false， true 则开启 $MPPageLeave事件采集
  },
  is_track_single_page: false,
  heatmap: {
    clickmap: 'default',
    scroll_notice_map: 'default',
    collect_tags: {
      div: true,
      img: true,
      video: true
    }
  },
  preset_properties: { latest_referrer_host: true },
  app: {
    // Android & iOS 初始化配置
    remote_config_url: '',
    flush_interval: 5000, //两次数据发送的最小时间间隔，单位毫秒
    flush_bulkSize: 100, //设置本地缓存日志的最大条目数，最小 50 条， 默认 100 条
    flush_network_policy: 30, //设置 flush 时网络发送策略
    auto_track: 0, // 1 应用启动， 2 应用退出，3 应用启动和退出 默认 0
    encrypt: false, //是否开启加密
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
    pageViewEventName: '$MPViewScreen' //ios 和 android中的页面浏览事件名称为$MPViewScreen
  }
}
</script>
