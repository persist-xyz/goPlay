import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import { useDidShow, getCurrentInstance } from "@tarojs/taro";
import topImg from "@/assets/img/add-top.png";

import "./index.scss";

const Publish = () => {
  const pageInstance = getCurrentInstance();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [types] = useState([
    { name: "美食" },
    { name: "美食" },
    { name: "美食" },
    { name: "美食" },
    { name: "美食" },
    { name: "美食" },
  ]);

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
        {types.map((item, index) => (
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
    </View>
  );
};

export default Publish;
