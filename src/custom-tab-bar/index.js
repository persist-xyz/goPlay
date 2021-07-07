Component({
  data: {
    tabIndex: 0,
    tab1Changed: false,
    selectedColor: "#000",
    color: "#999",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: require("./tab-icon1.png"),
        selectedIconPath: require("./tab-icon1-on.png"),
        text: "首页",
      },
      {
        pagePath: "/pages/publish/index",
        iconPath: require("./tab-icon2.png"),
        selectedIconPath: require("./tab-icon2-on.png"),
        text: "发布",
      },
      {
        pagePath: "/pages/my/index",
        iconPath: require("./tab-icon2.png"),
        selectedIconPath: require("./tab-icon2-on.png"),
        text: "我的",
      },
    ],
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      this.setData({
        tabIndex: data.index,
      });
    },
  },
});
