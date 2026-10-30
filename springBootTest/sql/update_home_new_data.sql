-- =============================================================
-- 原神 Demo —— 首页数据更新脚本（引入近年新角色 / 新圣遗物 / 新武器）
-- 数据库: genshin_db
--
-- 使用方法：
--   mysql -uroot -p123456 --default-character-set=utf8mb4 genshin_db < update_home_new_data.sql
--
-- 说明：
--   - 主表用 NOT EXISTS 判断，不覆盖已有数据（老角色保留）
--   - 子表用 INSERT IGNORE，依赖唯一键防重复
--   - 覆盖时代：枫丹(4.x) / 纳塔(5.x) / 挪德卡莱月之(6.x)
-- =============================================================

USE genshin_db;

-- =============================================================
-- 一、新增角色（枫丹 / 纳塔 / 挪德卡莱）
-- =============================================================
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '芙宁娜', '水', 5, '增伤辅 · 后台水', '元素爆发 > 元素战技 > 普通攻击', '黄金剧团 4件套', '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击', '水神，Q 依据血量波动为全队提供高额增伤，E 三只沙龙后台挂水+治疗，直伤/绽放体系泛用辅助。', 11
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '芙宁娜');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '那维莱特', '水', 5, '主C · 重击输出', '普通攻击 > 元素爆发 > 元素战技', '逐影猎人 4件套', '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击', '重击蓄力水炮高频群伤，生命主词条即可成型，芙宁娜/万叶是黄金搭档，新时代水C代表。', 12
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '那维莱特');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '娜维娅', '岩', 5, '主C · 结晶弹片', '元素战技 > 元素爆发 > 普通攻击', '回响之林 4件套', '时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击', '收集结晶弹片强化 E 炮击，爆发高、对单极强，搭配钟离/班尼特出伤稳定。', 13
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '娜维娅');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '克洛琳德', '雷', 5, '主C · 突进', '元素战技 > 元素爆发 > 普通攻击', '谐律的异想 4件套', '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击', '枪剑突进站场输出，依赖雷草反应（激化/超载），灵活追击，纳塔前版本热门雷C。', 14
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '克洛琳德');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '玛薇卡', '火', 5, '主C · 火神', '元素爆发 > 元素战技 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击', '火神，Q 消耗夜魂值爆发高额火伤，E 持续后台挂火，纳塔体系绝对核心，配合希诺宁/茜特菈莉组建玛薇卡战舰。', 21
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '玛薇卡');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '丝柯克', '冰', 5, '主C · 冰水强队', '普通攻击 > 元素爆发 > 元素战技', '奇想乐章 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '冰水队核心主C，配合芙宁娜+爱可菲组建「丝柯克冰水队」，输出强力，纳塔版本另一输出强队。', 22
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '丝柯克');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '爱可菲', '冰', 5, '冰辅 · 减抗', '元素战技 > 元素爆发 > 普通攻击', '苍金之翼 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '盘活整个冰系的水冰减抗辅助，兼具不俗副C输出，是丝柯克等冰C的核心拐。', 23
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '爱可菲');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '恰斯卡', '风', 5, '主C · 多元素', '元素战技 > 元素爆发 > 普通攻击', '烬城勇者绘卷 4件套', '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击', '夜魂体系风C，E 状态下随队染色打出多元素伤害，泛用性强，纳塔热门主C。', 24
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '恰斯卡');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '菈乌玛', '草', 5, '月绽放 · 核心辅', '元素战技 > 元素爆发 > 普通攻击', '纺月的夜歌 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击', '月绽放体系核心辅助，挂草触发月绽放反应，是挪德卡莱「月」体系不可或缺的一环。', 31
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '菈乌玛');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '菲林斯', '雷', 5, '月感电 · 站场主C', '元素爆发 > 元素战技 > 普通攻击', '穹境视现之夜 4件套', '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击', '月感电站场主C，与伊涅芙组成「菲机」组合，驱动月感电反应，是挪德卡莱强力队伍之一。', 32
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '菲林斯');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '奈芙尔', '草', 5, '月绽放 · 站场主C', '普通攻击 > 元素爆发 > 元素战技', '纺月的夜歌 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击', '月绽放站场主C，与菈乌玛组成的月绽放队是挪德卡莱高金数「运钞车」队伍，追求伤害上限。', 33
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '奈芙尔');

