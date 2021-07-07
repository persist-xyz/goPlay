import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { useDidShow, getCurrentInstance } from "@tarojs/taro";
import data from "@/constants/data"; //筛选菜单数据
import FilterDropDown from "@/components/FilterDropDown";
import "./index.scss";

const Index = () => {
  const [defaultSelected] = useState([]);
  const pageInstance = getCurrentInstance();

  useEffect(() => {
    console.log(data);
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

  //接收菜单结果
  const confirm = (e) => {
    console.log(e);
  };

  return (
    <View className="index">
      <FilterDropDown
        filterData={data}
        defaultSelected={defaultSelected}
        updateMenuName={true}
        confirm={confirm}
        dataFormat="Object"
      />
    </View>
  );
};

export default Index;
