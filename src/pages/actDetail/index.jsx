import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import dayjs from "dayjs";
import topImg from "@/assets/img/index-best.png";
import defaultAvatar from "@/assets/img/default-avatar.png";
import mobile from "@/assets/img/mobile.png";
import didian from "@/assets/img/didian.png";
import isfull from "@/assets/img/isfull.png";
import out from "@/assets/img/out.png";
import edit from "@/assets/img/edit.png";
import join from "@/assets/img/join.png";
import { ALLGROUPS, vsTypes, perSpends } from "@/constants/const";
import { getActivityInfo } from "@/api/post";

import "./index.scss";

const ActDetail = () => {
  const router = useRouter();
  const id = router.params.id;
  const [data, setData] = useState({});

  useEffect(async () => {
    console.log(id);
    const res = await getActivityInfo({ id });
    console.log(res.data?.data);
    setData(res.data?.data);
  }, []);

  const takePhone = () => {
    Taro.makePhoneCall({
      phoneNumber: "1340000",
    });
  };

  return (
    <View className="actDetail">
      <View className="actDetail-top">
        <Image src={topImg} className="actDetail-top__bg" />
        <View className="actDetail-top__user">
          <Image src={defaultAvatar} />
          <Text>{data?.user?.name} 发起</Text>
        </View>
      </View>

      <View className="actDetail-base">
        <View className="actDetail-base__title">{data.title}</View>
        <Text className="actDetail-base__yellowbg">
          {ALLGROUPS?.[data.type]?.name}
        </Text>
        <View
          className="actDetail-base__address flex-row flex-between-center"
          onClick={takePhone}
        >
          <View className="flex-row flex-center-center ">
            <Image src={didian} className="didian" />
            <Text>{data.address}</Text>
          </View>
          <Image src={mobile} className="mobile" />
        </View>
      </View>
      <View className="actDetail-info">
        <View className="graybg" />
        <View className="actDetail-info__item flex-row flex-left-start ">
          <Text className="lable">活动时间：</Text>
          <Text className="val">
            {dayjs(data?.createTime).format("YYYY-MM-DD HH:mm")}
          </Text>
        </View>
        {/* <View className="actDetail-info__item flex-row flex-left-start ">
          <Text className="lable">汇合地点：</Text>
          <Text className="val">1</Text>
        </View> */}
        <View className="actDetail-info__item flex-row flex-left-start ">
          <Text className="lable">比赛形式：</Text>
          <Text className="val"> {vsTypes?.[data.playType]?.name} </Text>
        </View>
        {/* <View className="actDetail-info__item flex-row flex-left-start ">
          <Text className="lable">性别限制：</Text>
          <Text className="val">{sexs?.[data.playType]?.name}</Text>
        </View> */}
        <View className="actDetail-info__item flex-row flex-left-start noline">
          <Text className="lable">人均消费：</Text>
          <Text className="val">{perSpends?.[data.salesType]?.name}</Text>
        </View>
        <View className="graybg" />
        <View className="actDetail-info__item noline">
          <View className="flex-row">
            <Text className="lable">活动人数：</Text>
            <Text className="val">
              {data.count}/{data.totalCount}
            </Text>
          </View>
          <View className="heads">
            {data.joinUser?.map((item, index) => (
              <Image
                className="squareCard-bottom__head"
                src={item?.imageUrl || defaultAvatar}
                mode="aspectFill"
              />
            ))}
          </View>
        </View>
        <View className="graybg" />
        <View className="actDetail-info__item flex-row flex-left-start ">
          <Text className="lable">发起人姓名：</Text>
          <Text className="val">{data.name}</Text>
        </View>
        <View className="actDetail-info__item flex-row flex-left-start ">
          <Text className="lable">微信号：</Text>
          <Text className="val">{data.wechatId}</Text>
        </View>
        <View className="actDetail-info__item flex-row flex-left-start ">
          <Text className="lable">备注：</Text>
          <Text className="val">{data.content}</Text>
        </View>
      </View>

      {/* <View
        className="flex-center-center"
        onClick={() => {
          Taro.navigateTo({
            url: `/pages/createPublish/index?type=`,
          });
        }}
      >
        <Image
          src={
            data.joinGroupFlag
              ? out
              : data.count >= data.totalCount
              ? isfull
              : edit
          }
          className="actDetail-btn"
        />
      </View> */}
    </View>
  );
};

export default ActDetail;
