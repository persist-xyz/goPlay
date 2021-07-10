import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "@tarojs/components";
import Taro, {
  useDidShow,
  getCurrentInstance,
  useShareAppMessage,
} from "@tarojs/taro";
import SquareSection from "./components/SquareSection";
import CircleSection from "./components/CircleSection";
import didian from "@/assets/img/didian.png";
import "./index.scss";
import { getALLPost } from "@/api/post";
import { getAllGroups } from "@/api/groups";
import { defaultShare } from "@/constants/const";

const Index = () => {
  const [tabLists] = useState(["广场", "圈子"]);
  const [actList, setActList] = useState([]);
  const [circleList, setCircleList] = useState([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [cityInfo, setCityInfo] = useState({});
  const pageInstance = getCurrentInstance();

  useEffect(async () => {
    const _cityInfo = Taro.getStorageSync("cityInfo") || {};
    setCityInfo(_cityInfo);
    getAllActivity();
  }, []);

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

  useShareAppMessage(defaultShare);

  const getAllActivity = async () => {
    const res = await getALLPost();
    console.log(res.data, "--index-list--11");
    setActList(res.data.data?.posts || []);
  };

  const getAllCircle = async () => {
    const res = await getAllGroups({
      pageNum: 1,
      pageSize: 10,
    });
    console.log(res.data, "--index-list--22");
    setCircleList(res.data.data || []);
  };

  const IndexTab = () => {
    return (
      <View className="tab-list flex-center-center">
        {tabLists.map((item, index) => (
          <View
            className="list-item"
            onClick={() => {
              setCurrentTabIndex(index);
              if (index === 0) {
                getAllActivity();
              } else {
                getAllCircle();
              }
            }}
            key={index}
          >
            <Text
              className={
                index === currentTabIndex ? "text-active tab-text" : "tab-text"
              }
            >
              {item}
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
        <View className="index-header__block">
          <Image src={didian} />
          <Text>{cityInfo.province || "上海市"}</Text>
        </View>
        <IndexTab />
      </View>

      {currentTabIndex === 0 ? (
        <SquareSection list={actList} />
      ) : (
        <CircleSection list={circleList} />
      )}
    </ScrollView>
  );
};

export default Index;
