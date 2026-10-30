-- =============================================================
-- 原神 Demo —— 一键建库建表脚本（用户表 + 首页模块全量）
-- 数据库: genshin_db    用户名: root    密码: 123456
--
-- 一条命令即可完成「建库 + 建表 + 初始数据」：
--   mysql -uroot -p123456 --default-character-set=utf8mb4 < init_home.sql
--
-- 说明：
--   - 建库/建表均使用 IF NOT EXISTS，可重复执行
--   - 主表数据用 NOT EXISTS 判断，不会覆盖已有数据
--   - 子表数据用 INSERT IGNORE，依靠唯一键防重复
--
-- 包含内容：
--   1. t_user           用户表（示例账号 traveler / paimon，密码 123456）
--   2. t_character      角色养成攻略
--   3. t_char_weapon    角色武器推荐
--   4. t_weapon         武器养成攻略
--   5. t_weapon_user    武器适配角色
--   6. t_team           角色队伍推荐
--   7. t_team_member    队伍成员
-- =============================================================

CREATE DATABASE IF NOT EXISTS genshin_db
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_general_ci;

USE genshin_db;

-- =============================================================
-- 1. 用户表
-- =============================================================
CREATE TABLE IF NOT EXISTS t_user (
    id          BIGINT       NOT NULL AUTO_INCREMENT COMMENT '主键',
    username    VARCHAR(50)  NOT NULL                COMMENT '旅行者账号(唯一)',
    password    VARCHAR(100) NOT NULL                COMMENT '密码(BCrypt密文)',
    nickname    VARCHAR(50)  NULL                    COMMENT '昵称, 注册时默认等于账号',
    nation      VARCHAR(20)  NULL                    COMMENT '所属国度: 蒙德/璃月/稻妻/须弥/枫丹/纳塔/至冬',
    status      TINYINT      NOT NULL DEFAULT 1      COMMENT '状态: 1-正常 0-封禁',
    create_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (id),
    UNIQUE KEY uk_username (username)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci
  COMMENT = '旅行者(用户)表';

INSERT INTO t_user (username, password, nickname, nation, status)
SELECT 'traveler', '$2a$10$Hdd/CpTjIM275SamMofic.bNWmqL1ewDoy6KhKjRdAaHspW6f5682', 'traveler', '蒙德', 1
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_user WHERE username = 'traveler');

INSERT INTO t_user (username, password, nickname, nation, status)
SELECT 'paimon', '$2a$10$tQ/Db2XNsWXcpzpmUyCb4uhhckKGAoBgH881/0TY4fJL1NOCzzZJu', 'paimon', '璃月', 1
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_user WHERE username = 'paimon');

