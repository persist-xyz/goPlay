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
        iconPath: `assets/img/index-icon.png`,
        selectedIconPath: `assets/img/index-icon-on.png`,
        text: "首页"
      },
      {
        pagePath: "pages/my/my",
        iconPath: `assets/img/index-icon.png`,
        selectedIconPath: `assets/img/index-icon-on.png`,
        text: "发布"
      },
      {
        pagePath: "pages/my/my",
        iconPath: `assets/img/mine-icon.png`,
        selectedIconPath: `assets/img/mine-icon-on.png`,
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
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
  },
};
