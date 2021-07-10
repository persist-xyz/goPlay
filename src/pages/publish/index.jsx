import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro, { useDidShow, getCurrentInstance } from "@tarojs/taro";
import topImg from "@/assets/img/add-top.png";
import createBtn from "@/assets/img/create-btn.png";
import { ALLACT_TYPES } from "@/constants/const";

import "./index.scss";

const Publish = () => {
  const pageInstance = getCurrentInstance();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [AllGroups] = useState(ALLACT_TYPES);

  useDidShow(() => {
    if (
      typeof pageInstance.page.getTabBar === "function" &&
      pageInstance.page.getTabBar()
    ) {
      pageInstance.page.getTabBar().setData({
        tabIndex: 1,
      });
    }
  });

  return (
    <View className="publish">
      <Image src={topImg} className="publish-top" />
      <View className="publish-types flex-between-center f-w">
        {AllGroups.map((item, index) => (
          <Text
            className={index === currentTabIndex ? "active-btn" : "default-btn"}
            onClick={() => {
              setCurrentTabIndex(index);
            }}
          >
            {item.name}
          </Text>
        ))}
      </View>

      <View
        className="flex-center-center"
        onClick={() => {
          Taro.navigateTo({
            url: `/pages/createPublish/index?type=${AllGroups[currentTabIndex].value}`,
          });
        }}
      >
        <Image src={createBtn} className="publish-btn" />
      </View>
    </View>
  );
};

export default Publish;
