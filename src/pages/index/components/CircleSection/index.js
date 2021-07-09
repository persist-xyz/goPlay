import React, { useState, useEffect, useRef } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import FilterDropDown from "@/components/FilterDropDown";
import data from "./data"; //筛选菜单数据
import CircleCard from "../CircleCard";
import bestImg from "@/assets/img/index-best.png";
import createImg from "@/assets/img/index-create.png";
import "./index.scss";

const CircleSection = ({}) => {
  const [filterData] = useState(data);
  const [defaultSelected] = useState([]);

  const confirm = (e) => {
    console.log(e);
  };

  return (
    <View class="circleSection">
      <View class="circleSection-top flex-between-center">
        <Image src={bestImg} />
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

      <CircleCard />
    </View>
  );
};

export default CircleSection;
