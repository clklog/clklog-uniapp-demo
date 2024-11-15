<template>
  <div class="container">
    <div class="top-box">
      <div class="top-box-inner" v-if="isLogin">
        <div class="top-box-left">
          <image
            class="top-box-headerImg"
            @click="updata"
            src="@/static/mine-active.png"
          />
          <div class="updata-header" @click="updata">更新资料</div>
        </div>
        <div class="top-box-line"></div>
        <div class="top-box-right">
          <div class="islogin-info">
            用户昵称
            {{
              userInfo && userInfo.nickName
                ? userInfo.nickName
                : userInfo.mobilePhone
            }}
          </div>
          <div class="islogin-info">
            手机号码
            {{
              userInfo && userInfo.mobilePhone ? userInfo.mobilePhone : "暂无"
            }}
          </div>
        </div>
      </div>
      <div class="top-box-inner" @click="check_login" v-else>
        <div class="top-box-left">
          <image class="top-box-headerImg" src="@/static/mine-active.png" />
        </div>
        <div class="top-box-line"></div>
        <div class="top-box-right">
          <div class="click-login">点击登录</div>
          <div class="login-tip">立即登录，体验更多功能</div>
        </div>
      </div>
    </div>
    <div class="common-box">
      <div class="common-title">常用功能</div>
      <div class="common-inner">
        <div class="coomon-inner-item" @click="toCollect">
          <image src="@/static/icon-my-collect.png" alt="" />
          我的收藏
        </div>
        <div class="coomon-inner-item" @click="toFootMark">
          <image src="@/static/icon-my-footprint.png" alt="" />
          我的足迹
        </div>
        <div class="coomon-inner-item" @click="toReverse">
          <image src="@/static/icon-my-reverse.png" alt="" />
          我的预约
        </div>
        <div class="coomon-inner-item" @click="pop_show = true">
          <image src="@/static/icon-my-kefu.png" alt="" />
          我的客服
        </div>
      </div>
      <div class="common-inner">
        <div class="coomon-inner-item" @click="toRenting">
          <image src="@/static/icon-my-ineedrent.png" alt="" />
          委托找房
        </div>
        <div class="coomon-inner-item" @click="toRentalList">
          <image src="@/static/icon-my-rent.png" alt="" />
          投放房源
        </div>

        <div class="coomon-inner-item" @click="toPlatform">
          <image src="@/static/platformIcon.png" alt="" />
          平台介绍
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onShow } from "@dcloudio/uni-app";
onShow(() => {
  let sensors = getApp().globalData.sensors;
  let pageViewEventName = getApp().globalData.pageViewEventName;
  if (pageViewEventName) {
    // 小程序，Ios,Android
    sensors.track(pageViewEventName, {
      $url: "pages/my/index", //页面路径
      $title: "我的", //页面标题
    });
  } else {
    // h5
    sensors.quick("autoTrackSinglePage", {
      $title: "我的",
    });
  }
});
const check_login = () => {
  uni.showToast({ title: "当前为演示环境", icon: "none" });
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .top-box {
    width: 100vw;
    height: 350rpx;
    background: linear-gradient(180deg, #3366dd 0%, #6fa9fd 100%) no-repeat;
    background-size: 100vw 187rpx;
    .top-box-inner {
      width: 666rpx;
      height: 268rpx;
      border-radius: 19rpx;
      box-shadow: 0px 5px 14px rgba(0, 25, 129, 0.21);
      background-color: #fff;
      margin: 80rpx auto 0 auto;
      position: relative;
      padding-bottom: 12rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      .top-box-left {
        // flex: 1;
        width: 244rpx;
        display: flex;
        padding-left: 13rpx;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .top-box-headerImg {
          width: 109rpx;
          height: 109rpx;
          border-radius: 50%;
        }
        .updata-header {
          width: 109rpx;
          height: 32rpx;
          background-color: #ebf0fc;
          margin-top: 18rpx;
          color: #3366dd;
          font-size: 18rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16rpx;
        }
      }
      .top-box-line {
        width: 2rpx;
        height: 100rpx;
        background-color: #e0e0e0;
        padding-bottom: 12rpx;
        box-sizing: border-box;
      }
      .top-box-right {
        flex: 1;
        height: 100rpx;
        display: flex;
        margin-left: 35rpx;
        flex-direction: column;
        // align-items: center;
        justify-content: space-between;
        .islogin-info {
          font-size: 28rpx;
          // font-weight: 700;
          // line-height: 60rpx;
          color: #3366dd;
        }
        .click-login {
          color: #464342;
          font-size: 28rpx;
          font-weight: 700;
        }
        .login-tip {
          color: #a2a2a2;
          font-size: 28rpx;
          // font-weight: 700;
        }
      }
    }
  }
  .common-box {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 0 58rpx;
    box-sizing: border-box;
    .common-title {
      font-size: 32rpx;
      font-weight: 600;
      margin-top: 65rpx;
    }
    .common-inner {
      padding-top: 40rpx;
      box-sizing: border-box;
      display: flex;
      // justify-content: space-between;
      .coomon-inner-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 26rpx;
        color: #494747;
        margin-right: 77rpx;
        white-space: nowrap;
        image {
          width: 100rpx;
          height: 100rpx;
          margin-bottom: 12rpx;
        }
      }
    }
  }
}
</style>
