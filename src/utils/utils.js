import store from '@/store/store';
import api from '@/http/api';
export default {
  isAllEmpty(arr, keys){
    return arr.every((item) => {
      return keys.every((key) => {
      return !item[key]
      })
    })
  },
  changeLocation(e) {
    store.dispatch('LOCATION', e);
  },
  getLoginStatus() {
    return false;
  },
  code_login(params, success_callback, error_callback) {
    uni.login({
      provider: "weixin",
      success: function (res) {
        console.log(res.code, '登录')
        api.WXlogin(Object.assign({
          code: res.code
        }, params)).then(res => {
          if (res.code == 200) {
            console.log('utils-登录成功');
            uni.setStorageSync('token', res.data.token);
            store.dispatch('USERINFO', res.data.userBaseInfo);
            store.dispatch('ISLOGIN', true);
            success_callback(res);
          } else {
            console.log('utils-登录失败');
            error_callback(res);
          }
        })
      },
    });
  },
  check_login(_this) {
    if (store.state.isLogin) {
      return true;
    } else {
      if (!!_this.mescroll) _this.mescroll.endErr()
      _this.login_show = true;
      return false;
    }
  },
}