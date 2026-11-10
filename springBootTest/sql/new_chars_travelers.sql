-- 补齐 5 位角色 + 七元素旅行者：幂等迁移脚本（gen_new_chars.py 生成）
-- 执行：mysql -h 127.0.0.1 -P 3306 -uroot -p123456 genshin_db < new_chars_travelers.sql
SET NAMES utf8mb4;
DELETE FROM t_team_member WHERE team_id BETWEEN 38 AND 49;
DELETE FROM t_team WHERE id BETWEEN 38 AND 49;
DELETE FROM t_char_weapon WHERE character_name IN ('哥伦比娅','莉奈娅','桑多涅','艾莉丝','埃洛伊','旅行者·风','旅行者·岩','旅行者·雷','旅行者·草','旅行者·水','旅行者·火','旅行者·冰');
DELETE FROM t_weapon WHERE name IN ('星锋剑','秘星典谕','白湖冬羽','蝶变');
DELETE FROM t_character WHERE name IN ('哥伦比娅','莉奈娅','桑多涅','艾莉丝','埃洛伊','旅行者·风','旅行者·岩','旅行者·雷','旅行者·草','旅行者·水','旅行者·火','旅行者·冰');

-- 角色养成攻略
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (119,'哥伦比娅','水',5,'副C · 月反应核心','元素爆发 > 元素战技 > 普通攻击','纺月的夜歌 4件套','时之沙：攻击% / 空之杯：水伤% / 理之冠：暴击','「空月归乡」月之少女，Q 领域让全队可触发月感电 / 月绽放 / 月结晶，是月反应体系的核心挂水位。',119,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (120,'莉奈娅','岩',5,'主C · 结晶狙击','普通攻击 > 元素战技 > 元素爆发','华馆梦醒形骸记 4件套','时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击','6.5 岩系弓角色，蓄力结晶弹高频输出，依赖双岩共鸣与护盾保证站场。',120,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (121,'桑多涅','冰',5,'副C · 后台挂冰','元素爆发 > 元素战技 > 普通攻击','冰风迷途的勇士 4件套','时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击','「镜水析谬」愚人众执行官木偶，后台持续挂冰并提供减抗，是永冻与冰伤队的强力副C。',121,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (122,'艾莉丝','火',5,'主C · 火法站场','普通攻击 > 元素爆发 > 元素战技','炽烈的炎之魔女 4件套','时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击','魔女会成员，火系法器站场主C，大范围火伤兼顾蒸发与融化，配水系辅助出伤最高。',122,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (123,'埃洛伊','冰',5,'主C · 冰弓','普通攻击 > 元素战技 > 元素爆发','冰风迷途的勇士 4件套','时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击','联动限定冰弓角色，E 冰弹附魔普攻并叠加线圈，融化 / 永冻皆可，绝版收藏向主C。',123,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (124,'旅行者·风','风',5,'副C · 聚怪扩散','元素爆发 > 元素战技 > 普通攻击','翠绿之影 4件套','时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击','与风元素共鸣，Q 风涡卷聚怪扩散、E 风刃击退；翠绿之影 4 件套减抗，平民泛用副C。',124,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (125,'旅行者·岩','岩',5,'副C · 岩造物','元素战技 > 元素爆发 > 普通攻击','华馆梦醒形骸记 4件套','时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击','与岩元素共鸣，E 荒星造物挡伤并共鸣、Q 岩潮结界控场；双岩队稳定副C，养成成本低。',125,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (126,'旅行者·雷','雷',5,'辅助 · 全队充能','元素战技 > 元素爆发 > 普通攻击','绝缘之旗印 4件套','时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击','与雷元素共鸣，E 落雷勾玉为全队回能、Q 雷影斩后台挂雷；激化 / 超导队的充能功能位。',126,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (127,'旅行者·草','草',5,'副C · 持续挂草','元素爆发 > 元素战技 > 普通攻击','深林的记忆 4件套','时之沙：元素精通 / 空之杯：草伤% / 理之冠：元素精通','与草元素共鸣，Q 草灯莲持续挂草，配合水 / 雷触发绽放与激化；深林 4 件套减草抗。',127,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (128,'旅行者·水','水',5,'辅助 · 挂水治疗','元素爆发 > 元素战技 > 普通攻击','昔时之歌 4件套','时之沙：生命% / 空之杯：水伤% / 理之冠：治疗加成','与水元素共鸣，E 水球挂水、Q 潮汐领域持续治疗；蒸发 / 绽放队兼顾挂水与生存的功能位。',128,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (129,'旅行者·火','火',5,'副C · 后台挂火','元素爆发 > 元素战技 > 普通攻击','炽烈的炎之魔女 4件套','时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击','与火元素共鸣，Q 火莲后台持续挂火，配合冰 / 水打融化与蒸发；纳塔火体系的功能副C。',129,1);
INSERT INTO t_character (id,name,element,rarity,role_name,talents,artifacts,main_stats,summary,sort_order,status) VALUES (130,'旅行者·冰','冰',5,'主C · 星烁反应','元素爆发 > 元素战技 > 普通攻击','穹境示现之夜 4件套','时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击','7.0 至冬七天神像共鸣解锁冰元素：配雷走站场「星超导」、配风走后台「星扩散」；主线赠送五星专武「星锋剑」。',130,1);

-- 新武器（含 90 级数值）
INSERT INTO t_weapon (id,name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES (204,'星锋剑',5,'单手剑','副属性：暴击率',46,608,'暴击率','22.1%','7.0 主线赠送的旅行者(冰)专武，攻击、双暴与充能全面加成，随至冬七天神像解锁层数强化。',204,1);
INSERT INTO t_weapon (id,name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES (205,'秘星典谕',5,'法器','副属性：暴击伤害',44,542,'暴击伤害','66.2%','7.2 米提亚专武：施放战技提升精通，触发反应叠加「炬中法度」，星超导暴伤进一步提升。',205,1);
INSERT INTO t_weapon (id,name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES (206,'白湖冬羽',5,'单手剑','副属性：暴击伤害',48,674,'暴击伤害','44.1%','7.0 奥黛塔专武，提升冰伤与星烁反应伤害，后台挂冰时依然生效。',206,1);
INSERT INTO t_weapon (id,name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES (207,'蝶变',5,'单手剑','副属性：暴击率',46,608,'暴击率','22.1%','7.1 薇斯纳专武，触发星扩散后提升全队风伤与扩散伤害。',207,1);

-- 角色武器推荐
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (254,'哥伦比娅','水','千夜浮梦',5,'专精精通与全队增益，月反应收益最高',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (255,'哥伦比娅','水','流浪的晚星',4,'精通副属性，锻造即可入手',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (256,'莉奈娅','岩','阿莫斯之弓',5,'蓄力箭增伤，结晶弹全额吃到',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (257,'莉奈娅','岩','破魔之弓',4,'锻造获取，满能量重击增伤 32%',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (258,'桑多涅','冰','狼的末路',5,'高白值攻击，后台冰伤收益稳定',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (259,'桑多涅','冰','螭骨剑',4,'暴击率副属性，纪行获取',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (260,'艾莉丝','火','四风原典',5,'站场叠层元素伤，暴击率副属性缓解双暴压力',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (261,'艾莉丝','火','流浪乐章',4,'三类增益轮换，爆发期收益极高',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (262,'埃洛伊','冰','阿莫斯之弓',5,'蓄力与普攻增伤，冰弓输出最优',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (263,'埃洛伊','冰','破魔之弓',4,'锻造获取，满能量重击增伤',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (264,'旅行者·风','风','苍古自由之誓',5,'精通与全队增伤，扩散队最优',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (265,'旅行者·风','风','铁蜂刺',4,'锻造获取，精通副属性扩散收益稳定',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (266,'旅行者·岩','岩','磐岩结绿',5,'生命与暴击率兼顾，泛用五星单手剑',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (267,'旅行者·岩','岩','西风剑',4,'充能副属性，缓解全队循环压力',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (268,'旅行者·雷','雷','天空之刃',5,'充能副属性，开大循环最顺',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (269,'旅行者·雷','雷','西风剑',4,'产球辅助，全队充能无忧',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (270,'旅行者·草','草','圣显之钥',5,'生命转精通，绽放队辅助向',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (271,'旅行者·草','草','西风剑',4,'充能副属性，保证 Q 循环不断档',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (272,'旅行者·水','水','静水流涌之辉',5,'生命副属性，战技伤害与治疗双收益',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (273,'旅行者·水','水','祭礼剑',4,'重置战技，挂水覆盖更稳',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (274,'旅行者·火','火','雾切之回光',5,'元素伤害加成与普攻增伤，火伤收益高',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (275,'旅行者·火','火','铁蜂刺',4,'锻造获取，精通副属性反应收益稳定',2);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (276,'旅行者·冰','冰','星锋剑',5,'7.0 主线赠送专武，攻击/双暴/充能全面加成，随神像解锁层数强化',1);
INSERT INTO t_char_weapon (id,character_name,element,weapon_name,rarity,reason,sort_order) VALUES (277,'旅行者·冰','冰','西风剑',4,'充能副属性，速切循环更顺',2);

-- 队伍与成员
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (38,'哥伦比娅月反应队','月反应 · 三系联动','哥伦比娅 Q 开领域挂水 → 菈乌玛挂草触发月绽放 → 伊涅芙挂雷触发月感电 → 兹白结晶触发月结晶，三系月反应全覆盖。',37,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (157,38,'哥伦比娅','水',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (158,38,'菈乌玛','草',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (159,38,'伊涅芙','雷',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (160,38,'兹白','岩',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (39,'莉奈娅双岩队','蓄力岩伤 · 双岩共鸣','钟离开盾减抗 → 希诺宁减抗加伤 → 班尼特 Q 加攻 → 莉奈娅蓄力结晶弹站场输出。',38,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (161,39,'莉奈娅','岩',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (162,39,'钟离','岩',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (163,39,'希诺宁','岩',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (164,39,'班尼特','火',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (40,'桑多涅永冻队','永冻 · 冰伤爆发','芙宁娜 Q 增伤挂水 → 万叶扩散减抗聚怪 → 桑多涅后台挂冰 → 绫华重击与 Q 永冻收割。',39,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (165,40,'桑多涅','冰',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (166,40,'神里绫华','冰',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (167,40,'芙宁娜','水',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (168,40,'枫原万叶','风',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (41,'艾莉丝蒸发队','蒸发 · 火法站场','班尼特 Q 加攻 → 万叶扩散减抗 → 芙宁娜挂水增伤 → 艾莉丝站场普攻与 Q 连续蒸发。',40,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (169,41,'艾莉丝','火',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (170,41,'芙宁娜','水',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (171,41,'枫原万叶','风',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (172,41,'班尼特','火',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (42,'埃洛伊融化队','融化 · 冰弓站场','钟离开盾保站场 → 班尼特 Q 加攻 → 香菱 Q 后台挂火 → 埃洛伊 E 附魔普攻连续融化。',41,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (173,42,'埃洛伊','冰',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (174,42,'班尼特','火',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (175,42,'香菱','火',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (176,42,'钟离','岩',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (43,'风主扩散队','扩散 · 双风聚怪','班尼特 Q 加攻 → 香菱 Q 挂火 → 万叶 E 聚怪扩散减抗 → 旅行者·风 Q 风涡卷持续扩散收尾。',42,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (177,43,'旅行者·风','风',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (178,43,'枫原万叶','风',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (179,43,'班尼特','火',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (180,43,'香菱','火',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (44,'岩主结晶队','双岩共鸣 · 结晶护盾','钟离开盾减抗 → 班尼特 Q 加攻 → 阿贝多 E 后台岩伤 → 旅行者·岩 荒星与 Q 结晶补伤。',43,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (181,44,'旅行者·岩','岩',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (182,44,'钟离','岩',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (183,44,'阿贝多','岩',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (184,44,'班尼特','火',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (45,'雷主激化队','激化 · 充能辅助','钟离开盾 → 纳西妲 E 全场挂草 → 旅行者·雷 E 勾玉回能 → 菲谢尔奥兹后台雷触发激化。',44,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (185,45,'旅行者·雷','雷',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (186,45,'纳西妲','草',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (187,45,'菲谢尔','雷',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (188,45,'钟离','岩',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (46,'草主绽放队','超绽放 · 双草挂草','纳西妲 E 挂草 → 行秋 Q 挂水生成草原核 → 旅行者·草 Q 草灯莲续草 → 久岐忍 E 触发超绽放。',45,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (189,46,'旅行者·草','草',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (190,46,'纳西妲','草',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (191,46,'行秋','水',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (192,46,'久岐忍','雷',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (47,'水主蒸发队','蒸发 · 双水挂水','钟离开盾减抗 → 行秋 Q 挂水 → 旅行者·水 E+Q 持续挂水治疗 → 胡桃 E 后重击蒸发。',46,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (193,47,'旅行者·水','水',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (194,47,'胡桃','火',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (195,47,'行秋','水',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (196,47,'钟离','岩',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (48,'火主融化队','融化 · 后台挂火','钟离开盾保站场 → 班尼特 Q 加攻 → 旅行者·火 Q 火莲后台挂火 → 甘雨蓄力霜华矢连续融化。',47,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (197,48,'旅行者·火','火',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (198,48,'甘雨','冰',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (199,48,'班尼特','火',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (200,48,'钟离','岩',3);
INSERT INTO t_team (id,name,core,tip,sort_order,status) VALUES (49,'冰主星烁队','星超导 · 星扩散双路线','米提亚 Q 铺极星辉域 → 万叶扩散触发星扩散清群 → 奥黛塔后台挂冰增伤 → 旅行者·冰 站场星超导收割。',48,1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (201,49,'旅行者·冰','冰',0);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (202,49,'米提亚','雷',1);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (203,49,'奥黛塔','冰',2);
INSERT INTO t_team_member (id,team_id,member_name,element,sort_order) VALUES (204,49,'枫原万叶','风',3);

-- 汇总：角色 12 位（原 118）、七元素旅行者 7 位、武器 4 把、武器推荐 24 条、队伍 12 支、成员 48 人次
