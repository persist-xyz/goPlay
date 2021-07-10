import Taro from "@tarojs/taro";
import querystring from "querystring";

const BASEURL = "http://192.168.2.206:9800";
// const BASEURL = "https://gateway-api.dushu365.com";

const HTTP_STATUS = {
  SUCCESS: [1, "0000"],
  RELOGIN: [-1, "0001", "0003"],
};

let loadingCount = 0;
let hasAdd = false;

const customInterceptor = (chain) => {
  const requestParams = chain.requestParams;
  return chain.proceed(requestParams).then((res) => {
    if (loadingCount > 0) {
      Taro.hideLoading();
      loadingCount--;
    }
    if (HTTP_STATUS.SUCCESS.includes(res.data.status)) {
      return res.data;
    }
    if (HTTP_STATUS.RELOGIN.includes(res.data.status)) {
      Taro.showToast({
        title: "登录过期，请重新登录",
        icon: "none",
      });
      return Promise.reject();
    }
    let hide = requestParams.data && requestParams.data.hideError;
    try {
      Taro.hideLoading();
    } catch (error) {
      console.log(error);
    }

    if (!hide) {
      Taro.showToast({
        title: "22" || res.data.message || res.data.msg,
        icon: "none",
      });
    }

    return Promise.reject("11" || res.data.message || res.data.msg || null);
  });
};

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
// const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]
// interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

function baseOptions(params, method = "POST") {
  // !hasAdd && Taro.addInterceptor(customInterceptor);
  hasAdd = true;
  let { url, data, header } = params;
  // if (!data.noLoading) {
  //   loadingCount++;
  // } else {
  //   delete data.noLoading;
  // }
  // Taro.showLoading({ title: "正在加载..." });

  let contentType = params.contentType || "application/json";
  const option = {
    url: BASEURL + url,
    data: {
      ...data,
    },
    method: method,
    header: {
      "content-type": contentType,
      token: data.token || Taro.getStorageSync("token"),
      ...header,
    },
    timeout: 5000,
  };
  return Taro.request(option);
}

export function get(url, params = {}) {
  let option = { url, data: params };
  return baseOptions(option, "GET");
}

function post(url, params = {}, header) {
  let option = { url, data: params, header };
  return baseOptions(option);
}

export function postForm(url, params = {}) {
  let option = {
    url,
    data: querystring.stringify(params),
    contentType: "application/x-www-form-urlencoded",
  };
  return baseOptions(option);
}
export default post;
