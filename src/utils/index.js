import Taro from "@tarojs/taro";
import Qs from "qs";

const PAGE_WEBVIEW = `/pages/webview/webview`;

/**
 * url 可能是网页链接，需要在 webview 中打开
 * 也可能是小程序自身的链接，只能用 navigate/redirect 之类的打开
 */
const jump = (options) => {
  const {
    url,
    title = "",
    query = {},
    method = "navigateTo",
    encode = false,
  } = options;

  if (/^https?:\/\//.test(url)) {
    Taro[method]({
      url: addInfoToUrl(PAGE_WEBVIEW, { url, title }, encode),
    });
  } else {
    Taro[method]({
      url: addInfoToUrl(url, query),
    });
  }
};

/**
 * 生成带参数url
 * @param url
 * @param query
 * @returns {string}
 */
function addInfoToUrl(url, query, encode) {
  url = url || "";

  // 某些webview可能需要用户信息
  let userInfo = {};

  url += (url.indexOf("?") > -1 ? "&" : "?") + convertToParams(query, encode);
  return url;
}

/**
 * 对象转换为url params
 * @param obj
 * @returns {string}
 */
function convertToParams(obj, isQs) {
  return Object.keys(obj)
    .map((k) => {
      return (
        encodeURIComponent(k) +
        "=" +
        (isQs
          ? encodeURIComponent(Qs.stringify(obj[k]))
          : encodeURIComponent(obj[k]))
      );
    })
    .join("&");
}

const formaters = {
  mobile: (value) => {
    return `${value.substr(0, 3)}-${value.substr(3, 4)}-${value.substr(7)}`;
  },
  price: (value) => {
    const p = parseFloat(value);

    if (!p) {
      return "0.00";
    }

    return p.toFixed(2);
  },

  playMount: (value) => {
    var temp = parseInt(value);

    if (!temp) {
      return 0;
    } else {
      if (temp < 10000 && temp > 0) {
        return temp;
      } else if (temp >= 10000) {
        return parseInt(temp / 10000) + "W";
      } else {
        return 0;
      }
    }
  },
  audioDuration: (duration) => {
    const dura = Number(duration && duration.toFixed(0));

    const minute = parseInt(dura / 60.0) || 0;

    const seconds = Math.round(
      (parseFloat(dura / 60.0) - parseInt(dura / 60.0)) * 60 || 0
    );

    return (
      String(minute).padStart(2, "0") + ":" + String(seconds).padStart(2, "0")
    );
  },

  /**
   * 1h之内完成时，显示“xx分钟前”；
   * 1h-24h内完成时，显示“xx小时前”；
   * 24h之外，显示“x天前”；
   * 7天之外，显示“年.月.日”
   */
  timeSlot: (value) => {
    if (!value) {
      return "";
    }
    const diffTime = Math.abs(new Date().getTime() - new Date(value).getTime());
    const milliseconds = 3600 * 1000; // 一小时毫秒数
    // 7天之外，显示“年.月.日”
    if (diffTime > 7 * 24 * milliseconds) {
      let date = new Date(value);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      return (
        y + "." + String(m).padStart(2, "0") + "." + String(d).padStart(2, "0")
      );
    }
    // 24h之外，显示“x天前”；
    else if (diffTime < 7 * 24 * milliseconds && diffTime > 24 * milliseconds) {
      let day = Math.floor(diffTime / (24 * milliseconds));
      return day + "天前";
    }
    // 1h-24h内完成时，显示“xx小时前”；
    else if (diffTime < 24 * milliseconds && diffTime > milliseconds) {
      let hour = Math.floor(diffTime / milliseconds);
      return hour + "小时前";
    }
    // 1h之内完成时，显示“xx分钟前”；
    else if (diffTime < milliseconds && diffTime > 0) {
      let minute = Math.ceil(diffTime / (60 * 1000));
      return minute + "分钟前";
    }
  },

  /**
   * 还剩余多少天，不包括今天
   */
  selectDay: (endtime, begintime) => {
    var nTime = endtime - begintime;
    var day = Math.floor(nTime / 86400000);
    return day;
  },

  /**
   * retuen 2018.11.10
   */
  formatShortDate: (time, separator = ".") => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return [year, month, day].map(formatNumber).join(separator);
  },

  /**
   * retuen  2018.11.10 10:01
   */
  getDateTime: (time) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const today = new Date().setHours(0, 0, 0, 0);
    //一天是86400000毫秒
    const yesterday = today - 86400000;
    const beforeday = today - 86400000 * 2;
    const tomorrow = today + 86400000;
    if (date > today && date < tomorrow) {
      return "今天 " + [hour, minute].map(formatNumber).join(":");
    } else if (date > yesterday && date < today) {
      return "昨天 " + [hour, minute].map(formatNumber).join(":");
    } else if (date > beforeday && date < yesterday) {
      return "前天 " + [hour, minute].map(formatNumber).join(":");
    } else {
      return (
        [year, month, day].map(formatNumber).join(".") +
        " " +
        [hour, minute].map(formatNumber).join(":")
      );
    }
  },

  modificationTime: (time, type) => {
    var date = new Date(time),
      y = date.getFullYear() + "-",
      M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-",
      d = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ",
      h = date.getHours() + ":",
      H =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":",
      m = date.getMinutes() + ":",
      mM = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
      s = date.getSeconds();
    switch (type) {
      case "ymd":
        return y + M + d;
        break;
      case "md":
        var nowDate = new Date(),
          mon =
            (nowDate.getMonth() + 1 < 10
              ? "0" + (nowDate.getMonth() + 1)
              : nowDate.getMonth() + 1) + "-",
          day =
            (nowDate.getDate() < 10
              ? "0" + nowDate.getDate()
              : nowDate.getDate()) + " ";
        if (mon == M && day == d) {
          return H + mM;
        } else {
          return M + d;
        }
        break;
      case "ms":
        let totalTime = time > 0 ? time : 0;
        let _h = parseInt(totalTime / 3600);
        let _m = parseInt((totalTime % 3600) / 60);
        let _s = parseInt((totalTime % 3600) % 60);
        _h = _h > 9 ? _h : "0" + _h;
        _m = _m > 9 ? _m : "0" + _m;
        _s = _s > 9 ? _s : "0" + _s;
        return _m + ":" + _s;
        break;
      default:
        return y + M + d;
        break;
    }
  },
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

