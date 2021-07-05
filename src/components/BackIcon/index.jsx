import Nerv, { useState, useRef, useEffect } from "nervjs";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import logo from "@/assets/img/logo.png";
import "./index.scss";

let style = "top:0";

const BackIcon = ({
  color = "#000",
  title = "",
  isBack = true,
  onBackError
}) => {
  const lay = Taro.getMenuButtonBoundingClientRect();
  style = `top:${lay.top}px;`;
  const pageBack = () => {
    Taro.navigateBack().catch(err => {
      onBackError && onBackError();
    });
  };
  return (
    <View
      style={style}
      className="back-wrap flex-left-center"
      onClick={pageBack}
    >
      {isBack ? (
        <View className="back-icon" style={`border-color:${color}`}></View>
      ) : (
        <Image src={logo} className="home-button"></Image>
      )}
      <View className="back-title" style={color ? `color:${color}` : undefined}>
        {title}
      </View>
    </View>
  );
};
export default BackIcon;