-- =============================================================
-- 2. 角色养成攻略
-- =============================================================
CREATE TABLE IF NOT EXISTS t_character (
    id          BIGINT       NOT NULL AUTO_INCREMENT COMMENT '主键',
    name        VARCHAR(50)  NOT NULL                COMMENT '角色名',
    element     VARCHAR(10)  NOT NULL                COMMENT '元素: 风/岩/雷/草/水/火/冰',
    rarity      TINYINT      NOT NULL DEFAULT 5      COMMENT '星级 4/5',
    role_name   VARCHAR(50)  NULL                    COMMENT '定位, 如 主C · 蒸发',
    talents     VARCHAR(200) NULL                    COMMENT '天赋升级顺序',
    artifacts   VARCHAR(100) NULL                    COMMENT '圣遗物推荐',
    main_stats  VARCHAR(200) NULL                    COMMENT '主词条推荐',
    summary     VARCHAR(500) NULL                    COMMENT '一句话攻略',
    sort_order  INT          NOT NULL DEFAULT 0      COMMENT '排序, 小的在前',
    status      TINYINT      NOT NULL DEFAULT 1      COMMENT '状态: 1-显示 0-隐藏',
    create_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (id),
    UNIQUE KEY uk_character_name (name),
    KEY idx_character_element (element)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci
  COMMENT = '角色养成攻略';

-- =============================================================
-- 3. 角色武器推荐（一个角色一行推荐武器）
-- =============================================================
CREATE TABLE IF NOT EXISTS t_char_weapon (
    id             BIGINT      NOT NULL AUTO_INCREMENT COMMENT '主键',
    character_name VARCHAR(50) NOT NULL                COMMENT '角色名(冗余, 便于搜索与分组)',
    element        VARCHAR(10) NOT NULL                COMMENT '角色元素',
    weapon_name    VARCHAR(50) NOT NULL                COMMENT '推荐武器名',
    rarity         TINYINT     NOT NULL DEFAULT 5      COMMENT '武器星级',
    reason         VARCHAR(300) NULL                   COMMENT '推荐理由',
    sort_order     INT         NOT NULL DEFAULT 0      COMMENT '排序, 小的更推荐',
    PRIMARY KEY (id),
    UNIQUE KEY uk_cw (character_name, weapon_name),
    KEY idx_cw_character (character_name)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci
  COMMENT = '角色武器推荐';

-- =============================================================
-- 4. 武器养成攻略
-- =============================================================
CREATE TABLE IF NOT EXISTS t_weapon (
    id          BIGINT      NOT NULL AUTO_INCREMENT COMMENT '主键',
    name        VARCHAR(50) NOT NULL                COMMENT '武器名',
    rarity      TINYINT     NOT NULL DEFAULT 5      COMMENT '星级',
    type        VARCHAR(20) NOT NULL                COMMENT '类型: 单手剑/双手剑/长柄武器/法器/弓',
    stat        VARCHAR(50) NULL                    COMMENT '副属性',
    description VARCHAR(500) NULL                   COMMENT '武器效果描述',
    sort_order  INT         NOT NULL DEFAULT 0      COMMENT '排序',
    status      TINYINT     NOT NULL DEFAULT 1      COMMENT '状态: 1-显示 0-隐藏',
    create_time DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (id),
    UNIQUE KEY uk_weapon_name (name),
    KEY idx_weapon_type (type)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci
  COMMENT = '武器养成攻略';

-- =============================================================
-- 5. 武器适配角色（一件武器对应多个角色）
-- =============================================================
CREATE TABLE IF NOT EXISTS t_weapon_user (
    id          BIGINT      NOT NULL AUTO_INCREMENT COMMENT '主键',
    weapon_name VARCHAR(50) NOT NULL                COMMENT '武器名',
    user_name   VARCHAR(50) NOT NULL                COMMENT '适配角色名',
    sort_order  INT         NOT NULL DEFAULT 0      COMMENT '排序',
    PRIMARY KEY (id),
    UNIQUE KEY uk_wu (weapon_name, user_name),
    KEY idx_wu_weapon (weapon_name)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci
  COMMENT = '武器适配角色';

-- =============================================================
-- 6. 角色队伍推荐
-- =============================================================
CREATE TABLE IF NOT EXISTS t_team (
    id         BIGINT      NOT NULL AUTO_INCREMENT COMMENT '主键',
    name       VARCHAR(50) NOT NULL                COMMENT '队伍名',
    core       VARCHAR(100) NULL                   COMMENT '核心机制',
    tip        VARCHAR(500) NULL                   COMMENT '输出手法/要点',
    sort_order INT         NOT NULL DEFAULT 0      COMMENT '排序',
    status     TINYINT     NOT NULL DEFAULT 1      COMMENT '状态: 1-显示 0-隐藏',
    create_time DATETIME   NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME   NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (id),
    UNIQUE KEY uk_team_name (name)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci
  COMMENT = '角色队伍推荐';

-- =============================================================
-- 7. 队伍成员（一个队伍四个位置）
-- =============================================================
CREATE TABLE IF NOT EXISTS t_team_member (
    id          BIGINT      NOT NULL AUTO_INCREMENT COMMENT '主键',
    team_id     BIGINT      NOT NULL                COMMENT '所属队伍 id',
    member_name VARCHAR(50) NOT NULL                COMMENT '成员角色名',
    element     VARCHAR(10) NOT NULL                COMMENT '成员元素',
    sort_order  INT         NOT NULL DEFAULT 0      COMMENT '位置顺序',
    PRIMARY KEY (id),
    UNIQUE KEY uk_tm (team_id, member_name),
    KEY idx_tm_team (team_id)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci
  COMMENT = '队伍成员';

-- =============================================================
-- 以下为初始数据
-- =============================================================

-- ---------------- 角色（8 位） ----------------
INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '胡桃', '火', 5, '主C · 蒸发', '普通攻击 > 元素爆发 > 元素战技', '炽烈的炎之魔女 4件套', '时之沙：生命% / 空之杯：火伤% / 理之冠：暴击', 'E 技能生命转攻击，重击蒸发打出高额伤害，注意控血与行秋/夜兰挂水。', 1
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '胡桃');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '钟离', '岩', 5, '盾辅 · 减抗', '元素战技 > 元素爆发 > 普通攻击', '千岩牢固 4件套', '时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%', '长按 E 生成玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。', 2
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '钟离');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '纳西妲', '草', 5, '副C · 草辅', '元素战技 > 元素爆发 > 普通攻击', '深林的记忆 4件套', '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击', 'E 全场挂草 + Q 增伤，绽放/激化队伍核心，精通收益极高。', 3
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '纳西妲');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '雷电将军', '雷', 5, '主C · 充能辅', '元素爆发 > 元素战技 > 普通攻击', '绝缘之旗印 4件套', '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击', 'Q 高爆发 + 全队充能，充能效率 230%+ 后叠双暴，开大期间无敌帧多。', 4
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '雷电将军');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '神里绫华', '冰', 5, '主C · 永冻', '普通攻击 > 元素爆发 > 元素战技', '冰风迷途的勇士 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '重击 + Q 站场输出，配合莫娜/心海挂水实现永冻，霰步贴近开怪。', 5
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '神里绫华');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '甘雨', '冰', 5, '主C · 蓄力狙', '普通攻击 > 元素爆发 > 元素战技', '冰风迷途的勇士 4件套', '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击', '重击霜华矢范围二段伤害，操作上限高，怕打断可带盾辅。', 6
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '甘雨');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '枫原万叶', '风', 5, '聚怪 · 增伤辅', '元素战技 > 元素爆发 > 普通攻击', '翠绿之影 4件套', '时之沙：精通 / 空之杯：精通 / 理之冠：精通', 'E 聚怪 + 扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。', 7
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '枫原万叶');

