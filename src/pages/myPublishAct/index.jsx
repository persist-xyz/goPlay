import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import SquareCard from "@/components/SquareCard";
import { myPublishAct } from "@/api/user";

import "./index.scss";

const MyPublishAct = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const res = await myPublishAct();
    console.log(res);
    setList(res?.data?.data);
  }, []);

  const handleJoinAct = (item) => {
    console.log(item, "--join");
  };

  return (
    <View className="myPublishAct">
      {list?.map((item, index) => (
        <SquareCard data={item} key={index} onClick={handleJoinAct} />
      ))}
    </View>
  );
};

export default MyPublishAct;
