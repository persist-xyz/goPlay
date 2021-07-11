import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import SquareCard from "./components/Card";
import { myPublishAct } from "@/api/user";
import "./index.scss";

const MyJoinAct = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const res = await myPublishAct();
    setList(res?.data?.data);
  }, []);

  const handleJump = (item) => {
    Taro.navigateTo({
      url: `/pages/actDetail/index?id=${item.id}`,
    });
  };

  return (
    <View className="myJoinAct">
      {list?.map((item, index) => (
        <SquareCard data={item} key={index} onClick={handleJump} />
      ))}
    </View>
  );
};

export default MyJoinAct;
