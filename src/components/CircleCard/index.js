import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image } from "@tarojs/components";
import skeletonimg from "@/assets/img/skeleton-img.png";
import line from "@/assets/img/line.png";
import joinBtn from "@/assets/img/btn-join.png";
import didian from "@/assets/img/didian.png";
import member from "@/assets/img/member.png";
import { ALLGROUPS } from "@/constants/const";
import "./index.scss";

const CircleCard = ({ data, onClick }) => {
  return (
    <View class="circleCard border-radius">
      <View className="circleCard-center flex-left-center">
        <Image
          className="circleCard-center__cover"
          src={data.icon || skeletonimg}
        ></Image>

        <View className="flex-column card-right">
          <View>
            <View>
              {ALLGROUPS?.[data.type]?.name && (
                <Text className="circleCard-center__yellowbg">
                  {ALLGROUPS?.[data.type]?.name}
                </Text>
              )}
              <Text className="circleCard-center__title">{data.name}</Text>
            </View>

            <Text className="circleCard-center__subtitle">
              {data.description}
            </Text>
          </View>

          <View>
            <View className="circleCard-center__notes flex-left-center">
              <Image
                className="circleCard-center__icon"
                src={member}
                mode="aspectFill"
              ></Image>
              <Text>成员 {data.count}人</Text>
            </View>

            <View className="circleCard-center__notes flex-left-center">
              <Image
                className="circleCard-center__icon"
                src={didian}
                mode="aspectFill"
              ></Image>
              <Text>{data.address}</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="circleCard-bottom">
        <Image
          className="circleCard-bottom__line"
          src={line}
          mode="aspectFill"
        ></Image>

        {data.joinGroupFlag && (
          <View className="flex-between-end" onClick={() => onClick(data)}>
            <Image src={joinBtn} className="circleCard-bottom__card-btn" />
          </View>
        )}
      </View>
    </View>
  );
};

export default CircleCard;