INSERT INTO t_character (name, element, rarity, role_name, talents, artifacts, main_stats, summary, sort_order)
SELECT '温迪', '风', 5, '聚怪 · 充能辅', '元素爆发 > 元素战技 > 普通攻击', '翠绿之影 4件套', '时之沙：精通 / 空之杯：精通 / 理之冠：暴击', 'Q 大范围聚怪控场，对群环境无可替代，充能 160%+ 循环流畅。', 8
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_character WHERE name = '温迪');

-- ---------------- 角色武器推荐（8 角色 × 2 把） ----------------
INSERT IGNORE INTO t_char_weapon (character_name, element, weapon_name, rarity, reason, sort_order) VALUES
('胡桃',     '火', '护摩之杖',     5, '生命转攻，完美契合低血输出机制',           1),
('胡桃',     '火', '决斗之枪',     4, '纪行免费获取，暴击率副属性缓解双暴压力',   2),
('钟离',     '岩', '黑缨枪',       3, '生命%副属性，护盾量直接拉满，性价比之王',   1),
('钟离',     '岩', '贯虹之槊',     5, '泛用五星长柄，攻击力提升盾伤与Q伤害',       2),
('纳西妲',   '草', '千夜浮梦',     5, '专武，精通+全队元素增益',                   1),
('纳西妲',   '草', '流浪的晚星',   4, '精通副属性，锻造即可入手',                 2),
('雷电将军', '雷', '薙草之稻光',   5, '专武，充能转攻击，爆发收益极高',           1),
('雷电将军', '雷', '渔获',         4, '钓鱼免费兑换，充能+Q增伤，平民神器',       2),
('神里绫华', '冰', '雾切之回光',   5, '专武，冰伤加成与普攻增伤全面契合',         1),
('神里绫华', '冰', '天目影打刀',   4, '稻妻锻造，充能缓解Q启动压力',             2),
('甘雨',     '冰', '阿莫斯之弓',   5, '蓄力箭增伤，霜华矢二段全额吃到',           1),
('甘雨',     '冰', '破魔之弓',     4, '锻造获取，满能量重击增伤 32%',             2),
('枫原万叶', '风', '苍古自由之誓', 5, '精通+全队普攻/重击增伤',                   1),
('枫原万叶', '风', '铁蜂刺',       4, '锻造获取，精通副属性扩散收益稳定',         2),
('温迪',     '风', '终末嗟叹之诗', 5, '精通+充能+全队精通增益，辅助最优',         1),
('温迪',     '风', '西风猎弓',     4, '充能副属性，帮助全队回能',                 2);

-- ---------------- 武器（8 件） ----------------
INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '护摩之杖', 5, '长柄武器', '副属性：暴击伤害', '生命值提升 20%；基于生命上限的 0.8% 获得攻击力加成。', 1
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '护摩之杖');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '雾切之回光', 5, '单手剑', '副属性：暴击伤害', '获得元素伤害加成，普攻命中叠层进一步提高冰伤。', 2
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '雾切之回光');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '阿莫斯之弓', 5, '弓', '副属性：攻击力', '普通攻击与瞄准射击伤害提升，箭矢飞行每 0.1s 再增伤 8%。', 3
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '阿莫斯之弓');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '薙草之稻光', 5, '长柄武器', '副属性：元素充能效率', '充能效率超过 100% 的部分，每 1% 转换为 0.4% 攻击力。', 4
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '薙草之稻光');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '苍古自由之誓', 5, '单手剑', '副属性：元素精通', '触发元素反应后，全队普通攻击/重击伤害提升，持续 12s。', 5
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '苍古自由之誓');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '千夜浮梦', 5, '法器', '副属性：元素精通', '按队伍元素类型数量提供精通与全队元素伤害加成。', 6
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '千夜浮梦');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '和璞鸢', 5, '长柄武器', '副属性：暴击率', '命中叠层提高攻击力，满层额外增伤，持续站场收益最大。', 7
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '和璞鸢');

