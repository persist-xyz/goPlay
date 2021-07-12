import React, { useState, useEffect, useRef } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import FilterDropDown from "@/components/FilterDropDown";
import { circleFilter } from "@/constants/const"; //筛选菜单数据
import CircleCard from "@/components/CircleCard";
import { joinGroups } from "@/api/groups";
import bestImg from "@/assets/img/index-best.png";
import createImg from "@/assets/img/index-create.png";
import "./index.scss";

const CircleSection = ({ list, onReload }) => {
  const [filterData] = useState(circleFilter);
  const [defaultSelected] = useState([]);

  const confirm = (e) => {
    console.log(e);
  };

  const handleJoinGroup = async (item) => {
    const res = await joinGroups({ postId: item.id });
    console.log(item, res, "--join");

    if (res.data?.data) {
      Taro.showToast({
        title: "圈子加入成功～",
        icon: "none",
      });

      onReload();
    }
  };

  return (
    <View class="circleSection">
      <View class="circleSection-top flex-between-center">
        <Image
          src={bestImg}
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/bestCircle/index",
            });
          }}
        />
        <Image src={createImg} />
      </View>

      <View className="circleSection-filter">
        <FilterDropDown
          filterData={filterData}
          defaultSelected={defaultSelected}
          updateMenuName={true}
          confirm={confirm}
          dataFormat="Object"
        />
      </View>

      {list?.map((item, index) => (
        <CircleCard data={item} key={index} onClick={handleJoinGroup} />
      ))}
    </View>
  );
};

export default CircleSection;
