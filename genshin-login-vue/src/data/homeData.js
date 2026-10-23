// ============================================================
// 首页数据：角色养成攻略 / 角色武器推荐 / 武器养成攻略 / 角色队伍推荐
//
// ★ 预留后端接口（后端暂未实现，前端先用本地演示数据渲染；
//   HomePage.vue 中的 loadFromBackend() 已按下面约定请求，
//   后端实现后无需改前端即可自动切换为接口数据）：
//
//   GET /api/home/search?keyword=xxx   全站搜索（角色/武器/配队）
//   GET /api/home/characters           角色养成攻略列表
//   GET /api/home/char-weapons         角色武器推荐列表
//   GET /api/home/weapons              武器养成攻略列表
//   GET /api/home/teams                角色队伍推荐列表
//
//   响应结构约定（与登录/注册接口保持一致）：
//   { "code": 200, "message": "success", "data": [ ... ] }
// ============================================================

// 元素 → 所属国度（复用 nations.js 的七国符文与配色作为元素图标）
export const ELEMENT_NATION = {
  风: '蒙德',
  岩: '璃月',
  雷: '稻妻',
  草: '须弥',
  水: '枫丹',
  火: '纳塔',
  冰: '至冬'
}

// 角色养成攻略
export const CHARACTERS = [
  {
    id: 1,
    name: '胡桃',
    element: '火',
    rarity: 5,
    role: '主C · 蒸发',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '炽烈的炎之魔女 4件套',
    mainStats: '时之沙：生命% / 空之杯：火伤% / 理之冠：暴击',
    summary: 'E 技能生命转攻击，重击蒸发打出高额伤害，注意控血与行秋/夜兰挂水。'
  },
  {
    id: 2,
    name: '钟离',
    element: '岩',
    rarity: 5,
    role: '盾辅 · 减抗',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%',
    summary: '长按 E 生成玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。'
  },
  {
    id: 3,
    name: '纳西妲',
    element: '草',
    rarity: 5,
    role: '副C · 草辅',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '深林的记忆 4件套',
    mainStats: '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击',
    summary: 'E 全场挂草 + Q 增伤，绽放/激化队伍核心，精通收益极高。'
  },
  {
    id: 4,
    name: '雷电将军',
    element: '雷',
    rarity: 5,
    role: '主C · 充能辅',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '绝缘之旗印 4件套',
    mainStats: '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击',
    summary: 'Q 高爆发 + 全队充能，充能效率 230%+ 后叠双暴，开大期间无敌帧多。'
  },
  {
    id: 5,
    name: '神里绫华',
    element: '冰',
    rarity: 5,
    role: '主C · 永冻',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '冰风迷途的勇士 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '重击 + Q 站场输出，配合莫娜/心海挂水实现永冻，霰步贴近开怪。'
  },
  {
    id: 6,
    name: '甘雨',
    element: '冰',
    rarity: 5,
    role: '主C · 蓄力狙',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '冰风迷途的勇士 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '重击霜华矢范围二段伤害，操作上限高，怕打断可带盾辅。'
  },
  {
    id: 7,
    name: '枫原万叶',
    element: '风',
    rarity: 5,
    role: '聚怪 · 增伤辅',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：精通 / 空之杯：精通 / 理之冠：精通',
    summary: 'E 聚怪 + 扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。'
  },
  {
    id: 8,
    name: '温迪',
    element: '风',
    rarity: 5,
    role: '聚怪 · 充能辅',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：精通 / 空之杯：精通 / 理之冠：暴击',
    summary: 'Q 大范围聚怪控场，对群环境无可替代，充能 160%+ 循环流畅。'
  }
]

// 角色武器推荐
export const CHAR_WEAPONS = [
  {
    character: '胡桃',
    element: '火',
    best: [
      { name: '护摩之杖', rarity: 5, reason: '生命转攻，完美契合低血输出机制' },
      { name: '决斗之枪', rarity: 4, reason: '纪行免费获取，暴击率副属性缓解双暴压力' }
    ]
  },
  {
    character: '钟离',
    element: '岩',
    best: [
      { name: '黑缨枪', rarity: 3, reason: '生命%副属性，护盾量直接拉满，性价比之王' },
      { name: '贯虹之槊', rarity: 5, reason: '泛用五星长柄，攻击力提升盾伤与Q伤害' }
    ]
  },
  {
    character: '纳西妲',
    element: '草',
    best: [
      { name: '千夜浮梦', rarity: 5, reason: '专武，精通+全队元素增益' },
      { name: '流浪的晚星', rarity: 4, reason: '精通副属性，锻造即可入手' }
    ]
  },
  {
    character: '雷电将军',
    element: '雷',
    best: [
      { name: '薙草之稻光', rarity: 5, reason: '专武，充能转攻击，爆发收益极高' },
      { name: '渔获', rarity: 4, reason: '钓鱼免费兑换，充能+Q增伤，平民神器' }
    ]
  },
  {
    character: '神里绫华',
    element: '冰',
    best: [
      { name: '雾切之回光', rarity: 5, reason: '专武，冰伤加成与普攻增伤全面契合' },
      { name: '天目影打刀', rarity: 4, reason: '稻妻锻造，充能缓解Q启动压力' }
    ]
  },
  {
    character: '甘雨',
    element: '冰',
    best: [
      { name: '阿莫斯之弓', rarity: 5, reason: '蓄力箭增伤，霜华矢二段全额吃到' },
      { name: '破魔之弓', rarity: 4, reason: '锻造获取，满能量重击增伤 32%' }
    ]
  },
  {
    character: '枫原万叶',
    element: '风',
    best: [
      { name: '苍古自由之誓', rarity: 5, reason: '精通+全队普攻/重击增伤' },
      { name: '铁蜂刺', rarity: 4, reason: '锻造获取，精通副属性扩散收益稳定' }
    ]
  },
  {
    character: '温迪',
    element: '风',
    best: [
      { name: '终末嗟叹之诗', rarity: 5, reason: '精通+充能+全队精通增益，辅助最优' },
      { name: '西风猎弓', rarity: 4, reason: '充能副属性，帮助全队回能' }
    ]
  }
]

