export default {
  pages: [
    "pages/index/index",
    "pages/my/my",
    "pages/webview/webview"
  ],
  tabBar: {
    color: "#000000",
    selectedColor: "#000000",
    backgroundColor: "#fff",
    list: [
      {
      pagePath: "pages/index/index",
      text: "首页"
    },
      {
        pagePath: "pages/my/my",
        text: "发布"
      },
      {
        pagePath: "pages/my/my",
        text: "我的"
      },
    ]
    },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "去玩吧",
    navigationBarTextStyle: "black",
  },
};
