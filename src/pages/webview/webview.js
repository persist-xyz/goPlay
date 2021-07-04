import React, { useEffect, useState } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, WebView } from "@tarojs/components";

import "./webview.scss";

const Webview = () => {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    let { url = "", title = "" } = getCurrentInstance().router.params;
    // console.log(getCurrentInstance().router, '--router');

    if (!url) return;

    const _url = decodeURIComponent(url);
    const _title = decodeURIComponent(title);

    Taro.setNavigationBarTitle({ _title });
    setPageUrl(_url);
  }, []);

  return (
    <View className="webview">
      <WebView src={pageUrl} />
    </View>
  );
};

export default Webview;
