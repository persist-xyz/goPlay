import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image } from "@tarojs/components";
import defaultAvatar from "@/assets/img/default-avatar.png";
import skeletonimg from "@/assets/img/skeleton-img.png";
import line from "@/assets/img/line.png";
import joinBtn from "@/assets/img/btn-join.png";
import didian from "@/assets/img/didian.png";
import shijian from "@/assets/img/shijian.png";
import price from "@/assets/img/price.png";
import "./index.scss";

const SquareCard = () => {
  return (
    <View class="squareCard border-radius">
      <View className="squareCard-top flex flex-left-center">
        <Image
          className="squareCard-top__avatar"
          src={defaultAvatar}
          mode="aspectFill"
        ></Image>
        <Text className="squareCard-top__text1">小仙女本仙 </Text>
        <Text className="squareCard-top__text2">发起 </Text>
      </View>

      <View className="squareCard-center flex-left-center">
        <Image className="squareCard-center__cover" src={skeletonimg}></Image>

        <View className="flex-column ">
          <Text className="squareCard-center__title">减肥塑形21天蜕变训练营</Text>
          <Text className="squareCard-center__yellowbg">黄豆健身社</Text>
          <View className="squareCard-center__notes flex-left-center">
            <Image
              className="squareCard-center__icon"
              src={shijian}
              mode="aspectFill"
            ></Image>
            <Text>本周日15:00</Text>
          </View>
          <View className="squareCard-center__notes flex-left-center">
            <Image
              className="squareCard-center__icon"
              src={price}
              mode="aspectFill"
            ></Image>
            <Text>50～99元</Text>
          </View>
          <View className="squareCard-center__notes flex-left-center">
            <Image
              className="squareCard-center__icon"
              src={didian}
              mode="aspectFill"
            ></Image>
            <Text>普陀区长安街道虹桥南丰城23楼</Text>
          </View>
        </View>
      </View>

      <View className="squareCard-bottom">
        <Image
          className="squareCard-bottom__line"
          src={line}
          mode="aspectFill"
        ></Image>
        <View className="squareCard-bottom__headers">
          <Text className="squareCard-bottom__nums">人数：6/10</Text>
          <View className="flex-left-start">
            <Image
              className="squareCard-bottom__head"
              src={defaultAvatar}
              mode="aspectFill"
            ></Image>
            <Image
              className="squareCard-bottom__head"
              src={defaultAvatar}
              mode="aspectFill"
            ></Image>
            <Image
              className="squareCard-bottom__head"
              src={defaultAvatar}
              mode="aspectFill"
            ></Image>
          </View>
        </View>
      </View>

      <image src={joinBtn} className="squareCard-btn" />
    </View>
  );
};

export default SquareCard;
