import { baseURL } from "@/http/http";
import store from "@/store/store";

export default {
  // 登录
  WXlogin(data) {
    return post(`/api/wx/login`, data);
  },
  // 获取用户信息
  getUserInfo(data) {
    return post(`/api/user/getInfo`, data, true);
  },
  // 微信接口获取手机号
  getPhoneNumber(data) {
    return post(`/api/wx/getPhoneNumber`, data, true);
  },
  // 更新用户信息
  setProfile(data) {
    // console.log('更新用户信息', data)
    return upload(`/api/user/setProfile`, data);
  },
  // 只更新用户昵称
  setNickName (data) {
    return post(`/api/user/setNickName`, data,true)
  },

  // 获取首页的tab分类
  getHouseTypes(data) {
    return post(`/api/house/types`, data);
  },
  // 首页精选列表
  getHotList(data) {
    return post(`/api/house/hot`, data);
  },
  // 首页推荐列表
  getRecommandList(data) {
    return post(`/api/house/recommand`, data);
  },
  // 首页分类列表
  getHouseCurrent(data) {
    return post(`/api/house/current`, data);
  },
  // 获取房屋详情
  getHouseDetail(data) {
    return post(`/api/house/detail`, data, true);
  },
  // 获取区域列表
  getAreas(data) {
    return post(`/api/house/areas`, data);
  },
  // 获取收藏记录
  getFavorites(data) {
    return post(`/api/user/getFavorites`, data, true);
  },
  // 添加收藏
  addFavorites(data) {
    return post(`/api/user/addFavorites`, data, true);
  },
  // 取消收藏
  cancelFavorites(data) {
    return post(`/api/user/cancelFavorites`, data, true);
  },
  // 获取浏览记录
  trackList(data) {
    return post(`/api/user/trackList`, data, true);
  },
  // 添加预约
  addReverse(data) {
    return post(`/api/user/addBookingView`, data, true);
  },
  // 获取预约列表
  getReverseList(data) {
    return post(`/api/user/getBookingView`, data, true);
  },

  // 委托房源 - 二维码
  getCaptchaImage(data) {
    return post(`/api/user/captchaImage`, data, true);
  },
  // 委托房源 - 提交委托房源
  addHouseAgent(data) {
    return post(`/api/user/addHouseAgent`, data, true);
  },
  // 委托房源 - 获取委托列表
  getAgentRecords(data) {
    return post(`/api/user/getAgentRecords`, data, true);
  },
  // 租房需求 - 获取所有列表
  getAllRentRecords(data) {
    return post(`/api/house/getRentRecords`, data, true);
  },
  // 我要租房 - 获取列表
  getRentRecords(data) {
    return post(`/api/user/getRentRecords`, data, true);
  },
  // 我要租房 - 新增信息
  addHouseRent(data) {
    return post(`/api/user/addHouseRent`, data, true);
  },
  // 首页 - 招募
  addRecruit(data) {
    return post(`/api/recruit/add`, data, true);
  },
  // 资讯 - 问答
  getCMSList(data) {
    return post(`/api/cms/list`, data, true);
  },
  // 获取专区列表
  getSpList(data) {
    return post(`/api/sp/list`, data);
  },
  //获取专区介绍
  getSpInfo(data) {
    return post(`/api/sp/info`, data);
  },
  // 获取专区房源列表
  getHouseInfo(data) {
    return post(`/api/sp/house`, data);
  },
  // 地铁站信息
  getStations(data) {
    return post(`/api/metro/stations`, data);
  },
  // 腾讯地图地点查询
  //  TXLocationSearch = (params: any) => {
  //   return http.post(`/api/house/map/location/search`, params)
  // }
  TXLocationSearch(data) {
    return post(`/api/house/map/location/search`, data);
  },
};

function post(url, data, needToken) {
  // uni.showLoading({
  //   title: '努力加载中~'
  // });
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseURL().host + baseURL().pub + url,
      data: data,
      method: "post",
      header: {
        Authorization: needToken ? uni.getStorageSync("token") : "", // 让每个请求携带自定义token 请根据实际情况自行修改
      },
      success: (res) => {
        // console.log(res)
        if (res.statusCode == 200) {
          // 网络请求成功
          resolve(res.data);
          uni.hideLoading();
        } else {
          reject(res.errMsg);
          uni.showToast({
            icon: "none",
            title: res.errMsg,
          });
        }
      },
      fail: (res) => {
        reject(res.data);
        console.log("失败请求", res);
        uni.hideLoading();
        uni.showToast({
          icon: "none",
          title: "网络不好，请稍后重试。" + res,
        });
      },
    });
  });
}

function upload(url, data) {
  // console.log(url, data)
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: baseURL().host + baseURL().pub + url,
      filePath: data.file[0],
      name: "file",
      formData: {
        nickName: data.nickName,
      },
      header: {
        Authorization: uni.getStorageSync("token"),
      },
      success(res) {
        if (res.statusCode == 200) {
          // console.log('响应resovle', res)
          if (JSON.parse(res.data).code == 401) {
            // 认证失败，无法访问系统资源
            store.dispatch("ISLOGIN", false);
            reject(res);
          } else {
            resolve(JSON.parse(res.data));
          }
        } else {
          reject(res);
        }
      },
    });
  });
}
