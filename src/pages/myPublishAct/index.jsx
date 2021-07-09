import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import Card from "./components/Card";

import "./index.scss";

const MyPublishAct = () => {
  return (
    <View className="myPublishAct">
      <Card />
    </View>
  );
};

export default MyPublishAct;
