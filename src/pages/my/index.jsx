import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro, { useDidShow, getCurrentInstance } from "@tarojs/taro";
import defaultAvatar from "@/assets/img/default-avatar.png";
import male from "@/assets/img/male.png";
import female from "@/assets/img/female.png";
import arrow from "@/assets/img/right-arrow.png";
import { authorizeLogin } from "@/api/user";

import "./index.scss";

const My = () => {
  const pageInstance = getCurrentInstance();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const _userInfo = Taro.getStorageSync("userInfo") || {};
    console.log(_userInfo, "222");
    setUserInfo(_userInfo);
  }, []);

  useDidShow(() => {
    if (
      typeof pageInstance.page.getTabBar === "function" &&
      pageInstance.page.getTabBar()
    ) {
      pageInstance.page.getTabBar().setData({
        tabIndex: 2,
      });
    }
  });

  const toMyPublishAct = () => {
    Taro.navigateTo({
      url: `/pages/myPublishAct/index`,
    });
  };
  const toMyJoinAct = () => {
    Taro.navigateTo({
      url: `/pages/myJoinAct/index`,
    });
  };

  const getUserInfo = async () => {
    if (userInfo.nickName) return;

    let e = await Taro.getUserProfile({ desc: "获取用户信息", lang: "zh_CN" });
    if (e.errMsg !== "getUserProfile:ok") return;

    let loginRes = await Taro.login();
    const params = {
      code: loginRes.code,
      name: e.userInfo.nickName,
    };
    const res = await authorizeLogin(params);
    setUserInfo(e.userInfo);
    Taro.setStorageSync("token", res.data.data.token);
    Taro.setStorageSync("userInfo", e.userInfo);
  };

  return (
    <View className="my">
      <View className="my-top">
        <View className="my-avatar" onClick={getUserInfo}>
          <Image
            className="my-avatar__img"
            src={userInfo.avatarUrl || defaultAvatar}
          />
          <Image
            className="my-avatar__sex"
            src={userInfo.gender === 1 ? male : female}
          />
        </View>

        <Text className="my-name">{userInfo.nickName || "登录"}</Text>
      </View>

      <View className="my-list border-radius">
        <View
          className="flex flex-left-center flex-between-center"
          onClick={toMyPublishAct}
        >
          <Text>我发布的活动</Text>
          <Image className="" src={arrow} />
        </View>
        <View
          className="flex flex-left-center flex-between-center"
          onClick={toMyJoinAct}
        >
          <Text>我参与的活动</Text>
          <Image className="" src={arrow} />
        </View>
      </View>

      <View className="my-list border-radius">
        <View className="flex flex-left-center flex-between-center">
          <Text>提醒设置</Text>
          <Image className="" src={arrow} />
        </View>
      </View>
    </View>
  );
};

export default My;
