 const menuContents = [
	{
		id: "menu01",
		title: "技术",
		active: false,
		list: 
			[
				{text: "Java", href: "https://www.lagou.com/zhaopin/Java/"}, 
				{text: "PHP", href: "https://www.lagou.com/zhaopin/PHP/"},
				{text: "C++", href: "https://www.lagou.com/zhaopin/C++/"},
				{text: "区块链", href: "https://www.lagou.com/zhaopin/qukuailian/"}
			],
		submenu: 
			[
				{
					title: "后端开发",
					list: 
					[
						{text: "Java", href: "https://www.lagou.com/zhaopin/Java/"}, 
						{text: "PHP", href: "https://www.lagou.com/zhaopin/PHP/"},
						{text: "C++", href: "https://www.lagou.com/zhaopin/C++/"},
						{text: "区块链", href: "https://www.lagou.com/zhaopin/qukuailian/"},
						{text: "数据挖掘", href: "https://www.lagou.com/zhaopin/shujuwajue/"},
						{text: "搜索算法", href: "https://www.lagou.com/zhaopin/sousuosuanfa/"},
						{text: "精准推荐", href: "https://www.lagou.com/zhaopin/jingzhuntuijian/"},
						{text: "全栈工程师", href: "https://www.lagou.com/zhaopin/quanzhangongchengshi/"},
						{text: ".NET", href: "https://www.lagou.com/zhaopin/.NET/"},
						{text: "Hadoop", href: "https://www.lagou.com/zhaopin/Hadoop/"},
						{text: "Python", href: "https://www.lagou.com/zhaopin/Python/"},
						{text: "Delphi", href: "https://www.lagou.com/zhaopin/Delphi/"},
						{text: "VB", href: "https://www.lagou.com/zhaopin/VB/"},
						{text: "Perl", href: "https://www.lagou.com/zhaopin/Perl/"},
						{text: "Ruby", href: "https://www.lagou.com/zhaopin/Ruby/"},
						{text: "Node.js", href: "https://www.lagou.com/zhaopin/Node.js/"},
					]
				},
				{
					title: "移动开发",
					list: 
					[
						{text: "HTML5", href: "https://www.lagou.com/zhaopin/HTML5/"}, 
						{text: "Android", href: "https://www.lagou.com/zhaopin/Android/"},
						{text: "IOS", href: "https://www.lagou.com/zhaopin/iOS/"},
						{text: "WP", href: "https://www.lagou.com/zhaopin/WP/"},
						{text: "移动开发及其它", href: "https://www.lagou.com/zhaopin/yidongkaifaqita/"},
					]
				},
				{
					title: "前端开发",
					list: 
					[
						{text: "WEB前端", href: "https://www.lagou.com/zhaopin/webqianduan/"}, 
						{text: "Flash", href: "https://www.lagou.com/zhaopin/Flash/"},
						{text: "avaScript", href: "https://www.lagou.com/zhaopin/JavaScript/"},
						{text: "U3D", href: "https://www.lagou.com/zhaopin/U3D/"},
						{text: "COCOS2D-X", href: "https://www.lagou.com/zhaopin/COCOS2D-X/"},
					]
				}
			]
	},
	{
		id: "menu02",
		title: "产品",
		active: false,
		list: 
			[
				{text: "产品总监", href: "https://www.lagou.com/zhaopin/chanpinzongjian/"},
				{text: "产品经理", href: "https://www.lagou.com/zhaopin/chanpinjingli1/"}
			],
		submenu: 
			[
				{
					title: "产品经理",
					list: 
					[
						{text: "产品经理", href: "https://www.lagou.com/zhaopin/chanpinjingli1/"}, 
						{text: "网页产品经理", href: "https://www.lagou.com/zhaopin/wangyechanpinjingli/"},
						{text: "移动产品经理", href: "https://www.lagou.com/zhaopin/yidongchanpinjingli/"},
						{text: "产品助理", href: "https://www.lagou.com/zhaopin/chanpinzhuli/"},
						{text: "数据产品经理", href: "https://www.lagou.com/zhaopin/shujuchanpinjingli/"},
						{text: "电商产品经理", href: "https://www.lagou.com/zhaopin/dianshangchanpinjingli/"},
						{text: "游戏策划", href: "https://www.lagou.com/zhaopin/youxicehua/"},
						{text: "产品实习生", href: "https://www.lagou.com/zhaopin/chanpinshixisheng/"},
					]
				},
				{
					title: "产品设计师",
					list: 
					[
						{text: "网页产品设计师", href: "https://www.lagou.com/zhaopin/wangyechanpinshejishi/"}, 
						{text: "无线产品设计师", href: "https://www.lagou.com/zhaopin/wuxianchanpinshejishi/"},
					]
				},
				{
					title: "高端职位",
					list: 
					[
						{text: "产品部经理", href: "https://www.lagou.com/zhaopin/chanpinbujingli/"}, 
						{text: "产品总监", href: "https://www.lagou.com/zhaopin/Flash/"},
						{text: "游戏制作人", href: "https://www.lagou.com/zhaopin/youxizhizuoren/"},
					]
				}
			]
	},
	{
		id: "menu03",
		title: "设计",
		active: false,
		list: 
			[
				{text: "UI设计师", href: "https://www.lagou.com/zhaopin/UIshejishi/"},
				{text: "交互设计", href: "https://www.lagou.com/zhaopin/jiaohusheji/"}, 
				{text: "网页设计师", href: "https://www.lagou.com/zhaopin/wangyeshejishi/"}
		 	],
	 	submenu: 
		 	[
				{
					title: "视觉设计",
					list: 
					[
						{text: "视觉设计师", href: "https://www.lagou.com/zhaopin/shijueshejishi/"}, 
						{text: "网页设计师", href: "https://www.lagou.com/zhaopin/wangyeshejishi/"},
						{text: "Flash设计师", href: "https://www.lagou.com/zhaopin/Flashshejishi/"},
						{text: "APP设计师", href: "https://www.lagou.com/zhaopin/APPshejishi/"},
						{text: "UI设计师", href: "https://www.lagou.com/zhaopin/UIshejishi/"},
						{text: "美术设计师（2D/3D）", href: "https://www.lagou.com/zhaopin/meishushejishi%EF%BC%882D3D%EF%BC%89/"},
						{text: "广告设计师", href: "https://www.lagou.com/zhaopin/guanggaoshejishi/"},
						{text: "原画师", href: "https://www.lagou.com/zhaopin/yuanhuashi/"},
					]
				},
				{
					title: "交互设计",
					list: 
					[
						{text: "交互设计师", href: "https://www.lagou.com/zhaopin/jiaohushejishi1/"}, 
						{text: "无线交互设计师", href: "https://www.lagou.com/zhaopin/wuxianjiaohushejishi/"},
						{text: "网页交互设计师", href: "https://www.lagou.com/zhaopin/wangyejiaohushejishi/"},
						{text: "硬件交互设计师", href: "https://www.lagou.com/zhaopin/yingjianjiaohushejishi/"},
					]
				},
				{
					title: "用户研究",
					list: 
					[
						{text: "数据分析师", href: "https://www.lagou.com/zhaopin/shujufenxishi/"}, 
						{text: "用户研究员", href: "https://www.lagou.com/zhaopin/yonghuyanjiuyuan/"},
						{text: "游戏数值策划", href: "https://www.lagou.com/zhaopin/youxishuzhicehua/"},
					]
				}
			]
	},
	{
		id: "menu04",
		title: "运营",
		active: false,
		list: 
			[
				{text: "新媒体运营", href: "https://www.lagou.com/zhaopin/xinmeitiyunying/"},
				{text: "编辑", href: "https://www.lagou.com/zhaopin/bianji/"}, 
				{text: "数据运营", href: "https://www.lagou.com/zhaopin/shujuyunying/"}
		 	],
	 	submenu: 
		 	[
				{
					title: "运营",
					list: 
					[
						{text: "用户运营", href: "https://www.lagou.com/zhaopin/yonghuyunying/"}, 
						{text: "产品运营", href: "https://www.lagou.com/zhaopin/chanpinyunying/"},
						{text: "数据运营", href: "https://www.lagou.com/zhaopin/shujuyunying/"},
						{text: "内容运营", href: "https://www.lagou.com/zhaopin/neirongyunying/"},
						{text: "活动运营", href: "https://www.lagou.com/zhaopin/huodongyunying/"},
						{text: "商家运营", href: "https://www.lagou.com/zhaopin/shangjiayunying/"},
						{text: "品类运营", href: "https://www.lagou.com/zhaopin/pinleiyunying/"},
						{text: "游戏运营", href: "https://www.lagou.com/zhaopin/youxiyunying/"},
						{text: "网络推广", href: "https://www.lagou.com/zhaopin/wangluotuiguang/"},
						{text: "新媒体运营", href: "https://www.lagou.com/zhaopin/xinmeitiyunying/"},
					]
				},
				{
					title: "编辑",
					list: 
					[
						{text: "副编辑", href: "https://www.lagou.com/zhaopin/fuzhubian/"}, 
						{text: "内容编辑", href: "https://www.lagou.com/zhaopin/neirongbianji/"},
						{text: "文案策划", href: "https://www.lagou.com/zhaopin/wenancehua/"},
						{text: "记者", href: "https://www.lagou.com/zhaopin/jizhe/"},
					]
				},
				{
					title: "客服",
					list: 
					[
						{text: "售前咨询", href: "https://www.lagou.com/zhaopin/shouqianzixun/"}, 
						{text: "售后客服", href: "https://www.lagou.com/zhaopin/shouhoukefu/"},
						{text: "淘宝客服", href: "https://www.lagou.com/zhaopin/taobaokefu/"},
						{text: "客服经理", href: "https://www.lagou.com/zhaopin/kefujingli/"},
					]
				}
			]
		},
	{
		id: "menu05",
		title: "市场",
		active: false,
		list: 
			[
			    {text: "市场营销", href: "https://www.lagou.com/zhaopin/shichangshichangyingxiao1/"},
			    {text: "市场推广", href: "https://www.lagou.com/zhaopin/shichangtuiguang1/"},
			    {text: "市场策划", href: "https://www.lagou.com/zhaopin/shichangcehua1/"}
			],
	 	submenu: 
		 	[
				{
					title: "市场/营销",
					list: 
					[
						{text: "市场营销", href: "https://www.lagou.com/zhaopin/shichangshichangyingxiao1/"}, 
						{text: "市场策划", href: "https://www.lagou.com/zhaopin/shichangcehua1/"},
						{text: "市场顾问", href: "https://www.lagou.com/zhaopin/shichangguwen1/"},
						{text: "市场渠道", href: "https://www.lagou.com/zhaopin/shangwuqudao2/"},
						{text: "商业数据分析", href: "https://www.lagou.com/zhaopin/shangyeshjufenxi/"},
						{text: "活动策划", href: "https://www.lagou.com/zhaopin/huodongcehua1/"},
						{text: "网络营销", href: "https://www.lagou.com/zhaopin/wangluoyingxiao1/"},
						{text: "海外市场", href: "https://www.lagou.com/zhaopin/haiwaishichang1/"},
						{text: "商务专员", href: "https://www.lagou.com/zhaopin/shangwuzhuanyuan/"},
					]
				},
				{
					title: "媒介/公关",
					list: 
					[
						{text: "政府关系", href: "https://www.lagou.com/zhaopin/zhengfuguanxi1/"}, 
						{text: "品牌公关", href: "https://www.lagou.com/zhaopin/pinpaigongguan1/"},
						{text: "广告协调", href: "https://www.lagou.com/zhaopin/guanggaoxietiao/"},
						{text: "媒介投放", href: "https://www.lagou.com/zhaopin/meijietoufang/"},
						{text: "媒介合作", href: "https://www.lagou.com/zhaopin/meijiehezuo/"},
					]
				},
				{
					title: "品牌/广告",
					list: 
					[
						{text: "广告创意", href: "https://www.lagou.com/zhaopin/guanggaochuangyi/"}, 
						{text: "广告制作", href: "https://www.lagou.com/zhaopin/guanggaozhizuo/"},
						{text: "广告文案", href: "https://www.lagou.com/zhaopin/guanggaowenan/"},
						{text: "广告投放", href: "https://www.lagou.com/zhaopin/guanggaotoufang/"},
						{text: "广告定价", href: "https://www.lagou.com/zhaopin/guanggaodingwei/"},
						{text: "广告专员", href: "https://www.lagou.com/zhaopin/guanggaozhuanyuan/"},
						{text: "品牌策划", href: "https://www.lagou.com/zhaopin/pinpaicehua/"},
						{text: "品牌合作", href: "https://www.lagou.com/zhaopin/pinpaihezuo/"},
						{text: "美术指导", href: "https://www.lagou.com/zhaopin/meishuzhidao/"},
					]
				}
			]
	},
	{
		id: "menu06",
		title: "销售",
		active: false,
		list: 
			[
			    {text: "销售专员", href: "https://www.lagou.com/zhaopin/xiaoshouzhuanyuan1/"},
			    {text: "销售经理", href: "https://www.lagou.com/zhaopin/xiaoshoujingli1/"},
			    {text: "销售总监", href: "https://www.lagou.com/zhaopin/xiaoshouzongjian1/"}
		  	],
	 	submenu: 
		 	[
				{
					title: "销售",
					list: 
					[
						{text: "销售专员", href: "https://www.lagou.com/zhaopin/xiaoshouzhuanyuan1/"}, 
						{text: "销售顾问", href: "https://www.lagou.com/zhaopin/xiaoshouguwen1/"},
						{text: "销售经理", href: "https://www.lagou.com/zhaopin/xiaoshoujingli1/"},
						{text: "客户代表", href: "https://www.lagou.com/zhaopin/xiaoshoukehudaibiao/"},
						{text: "客户经理", href: "https://www.lagou.com/zhaopin/kehujingli/"},
						{text: "商务拓展", href: "https://www.lagou.com/zhaopin/shangwutuozhan/"},
						{text: "渠道销售", href: "https://www.lagou.com/zhaopin/xiaoshouqudaoxiaoshou/"},
						{text: "代理商销售", href: "https://www.lagou.com/zhaopin/xiaoshoudailishangxiaoshou/"},
						{text: "电话销售", href: "https://www.lagou.com/zhaopin/xiaoshoudianhuaxiaoshou/"},
						{text: "广告销售", href: "https://www.lagou.com/zhaopin/guanggaoxiaoshou/"},
					]
				},
				{
					title: "销售管理",
					list: 
					[
						{text: "销售总监", href: "https://www.lagou.com/zhaopin/xiaoshouzongjian1/"}, 
						{text: "商务总监", href: "https://www.lagou.com/zhaopin/xiaoshoushangwuzongjian/"},
						{text: "区域总监", href: "https://www.lagou.com/zhaopin/quyuzongjian/"},
						{text: "城市经理", href: "https://www.lagou.com/zhaopin/chengshijingli/"},
						{text: "团队经理", href: "https://www.lagou.com/zhaopin/tuanduijingli/"},
						{text: "销售VP", href: "https://www.lagou.com/zhaopin/xiaoshouvp/"},
						{text: "商务主管", href: "https://www.lagou.com/zhaopin/shangwuzhuguan/"},
						{text: "其他销售管理岗位", href: "https://www.lagou.com/zhaopin/qitaxiaoshouguanligangwei/"},
					]
				}
			]
	},
	{
		id: "menu07",
		title: "职能",
		active: false,
		list: 
			[
				{text: "HR", href: "https://www.lagou.com/zhaopin/HR/"},
				{text: "行政", href: "https://www.lagou.com/zhaopin/xingzheng1/"},
				{text: "财务", href: "https://www.lagou.com/zhaopin/caiwu1/"},
				{text: "审计", href: "https://www.lagou.com/zhaopin/shenji/"}
  		],
	 	submenu: 
		 	[
				{
					title: "职能",
					list: 
					[
						{text: "人力资源", href: "https://www.lagou.com/zhaopin/renliziyuan1/"}, 
						{text: "招聘", href: "https://www.lagou.com/zhaopin/zhaopin/"},
						{text: "HRBP", href: "https://www.lagou.com/zhaopin/HRBP/"},
						{text: "培训经理", href: "https://www.lagou.com/zhaopin/peixunjingli/"},
						{text: "薪资福利经理", href: "https://www.lagou.com/zhaopin/xinzifulijingli/"},
						{text: "绩效考核经理", href: "https://www.lagou.com/zhaopin/jixiaokaohejingli/"},
					]
				},
				{
					title: "行政",
					list: 
					[
						{text: "助理", href: "https://www.lagou.com/zhaopin/zhuli/"}, 
						{text: "前台", href: "https://www.lagou.com/zhaopin/qiantai/"},
						{text: "行政", href: "https://www.lagou.com/zhaopin/xingzheng1/"},
						{text: "总助", href: "https://www.lagou.com/zhaopin/zongzhu/"},
						{text: "文秘", href: "https://www.lagou.com/zhaopin/wenmi/"},
					]
				},
				{
					title: "财务",
					list: 
					[
						{text: "会计", href: "https://www.lagou.com/zhaopin/kuaiji/"}, 
						{text: "出纳", href: "https://www.lagou.com/zhaopin/chuna/"},
						{text: "财务", href: "https://www.lagou.com/zhaopin/caiwu1/"},
						{text: "结算", href: "https://www.lagou.com/zhaopin/jiesuan/"},
						{text: "税务", href: "https://www.lagou.com/zhaopin/shuiwu/"},
						{text: "审计", href: "https://www.lagou.com/zhaopin/shenji/"},
					]
				}
			]
	},
	{
		id: "menu08",
		title: "游戏",
		active: false,
		list: 
			[
				{text: "小游戏开发", href: "https://www.lagou.com/zhaopin/xiaoyouxikaifa/"},
				{text: "U3D", href: "https://www.lagou.com/zhaopin/U3D/"},
				{text: "游戏策划", href: "https://www.lagou.com/zhaopin/youxicehua/"}
			],
	 	submenu: 
		 	[
				{
					title: "技术",
					list: 
					[
						{text: "H5游戏开发", href: "https://www.lagou.com/zhaopin/H5youxikaifa/"}, 
						{text: "小游戏开发", href: "https://www.lagou.com/zhaopin/xiaoyouxikaifa/"},
						{text: "游戏后端开发", href: "https://www.lagou.com/zhaopin/youxihouduankaifa/"},
						{text: "C++游戏开发", href: "https://www.lagou.com/zhaopin/C%2B%2Byouxikaifa/"},
						{text: "Flash", href: "https://www.lagou.com/zhaopin/youxiflash/"},
						{text: "游戏测试", href: "https://www.lagou.com/zhaopin/youxiyouxiceshi/"},
					]
				},
				{
					title: "产品策划",
					list: 
					[
						{text: "游戏制作人", href: "https://www.lagou.com/zhaopin/youxizhipianren/"}, 
						{text: "游戏产品经理", href: "https://www.lagou.com/zhaopin/youxichanpinjingli/"},
						{text: "游戏项目经理", href: "https://www.lagou.com/zhaopin/youxixiangmujingli/"},
						{text: "游戏策划", href: "https://www.lagou.com/zhaopin/youxiyouxicehua/"},
						{text: "剧情设计", href: "https://www.lagou.com/zhaopin/juqingsheji/"},
					]
				}
			]
		}
];

export default menuContents;