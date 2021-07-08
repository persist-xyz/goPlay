import React, { useState, useEffect, useRef } from "react";
import { View, Swiper, SwiperItem, Image, Text } from "@tarojs/components";
import FilterDropDown from "@/components/FilterDropDown";
import SquareCard from "../SquareCard";
import data from "./data"; //筛选菜单数据
import img from "@/assets/img/index-best.png";
import "./index.scss";

const SquareSection = ({}) => {
  const [tabLists2] = useState([
    {
      name: "所有活动",
    },
    {
      name: "圈子活动",
    },
  ]);

  const [banners] = useState([
    {
      image: img,
    },
    {
      image: img,
    },
  ]);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [filterData] = useState(data);
  const [defaultSelected] = useState([]);

  //接收菜单结果
  const confirm = (e) => {
    console.log(e);
  };

  const IndexTypeTab = () => {
    return (
      <View className="squareSection-tab-list flex-left-start">
        {tabLists2.map((item, index) => (
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
          </View>
        ))}
      </View>
    );
  };

  const Banners = () => {
    return (
      <Swiper
        className="squareSection-banner"
        indicatorDots={banners.length > 1}
        indicatorActiveColor="#fff"
        indicatorColor="rgba(255, 255, 255, 0.6)"
      >
        {banners.map((item) => (
          <SwiperItem>
            <Image
              className="squareSection-banner__img"
              src={item.image}
              mode="aspectFill"
              // onClick={bannerClick}
            ></Image>
          </SwiperItem>
        ))}
      </Swiper>
    );
  };

  return (
    <View class="squareSection">
      <IndexTypeTab />
      <Banners />

      <View className="squareSection-filter">
        <FilterDropDown
          filterData={filterData}
          defaultSelected={defaultSelected}
          updateMenuName={true}
          confirm={confirm}
          dataFormat="Object"
        />
      </View>

      <SquareCard />
    </View>
  );
};

export default SquareSection;
