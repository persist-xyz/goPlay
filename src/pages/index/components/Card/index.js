import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image } from "@tarojs/components";
import defaultAvatar from "@/assets/img/default-avatar.png";
import skeletonimg from "@/assets/img/skeleton-img.png";
import line from "@/assets/img/line.png";
import joinBtn from "@/assets/img/btn-join.png";
import "./index.scss";

const Card = () => {
  return (
    <View class="card border-radius">
      <View className="card-top flex flex-left-center">
        <Image
          className="card-top__avatar"
          src={defaultAvatar}
          mode="aspectFill"
        ></Image>
        <Text className="card-top__text1">小仙女本仙 </Text>
        <Text className="card-top__text2">发起 </Text>
      </View>

      <View className="card-center flex-left-center">
        <Image className="card-center__cover" src={skeletonimg}></Image>

        <View className="flex-column ">
          <Text className="card-center__title">减肥塑形21天蜕变训练营</Text>

          <Text className="card-center__yellowbg">黄豆健身社</Text>

          <View className="card-center__notes flex-left-center">
            <Image
              className="card-center__icon"
              src={defaultAvatar}
              mode="aspectFill"
            ></Image>
            <Text>本周日15:00</Text>
          </View>
          <View className="card-center__notes flex-left-center">
            <Image
              className="card-center__icon"
              src={defaultAvatar}
              mode="aspectFill"
            ></Image>
            <Text>50～99元</Text>
          </View>
          <View className="card-center__notes flex-left-center">
            <Image
              className="card-center__icon"
              src={defaultAvatar}
              mode="aspectFill"
            ></Image>
            <Text>普陀区长安街道虹桥南丰城23楼</Text>
          </View>
        </View>
      </View>

      <View className="card-bottom">
        <Image
          className="card-bottom__line"
          src={line}
          mode="aspectFill"
        ></Image>
        <View className="card-bottom__headers">
          <Text className="card-bottom__nums">人数：6/10</Text>
          <View className="flex-left-start">
            <Image
              className="card-bottom__head"
              src={defaultAvatar}
              mode="aspectFill"
            ></Image>
            <Image
              className="card-bottom__head"
              src={defaultAvatar}
              mode="aspectFill"
            ></Image>
            <Image
              className="card-bottom__head"
              src={defaultAvatar}
              mode="aspectFill"
            ></Image>
          </View>
        </View>
      </View>

      <image src={joinBtn} className="card-btn" />
    </View>
  );
};

export default Card;
