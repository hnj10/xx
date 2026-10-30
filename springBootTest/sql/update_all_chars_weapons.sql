-- 原神全量角色/武器数据更新脚本（幂等，可重复执行）
USE genshin_db;

-- ============ 角色 ============
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '迪卢克', '火', 5, '主C · 蒸发', '普通攻击 > 元素爆发 > 元素战技', '炽烈的炎之魔女 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '黎明双子之一，E 三段+Q 火鸟爆发，配合行秋/夜兰蒸发稳定出伤。', 1
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '迪卢克');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '可莉', '火', 5, '主C · 站场', '普通攻击 > 元素爆发 > 元素战技', '炽烈的炎之魔女 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '重击与诡雷输出，操作门槛略高，对群控场能力强。', 2
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '可莉');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '胡桃', '火', 5, '主C · 蒸发', '普通攻击 > 元素爆发 > 元素战技', '炽烈的炎之魔女 4件套', '时之沙：生命% / 空之杯：火伤% / 理之冠：暴击', 'E 生命转攻击，重击蒸发高额伤害，注意控血与行秋/夜兰挂水。', 3
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '胡桃');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '宵宫', '火', 5, '主C · 普攻', '普通攻击 > 元素爆发 > 元素战技', '追忆之注连 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', 'E 附魔普攻高频输出，对单极强，需盾辅保站场。', 4
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '宵宫');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '迪希雅', '火', 5, '副C · 减伤', '元素爆发 > 元素战技 > 普通攻击', '炽烈的炎之魔女 4件套', '时之沙：生命% / 空之杯：火伤% / 理之冠：暴击', '领域减伤+抗打断，后台挂火，常驻池火系辅C。', 5
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '迪希雅');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '林尼', '火', 5, '主C · 蓄力', '普通攻击 > 元素爆发 > 元素战技', '逐影猎人 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '蓄力箭+猫猫弹叠层，配芙宁娜蒸发出伤，枫丹火C代表。', 6
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '林尼');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '阿蕾奇诺', '火', 5, '主C · 战技', '元素战技 > 普通攻击 > 元素爆发', '谐律的异想 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '仆人，E 印记引爆高额火伤，消耗「生命之契」强化重击，直伤型强火C。', 7
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '阿蕾奇诺');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '玛薇卡', '火', 5, '主C · 火神', '元素爆发 > 元素战技 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '火神，Q 消耗夜魂值爆发高额火伤，E 后台挂火，纳塔体系核心，配希诺宁/茜特菈莉组建战舰。', 8
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '玛薇卡');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '安柏', '火', 4, '副C · 破盾', '元素爆发 > 元素战技 > 普通攻击', '炽烈的炎之魔女 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '兔兔伯爵嘲讽+Q 火雨破冰盾，前期探索担当。', 9
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '安柏');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '班尼特', '火', 4, '增攻 · 治疗', '元素爆发 > 元素战技 > 普通攻击', '宗室之仪 4件套', '时之沙：充能% / 空之杯：生命% / 理之冠：治疗%', 'Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。', 10
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '班尼特');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '香菱', '火', 4, '副C · 后台火', '元素爆发 > 元素战技 > 普通攻击', '绝缘之旗印 4件套', '时之沙：充能% / 空之杯：火伤% / 理之冠：暴击', '旋火轮后台挂火+高蒸发，国家队核心，四星顶配副C。', 11
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '香菱');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '辛焱', '火', 4, '盾辅 · 物伤', '元素爆发 > 元素战技 > 普通攻击', '昔日宗室之仪 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '火盾+物理加成，泛用性一般，厨力向。', 12
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '辛焱');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '烟绯', '火', 4, '主C · 重击', '普通攻击 > 元素爆发 > 元素战技', '流浪大地的乐团 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '火系四星站场重击输出，叠印增伤，前期好用的火C。', 13
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '烟绯');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '嘉明', '火', 4, '主C · 下落', '元素爆发 > 元素战技 > 普通攻击', '炽烈的炎之魔女 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '下落攻击火伤，Q 召唤跳台，配水C蒸发，纳塔四星火C。', 14
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '嘉明');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '托马', '火', 4, '盾辅 · 挂火', '元素爆发 > 元素战技 > 普通攻击', '千岩牢固 4件套', '时之沙：充能% / 空之杯：生命% / 理之冠：生命%', '火盾+后台挂火，纳塔体系护盾兼蒸发工具人。', 15
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '托马');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '夏沃蕾', '火', 4, '增攻 · 奶', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', '超载队专拐，降低敌人抗性+增攻，雷火队核心四星辅助。', 16
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '夏沃蕾');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '莫娜', '水', 5, '增伤 · 控制', '元素爆发 > 元素战技 > 普通攻击', '绝缘之旗印 4件套', '时之沙：充能% / 空之杯：水伤% / 理之冠：暴击', 'Q 挂泡影增伤+控制，永冻/核爆体系经典辅助。', 17
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '莫娜');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '达达利亚', '水', 5, '主C · 断流', '元素战技 > 元素爆发 > 普通攻击', '沉沦之心 4件套', '时之沙：攻击% / 空之杯：水伤% / 理之冠：暴击', '公子，E 近战双刀断流群伤，配万叶/香菱蒸发队。', 18
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '达达利亚');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '珊瑚宫心海', '水', 5, '治疗 · 挂水', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', 'E 水母持续治疗+挂水，永冻与绽放队核心生存位。', 19
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '珊瑚宫心海');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '神里绫人', '水', 5, '主C · 站场', '普通攻击 > 元素爆发 > 元素战技', '回声之林夜话 4件套', '时之沙：攻击% / 空之杯：水伤% / 理之冠：暴击', 'E 高频水剑站场输出，Q 后台水，配云堇/万叶出伤。', 20
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '神里绫人');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '夜兰', '水', 5, '副C · 增伤', '元素爆发 > 元素战技 > 普通攻击', '绝缘之旗印 4件套', '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击', 'Q 协同攻击后台水+全队增伤，泛用性极强的水副C。', 21
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '夜兰');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '妮露', '水', 5, '绽放核心', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 2件+花海甘露 2件', '时之沙：生命% / 空之杯：生命% / 理之冠：生命%', '丰穰之核绽放队核心，纯水草队伍收益最大化。', 22
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '妮露');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '那维莱特', '水', 5, '主C · 重击', '普通攻击 > 元素爆发 > 元素战技', '逐影猎人 4件套', '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击', '重击蓄力水炮高频群伤，生命主词条成型，芙宁娜/万叶黄金搭档。', 23
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '那维莱特');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '芙宁娜', '水', 5, '增伤辅 · 后台水', '元素爆发 > 元素战技 > 普通攻击', '黄金剧团 4件套', '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击', '水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。', 24
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '芙宁娜');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '希格雯', '水', 5, '治疗 · 副C', '元素战技 > 元素爆发 > 普通攻击', '昔时之歌 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', '水泡治疗+后台协同，辅助兼副C，生命堆满即可。', 25
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '希格雯');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '玛拉妮', '水', 5, '主C · 蒸发', '普通攻击 > 元素爆发 > 元素战技', '烬城勇者绘卷 4件套', '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击', '纳塔水C，冲浪蓄力重击蒸发，配火系挂火出伤。', 26
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '玛拉妮');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '芭芭拉', '水', 4, '治疗 · 挂水', '元素战技 > 元素爆发 > 普通攻击', '被怜爱的少女 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', '新手奶妈，E 环绕治疗，Q 全队抬血，水环挂水。', 27
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '芭芭拉');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '塔利雅', '水', 4, '盾辅 · 挂水', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 4件套', '时之沙：充能% / 空之杯：生命% / 理之冠：生命%', '水盾+减抗，纳塔水系辅助兼生存位。', 28
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '塔利雅');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '行秋', '水', 4, '副C · 减伤', '元素爆发 > 元素战技 > 普通攻击', '绝缘之旗印 4件套', '时之沙：充能% / 空之杯：水伤% / 理之冠：暴击', 'Q 雨帘剑后台水+减伤回血，蒸发/绽放万金油四星。', 29
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '行秋');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '坎蒂丝', '水', 4, '盾辅 · 附魔', '元素爆发 > 元素战技 > 普通攻击', '昔日宗室之仪 4件套', '时之沙：充能% / 空之杯：生命% / 理之冠：生命%', '水盾+普攻水附魔，配合水系主C增伤。', 30
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '坎蒂丝');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '爱诺', '水', 4, '副C · 挂水', '元素爆发 > 元素战技 > 普通攻击', '纺月的夜歌 4件套', '时之沙：充能% / 空之杯：水伤% / 理之冠：暴击', '挪德卡莱机械发明家，后台挂水+领域水伤，月反应水载体。', 31
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '爱诺');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '刻晴', '雷', 5, '主C · 激化', '普通攻击 > 元素爆发 > 元素战技', '如雷的盛怒 4件套', '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击', 'E 瞬移+重击输出，配草系打激化收益高。', 32
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '刻晴');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '雷电将军', '雷', 5, '主C · 充能辅', '元素爆发 > 元素战技 > 普通攻击', '绝缘之旗印 4件套', '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击', 'Q 高爆发+全队充能，充能 230%+ 叠双暴，开大无敌帧多。', 33
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '雷电将军');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '八重神子', '雷', 5, '副C · 杀生樱', '元素战技 > 元素爆发 > 普通攻击', '黄金剧团 4件套', '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击', 'E 杀生樱后台雷伤，Q 天狐霆雷爆发，激化队副C。', 34
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '八重神子');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '赛诺', '雷', 5, '主C · 激化', '元素爆发 > 元素战技 > 普通攻击', '饰金之梦 4件套', '时之沙：精通 / 空之杯：雷伤% / 理之冠：暴击', 'Q 变身长轴激化输出，配草系持续挂草。', 35
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '赛诺');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '克洛琳德', '雷', 5, '主C · 突进', '元素战技 > 元素爆发 > 普通攻击', '谐律的异想 4件套', '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击', '枪剑突进站场，依赖雷草反应（激化/超载），枫丹热门雷C。', 36
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '克洛琳德');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '瓦蕾莎', '雷', 5, '主C · 站场', '元素爆发 > 元素战技 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击', '纳塔雷C，夜魂体系站场输出，配希诺宁出伤。', 37
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '瓦蕾莎');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '伊涅芙', '雷', 5, '辅助 · 月感电', '元素战技 > 元素爆发 > 普通攻击', '穹境示现之夜 4件套', '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击', '月感电体系辅助，与菲林斯组成菲机组合的核心拐。', 38
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '伊涅芙');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '菲林斯', '雷', 5, '主C · 月感电', '元素爆发 > 元素战技 > 普通攻击', '穹境示现之夜 4件套', '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击', '月感电站场主C，幽焰显迹模式输出，驱动月感电反应的执灯人。', 39
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '菲林斯');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '丽莎', '雷', 4, '副C · 破防', '元素爆发 > 元素战技 > 普通攻击', '如雷的盛怒 4件套', '时之沙：精通 / 空之杯：雷伤% / 理之冠：暴击', 'Q 降防+范围雷伤，新手期好用雷辅。', 40
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '丽莎');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '雷泽', '雷', 4, '主C · 物理', '普通攻击 > 元素爆发 > 元素战技', '苍白之火 4件套', '时之沙：攻击% / 空之杯：物伤% / 理之冠：暴击', '狼少年，普攻物理站场，Q 召唤狼魂协同，前期主C。', 41
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '雷泽');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '菲谢尔', '雷', 4, '副C · 奥兹', '元素战技 > 元素爆发 > 普通攻击', '黄金剧团 4件套', '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击', '奥兹后台持续雷伤，激化/超导队经典副C。', 42
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '菲谢尔');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '北斗', '雷', 4, '副C · 反击', '元素爆发 > 元素战技 > 普通攻击', '绝缘之旗印 4件套', '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击', 'Q 闪雷后台雷伤+减伤，E 弹反高伤，泛用副C。', 43
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '北斗');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '九条裟罗', '雷', 4, '增攻 · 副C', '元素爆发 > 元素战技 > 普通攻击', '绝缘之旗印 4件套', '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击', '雷系专拐，E/Q 为雷C大幅加攻，雷九万班核心。', 44
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '九条裟罗');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '久岐忍', '雷', 4, '治疗 · 挂雷', '元素战技 > 元素爆发 > 普通攻击', '饰金之梦 4件套', '时之沙：精通 / 空之杯：精通 / 理之冠：精通', 'E 雷环持续治疗+挂雷，超绽放队核心打火机。', 45
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '久岐忍');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '多莉', '雷', 4, '治疗 · 充能', '元素爆发 > 元素战技 > 普通攻击', '被怜爱的少女 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', 'Q 回能+治疗，泛用雷系生存辅助。', 46
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '多莉');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '赛索斯', '雷', 4, '主C · 蓄力', '普通攻击 > 元素爆发 > 元素战技', '饰金之梦 4件套', '时之沙：精通 / 空之杯：雷伤% / 理之冠：暴击', '蓄力雷箭，激化队四星雷C。', 47
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '赛索斯');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '欧洛伦', '雷', 4, '副C · 夜魂', '元素爆发 > 元素战技 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击', '纳塔雷副C，夜魂体系后台雷，配恰斯卡等主C。', 48
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '欧洛伦');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '伊安珊', '雷', 4, '辅助 · 增攻', '元素爆发 > 元素战技 > 普通攻击', '千岩牢固 4件套', '时之沙：充能% / 空之杯：生命% / 理之冠：生命%', '纳塔雷辅，为前台角色增攻，护盾生存兼备。', 49
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '伊安珊');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '七七', '冰', 5, '治疗 · 挂冰', '元素战技 > 元素爆发 > 普通攻击', '被怜爱的少女 4件套', '时之沙：攻击% / 空之杯：攻击% / 理之冠：治疗%', 'E/Q 持续治疗+符咒回血，奶量充足，常驻池治疗。', 50
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '七七');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '甘雨', '冰', 5, '主C · 蓄力狙', '普通攻击 > 元素爆发 > 元素战技', '冰风迷途的勇士 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '重击霜华矢二段伤害，操作上限高，怕打断可带盾辅。', 51
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '甘雨');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '优菈', '冰', 5, '主C · 物理', '元素爆发 > 普通攻击 > 元素战技', '苍白之火 4件套', '时之沙：攻击% / 空之杯：物伤% / 理之冠：暴击', '光降之剑爆发，物理主C天花板，配雷电将军超导减抗。', 52
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '优菈');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '神里绫华', '冰', 5, '主C · 永冻', '普通攻击 > 元素爆发 > 元素战技', '冰风迷途的勇士 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '重击+Q 站场，配莫娜/心海挂水永冻，霰步贴近开怪。', 53
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '神里绫华');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '申鹤', '冰', 5, '冰辅 · 增伤', '元素战技 > 元素爆发 > 普通攻击', '昔日宗室之仪 4件套', '时之沙：攻击% / 空之杯：攻击% / 理之冠：攻击%', 'E 冰翎增冰伤，冰系专拐，永冻/纯冰队核心。', 54
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '申鹤');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '莱欧斯利', '冰', 5, '主C · 站场', '普通攻击 > 元素爆发 > 元素战技', '逐影猎人 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '拳套站场输出，生命波动强化，枫丹冰C。', 55
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '莱欧斯利');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '茜特菈莉', '冰', 5, '盾辅 · 减抗', '元素战技 > 元素爆发 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：充能% / 空之杯：冰伤% / 理之冠：暴击', '冰盾+减抗+副C，纳塔体系强力冰辅，玛薇卡战舰关键位。', 56
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '茜特菈莉');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '爱可菲', '冰', 5, '冰辅 · 减抗', '元素战技 > 元素爆发 > 普通攻击', '苍金之翼 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '盘活冰系的水冰减抗辅助，兼具副C输出，丝柯克等冰C核心拐。', 57
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '爱可菲');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '丝柯克', '冰', 5, '主C · 冰水强队', '普通攻击 > 元素爆发 > 元素战技', '奇想乐章 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '冰水队核心主C，配芙宁娜+爱可菲组建丝柯克冰水队，纳塔强力输出。', 58
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '丝柯克');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '凯亚', '冰', 4, '副C · 挂冰', '元素爆发 > 元素战技 > 普通攻击', '冰风迷途的勇士 4件套', '时之沙：充能% / 空之杯：冰伤% / 理之冠：暴击', 'Q 环绕冰轮后台挂冰，前期永冻工具人。', 59
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '凯亚');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '迪奥娜', '冰', 4, '盾辅 · 治疗', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：生命%', '冰盾+治疗+充能，全面生存辅助，配甘雨等主C。', 60
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '迪奥娜');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '罗莎莉亚', '冰', 4, '副C · 暴击', '元素爆发 > 元素战技 > 普通攻击', '昔日宗室之仪 4件套', '时之沙：充能% / 空之杯：冰伤% / 理之冠：暴击', 'Q 范围冰伤+全队暴击率加成，永冻/物伤队副C。', 61
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '罗莎莉亚');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '米卡', '冰', 4, '治疗 · 攻速', '元素战技 > 元素爆发 > 普通攻击', '被怜爱的少女 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', '治疗+攻速加成，物理队辅助。', 62
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '米卡');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '重云', '冰', 4, '副C · 附魔', '元素爆发 > 元素战技 > 普通攻击', '冰风迷途的勇士 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', 'E 冰附魔领域，国家队传统成员，Q 爆发冰伤。', 63
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '重云');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '莱依拉', '冰', 4, '盾辅 · 挂冰', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：生命%', '冰盾+后台挂冰，永冻队优质四星盾辅。', 64
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '莱依拉');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '菲米尼', '冰', 4, '主C · 物伤', '普通攻击 > 元素爆发 > 元素战技', '苍白之火 4件套', '时之沙：攻击% / 空之杯：物伤% / 理之冠：暴击', '物伤与冰伤混伤主C，配超导出伤。', 65
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '菲米尼');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '夏洛蒂', '冰', 4, '治疗 · 挂冰', '元素战技 > 元素爆发 > 普通攻击', '被怜爱的少女 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', '冰系治疗+挂冰，永冻队生存位。', 66
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '夏洛蒂');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '琴', '风', 5, '治疗 · 聚怪', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：治疗%', '团长，Q 领域治疗+减抗，E 吹飞控场，常驻风系奶妈。', 67
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '琴');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '温迪', '风', 5, '聚怪 · 充能辅', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：精通 / 空之杯：精通 / 理之冠：暴击', 'Q 大范围聚怪控场，对群无可替代，充能 160%+ 循环流畅。', 68
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '温迪');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '魈', '风', 5, '主C · 下落', '普通攻击 > 元素爆发 > 元素战技', '辰砂往生录 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击', 'Q 风轮两立下落攻击，持续耗血换高额风伤，配盾辅保命。', 69
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '魈');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '枫原万叶', '风', 5, '聚怪 · 增伤辅', '元素战技 > 元素爆发 > 普通攻击', '翠绿之影 4件套', '时之沙：精通 / 空之杯：精通 / 理之冠：精通', 'E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。', 70
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '枫原万叶');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '流浪者', '风', 5, '主C · 站场', '普通攻击 > 元素爆发 > 元素战技', '沙上楼阁史话 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击', 'E 悬浮普攻输出，配云堇/夜兰增伤，灵活风C。', 71
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '流浪者');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '闲云', '风', 5, '增伤 · 下落辅', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击', 'Q 提高队友下落攻击伤害+治疗，下落流派核心辅助。', 72
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '闲云');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '恰斯卡', '风', 5, '主C · 多元素', '元素战技 > 元素爆发 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击', '夜魂体系风C，E 随队染色打多元素伤害，纳塔热门主C。', 73
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '恰斯卡');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '梦见月瑞希', '风', 5, '辅助 · 治疗', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：精通 / 空之杯：精通 / 理之冠：精通', '风系治疗+扩散，纳塔风辅，泛用生存位。', 74
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '梦见月瑞希');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '砂糖', '风', 4, '增伤 · 聚怪', '元素战技 > 元素爆发 > 普通攻击', '翠绿之影 4件套', '时之沙：精通 / 空之杯：精通 / 理之冠：精通', '扩散聚怪+全队精通加成，反应队平民增伤辅。', 75
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '砂糖');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '蓝砚', '风', 4, '盾辅 · 挂风', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 4件套', '时之沙：精通 / 空之杯：精通 / 理之冠：精通', '风盾+扩散，稻妻风系辅助。', 76
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '蓝砚');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '鹿野院平藏', '风', 4, '主C · 拳法', '元素战技 > 元素爆发 > 普通攻击', '翠绿之影 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击', '拳法站场输出，E 叠层一拳爆发。', 77
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '鹿野院平藏');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '早柚', '风', 4, '治疗 · 滚地', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：治疗%', '滚地赶路+治疗，探索与生存兼备的风奶。', 78
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '早柚');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '珐露珊', '风', 4, '增伤 · 风拐', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：充能% / 空之杯：风伤% / 理之冠：暴击', '风系专拐，大幅提升风C伤害，风队核心四星。', 79
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '珐露珊');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '琳妮特', '风', 4, '副C · 挂风', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：充能% / 空之杯：风伤% / 理之冠：暴击', '风系后台副C，Q 范围风伤，枫丹风辅。', 80
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '琳妮特');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '伊法', '风', 4, '辅助 · 治疗', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：充能% / 空之杯：风伤% / 理之冠：暴击', '纳塔风辅，治疗+扩散，辅助型角色。', 81
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '伊法');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '雅珂达', '风', 4, '副C · 挂风', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：充能% / 空之杯：风伤% / 理之冠：暴击', '风系后台副C，扩散减抗，泛用风辅。', 82
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '雅珂达');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '钟离', '岩', 5, '盾辅 · 减抗', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 4件套', '时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%', '长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。', 83
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '钟离');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '阿贝多', '岩', 5, '副C · 后台', '元素战技 > 元素爆发 > 普通攻击', '华馆梦醒形骸记 4件套', '时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击', 'E 阳华后台岩伤，防转攻，配钟离双岩共鸣。', 84
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '阿贝多');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '荒泷一斗', '岩', 5, '主C · 站场', '普通攻击 > 元素爆发 > 元素战技', '华馆梦醒形骸记 4件套', '时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击', 'Q 变身鬼王重击输出，防御转攻，配五郎纯岩队。', 85
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '荒泷一斗');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '娜维娅', '岩', 5, '主C · 结晶弹片', '元素战技 > 元素爆发 > 普通攻击', '回响之林 4件套', '时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击', '收集结晶弹片强化 E 炮击，对单极强，配钟离/班尼特出伤稳定。', 86
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '娜维娅');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '千织', '岩', 5, '副C · 后台', '元素战技 > 元素爆发 > 普通攻击', '华馆梦醒形骸记 4件套', '时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击', '后台岩副C，E 协同攻击，配娜维娅等岩C。', 87
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '千织');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '希诺宁', '岩', 5, '辅助 · 减抗', '元素战技 > 元素爆发 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击', '夜魂体系岩辅，减抗+增伤，玛薇卡战舰关键辅助。', 88
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '希诺宁');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '诺艾尔', '岩', 4, '盾辅 · 奶', '元素爆发 > 元素战技 > 普通攻击', '华馆梦醒形骸记 4件套', '时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击', '盾+治疗+站场，六命质变，防御转攻四星主C。', 89
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '诺艾尔');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '凝光', '岩', 4, '主C · 重击', '普通攻击 > 元素爆发 > 元素战技', '昔日宗室之仪 4件套', '时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击', '重击岩伤+屏风增伤，四星岩C，对单输出稳定。', 90
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '凝光');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '云堇', '岩', 4, '增伤 · 普攻拐', '元素爆发 > 元素战技 > 普通攻击', '华馆梦醒形骸记 4件套', '时之沙：防御% / 空之杯：防御% / 理之冠：防御%', 'Q 为普攻角色大幅增伤，普攻流核心拐。', 91
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '云堇');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '五郎', '岩', 4, '增伤 · 岩拐', '元素战技 > 元素爆发 > 普通攻击', '华馆梦醒形骸记 4件套', '时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击', '岩系专拐，纯岩队增伤核心，配一斗/诺艾尔。', 92
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '五郎');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '卡齐娜', '岩', 4, '辅助 · 岩拐', '元素战技 > 元素爆发 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击', '纳塔岩辅，增伤+岩队辅助。', 93
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '卡齐娜');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '叶洛亚', '岩', 4, '辅助 · 岩拐', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 4件套', '时之沙：充能% / 空之杯：生命% / 理之冠：生命%', '岩系辅助，护盾+岩队增益。', 94
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '叶洛亚');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '提纳里', '草', 5, '主C · 激化', '普通攻击 > 元素爆发 > 元素战技', '深林的记忆 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击', '蓄力箭三段草伤，配雷电/菲谢尔打激化，常驻草C。', 95
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '提纳里');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '纳西妲', '草', 5, '副C · 草辅', '元素战技 > 元素爆发 > 普通攻击', '深林的记忆 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击', 'E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。', 96
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '纳西妲');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '艾尔海森', '草', 5, '主C · 站场', '普通攻击 > 元素爆发 > 元素战技', '饰金之梦 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击', '光镜协同攻击草伤，激化队主C，操作灵活。', 97
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '艾尔海森');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '白术', '草', 5, '治疗 · 挂草', '元素爆发 > 元素战技 > 普通攻击', '深林的记忆 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', '盾+治疗+后台挂草，绽放/激化队优质生存位。', 98
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '白术');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '艾梅莉埃', '草', 5, '副C · 后台草', '元素爆发 > 元素战技 > 普通攻击', '深林的记忆 4件套', '时之沙：攻击% / 空之杯：草伤% / 理之冠：暴击', '后台持续草伤，配燃烧/激化队，草系副C。', 99
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '艾梅莉埃');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '基尼奇', '草', 5, '主C · 燃烧', '元素爆发 > 元素战技 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：攻击% / 空之杯：草伤% / 理之冠：暴击', '纳塔草C，燃烧反应输出，配火系挂火。', 100
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '基尼奇');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '菈乌玛', '草', 5, '月绽放 · 核心辅', '元素战技 > 元素爆发 > 普通攻击', '纺月的夜歌 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击', '月绽放体系核心，挂草触发月绽放，挪德卡莱「月」体系关键。', 101
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '菈乌玛');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '奈芙尔', '草', 5, '月绽放 · 站场主C', '普通攻击 > 元素爆发 > 元素战技', '穹境示现之夜 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击', '月绽放站场主C，消耗草露施放幻戏，配菈乌玛组建月绽放强队。', 102
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '奈芙尔');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '瑶瑶', '草', 4, '治疗 · 挂草', '元素战技 > 元素爆发 > 普通攻击', '深林的记忆 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', '月桂治疗+挂草，激化队四星生存位。', 103
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '瑶瑶');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '柯莱', '草', 4, '副C · 挂草', '元素爆发 > 元素战技 > 普通攻击', '深林的记忆 4件套', '时之沙：充能% / 空之杯：草伤% / 理之冠：暴击', '后台挂草，绽放/激化队四星副C。', 104
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '柯莱');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '卡维', '草', 4, '主C · 绽放', '元素爆发 > 元素战技 > 普通攻击', '深林的记忆 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击', '绽放主C，Q 强化草原核，配水系打绽放。', 105
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '卡维');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '绮良良', '草', 4, '盾辅 · 挂草', '元素战技 > 元素爆发 > 普通攻击', '深林的记忆 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：精通', '草盾+后台挂草，激化队四星盾辅。', 106
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '绮良良');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '法尔伽', '风', 5, '主C · 双持', '普通攻击 > 元素爆发 > 元素战技', '烬城勇者绘卷 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击', '西风骑士团大团长·北风骑士，双持双手剑同时打出风元素与队友对应元素伤害，魔导角色。', 107
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '法尔伽');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '尼可', '火', 5, '后台辅 · 护盾', '元素爆发 > 元素战技 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '魔女会「魔女」，E 全队加攻+炽光护盾，Q 召唤奥迹造影协同攻击，魔导体系核心辅助。', 108
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '尼可');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '杜林', '火', 5, '主C · 燃烧', '元素爆发 > 元素战技 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '「不熄灭的火」，燃烧反应火C，挪德卡莱火系输出，配草系挂草出伤。', 109
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '杜林');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '兹白', '岩', 5, '主C · 月结晶', '普通攻击 > 元素爆发 > 元素战技', '穹境示现之夜 4件套', '时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击', '月结晶反应输出，防御转攻，低配即可成型，配钟离或叶洛亚组建月结晶队。', 110
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '兹白');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '洛恩', '冰', 5, '主C · 站场', '普通攻击 > 元素爆发 > 元素战技', '奇想乐章 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '西风骑士团远程小队副队长，管理「欢悦/争胜」双资源，遇强则强的冰C。', 111
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '洛恩');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '布伦妮', '风', 4, '副C · 扩散', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击', '「魔女猎人」，Q 召唤魅巫之铃后台风伤，触发扩散额外增伤。', 112
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '布伦妮');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '奥黛塔', '冰', 5, '副C · 星超导', '元素爆发 > 元素战技 > 普通攻击', '奇想乐章 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '至冬首席芭蕾舞者，星之楔冰，后台触发星超导/星扩散，持续挂冰+星烁增伤。', 113
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '奥黛塔');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '阿罗夏', '雷', 4, '治疗 · 挂雷', '元素爆发 > 元素战技 > 普通攻击', '被怜爱的少女 4件套', '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%', '至冬职业猎手，狼裔狙击手，治疗+持续挂雷的辅助角色。', 114
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '阿罗夏');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '薇斯纳', '风', 5, '主C · 星扩散', '元素战技 > 元素爆发 > 普通攻击', '奇想乐章 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击', '冬契军司令官，星之楔风，召唤灵剑触发星扩散，可飞行探索。', 115
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '薇斯纳');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '沃雅妮莎', '水', 5, '治疗 · 辅助', '元素战技 > 元素爆发 > 普通攻击', '奇想乐章 4件套', '时之沙：生命% / 空之杯：水伤% / 理之冠：治疗%', '皇家剧团首席女高音，水妖形态演唱治疗，加攻+减抗，冻结/星扩散队辅助。', 116
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '沃雅妮莎');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '米提亚', '雷', 5, '主C · 星之楔', '元素爆发 > 元素战技 > 普通攻击', '奇想乐章 4件套', '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击', '至冬星之楔雷法器角色，星烁反应体系输出。', 117
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '米提亚');
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '瓦列里', '雷', 4, '副C · 挂雷', '元素爆发 > 元素战技 > 普通攻击', '绝缘之旗印 4件套', '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击', '至冬单手剑角色，后台挂雷副C，星烁反应辅助。', 118
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '瓦列里');

