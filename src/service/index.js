import Taro from "@tarojs/taro";
import TaroAuth from "@/service/auth";

const globalData = {};

const setData = (key, val) => {
  globalData[key] = val;
};

const getData = (key) => {
  return globalData[key];
};

const getStorageData = (key) => {
  return Taro.getStorageSync(key);
};

const setStorageData = (key, value) => {
  Taro.setStorageSync(key, value);
};

const removeStorageData = (key) => {
  return Taro.removeStorageSync(key);
};

const clearStorageData = () => {
  return Taro.clearStorageSync();
};

const sharePageParams = (params) => {
  // const nickName = getStorageData("userInfo").nickName || getStorageData("userInfo").userName;

  let shareParam = {
    title: params.title,
    desc: params.desc,
    path: params.path,
    imageUrl: params.imageUrl,
    bgImgUrl: params.bgImgUrl,
  };

  return shareParam;
};

export {
  setData,
  getData,
  getStorageData,
  setStorageData,
  removeStorageData,
  clearStorageData,
  sharePageParams,
};
