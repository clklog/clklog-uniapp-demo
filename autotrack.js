;(function (para) {
  var p = para.sdk_url,
    n = para.name,
    w = window,
    d = document,
    s = 'script',
    x = null,
    y = null
  if (typeof w['sensorsDataAnalytic201505'] !== 'undefined') {
    return false
  }
  w['sensorsDataAnalytic201505'] = n
  w[n] =
    w[n] ||
    function (a) {
      return function () {
        ;(w[n]._q = w[n]._q || []).push([a, arguments])
      }
    }
  var ifs = [
    'track',
    'quick',
    'register',
    'registerPage',
    'registerOnce',
    'trackSignup',
    'trackAbtest',
    'setProfile',
    'setOnceProfile',
    'appendProfile',
    'incrementProfile',
    'deleteProfile',
    'unsetProfile',
    'identify',
    'login',
    'logout',
    'trackLink',
    'clearAllRegister',
    'getAppStatus'
  ]
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i])
  }
  if (!w[n]._t) {
    w[n].para = para

    var scriptURLs = [
      '/plugins/session-event/index.js', //引用的session-event插件路径
      p
    ]

    function loadScript(index) {
      if (index >= scriptURLs.length) {
        return false
      }

      var x = d.createElement(s)
      y = d.getElementsByTagName(s)[0]
      x.async = 1
      x.src = scriptURLs[index]
      x.setAttribute('charset', 'UTF-8')
      x.onload = function () {
        loadScript(index + 1)
      }
      y.parentNode.insertBefore(x, y)
    }

    loadScript(0)
  }
  sensors.quick('isReady', function () {
    sensors.use('PageLeave', { heartbeat_interval_time: 5 })
    sensors.use('PageLoad')
    sensors.use('SessionEvent')
  })
  // sensors.quick('autoTrackSinglePage')
})({
  sdk_url: '/sensorsdata.js',
  name: 'sensors',
  show_log: true,
  is_track_single_page: false,
  send_type: 'beacon',
  //接收地址为clklog-receiver 的接收服务地址，project和token参数必须传入，token是每个project对应的随机字符串，请自行随机生成。
  server_url: 'https://xiaoxiangai-8003.test.zcunsoft.com/api/gp?project=gpzf_clklog&token=c12ae331-2629-4379-9dbd-c96b0b5006ea',
  heatmap: {
    clickmap: 'default',
    scroll_notice_map: 'default',
    collect_tags: {
      div: true,
      img: true
    }
  },
  preset_properties: { latest_referrer_host: true }
})