-- ============ 角色武器推荐 ============
INSERT IGNORE INTO t_char_weapon (character_name, element, weapon_name, rarity, reason, sort_order) VALUES
('迪卢克', '火', '狼的末路', 5, '专武，攻击力提升范围伤害', 1),
('迪卢克', '火', '螭骨剑', 4, '暴击率副属性，纪行获取', 2),
('可莉', '火', '四风原典', 5, '站场叠层增元素伤', 1),
('可莉', '火', '流浪乐章', 4, '上场随机增伤，爆发', 2),
('胡桃', '火', '护摩之杖', 5, '生命转攻，契合低血输出', 1),
('胡桃', '火', '决斗之枪', 4, '暴击率副属性，缓解双暴压力', 2),
('宵宫', '火', '飞雷之弦振', 5, '专武，普攻增伤叠层', 1),
('宵宫', '火', '弓藏', 4, '普攻增伤，平民替代', 2),
('林尼', '火', '冬极白星', 5, '普攻重击叠层增伤', 1),
('林尼', '火', '破魔之弓', 4, '满能量重击增伤', 2),
('阿蕾奇诺', '火', '赤沙之王', 5, '火伤强化，仆人核心', 1),
('阿蕾奇诺', '火', '决斗之枪', 4, '暴击率副属性', 2),
('玛薇卡', '火', '赤沙之王', 5, '火神 Q 爆发契合', 1),
('玛薇卡', '火', '狼的末路', 5, '攻击力提升', 2),
('班尼特', '火', '天空之刃', 5, '高白值+充能，加攻最优', 1),
('班尼特', '火', '西风剑', 4, '充能副属性，辅助循环', 2),
('香菱', '火', '护摩之杖', 5, '暴伤副属性，爆发高', 1),
('香菱', '火', '渔获', 4, '充能+Q 增伤，平民神器', 2),
('达达利亚', '水', '冬极白星', 5, '专武，普攻增伤', 1),
('达达利亚', '水', '弓藏', 4, '普攻增伤替代', 2),
('珊瑚宫心海', '水', '不灭月华', 5, '专武，治疗+生命', 1),
('珊瑚宫心海', '水', '西风秘典', 4, '充能辅助', 2),
('神里绫人', '水', '波乱月白经津', 5, '专武，普攻增伤', 1),
('神里绫人', '水', '黑剑', 4, '暴击率副属性，纪行', 2),
('夜兰', '水', '若水', 5, '专武，暴伤+生命', 1),
('夜兰', '水', '西风猎弓', 4, '充能副属性', 2),
('妮露', '水', '圣显之钥', 5, '专武，生命转精通', 1),
('妮露', '水', '西风剑', 4, '充能辅助', 2),
('那维莱特', '水', '万世流涌大典', 5, '专武，重击伤害生命收益', 1),
('那维莱特', '水', '祭礼残章', 4, '平民替代', 2),
('芙宁娜', '水', '静水流涌之辉', 5, '专武，生命+增伤', 1),
('芙宁娜', '水', '西风剑', 4, '充能副属性', 2),
('玛拉妮', '水', '万世流涌大典', 5, '水C重击输出', 1),
('玛拉妮', '水', '流浪乐章', 4, '爆发增伤', 2),
('行秋', '水', '祭礼剑', 5, '重置战技，双E回能', 1),
('行秋', '水', '西风剑', 4, '充能副属性', 2),
('刻晴', '雷', '雾切之回光', 5, '元素伤加成，激化输出', 1),
('刻晴', '雷', '黑剑', 4, '暴击率副属性', 2),
('雷电将军', '雷', '薙草之稻光', 5, '专武，充能转攻', 1),
('雷电将军', '雷', '渔获', 4, '充能+Q 增伤，平民神器', 2),
('八重神子', '雷', '神乐之真意', 5, '专武，战技叠层', 1),
('八重神子', '雷', '流浪乐章', 4, '爆发增伤', 2),
('赛诺', '雷', '赤沙之杖', 5, '专武，精通转攻', 1),
('赛诺', '雷', '决斗之枪', 4, '暴击率副属性', 2),
('克洛琳德', '雷', '赦罪之锏', 5, '专武，突进雷伤', 1),
('克洛琳德', '雷', '匣里龙吟', 4, '暴击副属性', 2),
('瓦蕾莎', '雷', '赤沙之王', 5, '夜魂雷C输出', 1),
('瓦蕾莎', '雷', '决斗之枪', 4, '暴击率副属性', 2),
('菲林斯', '雷', '血染荒城', 5, '专武，月感电输出', 1),
('菲林斯', '雷', '匣里龙吟', 4, '暴击副属性', 2),
('菲谢尔', '雷', '天空之翼', 5, '暴击率，奥兹输出', 1),
('菲谢尔', '雷', '绝弦', 4, '战技爆发增伤', 2),
('久岐忍', '雷', '铁蜂刺', 4, '精通副属性，超绽放', 1),
('久岐忍', '雷', '西风剑', 4, '充能辅助', 2),
('七七', '冰', '天空之刃', 5, '高白值+充能，治疗', 1),
('七七', '冰', '祭礼剑', 4, '重置战技', 2),
('甘雨', '冰', '阿莫斯之弓', 5, '蓄力箭增伤', 1),
('甘雨', '冰', '破魔之弓', 4, '满能量重击增伤', 2),
('优菈', '冰', '松籁响起之时', 5, '物伤，攻速攻击', 1),
('优菈', '冰', '雪葬的星银', 4, '物伤副属性', 2),
('神里绫华', '冰', '雾切之回光', 5, '专武，冰伤加成', 1),
('神里绫华', '冰', '天目影打刀', 4, '充能缓解 Q 压力', 2),
('申鹤', '冰', '息灾', 5, '专武，攻击力提升', 1),
('申鹤', '冰', '西风长枪', 4, '充能辅助', 2),
('莱欧斯利', '冰', '镜中月', 5, '冰水体系输出', 1),
('莱欧斯利', '冰', '黑剑', 4, '暴击率副属性', 2),
('茜特菈莉', '冰', '天空之刃', 5, '充能+减抗辅助', 1),
('茜特菈莉', '冰', '西风剑', 4, '充能辅助', 2),
('爱可菲', '冰', '终末嗟叹之诗', 5, '精通+全队增益', 1),
('爱可菲', '冰', '西风弓', 4, '充能副属性', 2),
('丝柯克', '冰', '镜中月', 5, '专武，冰水体系核心', 1),
('丝柯克', '冰', '黑剑', 4, '暴击率副属性', 2),
('琴', '风', '天空之刃', 5, '充能+治疗', 1),
('琴', '风', '西风剑', 4, '充能辅助', 2),
('温迪', '风', '终末嗟叹之诗', 5, '精通+全队增益', 1),
('温迪', '风', '西风猎弓', 4, '充能副属性', 2),
('魈', '风', '和璞鸢', 5, '专武，叠层增攻', 1),
('魈', '风', '决斗之枪', 4, '暴击率副属性', 2),
('枫原万叶', '风', '苍古自由之誓', 5, '精通+全队增伤', 1),
('枫原万叶', '风', '铁蜂刺', 4, '精通副属性', 2),
('流浪者', '风', '四风原典', 5, '站场叠层增伤', 1),
('流浪者', '风', '流浪乐章', 4, '爆发增伤', 2),
('闲云', '风', '天空之卷', 5, '攻击+增伤', 1),
('闲云', '风', '西风秘典', 4, '充能辅助', 2),
('恰斯卡', '风', '天空之刃', 5, '攻击+风伤', 1),
('恰斯卡', '风', '铁蜂刺', 4, '精通副属性', 2),
('钟离', '岩', '黑缨枪', 3, '生命%副属性，护盾拉满', 1),
('钟离', '岩', '贯虹之槊', 5, '攻击提升盾伤与Q', 2),
('阿贝多', '岩', '磐岩结绿', 5, '防御转攻，暴击率', 1),
('阿贝多', '岩', '西风剑', 4, '充能辅助', 2),
('荒泷一斗', '岩', '赤角石溃杵', 5, '专武，防御转攻', 1),
('荒泷一斗', '岩', '螭骨剑', 4, '暴击率副属性', 2),
('娜维娅', '岩', '裁叶萃光', 5, '专武，结晶弹片增伤', 1),
('娜维娅', '岩', '千岩长枪', 4, '攻击+岩伤', 2),
('希诺宁', '岩', '磐岩结绿', 5, '暴击率，辅助', 1),
('希诺宁', '岩', '西风剑', 4, '充能辅助', 2),
('凝光', '岩', '四风原典', 5, '站场叠层增伤', 1),
('凝光', '岩', '流浪乐章', 4, '爆发增伤', 2),
('提纳里', '草', '猎人之径', 5, '专武，精通转攻', 1),
('提纳里', '草', '绝弦', 4, '战技爆发增伤', 2),
('纳西妲', '草', '千夜浮梦', 5, '专武，精通+全队增益', 1),
('纳西妲', '草', '流浪的晚星', 4, '精通副属性', 2),
('艾尔海森', '草', '图莱杜拉的回忆', 5, '专武，激化输出', 1),
('艾尔海森', '草', '铁蜂刺', 4, '精通副属性', 2),
('白术', '草', '不灭月华', 5, '治疗+生命', 1),
('白术', '草', '西风秘典', 4, '充能辅助', 2),
('艾梅莉埃', '草', '纺夜天镜', 5, '草系后台输出', 1),
('艾梅莉埃', '草', '流浪的晚星', 4, '精通副属性', 2),
('基尼奇', '草', '纺夜天镜', 5, '燃烧输出', 1),
('基尼奇', '草', '流浪的晚星', 4, '精通副属性', 2),
('菈乌玛', '草', '纺夜天镜', 5, '专武，月绽放核心', 1),
('菈乌玛', '草', '祭礼残章', 4, '精通副属性', 2),
('奈芙尔', '草', '纺夜天镜', 5, '专武，月绽放主C', 1),
('奈芙尔', '草', '流浪的晚星', 4, '精通副属性', 2),
('法尔伽', '风', '狼的武功歌', 5, '专武，攻速+四风诗系增伤', 1),
('法尔伽', '风', '天空之傲', 5, '充能+范围风伤替代', 2),
('尼可', '火', '尘光七谕', 5, '专武，护盾后按攻加伤+回能', 1),
('尼可', '火', '西风秘典', 4, '充能辅助', 2),
('杜林', '火', '黑蚀', 5, '魔导体系输出法器', 1),
('杜林', '火', '流浪乐章', 4, '爆发增伤', 2),
('兹白', '岩', '朏魄含光', 5, '专武，数值暴力大幅提升输出', 1),
('兹白', '岩', '磐岩结绿', 5, '高双暴词条替代', 2),
('洛恩', '冰', '灾悔', 5, '专武，战技后普攻重击增伤', 1),
('洛恩', '冰', '决斗之枪', 4, '暴击率副属性', 2),
('布伦妮', '风', '天空之卷', 5, '攻击+扩散输出', 1),
('布伦妮', '风', '流浪乐章', 4, '爆发增伤', 2),
('奥黛塔', '冰', '白湖冬羽', 5, '专武，星烁反应增伤+回能', 1),
('奥黛塔', '冰', '雾切之回光', 5, '元素伤加成替代', 2),
('阿罗夏', '雷', '西风长枪', 4, '充能副属性，辅助循环', 1),
('阿罗夏', '雷', '渔获', 4, '充能+Q 增伤', 2),
('薇斯纳', '风', '蝶变', 5, '专武，战技爆发依次增伤', 1),
('薇斯纳', '风', '雾切之回光', 5, '元素伤加成替代', 2),
('沃雅妮莎', '水', '漩流颂歌', 5, '专武，治疗+生命+加攻', 1),
('沃雅妮莎', '水', '不灭月华', 5, '治疗+生命替代', 2),
('米提亚', '雷', '蝶变', 5, '星扩散体系输出', 1),
('米提亚', '雷', '流浪乐章', 4, '爆发增伤', 2),
('瓦列里', '雷', '西风剑', 4, '充能副属性，辅助循环', 1),
('瓦列里', '雷', '匣里龙吟', 4, '攻击副属性', 2);

