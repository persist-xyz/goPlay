Component({
  data: {
    tabIndex: 0,
    selectedColor: "#4C4948",
    color: "#4C4948",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: require("@/assets/img/tab-icon1.png"),
        selectedIconPath: require("@/assets/img/tab-icon1-on.png"),
        text: "首页",
      },
      {
        pagePath: "/pages/publish/index",
        iconPath: require("@/assets/img/tab-icon2.png"),
        selectedIconPath: require("@/assets/img/tab-icon2.png"),
        text: "发布",
      },
      {
        pagePath: "/pages/my/index",
        iconPath: require("@/assets/img/tab-icon3.png"),
        selectedIconPath: require("@/assets/img/tab-icon3-on.png"),
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
