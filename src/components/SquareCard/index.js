import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image } from "@tarojs/components";
import dayjs from "dayjs";
import defaultAvatar from "@/assets/img/default-avatar.png";
import skeletonimg from "@/assets/img/act-cover.png";
import line from "@/assets/img/line.png";
import joinBtn from "@/assets/img/btn-join.png";
import didian from "@/assets/img/didian.png";
import shijian from "@/assets/img/shijian.png";
import price from "@/assets/img/price.png";
import { ALLGROUPS, perSpends } from "@/constants/const";
import "./index.scss";

const SquareCard = ({ data, onClick, onJoin }) => {
  return (
    <View class="squareCard border-radius">
      <View className="squareCard-top flex flex-left-center">
        <Image
          className="squareCard-top__avatar"
          src={data?.user?.imageUrl || defaultAvatar}
          mode="aspectFill"
        ></Image>
        <Text className="squareCard-top__text1">{data?.user?.name} </Text>
        <Text className="squareCard-top__text2">发起 </Text>
      </View>

      <View
        className="squareCard-center flex-left-center"
        onClick={() => onClick(data)}
      >
        <Image className="squareCard-center__cover" src={skeletonimg}></Image>

        <View className="flex-column card-right">
          <View>
            <View className="squareCard-center__title">{data.title}</View>
            {ALLGROUPS?.[data.groupType]?.name && (
              <Text className="squareCard-center__yellowbg">
                {ALLGROUPS?.[data.groupType]?.name}
              </Text>
            )}
          </View>

          <View>
            <View className="squareCard-center__notes flex-left-center">
              <Image
                className="squareCard-center__icon"
                src={shijian}
                mode="aspectFill"
              ></Image>
              <Text className={data.joinGroupFlag ? "" : "vague"}>
                {dayjs(data?.startTime).format("YYYY-MM-DD HH:mm")}
              </Text>
            </View>
            <View className="squareCard-center__notes flex-left-center">
              <Image
                className="squareCard-center__icon"
                src={price}
                mode="aspectFill"
              ></Image>
              <Text className={data.joinGroupFlag ? "" : "vague"}>
                {perSpends?.[data.salesType]?.name}
              </Text>
            </View>
            <View className="squareCard-center__notes flex-left-center">
              <Image
                className="squareCard-center__icon"
                src={didian}
                mode="aspectFill"
              ></Image>
              <Text className={data.joinGroupFlag ? "" : "vague"}>
                {data.address}
              </Text>
            </View>
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
          <Text className="squareCard-bottom__nums">
            人数：{data.count}/{data.totalCount}
          </Text>
          <View className="flex-left-start" style="margin-top:10rpx">
            {data.joinUser?.map((item, index) => (
              <Image
                className="squareCard-bottom__head"
                src={item?.imageUrl || defaultAvatar}
                mode="aspectFill"
              />
            ))}
          </View>
        </View>
      </View>

      {!data.joinGroupFlag && (
        <Image
          src={joinBtn}
          className="squareCard-btn"
          onClick={() => onJoin(data)}
        />
      )}
    </View>
  );
};

export default SquareCard;