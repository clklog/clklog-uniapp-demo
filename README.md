# clklog-uniapp-demo

## uni-app SDK集成说明

- 在集成神策uni-app相关sdk之前，请根据以下情况进行sdk的选择

1. 如果打包包含 h5 ，由于 uni-app-js 会话未实现需要自己实现，建议采用神策 web js sdk 的方式引入 sa-sdk-javascript 插件。

2. 如果打包包含 微信小程序 ，需要引入  uni-app-js 插件。

3. 如果打包包含 Android/iOS ，需要引入  uni-app-native(Android & iOS) 插件, 插件集成过程中建议使用离线打包模式（云打包在测试中无法正常采集数据）。

## ClkLog uni-app数据采集说明

- 在使用 ClkLog 作为 uni-app 的数据采集服务端时，需要注意以下内容

1. ClkLog的统计数据基于神策 sdk 的浏览页面事件和会话ID（`$event_session_id`）, 由于神策 uni-app sdk 的会话未实现，所以需要自己实现会话ID并配置为全局属性，同时关闭全埋点的浏览页面事件手动跟踪浏览页面事件。

2. 神策web、小程序、iOS、Android端的sdk浏览页面事件名称不同，请根据uni-app打包的版本去跟踪浏览页面事件，各端的浏览页面事件如下：
 Web：`$pageview`
 Android&iOS：`$AppViewScreen`
 微信小程序：`$MPViewScreen`

3. 由于 uni-app 属于单页面应用，开启自动采集浏览页面事件会出现页面标题和页面URL不匹配的问题，在各端的浏览页面事件注册时请根据实际情况手动采集页面标题。

## demo 示例说明

 demo中分别使用`App.h5.vue`、`App.minprogram.vue`、`App.androd-ios.vue`三个文件对`web端`、`小程序端`和`移动端`做了sdk的引用、初始化和自定义集成示例，请根据实际情况选择对应集成参考示例在App.vue入口页进行sdk的初始化。

## demo 包含的内容

- 1、uni-app在h5、微信小程序、Android/iOS端的sdk集成和初始化
- 2、会话的实现与接入示例
- 3、浏览页面事件的手动接入示例
- 4、页面标题的手动接入示例
- 其他更多内容的接入请参考神策 uni-app sdk 官方文档

## uni-app 集成参考及文档

### h5

 web js 埋点集成参考：<https://clklog.com/#/integration/reference>

- 1、 下载集成参考页面中的 ClKLOG WEB JS SDK 并解压至根目录。

- 2、 将 autotrack.js 中的 server_url 修改为 clklog-receiver 的数据接收服务地址。

- 3、开发环境本地调试, 在 index.html 文件中引入 autotrack.js。

- 4、生产环境, 打包后，将 ClKLOG WEB JS SDK 解压后的所有文件直接放入build目录，然后在 index.html 中引入 autotrack.js，请注意修改生产环境的数据接收服务地址。
  
- h5集成参考文档：<https://manual.sensorsdata.cn/sa/3.0/zh_cn/tech_sdk_client_web-1573905.html>

### 微信小程序

集成参考文档：<https://manual.sensorsdata.cn/sa/3.0/zh_cn/integrate_uniapp_js-109576938.html>
插件下载地址：<https://ext.dcloud.net.cn/plugin?id=4177>

### iso/andriod

集成参考文档：<https://manual.sensorsdata.cn/sa/3.0/zh_cn/integrate_uniapp_native-109576931.html>  
插件下载地址：<https://ext.dcloud.net.cn/plugin?id=4179>
