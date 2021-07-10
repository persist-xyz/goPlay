// 活动类型
export const ALLACT_TYPES = [
  { name: "美食", value: 1, img: require("@/assets/img/meishi.png") },
  { name: "游戏", value: 2, img: require("@/assets/img/youxi.png") },
  { name: "篮球", value: 3, img: require("@/assets/img/lanqiu.png") },
  { name: "爬山", value: 4, img: require("@/assets/img/huwai.png") },
  { name: "聚会", value: 5, img: require("@/assets/img/dushu.png") },
  { name: "逛展", value: 6, img: require("@/assets/img/huwai.png") },
  { name: "宠物", value: 7 },
  { name: "探店", value: 8 },
  { name: "跑步", value: 9 },
];

// 圈子
export const ALLGROUPS = [
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