const isValidMobile = (n) => {
  const withCode = /^\+((?!(86|1|81|65))[0-9]\d{7,}|(1)[0-9]{10}|(81)[0-9]{11}|(65)[0-9]{8})$/;
  const china = /^(13[0-9]|15[012356789]|17[01235678]|18[0-9]|14[579]|19[189]|166)[0-9]{8}$/;

  return n ? (withCode.test(n) ? 1 : china.test(n) ? 1 : 0) : 0;
};

const isChinaMobile = (mobile, code) => {
  if (!mobile) {
    return false;
  }

  // 如果有传区号，并且区号不等于 +86 同时不等于 86 则认为是非中国区手机号，直接返回true
  if (code && String(code) !== "+86" && String(code) !== "86") {
    return true;
  }

  if (
    /^\+((?!(86|1|81|65))[0-9]\d{7,}|(1)[0-9]{10}|(81)[0-9]{11}|(65)[0-9]{8})$/.test(
      mobile
    )
  ) {
    return true;
  }

  if (
    /^(13[0-9]|15[012356789]|17[01235678]|18[0-9]|14[579]|19[189]|16[0-9])[0-9]{8}$/.test(
      mobile
    )
  ) {
    return true;
  }

  return false;
};

/**
 * 创建一个promise实例, 取出resolve, reject
 * @return object {
 *   promise,
 *   resolve,
 *   reject
 * }
 */
const createPromise = function () {
  let _resolve = null;
  let _reject = null;
  const promise = new Promise((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  });

  return {
    promise,
    resolve: _resolve,
    reject: _reject,
  };
};

const getSystem = () => {
  const { system } = Taro.getSystemInfoSync();
  if (system.indexOf("IOS") >= 0) {
    return "ios";
  }
  return "android";
};

const showToast = (params) => {
  if (Object.prototype.toString.apply(params) === "[object Object]") {
    const { title = "", icon = "none", duration = 3000 } = params;
    Taro.showToast({
      title,
      icon,
      duration,
    });
  } else {
    Taro.showToast({
      title: params,
      icon: "none",
      duration: 3000,
    });
  }
};

const showLoading = (title = "加载中") => {
  Taro.showLoading({ title, mask: true });
};

const hideLoading = () => {
  Taro.hideLoading();
};

const getScene = (scene) => {
  let _id = [
    "1007",
    "1008",
    "1035",
    "1011",
    "1012",
    "1013",
    "1025",
    "1031",
    "1032",
    "1035",
    "1036",
    "1037",
    "1047",
    "1048",
    "1049",
    "1096",
  ];
  let _status = false;
  for (var i = 0; i < _id.length; i++) {
    if (scene == _id[i]) {
      return true;
    } else {
      _status = false;
    }
  }
  return _status;
};

/**
 * 函数防抖
 * @param {*} cb
 * @param {*} ms
 */
const debounce = (cb, ms) => {
  let timer = null;
  return function (...params) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, params);
    }, ms);
  };
};

/**
 * 节流
 * @param {*} cb
 * @param {*} ms
 */
const throttle = (cb, ms) => {
  let timer = null;
  let startTime = undefined;
  return function (...params) {
    startTime = startTime || +new Date();
    let currentTime = Date.now();
    let remaining = ms - (currentTime - startTime);
    clearTimeout(timer);
    if (remaining <= 0) {
      cb.apply(this, params);
      startTime = Date.now();
    } else {
      timer = setTimeout(() => {
        cb.apply(this, params);
        startTime = undefined;
      }, remaining);
    }
  };
};

const getNetworkType = () => {
  Taro.getNetworkType({
    success: (res) => {
      console.log(res, "--getNetworkType");
      /* if (res.networkType === "unknown") {
        jump({
          method: "redirectTo",
          url: "/bdDushu/pages/networkErr/networkErr"
        });
      } */
    },
  });

  Taro.onNetworkStatusChange(function (res) {
    console.log(res, "--onNetworkStatusChange");

    if (!res.isConnected) {
      jump({
        method: "redirectTo",
        url: "/pages/networkErr/networkErr",
      });
    }
  });
};

export {
  jump,
  formaters,
  isValidMobile,
  isChinaMobile,
  createPromise,
  getSystem,
  showToast,
  showLoading,
  hideLoading,
  getScene,
  debounce,
  throttle,
  getNetworkType,
};