-- =============================================================
-- 二、新增角色武器推荐
-- =============================================================
INSERT IGNORE INTO t_char_weapon (character_name, element, weapon_name, rarity, reason, sort_order) VALUES
('芙宁娜',   '水', '静水流涌之辉', 5, '专武，生命+增伤契合水神机制',             1),
('芙宁娜',   '水', '西风剑',       4, '充能副属性，帮助全队循环',               2),
('那维莱特', '水', '万世流涌大典', 5, '专武，重击伤害与生命收益极高',           1),
('那维莱特', '水', '祭礼残章',     4, '平民替代，副词条补充能',                 2),
('娜维娅',   '岩', '裁叶萃光',     5, '专武，结晶弹片增伤契合输出节奏',         1),
('娜维娅',   '岩', '千岩长枪',     4, '攻击+岩伤，平民选择',                   2),
('克洛琳德', '雷', '赦罪之锏',     5, '专武，突进输出与雷伤全面契合',           1),
('克洛琳德', '雷', '匣里龙吟',     4, '暴击副属性，缓解双暴压力',               2),
('玛薇卡',   '火', '赤沙之王',     5, '专武，火神Q爆发与夜魂体系完美契合',      1),
('玛薇卡',   '火', '狼末',         4, '攻击副属性，平民过渡',                   2),
('丝柯克',   '冰', '镜中月',       5, '专武，冰水体系核心输出武器',             1),
('丝柯克',   '冰', '黑剑',         4, '暴击副属性，纪行获取',                   2),
('爱可菲',   '冰', '终末嗟叹之诗', 5, '精通+充能+全队增益，辅助最优',           1),
('爱可菲',   '冰', '西风弓',       4, '充能副属性，帮助全队回能',               2),
('恰斯卡',   '风', '天空之刃',     5, '攻击+风伤，契合多元素输出',              1),
('恰斯卡',   '风', '铁蜂刺',       4, '精通副属性，锻造获取',                   2),
('菈乌玛',   '草', '纺夜天镜',     5, '专武，月绽放体系核心法器',               1),
('菈乌玛',   '草', '祭礼残章',     4, '精通副属性，平民过渡',                   2),
('菲林斯',   '雷', '血染荒城',     5, '专武，月感电输出核心长柄',               1),
('菲林斯',   '雷', '匣里龙吟',     4, '暴击副属性，缓解双暴压力',               2),
('奈芙尔',   '草', '纺夜天镜',     5, '专武，月绽放主C核心法器',               1),
('奈芙尔',   '草', '流浪的晚星',   4, '精通副属性，锻造入手',                   2);

-- =============================================================
-- 三、新增武器
-- =============================================================
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '静水流涌之辉', 5, '单手剑', '副属性：生命值', '基于生命上限提升元素战技伤害，契合水神芙宁娜的辅助机制。', 11
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '静水流涌之辉');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '万世流涌大典', 5, '法器', '副属性：暴击伤害', '重击蓄力伤害与生命值收益极高，那维莱特专属法器。', 12
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '万世流涌大典');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '裁叶萃光', 5, '双手剑', '副属性：攻击力', '强化结晶弹片伤害，娜维娅核心双手剑。', 13
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '裁叶萃光');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '赦罪之锏', 5, '单手剑', '副属性：暴击率', '突进输出与雷伤全面契合，克洛琳德专属武器。', 14
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '赦罪之锏');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '赤沙之王', 5, '双手剑', '副属性：暴击伤害', '火神玛薇卡专属，Q 爆发与夜魂体系完美契合。', 21
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '赤沙之王');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '镜中月', 5, '单手剑', '副属性：暴击伤害', '丝柯克核心武器，冰水体系输出上限极高。', 22
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '镜中月');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '终末嗟叹之诗', 5, '弓', '副属性：元素充能效率', '精通+充能+全队精通增益，辅助型角色的通用选择。', 23
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '终末嗟叹之诗');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '天空之刃', 5, '单手剑', '副属性：攻击力', '攻击+风伤，契合恰斯卡多元素输出。', 24
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '天空之刃');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '纺夜天镜', 5, '法器', '副属性：元素精通', '月绽放体系核心法器，菈乌玛与奈芙尔的专武。', 31
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '纺夜天镜');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '血染荒城', 5, '长柄武器', '副属性：暴击率', '月感电输出核心长柄，菲林斯专属武器。', 32
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '血染荒城');

-- =============================================================
-- 四、新增武器适配角色
-- =============================================================
INSERT IGNORE INTO t_weapon_user (weapon_name, user_name, sort_order) VALUES
('静水流涌之辉', '芙宁娜',     1), ('静水流涌之辉', '行秋',       2),
('万世流涌大典', '那维莱特',   1), ('万世流涌大典', '芭芭拉',     2),
('裁叶萃光',     '娜维娅',     1), ('裁叶萃光',     '诺艾尔',     2),
('赦罪之锏',     '克洛琳德',   1), ('赦罪之锏',     '刻晴',       2),
('赤沙之王',     '玛薇卡',     1), ('赤沙之王',     '迪希雅',     2),
('镜中月',       '丝柯克',     1), ('镜中月',       '神里绫华',   2),
('终末嗟叹之诗', '爱可菲',     1), ('终末嗟叹之诗', '温迪',       2), ('终末嗟叹之诗', '夜兰', 3),
('天空之刃',     '恰斯卡',     1), ('天空之刃',     '枫原万叶',   2),
('纺夜天镜',     '菈乌玛',     1), ('纺夜天镜',     '奈芙尔',     2), ('纺夜天镜', '纳西妲', 3),
('血染荒城',     '菲林斯',     1), ('血染荒城',     '赛诺',       2);

