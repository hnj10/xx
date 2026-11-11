-- =============================================================
-- 补齐 243 把三星及以上武器 + 角色/队伍武器推荐 + 新圣遗物上角色推荐
-- 由 gen_weapon_243.mjs 生成，可重复执行（ON DUPLICATE KEY / INSERT IGNORE）
-- =============================================================
USE genshin_db;

-- ---------- 1. 新增武器图鉴（含 1/90 级白值、副词条、被动） ----------
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('鹤鸣余音',5,'法器','副属性：攻击力',46,608,'攻击力','49.6%','施放元素战技后全队下落攻击伤害提升，并回复元素能量，风系下落队核心辅助武器。',900,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('柔灯挽歌',5,'长柄武器','副属性：暴击伤害',48,674,'暴击伤害','44.1%','触发燃烧相关反应后提升攻击力与元素伤害，草火体系后台副C适用。',901,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('山王长牙',5,'双手剑','副属性：暴击伤害',48,674,'暴击伤害','44.1%','元素战技命中后叠层提升暴击伤害与攻击力，夜魂/燃烧主C适用。',902,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('星鹫赤羽',5,'弓','副属性：暴击伤害',48,674,'暴击伤害','44.1%','队伍中存在多种元素时提升重击与元素战技伤害，多元素队主C适用。',903,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('祭星者之望',5,'法器','副属性：元素精通',46,608,'元素精通','198','施放元素爆发后全队元素精通提升，护盾辅助与反应队核心武器。',904,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('寝正月初晴',5,'法器','副属性：暴击伤害',48,674,'暴击伤害','44.1%','触发扩散反应后提升全队对应元素伤害，风系扩散副C适用。',905,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('香韵奏者',5,'长柄武器','副属性：攻击力',46,608,'攻击力','49.6%','队伍中冰/水角色触发冻结后提升全队攻击力，冰队增伤辅助武器。',906,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('苍耀',5,'单手剑','副属性：暴击伤害',48,674,'暴击伤害','44.1%','不依赖元素能量的站场冰C专武，元素战技后大幅提升普攻与爆发伤害。',907,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('支离轮光',5,'长柄武器','副属性：暴击率',48,674,'暴击率','22.1%','触发月感电/感电反应后提升攻击力与暴击伤害，雷水体系适用。',908,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('真语秘匣',5,'法器','副属性：暴击率',48,674,'暴击率','22.1%','触发月绽放后提升元素精通与暴击伤害，绽放站场主C适用。',909,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('裁断',5,'长柄武器','副属性：暴击伤害',48,674,'暴击伤害','44.1%','元素爆发期间提升攻击力与暴击伤害，长轴站场输出适用。',910,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('无垠蔚蓝之歌',4,'法器','副属性：元素充能效率',44,565,'元素充能效率','30.6%','活动限定法器，施放元素爆发后提升全队元素伤害与充能循环。',911,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('晨曦之誓',5,'单手剑','副属性：暴击率',48,674,'暴击率','22.1%','触发激化/超激化后叠加暴击率与元素伤害，雷草站场主C适用。',912,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('霜庭之刃',5,'单手剑','副属性：暴击伤害',48,674,'暴击伤害','44.1%','攻击冻结或受冰影响的敌人时提升暴击伤害，永冻冰C专武。',913,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('星语短剑',4,'单手剑','副属性：元素充能效率',44,565,'元素充能效率','30.6%','施放元素战技后为全队回复元素能量，脱手挂元素辅助适用。',914,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('烬城之钥',5,'单手剑','副属性：攻击力',46,608,'攻击力','49.6%','双持站场时提升攻击速度与攻击力，纳塔体系近战主C适用。',915,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('月桂的证言',4,'单手剑','副属性：元素精通',42,510,'元素精通','165','触发扩散/激化后提升全队元素精通，精通型辅助适用。',916,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('碎星之骸',5,'双手剑','副属性：暴击伤害',48,674,'暴击伤害','44.1%','基于防御力或生命上限提升重击伤害，防御型站场C适用。',917,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('赤焰王座',5,'双手剑','副属性：攻击力',46,608,'攻击力','49.6%','消耗夜魂值/战意后大幅提升攻击力与火伤，火神体系主C适用。',918,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('霜噬巨刃',4,'双手剑','副属性：物理伤害加成',44,565,'物理伤害加成','34.5%','触发超导后提升物理伤害与攻击速度，物理重击队适用。',919,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('烬城重锤',4,'双手剑','副属性：元素充能效率',44,565,'元素充能效率','30.6%','施放元素爆发后提升全队攻击力，脱手爆发副C适用。',920,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('星陨巨剑',5,'双手剑','副属性：暴击率',48,674,'暴击率','22.1%','元素战技命中后叠加暴击率，三段战技与蓄力输出适用。',921,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('苍穹之楔',5,'长柄武器','副属性：暴击伤害',48,674,'暴击伤害','44.1%','下落攻击与元素爆发伤害提升，长轴站场长柄主C适用。',922,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('幽夜的裁决',5,'长柄武器','副属性：暴击率',48,674,'暴击率','22.1%','元素爆发期间持续提升暴击率与攻击力，长轴激化主C适用。',923,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('星陨之枪',4,'长柄武器','副属性：元素充能效率',44,565,'元素充能效率','30.6%','元素爆发命中后为全队回复元素能量，脱手循环辅助适用。',924,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('月轮之誓',4,'长柄武器','副属性：元素精通',42,510,'元素精通','165','触发绽放/燃烧后提升元素精通，草火反应辅助适用。',925,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('霜华之矛',5,'长柄武器','副属性：攻击力',46,608,'攻击力','49.6%','基于攻击力为全队提供冰伤加成，冰系增伤辅助适用。',926,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('星轨秘录',5,'法器','副属性：暴击伤害',48,674,'暴击伤害','44.1%','触发元素反应后叠加暴击伤害与元素精通，反应型法器主C适用。',927,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('月辉之书',5,'法器','副属性：元素精通',46,608,'元素精通','198','触发月绽放/激化后提升全队元素精通，草系核心辅助适用。',928,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('霜华咏叹',4,'法器','副属性：攻击力',42,510,'攻击力','41.3%','重击命中后叠加攻击力，重击站场法器主C适用。',929,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('烬城秘典',4,'法器','副属性：元素充能效率',44,565,'元素充能效率','30.6%','施放元素爆发后提升全队元素伤害，增伤辅助适用。',930,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('晨星绪论',5,'法器','副属性：暴击率',48,674,'暴击率','22.1%','站场期间持续叠加暴击率与普攻伤害，法器站场主C适用。',931,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('逐星之矢',5,'弓','副属性：暴击伤害',48,674,'暴击伤害','44.1%','重击与蓄力箭命中后叠加暴击伤害，蓄力弓主C适用。',932,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('霜羽长弓',5,'弓','副属性：攻击力',46,608,'攻击力','49.6%','攻击受冰影响敌人时提升攻击力与暴击率，冰系弓C适用。',933,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('烬城猎弓',4,'弓','副属性：元素精通',42,510,'元素精通','165','触发扩散后提升全队元素精通与元素伤害，风系聚怪辅助适用。',934,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('幽夜回响',4,'弓','副属性：元素充能效率',44,565,'元素充能效率','30.6%','施放元素爆发后为全队回复能量，后台挂元素辅助适用。',935,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('星海之笺',5,'弓','副属性：暴击率',48,674,'暴击率','22.1%','普攻与断流命中后叠加暴击率，高频站场弓C适用。',936,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('月影之弦',4,'弓','副属性：物理伤害加成',44,565,'物理伤害加成','34.5%','重击与蓄力箭提升物理伤害，物理弓过渡输出适用。',937,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;
INSERT INTO t_weapon (name,rarity,type,stat,atk1,atk90,sub_stat,sub_value,description,sort_order,status) VALUES
  ('星穹之弦',5,'弓','副属性：元素充能效率',46,608,'元素充能效率','55.1%','施放元素爆发后为全队回复能量并提升后台伤害，充能辅助弓适用。',938,1)
  ON DUPLICATE KEY UPDATE rarity=VALUES(rarity),type=VALUES(type),stat=VALUES(stat),atk1=VALUES(atk1),atk90=VALUES(atk90),sub_stat=VALUES(sub_stat),sub_value=VALUES(sub_value),description=VALUES(description),status=1;

-- ---------- 2. 角色武器推荐：全量同步，保证后端接口与前端兜底完全一致 ----------
DELETE FROM t_char_weapon WHERE (character_name, weapon_name) NOT IN (
  ('迪卢克','狼的末路'),
  ('迪卢克','螭骨剑'),
  ('迪卢克','山王长牙'),
  ('迪卢克','赤焰王座'),
  ('迪卢克','星陨巨剑'),
  ('迪卢克','烬城重锤'),
  ('可莉','四风原典'),
  ('可莉','流浪乐章'),
  ('可莉','真语秘匣'),
  ('可莉','霜华咏叹'),
  ('可莉','晨星绪论'),
  ('胡桃','护摩之杖'),
  ('胡桃','决斗之枪'),
  ('宵宫','飞雷之弦振'),
  ('宵宫','弓藏'),
  ('宵宫','星海之笺'),
  ('林尼','冬极白星'),
  ('林尼','破魔之弓'),
  ('阿蕾奇诺','赤沙之王'),
  ('阿蕾奇诺','决斗之枪'),
  ('玛薇卡','赤沙之王'),
  ('玛薇卡','狼的末路'),
  ('玛薇卡','赤焰王座'),
  ('班尼特','天空之刃'),
  ('班尼特','西风剑'),
  ('班尼特','星语短剑'),
  ('香菱','护摩之杖'),
  ('香菱','渔获'),
  ('香菱','柔灯挽歌'),
  ('香菱','裁断'),
  ('香菱','星陨之枪'),
  ('香菱','月轮之誓'),
  ('达达利亚','冬极白星'),
  ('达达利亚','弓藏'),
  ('达达利亚','星海之笺'),
  ('珊瑚宫心海','不灭月华'),
  ('珊瑚宫心海','西风秘典'),
  ('神里绫人','波乱月白经津'),
  ('神里绫人','黑剑'),
  ('夜兰','若水'),
  ('夜兰','西风猎弓'),
  ('夜兰','逐星之矢'),
  ('夜兰','幽夜回响'),
  ('夜兰','星穹之弦'),
  ('妮露','圣显之钥'),
  ('妮露','西风剑'),
  ('那维莱特','万世流涌大典'),
  ('那维莱特','祭礼残章'),
  ('芙宁娜','静水流涌之辉'),
  ('芙宁娜','西风剑'),
  ('玛拉妮','万世流涌大典'),
  ('玛拉妮','流浪乐章'),
  ('行秋','祭礼剑'),
  ('行秋','西风剑'),
  ('行秋','星语短剑'),
  ('刻晴','雾切之回光'),
  ('刻晴','黑剑'),
  ('刻晴','苍耀'),
  ('刻晴','晨曦之誓'),
  ('雷电将军','薙草之稻光'),
  ('雷电将军','渔获'),
  ('雷电将军','香韵奏者'),
  ('雷电将军','裁断'),
  ('雷电将军','幽夜的裁决'),
  ('雷电将军','星陨之枪'),
  ('八重神子','神乐之真意'),
  ('八重神子','流浪乐章'),
  ('八重神子','寝正月初晴'),
  ('八重神子','星轨秘录'),
  ('赛诺','赤沙之杖'),
  ('赛诺','决斗之枪'),
  ('赛诺','支离轮光'),
  ('赛诺','裁断'),
  ('赛诺','幽夜的裁决'),
  ('赛诺','苍穹之楔'),
  ('克洛琳德','赦罪之锏'),
  ('克洛琳德','匣里龙吟'),
  ('瓦蕾莎','赤沙之王'),
  ('瓦蕾莎','决斗之枪'),
  ('菲林斯','血染荒城'),
  ('菲林斯','匣里龙吟'),
  ('菲谢尔','天空之翼'),
  ('菲谢尔','绝弦'),
  ('菲谢尔','星鹫赤羽'),
  ('菲谢尔','霜羽长弓'),
  ('菲谢尔','月影之弦'),
  ('久岐忍','铁蜂刺'),
  ('久岐忍','西风剑'),
  ('久岐忍','月桂的证言'),
  ('七七','天空之刃'),
  ('七七','祭礼剑'),
  ('甘雨','阿莫斯之弓'),
  ('甘雨','破魔之弓'),
  ('甘雨','星鹫赤羽'),
  ('甘雨','逐星之矢'),
  ('优菈','松籁响起之时'),
  ('优菈','雪葬的星银'),
  ('优菈','碎星之骸'),
  ('优菈','霜噬巨刃'),
  ('神里绫华','雾切之回光'),
  ('神里绫华','天目影打刀'),
  ('神里绫华','苍耀'),
  ('神里绫华','霜庭之刃'),
  ('申鹤','息灾'),
  ('申鹤','西风长枪'),
  ('申鹤','香韵奏者'),
  ('申鹤','霜华之矛'),
  ('莱欧斯利','镜中月'),
  ('莱欧斯利','黑剑'),
  ('莱欧斯利','霜庭之刃'),
  ('茜特菈莉','天空之刃'),
  ('茜特菈莉','西风剑'),
  ('爱可菲','终末嗟叹之诗'),
  ('爱可菲','西风弓'),
  ('丝柯克','镜中月'),
  ('丝柯克','黑剑'),
  ('丝柯克','苍耀'),
  ('琴','天空之刃'),
  ('琴','西风剑'),
  ('琴','烬城之钥'),
  ('温迪','终末嗟叹之诗'),
  ('温迪','西风猎弓'),
  ('温迪','烬城猎弓'),
  ('温迪','星穹之弦'),
  ('魈','和璞鸢'),
  ('魈','决斗之枪'),
  ('魈','支离轮光'),
  ('魈','苍穹之楔'),
  ('枫原万叶','苍古自由之誓'),
  ('枫原万叶','铁蜂刺'),
  ('枫原万叶','月桂的证言'),
  ('流浪者','四风原典'),
  ('流浪者','流浪乐章'),
  ('流浪者','真语秘匣'),
  ('流浪者','晨星绪论'),
  ('闲云','天空之卷'),
  ('闲云','西风秘典'),
  ('闲云','鹤鸣余音'),
  ('恰斯卡','天空之刃'),
  ('恰斯卡','铁蜂刺'),
  ('钟离','黑缨枪'),
  ('钟离','贯虹之槊'),
  ('阿贝多','磐岩结绿'),
  ('阿贝多','西风剑'),
  ('荒泷一斗','赤角石溃杵'),
  ('荒泷一斗','螭骨剑'),
  ('荒泷一斗','山王长牙'),
  ('荒泷一斗','碎星之骸'),
  ('娜维娅','裁叶萃光'),
  ('娜维娅','千岩长枪'),
  ('希诺宁','磐岩结绿'),
  ('希诺宁','西风剑'),
  ('凝光','四风原典'),
  ('凝光','流浪乐章'),
  ('凝光','霜华咏叹'),
  ('提纳里','猎人之径'),
  ('提纳里','绝弦'),
  ('提纳里','逐星之矢'),
  ('纳西妲','千夜浮梦'),
  ('纳西妲','流浪的晚星'),
  ('纳西妲','祭星者之望'),
  ('纳西妲','星轨秘录'),
  ('纳西妲','月辉之书'),
  ('纳西妲','鹤鸣余音'),
  ('艾尔海森','图莱杜拉的回忆'),
  ('艾尔海森','铁蜂刺'),
  ('白术','不灭月华'),
  ('白术','西风秘典'),
  ('白术','祭星者之望'),
  ('白术','烬城秘典'),
  ('白术','无垠蔚蓝之歌'),
  ('艾梅莉埃','纺夜天镜'),
  ('艾梅莉埃','流浪的晚星'),
  ('基尼奇','纺夜天镜'),
  ('基尼奇','流浪的晚星'),
  ('菈乌玛','纺夜天镜'),
  ('菈乌玛','祭礼残章'),
  ('菈乌玛','月辉之书'),
  ('奈芙尔','纺夜天镜'),
  ('奈芙尔','流浪的晚星'),
  ('奈芙尔','真语秘匣'),
  ('法尔伽','狼的武功歌'),
  ('法尔伽','天空之傲'),
  ('法尔伽','星陨巨剑'),
  ('尼可','尘光七谕'),
  ('尼可','西风秘典'),
  ('杜林','黑蚀'),
  ('杜林','流浪乐章'),
  ('兹白','朏魄含光'),
  ('兹白','磐岩结绿'),
  ('洛恩','灾悔'),
  ('洛恩','决斗之枪'),
  ('布伦妮','天空之卷'),
  ('布伦妮','流浪乐章'),
  ('奥黛塔','白湖冬羽'),
  ('奥黛塔','雾切之回光'),
  ('阿罗夏','西风长枪'),
  ('阿罗夏','渔获'),
  ('薇斯纳','蝶变'),
  ('薇斯纳','雾切之回光'),
  ('沃雅妮莎','漩流颂歌'),
  ('沃雅妮莎','不灭月华'),
  ('米提亚','蝶变'),
  ('米提亚','流浪乐章'),
  ('瓦列里','西风剑'),
  ('瓦列里','匣里龙吟'),
  ('迪希雅','赤沙之王'),
  ('迪希雅','螭骨剑'),
  ('安柏','天空之翼'),
  ('安柏','破魔之弓'),
  ('安柏','月影之弦'),
  ('辛焱','赤角石溃杵'),
  ('辛焱','白影剑'),
  ('辛焱','霜噬巨刃'),
  ('烟绯','四风原典'),
  ('烟绯','流浪乐章'),
  ('烟绯','寝正月初晴'),
  ('烟绯','星轨秘录'),
  ('烟绯','霜华咏叹'),
  ('嘉明','苇海信标'),
  ('嘉明','螭骨剑'),
  ('嘉明','赤焰王座'),
  ('托马','天空之脊'),
  ('托马','西风长枪'),
  ('托马','柔灯挽歌'),
  ('托马','幽夜的裁决'),
  ('托马','月轮之誓'),
  ('夏沃蕾','天空之脊'),
  ('夏沃蕾','西风长枪'),
  ('莫娜','万世流涌大典'),
  ('莫娜','流浪乐章'),
  ('莫娜','无垠蔚蓝之歌'),
  ('莫娜','烬城秘典'),
  ('希格雯','白雨心弦'),
  ('希格雯','西风猎弓'),
  ('芭芭拉','不灭月华'),
  ('芭芭拉','试作金珀'),
  ('芭芭拉','无垠蔚蓝之歌'),
  ('塔利雅','苍古自由之誓'),
  ('塔利雅','西风剑'),
  ('坎蒂丝','和璞鸢'),
  ('坎蒂丝','西风长枪'),
  ('爱诺','冬极白星'),
  ('爱诺','绝弦'),
  ('伊涅芙','镜中月'),
  ('伊涅芙','流浪乐章'),
  ('丽莎','千夜浮梦'),
  ('丽莎','流浪乐章'),
  ('丽莎','月辉之书'),
  ('雷泽','狼的末路'),
  ('雷泽','试作古华'),
  ('雷泽','霜噬巨刃'),
  ('北斗','狼的末路'),
  ('北斗','西风大剑'),
  ('北斗','烬城重锤'),
  ('九条裟罗','天空之翼'),
  ('九条裟罗','绝弦'),
  ('多莉','狼的末路'),
  ('多莉','西风大剑'),
  ('赛索斯','天空之翼'),
  ('赛索斯','破魔之弓'),
  ('欧洛伦','若水'),
  ('欧洛伦','绝弦'),
  ('伊安珊','天空之脊'),
  ('伊安珊','西风长枪'),
  ('凯亚','雾切之回光'),
  ('凯亚','黑剑'),
  ('凯亚','霜庭之刃'),
  ('迪奥娜','终末嗟叹之诗'),
  ('迪奥娜','祭礼弓'),
  ('迪奥娜','霜羽长弓'),
  ('迪奥娜','幽夜回响'),
  ('罗莎莉亚','天空之脊'),
  ('罗莎莉亚','西风长枪'),
  ('罗莎莉亚','霜华之矛'),
  ('米卡','天空之脊'),
  ('米卡','西风长枪'),
  ('重云','天空之傲'),
  ('重云','螭骨剑'),
  ('重云','烬城重锤'),
  ('莱依拉','静水流涌之辉'),
  ('莱依拉','祭礼剑'),
  ('菲米尼','松籁响起之时'),
  ('菲米尼','雪葬的星银'),
  ('夏洛蒂','千夜浮梦'),
  ('夏洛蒂','试作金珀'),
  ('梦见月瑞希','尘光七谕'),
  ('梦见月瑞希','试作金珀'),
  ('梦见月瑞希','鹤鸣余音'),
  ('梦见月瑞希','寝正月初晴'),
  ('砂糖','千夜浮梦'),
  ('砂糖','祭礼残章'),
  ('砂糖','鹤鸣余音'),
  ('砂糖','无垠蔚蓝之歌'),
  ('砂糖','烬城秘典'),
  ('蓝砚','千夜浮梦'),
  ('蓝砚','祭礼残章'),
  ('鹿野院平藏','图莱杜拉的回忆'),
  ('鹿野院平藏','流浪乐章'),
  ('鹿野院平藏','晨星绪论'),
  ('早柚','狼的末路'),
  ('早柚','西风大剑'),
  ('早柚','烬城重锤'),
  ('珐露珊','终末嗟叹之诗'),
  ('珐露珊','西风猎弓'),
  ('珐露珊','烬城猎弓'),
  ('琳妮特','雾切之回光'),
  ('琳妮特','西风剑'),
  ('琳妮特','星语短剑'),
  ('琳妮特','月桂的证言'),
  ('伊法','苍古自由之誓'),
  ('伊法','西风秘典'),
  ('雅珂达','千夜浮梦'),
  ('雅珂达','流浪乐章'),
  ('千织','有乐御簾切'),
  ('千织','狼牙'),
  ('诺艾尔','赤角石溃杵'),
  ('诺艾尔','白影剑'),
  ('诺艾尔','碎星之骸'),
  ('云堇','天空之脊'),
  ('云堇','西风长枪'),
  ('云堇','星陨之枪'),
  ('五郎','终末嗟叹之诗'),
  ('五郎','西风猎弓'),
  ('五郎','幽夜回响'),
  ('五郎','星穹之弦'),
  ('卡齐娜','天空之脊'),
  ('卡齐娜','西风长枪'),
  ('叶洛亚','尘世之锁'),
  ('叶洛亚','西风秘典'),
  ('瑶瑶','和璞鸢'),
  ('瑶瑶','西风长枪'),
  ('瑶瑶','月轮之誓'),
  ('柯莱','猎人之径'),
  ('柯莱','绝弦'),
  ('柯莱','烬城猎弓'),
  ('卡维','狼的末路'),
  ('卡维','西风大剑'),
  ('绮良良','磐岩结绿'),
  ('绮良良','祭礼剑'),
  ('哥伦比娅','千夜浮梦'),
  ('哥伦比娅','流浪的晚星'),
  ('莉奈娅','阿莫斯之弓'),
  ('莉奈娅','破魔之弓'),
  ('桑多涅','狼的末路'),
  ('桑多涅','螭骨剑'),
  ('艾莉丝','四风原典'),
  ('艾莉丝','流浪乐章'),
  ('埃洛伊','阿莫斯之弓'),
  ('埃洛伊','破魔之弓'),
  ('埃洛伊','霜羽长弓'),
  ('埃洛伊','月影之弦'),
  ('旅行者·风','苍古自由之誓'),
  ('旅行者·风','铁蜂刺'),
  ('旅行者·风','烬城之钥'),
  ('旅行者·岩','磐岩结绿'),
  ('旅行者·岩','西风剑'),
  ('旅行者·雷','天空之刃'),
  ('旅行者·雷','西风剑'),
  ('旅行者·雷','晨曦之誓'),
  ('旅行者·草','圣显之钥'),
  ('旅行者·草','西风剑'),
  ('旅行者·水','静水流涌之辉'),
  ('旅行者·水','祭礼剑'),
  ('旅行者·火','雾切之回光'),
  ('旅行者·火','铁蜂刺'),
  ('旅行者·冰','星锋剑'),
  ('旅行者·冰','西风剑')
);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪卢克','火','狼的末路',5,'专武，攻击力提升范围伤害',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪卢克','火','螭骨剑',4,'暴击率副属性，纪行获取',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪卢克','火','山王长牙',5,'新增五星 · 暴击伤害副词条，元素战技命中后叠层提升暴击伤害与…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪卢克','火','赤焰王座',5,'新增五星 · 攻击力副词条，消耗夜魂值/战意后大幅提升攻击力…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪卢克','火','星陨巨剑',5,'新增五星 · 暴击率副词条，元素战技命中后叠加暴击率，三段战…',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪卢克','火','烬城重锤',4,'新增4星 · 元素充能效率副词条，队伍体系备选',5)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('可莉','火','四风原典',5,'站场叠层增元素伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('可莉','火','流浪乐章',4,'上场随机增伤，爆发',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('可莉','火','真语秘匣',5,'新增五星 · 暴击率副词条，触发月绽放后提升元素精通与暴击伤…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('可莉','火','霜华咏叹',4,'新增4星 · 攻击力副词条，可作过渡替代',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('可莉','火','晨星绪论',5,'新增五星 · 暴击率副词条，站场期间持续叠加暴击率与普攻伤害…',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('胡桃','火','护摩之杖',5,'生命转攻，契合低血输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('胡桃','火','决斗之枪',4,'暴击率副属性，缓解双暴压力',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('宵宫','火','飞雷之弦振',5,'专武，普攻增伤叠层',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('宵宫','火','弓藏',4,'普攻增伤，平民替代',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('宵宫','火','星海之笺',5,'新增五星 · 暴击率副词条，普攻与断流命中后叠加暴击率，高频…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('林尼','火','冬极白星',5,'普攻重击叠层增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('林尼','火','破魔之弓',4,'满能量重击增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('阿蕾奇诺','火','赤沙之王',5,'火伤强化，仆人核心',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('阿蕾奇诺','火','决斗之枪',4,'暴击率副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('玛薇卡','火','赤沙之王',5,'火神 Q 爆发契合',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('玛薇卡','火','狼的末路',5,'攻击力提升',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('玛薇卡','火','赤焰王座',5,'新增五星 · 攻击力副词条，消耗夜魂值/战意后大幅提升攻击力…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('班尼特','火','天空之刃',5,'高白值+充能，加攻最优',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('班尼特','火','西风剑',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('班尼特','火','星语短剑',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('香菱','火','护摩之杖',5,'暴伤副属性，爆发高',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('香菱','火','渔获',4,'充能+Q 增伤，平民神器',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('香菱','火','柔灯挽歌',5,'新增五星 · 暴击伤害副词条，触发燃烧相关反应后提升攻击力与元…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('香菱','火','裁断',5,'新增五星 · 暴击伤害副词条，元素爆发期间提升攻击力与暴击伤害…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('香菱','火','星陨之枪',4,'新增4星 · 元素充能效率副词条，可作过渡替代',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('香菱','火','月轮之誓',4,'新增4星 · 元素精通副词条，队伍体系备选',5)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('达达利亚','水','冬极白星',5,'专武，普攻增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('达达利亚','水','弓藏',4,'普攻增伤替代',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('达达利亚','水','星海之笺',5,'新增五星 · 暴击率副词条，普攻与断流命中后叠加暴击率，高频…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('珊瑚宫心海','水','不灭月华',5,'专武，治疗+生命',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('珊瑚宫心海','水','西风秘典',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('神里绫人','水','波乱月白经津',5,'专武，普攻增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('神里绫人','水','黑剑',4,'暴击率副属性，纪行',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('夜兰','水','若水',5,'专武，暴伤+生命',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('夜兰','水','西风猎弓',4,'充能副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('夜兰','水','逐星之矢',5,'新增五星 · 暴击伤害副词条，重击与蓄力箭命中后叠加暴击伤害，…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('夜兰','水','幽夜回响',4,'新增4星 · 元素充能效率副词条，可作过渡替代',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('夜兰','水','星穹之弦',5,'新增五星 · 元素充能效率副词条，施放元素爆发后为全队回复能量并提…',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('妮露','水','圣显之钥',5,'专武，生命转精通',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('妮露','水','西风剑',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('那维莱特','水','万世流涌大典',5,'专武，重击伤害生命收益',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('那维莱特','水','祭礼残章',4,'平民替代',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('芙宁娜','水','静水流涌之辉',5,'专武，生命+增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('芙宁娜','水','西风剑',4,'充能副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('玛拉妮','水','万世流涌大典',5,'水C重击输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('玛拉妮','水','流浪乐章',4,'爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('行秋','水','祭礼剑',5,'重置战技，双E回能',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('行秋','水','西风剑',4,'充能副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('行秋','水','星语短剑',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('刻晴','雷','雾切之回光',5,'元素伤加成，激化输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('刻晴','雷','黑剑',4,'暴击率副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('刻晴','雷','苍耀',5,'新增五星 · 暴击伤害副词条，不依赖元素能量的站场冰C专武，元…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('刻晴','雷','晨曦之誓',5,'新增五星 · 暴击率副词条，触发激化/超激化后叠加暴击率与元…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雷电将军','雷','薙草之稻光',5,'专武，充能转攻',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雷电将军','雷','渔获',4,'充能+Q 增伤，平民神器',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雷电将军','雷','香韵奏者',5,'新增五星 · 攻击力副词条，队伍中冰/水角色触发冻结后提升全…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雷电将军','雷','裁断',5,'新增五星 · 暴击伤害副词条，元素爆发期间提升攻击力与暴击伤害…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雷电将军','雷','幽夜的裁决',5,'新增五星 · 暴击率副词条，元素爆发期间持续提升暴击率与攻击…',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雷电将军','雷','星陨之枪',4,'新增4星 · 元素充能效率副词条，可作过渡替代',5)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('八重神子','雷','神乐之真意',5,'专武，战技叠层',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('八重神子','雷','流浪乐章',4,'爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('八重神子','雷','寝正月初晴',5,'新增五星 · 暴击伤害副词条，触发扩散反应后提升全队对应元素伤…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('八重神子','雷','星轨秘录',5,'新增五星 · 暴击伤害副词条，触发元素反应后叠加暴击伤害与元素…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('赛诺','雷','赤沙之杖',5,'专武，精通转攻',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('赛诺','雷','决斗之枪',4,'暴击率副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('赛诺','雷','支离轮光',5,'新增五星 · 暴击率副词条，触发月感电/感电反应后提升攻击力…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('赛诺','雷','裁断',5,'新增五星 · 暴击伤害副词条，元素爆发期间提升攻击力与暴击伤害…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('赛诺','雷','幽夜的裁决',5,'新增五星 · 暴击率副词条，元素爆发期间持续提升暴击率与攻击…',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('赛诺','雷','苍穹之楔',5,'新增五星 · 暴击伤害副词条，下落攻击与元素爆发伤害提升，长轴…',5)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('克洛琳德','雷','赦罪之锏',5,'专武，突进雷伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('克洛琳德','雷','匣里龙吟',4,'暴击副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('瓦蕾莎','雷','赤沙之王',5,'夜魂雷C输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('瓦蕾莎','雷','决斗之枪',4,'暴击率副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菲林斯','雷','血染荒城',5,'专武，月感电输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菲林斯','雷','匣里龙吟',4,'暴击副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菲谢尔','雷','天空之翼',5,'暴击率，奥兹输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菲谢尔','雷','绝弦',4,'战技爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菲谢尔','雷','星鹫赤羽',5,'新增五星 · 暴击伤害副词条，队伍中存在多种元素时提升重击与元…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菲谢尔','雷','霜羽长弓',5,'新增五星 · 攻击力副词条，攻击受冰影响敌人时提升攻击力与暴…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菲谢尔','雷','月影之弦',4,'新增4星 · 物理伤害加成副词条，可作过渡替代',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('久岐忍','雷','铁蜂刺',4,'精通副属性，超绽放',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('久岐忍','雷','西风剑',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('久岐忍','雷','月桂的证言',4,'新增4星 · 元素精通副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('七七','冰','天空之刃',5,'高白值+充能，治疗',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('七七','冰','祭礼剑',4,'重置战技',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('甘雨','冰','阿莫斯之弓',5,'蓄力箭增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('甘雨','冰','破魔之弓',4,'满能量重击增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('甘雨','冰','星鹫赤羽',5,'新增五星 · 暴击伤害副词条，队伍中存在多种元素时提升重击与元…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('甘雨','冰','逐星之矢',5,'新增五星 · 暴击伤害副词条，重击与蓄力箭命中后叠加暴击伤害，…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('优菈','冰','松籁响起之时',5,'物伤，攻速攻击',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('优菈','冰','雪葬的星银',4,'物伤副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('优菈','冰','碎星之骸',5,'新增五星 · 暴击伤害副词条，基于防御力或生命上限提升重击伤害…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('优菈','冰','霜噬巨刃',4,'新增4星 · 物理伤害加成副词条，可作过渡替代',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('神里绫华','冰','雾切之回光',5,'专武，冰伤加成',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('神里绫华','冰','天目影打刀',4,'充能缓解 Q 压力',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('神里绫华','冰','苍耀',5,'新增五星 · 暴击伤害副词条，不依赖元素能量的站场冰C专武，元…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('神里绫华','冰','霜庭之刃',5,'新增五星 · 暴击伤害副词条，攻击冻结或受冰影响的敌人时提升暴…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('申鹤','冰','息灾',5,'专武，攻击力提升',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('申鹤','冰','西风长枪',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('申鹤','冰','香韵奏者',5,'新增五星 · 攻击力副词条，队伍中冰/水角色触发冻结后提升全…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('申鹤','冰','霜华之矛',5,'新增五星 · 攻击力副词条，基于攻击力为全队提供冰伤加成，冰…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莱欧斯利','冰','镜中月',5,'冰水体系输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莱欧斯利','冰','黑剑',4,'暴击率副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莱欧斯利','冰','霜庭之刃',5,'新增五星 · 暴击伤害副词条，攻击冻结或受冰影响的敌人时提升暴…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('茜特菈莉','冰','天空之刃',5,'充能+减抗辅助',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('茜特菈莉','冰','西风剑',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('爱可菲','冰','终末嗟叹之诗',5,'精通+全队增益',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('爱可菲','冰','西风弓',4,'充能副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('丝柯克','冰','镜中月',5,'专武，冰水体系核心',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('丝柯克','冰','黑剑',4,'暴击率副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('丝柯克','冰','苍耀',5,'新增五星 · 暴击伤害副词条，不依赖元素能量的站场冰C专武，元…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('琴','风','天空之刃',5,'充能+治疗',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('琴','风','西风剑',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('琴','风','烬城之钥',5,'新增五星 · 攻击力副词条，双持站场时提升攻击速度与攻击力，…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('温迪','风','终末嗟叹之诗',5,'精通+全队增益',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('温迪','风','西风猎弓',4,'充能副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('温迪','风','烬城猎弓',4,'新增4星 · 元素精通副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('温迪','风','星穹之弦',5,'新增五星 · 元素充能效率副词条，施放元素爆发后为全队回复能量并提…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('魈','风','和璞鸢',5,'专武，叠层增攻',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('魈','风','决斗之枪',4,'暴击率副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('魈','风','支离轮光',5,'新增五星 · 暴击率副词条，触发月感电/感电反应后提升攻击力…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('魈','风','苍穹之楔',5,'新增五星 · 暴击伤害副词条，下落攻击与元素爆发伤害提升，长轴…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('枫原万叶','风','苍古自由之誓',5,'精通+全队增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('枫原万叶','风','铁蜂刺',4,'精通副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('枫原万叶','风','月桂的证言',4,'新增4星 · 元素精通副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('流浪者','风','四风原典',5,'站场叠层增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('流浪者','风','流浪乐章',4,'爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('流浪者','风','真语秘匣',5,'新增五星 · 暴击率副词条，触发月绽放后提升元素精通与暴击伤…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('流浪者','风','晨星绪论',5,'新增五星 · 暴击率副词条，站场期间持续叠加暴击率与普攻伤害…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('闲云','风','天空之卷',5,'攻击+增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('闲云','风','西风秘典',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('闲云','风','鹤鸣余音',5,'新增五星 · 攻击力副词条，施放元素战技后全队下落攻击伤害提…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('恰斯卡','风','天空之刃',5,'攻击+风伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('恰斯卡','风','铁蜂刺',4,'精通副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('钟离','岩','黑缨枪',3,'生命%副属性，护盾拉满',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('钟离','岩','贯虹之槊',5,'攻击提升盾伤与Q',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('阿贝多','岩','磐岩结绿',5,'防御转攻，暴击率',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('阿贝多','岩','西风剑',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('荒泷一斗','岩','赤角石溃杵',5,'专武，防御转攻',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('荒泷一斗','岩','螭骨剑',4,'暴击率副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('荒泷一斗','岩','山王长牙',5,'新增五星 · 暴击伤害副词条，元素战技命中后叠层提升暴击伤害与…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('荒泷一斗','岩','碎星之骸',5,'新增五星 · 暴击伤害副词条，基于防御力或生命上限提升重击伤害…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('娜维娅','岩','裁叶萃光',5,'专武，结晶弹片增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('娜维娅','岩','千岩长枪',4,'攻击+岩伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('希诺宁','岩','磐岩结绿',5,'暴击率，辅助',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('希诺宁','岩','西风剑',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('凝光','岩','四风原典',5,'站场叠层增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('凝光','岩','流浪乐章',4,'爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('凝光','岩','霜华咏叹',4,'新增4星 · 攻击力副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('提纳里','草','猎人之径',5,'专武，精通转攻',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('提纳里','草','绝弦',4,'战技爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('提纳里','草','逐星之矢',5,'新增五星 · 暴击伤害副词条，重击与蓄力箭命中后叠加暴击伤害，…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('纳西妲','草','千夜浮梦',5,'专武，精通+全队增益',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('纳西妲','草','流浪的晚星',4,'精通副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('纳西妲','草','祭星者之望',5,'新增五星 · 元素精通副词条，施放元素爆发后全队元素精通提升，…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('纳西妲','草','星轨秘录',5,'新增五星 · 暴击伤害副词条，触发元素反应后叠加暴击伤害与元素…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('纳西妲','草','月辉之书',5,'新增五星 · 元素精通副词条，触发月绽放/激化后提升全队元素精…',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('纳西妲','草','鹤鸣余音',5,'新增5星 · 攻击力副词条，队伍体系备选',5)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('艾尔海森','草','图莱杜拉的回忆',5,'专武，激化输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('艾尔海森','草','铁蜂刺',4,'精通副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('白术','草','不灭月华',5,'治疗+生命',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('白术','草','西风秘典',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('白术','草','祭星者之望',5,'新增五星 · 元素精通副词条，施放元素爆发后全队元素精通提升，…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('白术','草','烬城秘典',4,'新增4星 · 元素充能效率副词条，可作过渡替代',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('白术','草','无垠蔚蓝之歌',4,'新增4星 · 元素充能效率副词条，队伍体系备选',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('艾梅莉埃','草','纺夜天镜',5,'草系后台输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('艾梅莉埃','草','流浪的晚星',4,'精通副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('基尼奇','草','纺夜天镜',5,'燃烧输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('基尼奇','草','流浪的晚星',4,'精通副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菈乌玛','草','纺夜天镜',5,'专武，月绽放核心',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菈乌玛','草','祭礼残章',4,'精通副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菈乌玛','草','月辉之书',5,'新增五星 · 元素精通副词条，触发月绽放/激化后提升全队元素精…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('奈芙尔','草','纺夜天镜',5,'专武，月绽放主C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('奈芙尔','草','流浪的晚星',4,'精通副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('奈芙尔','草','真语秘匣',5,'新增五星 · 暴击率副词条，触发月绽放后提升元素精通与暴击伤…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('法尔伽','风','狼的武功歌',5,'专武，攻速+四风诗系增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('法尔伽','风','天空之傲',5,'充能+范围风伤替代',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('法尔伽','风','星陨巨剑',5,'新增五星 · 暴击率副词条，元素战技命中后叠加暴击率，三段战…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('尼可','火','尘光七谕',5,'专武，护盾后按攻加伤+回能',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('尼可','火','西风秘典',4,'充能辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('杜林','火','黑蚀',5,'魔导体系输出法器',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('杜林','火','流浪乐章',4,'爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('兹白','岩','朏魄含光',5,'专武，数值暴力大幅提升输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('兹白','岩','磐岩结绿',5,'高双暴词条替代',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('洛恩','冰','灾悔',5,'专武，战技后普攻重击增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('洛恩','冰','决斗之枪',4,'暴击率副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('布伦妮','风','天空之卷',5,'攻击+扩散输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('布伦妮','风','流浪乐章',4,'爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('奥黛塔','冰','白湖冬羽',5,'专武，星烁反应增伤+回能',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('奥黛塔','冰','雾切之回光',5,'元素伤加成替代',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('阿罗夏','雷','西风长枪',4,'充能副属性，辅助循环',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('阿罗夏','雷','渔获',4,'充能+Q 增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('薇斯纳','风','蝶变',5,'专武，战技爆发依次增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('薇斯纳','风','雾切之回光',5,'元素伤加成替代',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('沃雅妮莎','水','漩流颂歌',5,'专武，治疗+生命+加攻',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('沃雅妮莎','水','不灭月华',5,'治疗+生命替代',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('米提亚','雷','蝶变',5,'星扩散体系输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('米提亚','雷','流浪乐章',4,'爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('瓦列里','雷','西风剑',4,'充能副属性，辅助循环',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('瓦列里','雷','匣里龙吟',4,'攻击副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪希雅','火','赤沙之王',5,'专武，元素战技协同输出增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪希雅','火','螭骨剑',4,'暴击率副属性，减伤型后台火',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('安柏','火','天空之翼',5,'高白值+暴击，蓄力/破盾通用',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('安柏','火','破魔之弓',4,'满能量重击增伤，平民之选',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('安柏','火','月影之弦',4,'新增4星 · 物理伤害加成副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('辛焱','火','赤角石溃杵',5,'防御转攻，物伤大招契合',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('辛焱','火','白影剑',4,'防御副属性，叠层增攻防',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('辛焱','火','霜噬巨刃',4,'新增4星 · 物理伤害加成副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('烟绯','火','四风原典',5,'重击站场叠层增元素伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('烟绯','火','流浪乐章',4,'上场随机增伤，爆发极高',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('烟绯','火','寝正月初晴',5,'新增五星 · 暴击伤害副词条，触发扩散反应后提升全队对应元素伤…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('烟绯','火','星轨秘录',5,'新增五星 · 暴击伤害副词条，触发元素反应后叠加暴击伤害与元素…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('烟绯','火','霜华咏叹',4,'新增4星 · 攻击力副词条，可作过渡替代',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('嘉明','火','苇海信标',5,'下落攻击增伤，专武契合',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('嘉明','火','螭骨剑',4,'暴击率副属性，平民高收益',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('嘉明','火','赤焰王座',5,'新增五星 · 攻击力副词条，消耗夜魂值/战意后大幅提升攻击力…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('托马','火','天空之脊',5,'充能副属性，盾辅循环',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('托马','火','西风长枪',4,'充能+产球，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('托马','火','柔灯挽歌',5,'新增五星 · 暴击伤害副词条，触发燃烧相关反应后提升攻击力与元…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('托马','火','幽夜的裁决',5,'新增五星 · 暴击率副词条，元素爆发期间持续提升暴击率与攻击…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('托马','火','月轮之誓',4,'新增4星 · 元素精通副词条，可作过渡替代',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('夏沃蕾','火','天空之脊',5,'高白值+充能，增攻奶妈',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('夏沃蕾','火','西风长枪',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莫娜','水','万世流涌大典',5,'元素爆发增伤，核爆核心',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莫娜','水','流浪乐章',4,'上场随机增伤，爆发窗口',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莫娜','水','无垠蔚蓝之歌',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莫娜','水','烬城秘典',4,'新增4星 · 元素充能效率副词条，可作过渡替代',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('希格雯','水','白雨心弦',5,'专武，生命+治疗提升',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('希格雯','水','西风猎弓',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('芭芭拉','水','不灭月华',5,'治疗+生命，奶量拉满',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('芭芭拉','水','试作金珀',4,'生命副属性，治疗回能',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('芭芭拉','水','无垠蔚蓝之歌',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('塔利雅','水','苍古自由之誓',5,'元素反应增伤，辅助副C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('塔利雅','水','西风剑',4,'充能副属性，挂水循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('坎蒂丝','水','和璞鸢',5,'高白值+暴击，盾辅输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('坎蒂丝','水','西风长枪',4,'充能副属性，附魔辅助',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('爱诺','水','冬极白星',5,'普攻增伤，后台挂水输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('爱诺','水','绝弦',4,'元素战技爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('伊涅芙','雷','镜中月',5,'专武，月感电体系增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('伊涅芙','雷','流浪乐章',4,'上场随机增伤，爆发',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('丽莎','雷','千夜浮梦',5,'元素精通与增伤，站场副C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('丽莎','雷','流浪乐章',4,'上场随机增伤，爆发',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('丽莎','雷','月辉之书',5,'新增五星 · 元素精通副词条，触发月绽放/激化后提升全队元素精…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雷泽','雷','狼的末路',5,'物伤大剑，站场主C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雷泽','雷','试作古华',4,'攻击副属性，物伤通用',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雷泽','雷','霜噬巨刃',4,'新增4星 · 物理伤害加成副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('北斗','雷','狼的末路',5,'反击增伤，后台挂雷输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('北斗','雷','西风大剑',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('北斗','雷','烬城重锤',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('九条裟罗','雷','天空之翼',5,'高白值+暴击，增攻副C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('九条裟罗','雷','绝弦',4,'元素战技爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('多莉','雷','狼的末路',5,'治疗+充能，站场主C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('多莉','雷','西风大剑',4,'充能副属性，治疗循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('赛索斯','雷','天空之翼',5,'蓄力主C，暴击增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('赛索斯','雷','破魔之弓',4,'满能量重击增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('欧洛伦','雷','若水',5,'后台夜魂输出，暴伤+生命',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('欧洛伦','雷','绝弦',4,'元素战技爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('伊安珊','雷','天空之脊',5,'增攻辅助，充能循环',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('伊安珊','雷','西风长枪',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('凯亚','冰','雾切之回光',5,'元素伤+暴击，站场副C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('凯亚','冰','黑剑',4,'暴击率副属性，纪行获取',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('凯亚','冰','霜庭之刃',5,'新增五星 · 暴击伤害副词条，攻击冻结或受冰影响的敌人时提升暴…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪奥娜','冰','终末嗟叹之诗',5,'全队增攻+充能，辅助最优',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪奥娜','冰','祭礼弓',4,'双盾+充能，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪奥娜','冰','霜羽长弓',5,'新增五星 · 攻击力副词条，攻击受冰影响敌人时提升攻击力与暴…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('迪奥娜','冰','幽夜回响',4,'新增4星 · 元素充能效率副词条，可作过渡替代',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('罗莎莉亚','冰','天空之脊',5,'充能+暴击，辅助副C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('罗莎莉亚','冰','西风长枪',4,'充能副属性，暴击拐',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('罗莎莉亚','冰','霜华之矛',5,'新增五星 · 攻击力副词条，基于攻击力为全队提供冰伤加成，冰…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('米卡','冰','天空之脊',5,'充能+攻速辅助',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('米卡','冰','西风长枪',4,'充能副属性，治疗循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('重云','冰','天空之傲',5,'物伤附魔，副C输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('重云','冰','螭骨剑',4,'暴击率副属性，副C高收益',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('重云','冰','烬城重锤',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莱依拉','冰','静水流涌之辉',5,'生命+充能，护盾辅助',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莱依拉','冰','祭礼剑',4,'双盾+充能，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菲米尼','冰','松籁响起之时',5,'物伤大剑，专武契合',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('菲米尼','冰','雪葬的星银',4,'物伤副属性，平民之选',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('夏洛蒂','冰','千夜浮梦',5,'元素精通+治疗，辅助副C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('夏洛蒂','冰','试作金珀',4,'生命副属性，治疗回能',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('梦见月瑞希','风','尘光七谕',5,'专武，治疗+生命+精通',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('梦见月瑞希','风','试作金珀',4,'生命副属性，治疗回能',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('梦见月瑞希','风','鹤鸣余音',5,'新增五星 · 攻击力副词条，施放元素战技后全队下落攻击伤害提…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('梦见月瑞希','风','寝正月初晴',5,'新增五星 · 暴击伤害副词条，触发扩散反应后提升全队对应元素伤…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('砂糖','风','千夜浮梦',5,'元素精通，扩散增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('砂糖','风','祭礼残章',4,'元素精通副属性，聚怪增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('砂糖','风','鹤鸣余音',5,'新增五星 · 攻击力副词条，施放元素战技后全队下落攻击伤害提…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('砂糖','风','无垠蔚蓝之歌',4,'新增4星 · 元素充能效率副词条，可作过渡替代',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('砂糖','风','烬城秘典',4,'新增4星 · 元素充能效率副词条，可作过渡替代',4)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('蓝砚','风','千夜浮梦',5,'元素精通，挂风盾辅',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('蓝砚','风','祭礼残章',4,'元素精通副属性',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('鹿野院平藏','风','图莱杜拉的回忆',5,'拳法主C，元素战技增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('鹿野院平藏','风','流浪乐章',4,'上场随机增伤，爆发',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('鹿野院平藏','风','晨星绪论',5,'新增五星 · 暴击率副词条，站场期间持续叠加暴击率与普攻伤害…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('早柚','风','狼的末路',5,'滚地主C，扩散增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('早柚','风','西风大剑',4,'充能副属性，治疗循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('早柚','风','烬城重锤',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('珐露珊','风','终末嗟叹之诗',5,'全队增攻+充能，风拐最优',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('珐露珊','风','西风猎弓',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('珐露珊','风','烬城猎弓',4,'新增4星 · 元素精通副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('琳妮特','风','雾切之回光',5,'元素伤+暴击，副C输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('琳妮特','风','西风剑',4,'充能副属性，挂风循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('琳妮特','风','星语短剑',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('琳妮特','风','月桂的证言',4,'新增4星 · 元素精通副词条，可作过渡替代',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('伊法','风','苍古自由之誓',5,'元素反应增伤，治疗辅助',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('伊法','风','西风秘典',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雅珂达','风','千夜浮梦',5,'元素精通，挂风副C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('雅珂达','风','流浪乐章',4,'上场随机增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('千织','岩','有乐御簾切',5,'专武，普攻重击增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('千织','岩','狼牙',4,'暴击率副属性，后台副C',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('诺艾尔','岩','赤角石溃杵',5,'防御转攻，盾辅主C',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('诺艾尔','岩','白影剑',4,'防御副属性，叠层增攻防',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('诺艾尔','岩','碎星之骸',5,'新增五星 · 暴击伤害副词条，基于防御力或生命上限提升重击伤害…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('云堇','岩','天空之脊',5,'充能+防御，普攻拐',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('云堇','岩','西风长枪',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('云堇','岩','星陨之枪',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('五郎','岩','终末嗟叹之诗',5,'全队增攻+充能，岩拐最优',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('五郎','岩','西风猎弓',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('五郎','岩','幽夜回响',4,'新增4星 · 元素充能效率副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('五郎','岩','星穹之弦',5,'新增五星 · 元素充能效率副词条，施放元素爆发后为全队回复能量并提…',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('卡齐娜','岩','天空之脊',5,'充能+增伤，岩拐辅助',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('卡齐娜','岩','西风长枪',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('叶洛亚','岩','尘世之锁',5,'护盾增攻，岩拐辅助',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('叶洛亚','岩','西风秘典',4,'充能副属性，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('瑶瑶','草','和璞鸢',5,'高白值+暴击，治疗挂草',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('瑶瑶','草','西风长枪',4,'充能副属性，治疗循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('瑶瑶','草','月轮之誓',4,'新增4星 · 元素精通副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('柯莱','草','猎人之径',5,'元素精通+挂草，副C输出',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('柯莱','草','绝弦',4,'元素战技爆发增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('柯莱','草','烬城猎弓',4,'新增4星 · 元素精通副词条，可作过渡替代',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('卡维','草','狼的末路',5,'绽放主C，攻击增伤',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('卡维','草','西风大剑',4,'充能副属性，绽放循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('绮良良','草','磐岩结绿',5,'生命+护盾，挂草盾辅',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('绮良良','草','祭礼剑',4,'双盾+充能，辅助循环',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('哥伦比娅','水','千夜浮梦',5,'专精精通与全队增益，月反应收益最高',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('哥伦比娅','水','流浪的晚星',4,'精通副属性，锻造即可入手',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莉奈娅','岩','阿莫斯之弓',5,'蓄力箭增伤，结晶弹全额吃到',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('莉奈娅','岩','破魔之弓',4,'锻造获取，满能量重击增伤 32%',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('桑多涅','冰','狼的末路',5,'高白值攻击，后台冰伤收益稳定',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('桑多涅','冰','螭骨剑',4,'暴击率副属性，纪行获取',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('艾莉丝','火','四风原典',5,'站场叠层元素伤，暴击率副属性缓解双暴压力',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('艾莉丝','火','流浪乐章',4,'三类增益轮换，爆发期收益极高',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('埃洛伊','冰','阿莫斯之弓',5,'蓄力与普攻增伤，冰弓输出最优',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('埃洛伊','冰','破魔之弓',4,'锻造获取，满能量重击增伤',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('埃洛伊','冰','霜羽长弓',5,'新增五星 · 攻击力副词条，攻击受冰影响敌人时提升攻击力与暴…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('埃洛伊','冰','月影之弦',4,'新增4星 · 物理伤害加成副词条，可作过渡替代',3)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·风','风','苍古自由之誓',5,'精通与全队增伤，扩散队最优',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·风','风','铁蜂刺',4,'锻造获取，精通副属性扩散收益稳定',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·风','风','烬城之钥',5,'新增五星 · 攻击力副词条，双持站场时提升攻击速度与攻击力，…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·岩','岩','磐岩结绿',5,'生命与暴击率兼顾，泛用五星单手剑',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·岩','岩','西风剑',4,'充能副属性，缓解全队循环压力',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·雷','雷','天空之刃',5,'充能副属性，开大循环最顺',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·雷','雷','西风剑',4,'产球辅助，全队充能无忧',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·雷','雷','晨曦之誓',5,'新增五星 · 暴击率副词条，触发激化/超激化后叠加暴击率与元…',2)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·草','草','圣显之钥',5,'生命转精通，绽放队辅助向',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·草','草','西风剑',4,'充能副属性，保证 Q 循环不断档',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·水','水','静水流涌之辉',5,'生命副属性，战技伤害与治疗双收益',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·水','水','祭礼剑',4,'重置战技，挂水覆盖更稳',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·火','火','雾切之回光',5,'元素伤害加成与普攻增伤，火伤收益高',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·火','火','铁蜂刺',4,'锻造获取，精通副属性反应收益稳定',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·冰','冰','星锋剑',5,'7.0 主线赠送专武，攻击/双暴/充能全面加成，随神像解锁层数强化',0)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);
INSERT INTO t_char_weapon (character_name,element,weapon_name,rarity,reason,sort_order) VALUES
  ('旅行者·冰','冰','西风剑',4,'充能副属性，速切循环更顺',1)
  ON DUPLICATE KEY UPDATE element=VALUES(element),rarity=VALUES(rarity),reason=VALUES(reason),sort_order=VALUES(sort_order);

-- ---------- 3. 武器适配角色（全量 243 把，卡片不再空白） ----------
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雾切之回光','刻晴',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雾切之回光','神里绫华',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雾切之回光','奥黛塔',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雾切之回光','薇斯纳',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('磐岩结绿','阿贝多',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('磐岩结绿','希诺宁',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('磐岩结绿','兹白',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('磐岩结绿','绮良良',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍古自由之誓','枫原万叶',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍古自由之誓','塔利雅',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍古自由之誓','伊法',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍古自由之誓','旅行者·风',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之刃','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之刃','七七',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之刃','茜特菈莉',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之刃','琴',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('斫峰之刃','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('斫峰之刃','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('斫峰之刃','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('斫峰之刃','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风鹰剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风鹰剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风鹰剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风鹰剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('波乱月白经津','神里绫人',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('波乱月白经津','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('波乱月白经津','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('波乱月白经津','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('圣显之钥','妮露',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('圣显之钥','旅行者·草',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('圣显之钥','班尼特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('圣显之钥','神里绫人',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('静水流涌之辉','芙宁娜',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('静水流涌之辉','莱依拉',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('静水流涌之辉','旅行者·水',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('静水流涌之辉','班尼特',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赦罪之锏','克洛琳德',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赦罪之锏','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赦罪之锏','神里绫人',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赦罪之锏','妮露',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('镜中月','莱欧斯利',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('镜中月','丝柯克',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('镜中月','伊涅芙',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('镜中月','班尼特',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('裁叶萃光','娜维娅',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('裁叶萃光','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('裁叶萃光','神里绫人',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('裁叶萃光','妮露',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼的末路','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼的末路','玛薇卡',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼的末路','雷泽',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼的末路','北斗',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之傲','法尔伽',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之傲','重云',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之傲','迪卢克',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之傲','阿蕾奇诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('无工之剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('无工之剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('无工之剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('无工之剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('松籁响起之时','优菈',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('松籁响起之时','菲米尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('松籁响起之时','迪卢克',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('松籁响起之时','阿蕾奇诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤角石溃杵','荒泷一斗',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤角石溃杵','辛焱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤角石溃杵','诺艾尔',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤角石溃杵','迪卢克',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤沙之王','阿蕾奇诺',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤沙之王','玛薇卡',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤沙之王','瓦蕾莎',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤沙之王','迪希雅',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('护摩之杖','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('护摩之杖','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('护摩之杖','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('护摩之杖','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('和璞鸢','魈',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('和璞鸢','坎蒂丝',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('和璞鸢','瑶瑶',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('和璞鸢','胡桃',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('贯虹之槊','钟离',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('贯虹之槊','胡桃',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('贯虹之槊','香菱',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('贯虹之槊','雷电将军',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('薙草之稻光','雷电将军',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('薙草之稻光','胡桃',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('薙草之稻光','香菱',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('薙草之稻光','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之脊','托马',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之脊','夏沃蕾',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之脊','伊安珊',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之脊','罗莎莉亚',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('息灾','申鹤',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('息灾','胡桃',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('息灾','香菱',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('息灾','雷电将军',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤沙之杖','赛诺',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤沙之杖','胡桃',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤沙之杖','香菱',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤沙之杖','雷电将军',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('血染荒城','菲林斯',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('血染荒城','胡桃',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('血染荒城','香菱',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('血染荒城','雷电将军',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之卷','闲云',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之卷','布伦妮',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之卷','可莉',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之卷','珊瑚宫心海',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('四风原典','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('四风原典','流浪者',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('四风原典','凝光',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('四风原典','烟绯',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('尘世之锁','叶洛亚',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('尘世之锁','可莉',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('尘世之锁','珊瑚宫心海',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('尘世之锁','那维莱特',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('神乐之真意','八重神子',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('神乐之真意','可莉',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('神乐之真意','珊瑚宫心海',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('神乐之真意','那维莱特',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('不灭月华','珊瑚宫心海',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('不灭月华','白术',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('不灭月华','沃雅妮莎',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('不灭月华','芭芭拉',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千夜浮梦','纳西妲',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千夜浮梦','丽莎',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千夜浮梦','夏洛蒂',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千夜浮梦','砂糖',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('图莱杜拉的回忆','艾尔海森',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('图莱杜拉的回忆','鹿野院平藏',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('图莱杜拉的回忆','可莉',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('图莱杜拉的回忆','珊瑚宫心海',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('万世流涌大典','那维莱特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('万世流涌大典','玛拉妮',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('万世流涌大典','莫娜',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('万世流涌大典','可莉',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('纺夜天镜','艾梅莉埃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('纺夜天镜','基尼奇',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('纺夜天镜','菈乌玛',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('纺夜天镜','奈芙尔',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之翼','菲谢尔',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之翼','安柏',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之翼','九条裟罗',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天空之翼','赛索斯',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('阿莫斯之弓','甘雨',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('阿莫斯之弓','莉奈娅',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('阿莫斯之弓','埃洛伊',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('阿莫斯之弓','宵宫',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('终末嗟叹之诗','爱可菲',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('终末嗟叹之诗','温迪',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('终末嗟叹之诗','迪奥娜',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('终末嗟叹之诗','珐露珊',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冬极白星','林尼',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冬极白星','达达利亚',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冬极白星','爱诺',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冬极白星','宵宫',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞雷之弦振','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞雷之弦振','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞雷之弦振','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞雷之弦振','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('猎人之径','提纳里',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('猎人之径','柯莱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('猎人之径','宵宫',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('猎人之径','林尼',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('若水','夜兰',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('若水','欧洛伦',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('若水','宵宫',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('若水','林尼',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('铁蜂刺','久岐忍',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('铁蜂刺','枫原万叶',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('铁蜂刺','恰斯卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('铁蜂刺','旅行者·风',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼剑','行秋',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼剑','七七',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼剑','莱依拉',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼剑','绮良良',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风剑','妮露',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风剑','芙宁娜',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风剑','行秋',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天目影打刀','神里绫华',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天目影打刀','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天目影打刀','神里绫人',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天目影打刀','妮露',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑剑','神里绫人',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑剑','刻晴',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑剑','莱欧斯利',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑剑','丝柯克',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里龙吟','克洛琳德',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里龙吟','瓦列里',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里龙吟','班尼特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里龙吟','神里绫人',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('螭骨剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('螭骨剑','荒泷一斗',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('螭骨剑','迪希雅',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('螭骨剑','嘉明',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风大剑','北斗',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风大剑','多莉',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风大剑','早柚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风大剑','卡维',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼大剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼大剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼大剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼大剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('决斗之枪','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('决斗之枪','赛诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('决斗之枪','魈',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('决斗之枪','洛恩',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('渔获','香菱',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('渔获','雷电将军',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('渔获','阿罗夏',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('渔获','胡桃',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风长枪','申鹤',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风长枪','阿罗夏',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风长枪','托马',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风长枪','夏沃蕾',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里灭辰','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里灭辰','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里灭辰','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里灭辰','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流浪乐章','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流浪乐章','玛拉妮',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流浪乐章','八重神子',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流浪乐章','流浪者',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风秘典','珊瑚宫心海',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风秘典','闲云',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风秘典','白术',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风秘典','尼可',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼残章','那维莱特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼残章','菈乌玛',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼残章','砂糖',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼残章','蓝砚',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流浪的晚星','纳西妲',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流浪的晚星','艾梅莉埃',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流浪的晚星','基尼奇',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流浪的晚星','奈芙尔',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风猎弓','夜兰',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风猎弓','爱可菲',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风猎弓','温迪',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西风猎弓','希格雯',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('绝弦','菲谢尔',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('绝弦','提纳里',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('绝弦','爱诺',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('绝弦','九条裟罗',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弓藏','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弓藏','达达利亚',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弓藏','林尼',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弓藏','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('破魔之弓','林尼',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('破魔之弓','甘雨',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('破魔之弓','安柏',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('破魔之弓','赛索斯',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼的武功歌','法尔伽',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼的武功歌','迪卢克',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼的武功歌','阿蕾奇诺',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼的武功歌','玛薇卡',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('尘光七谕','尼可',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('尘光七谕','梦见月瑞希',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('尘光七谕','可莉',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('尘光七谕','珊瑚宫心海',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑蚀','杜林',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑蚀','可莉',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑蚀','珊瑚宫心海',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑蚀','那维莱特',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('灾悔','洛恩',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('灾悔','胡桃',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('灾悔','香菱',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('灾悔','雷电将军',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('焚曜千阳','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('焚曜千阳','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('焚曜千阳','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('焚曜千阳','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('朏魄含光','兹白',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('朏魄含光','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('朏魄含光','神里绫人',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('朏魄含光','妮露',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('织月者的曙色','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('织月者的曙色','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('织月者的曙色','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('织月者的曙色','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜华尔兹','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜华尔兹','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜华尔兹','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜华尔兹','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('漩流颂歌','沃雅妮莎',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('漩流颂歌','可莉',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('漩流颂歌','珊瑚宫心海',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('漩流颂歌','那维莱特',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('新枝','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('新枝','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('新枝','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('新枝','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('引火之源','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('引火之源','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('引火之源','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('引火之源','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('救赎之斩','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('救赎之斩','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('救赎之斩','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('救赎之斩','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('戍望谣歌','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('戍望谣歌','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('戍望谣歌','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('戍望谣歌','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赦罪','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赦罪','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赦罪','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赦罪','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('有乐御簾切','千织',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('有乐御簾切','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('有乐御簾切','神里绫人',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('有乐御簾切','妮露',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苇海信标','嘉明',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苇海信标','迪卢克',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苇海信标','阿蕾奇诺',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苇海信标','玛薇卡',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白雨心弦','希格雯',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白雨心弦','宵宫',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白雨心弦','林尼',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白雨心弦','达达利亚',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('碧落之珑','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('碧落之珑','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('碧落之珑','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('碧落之珑','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('笛剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('笛剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('笛剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('笛剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('辰砂之纺锤','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('辰砂之纺锤','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('辰砂之纺锤','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('辰砂之纺锤','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('降临之剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('降临之剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('降临之剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('降临之剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室长剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室长剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室长剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室长剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩长剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩长剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩长剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩长剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作斩岩','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作斩岩','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作斩岩','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作斩岩','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('腐殖之剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('腐殖之剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('腐殖之剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('腐殖之剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷闪光','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷闪光','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷闪光','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷闪光','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西福斯的月光','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西福斯的月光','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西福斯的月光','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('西福斯的月光','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('笼钓瓶一心','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('笼钓瓶一心','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('笼钓瓶一心','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('笼钓瓶一心','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('原木刀','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('原木刀','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('原木刀','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('原木刀','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('东花坊时雨','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('东花坊时雨','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('东花坊时雨','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('东花坊时雨','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('水仙十字之剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('水仙十字之剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('水仙十字之剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('水仙十字之剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼牙','千织',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼牙','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼牙','神里绫人',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('狼牙','妮露',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('船坞长剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('船坞长剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('船坞长剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('船坞长剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('海渊终曲','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('海渊终曲','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('海渊终曲','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('海渊终曲','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('厄水之祸','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('厄水之祸','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('厄水之祸','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('厄水之祸','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('息燧之笛','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('息燧之笛','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('息燧之笛','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('息燧之笛','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弥坚骨','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弥坚骨','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弥坚骨','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弥坚骨','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作古华','雷泽',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作古华','迪卢克',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作古华','阿蕾奇诺',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作古华','玛薇卡',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雪葬的星银','优菈',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雪葬的星银','菲米尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雪葬的星银','迪卢克',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雪葬的星银','阿蕾奇诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('桂木斩长正','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('桂木斩长正','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('桂木斩长正','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('桂木斩长正','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钟剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钟剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钟剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钟剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千岩古剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千岩古剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千岩古剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千岩古剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('恶王丸','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('恶王丸','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('恶王丸','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('恶王丸','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('衔珠海皇','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('衔珠海皇','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('衔珠海皇','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('衔珠海皇','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白影剑','辛焱',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白影剑','诺艾尔',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白影剑','迪卢克',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白影剑','阿蕾奇诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雨裁','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雨裁','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雨裁','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('雨裁','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室大剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室大剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室大剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室大剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩斩刀','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩斩刀','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩斩刀','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩斩刀','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('玛海菈的水色','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('玛海菈的水色','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('玛海菈的水色','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('玛海菈的水色','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('森林王器','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('森林王器','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('森林王器','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('森林王器','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('饰铁之花','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('饰铁之花','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('饰铁之花','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('饰铁之花','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('「究极霸王超级魔剑」','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('「究极霸王超级魔剑」','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('「究极霸王超级魔剑」','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('「究极霸王超级魔剑」','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('聊聊棒','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('聊聊棒','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('聊聊棒','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('聊聊棒','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('便携动力锯','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('便携动力锯','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('便携动力锯','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('便携动力锯','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('浪影阔剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('浪影阔剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('浪影阔剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('浪影阔剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('撼地者','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('撼地者','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('撼地者','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('撼地者','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('镇山之钉','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('镇山之钉','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('镇山之钉','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('镇山之钉','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('拾慧铸熔','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('拾慧铸熔','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('拾慧铸熔','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('拾慧铸熔','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼弓','迪奥娜',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼弓','宵宫',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼弓','林尼',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭礼弓','达达利亚',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('掠食者','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('掠食者','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('掠食者','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('掠食者','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍翠猎弓','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍翠猎弓','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍翠猎弓','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍翠猎弓','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风花之颂','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风花之颂','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风花之颂','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风花之颂','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钢轮弓','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钢轮弓','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钢轮弓','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钢轮弓','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩战弓','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩战弓','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩战弓','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩战弓','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作澹月','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作澹月','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作澹月','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作澹月','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室长弓','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室长弓','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室长弓','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室长弓','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('曚云之月','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('曚云之月','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('曚云之月','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('曚云之月','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('王下近侍','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('王下近侍','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('王下近侍','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('王下近侍','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('竭泽','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('竭泽','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('竭泽','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('竭泽','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('落霞','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('落霞','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('落霞','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('落霞','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鹮穿之喙','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鹮穿之喙','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鹮穿之喙','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鹮穿之喙','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('筑云','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('筑云','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('筑云','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('筑云','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烈阳之嗣','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烈阳之嗣','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烈阳之嗣','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烈阳之嗣','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('峡湾长歌','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('峡湾长歌','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('峡湾长歌','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('峡湾长歌','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('测距规','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('测距规','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('测距规','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('测距规','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('缀花之翎','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('缀花之翎','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('缀花之翎','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('缀花之翎','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冷寂迸音','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冷寂迸音','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冷寂迸音','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冷寂迸音','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('虹蛇的雨弦','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('虹蛇的雨弦','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('虹蛇的雨弦','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('虹蛇的雨弦','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷猎手','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷猎手','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷猎手','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷猎手','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室秘法录','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室秘法录','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室秘法录','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室秘法录','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里日月','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里日月','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里日月','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('匣里日月','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('忍冬之果','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('忍冬之果','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('忍冬之果','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('忍冬之果','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作金珀','芭芭拉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作金珀','夏洛蒂',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作金珀','梦见月瑞希',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作金珀','可莉',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩绯玉','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩绯玉','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩绯玉','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩绯玉','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白辰之环','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白辰之环','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白辰之环','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白辰之环','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('证誓之明瞳','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('证誓之明瞳','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('证誓之明瞳','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('证誓之明瞳','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('昭心','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('昭心','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('昭心','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('昭心','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('万国诸海图谱','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('万国诸海图谱','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('万国诸海图谱','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('万国诸海图谱','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('嘟嘟可故事集','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('嘟嘟可故事集','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('嘟嘟可故事集','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('嘟嘟可故事集','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷的酒与诗','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷的酒与诗','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷的酒与诗','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗巷的酒与诗','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('盈满之实','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('盈满之实','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('盈满之实','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('盈满之实','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('遗祀玉珑','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('遗祀玉珑','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('遗祀玉珑','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('遗祀玉珑','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('勘探钻机','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('勘探钻机','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('勘探钻机','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('勘探钻机','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('公义的酬报','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('公义的酬报','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('公义的酬报','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('公义的酬报','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('纯水流华','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('纯水流华','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('纯水流华','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('纯水流华','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('木棉之环','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('木棉之环','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('木棉之环','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('木棉之环','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('硕果钩','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('硕果钩','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('硕果钩','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('硕果钩','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千岩长枪','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千岩长枪','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千岩长枪','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('千岩长枪','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作星镰','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作星镰','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作星镰','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('试作星镰','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩刺枪','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩刺枪','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩刺枪','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑岩刺枪','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('喜多院十文字','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('喜多院十文字','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('喜多院十文字','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('喜多院十文字','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('龙脊长枪','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('龙脊长枪','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('龙脊长枪','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('龙脊长枪','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('断浪长鳍','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('断浪长鳍','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('断浪长鳍','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('断浪长鳍','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室猎枪','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室猎枪','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室猎枪','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('宗室猎枪','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流月针','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流月针','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流月针','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('流月针','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风信之锋','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风信之锋','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风信之锋','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('风信之锋','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('贯月矢','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('贯月矢','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('贯月矢','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('贯月矢','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('沙中伟贤的对答','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('沙中伟贤的对答','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('沙中伟贤的对答','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('沙中伟贤的对答','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('且住亭御咄','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('且住亭御咄','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('且住亭御咄','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('且住亭御咄','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('虹的行迹','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('虹的行迹','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('虹的行迹','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('虹的行迹','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('乘浪的回旋','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('乘浪的回旋','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('乘浪的回旋','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('乘浪的回旋','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('灰河渡手','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('灰河渡手','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('灰河渡手','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('灰河渡手','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天光的纺琴','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天光的纺琴','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天光的纺琴','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('天光的纺琴','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('旅行剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('旅行剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('旅行剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('旅行剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗铁剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗铁剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗铁剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('暗铁剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冷刃','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冷刃','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冷刃','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('冷刃','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞天御剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞天御剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞天御剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞天御剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('吃虎鱼刀','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('吃虎鱼刀','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('吃虎鱼刀','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('吃虎鱼刀','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黎明神剑','班尼特',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黎明神剑','神里绫人',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黎明神剑','妮露',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黎明神剑','芙宁娜',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白铁大剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白铁大剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白铁大剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白铁大剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('铁影阔剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('铁影阔剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('铁影阔剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('铁影阔剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞天大御剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞天大御剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞天大御剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('飞天大御剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('以理服人','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('以理服人','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('以理服人','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('以理服人','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('沐浴龙血的剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('沐浴龙血的剑','阿蕾奇诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('沐浴龙血的剑','玛薇卡',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('沐浴龙血的剑','瓦蕾莎',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('反曲弓','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('反曲弓','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('反曲弓','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('反曲弓','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('神射手之誓','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('神射手之誓','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('神射手之誓','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('神射手之誓','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鸦羽弓','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鸦羽弓','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鸦羽弓','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鸦羽弓','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('信使','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('信使','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('信使','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('信使','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弹弓','宵宫',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弹弓','林尼',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弹弓','达达利亚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('弹弓','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('翡玉法球','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('翡玉法球','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('翡玉法球','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('翡玉法球','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('甲级宝珏','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('甲级宝珏','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('甲级宝珏','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('甲级宝珏','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('魔导绪论','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('魔导绪论','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('魔导绪论','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('魔导绪论','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('讨龙英杰谭','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('讨龙英杰谭','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('讨龙英杰谭','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('讨龙英杰谭','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('异世界行记','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('异世界行记','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('异世界行记','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('异世界行记','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白缨枪','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白缨枪','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白缨枪','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白缨枪','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑缨枪','钟离',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑缨枪','胡桃',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑缨枪','香菱',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('黑缨枪','雷电将军',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钺矛','胡桃',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钺矛','香菱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钺矛','雷电将军',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('钺矛','赛诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星锋剑','旅行者·冰',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星锋剑','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星锋剑','神里绫人',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星锋剑','妮露',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('秘星典谕','可莉',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('秘星典谕','珊瑚宫心海',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('秘星典谕','那维莱特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('秘星典谕','玛拉妮',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白湖冬羽','奥黛塔',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白湖冬羽','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白湖冬羽','神里绫人',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('白湖冬羽','妮露',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('蝶变','薇斯纳',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('蝶变','米提亚',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('蝶变','班尼特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('蝶变','神里绫人',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鹤鸣余音','闲云',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鹤鸣余音','梦见月瑞希',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鹤鸣余音','砂糖',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('鹤鸣余音','可莉',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('柔灯挽歌','香菱',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('柔灯挽歌','托马',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('柔灯挽歌','胡桃',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('柔灯挽歌','雷电将军',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('山王长牙','荒泷一斗',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('山王长牙','迪卢克',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('山王长牙','阿蕾奇诺',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('山王长牙','玛薇卡',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星鹫赤羽','甘雨',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星鹫赤羽','菲谢尔',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星鹫赤羽','宵宫',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星鹫赤羽','林尼',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭星者之望','纳西妲',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭星者之望','白术',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭星者之望','可莉',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('祭星者之望','珊瑚宫心海',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('寝正月初晴','梦见月瑞希',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('寝正月初晴','八重神子',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('寝正月初晴','烟绯',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('寝正月初晴','可莉',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('香韵奏者','申鹤',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('香韵奏者','雷电将军',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('香韵奏者','胡桃',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('香韵奏者','香菱',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍耀','丝柯克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍耀','神里绫华',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍耀','刻晴',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍耀','班尼特',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('支离轮光','赛诺',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('支离轮光','魈',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('支离轮光','胡桃',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('支离轮光','香菱',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('真语秘匣','奈芙尔',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('真语秘匣','流浪者',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('真语秘匣','可莉',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('真语秘匣','珊瑚宫心海',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('裁断','赛诺',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('裁断','雷电将军',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('裁断','香菱',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('裁断','胡桃',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('无垠蔚蓝之歌','莫娜',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('无垠蔚蓝之歌','芭芭拉',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('无垠蔚蓝之歌','砂糖',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('无垠蔚蓝之歌','可莉',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('晨曦之誓','刻晴',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('晨曦之誓','旅行者·雷',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('晨曦之誓','班尼特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('晨曦之誓','神里绫人',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜庭之刃','神里绫华',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜庭之刃','凯亚',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜庭之刃','莱欧斯利',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜庭之刃','班尼特',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星语短剑','行秋',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星语短剑','班尼特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星语短剑','琳妮特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星语短剑','神里绫人',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城之钥','琴',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城之钥','旅行者·风',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城之钥','班尼特',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城之钥','神里绫人',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月桂的证言','枫原万叶',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月桂的证言','琳妮特',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月桂的证言','久岐忍',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月桂的证言','班尼特',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('碎星之骸','荒泷一斗',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('碎星之骸','优菈',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('碎星之骸','诺艾尔',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('碎星之骸','迪卢克',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤焰王座','玛薇卡',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤焰王座','迪卢克',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤焰王座','嘉明',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('赤焰王座','阿蕾奇诺',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜噬巨刃','优菈',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜噬巨刃','雷泽',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜噬巨刃','辛焱',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜噬巨刃','迪卢克',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城重锤','北斗',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城重锤','重云',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城重锤','早柚',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城重锤','迪卢克',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星陨巨剑','迪卢克',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星陨巨剑','法尔伽',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星陨巨剑','阿蕾奇诺',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星陨巨剑','玛薇卡',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍穹之楔','魈',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍穹之楔','赛诺',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍穹之楔','胡桃',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('苍穹之楔','香菱',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜的裁决','赛诺',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜的裁决','雷电将军',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜的裁决','托马',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜的裁决','胡桃',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星陨之枪','香菱',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星陨之枪','雷电将军',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星陨之枪','云堇',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星陨之枪','胡桃',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月轮之誓','托马',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月轮之誓','瑶瑶',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月轮之誓','胡桃',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月轮之誓','香菱',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜华之矛','申鹤',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜华之矛','罗莎莉亚',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜华之矛','胡桃',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜华之矛','香菱',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星轨秘录','纳西妲',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星轨秘录','八重神子',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星轨秘录','烟绯',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星轨秘录','可莉',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月辉之书','纳西妲',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月辉之书','菈乌玛',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月辉之书','丽莎',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月辉之书','可莉',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜华咏叹','烟绯',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜华咏叹','可莉',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜华咏叹','凝光',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜华咏叹','珊瑚宫心海',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城秘典','莫娜',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城秘典','砂糖',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城秘典','白术',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城秘典','可莉',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('晨星绪论','流浪者',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('晨星绪论','鹿野院平藏',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('晨星绪论','可莉',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('晨星绪论','珊瑚宫心海',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('逐星之矢','甘雨',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('逐星之矢','夜兰',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('逐星之矢','提纳里',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('逐星之矢','宵宫',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜羽长弓','埃洛伊',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜羽长弓','菲谢尔',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜羽长弓','迪奥娜',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('霜羽长弓','宵宫',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城猎弓','温迪',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城猎弓','柯莱',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城猎弓','珐露珊',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('烬城猎弓','宵宫',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜回响','五郎',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜回响','迪奥娜',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜回响','夜兰',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('幽夜回响','宵宫',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星海之笺','达达利亚',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星海之笺','宵宫',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星海之笺','林尼',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星海之笺','夜兰',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月影之弦','菲谢尔',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月影之弦','埃洛伊',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月影之弦','安柏',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('月影之弦','宵宫',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星穹之弦','温迪',0) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星穹之弦','夜兰',1) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星穹之弦','五郎',2) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);
INSERT INTO t_weapon_user (weapon_name,user_name,sort_order) VALUES ('星穹之弦','宵宫',3) ON DUPLICATE KEY UPDATE sort_order=VALUES(sort_order);

-- ---------- 4. 角色圣遗物推荐订正 / 新套装分配 ----------
UPDATE t_character SET artifacts='渡过烈火的贤人 4件套' WHERE name='迪希雅';
UPDATE t_character SET artifacts='谐律异想断章 4件套' WHERE name='阿蕾奇诺';
UPDATE t_character SET artifacts='渡过烈火的贤人 4件套' WHERE name='安柏';
UPDATE t_character SET artifacts='天之美赐 4件套' WHERE name='班尼特';
UPDATE t_character SET artifacts='长夜之誓 4件套' WHERE name='嘉明';
UPDATE t_character SET artifacts='渡过烈火的贤人 4件套' WHERE name='托马';
UPDATE t_character SET artifacts='天之美赐 4件套' WHERE name='夏沃蕾';
UPDATE t_character SET artifacts='海染砗磲 4件套' WHERE name='珊瑚宫心海';
UPDATE t_character SET artifacts='来歆余响 4件套' WHERE name='神里绫人';
UPDATE t_character SET artifacts='花海甘露之光 4件套' WHERE name='妮露';
UPDATE t_character SET artifacts='黑曜秘典 4件套' WHERE name='玛拉妮';
UPDATE t_character SET artifacts='晨星与月的晓歌 4件套' WHERE name='爱诺';
UPDATE t_character SET artifacts='谐律异想断章 4件套' WHERE name='克洛琳德';
UPDATE t_character SET artifacts='染血的骑士道 4件套' WHERE name='雷泽';
UPDATE t_character SET artifacts='乐园遗落之花 4件套' WHERE name='久岐忍';
UPDATE t_character SET artifacts='天之美赐 4件套' WHERE name='伊安珊';
UPDATE t_character SET artifacts='染血的骑士道 4件套' WHERE name='优菈';
UPDATE t_character SET artifacts='晨星与月的晓歌 4件套' WHERE name='爱可菲';
UPDATE t_character SET artifacts='深廊终曲 4件套' WHERE name='丝柯克';
UPDATE t_character SET artifacts='影中沉凝的幻灭 4件套' WHERE name='罗莎莉亚';
UPDATE t_character SET artifacts='染血的骑士道 4件套' WHERE name='菲米尼';
UPDATE t_character SET artifacts='长夜之誓 4件套' WHERE name='魈';
UPDATE t_character SET artifacts='长夜之誓 4件套' WHERE name='闲云';
UPDATE t_character SET artifacts='回声之林夜话 4件套' WHERE name='娜维娅';
UPDATE t_character SET artifacts='悠古的磐岩 4件套' WHERE name='五郎';
UPDATE t_character SET artifacts='未竟的遐思 4件套' WHERE name='艾梅莉埃';
UPDATE t_character SET artifacts='未竟的遐思 4件套' WHERE name='基尼奇';
UPDATE t_character SET artifacts='未竟的遐思 4件套' WHERE name='杜林';
UPDATE t_character SET artifacts='风起之日 4件套' WHERE name='洛恩';
UPDATE t_character SET artifacts='影中沉凝的幻灭 4件套' WHERE name='奥黛塔';
UPDATE t_character SET artifacts='血红之证 4件套' WHERE name='薇斯纳';
UPDATE t_character SET artifacts='风起之日 4件套' WHERE name='沃雅妮莎';
UPDATE t_character SET artifacts='血红之证 4件套' WHERE name='米提亚';
UPDATE t_character SET artifacts='炉火融炼之心 4件套' WHERE name='瓦列里';
UPDATE t_character SET artifacts='炉火融炼之心 4件套' WHERE name='哥伦比娅';
UPDATE t_character SET artifacts='晨星与月的晓歌 4件套' WHERE name='桑多涅';
UPDATE t_character SET artifacts='风起之日 4件套' WHERE name='艾莉丝';
UPDATE t_character SET artifacts='炉火融炼之心 4件套' WHERE name='旅行者·冰';
