// ============================================================
// 首页数据：角色养成攻略 / 角色武器推荐 / 武器养成攻略 / 角色队伍推荐
// 覆盖原神全量已实装角色（7 元素，五星+四星）与全量五星武器+主要四星武器
// ============================================================

export const ELEMENT_NATION = {
  风: '蒙德', 岩: '璃月', 雷: '稻妻', 草: '须弥', 水: '枫丹', 火: '纳塔', 冰: '至冬'
}

export const CHARACTERS = [
  {
    id: 1,
    name: '迪卢克',
    element: '火',
    rarity: 5,
    role: '主C · 蒸发',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '炽烈的炎之魔女 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '黎明双子之一，E 三段+Q 火鸟爆发，配合行秋/夜兰蒸发稳定出伤。'
  },
  {
    id: 2,
    name: '可莉',
    element: '火',
    rarity: 5,
    role: '主C · 站场',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '炽烈的炎之魔女 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '重击与诡雷输出，操作门槛略高，对群控场能力强。'
  },
  {
    id: 3,
    name: '胡桃',
    element: '火',
    rarity: 5,
    role: '主C · 蒸发',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '炽烈的炎之魔女 4件套',
    mainStats: '时之沙：生命% / 空之杯：火伤% / 理之冠：暴击',
    summary: 'E 生命转攻击，重击蒸发高额伤害，注意控血与行秋/夜兰挂水。'
  },
  {
    id: 4,
    name: '宵宫',
    element: '火',
    rarity: 5,
    role: '主C · 普攻',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '追忆之注连 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: 'E 附魔普攻高频输出，对单极强，需盾辅保站场。'
  },
  {
    id: 5,
    name: '迪希雅',
    element: '火',
    rarity: 5,
    role: '副C · 减伤',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '炽烈的炎之魔女 4件套',
    mainStats: '时之沙：生命% / 空之杯：火伤% / 理之冠：暴击',
    summary: '领域减伤+抗打断，后台挂火，常驻池火系辅C。'
  },
  {
    id: 6,
    name: '林尼',
    element: '火',
    rarity: 5,
    role: '主C · 蓄力',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '逐影猎人 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '蓄力箭+猫猫弹叠层，配芙宁娜蒸发出伤，枫丹火C代表。'
  },
  {
    id: 7,
    name: '阿蕾奇诺',
    element: '火',
    rarity: 5,
    role: '主C · 战技',
    talents: '元素战技 > 普通攻击 > 元素爆发',
    artifacts: '谐律的异想 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '仆人，E 印记引爆高额火伤，消耗「生命之契」强化重击，直伤型强火C。'
  },
  {
    id: 8,
    name: '玛薇卡',
    element: '火',
    rarity: 5,
    role: '主C · 火神',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '火神，Q 消耗夜魂值爆发高额火伤，E 后台挂火，纳塔体系核心，配希诺宁/茜特菈莉组建战舰。'
  },
  {
    id: 9,
    name: '安柏',
    element: '火',
    rarity: 4,
    role: '副C · 破盾',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '炽烈的炎之魔女 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '兔兔伯爵嘲讽+Q 火雨破冰盾，前期探索担当。'
  },
  {
    id: 10,
    name: '班尼特',
    element: '火',
    rarity: 4,
    role: '增攻 · 治疗',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '宗室之仪 4件套',
    mainStats: '时之沙：充能% / 空之杯：生命% / 理之冠：治疗%',
    summary: 'Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。'
  },
  {
    id: 11,
    name: '香菱',
    element: '火',
    rarity: 4,
    role: '副C · 后台火',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '绝缘之旗印 4件套',
    mainStats: '时之沙：充能% / 空之杯：火伤% / 理之冠：暴击',
    summary: '旋火轮后台挂火+高蒸发，国家队核心，四星顶配副C。'
  },
  {
    id: 12,
    name: '辛焱',
    element: '火',
    rarity: 4,
    role: '盾辅 · 物伤',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '昔日宗室之仪 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '火盾+物理加成，泛用性一般，厨力向。'
  },
  {
    id: 13,
    name: '烟绯',
    element: '火',
    rarity: 4,
    role: '主C · 重击',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '流浪大地的乐团 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '火系四星站场重击输出，叠印增伤，前期好用的火C。'
  },
  {
    id: 14,
    name: '嘉明',
    element: '火',
    rarity: 4,
    role: '主C · 下落',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '炽烈的炎之魔女 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '下落攻击火伤，Q 召唤跳台，配水C蒸发，纳塔四星火C。'
  },
  {
    id: 15,
    name: '托马',
    element: '火',
    rarity: 4,
    role: '盾辅 · 挂火',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：充能% / 空之杯：生命% / 理之冠：生命%',
    summary: '火盾+后台挂火，纳塔体系护盾兼蒸发工具人。'
  },
  {
    id: 16,
    name: '夏沃蕾',
    element: '火',
    rarity: 4,
    role: '增攻 · 奶',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: '超载队专拐，降低敌人抗性+增攻，雷火队核心四星辅助。'
  },
  {
    id: 17,
    name: '莫娜',
    element: '水',
    rarity: 5,
    role: '增伤 · 控制',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '绝缘之旗印 4件套',
    mainStats: '时之沙：充能% / 空之杯：水伤% / 理之冠：暴击',
    summary: 'Q 挂泡影增伤+控制，永冻/核爆体系经典辅助。'
  },
  {
    id: 18,
    name: '达达利亚',
    element: '水',
    rarity: 5,
    role: '主C · 断流',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '沉沦之心 4件套',
    mainStats: '时之沙：攻击% / 空之杯：水伤% / 理之冠：暴击',
    summary: '公子，E 近战双刀断流群伤，配万叶/香菱蒸发队。'
  },
  {
    id: 19,
    name: '珊瑚宫心海',
    element: '水',
    rarity: 5,
    role: '治疗 · 挂水',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: 'E 水母持续治疗+挂水，永冻与绽放队核心生存位。'
  },
  {
    id: 20,
    name: '神里绫人',
    element: '水',
    rarity: 5,
    role: '主C · 站场',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '回声之林夜话 4件套',
    mainStats: '时之沙：攻击% / 空之杯：水伤% / 理之冠：暴击',
    summary: 'E 高频水剑站场输出，Q 后台水，配云堇/万叶出伤。'
  },
  {
    id: 21,
    name: '夜兰',
    element: '水',
    rarity: 5,
    role: '副C · 增伤',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '绝缘之旗印 4件套',
    mainStats: '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击',
    summary: 'Q 协同攻击后台水+全队增伤，泛用性极强的水副C。'
  },
  {
    id: 22,
    name: '妮露',
    element: '水',
    rarity: 5,
    role: '绽放核心',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 2件+花海甘露 2件',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：生命%',
    summary: '丰穰之核绽放队核心，纯水草队伍收益最大化。'
  },
  {
    id: 23,
    name: '那维莱特',
    element: '水',
    rarity: 5,
    role: '主C · 重击',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '逐影猎人 4件套',
    mainStats: '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击',
    summary: '重击蓄力水炮高频群伤，生命主词条成型，芙宁娜/万叶黄金搭档。'
  },
  {
    id: 24,
    name: '芙宁娜',
    element: '水',
    rarity: 5,
    role: '增伤辅 · 后台水',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '黄金剧团 4件套',
    mainStats: '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击',
    summary: '水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。'
  },
  {
    id: 25,
    name: '希格雯',
    element: '水',
    rarity: 5,
    role: '治疗 · 副C',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '昔时之歌 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: '水泡治疗+后台协同，辅助兼副C，生命堆满即可。'
  },
  {
    id: 26,
    name: '玛拉妮',
    element: '水',
    rarity: 5,
    role: '主C · 蒸发',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：生命% / 空之杯：水伤% / 理之冠：暴击',
    summary: '纳塔水C，冲浪蓄力重击蒸发，配火系挂火出伤。'
  },
  {
    id: 27,
    name: '芭芭拉',
    element: '水',
    rarity: 4,
    role: '治疗 · 挂水',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '被怜爱的少女 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: '新手奶妈，E 环绕治疗，Q 全队抬血，水环挂水。'
  },
  {
    id: 28,
    name: '塔利雅',
    element: '水',
    rarity: 4,
    role: '盾辅 · 挂水',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：充能% / 空之杯：生命% / 理之冠：生命%',
    summary: '水盾+减抗，纳塔水系辅助兼生存位。'
  },
  {
    id: 29,
    name: '行秋',
    element: '水',
    rarity: 4,
    role: '副C · 减伤',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '绝缘之旗印 4件套',
    mainStats: '时之沙：充能% / 空之杯：水伤% / 理之冠：暴击',
    summary: 'Q 雨帘剑后台水+减伤回血，蒸发/绽放万金油四星。'
  },
  {
    id: 30,
    name: '坎蒂丝',
    element: '水',
    rarity: 4,
    role: '盾辅 · 附魔',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '昔日宗室之仪 4件套',
    mainStats: '时之沙：充能% / 空之杯：生命% / 理之冠：生命%',
    summary: '水盾+普攻水附魔，配合水系主C增伤。'
  },
  {
    id: 31,
    name: '爱诺',
    element: '水',
    rarity: 4,
    role: '副C · 挂水',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '纺月的夜歌 4件套',
    mainStats: '时之沙：充能% / 空之杯：水伤% / 理之冠：暴击',
    summary: '挪德卡莱机械发明家，后台挂水+领域水伤，月反应水载体。'
  },
  {
    id: 32,
    name: '刻晴',
    element: '雷',
    rarity: 5,
    role: '主C · 激化',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '如雷的盛怒 4件套',
    mainStats: '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击',
    summary: 'E 瞬移+重击输出，配草系打激化收益高。'
  },
  {
    id: 33,
    name: '雷电将军',
    element: '雷',
    rarity: 5,
    role: '主C · 充能辅',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '绝缘之旗印 4件套',
    mainStats: '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击',
    summary: 'Q 高爆发+全队充能，充能 230%+ 叠双暴，开大无敌帧多。'
  },
  {
    id: 34,
    name: '八重神子',
    element: '雷',
    rarity: 5,
    role: '副C · 杀生樱',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '黄金剧团 4件套',
    mainStats: '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击',
    summary: 'E 杀生樱后台雷伤，Q 天狐霆雷爆发，激化队副C。'
  },
  {
    id: 35,
    name: '赛诺',
    element: '雷',
    rarity: 5,
    role: '主C · 激化',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '饰金之梦 4件套',
    mainStats: '时之沙：精通 / 空之杯：雷伤% / 理之冠：暴击',
    summary: 'Q 变身长轴激化输出，配草系持续挂草。'
  },
  {
    id: 36,
    name: '克洛琳德',
    element: '雷',
    rarity: 5,
    role: '主C · 突进',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '谐律的异想 4件套',
    mainStats: '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击',
    summary: '枪剑突进站场，依赖雷草反应（激化/超载），枫丹热门雷C。'
  },
  {
    id: 37,
    name: '瓦蕾莎',
    element: '雷',
    rarity: 5,
    role: '主C · 站场',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击',
    summary: '纳塔雷C，夜魂体系站场输出，配希诺宁出伤。'
  },
  {
    id: 38,
    name: '伊涅芙',
    element: '雷',
    rarity: 5,
    role: '辅助 · 月感电',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '穹境示现之夜 4件套',
    mainStats: '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击',
    summary: '月感电体系辅助，与菲林斯组成菲机组合的核心拐。'
  },
  {
    id: 39,
    name: '菲林斯',
    element: '雷',
    rarity: 5,
    role: '主C · 月感电',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '穹境示现之夜 4件套',
    mainStats: '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击',
    summary: '月感电站场主C，幽焰显迹模式输出，驱动月感电反应的执灯人。'
  },
  {
    id: 40,
    name: '丽莎',
    element: '雷',
    rarity: 4,
    role: '副C · 破防',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '如雷的盛怒 4件套',
    mainStats: '时之沙：精通 / 空之杯：雷伤% / 理之冠：暴击',
    summary: 'Q 降防+范围雷伤，新手期好用雷辅。'
  },
  {
    id: 41,
    name: '雷泽',
    element: '雷',
    rarity: 4,
    role: '主C · 物理',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '苍白之火 4件套',
    mainStats: '时之沙：攻击% / 空之杯：物伤% / 理之冠：暴击',
    summary: '狼少年，普攻物理站场，Q 召唤狼魂协同，前期主C。'
  },
  {
    id: 42,
    name: '菲谢尔',
    element: '雷',
    rarity: 4,
    role: '副C · 奥兹',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '黄金剧团 4件套',
    mainStats: '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击',
    summary: '奥兹后台持续雷伤，激化/超导队经典副C。'
  },
  {
    id: 43,
    name: '北斗',
    element: '雷',
    rarity: 4,
    role: '副C · 反击',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '绝缘之旗印 4件套',
    mainStats: '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击',
    summary: 'Q 闪雷后台雷伤+减伤，E 弹反高伤，泛用副C。'
  },
  {
    id: 44,
    name: '九条裟罗',
    element: '雷',
    rarity: 4,
    role: '增攻 · 副C',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '绝缘之旗印 4件套',
    mainStats: '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击',
    summary: '雷系专拐，E/Q 为雷C大幅加攻，雷九万班核心。'
  },
  {
    id: 45,
    name: '久岐忍',
    element: '雷',
    rarity: 4,
    role: '治疗 · 挂雷',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '饰金之梦 4件套',
    mainStats: '时之沙：精通 / 空之杯：精通 / 理之冠：精通',
    summary: 'E 雷环持续治疗+挂雷，超绽放队核心打火机。'
  },
  {
    id: 46,
    name: '多莉',
    element: '雷',
    rarity: 4,
    role: '治疗 · 充能',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '被怜爱的少女 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: 'Q 回能+治疗，泛用雷系生存辅助。'
  },
  {
    id: 47,
    name: '赛索斯',
    element: '雷',
    rarity: 4,
    role: '主C · 蓄力',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '饰金之梦 4件套',
    mainStats: '时之沙：精通 / 空之杯：雷伤% / 理之冠：暴击',
    summary: '蓄力雷箭，激化队四星雷C。'
  },
  {
    id: 48,
    name: '欧洛伦',
    element: '雷',
    rarity: 4,
    role: '副C · 夜魂',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击',
    summary: '纳塔雷副C，夜魂体系后台雷，配恰斯卡等主C。'
  },
  {
    id: 49,
    name: '伊安珊',
    element: '雷',
    rarity: 4,
    role: '辅助 · 增攻',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：充能% / 空之杯：生命% / 理之冠：生命%',
    summary: '纳塔雷辅，为前台角色增攻，护盾生存兼备。'
  },
  {
    id: 50,
    name: '七七',
    element: '冰',
    rarity: 5,
    role: '治疗 · 挂冰',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '被怜爱的少女 4件套',
    mainStats: '时之沙：攻击% / 空之杯：攻击% / 理之冠：治疗%',
    summary: 'E/Q 持续治疗+符咒回血，奶量充足，常驻池治疗。'
  },
  {
    id: 51,
    name: '甘雨',
    element: '冰',
    rarity: 5,
    role: '主C · 蓄力狙',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '冰风迷途的勇士 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '重击霜华矢二段伤害，操作上限高，怕打断可带盾辅。'
  },
  {
    id: 52,
    name: '优菈',
    element: '冰',
    rarity: 5,
    role: '主C · 物理',
    talents: '元素爆发 > 普通攻击 > 元素战技',
    artifacts: '苍白之火 4件套',
    mainStats: '时之沙：攻击% / 空之杯：物伤% / 理之冠：暴击',
    summary: '光降之剑爆发，物理主C天花板，配雷电将军超导减抗。'
  },
  {
    id: 53,
    name: '神里绫华',
    element: '冰',
    rarity: 5,
    role: '主C · 永冻',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '冰风迷途的勇士 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '重击+Q 站场，配莫娜/心海挂水永冻，霰步贴近开怪。'
  },
  {
    id: 54,
    name: '申鹤',
    element: '冰',
    rarity: 5,
    role: '冰辅 · 增伤',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '昔日宗室之仪 4件套',
    mainStats: '时之沙：攻击% / 空之杯：攻击% / 理之冠：攻击%',
    summary: 'E 冰翎增冰伤，冰系专拐，永冻/纯冰队核心。'
  },
  {
    id: 55,
    name: '莱欧斯利',
    element: '冰',
    rarity: 5,
    role: '主C · 站场',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '逐影猎人 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '拳套站场输出，生命波动强化，枫丹冰C。'
  },
  {
    id: 56,
    name: '茜特菈莉',
    element: '冰',
    rarity: 5,
    role: '盾辅 · 减抗',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：充能% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '冰盾+减抗+副C，纳塔体系强力冰辅，玛薇卡战舰关键位。'
  },
  {
    id: 57,
    name: '爱可菲',
    element: '冰',
    rarity: 5,
    role: '冰辅 · 减抗',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '苍金之翼 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '盘活冰系的水冰减抗辅助，兼具副C输出，丝柯克等冰C核心拐。'
  },
  {
    id: 58,
    name: '丝柯克',
    element: '冰',
    rarity: 5,
    role: '主C · 冰水强队',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '奇想乐章 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '冰水队核心主C，配芙宁娜+爱可菲组建丝柯克冰水队，纳塔强力输出。'
  },
  {
    id: 59,
    name: '凯亚',
    element: '冰',
    rarity: 4,
    role: '副C · 挂冰',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '冰风迷途的勇士 4件套',
    mainStats: '时之沙：充能% / 空之杯：冰伤% / 理之冠：暴击',
    summary: 'Q 环绕冰轮后台挂冰，前期永冻工具人。'
  },
  {
    id: 60,
    name: '迪奥娜',
    element: '冰',
    rarity: 4,
    role: '盾辅 · 治疗',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：生命%',
    summary: '冰盾+治疗+充能，全面生存辅助，配甘雨等主C。'
  },
  {
    id: 61,
    name: '罗莎莉亚',
    element: '冰',
    rarity: 4,
    role: '副C · 暴击',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '昔日宗室之仪 4件套',
    mainStats: '时之沙：充能% / 空之杯：冰伤% / 理之冠：暴击',
    summary: 'Q 范围冰伤+全队暴击率加成，永冻/物伤队副C。'
  },
  {
    id: 62,
    name: '米卡',
    element: '冰',
    rarity: 4,
    role: '治疗 · 攻速',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '被怜爱的少女 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: '治疗+攻速加成，物理队辅助。'
  },
  {
    id: 63,
    name: '重云',
    element: '冰',
    rarity: 4,
    role: '副C · 附魔',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '冰风迷途的勇士 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: 'E 冰附魔领域，国家队传统成员，Q 爆发冰伤。'
  },
  {
    id: 64,
    name: '莱依拉',
    element: '冰',
    rarity: 4,
    role: '盾辅 · 挂冰',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：生命%',
    summary: '冰盾+后台挂冰，永冻队优质四星盾辅。'
  },
  {
    id: 65,
    name: '菲米尼',
    element: '冰',
    rarity: 4,
    role: '主C · 物伤',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '苍白之火 4件套',
    mainStats: '时之沙：攻击% / 空之杯：物伤% / 理之冠：暴击',
    summary: '物伤与冰伤混伤主C，配超导出伤。'
  },
  {
    id: 66,
    name: '夏洛蒂',
    element: '冰',
    rarity: 4,
    role: '治疗 · 挂冰',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '被怜爱的少女 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: '冰系治疗+挂冰，永冻队生存位。'
  },
  {
    id: 67,
    name: '琴',
    element: '风',
    rarity: 5,
    role: '治疗 · 聚怪',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：治疗%',
    summary: '团长，Q 领域治疗+减抗，E 吹飞控场，常驻风系奶妈。'
  },
  {
    id: 68,
    name: '温迪',
    element: '风',
    rarity: 5,
    role: '聚怪 · 充能辅',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：精通 / 空之杯：精通 / 理之冠：暴击',
    summary: 'Q 大范围聚怪控场，对群无可替代，充能 160%+ 循环流畅。'
  },
  {
    id: 69,
    name: '魈',
    element: '风',
    rarity: 5,
    role: '主C · 下落',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '辰砂往生录 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击',
    summary: 'Q 风轮两立下落攻击，持续耗血换高额风伤，配盾辅保命。'
  },
  {
    id: 70,
    name: '枫原万叶',
    element: '风',
    rarity: 5,
    role: '聚怪 · 增伤辅',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：精通 / 空之杯：精通 / 理之冠：精通',
    summary: 'E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。'
  },
  {
    id: 71,
    name: '流浪者',
    element: '风',
    rarity: 5,
    role: '主C · 站场',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '沙上楼阁史话 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击',
    summary: 'E 悬浮普攻输出，配云堇/夜兰增伤，灵活风C。'
  },
  {
    id: 72,
    name: '闲云',
    element: '风',
    rarity: 5,
    role: '增伤 · 下落辅',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击',
    summary: 'Q 提高队友下落攻击伤害+治疗，下落流派核心辅助。'
  },
  {
    id: 73,
    name: '恰斯卡',
    element: '风',
    rarity: 5,
    role: '主C · 多元素',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击',
    summary: '夜魂体系风C，E 随队染色打多元素伤害，纳塔热门主C。'
  },
  {
    id: 74,
    name: '梦见月瑞希',
    element: '风',
    rarity: 5,
    role: '辅助 · 治疗',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：精通 / 空之杯：精通 / 理之冠：精通',
    summary: '风系治疗+扩散，纳塔风辅，泛用生存位。'
  },
  {
    id: 75,
    name: '砂糖',
    element: '风',
    rarity: 4,
    role: '增伤 · 聚怪',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：精通 / 空之杯：精通 / 理之冠：精通',
    summary: '扩散聚怪+全队精通加成，反应队平民增伤辅。'
  },
  {
    id: 76,
    name: '蓝砚',
    element: '风',
    rarity: 4,
    role: '盾辅 · 挂风',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：精通 / 空之杯：精通 / 理之冠：精通',
    summary: '风盾+扩散，稻妻风系辅助。'
  },
  {
    id: 77,
    name: '鹿野院平藏',
    element: '风',
    rarity: 4,
    role: '主C · 拳法',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击',
    summary: '拳法站场输出，E 叠层一拳爆发。'
  },
  {
    id: 78,
    name: '早柚',
    element: '风',
    rarity: 4,
    role: '治疗 · 滚地',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：治疗%',
    summary: '滚地赶路+治疗，探索与生存兼备的风奶。'
  },
  {
    id: 79,
    name: '珐露珊',
    element: '风',
    rarity: 4,
    role: '增伤 · 风拐',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：充能% / 空之杯：风伤% / 理之冠：暴击',
    summary: '风系专拐，大幅提升风C伤害，风队核心四星。'
  },
  {
    id: 80,
    name: '琳妮特',
    element: '风',
    rarity: 4,
    role: '副C · 挂风',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：充能% / 空之杯：风伤% / 理之冠：暴击',
    summary: '风系后台副C，Q 范围风伤，枫丹风辅。'
  },
  {
    id: 81,
    name: '伊法',
    element: '风',
    rarity: 4,
    role: '辅助 · 治疗',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：充能% / 空之杯：风伤% / 理之冠：暴击',
    summary: '纳塔风辅，治疗+扩散，辅助型角色。'
  },
  {
    id: 82,
    name: '雅珂达',
    element: '风',
    rarity: 4,
    role: '副C · 挂风',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：充能% / 空之杯：风伤% / 理之冠：暴击',
    summary: '风系后台副C，扩散减抗，泛用风辅。'
  },
  {
    id: 83,
    name: '钟离',
    element: '岩',
    rarity: 5,
    role: '盾辅 · 减抗',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%',
    summary: '长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。'
  },
  {
    id: 84,
    name: '阿贝多',
    element: '岩',
    rarity: 5,
    role: '副C · 后台',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '华馆梦醒形骸记 4件套',
    mainStats: '时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击',
    summary: 'E 阳华后台岩伤，防转攻，配钟离双岩共鸣。'
  },
  {
    id: 85,
    name: '荒泷一斗',
    element: '岩',
    rarity: 5,
    role: '主C · 站场',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '华馆梦醒形骸记 4件套',
    mainStats: '时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击',
    summary: 'Q 变身鬼王重击输出，防御转攻，配五郎纯岩队。'
  },
  {
    id: 86,
    name: '娜维娅',
    element: '岩',
    rarity: 5,
    role: '主C · 结晶弹片',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '回响之林 4件套',
    mainStats: '时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击',
    summary: '收集结晶弹片强化 E 炮击，对单极强，配钟离/班尼特出伤稳定。'
  },
  {
    id: 87,
    name: '千织',
    element: '岩',
    rarity: 5,
    role: '副C · 后台',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '华馆梦醒形骸记 4件套',
    mainStats: '时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击',
    summary: '后台岩副C，E 协同攻击，配娜维娅等岩C。'
  },
  {
    id: 88,
    name: '希诺宁',
    element: '岩',
    rarity: 5,
    role: '辅助 · 减抗',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击',
    summary: '夜魂体系岩辅，减抗+增伤，玛薇卡战舰关键辅助。'
  },
  {
    id: 89,
    name: '诺艾尔',
    element: '岩',
    rarity: 4,
    role: '盾辅 · 奶',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '华馆梦醒形骸记 4件套',
    mainStats: '时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击',
    summary: '盾+治疗+站场，六命质变，防御转攻四星主C。'
  },
  {
    id: 90,
    name: '凝光',
    element: '岩',
    rarity: 4,
    role: '主C · 重击',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '昔日宗室之仪 4件套',
    mainStats: '时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击',
    summary: '重击岩伤+屏风增伤，四星岩C，对单输出稳定。'
  },
  {
    id: 91,
    name: '云堇',
    element: '岩',
    rarity: 4,
    role: '增伤 · 普攻拐',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '华馆梦醒形骸记 4件套',
    mainStats: '时之沙：防御% / 空之杯：防御% / 理之冠：防御%',
    summary: 'Q 为普攻角色大幅增伤，普攻流核心拐。'
  },
  {
    id: 92,
    name: '五郎',
    element: '岩',
    rarity: 4,
    role: '增伤 · 岩拐',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '华馆梦醒形骸记 4件套',
    mainStats: '时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击',
    summary: '岩系专拐，纯岩队增伤核心，配一斗/诺艾尔。'
  },
  {
    id: 93,
    name: '卡齐娜',
    element: '岩',
    rarity: 4,
    role: '辅助 · 岩拐',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击',
    summary: '纳塔岩辅，增伤+岩队辅助。'
  },
  {
    id: 94,
    name: '叶洛亚',
    element: '岩',
    rarity: 4,
    role: '辅助 · 岩拐',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '千岩牢固 4件套',
    mainStats: '时之沙：充能% / 空之杯：生命% / 理之冠：生命%',
    summary: '岩系辅助，护盾+岩队增益。'
  },
  {
    id: 95,
    name: '提纳里',
    element: '草',
    rarity: 5,
    role: '主C · 激化',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '深林的记忆 4件套',
    mainStats: '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击',
    summary: '蓄力箭三段草伤，配雷电/菲谢尔打激化，常驻草C。'
  },
  {
    id: 96,
    name: '纳西妲',
    element: '草',
    rarity: 5,
    role: '副C · 草辅',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '深林的记忆 4件套',
    mainStats: '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击',
    summary: 'E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。'
  },
  {
    id: 97,
    name: '艾尔海森',
    element: '草',
    rarity: 5,
    role: '主C · 站场',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '饰金之梦 4件套',
    mainStats: '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击',
    summary: '光镜协同攻击草伤，激化队主C，操作灵活。'
  },
  {
    id: 98,
    name: '白术',
    element: '草',
    rarity: 5,
    role: '治疗 · 挂草',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '深林的记忆 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: '盾+治疗+后台挂草，绽放/激化队优质生存位。'
  },
  {
    id: 99,
    name: '艾梅莉埃',
    element: '草',
    rarity: 5,
    role: '副C · 后台草',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '深林的记忆 4件套',
    mainStats: '时之沙：攻击% / 空之杯：草伤% / 理之冠：暴击',
    summary: '后台持续草伤，配燃烧/激化队，草系副C。'
  },
  {
    id: 100,
    name: '基尼奇',
    element: '草',
    rarity: 5,
    role: '主C · 燃烧',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：攻击% / 空之杯：草伤% / 理之冠：暴击',
    summary: '纳塔草C，燃烧反应输出，配火系挂火。'
  },
  {
    id: 101,
    name: '菈乌玛',
    element: '草',
    rarity: 5,
    role: '月绽放 · 核心辅',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '纺月的夜歌 4件套',
    mainStats: '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击',
    summary: '月绽放体系核心，挂草触发月绽放，挪德卡莱「月」体系关键。'
  },
  {
    id: 102,
    name: '奈芙尔',
    element: '草',
    rarity: 5,
    role: '月绽放 · 站场主C',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '穹境示现之夜 4件套',
    mainStats: '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击',
    summary: '月绽放站场主C，消耗草露施放幻戏，配菈乌玛组建月绽放强队。'
  },
  {
    id: 103,
    name: '瑶瑶',
    element: '草',
    rarity: 4,
    role: '治疗 · 挂草',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '深林的记忆 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: '月桂治疗+挂草，激化队四星生存位。'
  },
  {
    id: 104,
    name: '柯莱',
    element: '草',
    rarity: 4,
    role: '副C · 挂草',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '深林的记忆 4件套',
    mainStats: '时之沙：充能% / 空之杯：草伤% / 理之冠：暴击',
    summary: '后台挂草，绽放/激化队四星副C。'
  },
  {
    id: 105,
    name: '卡维',
    element: '草',
    rarity: 4,
    role: '主C · 绽放',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '深林的记忆 4件套',
    mainStats: '时之沙：精通 / 空之杯：草伤% / 理之冠：暴击',
    summary: '绽放主C，Q 强化草原核，配水系打绽放。'
  },
  {
    id: 106,
    name: '绮良良',
    element: '草',
    rarity: 4,
    role: '盾辅 · 挂草',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '深林的记忆 4件套',
    mainStats: '时之沙：精通 / 空之杯：草伤% / 理之冠：精通',
    summary: '草盾+后台挂草，激化队四星盾辅。'
  },
  {
    id: 107,
    name: '法尔伽',
    element: '风',
    rarity: 5,
    role: '主C · 双持',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击',
    summary: '西风骑士团大团长·北风骑士，双持双手剑同时打出风元素与队友对应元素伤害，魔导角色。'
  },
  {
    id: 108,
    name: '尼可',
    element: '火',
    rarity: 5,
    role: '后台辅 · 护盾',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '魔女会「魔女」，E 全队加攻+炽光护盾，Q 召唤奥迹造影协同攻击，魔导体系核心辅助。'
  },
  {
    id: 109,
    name: '杜林',
    element: '火',
    rarity: 5,
    role: '主C · 燃烧',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '烬城勇者绘卷 4件套',
    mainStats: '时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击',
    summary: '「不熄灭的火」，燃烧反应火C，挪德卡莱火系输出，配草系挂草出伤。'
  },
  {
    id: 110,
    name: '兹白',
    element: '岩',
    rarity: 5,
    role: '主C · 月结晶',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '穹境示现之夜 4件套',
    mainStats: '时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击',
    summary: '月结晶反应输出，防御转攻，低配即可成型，配钟离或叶洛亚组建月结晶队。'
  },
  {
    id: 111,
    name: '洛恩',
    element: '冰',
    rarity: 5,
    role: '主C · 站场',
    talents: '普通攻击 > 元素爆发 > 元素战技',
    artifacts: '奇想乐章 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '西风骑士团远程小队副队长，管理「欢悦/争胜」双资源，遇强则强的冰C。'
  },
  {
    id: 112,
    name: '布伦妮',
    element: '风',
    rarity: 4,
    role: '副C · 扩散',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '翠绿之影 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击',
    summary: '「魔女猎人」，Q 召唤魅巫之铃后台风伤，触发扩散额外增伤。'
  },
  {
    id: 113,
    name: '奥黛塔',
    element: '冰',
    rarity: 5,
    role: '副C · 星超导',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '奇想乐章 4件套',
    mainStats: '时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击',
    summary: '至冬首席芭蕾舞者，星之楔冰，后台触发星超导/星扩散，持续挂冰+星烁增伤。'
  },
  {
    id: 114,
    name: '阿罗夏',
    element: '雷',
    rarity: 4,
    role: '治疗 · 挂雷',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '被怜爱的少女 4件套',
    mainStats: '时之沙：生命% / 空之杯：生命% / 理之冠：治疗%',
    summary: '至冬职业猎手，狼裔狙击手，治疗+持续挂雷的辅助角色。'
  },
  {
    id: 115,
    name: '薇斯纳',
    element: '风',
    rarity: 5,
    role: '主C · 星扩散',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '奇想乐章 4件套',
    mainStats: '时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击',
    summary: '冬契军司令官，星之楔风，召唤灵剑触发星扩散，可飞行探索。'
  },
  {
    id: 116,
    name: '沃雅妮莎',
    element: '水',
    rarity: 5,
    role: '治疗 · 辅助',
    talents: '元素战技 > 元素爆发 > 普通攻击',
    artifacts: '奇想乐章 4件套',
    mainStats: '时之沙：生命% / 空之杯：水伤% / 理之冠：治疗%',
    summary: '皇家剧团首席女高音，水妖形态演唱治疗，加攻+减抗，冻结/星扩散队辅助。'
  },
  {
    id: 117,
    name: '米提亚',
    element: '雷',
    rarity: 5,
    role: '主C · 星之楔',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '奇想乐章 4件套',
    mainStats: '时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击',
    summary: '至冬星之楔雷法器角色，星烁反应体系输出。'
  },
  {
    id: 118,
    name: '瓦列里',
    element: '雷',
    rarity: 4,
    role: '副C · 挂雷',
    talents: '元素爆发 > 元素战技 > 普通攻击',
    artifacts: '绝缘之旗印 4件套',
    mainStats: '时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击',
    summary: '至冬单手剑角色，后台挂雷副C，星烁反应辅助。'
  },
]

