export default [
  {
    type: "hierarchy",
    submenu: [
      {
        name: "热门商圈",
        value: "热门商圈",
        submenu: [
          {
            name: "全部商圈",
            value: "全部商圈",
          },
          {
            name: "燕岭/五山",
            value: "燕岭/五山",
          },
        ],
      },
      {
        name: "天河区",
        value: "天河区",
        submenu: [
          {
            name: "全部",
            value: "全部",
          },
          {
            name: "燕岭/五山",
            value: "燕岭/五山",
          },
        ],
      },
    ],
  },
  {
    // name:'所有活动',
    type: "hierarchy",
    submenu: [
      {
        name: "所有活动",
        value: "所有活动",
      },
      {
        name: "离我最近",
        value: "离我最近",
      },
      {
        name: "人均从高到低",
        value: "人均从高到低",
      },
      {
        name: "人均从低到高",
        value: "人均从低到高",
      },
    ],
  },

  {
    // name:'最近发布',
    type: "hierarchy",
    submenu: [
      {
        name: "最近发布",
        value: "最近发布",
      },
      {
        name: "离我最近",
        value: "离我最近",
      },
      {
        name: "人均从高到低",
        value: "人均从高到低",
      },
      {
        name: "人均从低到高",
        value: "人均从低到高",
      },
    ],
  },
  {
    // name:'所有圈子',
    type: "radio",
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
    // name:'筛选',
    type: "filter",
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
