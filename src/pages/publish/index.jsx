import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { useDidShow, getCurrentInstance } from "@tarojs/taro";

import "./index.scss";

const Publish = () => {
  const pageInstance = getCurrentInstance();

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
      <Text>Publish</Text>
    </View>
  );
};

export default Publish;
