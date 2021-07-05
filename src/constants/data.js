// 数据格式,数据中只需要包含以下字段和数据格式,开发者可以添加字段,比如id等等,不影响组件显示,
// 组件的返回结果是有菜单数组下标形式返回,
// 如果传入数据中有value,也会返回value,开发者可根据返回的下标获取所选中的菜单
/*
[
	{
		"name":"",	//字符串类型 选填项 菜单名称,如不填,则取第一个子菜单的name值,filter和radio类型则将设置为"筛选"
		"type":""	//字符串类型 必填项 可取值 hierarchy/filter/radio  hierarchy单/多层级菜单(最多三级); filter筛选多选菜单; radio筛选单选菜单
		"submenu":[	//对象数组类型 必填项 子菜单数据
			{
				"name":"",	//字符串类型 必填项 菜单名称
				"value":"",	//字符串类型 选填项 自定义内容,比如id等等,如果填写了,confirm返回的结果中将返回对应选中的value,若菜单无value字段则返回null,filter类型此字段无效果
				"submenu":[	//对象数组类型 必填项 子菜单数据
					{
						"name":"",	//字符串类型 必填项 菜单名称
						"value":"",	//字符串类型 选填项 自定义内容,比如id等等,如果填写了,confirm返回的结果中将返回对应选中的value,若菜单无value字段则返回null
						"submenu":[	//对象数组类型 必填项 子菜单数据 filter类型无效 
							{
								"name":"",	//字符串类型 必填项 菜单名称 hierarchy类型层级最多到此
								"value":"",	//字符串类型 选填项 自定义内容,比如id等等,如果填写了,confirm返回的结果中将返回对应选中的value,若菜单无value字段则返回null
							}
						]
					}
				]
			}
		]
	}
]
*/

