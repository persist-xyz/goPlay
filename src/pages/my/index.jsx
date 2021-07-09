import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro, { useDidShow, getCurrentInstance } from "@tarojs/taro";
import defaultAvatar from "@/assets/img/default-avatar.png";
import male from "@/assets/img/male.png";
import female from "@/assets/img/female.png";
import arrow from "@/assets/img/right-arrow.png";

import "./index.scss";

const My = () => {
  const pageInstance = getCurrentInstance();

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

  return (
    <View className="my">
      <View className="my-top">
        <View className="my-avatar">
          <Image className="my-avatar__img" src={defaultAvatar} />
          <Image className="my-avatar__sex" src={male} />
        </View>

        <Text className="my-name">小仙女本仙</Text>
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
