import { ALLGROUPS, sexs, perSpends } from "@/constants/const";

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
            name: "1",
            value: "1",
          },
        ],
      },
      {
        name: "黄浦",
        value: "黄浦",
        submenu: [
          {
            name: "全部",
            value: "全部",
          },
          {
            name: "2",
            value: "2",
          },
        ],
      },
      {
        name: "徐汇",
        value: "徐汇",
        submenu: [
          {
            name: "全部",
            value: "全部",
          },
          {
            name: "3",
            value: "4",
          },
        ],
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
        name: "近两周",
        value: "近两周",
      },
      {
        name: "一个月内",
        value: "一个月内",
      },
      {
        name: "三个月内",
        value: "三个月内",
      },
    ],
  },
  {
    type: "hierarchy",
    name: "所有圈子",
    submenu: ALLGROUPS,
  },
  {
    name: "筛选",
    type: "filter",
    submenu: [
      {
        name: "活动人数",
        submenu: sexs,
      },
      {
        name: "人均消费",
        submenu: perSpends,
      },
      // {
      //   name: "性别",
      //   submenu: sexs,
      // },
      // {
      //   name: "参加情况",
      //   submenu: sexs,
      // },
    ],
  },
];
