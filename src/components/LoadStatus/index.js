import Nerv from "nervjs";
import { View } from "@tarojs/components";
import "./index.scss";
const LoadStatus = ({ canLoadMore }) => {
  return (
    <View className="load-state">
      {canLoadMore ? "正在加载更多数据…" : "已全部加载完毕"}
    </View>
  );
};
export default LoadStatus;
