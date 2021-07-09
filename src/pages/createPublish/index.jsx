import React, { useState, useEffect } from "react";
import { View, Text, Image, Input, Textarea, Button } from "@tarojs/components";
import topImg from "@/assets/img/index-best.png";
import arrow from "@/assets/img/right-arrow.png";
import createBtn from "@/assets/img/create-btn.png";
import FilterDropDown from "@/components/FilterDropDown";
import Picker from "@/components/Picker";
import { meetingPlaces, vsTypes, sexs, perSpends } from "./const";

import "./index.scss";

const CreatePublish = () => {
  const [placeIndex, setPlaceIndex] = useState(0);
  const [sexIndex, setSexIndex] = useState(0);
  const [vsIndex, setVsIndex] = useState(0);
  const [spendIndex, setSpendIndex] = useState(0);
  const [publishPlaceIndex, setPublishPlaceIndex] = useState(0);
  const [circleSelected] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const filterData = [
    {
      name: "选择圈子",
      type: "hierarchy",
      submenu: [
        {
          name: "圈子1",
          value: "圈子1",
        },
        {
          name: "圈子2",
          value: "圈子2",
        },
        {
          name: "圈子3",
          value: "圈子3",
        },
      ],
    },
  ];

  const dateTime = [
    { mode: "day", duration: 30, unit: "日", humanity: true, format: "M月D日" },
    { mode: "hour", unit: ":00", selected: [8, 12, 16] },
    { mode: "minute", fields: 10, unit: "分" },
  ];

  const selectTime = () => {
    setShowPicker(true);
  };

  const handleInitial = (value) => {
    console.log("initial value: ", value);
  };

  const handleConfirm = (value) => {
    console.log("confirm value: ", value);
    setShowPicker(false);
  };

  const handleCancel = () => {
    console.log("cancel action");
    setShowPicker(false);
  };

  const confirmCircle = (e) => {
    setPublishPlaceIndex(1);
    console.log(e);
  };

  const getPhoneNumber = (e) => {
    console.log(e.detail);
    if (e.detail.errMsg !== "getPhoneNumber:ok") return;
  };

  const Title = ({ text, subTitle }) => {
    return (
      <Text className="createPublish-section__title">
        {text} <Text>{subTitle}</Text>
      </Text>
    );
  };

  return (
    <View className="createPublish">
      <Image src={topImg} className="createPublish-top" />

      <View className="createPublish-section">
        <Title text="活动主题" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="numer"
            placeholderClass="placeholderColor"
            placeholder="请输入此次活动的主题 不超过12个字符"
          />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="活动时间" />
        <View
          className="createPublish-section__add line flex flex-left-center flex-between-center"
          onClick={selectTime}
        >
          <Text className="placeholderColor">点击设置活动时间</Text>
          <Image className="arrow" src={arrow} />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="活动地点" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="numer"
            placeholderClass="placeholderColor"
            placeholder="请输入活动地点"
          />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="会合地点" />
        <View className="createPublish-section__add flex flex-left-center ">
          {meetingPlaces.map((item, index) => (
            <Text
              className={
                index === vsIndex ? "active-btn2 btn" : "default-btn2 btn"
              }
              onClick={() => {
                setVsIndex(index);
              }}
            >
              {item.name}
            </Text>
          ))}
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="活动人数" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          {/* <Text className="placeholderColor">点击设置活动人数</Text> */}
          <Input
            type="numer"
            placeholderClass="placeholderColor"
            placeholder="点击设置活动人数"
          />
          <Image className="arrow" src={arrow} />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="性别限制" />
        <View className="createPublish-section__add flex flex-left-center ">
          {sexs.map((item, index) => (
            <Text
              className={
                index === sexIndex ? "active-btn2 btn" : "default-btn2 btn"
              }
              onClick={() => {
                setSexIndex(index);
              }}
            >
              {item.name}
            </Text>
          ))}
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="比赛形式" />
        <View className="createPublish-section__add flex flex-left-center ">
          {vsTypes.map((item, index) => (
            <Text
              className={
                index === placeIndex ? "active-btn2 btn" : "default-btn2 btn"
              }
              onClick={() => {
                setPlaceIndex(index);
              }}
            >
              {item.name}
            </Text>
          ))}
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="人均消费" />
        <View className="createPublish-section__add flex flex-left-center f-w">
          {perSpends.map((item, index) => (
            <Text
              className={
                index === spendIndex ? "active-btn2 btn" : "default-btn2 btn"
              }
              onClick={() => {
                setSpendIndex(index);
              }}
            >
              {item.name}
            </Text>
          ))}
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="发布到" />
        <View className="createPublish-section__add flex flex-left-center ">
          <Text
            className={
              publishPlaceIndex === 0 ? "active-btn2 btn" : "default-btn2 btn"
            }
            onClick={() => setPublishPlaceIndex(0)}
          >
            广场
          </Text>
          <View
            className={
              publishPlaceIndex === 1 ? "active_choose choose" : "choose"
            }
          >
            <FilterDropDown
              filterData={filterData}
              defaultSelected={circleSelected}
              updateMenuName={true}
              confirm={confirmCircle}
              dataFormat="Object"
            />
          </View>
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="发起人联系电话" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="numer"
            placeholderClass="placeholderColor"
            placeholder="请输入联系电话"
          />
          <Button
            className="getphone-btn"
            openType="getPhoneNumber"
            onGetPhoneNumber={getPhoneNumber}
          >
            获取
          </Button>
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="发起人姓名" subTitle="（选填）" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="text"
            placeholderClass="placeholderColor"
            placeholder="请输入您的姓名"
          />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="发起人微信号" subTitle="（选填）" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="text"
            placeholderClass="placeholderColor"
            placeholder="留下微信号方便好友联系到你哦"
          />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="备注" subTitle="（选填）" />
        <View className="createPublish-section__add flex flex-left-center flex-between-center">
          <Textarea
            className="textarea"
            placeholderClass="placeholderColor "
            placeholder="请填写备注 字数不要超过40个字符（此处40是暂时的）"
          />
        </View>
      </View>

      <View className="flex-center-center">
        <Image src={createBtn} className="createPublish-createBtn " />
      </View>

      {showPicker && (
        <View className="picker-time">
          <View className="mask2"></View>
          <Picker
            dateTime={dateTime}
            onInitial={handleInitial}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            mode="format"
          />
        </View>
      )}
    </View>
  );
};

export default CreatePublish;