-- ============ 武器 ============
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '雾切之回光', 5, '单手剑', '副属性：暴击伤害', '获得元素伤害加成，普攻命中叠层进一步提高元素伤害。', 1
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '雾切之回光');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '磐岩结绿', 5, '单手剑', '副属性：暴击率', '生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。', 2
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '磐岩结绿');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '苍古自由之誓', 5, '单手剑', '副属性：元素精通', '触发元素反应后全队普攻/重击伤害提升，持续 12s。', 3
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '苍古自由之誓');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '天空之刃', 5, '单手剑', '副属性：元素充能效率', '普攻与重击额外风伤，提升移速与攻击力。', 4
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '天空之刃');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '斫峰之刃', 5, '单手剑', '副属性：攻击力', '护盾保护下攻击力提升，效果翻倍。', 5
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '斫峰之刃');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '风鹰剑', 5, '单手剑', '副属性：物理伤害加成', '受击回血，攻击时范围风伤。', 6
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '风鹰剑');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '波乱月白经津', 5, '单手剑', '副属性：暴击率', '普攻增伤，生命回满时叠层提高攻击力。', 7
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '波乱月白经津');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '圣显之钥', 5, '单手剑', '副属性：生命值', '生命转精通，绽放队辅助法器。', 8
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '圣显之钥');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '静水流涌之辉', 5, '单手剑', '副属性：生命值', '基于生命上限提升元素战技伤害，契合水神芙宁娜。', 9
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '静水流涌之辉');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '赦罪之锏', 5, '单手剑', '副属性：暴击率', '突进输出与雷伤全面契合，克洛琳德专武。', 10
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '赦罪之锏');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '镜中月', 5, '单手剑', '副属性：暴击伤害', '丝柯克核心武器，冰水体系输出上限极高。', 11
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '镜中月');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '裁叶萃光', 5, '单手剑', '副属性：攻击力', '强化结晶弹片伤害，娜维娅核心武器。', 12
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '裁叶萃光');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '狼的末路', 5, '双手剑', '副属性：攻击力', '命中低血敌人全队加攻，范围伤害。', 13
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '狼的末路');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '天空之傲', 5, '双手剑', '副属性：元素充能效率', 'Q 后真空刃，普攻重击范围风伤。', 14
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '天空之傲');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '无工之剑', 5, '双手剑', '副属性：攻击力', '护盾下攻击提升，护盾强度加成。', 15
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '无工之剑');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '松籁响起之时', 5, '双手剑', '副属性：物理伤害加成', '普攻叠层提升攻速与攻击力，物伤武器。', 16
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '松籁响起之时');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '赤角石溃杵', 5, '双手剑', '副属性：暴击伤害', '防御转攻击，重击增伤，一斗专武。', 17
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '赤角石溃杵');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '赤沙之王', 5, '双手剑', '副属性：暴击伤害', '火神玛薇卡专属，Q 爆发与夜魂体系完美契合。', 18
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '赤沙之王');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '护摩之杖', 5, '长柄武器', '副属性：暴击伤害', '生命值提升 20%，基于生命上限的 0.8% 获得攻击力。', 19
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '护摩之杖');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '和璞鸢', 5, '长柄武器', '副属性：暴击率', '命中叠层提高攻击力，满层额外增伤。', 20
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '和璞鸢');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '贯虹之槊', 5, '长柄武器', '副属性：攻击力', '护盾下攻击力提升，效果翻倍。', 21
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '贯虹之槊');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '薙草之稻光', 5, '长柄武器', '副属性：元素充能效率', '充能效率超 100% 部分每 1% 转 0.4% 攻击力。', 22
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '薙草之稻光');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '天空之脊', 5, '长柄武器', '副属性：元素充能效率', '普攻命中额外刃伤，Q 后移速提升。', 23
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '天空之脊');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '息灾', 5, '长柄武器', '副属性：攻击力', '申鹤专武，攻击力提升，冰系辅助。', 24
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '息灾');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '赤沙之杖', 5, '长柄武器', '副属性：元素精通', '基于精通提升攻击力，赛诺专武。', 25
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '赤沙之杖');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '血染荒城', 5, '长柄武器', '副属性：暴击率', '月感电输出核心长柄，菲林斯专武。', 26
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '血染荒城');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '天空之卷', 5, '法器', '副属性：攻击力', '普攻命中额外伤害，触发风伤效果。', 27
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '天空之卷');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '四风原典', 5, '法器', '副属性：暴击率', '移动速度提升，站场叠层增元素伤。', 28
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '四风原典');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '尘世之锁', 5, '法器', '副属性：攻击力', '护盾下攻击力提升，效果翻倍。', 29
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '尘世之锁');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '神乐之真意', 5, '法器', '副属性：暴击伤害', '施放战技叠层增伤，八重神子专武。', 30
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '神乐之真意');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '不灭月华', 5, '法器', '副属性：生命值', '治疗+生命加成，珊瑚宫心海专武。', 31
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '不灭月华');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '千夜浮梦', 5, '法器', '副属性：元素精通', '按队伍元素类型数量提供精通与全队元素伤害。', 32
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '千夜浮梦');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '图莱杜拉的回忆', 5, '法器', '副属性：暴击伤害', '艾尔海森专武，激化输出。', 33
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '图莱杜拉的回忆');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '万世流涌大典', 5, '法器', '副属性：暴击伤害', '重击蓄力伤害与生命收益极高，那维莱特专武。', 34
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '万世流涌大典');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '纺夜天镜', 5, '法器', '副属性：元素精通', '月绽放体系核心法器，菈乌玛与奈芙尔专武。', 35
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '纺夜天镜');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '天空之翼', 5, '弓', '副属性：暴击率', '暴击后范围物伤，攻击力提升。', 36
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '天空之翼');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '阿莫斯之弓', 5, '弓', '副属性：攻击力', '普攻与瞄准射击伤害提升，箭矢飞行增伤。', 37
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '阿莫斯之弓');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '终末嗟叹之诗', 5, '弓', '副属性：元素充能效率', '精通+充能+全队精通增益，辅助最优。', 38
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '终末嗟叹之诗');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '冬极白星', 5, '弓', '副属性：暴击率', '普攻重击叠层增伤，达达利亚专武。', 39
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '冬极白星');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '飞雷之弦振', 5, '弓', '副属性：暴击伤害', '普攻增伤，叠层强化，宵宫专武。', 40
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '飞雷之弦振');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '猎人之径', 5, '弓', '副属性：暴击率', '基于精通提升普攻伤害，提纳里专武。', 41
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '猎人之径');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '若水', 5, '弓', '副属性：暴击伤害', '生命提升，夜兰专武，泛用输出弓。', 42
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '若水');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '铁蜂刺', 4, '单手剑', '副属性：元素精通', '锻造获取，精通副属性，扩散收益稳定。', 43
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '铁蜂刺');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '祭礼剑', 4, '单手剑', '副属性：元素充能效率', '战技概率重置冷却，行秋/万叶常用。', 44
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '祭礼剑');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '西风剑', 4, '单手剑', '副属性：元素充能效率', '暴击回能，帮助全队循环。', 45
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '西风剑');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '天目影打刀', 4, '单手剑', '副属性：攻击力', '稻妻锻造，充能缓解 Q 启动压力。', 46
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '天目影打刀');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '黑剑', 4, '单手剑', '副属性：暴击率', '纪行获取，普攻重击增伤+回血。', 47
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '黑剑');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '匣里龙吟', 4, '单手剑', '副属性：攻击力', '对附着元素敌人增伤。', 48
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '匣里龙吟');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '螭骨剑', 4, '双手剑', '副属性：暴击率', '叠层增伤，纪行高性价比双手剑。', 49
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '螭骨剑');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '西风大剑', 4, '双手剑', '副属性：元素充能效率', '暴击回能，辅助型双手剑。', 50
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '西风大剑');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '祭礼大剑', 4, '双手剑', '副属性：元素充能效率', '战技概率重置，重云常用。', 51
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '祭礼大剑');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '决斗之枪', 4, '长柄武器', '副属性：暴击率', '纪行获取，暴击副属性缓解双暴压力。', 52
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '决斗之枪');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '渔获', 4, '长柄武器', '副属性：元素充能效率', '钓鱼兑换，充能+Q 增伤，平民神器。', 53
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '渔获');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '西风长枪', 4, '长柄武器', '副属性：元素充能效率', '暴击回能，帮助全队回能。', 54
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '西风长枪');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '匣里灭辰', 4, '长柄武器', '副属性：元素精通', '对水/火元素敌人增伤，蒸发队副C。', 55
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '匣里灭辰');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '流浪乐章', 4, '法器', '副属性：暴击伤害', '上场随机增伤，爆发型法器。', 56
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '流浪乐章');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '西风秘典', 4, '法器', '副属性：元素充能效率', '暴击回能，辅助法器。', 57
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '西风秘典');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '祭礼残章', 4, '法器', '副属性：元素精通', '战技概率重置，精通法器。', 58
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '祭礼残章');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '流浪的晚星', 4, '法器', '副属性：元素精通', '精通副属性+全队增伤，锻造法器。', 59
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '流浪的晚星');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '西风猎弓', 4, '弓', '副属性：元素充能效率', '充能副属性，帮助全队回能。', 60
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '西风猎弓');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '绝弦', 4, '弓', '副属性：元素精通', '元素战技与爆发增伤。', 61
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '绝弦');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '弓藏', 4, '弓', '副属性：攻击力', '普攻增伤，宵宫平民替代。', 62
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '弓藏');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '破魔之弓', 4, '弓', '副属性：攻击力', '锻造获取，满能量重击增伤 32%。', 63
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '破魔之弓');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '狼的武功歌', 5, '双手剑', '副属性：攻击力', '法尔伽专武，攻速提升，普攻/战技/重击叠「四风诗系」增伤，魔导体系叠暴伤。', 64
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '狼的武功歌');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '尘光七谕', 5, '法器', '副属性：攻击力', '尼可专武，护盾后按攻击力提升场上角色伤害，护盾时回能。', 65
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '尘光七谕');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '黑蚀', 5, '法器', '副属性：暴击伤害', '杜林相关法器，魔导体系输出武器。', 66
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '黑蚀');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '灾悔', 5, '长柄武器', '副属性：暴击率', '洛恩专武，战技后普攻重击与战技爆发增伤。', 67
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '灾悔');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '焚曜千阳', 5, '双手剑', '副属性：暴击伤害', '玛薇卡复刻专武，火神爆发与夜魂体系契合。', 68
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '焚曜千阳');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '朏魄含光', 5, '单手剑', '副属性：防御力', '兹白专武，数值暴力，大幅提升月结晶输出。', 69
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '朏魄含光');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '织月者的曙色', 4, '单手剑', '副属性：元素精通', '挪德卡莱四星单手剑，月反应体系。', 70
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '织月者的曙色');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '幽夜华尔兹', 4, '弓', '副属性：暴击率', '四星弓，暴击副属性，平民输出弓。', 71
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '幽夜华尔兹');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '白湖冬羽', 5, '单手剑', '副属性：暴击伤害', '奥黛塔专武，大幅提升攻击与星烁反应暴伤，回能。', 72
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '白湖冬羽');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '蝶变', 5, '单手剑', '副属性：暴击率', '薇斯纳专武，战技爆发依次获得暴伤/星扩散增伤/回能。', 73
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '蝶变');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '漩流颂歌', 5, '法器', '副属性：生命值', '沃雅妮莎专武，治疗+生命上限提升+加攻，冻结/星扩散增益。', 74
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '漩流颂歌');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '星锋剑', 5, '单手剑', '副属性：攻击力', '旅行者至冬剧情获取，提升攻击并命中回能，可强化。', 75
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '星锋剑');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '新枝', 4, '单手剑', '副属性：元素精通', '四星单手剑，战技后命中提升攻击与精通。', 76
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '新枝');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '引火之源', 4, '单手剑', '副属性：攻击力', '至冬锻造，触发元素反应提升攻击，星烁反应增伤。', 77
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '引火之源');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '救赎之斩', 4, '双手剑', '副属性：元素精通', '至冬锻造，触发元素反应提升精通，星烁反应加攻。', 78
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '救赎之斩');
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '戍望谣歌', 4, '长柄武器', '副属性：元素充能效率', '至冬锻造，触发元素反应回能，星烁反应加攻。', 79
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '戍望谣歌');

