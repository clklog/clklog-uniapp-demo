<template>
  <view style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    ">
    <div class="search-box">
      <div class="search-box-inside">
        <div class="search-box-inside-left">上海</div>
        <image class="search-box-searchIcon" src="../../static/icon-search.png" alt="放大" />
        <input class="search-box-searchInput" placeholder="您想租哪儿？" placeholder-style="color:#B6BBD0;font-size:24rpx;" type="search" />
      </div>
      <image class="icon-kefu" src="@/static/icon-kefu.png" />
    </div>

    <!-- 图片 -->
    <div class="adv-box">
      <image
        @click="toRecruit"
        style="width: 90%"
        mode="widthFix"
        lazy-load
        src="https://fang-oss.alltobid.com/data/gpzf/20240624/adv-logo.png"
        alt="招募合作伙伴"
      />
    </div>

    <!-- 跳转 -->
    <div class="menu-box">
      <div class="menu-box-item">
        <image src="@/static/menu-icon-all.png" />全部
      </div>
      <div class="menu-box-item" @click="toRenAllList">
        <image src="@/static/menu-icon-dtzf.png" />委托找房
      </div>
      <div class="menu-box-item" @click="toRental">
        <image src="@/static/menu-icon-wycz.png" />投放房源
      </div>
    </div>

    <view @click="tonextPage()">
      <image class="zoneImg" src="@/static/zone.png" />
    </view>

    <view style="
        margin: 130px;
        font-size: 20px;
        font-weight: 600;
        color: rgb(171 171 171);
      ">暂无数据</view>
  </view>
</template>

<script lang="ts" setup>
import { onShow } from '@dcloudio/uni-app'

onShow(() => {
  let sensors = getApp().globalData.sensors
  let pageViewEventName = getApp().globalData.pageViewEventName
  if (pageViewEventName) {
    sensors.track(pageViewEventName, {
      $url: 'pages/home/index', //页面路径，ios、android 需传入该参数，否则采集不到受访页面地址
      $title: '首页'
    })
  }
})

import ZcRouter from '@/utils/ZcRouter'

const tonextPage = () => {
  // uni.navigateTo({ url: `/pages/zone/index` });
}
import { onShow } from '@dcloudio/uni-app'
</script>

<style lang="scss" scoped>
.zoneImg {
  width: 350px;
  height: 63.7px;
}
.search-box {
  width: 100vw;
  height: 112rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40rpx;
  box-sizing: border-box;
  .search-box-inside {
    width: 671rpx;
    height: 63rpx;
    background-color: #f3f3f3;
    border-radius: 53rpx;
    display: flex;
    align-items: center;
    .search-box-inside-left {
      max-width: 160px;
      font-size: 24rpx;
      color: #3366dd;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 39rpx 0 32rpx;
      box-sizing: border-box;
      border-right: 2rpx solid #3366dd;
      position: relative;
    }
    .search-box-inside-left:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-width: 4px;
      border-style: solid;
      border-color: #3366dd transparent transparent transparent;
      top: calc(50% - 2px);
      right: 5px;
    }
    .search-box-searchIcon {
      width: 40rpx;
      height: 40rpx;
      margin-left: 20rpx;
      margin-right: 10rpx;
    }
    .search-box-searchInput {
      flex: 1;
      font-size: 24rpx;
      color: #333;
    }
    .search-box-inside-right {
      width: 24px;
      color: #3366dd;
      margin: 0 26rpx;
      .search-box-inside-icon {
        width: 27rpx;
        height: 27rpx;
      }
    }
  }
  .icon-kefu {
    width: 40rpx;
    height: 40rpx;
    margin-left: 26rpx;
  }
}
input {
  outline: none;
  background: none;
  outline: none;
  border: 0px;
}
.adv-box {
  width: 100vw;
  height: 220rpx;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 666rpx;
    height: 210rpx;
    object-fit: cover;
    border-radius: 18rpx;
  }
}
.menu-box {
  width: 100vw;
  padding: 32rpx 0 0 0;
  box-sizing: border-box;
  // background-color: #3366dd;
  display: flex;
  // align-items: center;
  // justify-content: space-between;
  flex-wrap: wrap;
  .menu-box-item {
    width: 96rpx;
    height: 177rpx;
    margin: 0 45rpx;
    color: #666;
    white-space: nowrap;
    font-size: 25rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    image {
      width: 96rpx;
      height: 96rpx;
      margin-bottom: 14rpx;
    }
  }
}
</style>