// 武器养成攻略
export const WEAPONS = [
  {
    name: '护摩之杖',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：暴击伤害',
    desc: '生命值提升 20%；基于生命上限的 0.8% 获得攻击力加成。',
    users: ['胡桃', '魈', '仆人']
  },
  {
    name: '雾切之回光',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：暴击伤害',
    desc: '获得元素伤害加成，普攻命中叠层进一步提高冰伤。',
    users: ['神里绫华', '神里绫人', '刻晴']
  },
  {
    name: '阿莫斯之弓',
    rarity: 5,
    type: '弓',
    stat: '副属性：攻击力',
    desc: '普通攻击与瞄准射击伤害提升，箭矢飞行每 0.1s 再增伤 8%。',
    users: ['甘雨', '提纳里', '宵宫']
  },
  {
    name: '薙草之稻光',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：元素充能效率',
    desc: '充能效率超过 100% 的部分，每 1% 转换为 0.4% 攻击力。',
    users: ['雷电将军', '香菱', '申鹤']
  },
  {
    name: '苍古自由之誓',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：元素精通',
    desc: '触发元素反应后，全队普通攻击/重击伤害提升，持续 12s。',
    users: ['枫原万叶', '久岐忍', '琴']
  },
  {
    name: '千夜浮梦',
    rarity: 5,
    type: '法器',
    stat: '副属性：元素精通',
    desc: '按队伍元素类型数量提供精通与全队元素伤害加成。',
    users: ['纳西妲', '砂糖', '八重神子']
  },
  {
    name: '和璞鸢',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：暴击率',
    desc: '命中叠层提高攻击力，满层额外增伤，持续站场收益最大。',
    users: ['魈', '罗莎莉亚', '胡桃']
  },
  {
    name: '磐岩结绿',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：暴击率',
    desc: '生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。',
    users: ['神里绫人', '刻晴', '班尼特']
  }
]

// 角色队伍推荐
export const TEAMS = [
  {
    name: '胡桃蒸发队',
    core: '重击蒸发 · 高额单体爆发',
    members: [
      { name: '胡桃', element: '火' },
      { name: '行秋', element: '水' },
      { name: '枫原万叶', element: '风' },
      { name: '钟离', element: '岩' }
    ],
    tip: '行秋先 Q 挂水 → 万叶扩散减抗 → 钟离开盾 → 胡桃 E 后重击输出。'
  },
  {
    name: '雷九万班',
    core: '雷电将军爆发流',
    members: [
      { name: '雷电将军', element: '雷' },
      { name: '九条裟罗', element: '雷' },
      { name: '枫原万叶', element: '风' },
      { name: '班尼特', element: '火' }
    ],
    tip: '九条 E+Q 增攻 → 班尼特 Q 加攻 → 万叶扩散 → 雷神 Q 一刀收割。'
  },
  {
    name: '神鹤万心（永冻）',
    core: '冻结控场 · 绫华站场',
    members: [
      { name: '神里绫华', element: '冰' },
      { name: '申鹤', element: '冰' },
      { name: '枫原万叶', element: '风' },
      { name: '珊瑚宫心海', element: '水' }
    ],
    tip: '心海 E 挂水 → 万叶聚怪 → 申鹤 E 增冰伤 → 绫华霰步贴脸 Q+重击。'
  },
  {
    name: '纳西妲绽放队',
    core: '草原核绽放 · 范围高伤',
    members: [
      { name: '纳西妲', element: '草' },
      { name: '妮露', element: '水' },
      { name: '夜兰', element: '水' },
      { name: '旅行者(草)', element: '草' }
    ],
    tip: '双水双草凑加成 → 妮露 E 丰穰之核 → 纳西妲 E 挂草生成草原核炸场。'
  },
  {
    name: '甘雨永冻队',
    core: '范围永冻 · 蓄力狙杀',
    members: [
      { name: '甘雨', element: '冰' },
      { name: '莫娜', element: '水' },
      { name: '温迪', element: '风' },
      { name: '迪奥娜', element: '冰' }
    ],
    tip: '温迪 Q 聚怪 → 莫娜 Q 挂水增伤 → 甘雨远程蓄力箭逐个点名。'
  },
  {
    name: '国家队',
    core: '元素反应 · 亲民四星',
    members: [
      { name: '香菱', element: '火' },
      { name: '行秋', element: '水' },
      { name: '班尼特', element: '火' },
      { name: '重云', element: '冰' }
    ],
    tip: '全四星高性价比：班尼特加攻治疗 → 行秋挂水 → 香菱 Q 蒸发 → 重云附魔收割。'
  }
]