-- ============ 队伍 ============
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '胡桃蒸发队', '重击蒸发 · 高额单体爆发', '行秋先 Q 挂水 → 万叶扩散减抗 → 钟离开盾 → 胡桃 E 后重击输出。', 1
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '胡桃蒸发队');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '雷九万班', '雷电将军爆发流', '九条 E+Q 增攻 → 班尼特 Q 加攻 → 万叶扩散 → 雷神 Q 一刀收割。', 2
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '雷九万班');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '神鹤万心（永冻）', '冻结控场 · 绫华站场', '心海 E 挂水 → 万叶聚怪 → 申鹤 E 增冰伤 → 绫华霰步贴脸 Q+重击。', 3
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '神鹤万心（永冻）');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '纳西妲绽放队', '草原核绽放 · 范围高伤', '双水双草凑加成 → 妮露 E 丰穰之核 → 纳西妲 E 挂草生成草原核炸场。', 4
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '纳西妲绽放队');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '甘雨永冻队', '范围永冻 · 蓄力狙杀', '温迪 Q 聚怪 → 莫娜 Q 挂水增伤 → 甘雨远程蓄力箭逐个点名。', 5
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '甘雨永冻队');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '国家队', '元素反应 · 亲民四星', '全四星高性价比：班尼特加攻治疗 → 行秋挂水 → 香菱 Q 蒸发 → 重云附魔收割。', 6
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '国家队');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '那维莱特纯水队', '重击水炮 · 纯色输出', '芙宁娜 Q 增伤 → 万叶扩散减抗 → 心海治疗保层 → 那维莱特重击水炮群伤。', 7
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '那维莱特纯水队');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '玛薇卡战舰', '火神爆发 · 纳塔体系', '希诺宁增岩 → 茜特菈莉挂冰 → 芙宁娜增伤 → 玛薇卡 Q 爆发收割。', 8
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '玛薇卡战舰');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '丝柯克冰水队', '冰水冻结 · 双C输出', '爱可菲减抗 → 芙宁娜增伤挂水 → 塔利雅水盾 → 丝柯克站场输出。', 9
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '丝柯克冰水队');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '娜维娅结晶队', '结晶弹片 · 爆发输出', '双岩共鸣 → 班尼特加攻 → 香菱挂火产结晶 → 娜维娅收集弹片 E 炮击。', 10
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '娜维娅结晶队');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '月绽放队', '月绽放 · 高金数上限', '菈乌玛挂草触发月绽放 → 爱诺水兆 → 芙宁娜增伤 → 奈芙尔站场输出。', 11
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '月绽放队');
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '菲机组合', '月感电 · 站场主C', '伊涅芙护盾+月感电 → 菈乌玛挂草 → 爱诺水兆 → 菲林斯站场驱动月感电。', 12
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '菲机组合');

