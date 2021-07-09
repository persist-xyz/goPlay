export default {
  pages: [
    "pages/index/index",
    "pages/my/index",
    "pages/publish/index",
    "pages/createPublish/index",
    "pages/myJoinAct/index",
    "pages/myPublishAct/index",
    "pages/webview/webview",
  ],
  tabBar: {
    custom: true,
    backgroundColor: "#fff",
    borderStyle: "black",
    selectedColor: "#000",
    color: "#000",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: `assets/img/tab-icon1.png`,
        selectedIconPath: `assets/img/tab-icon1-on.png`,
        text: "首页",
      },
      {
        pagePath: "pages/publish/index",
        iconPath: `assets/img/tab-icon2.png`,
        selectedIconPath: `assets/img/tab-icon2.png`,
        text: "发布",
      },
      {
        pagePath: "pages/my/index",
        iconPath: `assets/img/tab-icon3.png`,
        selectedIconPath: `assets/img/tab-icon3-on.png`,
        text: "我的",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "去玩吧",
    navigationBarTextStyle: "black",
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
  },
};
