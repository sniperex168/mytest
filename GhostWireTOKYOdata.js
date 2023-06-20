	//初始化陣列資料markers
    var markers = [	//markid應為獨特，否則會亂掉，建議英文+數字來表示
		//遺物
		{type:"RELIC",markid:"RELIC001",coords:{x: 1408, y: 6626},name: "<h1>小豆洗根付</h1>",opa:"1",chk:"0"},	
		{type:"RELIC",markid:"RELIC002",coords:{x: 1663, y: 6573},name: "<h1>手裏劍</h1>",opa:"1",chk:"0"},	
		{type:"RELIC",markid:"RELIC003",coords:{x: 2473, y: 7145},name: "<h1>萬寶槌</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC004",coords:{x: 3565, y: 7050},name: "<h1>彈珠</h1>",opa:"1",chk:"0"},		
		{type:"RELIC",markid:"RELIC005",coords:{x: 3916, y: 6920},name: "<h1>手裏劍</h1>",opa:"1",chk:"0"},		
		{type:"RELIC",markid:"RELIC006",coords:{x: 4371, y: 7006},name: "<h1>彌生陶器</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC007",coords:{x: 1901, y: 6004},name: "<h1>休旅車模型</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC008",coords:{x: 2065, y: 6027},name: "<h1>墨西哥鈍口螈模型</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC009",coords:{x: 2776, y: 5981},name: "<h1>直江兼續的兜</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC010",coords:{x: 3125, y: 6238},name: "<h1>稻草人偶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC011",coords:{x: 3607, y: 6385},name: "<h1>銀版攝影用照相機</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC012",coords:{x: 4690, y: 6430},name: "<h1>河童根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC013",coords:{x: 4957, y: 6417},name: "<h1>繩紋陶器</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC014",coords:{x: 1025, y: 5429},name: "<h1>手裏劍</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC015",coords:{x: 1594, y: 5294},name: "<h1>手裏劍</h1>",opa:"1",chk:"0"},	
		{type:"RELIC",markid:"RELIC016",coords:{x: 1857, y: 5418},name: "<h1>錫製金魚</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC017",coords:{x: 2201, y: 5292},name: "<h1>天羽羽斬（複製品）</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC018",coords:{x: 2408, y: 5692},name: "<h1>熊木雕</h1>",opa:"1",chk:"0"},		
		{type:"RELIC",markid:"RELIC019",coords:{x: 2724, y: 5280},name: "<h1>免費附贈手提包的雜誌</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC020",coords:{x: 4046, y: 5230},name: "<h1>烏鴉撥製標本</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC021",coords:{x: 4019, y: 6075},name: "<h1>髮簪</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC022",coords:{x: 4124, y: 6024},name: "<h1>休旅車模型</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC023",coords:{x: 4588, y: 5648},name: "<h1>座敷童子的根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC024",coords:{x: 5108, y: 5756},name: "<h1>備前燒陶器</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC025",coords:{x: 4566, y: 4997},name: "<h1>木靈根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC026",coords:{x: 4856, y: 5247},name: "<h1>木魚</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC027",coords:{x: 1425, y: 5102},name: "<h1>人形蘿蔔</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC028",coords:{x: 1547, y: 4484},name: "<h1>東京鐵塔模型</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC029",coords:{x: 900, y: 4373},name: "<h1>人形蘿蔔</h1>",opa:"1",chk:"0"},		
		{type:"RELIC",markid:"RELIC030",coords:{x: 875, y: 3913},name: "<h1>三味線</h1>",opa:"1",chk:"0"},		
		{type:"RELIC",markid:"RELIC031",coords:{x: 428, y: 3733},name: "<h1>法螺貝</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC032",coords:{x: 615, y: 3654},name: "<h1>小木偶</h1>",opa:"1",chk:"0"},		
		{type:"RELIC",markid:"RELIC033",coords:{x: 1224, y: 4090},name: "<h1>風鈴</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC034",coords:{x: 2449, y: 5065},name: "<h1>大判</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC035",coords:{x: 3548, y: 4992},name: "<h1>稻草人偶</h1>",opa:"1",chk:"0"},		
		{type:"RELIC",markid:"RELIC036",coords:{x: 2058, y: 4900},name: "<h1>手裏劍</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC037",coords:{x: 2636, y: 4593},name: "<h1>三猿像</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC038",coords:{x: 2819, y: 4379},name: "<h1>鐮鼬根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC039",coords:{x: 3133, y: 4493},name: "<h1>加拉機</h1>狩獵塗壁後進入",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC040",coords:{x: 3149, y: 4493},name: "<h1>唐傘小僧根付</h1>狩獵塗壁後進入",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC041",coords:{x: 2234, y: 4093},name: "<h1>力士根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC042",coords:{x: 1833, y: 3842},name: "<h1>鐵瓶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC043",coords:{x: 2553, y: 3802},name: "<h1>垢嘗根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC044",coords:{x: 2659, y: 3767},name: "<h1>玳瑁梳子</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC045",coords:{x: 2530, y: 3722},name: "<h1>「令和」裱字畫</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC046",coords:{x: 1826, y: 3470},name: "<h1>獅爺像</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC047",coords:{x: 1846, y: 3470},name: "<h1>紙鶴</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC048",coords:{x: 1725, y: 3404},name: "<h1>木芥子</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC049",coords:{x: 1666, y: 3346},name: "<h1>人形蘿蔔</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC050",coords:{x: 2675, y: 3030},name: "<h1>黑框眼鏡</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC051",coords:{x: 2007, y: 2848},name: "<h1>泡沫時代的摺扇</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC052",coords:{x: 1489, y: 2888},name: "<h1>神樂鈴</h1>秋澤神社內",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC053",coords:{x: 1166, y: 2866},name: "<h1>被詛咒的錄影帶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC054",coords:{x: 1585, y: 2628},name: "<h1>歌麿的浮世繪</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC055",coords:{x: 1281, y: 2430},name: "<h1>達摩</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC056",coords:{x: 1190, y: 2436},name: "<h1>風箏</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC057",coords:{x: 1200, y: 2395},name: "<h1>獅子頭</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC058",coords:{x:  918, y: 2147},name: "<h1>被詛咒的錄影帶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC059",coords:{x: 1799, y: 2142},name: "<h1>風箏</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC060",coords:{x: 1439, y: 1887},name: "<h1>超跑模型</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC061",coords:{x: 1519, y: 1627},name: "<h1>寬永通寶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC062",coords:{x: 1235, y: 1251},name: "<h1>喧嘩煙管</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC063",coords:{x: 1642, y: 1253},name: "<h1>泡泡襪</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC064",coords:{x: 1639, y: 1117},name: "<h1>鯱鉾像</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC065",coords:{x: 1823, y: 1442},name: "<h1>黃金茶碗</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC066",coords:{x: 2087, y: 1615},name: "<h1>膠捲相機</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC067",coords:{x: 1789, y: 1714},name: "<h1>劍玉</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC068",coords:{x: 2023, y: 2305},name: "<h1>雙背帶書包</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC069",coords:{x: 2384, y: 2038},name: "<h1>風箏</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC070",coords:{x: 2488, y: 1983},name: "<h1>遮光器土偶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC071",coords:{x: 2062, y:  818},name: "<h1>花子同學的刀</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC072",coords:{x: 2128, y:  906},name: "<h1>鬼瓦</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC073",coords:{x: 2410, y:  683},name: "<h1>將棋吊飾</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC074",coords:{x: 2660, y: 1191},name: "<h1>寫樂的浮世繪</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC075",coords:{x: 2466, y: 1510},name: "<h1>褶傘蜥模型</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC076",coords:{x: 2683, y: 1510},name: "<h1>日本人偶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC077",coords:{x: 2787, y: 1355},name: "<h1>風箏</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC078",coords:{x: 5088, y: 4693},name: "<h1>天狗根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC079",coords:{x: 5155, y: 4537},name: "<h1>毬藻</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC080",coords:{x: 5143, y: 4228},name: "<h1>槌之子</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC081",coords:{x: 4619, y: 4146},name: "<h1>紅鞋</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC082",coords:{x: 4639, y: 4146},name: "<h1>紅牛</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC083",coords:{x: 4342, y: 4558},name: "<h1>塗壁根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC084",coords:{x: 4271, y: 4119},name: "<h1>埴輪</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC085",coords:{x: 3630, y: 4286},name: "<h1>銅鏡</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC086",coords:{x: 2946, y: 3866},name: "<h1>羽子板</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC087",coords:{x: 4878, y: 3883},name: "<h1>「對貝殼」中的貝殼</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC088",coords:{x: 5268, y: 3918},name: "<h1>日本刀</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC089",coords:{x: 5074, y: 3288},name: "<h1>姑獲鳥根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC090",coords:{x: 4554, y: 3484},name: "<h1>十手</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC091",coords:{x: 4673, y: 2952},name: "<h1>香爐</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC092",coords:{x: 5337, y: 2772},name: "<h1>鵺根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC093",coords:{x: 4741, y: 2415},name: "<h1>花札</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC094",coords:{x: 4578, y: 2374},name: "<h1>恐怖的絨毛玩偶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC095",coords:{x: 4904, y: 2078},name: "<h1>蚊香豬</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC096",coords:{x: 5002, y: 1927},name: "<h1>人面犬木乃伊</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC097",coords:{x: 4957, y: 1215},name: "<h1>餐廳料理模型</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC098",coords:{x: 3350, y: 3185},name: "<h1>狸像</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC099",coords:{x: 3942, y: 3190},name: "<h1>琵琶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC100",coords:{x: 4200, y: 3504},name: "<h1>轆轤首根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC101",coords:{x: 2871, y: 2626},name: "<h1>日本獨角仙</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC102",coords:{x: 3207, y: 2723},name: "<h1>便攜式錄音帶撥放器</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC103",coords:{x: 3625, y: 2604},name: "<h1>北齋的浮世繪</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC104",coords:{x: 3648, y: 2027},name: "<h1>天叢雲劍（複製品）</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC105",coords:{x: 3321, y: 1979},name: "<h1>幽靈畫</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC106",coords:{x: 3008, y: 1887},name: "<h1>銅澤</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC107",coords:{x: 2931, y: 1720},name: "<h1>花子同學的刀</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC108",coords:{x: 2654, y: 1729},name: "<h1>超級真嗣貼紙</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC109",coords:{x: 2870, y:  572},name: "<h1>鬼根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC110",coords:{x: 3478, y:  482},name: "<h1>手鞠</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC111",coords:{x: 3750, y:  536},name: "<h1>休旅車模型</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC112",coords:{x: 3594, y:  935},name: "<h1>古伊萬里的皿</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC113",coords:{x: 3376, y: 1365},name: "<h1>十露盤</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC114",coords:{x: 3609, y: 1592},name: "<h1>一反木綿根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC115",coords:{x: 4050, y: 1599},name: "<h1>靈異照片</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC116",coords:{x: 4290, y: 1474},name: "<h1>懷錶</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC117",coords:{x: 4338, y: 2128},name: "<h1>印籠</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC118",coords:{x: 2689, y:  966},name: "<h1>扇子</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC119",coords:{x: 6371, y: 1046},name: "<h1>招財貓</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC120",coords:{x: 6361, y: 1283},name: "<h1>提燈妖根付</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC121",coords:{x: 6196, y: 1359},name: "<h1>花子同學的刀</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC122",coords:{x: 6287, y: 1958},name: "<h1>犬神木乃伊</h1>",opa:"1",chk:"0"},
		{type:"RELIC",markid:"RELIC123",coords:{x: 6000, y: 2546},name: "<h1>瓢簞</h1>",opa:"1",chk:"0"},
		//SHRINE神社
		{type:"SHRINE",markid:"SHRINE001",coords:{x: 1192, y: 6466},name: "<h1>河戶大樓屋頂上的鳥居</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE002",coords:{x: 1381, y: 6231},name: "<h1>波原神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE003",coords:{x: 1791, y: 6710},name: "<h1>初池神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE004",coords:{x: 2985, y: 5862},name: "<h1>霧之丘神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE005",coords:{x: 3503, y: 6251},name: "<h1>千島神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE006",coords:{x: 1466, y: 5410},name: "<h1>豐井神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE007",coords:{x: 2210, y: 5287},name: "<h1>比谷神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE008",coords:{x: 3391, y: 5440},name: "<h1>八卷神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE009",coords:{x: 3869, y: 5699},name: "<h1>野戶神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE010",coords:{x: 4388, y: 5740},name: "<h1>平宿大樓屋頂上的鳥居</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE011",coords:{x: 4663, y: 5810},name: "<h1>白月神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE012",coords:{x: 4171, y: 5291},name: "<h1>才濱大樓屋頂上的鳥居</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE013",coords:{x: 4416, y: 5277},name: "<h1>桃金大樓屋頂上的鳥居</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE014",coords:{x: 4347, y: 4930},name: "<h1>龍居神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE015",coords:{x:  645, y: 3768},name: "<h1>廣川神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE016",coords:{x: 1162, y: 4406},name: "<h1>松見神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE017",coords:{x: 2649, y: 4386},name: "<h1>歌川商店區鳥居</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE018",coords:{x: 4281, y: 4115},name: "<h1>隱天神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE019",coords:{x: 5036, y: 4470},name: "<h1>河童之池的鳥居</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE020",coords:{x: 3643, y: 3628},name: "<h1>三久保神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE021",coords:{x: 1483, y: 2903},name: "<h1>秋澤神社</h1>第二章「檢查鳥居」時主線解鎖",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE022",coords:{x: 1705, y: 2085},name: "<h1>並田神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE023",coords:{x: 2429, y: 2761},name: "<h1>森手神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE024",coords:{x: 2606, y: 2079},name: "<h1>谷森神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE025",coords:{x: 3359, y: 1952},name: "<h1>久櫻神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE026",coords:{x: 4572, y: 3110},name: "<h1>坂野神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE027",coords:{x: 5168, y: 2824},name: "<h1>下草神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE028",coords:{x: 2095, y: 1462},name: "<h1>代山神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE029",coords:{x: 3378, y: 1076},name: "<h1>亞木津神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE030",coords:{x: 5014, y: 1933},name: "<h1>上尾神社</h1>",opa:"1",chk:"0"},
		{type:"SHRINE",markid:"SHRINE030",coords:{x: 4428, y: 2246},name: "<h1>御嶽不動產大樓屋頂的鳥居(未確定)</h1>第四章?黑塔時於主線解鎖<p>此鳥居解鎖後沒有在遊戲中地圖上顯示</p>",opa:"1",chk:"0"},
		//JIZO地藏像
		{type:"JIZO",markid:"JIZO001",coords:{x: 1416, y: 5935},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO002",coords:{x: 1806, y: 6032},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO003",coords:{x: 2235, y: 6473},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO004",coords:{x: 2905, y: 7182},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO005",coords:{x: 2760, y: 6285},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO006",coords:{x: 2365, y: 5684},name: "<h1>火之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO007",coords:{x: 4104, y: 7036},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO008",coords:{x: 4499, y: 6671},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO009",coords:{x: 4809, y: 6015},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO010",coords:{x: 1232, y: 5114},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO011",coords:{x: 2186, y: 5064},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO012",coords:{x: 2860, y: 4975},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO013",coords:{x: 3298, y: 5436},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO014",coords:{x: 3657, y: 4997},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO015",coords:{x: 4205, y: 5471},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO016",coords:{x: 4640, y: 4957},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO017",coords:{x: 5084, y: 5406},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO018",coords:{x: 976, y: 4273},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO019",coords:{x: 1527, y: 3772},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO020",coords:{x: 2029, y: 3578},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO021",coords:{x: 2394, y: 3805},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO022",coords:{x: 2820, y: 3952},name: "<h1>火之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO023",coords:{x: 3173, y: 3403},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO024",coords:{x: 3416, y: 3500},name: "<h1>火之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO025",coords:{x: 3579, y: 3080},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO026",coords:{x: 4034, y: 3254},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO027",coords:{x: 4712, y: 3427},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO028",coords:{x: 5112, y: 3332},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO029",coords:{x: 3854, y: 4677},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO030",coords:{x: 4153, y: 4512},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO031",coords:{x: 5266, y: 4255},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO032",coords:{x: 1103, y: 2252},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO033",coords:{x: 1645, y: 2367},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO034",coords:{x: 1817, y: 2884},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO035",coords:{x: 4117, y: 2851},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO036",coords:{x: 4511, y: 2483},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO037",coords:{x: 1648, y: 1142},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO038",coords:{x: 1976, y: 1710},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO039",coords:{x: 2438, y: 1854},name: "<h1>火之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO040",coords:{x: 2682, y: 1400},name: "<h1>火之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO041",coords:{x: 3083, y: 983},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO042",coords:{x: 3217, y: 467},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO043",coords:{x: 3679, y: 730},name: "<h1>火之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO044",coords:{x: 2984, y: 2294},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO045",coords:{x: 3987, y: 1969},name: "<h1>風之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO046",coords:{x: 4418, y: 1078},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO047",coords:{x: 4662, y: 1421},name: "<h1>火之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO048",coords:{x: 4897, y: 1582},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO049",coords:{x: 3360, y: 6723},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO050",coords:{x: 4753, y: 6574},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO051",coords:{x: 3290, y: 4543},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},
		{type:"JIZO",markid:"JIZO052",coords:{x: 3475, y: 3922},name: "<h1>水之地藏像</h1>",opa:"1",chk:"0"},

		
		//{type:"RELIC",markid:"Shrine002",coords:{x: 1138, y: 976},name: "<h1>地球幣：100</h1>搭纜車時約卡在中間牆壁上，看到亮點後用動能抓取<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv0O16f9uwUzrJIELi8-7hsJ7dDxxanjqCwichlA09_JyQtGcufFtiPu45XT6mGjy2HaRNP_PyMxL3XKnSGdArAsyLHo_vQwuoKiIFdWREYXdyB4dkSPShVYw2HOy44Px6lbtAxLjxQJTQP-IQJxztCCNF65s1hNPYo_UqQqT_BZfPX-OFQj-nVEPpOA/s0/ch8-14.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv0O16f9uwUzrJIELi8-7hsJ7dDxxanjqCwichlA09_JyQtGcufFtiPu45XT6mGjy2HaRNP_PyMxL3XKnSGdArAsyLHo_vQwuoKiIFdWREYXdyB4dkSPShVYw2HOy44Px6lbtAxLjxQJTQP-IQJxztCCNF65s1hNPYo_UqQqT_BZfPX-OFQj-nVEPpOA/s640/ch8-14.webp' class='mypopupimg'/></a></p>",opa:"1",chk:"0"},			
		
	];