//0.0.4版本起 返回结果将有两部分组成:
/*
{
	index:[],	//旧版本的下标数组形式
	value:[]	//菜单中的valve,结构和下标结果数组一样,只是把下标替换成了value而已
}
*/
// 以下演示数据中,我故意把value设置成跟name一样,只是为了方便演示,使示例更加易懂,实际使用时候value应该是一个标识,给后台识别所用的.
// 数据较长，请仔细查看。
export default [
	{
		// name:'附近',
		"type": 'hierarchy',
		"submenu": [{
				"name": '附近',
				"value": "附近",
				"submenu": [

				]
			},
			{
				"name": '热门商圈',
				"value": "热门商圈",
				"submenu": [{
						"name": "全部商圈",
						"value": "全部商圈"
					},
					{
						"name": "燕岭/五山",
						"value": "燕岭/五山"
					},
					{
						"name": "天河城/体育中心",
						"value": "天河城/体育中心"
					},
					{
						"name": "石牌/龙口",
						"value": "石牌/龙口"
					},
					{
						"name": "天河北",
						"value": "天河北"
					},
					{
						"name": "珠江新城",
						"value": "珠江新城"
					},
					{
						"name": "时尚天河",
						"value": "时尚天河"
					},
					{
						"name": "高德置地",
						"value": "高德置地"
					},
					{
						"name": "跑马场",
						"value": "跑马场"
					},
					{
						"name": "天河公园",
						"value": "天河公园"
					},
					{
						"name": "嘉裕太阳城",
						"value": "嘉裕太阳城"
					},
					{
						"name": "五羊新城",
						"value": "五羊新城"
					},
					{
						"name": "北京路",
						"value": "北京路"
					},
					{
						"name": "上下九",
						"value": "上下九"
					},
					{
						"name": "万达广场",
						"value": "万达广场"
					}
				]
			},
			{
				"name": '天河区',
				"value": "天河区",
				"submenu": [{
						"name": "全部",
						"value": "全部"
					},
					{
						"name": "燕岭/五山",
						"value": "燕岭/五山"
					},
					{
						"name": "天河城/体育中心",
						"value": "天河城/体育中心"
					},
					{
						"name": "石牌/龙口",
						"value": "石牌/龙口"
					},
					{
						"name": "天河北",
						"value": "天河北"
					},
					{
						"name": "珠江新城",
						"value": "珠江新城"
					},
					{
						"name": "时尚天河",
						"value": "时尚天河"
					},
					{
						"name": "高德置地",
						"value": "高德置地"
					},
					{
						"name": "跑马场",
						"value": "跑马场"
					},
					{
						"name": "天河公园",
						"value": "天河公园"
					},
					{
						"name": "东圃",
						"value": "东圃"
					},
					{
						"name": "林和村",
						"value": "林和村"
					},
					{
						"name": "车陂",
						"value": "车陂"
					},
					{
						"name": "猎德社区",
						"value": "猎德社区"
					},
					{
						"name": "前进",
						"value": "前进"
					}
				]
			},
			{
				"name": '荔湾区',
				"value": "荔湾区",
				"submenu": [{
						"name": "全部",
						"value": "全部"
					},
					{
						"name": "西城都荟",
						"value": "西城都荟"
					},
					{
						"name": "多宝",
						"value": "多宝"
					},
					{
						"name": "陈家祠",
						"value": "陈家祠"
					},
					{
						"name": "华林",
						"value": "华林"
					},
					{
						"name": "西关",
						"value": "西关"
					},
					{
						"name": "花地湾",
						"value": "花地湾"
					},
					{
						"name": "金花",
						"value": "金花"
					},
					{
						"name": "康王路",
						"value": "康王路"
					},
					{
						"name": "上下九",
						"value": "上下九"
					}
				]
			},
			{
				"name": '越秀区',
				"value": "越秀区",
				"submenu": [{
						"name": "全部",
						"value": "全部"
					},
					{
						"name": "五羊新城",
						"value": "五羊新城"
					},
					{
						"name": "北京路",
						"value": "北京路"
					},
					{
						"name": "华乐",
						"value": "华乐"
					},
					{
						"name": "西门口",
						"value": "西门口"
					},
					{
						"name": "建设",
						"value": "建设"
					},
					{
						"name": "海珠广场",
						"value": "海珠广场"
					},
					{
						"name": "东山口",
						"value": "东山口"
					},
					{
						"name": "越秀公园",
						"value": "越秀公园"
					},
					{
						"name": "淘金",
						"value": "淘金"
					},
					{
						"name": "环市中",
						"value": "环市中"
					},
					{
						"name": "东风东",
						"value": "东风东"
					},
					{
						"name": "解放北",
						"value": "解放北"
					},
					{
						"name": "东湖",
						"value": "东湖"
					}
				]
			}

		]
	},
	{
		// name:'智能排序',
		"type": 'hierarchy',
		"submenu": [{
				"name": "智能排序",
				"value": "智能排序"
			},
			{
				"name": "离我最近",
				"value": "离我最近"
			},
			{
				"name": "人均从高到低",
				"value": "人均从高到低"
			},
			{
				"name": "人均从低到高",
				"value": "人均从低到高"
			}
		]
	},
	{
		// name:'筛选',
		"type": 'filter',
		"submenu": [{
				"name": "优惠",
				"submenu": [{
						"name": "满减活动",
						"value": "满减活动"
					},
					{
						"name": "打折优惠",
						"value": "打折优惠"
					},
					{
						"name": "会员专享",
						"value": "会员专享"
					}
				]
			},
			{
				"name": "服务",
				"submenu": [{
						"name": "预定",
						"value": "预定"
					},
					{
						"name": "点餐",
						"value": "点餐"
					},
					{
						"name": "外卖",
						"value": "外卖"
					},
					{
						"name": "WIFI",
						"value": "WIFI"
					},
					{
						"name": "停车位",
						"value": "停车位"
					},
					{
						"name": "无烟区",
						"value": "无烟区"
					},
					{
						"name": "包厢",
						"value": "包厢"
					},
					{
						"name": "营业中",
						"value": "营业中"
					}
				]
			},
			{
				"name": "价格",
				"submenu": [{
						"name": "50以下",
						"value": "50以下"
					},
					{
						"name": "50-100",
						"value": "50-100"
					},
					{
						"name": "100-300",
						"value": "100-300"
					},
					{
						"name": "300以上",
						"value": "300以上"
					}
				]
			}
		]
	},

]

