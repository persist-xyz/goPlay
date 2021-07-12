import React, { useState, useEffect, useRef } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import dayjs from "dayjs";
import defaultAvatar from "@/assets/img/default-avatar.png";
import line from "@/assets/img/line.png";
import joinBtn from "@/assets/img/btn-join.png";
import didian from "@/assets/img/didian.png";
import shijian from "@/assets/img/shijian.png";
import isfull from "@/assets/img/isfull.png";
import price from "@/assets/img/price.png";
import add from "@/assets/img/add.png";
import { ALLGROUPS, ALLACT_TYPES, perSpends } from "@/constants/const";
import "./index.scss";

const topImg =
  "https://cdn-ali-images-test.dushu365.com/16259190727ad8afa851172ec20c8e88fb520d746blc105n";

const SquareCard = ({ data, onClick, onJoin }) => {
  console.log(data);

  const handleShare = () => {};

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
        <Image
          className="squareCard-center__cover"
          src={
            ALLACT_TYPES.filter(
              (item) => item.value === data?.activityType
            )?.[0]?.img || topImg
          }
        ></Image>

        <View className="flex-column card-right">
          <View>
            <View className="squareCard-center__title">{data.title}</View>
            {ALLGROUPS?.[data.groupType - 1]?.name && (
              <Text className="squareCard-center__yellowbg">
                {ALLGROUPS?.[data.groupType - 1]?.name}
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
              <Text /* className={data.joinGroupFlag ? "" : "vague"} */>
                {dayjs(data?.startTime).format("YYYY-MM-DD HH:mm")}
              </Text>
            </View>
            <View className="squareCard-center__notes flex-left-center">
              <Image
                className="squareCard-center__icon"
                src={price}
                mode="aspectFill"
              ></Image>
              <Text /* className={data.joinGroupFlag ? "" : "vague"} */>
                {perSpends?.[data.salesType]?.name}
              </Text>
            </View>
            <View className="squareCard-center__notes flex-left-center">
              <Image
                className="squareCard-center__icon"
                src={didian}
                mode="aspectFill"
              ></Image>
              <Text /* className={data.joinGroupFlag ? "" : "vague"} */>
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
            {data.count < data.totalCount && (
              <Button openType="share" className="share-btn">
                <Image
                  className="squareCard-bottom__head"
                  src={add}
                  mode="aspectFill"
                  onClick={handleShare}
                />
              </Button>
            )}
          </View>
        </View>
      </View>

      {!data.myFlag && (
        <Image
          src={data.count < data.totalCount ? joinBtn : isfull}
          mode="aspectFill"
          className="squareCard-btn"
          onClick={() => {
            if (data.count < data.totalCount) {
              onJoin(data);
            } else {
              Taro.showToast({
                title: "加入人数已满～",
                icon: "none",
              });
            }
          }}
        />
      )}
    </View>
  );
};

export default SquareCard;
