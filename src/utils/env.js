import Taro from "@tarojs/taro";

// 获取当前小程序全局对象
export const envVar = (function () {
  const env = Taro.getEnv();

  if (env === "WEAPP") {
    return {
      env,
      terminal: wx,
      note: "wx",
      text: "微信",
    };
  }

  if (env === "ALIPAY") {
    return {
      env,
      terminal: my,
      note: "alipay",
      text: "支付宝",
    };
  }

  if (env === "TT") {
    return {
      env,
      terminal: tt,
      note: "tt",
      text: "头条",
    };
  }

  if (env === "SWAN") {
    return {
      env,
      terminal: swan,
      note: "swan",
      text: "百度",
    };
  }

  if (env === "RN") {
    return {
      env,
      terminal: Taro,
      note: "rn",
      text: "RN",
    };
  }

  if (env === "WEB") {
    return {
      env,
      terminal: Taro,
      note: "web",
      text: "H5",
    };
  }
})();