-- ============ 队伍成员 ============
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '胡桃', '火', 1 FROM t_team WHERE name = '胡桃蒸发队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '行秋', '水', 2 FROM t_team WHERE name = '胡桃蒸发队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '枫原万叶', '风', 3 FROM t_team WHERE name = '胡桃蒸发队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '钟离', '岩', 4 FROM t_team WHERE name = '胡桃蒸发队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '雷电将军', '雷', 1 FROM t_team WHERE name = '雷九万班';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '九条裟罗', '雷', 2 FROM t_team WHERE name = '雷九万班';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '枫原万叶', '风', 3 FROM t_team WHERE name = '雷九万班';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '班尼特', '火', 4 FROM t_team WHERE name = '雷九万班';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '神里绫华', '冰', 1 FROM t_team WHERE name = '神鹤万心（永冻）';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '申鹤', '冰', 2 FROM t_team WHERE name = '神鹤万心（永冻）';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '枫原万叶', '风', 3 FROM t_team WHERE name = '神鹤万心（永冻）';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '珊瑚宫心海', '水', 4 FROM t_team WHERE name = '神鹤万心（永冻）';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '纳西妲', '草', 1 FROM t_team WHERE name = '纳西妲绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '妮露', '水', 2 FROM t_team WHERE name = '纳西妲绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '夜兰', '水', 3 FROM t_team WHERE name = '纳西妲绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '柯莱', '草', 4 FROM t_team WHERE name = '纳西妲绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '甘雨', '冰', 1 FROM t_team WHERE name = '甘雨永冻队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '莫娜', '水', 2 FROM t_team WHERE name = '甘雨永冻队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '温迪', '风', 3 FROM t_team WHERE name = '甘雨永冻队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '迪奥娜', '冰', 4 FROM t_team WHERE name = '甘雨永冻队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '香菱', '火', 1 FROM t_team WHERE name = '国家队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '行秋', '水', 2 FROM t_team WHERE name = '国家队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '班尼特', '火', 3 FROM t_team WHERE name = '国家队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '重云', '冰', 4 FROM t_team WHERE name = '国家队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '那维莱特', '水', 1 FROM t_team WHERE name = '那维莱特纯水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '芙宁娜', '水', 2 FROM t_team WHERE name = '那维莱特纯水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '枫原万叶', '风', 3 FROM t_team WHERE name = '那维莱特纯水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '珊瑚宫心海', '水', 4 FROM t_team WHERE name = '那维莱特纯水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '玛薇卡', '火', 1 FROM t_team WHERE name = '玛薇卡战舰';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '希诺宁', '岩', 2 FROM t_team WHERE name = '玛薇卡战舰';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '茜特菈莉', '冰', 3 FROM t_team WHERE name = '玛薇卡战舰';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '芙宁娜', '水', 4 FROM t_team WHERE name = '玛薇卡战舰';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '丝柯克', '冰', 1 FROM t_team WHERE name = '丝柯克冰水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '芙宁娜', '水', 2 FROM t_team WHERE name = '丝柯克冰水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '爱可菲', '冰', 3 FROM t_team WHERE name = '丝柯克冰水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '塔利雅', '水', 4 FROM t_team WHERE name = '丝柯克冰水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '娜维娅', '岩', 1 FROM t_team WHERE name = '娜维娅结晶队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '钟离', '岩', 2 FROM t_team WHERE name = '娜维娅结晶队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '班尼特', '火', 3 FROM t_team WHERE name = '娜维娅结晶队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '香菱', '火', 4 FROM t_team WHERE name = '娜维娅结晶队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '奈芙尔', '草', 1 FROM t_team WHERE name = '月绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '菈乌玛', '草', 2 FROM t_team WHERE name = '月绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '芙宁娜', '水', 3 FROM t_team WHERE name = '月绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '爱诺', '水', 4 FROM t_team WHERE name = '月绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '菲林斯', '雷', 1 FROM t_team WHERE name = '菲机组合';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '伊涅芙', '雷', 2 FROM t_team WHERE name = '菲机组合';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '菈乌玛', '草', 3 FROM t_team WHERE name = '菲机组合';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '爱诺', '水', 4 FROM t_team WHERE name = '菲机组合';
