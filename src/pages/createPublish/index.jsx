import React, { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { View, Text, Image, Input, Textarea, Button } from "@tarojs/components";
import dayjs from "dayjs";
import arrow from "@/assets/img/right-arrow.png";
import createBtn from "@/assets/img/create-btn.png";
import FilterDropDown from "@/components/FilterDropDown";
import Picker from "@/components/Picker";
import {
  ALLGROUPS,
  ALLACT_TYPES,
  meetingPlaces,
  vsTypes,
  sexs,
  perSpends,
} from "@/constants/const";
import { createActivity } from "@/api/post";

import "./index.scss";

const topImg =
  "https://cdn-ali-images-test.dushu365.com/16259190727ad8afa851172ec20c8e88fb520d746blc105n";

const CreatePublish = () => {
  const router = useRouter();
  const actType = Number(router.params.type);
  const [placeIndex, setPlaceIndex] = useState(0);
  const [sexIndex, setSexIndex] = useState(0);
  const [vsIndex, setVsIndex] = useState(0);
  const [spendIndex, setSpendIndex] = useState(0);
  const [publishPlaceIndex, setPublishPlaceIndex] = useState(100);
  const [showPicker, setShowPicker] = useState(false);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const [totalCount, setTotalCount] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [wxCode, setWxCode] = useState("");
  const [content, setContent] = useState("");
  const [groupType, setGroupType] = useState("");

  const filterData = [
    {
      name: "选择圈子",
      type: "hierarchy",
      submenu: ALLGROUPS,
    },
  ];

  const dateTime = [
    { mode: "day", duration: 30, unit: "日", humanity: true, format: "M月D日" },
    { mode: "hour", unit: ":00", selected: [8, 12, 16] },
    { mode: "minute", fields: 10, unit: "分" },
  ];

  useEffect(() => {
    console.log(ALLACT_TYPES[actType]);
  }, []);

  const selectTime = () => {
    setShowPicker(true);
  };

  const handleInitial = (value) => {
    console.log("initial value: ", value);
  };

  const handleConfirm = (value) => {
    setShowPicker(false);
    setTime(dayjs(value).valueOf());
  };

  const handleCancel = () => {
    setShowPicker(false);
  };

  const confirmCircle = (e) => {
    setPublishPlaceIndex(1);
    setGroupType(e.value[0]);
    console.log(111, e);
  };

  const getPhoneNumber = (e) => {
    console.log(e.detail);
    if (e.detail.errMsg !== "getPhoneNumber:ok") return;
  };

  const chooseAddress = () => {
    Taro.chooseLocation({
      latitude: "",
      longitude: "",
      success: (e) => {
        console.log(e);
        setAddress1(e.address);
      },
    });
  };

  const handleCreatActivity = async () => {
    const params = {
      activityType: actType,
      title,
      startTime: time,
      address: address1 + address2,
      totalCount,
      playType: vsTypes[vsIndex].value,
      salesType: perSpends[spendIndex].value,
      groupType: publishPlaceIndex === 100 ? "" : publishPlaceIndex,
      mobile,
      name,
      wechatId: wxCode,
      content,
    };

    console.log(params, "--params");
    const res = await createActivity(params);
    Taro.navigateTo({
      url: `/pages/actDetail/index?id=${res.data.data}`,
    });
    console.log(res, "--res");
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
      <Image
        src={ALLACT_TYPES[actType + 1]?.img || topImg}
        className="createPublish-top"
        mode="aspectFill"
      />

      <View className="createPublish-section">
        <Title text="活动主题" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="numer"
            value={title}
            onInput={(e) => {
              setTitle(e.detail.value);
            }}
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
          {time ? (
            <Text className="">
              {time && dayjs(time).format("YYYY-MM-DD HH:mm:ss")}
            </Text>
          ) : (
            <Text className="placeholderColor">点击设置活动时间</Text>
          )}
          <Image className="arrow" src={arrow} />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="活动地点" />
        <View
          className="createPublish-section__add line flex flex-left-center flex-between-center"
          onClick={chooseAddress}
        >
          {address1 ? (
            <Text className="">{address1}</Text>
          ) : (
            <Text className="placeholderColor">点击选择活动地点</Text>
          )}
          <Image className="arrow" src={arrow} />
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="会合地点" />
        <View className="createPublish-section__add flex flex-left-center ">
          <Input
            type="numer"
            value={address2}
            onInput={(e) => {
              setAddress2(e.detail.value);
            }}
            placeholderClass="placeholderColor"
            placeholder="请输入汇合地点"
          />
        </View>
        {/* <View className="createPublish-section__add flex flex-left-center ">
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
        </View> */}
      </View>

      <View className="createPublish-section">
        <Title text="活动人数" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          {/* <Text className="placeholderColor">点击设置活动人数</Text> */}
          <Input
            type="numer"
            value={totalCount}
            onInput={(e) => {
              setTotalCount(e.detail.value);
            }}
            placeholderClass="placeholderColor"
            placeholder="点击设置活动人数"
          />
          <Image className="arrow" src={arrow} />
        </View>
      </View>

      {/* <View className="createPublish-section">
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
      </View> */}

      {/* <View className="createPublish-section">
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
      </View> */}

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
        <View className="createPublish-section__add flex flex-left-center places ">
          <Text
            className={
              publishPlaceIndex === 100 ? "active-btn2 btn" : "default-btn2 btn"
            }
            onClick={() => setPublishPlaceIndex(100)}
          >
            广场
          </Text>

          {ALLGROUPS.map((item, index) => (
            <Text
              className={
                index === publishPlaceIndex
                  ? "active-btn2 btn"
                  : "default-btn2 btn"
              }
              onClick={() => {
                setPublishPlaceIndex(index);
              }}
            >
              {item.name}
            </Text>
          ))}

          <View
            className={
              publishPlaceIndex === 1 ? "active_choose choose" : "choose"
            }
          >
            {/* <FilterDropDown
              filterData={filterData}
              defaultSelected={circleSelected}
              updateMenuName={true}
              confirm={confirmCircle}
              dataFormat="Object"
            /> */}
          </View>
        </View>
      </View>

      <View className="createPublish-section">
        <Title text="发起人联系电话" />
        <View className="createPublish-section__add line flex flex-left-center flex-between-center">
          <Input
            type="numer"
            value={mobile}
            onInput={(e) => {
              setMobile(e.detail.value);
            }}
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
            value={name}
            onInput={(e) => {
              setName(e.detail.value);
            }}
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
            value={wxCode}
            onInput={(e) => {
              setWxCode(e.detail.value);
            }}
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
            value={content}
            onInput={(e) => {
              setContent(e.detail.value);
            }}
            placeholderClass="placeholderColor "
            placeholder="请填写备注 字数不要超过40个字符（此处40是暂时的）"
          />
        </View>
      </View>

      <View className="flex-center-center" onClick={handleCreatActivity}>
        <Image src={createBtn} className="createPublish-createBtn " />
      </View>

      {showPicker && (
        <View className="picker-time">
          <View className="mask2"></View>
          <Picker
            dateTime={dateTime}
            // onInitial={handleInitial}
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
