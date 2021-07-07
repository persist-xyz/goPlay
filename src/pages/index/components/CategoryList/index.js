import React, { useState, useEffect, useRef } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import {
  View,
  Swiper,
  SwiperItem,
  ScrollView,
  Text,
} from "@tarojs/components";
import "./index.scss";

const CategoryList = ({ navBarHeight=80  }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [allData, setAllData] = useState([
    { canLoadMore: true, orderType: 1, readType: 0 }
  ]);
  const [showLists, setShowLists] = useState([[1,2]]);
  const [swiperContScroll, setSwiperContScroll] = useState(false);

  // tab切换
  const changeTab = index => {
    setCurrentTabIndex(index);
  };
  
  // 滑动切换swiper
  const swiperChange = e => {
    const { source, current } = e.detail;
    if (source === "touch") {
      changeTab(current);
    }
  };
  // 加载更多
  const loadMore = () => {
    let current = allData[currentTabIndex] || {};
    if (!current.canLoadMore) return;
    getCategoryBooks({ refresh: false });
  };

  useEffect(() => {
    let observer = Taro.createIntersectionObserver(getCurrentInstance().page);
    observer
      .relativeToViewport({ top: -navBarHeight, bottom: -100 })
      .observe(".hot-ranking", res => {
        if (res.intersectionRatio === 0) {
          setSwiperContScroll(false);
        } else {
          setSwiperContScroll(true);
        }
      });
  }, []);
  
  return (
    <View class="category-list">
      <View className="tab-filter" style={{ top: navBarHeight + "px" }}>
      11
      </View>

      <Swiper
        className="swiper-cont"
        onChange={swiperChange}
        current={currentTabIndex}
        circular
      >
        {showLists.map(item2 => (
          <SwiperItem>
            <ScrollView
              className="data-list"
              scrollY={!swiperContScroll}
              onScrollToLower={loadMore}
              showScrollbar={false}
            >
              <Text>{item2}</Text>
              </ScrollView>
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
};

export default CategoryList
