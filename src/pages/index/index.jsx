import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import Taro, { useDidShow, getCurrentInstance } from "@tarojs/taro";
import SquareSection from "./components/SquareSection";
import CircleSection from "./components/CircleSection";
import "./index.scss";
import { authorizeLogin } from "@/api/user";

const Index = () => {
  const [tabLists] = useState([
    {
      name: "广场",
    },
    {
      name: "圈子",
    },
  ]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const pageInstance = getCurrentInstance();

  useEffect(() => {}, []);

  useDidShow(() => {
    if (
      typeof pageInstance.page.getTabBar === "function" &&
      pageInstance.page.getTabBar()
    ) {
      pageInstance.page.getTabBar().setData({
        tabIndex: 0,
      });
    }
  });

  const getUserInfo = async () => {
    let e = await Taro.getUserProfile({ desc: "获取用户信息", lang: "zh_CN" });
    if (e.errMsg !== "getUserProfile:ok") return;
    let loginRes = await Taro.login();
    console.log(e, loginRes, "---");
    // await authorizeLogin({});
  };

  const IndexTab = () => {
    return (
      <View className="tab-list flex-center-center">
        {tabLists.map((item, index) => (
          <View
            className="list-item"
            onClick={() => {
              setCurrentTabIndex(index);
            }}
            key={item.id}
          >
            <Text
              className={
                index === currentTabIndex ? "text-active tab-text" : "tab-text"
              }
            >
              {item.name}
            </Text>
            {index === 0 && <Text style={{ color: "#ccc" }}>|</Text>}
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView className="index" scrollY scrollWithAnimation>
      <View className="index-header">
        <IndexTab />
      </View>

      {currentTabIndex === 0 ? <SquareSection /> : <CircleSection />}
    </ScrollView>
  );
};

export default Index;
