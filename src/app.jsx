import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { Provider } from "react-redux";
import configStore from "./store";
import isAuthrization from "@/utils/authorization";

import "./app.scss";
const store = configStore();

const App = (props) => {
  useEffect(async () => {
    try {
      await isAuthrization(
        "scope.userLocation",
        "授权地理位置信息可获取更准确的信息"
      );
      let locationInfo = await Taro.getLocation({ type: "gcj02" });
      const latitudeLongitude = locationInfo.latitude + "," + locationInfo.longitude;
      console.log(locationInfo,latitudeLongitude,'---aa')
    } catch (err) {
      console.log(err,"拒绝授权地理位置");
    }
  },[])

  return <Provider store={store}>{props.children}</Provider>;
};

export default App;