INSERT INTO t_weapon (name, rarity, type, stat, description, sort_order)
SELECT '磐岩结绿', 5, '单手剑', '副属性：暴击率', '生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。', 8
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM t_weapon WHERE name = '磐岩结绿');

-- ---------------- 武器适配角色 ----------------
INSERT IGNORE INTO t_weapon_user (weapon_name, user_name, sort_order) VALUES
('护摩之杖',     '胡桃',     1), ('护摩之杖',     '魈',       2), ('护摩之杖',     '仆人',     3),
('雾切之回光',   '神里绫华', 1), ('雾切之回光',   '神里绫人', 2), ('雾切之回光',   '刻晴',     3),
('阿莫斯之弓',   '甘雨',     1), ('阿莫斯之弓',   '提纳里',   2), ('阿莫斯之弓',   '宵宫',     3),
('薙草之稻光',   '雷电将军', 1), ('薙草之稻光',   '香菱',     2), ('薙草之稻光',   '申鹤',     3),
('苍古自由之誓', '枫原万叶', 1), ('苍古自由之誓', '久岐忍',   2), ('苍古自由之誓', '琴',       3),
('千夜浮梦',     '纳西妲',   1), ('千夜浮梦',     '砂糖',     2), ('千夜浮梦',     '八重神子', 3),
('和璞鸢',       '魈',       1), ('和璞鸢',       '罗莎莉亚', 2), ('和璞鸢',       '胡桃',     3),
('磐岩结绿',     '神里绫人', 1), ('磐岩结绿',     '刻晴',     2), ('磐岩结绿',     '班尼特',   3);

-- ---------------- 队伍（6 套） ----------------
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

-- ---------------- 队伍成员（每队 4 人） ----------------
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '胡桃',     '火', 1 FROM t_team WHERE name = '胡桃蒸发队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '行秋',     '水', 2 FROM t_team WHERE name = '胡桃蒸发队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '枫原万叶', '风', 3 FROM t_team WHERE name = '胡桃蒸发队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '钟离',     '岩', 4 FROM t_team WHERE name = '胡桃蒸发队';

INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '雷电将军', '雷', 1 FROM t_team WHERE name = '雷九万班';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '九条裟罗', '雷', 2 FROM t_team WHERE name = '雷九万班';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '枫原万叶', '风', 3 FROM t_team WHERE name = '雷九万班';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '班尼特',   '火', 4 FROM t_team WHERE name = '雷九万班';

INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '神里绫华',   '冰', 1 FROM t_team WHERE name = '神鹤万心（永冻）';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '申鹤',       '冰', 2 FROM t_team WHERE name = '神鹤万心（永冻）';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '枫原万叶',   '风', 3 FROM t_team WHERE name = '神鹤万心（永冻）';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '珊瑚宫心海', '水', 4 FROM t_team WHERE name = '神鹤万心（永冻）';

INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '纳西妲',      '草', 1 FROM t_team WHERE name = '纳西妲绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '妮露',        '水', 2 FROM t_team WHERE name = '纳西妲绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '夜兰',        '水', 3 FROM t_team WHERE name = '纳西妲绽放队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '旅行者(草)',  '草', 4 FROM t_team WHERE name = '纳西妲绽放队';

INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '甘雨',   '冰', 1 FROM t_team WHERE name = '甘雨永冻队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '莫娜',   '水', 2 FROM t_team WHERE name = '甘雨永冻队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '温迪',   '风', 3 FROM t_team WHERE name = '甘雨永冻队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '迪奥娜', '冰', 4 FROM t_team WHERE name = '甘雨永冻队';

INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '香菱',   '火', 1 FROM t_team WHERE name = '国家队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '行秋',   '水', 2 FROM t_team WHERE name = '国家队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '班尼特', '火', 3 FROM t_team WHERE name = '国家队';
INSERT IGNORE INTO t_team_member (team_id, member_name, element, sort_order)
SELECT id, '重云',   '冰', 4 FROM t_team WHERE name = '国家队';
