import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import FilterDropDown from "@/components/FilterDropDown";
import { circleFilter } from "@/constants/const"; //筛选菜单数据
import CircleCard from "@/components/CircleCard";
import { getAllGroups, joinGroups } from "@/api/groups";

import "./index.scss";

const BestCircle = () => {
  const [filterData] = useState(circleFilter);
  const [defaultSelected] = useState([]);
  const [circleList, setCircleList] = useState([]);

  useEffect(async () => {
    const res = await getAllGroups({
      pageNum: 1,
      pageSize: 10,
    });
    console.log(res.data, "--index-list--22");
    setCircleList(res.data.data || []);
  }, []);

  const confirm = (e) => {
    console.log(e);
  };

  const handleJoinGroup = async (item) => {
    const res = await joinGroups({ postId: item.id });
    console.log(item, res, "--join");
    if (res.data?.data) {
      Taro.showToast({
        title: "加入成功",
        icon: "none",
      });
    }
  };

  return (
    <View className="bestCircle">
      <View className="bestCircle-filter">
        <FilterDropDown
          filterData={filterData}
          defaultSelected={defaultSelected}
          updateMenuName={true}
          confirm={confirm}
          dataFormat="Object"
        />
      </View>

      {circleList?.map((item, index) => (
        <CircleCard data={item} key={index} onClick={handleJoinGroup} />
      ))}
    </View>
  );
};

export default BestCircle;
