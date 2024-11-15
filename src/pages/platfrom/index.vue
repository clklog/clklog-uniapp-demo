<template>
  <div class="container">
    <image class="card-box" mode="widthFix" :src="config.imgUrl + 'data/gpzf/20240318/平台介绍_01.jpg'" />
    <image class="card-box" mode="widthFix" style="margin-top: -5px" :src="config.imgUrl + 'data/gpzf/20240318/平台介绍_02.jpg'" />
    <image class="card-box" mode="widthFix" style="margin-top: -5px" :src="config.imgUrl + 'data/gpzf/20240318/平台介绍_03.jpg'" />
  </div>
</template>

<script>
import { baseURL } from '@/http/http'
import { getCurrentPageTitle } from '@/utils/sensors'
// 动态加载title

export default {
  onShow() {
    let sensors = getApp().globalData.sensors
    if (sensors) {
      let pageViewEventName = getApp().globalData.pageViewEventName
      if (pageViewEventName) {
        sensors.track(pageViewEventName, {
          $url: 'pages/platfrom/index', //页面路径，ios、android 需传入该参数，否则采集不到受访页面地址
          $title: '平台介绍' //页面标题;
        })
      }
    }
  },

  data() {
    return {
      config: baseURL()
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  .card-box {
    width: 100%;
    object-fit: contain;
    display: block;
  }
}
</style>
