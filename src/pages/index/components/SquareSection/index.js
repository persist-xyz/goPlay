import React, { useState, useEffect, useRef } from "react";
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, Text } from "@tarojs/components";
import FilterDropDown from "@/components/FilterDropDown";
import SquareCard from "@/components/SquareCard";
import data from "./data"; //筛选菜单数据
import { joinActivity } from "@/api/post";
import banner1 from "@/assets/img/banner1.png";
import "./index.scss";

const SquareSection = ({ list }) => {
  const [tabLists2] = useState(["所有活动", "圈子活动"]);
  const [banners] = useState([banner1, banner1]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [filterData] = useState(data);
  const [defaultSelected] = useState([]);

  //接收菜单结果
  const confirm = (e) => {
    console.log(e);
  };

  const handleJump = (item) => {
    Taro.navigateTo({
      url: `/pages/actDetail/index?id=${item.id}`,
    });
  };

  const handleJoinAct = async (item) => {
    const res = await joinActivity({ postId: item.id });
    console.log(item, res, "--join");
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
            key={index}
          >
            <Text
              className={
                index === currentTabIndex ? "text-active tab-text" : "tab-text"
              }
            >
              {item}
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
              src={item}
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

      {list?.map((item, index) => (
        <SquareCard
          data={item}
          key={index}
          onJoin={handleJoinAct}
          onClick={handleJump}
        />
      ))}
    </View>
  );
};

export default SquareSection;
