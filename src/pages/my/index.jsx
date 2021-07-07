import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { useDidShow, getCurrentInstance } from "@tarojs/taro";

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

  return (
    <View className="my">
      <Text>my</Text>
    </View>
  );
};

export default My;
