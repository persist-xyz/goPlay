import { envVar } from "@/utils/env";
import { createPromise } from "@/utils";

class TaroAuth {
  doAuth() {
    if (process.env.TARO_ENV === "weapp") {
      const apiList = ["checkSession", "login", "getUserInfo", "getSetting"];
      const TaroWeapp = this.getApiList(apiList);

      // 检查登录态是否过期
      return TaroWeapp.checkSession()
        .then(
          () => this.codeLogin(TaroWeapp),
          () => this.codeLogin(TaroWeapp) // 登录失效
        )
        .catch(() => this.codeLogin(TaroWeapp));
    }

    if (process.env.TARO_ENV === "alipay") {
      const promiseUtil = createPromise();

      // https://docs.alipay.com/mini/introduce/authcode

      // 支付宝小程序需要关联应用才能授权成功
      const apiList = ["getAuthCode", "getAuthUserInfo"];
      const TaroAlipay = this.getApiList(apiList);
      let myCode = "";

      TaroAlipay.getAuthCode({ scopes: "auth_user" })
        .then((res) => {
          if (res.authCode) {
            myCode = res.authCode;
            // 调用自己的服务端接口，让服务端进行后端的授权认证，并且种session
          }

          promiseUtil.resolve({
            userInfo: { code: myCode },
          });
        })
        .then(TaroAlipay.getAuthUserInfo)
        .then((res) => {
          promiseUtil.resolve({
            userInfo: { ...res, code: myCode },
          });
        })
        .catch((err) => {
          promiseUtil.reject(err);
        });

      return promiseUtil.promise;
    }

    if (process.env.TARO_ENV === "tt") {
      const apiList = ["authorize", "checkSession", "login", "getUserInfo"];
      const TaroTt = this.getApiList(apiList);

      // 检查登录态是否过期
      return TaroTt.checkSession()
        .then(
          () => this.codeLogin(TaroTt),
          () => this.codeLogin(TaroTt)
        )
        .catch(() => this.codeLogin(TaroTt));
    }

    if (process.env.TARO_ENV === "swan") {
      const apiList = ["checkSession", "login", "getUserInfo", "getSetting"];
      const TaroSwan = this.getApiList(apiList);

      // 检查登录态是否过期
      return TaroSwan.checkSession()
        .then(
          () => this.codeLogin(TaroSwan),
          () => this.codeLogin(TaroSwan)
        )
        .catch(() => this.codeLogin(TaroSwan));
    }
  }

  codeLogin(terminalEnv) {
    let myCode = "";

    return new Promise((resolve, reject) => {
      terminalEnv
        .login()
        .then((res) => {
          myCode = res.code;
        })
        .then(terminalEnv.getSetting)
        .then((res) => {
          if (res.authSetting["scope.userInfo"]) {
            return terminalEnv.getUserInfo();
          }
        })
        .then((res) => {
          const errMsg = res && res.errMsg;

          if (errMsg === "getUserInfo:ok") {
            const params = {
              ...res,
              code: myCode,
            };
            resolve(params);
          }
        });
    });
  }

  /**
   * @param {*} apiList
   */
  getApiList(apiList) {
    let terminalEnv = {};
    apiList.forEach((api) => {
      terminalEnv[api] = (options = {}) => {
        return new Promise((resolve, reject) => {
          const { success, fail } = options;
          const args = {
            ...options,
            success: (res) => {
              success && success(res);
              resolve(res);
            },
            fail: (err) => {
              fail && fail(err);
              reject(err);
            },
          };
          envVar.terminal[api](args);
        });
      };
    });
    return terminalEnv;
  }
}

export default new TaroAuth();
