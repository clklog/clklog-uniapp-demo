# clklog-uniapp-demo

# uni-app SDK集成说明

如果打包包含 h5 ，建议采用神策web js sdk的方式引入  sa-sdk-javascript 插件（原因：uni-app-js会话未实现需要自己实现）。

如果打包包含 微信小程序 ，需要引入  uni-app-js 插件。

如果打包包含 Android/iOS ，需要引入  uni-app-native(Android & iOS) 插件。

# uni-app SDK集成文档

h5集成参考文档：<https://manual.sensorsdata.cn/sa/3.0/zh_cn/tech_sdk_client_web-1573905.html>

小程序集成参考文档：<https://manual.sensorsdata.cn/sa/3.0/zh_cn/integrate_uniapp_js-109576938.html>

iso/andriod集成参考文档：<https://manual.sensorsdata.cn/sa/3.0/zh_cn/integrate_uniapp_native-109576931.html>  

# ClkLog uni-app数据采集说明

1. ClkLog的统计数据基于神策 sdk 的浏览页面事件和会话id, 由于神策 uni-app sdk 的会话未实现，所以需要关闭全埋点的自己实现会话并手动跟踪浏览页面事件。

2. 神策web、小程序、iOS、Android端的sdk浏览页面事件名称不同，请根据uni-app打包的版本去跟踪浏览页面事件，各端的浏览页面事件为：    Web：`$pageview`、    Android&iOS：`$AppViewScreen`、    微信小程序：`$MPViewScreen`。

3. 由于 uni-app 属于单页面应用，开启自动采集浏览页面事件会出现页面标题和页面URL不匹配的问题，在各端的浏览页面事件注册时请根据实际情况手动采集页面标题。

# demo 示例说明

 demo中分别使用`App.h5.vue`、`App.minprogram.vue`、`App.androd-ios.vue`三个文件对`web端`、`小程序端`和`移动端`做了sdk的引用、初始化和集成示例，请根据实际情况选择对应集成参考示例。

# h5 sdk引用参考

 web js 埋点集成参考：<https://clklog.com/#/integration/reference>

 1. 下载集成参考页面中的ClKLOG WEB JS SDK 并解压至根目录。

 2. 将 autotrack.js 中的 server_url 修改为 clklog-receiver 的数据接收服务地址。

 3. 开发环境本地调试, 在 index.html 文件中引入 autotrack.js。

 4. 生产环境, 打包后，将 ClKLOG WEB JS SDK 解压后的所有文件直接放入build目录，然后在 index.html 中引入 autotrack.js，请注意修改生产环境的数据接收服务地址。
