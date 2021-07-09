export default [
  {
    type: "radio",
    name: "所有圈子",
    submenu: [
      {
        name: "所有圈子",
        submenu: [
          {
            name: "111",
            value: "111",
          },
          {
            name: "222",
            value: "222",
          },
          {
            name: "333",
            value: "333",
          },
        ],
      },
    ],
  },
  {
    type: "filter",
    name: "所有类型",
    submenu: [
      {
        name: "优惠",
        submenu: [
          {
            name: "满减活动",
            value: "满减活动",
          },
          {
            name: "打折优惠",
            value: "打折优惠",
          },
          {
            name: "会员专享",
            value: "会员专享",
          },
        ],
      },
      {
        name: "服务",
        submenu: [
          {
            name: "预定",
            value: "预定",
          },
          {
            name: "点餐",
            value: "点餐",
          },
          {
            name: "外卖",
            value: "外卖",
          },
        ],
      },
    ],
  },
];
