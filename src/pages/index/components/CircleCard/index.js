import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image } from "@tarojs/components";
import skeletonimg from "@/assets/img/skeleton-img.png";
import line from "@/assets/img/line.png";
import joinBtn from "@/assets/img/btn-join.png";
import didian from "@/assets/img/didian.png";
import member from "@/assets/img/member.png";
import "./index.scss";

const CircleCard = () => {
  return (
    <View class="circleCard border-radius">
      <View className="circleCard-center flex-left-center">
        <Image className="circleCard-center__cover" src={skeletonimg}></Image>

        <View className="flex-column">
          <View className="">
          <Text className="circleCard-center__yellowbg">宠物圈</Text>
          <Text className="circleCard-center__title">减肥塑形21天蜕变训练营</Text>
          </View>
          
          <Text className="circleCard-center__subtitle">进群都必须是爱猫人士，喜欢狗的不准进群</Text>

          <View className="circleCard-center__notes flex-left-center">
            <Image
              className="circleCard-center__icon"
              src={member}
              mode="aspectFill"
            ></Image>
            <Text>成员 300人</Text>
          </View>
          <View className="circleCard-center__notes flex-left-center">
            <Image
              className="circleCard-center__icon"
              src={didian}
              mode="aspectFill"
            ></Image>
            <Text>普陀区长安街道虹桥南丰城23楼</Text>
          </View>
        </View>
      </View>

      <View className="circleCard-bottom">
        <Image
          className="circleCard-bottom__line"
          src={line}
          mode="aspectFill"
        ></Image>
        <View className="flex-between-end">
          <Image src={joinBtn} className="circleCard-bottom__card-btn" />
        </View>
      </View>

    </View>
  );
};

export default CircleCard;
