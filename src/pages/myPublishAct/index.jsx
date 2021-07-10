import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import SquareCard from "@/components/SquareCard";
import { myPublishAct } from "@/api/user";

import "./index.scss";

const MyJoinAct = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const res = await myPublishAct();
    console.log(res, "--join");
    // setList(res?.data?.data);
  }, []);

  return (
    <View className="myJoinAct">
      {list?.map((item, index) => (
        <SquareCard
          data={item}
          key={index}
          onJoin={handleJoinAct}
          onClick={handleJump}
        />
      ))}
    </View>
  );
};

export default MyJoinAct;