-- =============================================================
-- 五、新增队伍
-- =============================================================
INSERT INTO t_team (name, core, tip, sort_order)
SELECT '那维莱特纯水队', '重击水炮 · 纯色输出', '芙宁娜 Q 增伤 → 万叶扩散减抗 → 心海治疗保层 → 那维莱特重击蓄力水炮群伤。', 7
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '那维莱特纯水队');

INSERT INTO t_team (name, core, tip, sort_order)
SELECT '玛薇卡战舰', '火神爆发 · 纳塔体系', '希诺宁增岩 → 茜特菈莉挂冰 → 芙宁娜增伤 → 玛薇卡 Q 爆发收割，纳塔版本 T0 强队。', 8
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '玛薇卡战舰');

INSERT INTO t_team (name, core, tip, sort_order)
SELECT '丝柯克冰水队', '冰水冻结 · 双C输出', '爱可菲减抗 → 芙宁娜增伤挂水 → 塔利雅水盾 → 丝柯克站场输出，纳塔另一输出强队。', 9
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '丝柯克冰水队');

INSERT INTO t_team (name, core, tip, sort_order)
SELECT '娜维娅结晶队', '结晶弹片 · 爆发输出', '双岩共鸣 → 班尼特加攻 → 香菱挂火产结晶 → 娜维娅收集弹片 E 炮击爆发。', 10
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '娜维娅结晶队');

INSERT INTO t_team (name, core, tip, sort_order)
SELECT '月绽放队', '月绽放 · 高金数上限', '菈乌玛挂草触发月绽放 → 爱诺水兆 → 芙宁娜增伤 → 奈芙尔站场输出，挪德卡莱「运钞车」强队。', 11
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '月绽放队');

INSERT INTO t_team (name, core, tip, sort_order)
SELECT '菲机组合', '月感电 · 站场主C', '伊涅芙护盾+月感电 → 菈乌玛挂草 → 爱诺水兆 → 菲林斯站场驱动月感电反应。', 12
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_team WHERE name = '菲机组合');

-- =============================================================
-- 六、新增队伍成员
-- =============================================================
-- 那维莱特纯水队
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '那维莱特', '水', 1 FROM t_team WHERE name = '那维莱特纯水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '芙宁娜', '水', 2 FROM t_team WHERE name = '那维莱特纯水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '枫原万叶', '风', 3 FROM t_team WHERE name = '那维莱特纯水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '珊瑚宫心海', '水', 4 FROM t_team WHERE name = '那维莱特纯水队';

-- 玛薇卡战舰
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '玛薇卡', '火', 1 FROM t_team WHERE name = '玛薇卡战舰';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '希诺宁', '岩', 2 FROM t_team WHERE name = '玛薇卡战舰';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '茜特菈莉', '冰', 3 FROM t_team WHERE name = '玛薇卡战舰';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '芙宁娜', '水', 4 FROM t_team WHERE name = '玛薇卡战舰';

-- 丝柯克冰水队
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '丝柯克', '冰', 1 FROM t_team WHERE name = '丝柯克冰水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '芙宁娜', '水', 2 FROM t_team WHERE name = '丝柯克冰水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '爱可菲', '冰', 3 FROM t_team WHERE name = '丝柯克冰水队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '塔利雅', '水', 4 FROM t_team WHERE name = '丝柯克冰水队';

-- 娜维娅结晶队
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '娜维娅', '岩', 1 FROM t_team WHERE name = '娜维娅结晶队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '钟离', '岩', 2 FROM t_team WHERE name = '娜维娅结晶队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '班尼特', '火', 3 FROM t_team WHERE name = '娜维娅结晶队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '香菱', '火', 4 FROM t_team WHERE name = '娜维娅结晶队';

-- 月绽放队
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '奈芙尔', '草', 1 FROM t_team WHERE name = '月绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '菈乌玛', '草', 2 FROM t_team WHERE name = '月绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '芙宁娜', '水', 3 FROM t_team WHERE name = '月绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '爱诺', '水', 4 FROM t_team WHERE name = '月绽放队';

-- 菲机组合
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '菲林斯', '雷', 1 FROM t_team WHERE name = '菲机组合';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '伊涅芙', '雷', 2 FROM t_team WHERE name = '菲机组合';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '菈乌玛', '草', 3 FROM t_team WHERE name = '菲机组合';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '爱诺', '水', 4 FROM t_team WHERE name = '菲机组合';