export const CHAR_WEAPONS = [
  {
    character: '迪卢克',
    element: '火',
    best: [
      { name: '狼的末路', rarity: 5, reason: '专武，攻击力提升范围伤害' },
      { name: '螭骨剑', rarity: 4, reason: '暴击率副属性，纪行获取' },
    ]
  },
  {
    character: '可莉',
    element: '火',
    best: [
      { name: '四风原典', rarity: 5, reason: '站场叠层增元素伤' },
      { name: '流浪乐章', rarity: 4, reason: '上场随机增伤，爆发' },
    ]
  },
  {
    character: '胡桃',
    element: '火',
    best: [
      { name: '护摩之杖', rarity: 5, reason: '生命转攻，契合低血输出' },
      { name: '决斗之枪', rarity: 4, reason: '暴击率副属性，缓解双暴压力' },
    ]
  },
  {
    character: '宵宫',
    element: '火',
    best: [
      { name: '飞雷之弦振', rarity: 5, reason: '专武，普攻增伤叠层' },
      { name: '弓藏', rarity: 4, reason: '普攻增伤，平民替代' },
    ]
  },
  {
    character: '林尼',
    element: '火',
    best: [
      { name: '冬极白星', rarity: 5, reason: '普攻重击叠层增伤' },
      { name: '破魔之弓', rarity: 4, reason: '满能量重击增伤' },
    ]
  },
  {
    character: '阿蕾奇诺',
    element: '火',
    best: [
      { name: '赤沙之王', rarity: 5, reason: '火伤强化，仆人核心' },
      { name: '决斗之枪', rarity: 4, reason: '暴击率副属性' },
    ]
  },
  {
    character: '玛薇卡',
    element: '火',
    best: [
      { name: '赤沙之王', rarity: 5, reason: '火神 Q 爆发契合' },
      { name: '狼的末路', rarity: 5, reason: '攻击力提升' },
    ]
  },
  {
    character: '班尼特',
    element: '火',
    best: [
      { name: '天空之刃', rarity: 5, reason: '高白值+充能，加攻最优' },
      { name: '西风剑', rarity: 4, reason: '充能副属性，辅助循环' },
    ]
  },
  {
    character: '香菱',
    element: '火',
    best: [
      { name: '护摩之杖', rarity: 5, reason: '暴伤副属性，爆发高' },
      { name: '渔获', rarity: 4, reason: '充能+Q 增伤，平民神器' },
    ]
  },
  {
    character: '达达利亚',
    element: '水',
    best: [
      { name: '冬极白星', rarity: 5, reason: '专武，普攻增伤' },
      { name: '弓藏', rarity: 4, reason: '普攻增伤替代' },
    ]
  },
  {
    character: '珊瑚宫心海',
    element: '水',
    best: [
      { name: '不灭月华', rarity: 5, reason: '专武，治疗+生命' },
      { name: '西风秘典', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '神里绫人',
    element: '水',
    best: [
      { name: '波乱月白经津', rarity: 5, reason: '专武，普攻增伤' },
      { name: '黑剑', rarity: 4, reason: '暴击率副属性，纪行' },
    ]
  },
  {
    character: '夜兰',
    element: '水',
    best: [
      { name: '若水', rarity: 5, reason: '专武，暴伤+生命' },
      { name: '西风猎弓', rarity: 4, reason: '充能副属性' },
    ]
  },
  {
    character: '妮露',
    element: '水',
    best: [
      { name: '圣显之钥', rarity: 5, reason: '专武，生命转精通' },
      { name: '西风剑', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '那维莱特',
    element: '水',
    best: [
      { name: '万世流涌大典', rarity: 5, reason: '专武，重击伤害生命收益' },
      { name: '祭礼残章', rarity: 4, reason: '平民替代' },
    ]
  },
  {
    character: '芙宁娜',
    element: '水',
    best: [
      { name: '静水流涌之辉', rarity: 5, reason: '专武，生命+增伤' },
      { name: '西风剑', rarity: 4, reason: '充能副属性' },
    ]
  },
  {
    character: '玛拉妮',
    element: '水',
    best: [
      { name: '万世流涌大典', rarity: 5, reason: '水C重击输出' },
      { name: '流浪乐章', rarity: 4, reason: '爆发增伤' },
    ]
  },
  {
    character: '行秋',
    element: '水',
    best: [
      { name: '祭礼剑', rarity: 5, reason: '重置战技，双E回能' },
      { name: '西风剑', rarity: 4, reason: '充能副属性' },
    ]
  },
  {
    character: '刻晴',
    element: '雷',
    best: [
      { name: '雾切之回光', rarity: 5, reason: '元素伤加成，激化输出' },
      { name: '黑剑', rarity: 4, reason: '暴击率副属性' },
    ]
  },
  {
    character: '雷电将军',
    element: '雷',
    best: [
      { name: '薙草之稻光', rarity: 5, reason: '专武，充能转攻' },
      { name: '渔获', rarity: 4, reason: '充能+Q 增伤，平民神器' },
    ]
  },
  {
    character: '八重神子',
    element: '雷',
    best: [
      { name: '神乐之真意', rarity: 5, reason: '专武，战技叠层' },
      { name: '流浪乐章', rarity: 4, reason: '爆发增伤' },
    ]
  },
  {
    character: '赛诺',
    element: '雷',
    best: [
      { name: '赤沙之杖', rarity: 5, reason: '专武，精通转攻' },
      { name: '决斗之枪', rarity: 4, reason: '暴击率副属性' },
    ]
  },
  {
    character: '克洛琳德',
    element: '雷',
    best: [
      { name: '赦罪之锏', rarity: 5, reason: '专武，突进雷伤' },
      { name: '匣里龙吟', rarity: 4, reason: '暴击副属性' },
    ]
  },
  {
    character: '瓦蕾莎',
    element: '雷',
    best: [
      { name: '赤沙之王', rarity: 5, reason: '夜魂雷C输出' },
      { name: '决斗之枪', rarity: 4, reason: '暴击率副属性' },
    ]
  },
  {
    character: '菲林斯',
    element: '雷',
    best: [
      { name: '血染荒城', rarity: 5, reason: '专武，月感电输出' },
      { name: '匣里龙吟', rarity: 4, reason: '暴击副属性' },
    ]
  },
  {
    character: '菲谢尔',
    element: '雷',
    best: [
      { name: '天空之翼', rarity: 5, reason: '暴击率，奥兹输出' },
      { name: '绝弦', rarity: 4, reason: '战技爆发增伤' },
    ]
  },
  {
    character: '久岐忍',
    element: '雷',
    best: [
      { name: '铁蜂刺', rarity: 4, reason: '精通副属性，超绽放' },
      { name: '西风剑', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '七七',
    element: '冰',
    best: [
      { name: '天空之刃', rarity: 5, reason: '高白值+充能，治疗' },
      { name: '祭礼剑', rarity: 4, reason: '重置战技' },
    ]
  },
  {
    character: '甘雨',
    element: '冰',
    best: [
      { name: '阿莫斯之弓', rarity: 5, reason: '蓄力箭增伤' },
      { name: '破魔之弓', rarity: 4, reason: '满能量重击增伤' },
    ]
  },
  {
    character: '优菈',
    element: '冰',
    best: [
      { name: '松籁响起之时', rarity: 5, reason: '物伤，攻速攻击' },
      { name: '雪葬的星银', rarity: 4, reason: '物伤副属性' },
    ]
  },
  {
    character: '神里绫华',
    element: '冰',
    best: [
      { name: '雾切之回光', rarity: 5, reason: '专武，冰伤加成' },
      { name: '天目影打刀', rarity: 4, reason: '充能缓解 Q 压力' },
    ]
  },
  {
    character: '申鹤',
    element: '冰',
    best: [
      { name: '息灾', rarity: 5, reason: '专武，攻击力提升' },
      { name: '西风长枪', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '莱欧斯利',
    element: '冰',
    best: [
      { name: '镜中月', rarity: 5, reason: '冰水体系输出' },
      { name: '黑剑', rarity: 4, reason: '暴击率副属性' },
    ]
  },
  {
    character: '茜特菈莉',
    element: '冰',
    best: [
      { name: '天空之刃', rarity: 5, reason: '充能+减抗辅助' },
      { name: '西风剑', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '爱可菲',
    element: '冰',
    best: [
      { name: '终末嗟叹之诗', rarity: 5, reason: '精通+全队增益' },
      { name: '西风弓', rarity: 4, reason: '充能副属性' },
    ]
  },
  {
    character: '丝柯克',
    element: '冰',
    best: [
      { name: '镜中月', rarity: 5, reason: '专武，冰水体系核心' },
      { name: '黑剑', rarity: 4, reason: '暴击率副属性' },
    ]
  },
  {
    character: '琴',
    element: '风',
    best: [
      { name: '天空之刃', rarity: 5, reason: '充能+治疗' },
      { name: '西风剑', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '温迪',
    element: '风',
    best: [
      { name: '终末嗟叹之诗', rarity: 5, reason: '精通+全队增益' },
      { name: '西风猎弓', rarity: 4, reason: '充能副属性' },
    ]
  },
  {
    character: '魈',
    element: '风',
    best: [
      { name: '和璞鸢', rarity: 5, reason: '专武，叠层增攻' },
      { name: '决斗之枪', rarity: 4, reason: '暴击率副属性' },
    ]
  },
  {
    character: '枫原万叶',
    element: '风',
    best: [
      { name: '苍古自由之誓', rarity: 5, reason: '精通+全队增伤' },
      { name: '铁蜂刺', rarity: 4, reason: '精通副属性' },
    ]
  },
  {
    character: '流浪者',
    element: '风',
    best: [
      { name: '四风原典', rarity: 5, reason: '站场叠层增伤' },
      { name: '流浪乐章', rarity: 4, reason: '爆发增伤' },
    ]
  },
  {
    character: '闲云',
    element: '风',
    best: [
      { name: '天空之卷', rarity: 5, reason: '攻击+增伤' },
      { name: '西风秘典', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '恰斯卡',
    element: '风',
    best: [
      { name: '天空之刃', rarity: 5, reason: '攻击+风伤' },
      { name: '铁蜂刺', rarity: 4, reason: '精通副属性' },
    ]
  },
  {
    character: '钟离',
    element: '岩',
    best: [
      { name: '黑缨枪', rarity: 3, reason: '生命%副属性，护盾拉满' },
      { name: '贯虹之槊', rarity: 5, reason: '攻击提升盾伤与Q' },
    ]
  },
  {
    character: '阿贝多',
    element: '岩',
    best: [
      { name: '磐岩结绿', rarity: 5, reason: '防御转攻，暴击率' },
      { name: '西风剑', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '荒泷一斗',
    element: '岩',
    best: [
      { name: '赤角石溃杵', rarity: 5, reason: '专武，防御转攻' },
      { name: '螭骨剑', rarity: 4, reason: '暴击率副属性' },
    ]
  },
  {
    character: '娜维娅',
    element: '岩',
    best: [
      { name: '裁叶萃光', rarity: 5, reason: '专武，结晶弹片增伤' },
      { name: '千岩长枪', rarity: 4, reason: '攻击+岩伤' },
    ]
  },
  {
    character: '希诺宁',
    element: '岩',
    best: [
      { name: '磐岩结绿', rarity: 5, reason: '暴击率，辅助' },
      { name: '西风剑', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '凝光',
    element: '岩',
    best: [
      { name: '四风原典', rarity: 5, reason: '站场叠层增伤' },
      { name: '流浪乐章', rarity: 4, reason: '爆发增伤' },
    ]
  },
  {
    character: '提纳里',
    element: '草',
    best: [
      { name: '猎人之径', rarity: 5, reason: '专武，精通转攻' },
      { name: '绝弦', rarity: 4, reason: '战技爆发增伤' },
    ]
  },
  {
    character: '纳西妲',
    element: '草',
    best: [
      { name: '千夜浮梦', rarity: 5, reason: '专武，精通+全队增益' },
      { name: '流浪的晚星', rarity: 4, reason: '精通副属性' },
    ]
  },
  {
    character: '艾尔海森',
    element: '草',
    best: [
      { name: '图莱杜拉的回忆', rarity: 5, reason: '专武，激化输出' },
      { name: '铁蜂刺', rarity: 4, reason: '精通副属性' },
    ]
  },
  {
    character: '白术',
    element: '草',
    best: [
      { name: '不灭月华', rarity: 5, reason: '治疗+生命' },
      { name: '西风秘典', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '艾梅莉埃',
    element: '草',
    best: [
      { name: '纺夜天镜', rarity: 5, reason: '草系后台输出' },
      { name: '流浪的晚星', rarity: 4, reason: '精通副属性' },
    ]
  },
  {
    character: '基尼奇',
    element: '草',
    best: [
      { name: '纺夜天镜', rarity: 5, reason: '燃烧输出' },
      { name: '流浪的晚星', rarity: 4, reason: '精通副属性' },
    ]
  },
  {
    character: '菈乌玛',
    element: '草',
    best: [
      { name: '纺夜天镜', rarity: 5, reason: '专武，月绽放核心' },
      { name: '祭礼残章', rarity: 4, reason: '精通副属性' },
    ]
  },
  {
    character: '奈芙尔',
    element: '草',
    best: [
      { name: '纺夜天镜', rarity: 5, reason: '专武，月绽放主C' },
      { name: '流浪的晚星', rarity: 4, reason: '精通副属性' },
    ]
  },
  {
    character: '法尔伽',
    element: '风',
    best: [
      { name: '狼的武功歌', rarity: 5, reason: '专武，攻速+四风诗系增伤' },
      { name: '天空之傲', rarity: 5, reason: '充能+范围风伤替代' },
    ]
  },
  {
    character: '尼可',
    element: '火',
    best: [
      { name: '尘光七谕', rarity: 5, reason: '专武，护盾后按攻加伤+回能' },
      { name: '西风秘典', rarity: 4, reason: '充能辅助' },
    ]
  },
  {
    character: '杜林',
    element: '火',
    best: [
      { name: '黑蚀', rarity: 5, reason: '魔导体系输出法器' },
      { name: '流浪乐章', rarity: 4, reason: '爆发增伤' },
    ]
  },
  {
    character: '兹白',
    element: '岩',
    best: [
      { name: '朏魄含光', rarity: 5, reason: '专武，数值暴力大幅提升输出' },
      { name: '磐岩结绿', rarity: 5, reason: '高双暴词条替代' },
    ]
  },
  {
    character: '洛恩',
    element: '冰',
    best: [
      { name: '灾悔', rarity: 5, reason: '专武，战技后普攻重击增伤' },
      { name: '决斗之枪', rarity: 4, reason: '暴击率副属性' },
    ]
  },
  {
    character: '布伦妮',
    element: '风',
    best: [
      { name: '天空之卷', rarity: 5, reason: '攻击+扩散输出' },
      { name: '流浪乐章', rarity: 4, reason: '爆发增伤' },
    ]
  },
  {
    character: '奥黛塔',
    element: '冰',
    best: [
      { name: '白湖冬羽', rarity: 5, reason: '专武，星烁反应增伤+回能' },
      { name: '雾切之回光', rarity: 5, reason: '元素伤加成替代' },
    ]
  },
  {
    character: '阿罗夏',
    element: '雷',
    best: [
      { name: '西风长枪', rarity: 4, reason: '充能副属性，辅助循环' },
      { name: '渔获', rarity: 4, reason: '充能+Q 增伤' },
    ]
  },
  {
    character: '薇斯纳',
    element: '风',
    best: [
      { name: '蝶变', rarity: 5, reason: '专武，战技爆发依次增伤' },
      { name: '雾切之回光', rarity: 5, reason: '元素伤加成替代' },
    ]
  },
  {
    character: '沃雅妮莎',
    element: '水',
    best: [
      { name: '漩流颂歌', rarity: 5, reason: '专武，治疗+生命+加攻' },
      { name: '不灭月华', rarity: 5, reason: '治疗+生命替代' },
    ]
  },
  {
    character: '米提亚',
    element: '雷',
    best: [
      { name: '蝶变', rarity: 5, reason: '星扩散体系输出' },
      { name: '流浪乐章', rarity: 4, reason: '爆发增伤' },
    ]
  },
  {
    character: '瓦列里',
    element: '雷',
    best: [
      { name: '西风剑', rarity: 4, reason: '充能副属性，辅助循环' },
      { name: '匣里龙吟', rarity: 4, reason: '攻击副属性' },
    ]
  },
]

export const WEAPONS = [
  {
    name: '雾切之回光',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：暴击伤害',
    desc: '获得元素伤害加成，普攻命中叠层进一步提高元素伤害。',
    users: []
  },
  {
    name: '磐岩结绿',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：暴击率',
    desc: '生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。',
    users: []
  },
  {
    name: '苍古自由之誓',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：元素精通',
    desc: '触发元素反应后全队普攻/重击伤害提升，持续 12s。',
    users: []
  },
  {
    name: '天空之刃',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：元素充能效率',
    desc: '普攻与重击额外风伤，提升移速与攻击力。',
    users: []
  },
  {
    name: '斫峰之刃',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：攻击力',
    desc: '护盾保护下攻击力提升，效果翻倍。',
    users: []
  },
  {
    name: '风鹰剑',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：物理伤害加成',
    desc: '受击回血，攻击时范围风伤。',
    users: []
  },
  {
    name: '波乱月白经津',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：暴击率',
    desc: '普攻增伤，生命回满时叠层提高攻击力。',
    users: []
  },
  {
    name: '圣显之钥',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：生命值',
    desc: '生命转精通，绽放队辅助法器。',
    users: []
  },
  {
    name: '静水流涌之辉',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：生命值',
    desc: '基于生命上限提升元素战技伤害，契合水神芙宁娜。',
    users: []
  },
  {
    name: '赦罪之锏',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：暴击率',
    desc: '突进输出与雷伤全面契合，克洛琳德专武。',
    users: []
  },
  {
    name: '镜中月',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：暴击伤害',
    desc: '丝柯克核心武器，冰水体系输出上限极高。',
    users: []
  },
  {
    name: '裁叶萃光',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：攻击力',
    desc: '强化结晶弹片伤害，娜维娅核心武器。',
    users: []
  },
  {
    name: '狼的末路',
    rarity: 5,
    type: '双手剑',
    stat: '副属性：攻击力',
    desc: '命中低血敌人全队加攻，范围伤害。',
    users: []
  },
  {
    name: '天空之傲',
    rarity: 5,
    type: '双手剑',
    stat: '副属性：元素充能效率',
    desc: 'Q 后真空刃，普攻重击范围风伤。',
    users: []
  },
  {
    name: '无工之剑',
    rarity: 5,
    type: '双手剑',
    stat: '副属性：攻击力',
    desc: '护盾下攻击提升，护盾强度加成。',
    users: []
  },
  {
    name: '松籁响起之时',
    rarity: 5,
    type: '双手剑',
    stat: '副属性：物理伤害加成',
    desc: '普攻叠层提升攻速与攻击力，物伤武器。',
    users: []
  },
  {
    name: '赤角石溃杵',
    rarity: 5,
    type: '双手剑',
    stat: '副属性：暴击伤害',
    desc: '防御转攻击，重击增伤，一斗专武。',
    users: []
  },
  {
    name: '赤沙之王',
    rarity: 5,
    type: '双手剑',
    stat: '副属性：暴击伤害',
    desc: '火神玛薇卡专属，Q 爆发与夜魂体系完美契合。',
    users: []
  },
  {
    name: '护摩之杖',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：暴击伤害',
    desc: '生命值提升 20%，基于生命上限的 0.8% 获得攻击力。',
    users: []
  },
  {
    name: '和璞鸢',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：暴击率',
    desc: '命中叠层提高攻击力，满层额外增伤。',
    users: []
  },
  {
    name: '贯虹之槊',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：攻击力',
    desc: '护盾下攻击力提升，效果翻倍。',
    users: []
  },
  {
    name: '薙草之稻光',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：元素充能效率',
    desc: '充能效率超 100% 部分每 1% 转 0.4% 攻击力。',
    users: []
  },
  {
    name: '天空之脊',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：元素充能效率',
    desc: '普攻命中额外刃伤，Q 后移速提升。',
    users: []
  },
  {
    name: '息灾',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：攻击力',
    desc: '申鹤专武，攻击力提升，冰系辅助。',
    users: []
  },
  {
    name: '赤沙之杖',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：元素精通',
    desc: '基于精通提升攻击力，赛诺专武。',
    users: []
  },
  {
    name: '血染荒城',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：暴击率',
    desc: '月感电输出核心长柄，菲林斯专武。',
    users: []
  },
  {
    name: '天空之卷',
    rarity: 5,
    type: '法器',
    stat: '副属性：攻击力',
    desc: '普攻命中额外伤害，触发风伤效果。',
    users: []
  },
  {
    name: '四风原典',
    rarity: 5,
    type: '法器',
    stat: '副属性：暴击率',
    desc: '移动速度提升，站场叠层增元素伤。',
    users: []
  },
  {
    name: '尘世之锁',
    rarity: 5,
    type: '法器',
    stat: '副属性：攻击力',
    desc: '护盾下攻击力提升，效果翻倍。',
    users: []
  },
  {
    name: '神乐之真意',
    rarity: 5,
    type: '法器',
    stat: '副属性：暴击伤害',
    desc: '施放战技叠层增伤，八重神子专武。',
    users: []
  },
  {
    name: '不灭月华',
    rarity: 5,
    type: '法器',
    stat: '副属性：生命值',
    desc: '治疗+生命加成，珊瑚宫心海专武。',
    users: []
  },
  {
    name: '千夜浮梦',
    rarity: 5,
    type: '法器',
    stat: '副属性：元素精通',
    desc: '按队伍元素类型数量提供精通与全队元素伤害。',
    users: []
  },
  {
    name: '图莱杜拉的回忆',
    rarity: 5,
    type: '法器',
    stat: '副属性：暴击伤害',
    desc: '艾尔海森专武，激化输出。',
    users: []
  },
  {
    name: '万世流涌大典',
    rarity: 5,
    type: '法器',
    stat: '副属性：暴击伤害',
    desc: '重击蓄力伤害与生命收益极高，那维莱特专武。',
    users: []
  },
  {
    name: '纺夜天镜',
    rarity: 5,
    type: '法器',
    stat: '副属性：元素精通',
    desc: '月绽放体系核心法器，菈乌玛与奈芙尔专武。',
    users: []
  },
  {
    name: '天空之翼',
    rarity: 5,
    type: '弓',
    stat: '副属性：暴击率',
    desc: '暴击后范围物伤，攻击力提升。',
    users: []
  },
  {
    name: '阿莫斯之弓',
    rarity: 5,
    type: '弓',
    stat: '副属性：攻击力',
    desc: '普攻与瞄准射击伤害提升，箭矢飞行增伤。',
    users: []
  },
  {
    name: '终末嗟叹之诗',
    rarity: 5,
    type: '弓',
    stat: '副属性：元素充能效率',
    desc: '精通+充能+全队精通增益，辅助最优。',
    users: []
  },
  {
    name: '冬极白星',
    rarity: 5,
    type: '弓',
    stat: '副属性：暴击率',
    desc: '普攻重击叠层增伤，达达利亚专武。',
    users: []
  },
  {
    name: '飞雷之弦振',
    rarity: 5,
    type: '弓',
    stat: '副属性：暴击伤害',
    desc: '普攻增伤，叠层强化，宵宫专武。',
    users: []
  },
  {
    name: '猎人之径',
    rarity: 5,
    type: '弓',
    stat: '副属性：暴击率',
    desc: '基于精通提升普攻伤害，提纳里专武。',
    users: []
  },
  {
    name: '若水',
    rarity: 5,
    type: '弓',
    stat: '副属性：暴击伤害',
    desc: '生命提升，夜兰专武，泛用输出弓。',
    users: []
  },
  {
    name: '铁蜂刺',
    rarity: 4,
    type: '单手剑',
    stat: '副属性：元素精通',
    desc: '锻造获取，精通副属性，扩散收益稳定。',
    users: []
  },
  {
    name: '祭礼剑',
    rarity: 4,
    type: '单手剑',
    stat: '副属性：元素充能效率',
    desc: '战技概率重置冷却，行秋/万叶常用。',
    users: []
  },
  {
    name: '西风剑',
    rarity: 4,
    type: '单手剑',
    stat: '副属性：元素充能效率',
    desc: '暴击回能，帮助全队循环。',
    users: []
  },
  {
    name: '天目影打刀',
    rarity: 4,
    type: '单手剑',
    stat: '副属性：攻击力',
    desc: '稻妻锻造，充能缓解 Q 启动压力。',
    users: []
  },
  {
    name: '黑剑',
    rarity: 4,
    type: '单手剑',
    stat: '副属性：暴击率',
    desc: '纪行获取，普攻重击增伤+回血。',
    users: []
  },
  {
    name: '匣里龙吟',
    rarity: 4,
    type: '单手剑',
    stat: '副属性：攻击力',
    desc: '对附着元素敌人增伤。',
    users: []
  },
  {
    name: '螭骨剑',
    rarity: 4,
    type: '双手剑',
    stat: '副属性：暴击率',
    desc: '叠层增伤，纪行高性价比双手剑。',
    users: []
  },
  {
    name: '西风大剑',
    rarity: 4,
    type: '双手剑',
    stat: '副属性：元素充能效率',
    desc: '暴击回能，辅助型双手剑。',
    users: []
  },
  {
    name: '祭礼大剑',
    rarity: 4,
    type: '双手剑',
    stat: '副属性：元素充能效率',
    desc: '战技概率重置，重云常用。',
    users: []
  },
  {
    name: '决斗之枪',
    rarity: 4,
    type: '长柄武器',
    stat: '副属性：暴击率',
    desc: '纪行获取，暴击副属性缓解双暴压力。',
    users: []
  },
  {
    name: '渔获',
    rarity: 4,
    type: '长柄武器',
    stat: '副属性：元素充能效率',
    desc: '钓鱼兑换，充能+Q 增伤，平民神器。',
    users: []
  },
  {
    name: '西风长枪',
    rarity: 4,
    type: '长柄武器',
    stat: '副属性：元素充能效率',
    desc: '暴击回能，帮助全队回能。',
    users: []
  },
  {
    name: '匣里灭辰',
    rarity: 4,
    type: '长柄武器',
    stat: '副属性：元素精通',
    desc: '对水/火元素敌人增伤，蒸发队副C。',
    users: []
  },
  {
    name: '流浪乐章',
    rarity: 4,
    type: '法器',
    stat: '副属性：暴击伤害',
    desc: '上场随机增伤，爆发型法器。',
    users: []
  },
  {
    name: '西风秘典',
    rarity: 4,
    type: '法器',
    stat: '副属性：元素充能效率',
    desc: '暴击回能，辅助法器。',
    users: []
  },
  {
    name: '祭礼残章',
    rarity: 4,
    type: '法器',
    stat: '副属性：元素精通',
    desc: '战技概率重置，精通法器。',
    users: []
  },
  {
    name: '流浪的晚星',
    rarity: 4,
    type: '法器',
    stat: '副属性：元素精通',
    desc: '精通副属性+全队增伤，锻造法器。',
    users: []
  },
  {
    name: '西风猎弓',
    rarity: 4,
    type: '弓',
    stat: '副属性：元素充能效率',
    desc: '充能副属性，帮助全队回能。',
    users: []
  },
  {
    name: '绝弦',
    rarity: 4,
    type: '弓',
    stat: '副属性：元素精通',
    desc: '元素战技与爆发增伤。',
    users: []
  },
  {
    name: '弓藏',
    rarity: 4,
    type: '弓',
    stat: '副属性：攻击力',
    desc: '普攻增伤，宵宫平民替代。',
    users: []
  },
  {
    name: '破魔之弓',
    rarity: 4,
    type: '弓',
    stat: '副属性：攻击力',
    desc: '锻造获取，满能量重击增伤 32%。',
    users: []
  },
  {
    name: '狼的武功歌',
    rarity: 5,
    type: '双手剑',
    stat: '副属性：攻击力',
    desc: '法尔伽专武，攻速提升，普攻/战技/重击叠「四风诗系」增伤，魔导体系叠暴伤。',
    users: []
  },
  {
    name: '尘光七谕',
    rarity: 5,
    type: '法器',
    stat: '副属性：攻击力',
    desc: '尼可专武，护盾后按攻击力提升场上角色伤害，护盾时回能。',
    users: []
  },
  {
    name: '黑蚀',
    rarity: 5,
    type: '法器',
    stat: '副属性：暴击伤害',
    desc: '杜林相关法器，魔导体系输出武器。',
    users: []
  },
  {
    name: '灾悔',
    rarity: 5,
    type: '长柄武器',
    stat: '副属性：暴击率',
    desc: '洛恩专武，战技后普攻重击与战技爆发增伤。',
    users: []
  },
  {
    name: '焚曜千阳',
    rarity: 5,
    type: '双手剑',
    stat: '副属性：暴击伤害',
    desc: '玛薇卡复刻专武，火神爆发与夜魂体系契合。',
    users: []
  },
  {
    name: '朏魄含光',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：防御力',
    desc: '兹白专武，数值暴力，大幅提升月结晶输出。',
    users: []
  },
  {
    name: '织月者的曙色',
    rarity: 4,
    type: '单手剑',
    stat: '副属性：元素精通',
    desc: '挪德卡莱四星单手剑，月反应体系。',
    users: []
  },
  {
    name: '幽夜华尔兹',
    rarity: 4,
    type: '弓',
    stat: '副属性：暴击率',
    desc: '四星弓，暴击副属性，平民输出弓。',
    users: []
  },
  {
    name: '白湖冬羽',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：暴击伤害',
    desc: '奥黛塔专武，大幅提升攻击与星烁反应暴伤，回能。',
    users: []
  },
  {
    name: '蝶变',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：暴击率',
    desc: '薇斯纳专武，战技爆发依次获得暴伤/星扩散增伤/回能。',
    users: []
  },
  {
    name: '漩流颂歌',
    rarity: 5,
    type: '法器',
    stat: '副属性：生命值',
    desc: '沃雅妮莎专武，治疗+生命上限提升+加攻，冻结/星扩散增益。',
    users: []
  },
  {
    name: '星锋剑',
    rarity: 5,
    type: '单手剑',
    stat: '副属性：攻击力',
    desc: '旅行者至冬剧情获取，提升攻击并命中回能，可强化。',
    users: []
  },
  {
    name: '新枝',
    rarity: 4,
    type: '单手剑',
    stat: '副属性：元素精通',
    desc: '四星单手剑，战技后命中提升攻击与精通。',
    users: []
  },
  {
    name: '引火之源',
    rarity: 4,
    type: '单手剑',
    stat: '副属性：攻击力',
    desc: '至冬锻造，触发元素反应提升攻击，星烁反应增伤。',
    users: []
  },
  {
    name: '救赎之斩',
    rarity: 4,
    type: '双手剑',
    stat: '副属性：元素精通',
    desc: '至冬锻造，触发元素反应提升精通，星烁反应加攻。',
    users: []
  },
  {
    name: '戍望谣歌',
    rarity: 4,
    type: '长柄武器',
    stat: '副属性：元素充能效率',
    desc: '至冬锻造，触发元素反应回能，星烁反应加攻。',
    users: []
  },
]

export const TEAMS = [
  {
    name: '胡桃蒸发队',
    core: '重击蒸发 · 高额单体爆发',
    members: [
      { name: '胡桃', element: '火' },
      { name: '行秋', element: '水' },
      { name: '枫原万叶', element: '风' },
      { name: '钟离', element: '岩' },
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
      { name: '班尼特', element: '火' },
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
      { name: '珊瑚宫心海', element: '水' },
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
      { name: '柯莱', element: '草' },
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
      { name: '迪奥娜', element: '冰' },
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
      { name: '重云', element: '冰' },
    ],
    tip: '全四星高性价比：班尼特加攻治疗 → 行秋挂水 → 香菱 Q 蒸发 → 重云附魔收割。'
  },
  {
    name: '那维莱特纯水队',
    core: '重击水炮 · 纯色输出',
    members: [
      { name: '那维莱特', element: '水' },
      { name: '芙宁娜', element: '水' },
      { name: '枫原万叶', element: '风' },
      { name: '珊瑚宫心海', element: '水' },
    ],
    tip: '芙宁娜 Q 增伤 → 万叶扩散减抗 → 心海治疗保层 → 那维莱特重击水炮群伤。'
  },
  {
    name: '玛薇卡战舰',
    core: '火神爆发 · 纳塔体系',
    members: [
      { name: '玛薇卡', element: '火' },
      { name: '希诺宁', element: '岩' },
      { name: '茜特菈莉', element: '冰' },
      { name: '芙宁娜', element: '水' },
    ],
    tip: '希诺宁增岩 → 茜特菈莉挂冰 → 芙宁娜增伤 → 玛薇卡 Q 爆发收割。'
  },
  {
    name: '丝柯克冰水队',
    core: '冰水冻结 · 双C输出',
    members: [
      { name: '丝柯克', element: '冰' },
      { name: '芙宁娜', element: '水' },
      { name: '爱可菲', element: '冰' },
      { name: '塔利雅', element: '水' },
    ],
    tip: '爱可菲减抗 → 芙宁娜增伤挂水 → 塔利雅水盾 → 丝柯克站场输出。'
  },
  {
    name: '娜维娅结晶队',
    core: '结晶弹片 · 爆发输出',
    members: [
      { name: '娜维娅', element: '岩' },
      { name: '钟离', element: '岩' },
      { name: '班尼特', element: '火' },
      { name: '香菱', element: '火' },
    ],
    tip: '双岩共鸣 → 班尼特加攻 → 香菱挂火产结晶 → 娜维娅收集弹片 E 炮击。'
  },
  {
    name: '月绽放队',
    core: '月绽放 · 高金数上限',
    members: [
      { name: '奈芙尔', element: '草' },
      { name: '菈乌玛', element: '草' },
      { name: '芙宁娜', element: '水' },
      { name: '爱诺', element: '水' },
    ],
    tip: '菈乌玛挂草触发月绽放 → 爱诺水兆 → 芙宁娜增伤 → 奈芙尔站场输出。'
  },
  {
    name: '菲机组合',
    core: '月感电 · 站场主C',
    members: [
      { name: '菲林斯', element: '雷' },
      { name: '伊涅芙', element: '雷' },
      { name: '菈乌玛', element: '草' },
      { name: '爱诺', element: '水' },
    ],
    tip: '伊涅芙护盾+月感电 → 菈乌玛挂草 → 爱诺水兆 → 菲林斯站场驱动月感电。'
  },
]
