import React, { useState, useEffect } from "react";
import { View, Text, Image, Input } from "@tarojs/components";
import topImg from "@/assets/img/index-best.png";
import arrow from "@/assets/img/right-arrow.png";
import createBtn from "@/assets/img/create-btn.png";

import "./index.scss";

const CreatePublish = () => {
  const Title = ({ text, subTitle }) => {
    return (
      <Text className="createPublish-section__title">
        {text} <Text>{subTitle}</Text>{" "}
      </Text>
    );
  };

  return (
    <View className="createPublish">
      <Image src={topImg} className="createPublish-top" />

      <View className="createPublish-section">
        <Title text="活动时间" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Text className="placeholderColor">点击设置活动时间</Text>
          <Image className="arrow" src={arrow} />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="活动地点" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Text className="placeholderColor">请输入活动地点</Text>
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="会合地点" />
        <View className="createPublish-section__add flex flex-left-center ">
          <Text className="btn default-btn2">活动地点汇合</Text>
          <Text className="btn active-btn2">不在活动地点汇合</Text>
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="活动人数" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Text className="placeholderColor">点击设置活动人数</Text>
          <Image className="arrow" src={arrow} />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="比赛形式" />
        <View className="createPublish-section__add flex flex-left-center ">
          <Text className="btn active-btn2">不限</Text>
          <Text className="btn default-btn2">男</Text>
          <Text className="btn default-btn2">女</Text>
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="人均消费" />
        <View className="createPublish-section__add flex flex-left-center f-w">
          <Text className="btn active-btn2">免费</Text>
          <Text className="btn default-btn2">≤49</Text>
          <Text className="btn default-btn2">50～99</Text>
          <Text className="btn default-btn2">100～299</Text>
          <Text className="btn default-btn2">300+</Text>
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="发布到" />
        <View className="createPublish-section__add flex flex-left-center ">
          <Text className="btn active-btn2">广场</Text>
          <Text className="btn default-btn2">选择圈子</Text>
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="发起人联系电话" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="numer"
            className="placeholderColor"
            placeholder="请输入联系电话"
          />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="发起人姓名" subTitle="（选填）" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="text"
            className="placeholderColor"
            placeholder="请输入您的姓名"
          />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="发起人微信号" subTitle="（选填）" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="text"
            className="placeholderColor"
            placeholder="留下微信号方便好友联系到你哦"
          />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="备注" subTitle="（选填）" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="textarea"
            className="placeholderColor"
            placeholder="请填写备注 字数不要超过40个字符（此处40是暂时的）"
          />
        </View>
      </View>

      <View className="flex-center-center">
        <Image src={createBtn} className="createPublish-createBtn " />
      </View>
    </View>
  );
};

export default CreatePublish;
