import Taro from "@tarojs/taro";

// 活动类型
export const ALLACT_TYPES = [
  {
    name: "美食",
    value: 1,
    img: "https://cdn-ali-images-test.dushu365.com/1625919072263bfa783f4d07133ab5eb5da4a33037t6y1eu",
  },
  {
    name: "游戏",
    value: 2,
    img: "https://cdn-ali-images-test.dushu365.com/1625919072358646658e0ddd5f5c865fd4745deb66zcxr1n",
  },
  {
    name: "篮球",
    value: 3,
    img: "https://cdn-ali-images-test.dushu365.com/16259190722413b4d7a3a1ee184f17ef68d17b07f461tm6y",
  },
  {
    name: "爬山",
    value: 4,
    img: "https://cdn-ali-images-test.dushu365.com/162591907203fe5c15eb2b014cca7da5c760e9ed04psthbc",
  },
  {
    name: "聚会",
    value: 5,
    img: "https://cdn-ali-images-test.dushu365.com/1625919072f448946829a844176d23d378ab10d129oh1n86",
  },
  {
    name: "逛展",
    value: 6,
    img: "https://cdn-ali-images-test.dushu365.com/16259190727ad8afa851172ec20c8e88fb520d746blc105n",
  },
  { name: "宠物", value: 7 },
  { name: "探店", value: 8 },
  { name: "跑步", value: 9 },
];

// 圈子
export const ALLGROUPS = [
  { name: "所有圈子", value: 0 },
  { name: "美食", value: 1 },
  { name: "逛展", value: 2 },
  { name: "宠物", value: 3 },
  { name: "游戏", value: 4 },
  { name: "读书", value: 5 },
];

export const meetingPlaces = [
  {
    name: "活动地点汇合",
    value: 0,
  },
  {
    name: "不在活动地点汇合",
    value: 1,
  },
];

export const vsTypes = [
  {
    name: "1V1",
    value: 0,
  },
  {
    name: "3V3",
    value: 1,
  },
  {
    name: "5V5",
    value: 2,
  },
];

export const sexs = [
  {
    name: "不限",
    value: 0,
  },
  {
    name: "男",
    value: 1,
  },
  {
    name: "女",
    value: 2,
  },
];

export const perSpends = [
  {
    name: "免费",
    value: 0,
  },
  {
    name: "≤49",
    value: 1,
  },
  {
    name: "50～99",
    value: 2,
  },
  {
    name: "100～299",
    value: 3,
  },
  {
    name: "300+",
    value: 4,
  },
];

export const circleFilter = [
  {
    type: "hierarchy",
    name: "所有圈子",
    submenu: ALLGROUPS,
  },
  {
    type: "filter",
    name: "所有类型",
    submenu: [
      {
        name: "活动人数",
        submenu: [
          {
            name: "0-5",
            value: 0,
          },
          {
            name: "6-10",
            value: 1,
          },
          {
            name: "11-20",
            value: 2,
          },
          {
            name: "20+",
            value: 3,
          },
        ],
      },
      {
        name: "人均消费",
        submenu: perSpends,
      },
      {
        name: "性别",
        submenu: sexs,
      },
      {
        name: "参加情况",
        submenu: [
          {
            name: "不限",
            value: 0,
          },
          {
            name: "人未满",
            value: 1,
          },
          {
            name: "人已满",
            value: 2,
          },
        ],
      },
    ],
  },
];

// 默认分享文案
export const defaultShare = () => {
  let userInfo = Taro.getStorageSync("userInfo") || {};
  return {
    title: `您的好友${userInfo.nickName}邀请您来参加活动，快来看看吧～`,
    imageUrl:
      "https://cdn-ali-images-test.dushu365.com/1625919072f448946829a844176d23d378ab10d129oh1n86",
    path: `/pages/index/index`,
  };
};
