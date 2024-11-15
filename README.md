# clklog-uniapp-demo

# uni-app SDK集成说明

参考文档：<https://manual.sensorsdata.cn/sa/3.0/zh_cn/tech_sdk_client_uni_app-22256311.html>

# uni-app SDK集成文档

uni-app-js: <https://manual.sensorsdata.cn/sa/3.0/zh_cn/integrate_uniapp_js-109576938.html>

uni-app-native: <https://manual.sensorsdata.cn/sa/3.0/zh_cn/integrate_uniapp_native-109576931.html>

# ClkLog uni-app数据采集说明

1. ClkLog的统计数据基于神策uni-app sdk的页面浏览事件和会话id, 由于神策uni-app sdk的会话未实现，所以需要关闭全埋点的自己实现会话并手动跟踪页面浏览事件。
2. 不同端的页面浏览事件名称不同，请根据uni-app打包的版本去跟踪页面浏览事件，各端的页面浏览事件为：    Web：`$pageview`、    Android&iOS：`$AppViewScreen`、    微信小程序：`$MPViewScreen`

# demo说明

 demo中分别使用`App.h5.vue`、`App.minprogram.vue`、`App.androd-ios.vue`三个文件对`web端`、`小程序端`和`移动端`做了sdk的引用、初始化和集成示例，请根据实际情况选择对应集成参考示例。
