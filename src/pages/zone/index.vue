<template>
  <div class="warry">
    <div class="container">
      <div style="display: flex; flex-direction: column; margin-top: 41rpx">
        <div class="zone_item" v-for="(item, index) of zoneData" :key="index">
          <div class="zoneImg">
            <div
              style="
                position: relative;
                box-sizing: border-box;
                margin: 29.79rpx 26.29rpx 21rpx;
                height: 161.21rpx;
              "
            >
              <image
                style="width: 100%; height: 161.21rpx"
                src="../../static/zoneBg.png"
                alt=""
              />
            </div>
          </div>
          <div class="wrapFont">
            <div class="title">'浦东国际机场' {{ index + 1 }}</div>
            <div class="content">单元{{ index + 1 }}</div>
          </div>
        </div>
      </div>
      <!-- <div v-else class="empty-box">
        <image src="@/static/empty.png" />
        暂无房源
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onShow } from "@dcloudio/uni-app";
onShow(() => {
});
const zoneData = [{}, {}, {}];
</script>
<style lang="scss" scoped>
.warry {
  .zoneBanner {
    width: 750rpx;
    height: 231rpx;
  }
  .container {
    width: 100vw;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    .zone_item {
      width: 669rpx;
      height: 214rpx;
      background: #f8f8f8;
      box-shadow: 0rpx 0rpx 5rpx rgba(0, 0, 0, 0.16);
      border-radius: 11rpx;
      display: flex;
      margin-bottom: 33rpx;
      .zoneImg {
        box-sizing: border-box;
        .houseImgBg {
          width: 338.2rpx;
          height: 161.21rpx;
          border-radius: 9rpx;
        }
      }
      .wrapFont {
        padding: 40rpx 28rpx 0 0;
        .title {
          width: 252rpx;
          height: 70rpx;
          font-size: 28rpx;
          font-weight: bold;
          line-height: 35rpx;
          color: #464646;
          margin-bottom: 24rpx;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .content {
          height: 21rpx;
          font-size: 21rpx;
          font-weight: 500;
          line-height: 35rpx;
          color: #717171;
        }
      }
    }
    .empty-box {
      margin-top: 20vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40rpx 0;
      box-sizing: border-box;
      color: #c8c8c8;
      line-height: 30rpx;
      img {
        width: 520rpx;
        height: 277rpx;
      }
    }
  }
}
</style>
