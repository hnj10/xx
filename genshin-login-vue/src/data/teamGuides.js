// 队伍详情数据 · 由 gen_team_guides.mjs 生成，请勿手工逐条改动
// 来源：homeData.js（角色 / 武器推荐 / 武器图鉴 / 队伍）+ artifactSets.js（圣遗物）
// 每个 (队伍, 成员) 的攻略与面板推荐都结合了队内反应类型、元素共鸣与输出循环。
// 面板数值为养成参考阈值，不是逐角色考据的官方数值。
// 重跑：node gen_team_guides.mjs
export const TEAM_GUIDES = {
  "胡桃蒸发队": {
    "name": "胡桃蒸发队",
    "core": "重击蒸发 · 高额单体爆发",
    "tip": "行秋+夜兰双水挂水 → 钟离开盾减抗 → 胡桃 E 后重击蒸发，双水共鸣提升生命与充能。",
    "reaction": "蒸发",
    "resonance": "双水共鸣 · 提升生命与充能，缓解循环压力",
    "themeColor": "#ff8a5b",
    "rotation": [
      {
        "text": "行秋+夜兰双水挂水",
        "owners": [
          "行秋",
          "夜兰"
        ]
      },
      {
        "text": "钟离开盾减抗",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "胡桃 E 后重击蒸发",
        "owners": [
          "胡桃"
        ]
      },
      {
        "text": "双水共鸣提升生命与充能。",
        "owners": [
          "行秋",
          "夜兰"
        ]
      }
    ],
    "members": [
      {
        "name": "胡桃",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 蒸发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「重击蒸发 · 高额单体爆发」打满爆发窗口",
        "summary": "E 生命转攻击，重击蒸发高额伤害，注意控血与行秋/夜兰挂水。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：生命% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "护摩之杖",
          "displayName": "护摩之杖",
          "rarity": 5,
          "reason": "生命转攻，契合低血输出",
          "type": "长柄武器",
          "stat": "副属性：暴击伤害",
          "desc": "生命值提升 20%，基于生命上限的 0.8% 获得攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "决斗之枪",
            "displayName": "决斗之枪",
            "rarity": 4,
            "reason": "暴击率副属性，缓解双暴压力",
            "type": "长柄武器",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，暴击副属性缓解双暴压力。",
            "atk1": 41,
            "atk90": 454,
            "subStat": "暴击率",
            "subValue": "36.8%"
          }
        ],
        "artifact": {
          "raw": "炽烈的炎之魔女 4件套",
          "name": "炽烈的炎之魔女",
          "twoPiece": "火元素伤害加成+15%",
          "fourPiece": "蒸发、融化反应造成的伤害+15%，超载、燃烧、烈绽放反应伤害+40%；施放元素战技后10秒内，2件套的效果提升50%，最多叠加3层",
          "flavor": "火系主C · 蒸发融化",
          "image": "/artifacts/xilie-yan-zhi-monv.png",
          "themeColor": "#e0604a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "28,000 – 32,000",
            "hint": "E 按生命上限转攻击"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "蒸发队精通收益高"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 200%",
            "hint": "护摩+暴伤头，双暴优先"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "胡桃是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "胡桃 E 后重击蒸发"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "行秋",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "Q 雨帘剑后台水+减伤回血，蒸发/绽放万金油四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "祭礼剑",
          "displayName": "祭礼剑",
          "rarity": 5,
          "reason": "重置战技，双E回能",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "战技概率重置冷却，行秋/万叶常用。",
          "atk1": 41,
          "atk90": 454,
          "subStat": "元素充能效率",
          "subValue": "61.3%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "190% – 220%",
            "hint": "Q 是挂水核心，充能第一优先"
          },
          {
            "label": "攻击力",
            "value": "1,500 – 1,800",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "行秋以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "行秋+夜兰双水挂水",
          "双水共鸣提升生命与充能。"
        ],
        "stepMine": [
          true,
          false,
          false,
          true
        ]
      },
      {
        "name": "夜兰",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "Q 协同攻击后台水+全队增伤，泛用性极强的水副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "若水",
          "displayName": "若水",
          "rarity": 5,
          "reason": "专武，暴伤+生命",
          "type": "弓",
          "stat": "副属性：暴击伤害",
          "desc": "生命提升，夜兰专武，泛用输出弓。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击伤害",
          "subValue": "88.2%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风猎弓",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "28,000 – 32,000",
            "hint": "伤害按生命结算"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队优先充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140%",
            "hint": "生命达标后堆双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "夜兰以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "行秋+夜兰双水挂水",
          "双水共鸣提升生命与充能。"
        ],
        "stepMine": [
          true,
          false,
          false,
          true
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 蒸发体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "钟离开盾减抗"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "迪卢克融化队": {
    "name": "迪卢克融化队",
    "core": "融化蒸发 · 火系站场",
    "tip": "班尼特 Q 加攻 → 万叶扩散减抗 → 行秋挂水 → 迪卢克 E+Q 三段融化蒸发。",
    "reaction": "融化",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#ff6f91",
    "rotation": [
      {
        "text": "班尼特 Q 加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "万叶扩散减抗",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "行秋挂水",
        "owners": [
          "行秋"
        ]
      },
      {
        "text": "迪卢克 E+Q 三段融化蒸发。",
        "owners": [
          "迪卢克"
        ]
      }
    ],
    "members": [
      {
        "name": "迪卢克",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 融化体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「融化蒸发 · 火系站场」打满爆发窗口",
        "summary": "黎明双子之一，E 三段+Q 火鸟爆发，配合行秋/夜兰蒸发稳定出伤。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "狼的末路",
          "displayName": "狼的末路",
          "rarity": 5,
          "reason": "专武，攻击力提升范围伤害",
          "type": "双手剑",
          "stat": "副属性：攻击力",
          "desc": "命中低血敌人全队加攻，范围伤害。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "螭骨剑",
            "displayName": "螭骨剑",
            "rarity": 4,
            "reason": "暴击率副属性，纪行获取",
            "type": "双手剑",
            "stat": "副属性：暴击率",
            "desc": "叠层增伤，纪行高性价比双手剑。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击率",
            "subValue": "27.6%"
          }
        ],
        "artifact": {
          "raw": "炽烈的炎之魔女 4件套",
          "name": "炽烈的炎之魔女",
          "twoPiece": "火元素伤害加成+15%",
          "fourPiece": "蒸发、融化反应造成的伤害+15%，超载、燃烧、烈绽放反应伤害+40%；施放元素战技后10秒内，2件套的效果提升50%，最多叠加3层",
          "flavor": "火系主C · 蒸发融化",
          "image": "/artifacts/xilie-yan-zhi-monv.png",
          "themeColor": "#e0604a",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "融化倍率受精通影响"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "迪卢克是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "迪卢克 E+Q 三段融化蒸发。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 融化体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特 Q 加攻"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "行秋",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 融化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造融化条件",
        "summary": "Q 雨帘剑后台水+减伤回血，蒸发/绽放万金油四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "祭礼剑",
          "displayName": "祭礼剑",
          "rarity": 5,
          "reason": "重置战技，双E回能",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "战技概率重置冷却，行秋/万叶常用。",
          "atk1": 41,
          "atk90": 454,
          "subStat": "元素充能效率",
          "subValue": "61.3%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "190% – 220%",
            "hint": "Q 是挂水核心，充能第一优先"
          },
          {
            "label": "攻击力",
            "value": "1,500 – 1,800",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "行秋以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "行秋挂水"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 融化体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "万叶扩散减抗"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "可莉蒸发队": {
    "name": "可莉蒸发队",
    "core": "站场蒸发 · 诡雷输出",
    "tip": "双水挂水 → 班尼特加攻 → 可莉重击与诡雷稳定蒸发，双火共鸣加攻。",
    "reaction": "蒸发",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力",
    "themeColor": "#ff8a5b",
    "rotation": [
      {
        "text": "双水挂水",
        "owners": [
          "行秋",
          "夜兰"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "可莉重击与诡雷稳定蒸发",
        "owners": [
          "可莉"
        ]
      },
      {
        "text": "双火共鸣加攻。",
        "owners": [
          "可莉",
          "班尼特"
        ]
      }
    ],
    "members": [
      {
        "name": "可莉",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 蒸发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「站场蒸发 · 诡雷输出」打满爆发窗口",
        "summary": "重击与诡雷输出，操作门槛略高，对群控场能力强。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "四风原典",
          "displayName": "四风原典",
          "rarity": 5,
          "reason": "站场叠层增元素伤",
          "type": "法器",
          "stat": "副属性：暴击率",
          "desc": "移动速度提升，站场叠层增元素伤。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "上场随机增伤，爆发",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "炽烈的炎之魔女 4件套",
          "name": "炽烈的炎之魔女",
          "twoPiece": "火元素伤害加成+15%",
          "fourPiece": "蒸发、融化反应造成的伤害+15%，超载、燃烧、烈绽放反应伤害+40%；施放元素战技后10秒内，2件套的效果提升50%，最多叠加3层",
          "flavor": "火系主C · 蒸发融化",
          "image": "/artifacts/xilie-yan-zhi-monv.png",
          "themeColor": "#e0604a",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "蒸发按精通放大，优先于攻击%"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "可莉是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "可莉重击与诡雷稳定蒸发",
          "双火共鸣加攻。"
        ],
        "stepMine": [
          false,
          false,
          true,
          true
        ]
      },
      {
        "name": "行秋",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "Q 雨帘剑后台水+减伤回血，蒸发/绽放万金油四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "祭礼剑",
          "displayName": "祭礼剑",
          "rarity": 5,
          "reason": "重置战技，双E回能",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "战技概率重置冷却，行秋/万叶常用。",
          "atk1": 41,
          "atk90": 454,
          "subStat": "元素充能效率",
          "subValue": "61.3%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "190% – 220%",
            "hint": "Q 是挂水核心，充能第一优先"
          },
          {
            "label": "攻击力",
            "value": "1,500 – 1,800",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "行秋以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "双水挂水"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "夜兰",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "Q 协同攻击后台水+全队增伤，泛用性极强的水副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "若水",
          "displayName": "若水",
          "rarity": 5,
          "reason": "专武，暴伤+生命",
          "type": "弓",
          "stat": "副属性：暴击伤害",
          "desc": "生命提升，夜兰专武，泛用输出弓。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击伤害",
          "subValue": "88.2%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风猎弓",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "28,000 – 32,000",
            "hint": "伤害按生命结算"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队优先充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140%",
            "hint": "生命达标后堆双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "夜兰以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "双水挂水"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 蒸发体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "班尼特加攻",
          "双火共鸣加攻。"
        ],
        "stepMine": [
          false,
          true,
          false,
          true
        ]
      }
    ]
  },
  "宵宫蒸发队": {
    "name": "宵宫蒸发队",
    "core": "普攻蒸发 · 对单极强",
    "tip": "钟离开盾保站场 → 行秋+夜兰双水挂水 → 宵宫 E 附魔普攻连射蒸发。",
    "reaction": "蒸发",
    "resonance": "双水共鸣 · 提升生命与充能，缓解循环压力",
    "themeColor": "#ff8a5b",
    "rotation": [
      {
        "text": "钟离开盾保站场",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "行秋+夜兰双水挂水",
        "owners": [
          "行秋",
          "夜兰"
        ]
      },
      {
        "text": "宵宫 E 附魔普攻连射蒸发。",
        "owners": [
          "宵宫"
        ]
      }
    ],
    "members": [
      {
        "name": "宵宫",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 蒸发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「普攻蒸发 · 对单极强」打满爆发窗口",
        "summary": "E 附魔普攻高频输出，对单极强，需盾辅保站场。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "飞雷之弦振",
          "displayName": "飞雷之弦振",
          "rarity": 5,
          "reason": "专武，普攻增伤叠层",
          "type": "弓",
          "stat": "副属性：暴击伤害",
          "desc": "普攻增伤，叠层强化，宵宫专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "弓藏",
            "displayName": "弓藏",
            "rarity": 4,
            "reason": "普攻增伤，平民替代",
            "type": "弓",
            "stat": "副属性：攻击力",
            "desc": "普攻增伤，宵宫平民替代。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "追忆之注连 4件套",
          "name": "追忆之注连",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素战技时若元素能量不低于15点，消耗15点元素能量，使接下来10秒内普通攻击、重击、下落攻击造成的伤害+50%",
          "flavor": "普攻重击主C",
          "image": "/artifacts/zhuiyi-zhulian.png",
          "themeColor": "#d38fb0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "蒸发按精通放大，优先于攻击%"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "宵宫是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "宵宫 E 附魔普攻连射蒸发。"
        ],
        "stepMine": [
          false,
          false,
          true
        ]
      },
      {
        "name": "行秋",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "Q 雨帘剑后台水+减伤回血，蒸发/绽放万金油四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "祭礼剑",
          "displayName": "祭礼剑",
          "rarity": 5,
          "reason": "重置战技，双E回能",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "战技概率重置冷却，行秋/万叶常用。",
          "atk1": 41,
          "atk90": 454,
          "subStat": "元素充能效率",
          "subValue": "61.3%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "190% – 220%",
            "hint": "Q 是挂水核心，充能第一优先"
          },
          {
            "label": "攻击力",
            "value": "1,500 – 1,800",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "行秋以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "行秋+夜兰双水挂水"
        ],
        "stepMine": [
          false,
          true,
          false
        ]
      },
      {
        "name": "夜兰",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "Q 协同攻击后台水+全队增伤，泛用性极强的水副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "若水",
          "displayName": "若水",
          "rarity": 5,
          "reason": "专武，暴伤+生命",
          "type": "弓",
          "stat": "副属性：暴击伤害",
          "desc": "生命提升，夜兰专武，泛用输出弓。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击伤害",
          "subValue": "88.2%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风猎弓",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "28,000 – 32,000",
            "hint": "伤害按生命结算"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队优先充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140%",
            "hint": "生命达标后堆双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "夜兰以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "行秋+夜兰双水挂水"
        ],
        "stepMine": [
          false,
          true,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 蒸发体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "钟离开盾保站场"
        ],
        "stepMine": [
          true,
          false,
          false
        ]
      }
    ]
  },
  "林尼纯火队": {
    "name": "林尼纯火队",
    "core": "蓄力箭 · 纯火叠层",
    "tip": "三火共鸣加攻 → 万叶减抗 → 班尼特加攻 → 林尼蓄力箭+猫猫弹叠层输出。",
    "reaction": "纯色",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#6fb8f0",
    "rotation": [
      {
        "text": "三火共鸣加攻",
        "owners": []
      },
      {
        "text": "万叶减抗",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "林尼蓄力箭+猫猫弹叠层输出。",
        "owners": [
          "林尼"
        ]
      }
    ],
    "members": [
      {
        "name": "林尼",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 纯色体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「蓄力箭 · 纯火叠层」打满爆发窗口",
        "summary": "蓄力箭+猫猫弹叠层，配芙宁娜蒸发出伤，枫丹火C代表。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "冬极白星",
          "displayName": "冬极白星",
          "rarity": 5,
          "reason": "普攻重击叠层增伤",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "普攻重击叠层增伤，达达利亚专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "破魔之弓",
            "displayName": "破魔之弓",
            "rarity": 4,
            "reason": "满能量重击增伤",
            "type": "弓",
            "stat": "副属性：攻击力",
            "desc": "锻造获取，满能量重击增伤 32%。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "逐影猎人 4件套",
          "name": "逐影猎人",
          "twoPiece": "普通攻击与重击造成的伤害+15%",
          "fourPiece": "当前生命值提升或降低时，暴击率+12%，持续5秒，最多叠加3层",
          "flavor": "生命波动主C",
          "image": "/artifacts/zhuying-lieren.png",
          "themeColor": "#6f8fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素伤害加成",
            "value": "优先杯子",
            "hint": "纯色队吃对应元素伤"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "纯色队吃对应元素伤害加成，杯子优先元素伤",
          "减抗与增伤辅助收益高于堆攻击",
          "同元素共鸣会进一步放大主属性收益",
          "林尼是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "林尼蓄力箭+猫猫弹叠层输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 纯色体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "纯色队吃对应元素伤害加成，杯子优先元素伤",
          "减抗与增伤辅助收益高于堆攻击",
          "同元素共鸣会进一步放大主属性收益",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 纯色体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "纯色队吃对应元素伤害加成，杯子优先元素伤",
          "减抗与增伤辅助收益高于堆攻击",
          "同元素共鸣会进一步放大主属性收益",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "万叶减抗"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "香菱",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "后台副C · 纯色体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造纯色条件",
        "summary": "旋火轮后台挂火+高蒸发，国家队核心，四星顶配副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "护摩之杖",
          "displayName": "护摩之杖",
          "rarity": 5,
          "reason": "暴伤副属性，爆发高",
          "type": "长柄武器",
          "stat": "副属性：暴击伤害",
          "desc": "生命值提升 20%，基于生命上限的 0.8% 获得攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "渔获",
            "displayName": "渔获",
            "rarity": 4,
            "reason": "充能+Q 增伤，平民神器",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "钓鱼兑换，充能+Q 增伤，平民神器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素充能效率",
            "subValue": "45.9%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 锁面板，循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 250",
            "hint": "蒸发/融化收益"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "纯色队吃对应元素伤害加成，杯子优先元素伤",
          "减抗与增伤辅助收益高于堆攻击",
          "同元素共鸣会进一步放大主属性收益",
          "香菱以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [],
        "stepMine": [
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  "阿蕾奇诺蒸发队": {
    "name": "阿蕾奇诺蒸发队",
    "core": "战技叠层 · 蒸发爆发",
    "tip": "班尼特加攻 → 双水挂水 → 阿蕾奇诺 E 叠层后重击蒸发爆发。",
    "reaction": "蒸发",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力",
    "themeColor": "#ff8a5b",
    "rotation": [
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "双水挂水",
        "owners": [
          "行秋",
          "夜兰"
        ]
      },
      {
        "text": "阿蕾奇诺 E 叠层后重击蒸发爆发。",
        "owners": [
          "阿蕾奇诺"
        ]
      }
    ],
    "members": [
      {
        "name": "阿蕾奇诺",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 蒸发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「战技叠层 · 蒸发爆发」打满爆发窗口",
        "summary": "仆人，E 印记引爆高额火伤，消耗「生命之契」强化重击，直伤型强火C。",
        "talents": "元素战技 > 普通攻击 > 元素爆发",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "赤沙之王",
          "displayName": "赤沙之王",
          "rarity": 5,
          "reason": "火伤强化，仆人核心",
          "type": "双手剑",
          "stat": "副属性：暴击伤害",
          "desc": "火神玛薇卡专属，Q 爆发与夜魂体系完美契合。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "决斗之枪",
            "displayName": "决斗之枪",
            "rarity": 4,
            "reason": "暴击率副属性",
            "type": "长柄武器",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，暴击副属性缓解双暴压力。",
            "atk1": 41,
            "atk90": 454,
            "subStat": "暴击率",
            "subValue": "36.8%"
          }
        ],
        "artifact": {
          "raw": "谐律的异想 4件套",
          "name": "谐律的异想",
          "twoPiece": "攻击力+18%",
          "fourPiece": "生命之契的数值发生变动时，角色造成的伤害提升18%，持续6秒，最多叠加3层",
          "flavor": "生命之契体系 · 阿蕾奇诺 / 克洛琳德",
          "image": "",
          "themeColor": "#d97a86",
          "matched": false
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "蒸发按精通放大，优先于攻击%"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "阿蕾奇诺是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "阿蕾奇诺 E 叠层后重击蒸发爆发。"
        ],
        "stepMine": [
          false,
          false,
          true
        ]
      },
      {
        "name": "行秋",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "Q 雨帘剑后台水+减伤回血，蒸发/绽放万金油四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "祭礼剑",
          "displayName": "祭礼剑",
          "rarity": 5,
          "reason": "重置战技，双E回能",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "战技概率重置冷却，行秋/万叶常用。",
          "atk1": 41,
          "atk90": 454,
          "subStat": "元素充能效率",
          "subValue": "61.3%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "190% – 220%",
            "hint": "Q 是挂水核心，充能第一优先"
          },
          {
            "label": "攻击力",
            "value": "1,500 – 1,800",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "行秋以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "双水挂水"
        ],
        "stepMine": [
          false,
          true,
          false
        ]
      },
      {
        "name": "夜兰",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "Q 协同攻击后台水+全队增伤，泛用性极强的水副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "若水",
          "displayName": "若水",
          "rarity": 5,
          "reason": "专武，暴伤+生命",
          "type": "弓",
          "stat": "副属性：暴击伤害",
          "desc": "生命提升，夜兰专武，泛用输出弓。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击伤害",
          "subValue": "88.2%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风猎弓",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "28,000 – 32,000",
            "hint": "伤害按生命结算"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队优先充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140%",
            "hint": "生命达标后堆双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "夜兰以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "双水挂水"
        ],
        "stepMine": [
          false,
          true,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 蒸发体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          true,
          false,
          false
        ]
      }
    ]
  },
  "玛薇卡战舰": {
    "name": "玛薇卡战舰",
    "core": "火神爆发 · 纳塔体系",
    "tip": "希诺宁减抗 → 茜特菈莉挂冰 → 班尼特加攻 → 玛薇卡 Q 战意爆发收割，危战最优解。",
    "reaction": "爆发",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#ff7a59",
    "rotation": [
      {
        "text": "希诺宁减抗",
        "owners": [
          "希诺宁"
        ]
      },
      {
        "text": "茜特菈莉挂冰",
        "owners": [
          "茜特菈莉"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "玛薇卡 Q 战意爆发收割",
        "owners": [
          "玛薇卡"
        ]
      },
      {
        "text": "危战最优解。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "玛薇卡",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 爆发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「火神爆发 · 纳塔体系」打满爆发窗口",
        "summary": "火神，Q 消耗夜魂值爆发高额火伤，E 后台挂火，纳塔体系核心，配希诺宁/茜特菈莉组建战舰。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "赤沙之王",
          "displayName": "赤沙之王",
          "rarity": 5,
          "reason": "火神 Q 爆发契合",
          "type": "双手剑",
          "stat": "副属性：暴击伤害",
          "desc": "火神玛薇卡专属，Q 爆发与夜魂体系完美契合。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "狼的末路",
            "displayName": "狼的末路",
            "rarity": 5,
            "reason": "攻击力提升",
            "type": "双手剑",
            "stat": "副属性：攻击力",
            "desc": "命中低血敌人全队加攻，范围伤害。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "暴击伤害",
            "value": "160% – 220%",
            "hint": "爆发压单窗口，暴伤收益高"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "玛薇卡是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "玛薇卡 Q 战意爆发收割"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "希诺宁",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 爆发体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "夜魂体系岩辅，减抗+增伤，玛薇卡战舰关键辅助。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "磐岩结绿",
          "displayName": "磐岩结绿",
          "rarity": 5,
          "reason": "暴击率，辅助",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击率",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通 / 攻击力",
            "value": "精通 800+ 或 攻击 2,000+",
            "hint": "按增伤方式二选一"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 210%",
            "hint": "保证 Q 增伤覆盖"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "辅助位非刚需"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "希诺宁提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "希诺宁减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          false
        ]
      },
      {
        "name": "茜特菈莉",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 爆发体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "冰盾+减抗+副C，纳塔体系强力冰辅，玛薇卡战舰关键位。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "充能+减抗辅助",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值 / 防御力",
            "value": "生命 35,000+ / 防御 2,000+",
            "hint": "护盾厚度来源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "走副C流时再堆"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "茜特菈莉负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "茜特菈莉挂冰"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 爆发体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "杜林双魔导": {
    "name": "杜林双魔导",
    "core": "风火混伤 · 破盾利器",
    "tip": "6.6 魔导套质变，风火混伤破盾优势大，法尔伽+杜林双核输出，环境适应力强。",
    "reaction": "混伤",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高；双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺",
    "themeColor": "#f3a06a",
    "rotation": [
      {
        "text": "6.6 魔导套质变",
        "owners": []
      },
      {
        "text": "风火混伤破盾优势大",
        "owners": []
      },
      {
        "text": "法尔伽+杜林双核输出",
        "owners": [
          "杜林",
          "法尔伽"
        ]
      },
      {
        "text": "环境适应力强。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "杜林",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 混伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「风火混伤 · 破盾利器」打满爆发窗口",
        "summary": "「不熄灭的火」，燃烧反应火C，挪德卡莱火系输出，配草系挂草出伤。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "黑蚀",
          "displayName": "黑蚀",
          "rarity": 5,
          "reason": "魔导体系输出法器",
          "type": "法器",
          "stat": "副属性：暴击伤害",
          "desc": "杜林相关法器，魔导体系输出武器。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "爆发增伤",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "混编队兼顾直伤与反应"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "混编队兼顾直伤与反应，词条不要极端化",
          "注意附着顺序与反应归属",
          "按主C爆发窗口安排增伤技能",
          "杜林是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "法尔伽+杜林双核输出"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "法尔伽",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "站场主C · 混伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「风火混伤 · 破盾利器」打满爆发窗口",
        "summary": "西风骑士团大团长·北风骑士，双持双手剑同时打出风元素与队友对应元素伤害，魔导角色。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "狼的武功歌",
          "displayName": "狼的武功歌",
          "rarity": 5,
          "reason": "专武，攻速+四风诗系增伤",
          "type": "双手剑",
          "stat": "副属性：攻击力",
          "desc": "法尔伽专武，攻速提升，普攻/战技/重击叠「四风诗系」增伤，魔导体系叠暴伤。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "天空之傲",
            "displayName": "天空之傲",
            "rarity": 5,
            "reason": "充能+范围风伤替代",
            "type": "双手剑",
            "stat": "副属性：元素充能效率",
            "desc": "Q 后真空刃，普攻重击范围风伤。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "元素充能效率",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "混编队兼顾直伤与反应"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "混编队兼顾直伤与反应，词条不要极端化",
          "注意附着顺序与反应归属",
          "按主C爆发窗口安排增伤技能",
          "法尔伽是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "法尔伽+杜林双核输出"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "布伦妮",
        "element": "风",
        "rarity": 4,
        "roleInTeam": "后台副C · 混伤体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造混伤条件",
        "summary": "「魔女猎人」，Q 召唤魅巫之铃后台风伤，触发扩散额外增伤。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之卷",
          "displayName": "天空之卷",
          "rarity": 5,
          "reason": "攻击+扩散输出",
          "type": "法器",
          "stat": "副属性：攻击力",
          "desc": "普攻命中额外伤害，触发风伤效果。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "攻击力",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "爆发增伤",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "混编队兼顾直伤与反应"
          }
        ],
        "notes": [
          "混编队兼顾直伤与反应，词条不要极端化",
          "注意附着顺序与反应归属",
          "按主C爆发窗口安排增伤技能",
          "布伦妮以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [],
        "stepMine": [
          false,
          false,
          false,
          false
        ]
      },
      {
        "name": "尼可",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 混伤体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "魔女会「魔女」，E 全队加攻+炽光护盾，Q 召唤奥迹造影协同攻击，魔导体系核心辅助。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "尘光七谕",
          "displayName": "尘光七谕",
          "rarity": 5,
          "reason": "专武，护盾后按攻加伤+回能",
          "type": "法器",
          "stat": "副属性：攻击力",
          "desc": "尼可专武，护盾后按攻击力提升场上角色伤害，护盾时回能。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值 / 防御力",
            "value": "生命 35,000+ / 防御 2,000+",
            "hint": "护盾厚度来源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "走副C流时再堆"
          }
        ],
        "notes": [
          "混编队兼顾直伤与反应，词条不要极端化",
          "注意附着顺序与反应归属",
          "按主C爆发窗口安排增伤技能",
          "尼可负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高；双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [],
        "stepMine": [
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  "达达利亚国际队": {
    "name": "达达利亚国际队",
    "core": "断流蒸发 · 万班香体系",
    "tip": "班尼特加攻 → 万叶减抗 → 香菱挂火 → 公子开 E 断流蒸发，经典万达国际队。",
    "reaction": "蒸发",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#ff8a5b",
    "rotation": [
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "万叶减抗",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "香菱挂火",
        "owners": [
          "香菱"
        ]
      },
      {
        "text": "公子开 E 断流蒸发",
        "owners": [
          "达达利亚"
        ]
      },
      {
        "text": "经典万达国际队。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "达达利亚",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "站场主C · 蒸发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「断流蒸发 · 万班香体系」打满爆发窗口",
        "summary": "公子，E 近战双刀断流群伤，配万叶/香菱蒸发队。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "冬极白星",
          "displayName": "冬极白星",
          "rarity": 5,
          "reason": "专武，普攻增伤",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "普攻重击叠层增伤，达达利亚专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "弓藏",
            "displayName": "弓藏",
            "rarity": 4,
            "reason": "普攻增伤替代",
            "type": "弓",
            "stat": "副属性：攻击力",
            "desc": "普攻增伤，宵宫平民替代。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "沉沦之心 4件套",
          "name": "沉沦之心",
          "twoPiece": "水元素伤害加成+15%",
          "fourPiece": "施放元素战技后的15秒内，普通攻击与重击造成的伤害+30%",
          "flavor": "水系站场主C",
          "image": "/artifacts/chenlun-zhixin.png",
          "themeColor": "#4f9de0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "蒸发按精通放大，优先于攻击%"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "达达利亚是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "公子开 E 断流蒸发"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "香菱",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "旋火轮后台挂火+高蒸发，国家队核心，四星顶配副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "护摩之杖",
          "displayName": "护摩之杖",
          "rarity": 5,
          "reason": "暴伤副属性，爆发高",
          "type": "长柄武器",
          "stat": "副属性：暴击伤害",
          "desc": "生命值提升 20%，基于生命上限的 0.8% 获得攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "渔获",
            "displayName": "渔获",
            "rarity": 4,
            "reason": "充能+Q 增伤，平民神器",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "钓鱼兑换，充能+Q 增伤，平民神器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素充能效率",
            "subValue": "45.9%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 锁面板，循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 250",
            "hint": "蒸发/融化收益"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "香菱以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "香菱挂火"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 蒸发体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          false
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 蒸发体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "万叶减抗"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          false
        ]
      }
    ]
  },
  "神里绫人水队": {
    "name": "神里绫人水队",
    "core": "站场水伤 · 攻速输出",
    "tip": "万叶减抗 → 班尼特加攻 → 夜兰增伤 → 绫人 E 站场水伤连斩，蒸发增伤。",
    "reaction": "直伤",
    "resonance": "双水共鸣 · 提升生命与充能，缓解循环压力",
    "themeColor": "#7fb2e8",
    "rotation": [
      {
        "text": "万叶减抗",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "夜兰增伤",
        "owners": [
          "夜兰"
        ]
      },
      {
        "text": "绫人 E 站场水伤连斩",
        "owners": [
          "神里绫人"
        ]
      },
      {
        "text": "蒸发增伤。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "神里绫人",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "站场主C · 直伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「站场水伤 · 攻速输出」打满爆发窗口",
        "summary": "E 高频水剑站场输出，Q 后台水，配云堇/万叶出伤。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "波乱月白经津",
          "displayName": "波乱月白经津",
          "rarity": 5,
          "reason": "专武，普攻增伤",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "普攻增伤，生命回满时叠层提高攻击力。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "黑剑",
            "displayName": "黑剑",
            "rarity": 4,
            "reason": "暴击率副属性，纪行",
            "type": "单手剑",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，普攻重击增伤+回血。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击率",
            "subValue": "27.6%"
          }
        ],
        "artifact": {
          "raw": "回声之林夜话 4件套",
          "name": "回声之林夜话",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素战技后的10秒内，岩元素伤害加成+20%；获得结晶反应产生的晶片时，岩元素伤害加成进一步提升，持续10秒",
          "flavor": "岩系站场C",
          "image": "/artifacts/huisheng-zhlin-yehua.png",
          "themeColor": "#d9c07a",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素伤害加成",
            "value": "对应元素伤杯子",
            "hint": "直伤队杯子收益最高"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "神里绫人是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "绫人 E 站场水伤连斩"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "夜兰",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 直伤体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造直伤条件",
        "summary": "Q 协同攻击后台水+全队增伤，泛用性极强的水副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "若水",
          "displayName": "若水",
          "rarity": 5,
          "reason": "专武，暴伤+生命",
          "type": "弓",
          "stat": "副属性：暴击伤害",
          "desc": "生命提升，夜兰专武，泛用输出弓。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击伤害",
          "subValue": "88.2%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风猎弓",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "28,000 – 32,000",
            "hint": "伤害按生命结算"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队优先充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140%",
            "hint": "生命达标后堆双暴"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "夜兰以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "夜兰增伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 直伤体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "万叶减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 直伤体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          false
        ]
      }
    ]
  },
  "那维莱特纯水队": {
    "name": "那维莱特纯水队",
    "core": "重击水炮 · 纯色输出",
    "tip": "芙宁娜 Q 增伤 → 万叶扩散减抗 → 心海治疗保层 → 那维莱特重击水炮群伤。",
    "reaction": "纯色",
    "resonance": "双水共鸣 · 提升生命与充能，缓解循环压力",
    "themeColor": "#6fb8f0",
    "rotation": [
      {
        "text": "芙宁娜 Q 增伤",
        "owners": [
          "芙宁娜"
        ]
      },
      {
        "text": "万叶扩散减抗",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "心海治疗保层",
        "owners": [
          "珊瑚宫心海"
        ]
      },
      {
        "text": "那维莱特重击水炮群伤。",
        "owners": [
          "那维莱特"
        ]
      }
    ],
    "members": [
      {
        "name": "那维莱特",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "站场主C · 纯色体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「重击水炮 · 纯色输出」打满爆发窗口",
        "summary": "重击蓄力水炮高频群伤，生命主词条成型，芙宁娜/万叶黄金搭档。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "万世流涌大典",
          "displayName": "万世流涌大典",
          "rarity": 5,
          "reason": "专武，重击伤害生命收益",
          "type": "法器",
          "stat": "副属性：暴击伤害",
          "desc": "重击蓄力伤害与生命收益极高，那维莱特专武。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "祭礼残章",
            "displayName": "祭礼残章",
            "rarity": 4,
            "reason": "平民替代",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "战技概率重置，精通法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "逐影猎人 4件套",
          "name": "逐影猎人",
          "twoPiece": "普通攻击与重击造成的伤害+15%",
          "fourPiece": "当前生命值提升或降低时，暴击率+12%，持续5秒，最多叠加3层",
          "flavor": "生命波动主C",
          "image": "/artifacts/zhuying-lieren.png",
          "themeColor": "#6f8fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "32,000 – 38,000",
            "hint": "重击伤害按生命结算"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 180%",
            "hint": ""
          },
          {
            "label": "元素充能效率",
            "value": "110% – 130%",
            "hint": "需求较低"
          }
        ],
        "notes": [
          "纯色队吃对应元素伤害加成，杯子优先元素伤",
          "减抗与增伤辅助收益高于堆攻击",
          "同元素共鸣会进一步放大主属性收益",
          "那维莱特是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "那维莱特重击水炮群伤。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "芙宁娜",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 纯色体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造纯色条件",
        "summary": "水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "静水流涌之辉",
          "displayName": "静水流涌之辉",
          "rarity": 5,
          "reason": "专武，生命+增伤",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "基于生命上限提升元素战技伤害，契合水神芙宁娜。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000+",
            "hint": "增伤幅度与生命挂钩"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队需堆充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": "副C伤害补充"
          }
        ],
        "notes": [
          "纯色队吃对应元素伤害加成，杯子优先元素伤",
          "减抗与增伤辅助收益高于堆攻击",
          "同元素共鸣会进一步放大主属性收益",
          "芙宁娜以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "芙宁娜 Q 增伤"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 纯色体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "纯色队吃对应元素伤害加成，杯子优先元素伤",
          "减抗与增伤辅助收益高于堆攻击",
          "同元素共鸣会进一步放大主属性收益",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "万叶扩散减抗"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "珊瑚宫心海",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "治疗 / 续航位 · 纯色体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "E 水母持续治疗+挂水，永冻与绽放队核心生存位。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "不灭月华",
          "displayName": "不灭月华",
          "rarity": 5,
          "reason": "专武，治疗+生命",
          "type": "法器",
          "stat": "副属性：生命值",
          "desc": "治疗+生命加成，珊瑚宫心海专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "32,000 – 40,000",
            "hint": "治疗与伤害同源"
          },
          {
            "label": "治疗加成",
            "value": "海染/千岩按套装",
            "hint": ""
          },
          {
            "label": "元素充能效率",
            "value": "150% – 180%",
            "hint": "保证 E/Q 覆盖"
          }
        ],
        "notes": [
          "纯色队吃对应元素伤害加成，杯子优先元素伤",
          "减抗与增伤辅助收益高于堆攻击",
          "同元素共鸣会进一步放大主属性收益",
          "珊瑚宫心海负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "心海治疗保层"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "玛拉妮蒸发队": {
    "name": "玛拉妮蒸发队",
    "core": "冲浪蒸发 · 高额爆发",
    "tip": "希诺宁减抗 → 班尼特加攻 → 香菱挂火 → 玛拉妮冲浪蒸发爆发。",
    "reaction": "蒸发",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#ff8a5b",
    "rotation": [
      {
        "text": "希诺宁减抗",
        "owners": [
          "希诺宁"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "香菱挂火",
        "owners": [
          "香菱"
        ]
      },
      {
        "text": "玛拉妮冲浪蒸发爆发。",
        "owners": [
          "玛拉妮"
        ]
      }
    ],
    "members": [
      {
        "name": "玛拉妮",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "站场主C · 蒸发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「冲浪蒸发 · 高额爆发」打满爆发窗口",
        "summary": "纳塔水C，冲浪蓄力重击蒸发，配火系挂火出伤。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "万世流涌大典",
          "displayName": "万世流涌大典",
          "rarity": 5,
          "reason": "水C重击输出",
          "type": "法器",
          "stat": "副属性：暴击伤害",
          "desc": "重击蓄力伤害与生命收益极高，那维莱特专武。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "爆发增伤",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "蒸发按精通放大，优先于攻击%"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "玛拉妮是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "玛拉妮冲浪蒸发爆发。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "香菱",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "旋火轮后台挂火+高蒸发，国家队核心，四星顶配副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "护摩之杖",
          "displayName": "护摩之杖",
          "rarity": 5,
          "reason": "暴伤副属性，爆发高",
          "type": "长柄武器",
          "stat": "副属性：暴击伤害",
          "desc": "生命值提升 20%，基于生命上限的 0.8% 获得攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "渔获",
            "displayName": "渔获",
            "rarity": 4,
            "reason": "充能+Q 增伤，平民神器",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "钓鱼兑换，充能+Q 增伤，平民神器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素充能效率",
            "subValue": "45.9%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 锁面板，循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 250",
            "hint": "蒸发/融化收益"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "香菱以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "香菱挂火"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 蒸发体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "希诺宁",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 蒸发体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "夜魂体系岩辅，减抗+增伤，玛薇卡战舰关键辅助。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "磐岩结绿",
          "displayName": "磐岩结绿",
          "rarity": 5,
          "reason": "暴击率，辅助",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击率",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通 / 攻击力",
            "value": "精通 800+ 或 攻击 2,000+",
            "hint": "按增伤方式二选一"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 210%",
            "hint": "保证 Q 增伤覆盖"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "辅助位非刚需"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "希诺宁提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "希诺宁减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      }
    ]
  },
  "刻晴激化队": {
    "name": "刻晴激化队",
    "core": "激化 · 高机动输出",
    "tip": "纳西妲挂草 → 菲谢尔后台雷 → 钟离开盾 → 刻晴 E+Q 激化高机动输出。",
    "reaction": "激化",
    "resonance": "双雷共鸣 · 触发雷系反应额外产球，充能更宽裕",
    "themeColor": "#8fd14f",
    "rotation": [
      {
        "text": "纳西妲挂草",
        "owners": [
          "纳西妲"
        ]
      },
      {
        "text": "菲谢尔后台雷",
        "owners": [
          "菲谢尔"
        ]
      },
      {
        "text": "钟离开盾",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "刻晴 E+Q 激化高机动输出。",
        "owners": [
          "刻晴"
        ]
      }
    ],
    "members": [
      {
        "name": "刻晴",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 激化体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「激化 · 高机动输出」打满爆发窗口",
        "summary": "E 瞬移+重击输出，配草系打激化收益高。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "雾切之回光",
          "displayName": "雾切之回光",
          "rarity": 5,
          "reason": "元素伤加成，激化输出",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "获得元素伤害加成，普攻命中叠层进一步提高元素伤害。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "黑剑",
            "displayName": "黑剑",
            "rarity": 4,
            "reason": "暴击率副属性",
            "type": "单手剑",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，普攻重击增伤+回血。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击率",
            "subValue": "27.6%"
          }
        ],
        "artifact": {
          "raw": "如雷的盛怒 4件套",
          "name": "如雷的盛怒",
          "twoPiece": "雷元素伤害加成+15%",
          "fourPiece": "超载、感电、超导、原激化反应伤害+40%，超激化反应伤害+20%；触发上述反应后元素战技冷却减少1秒，每0.8秒至多触发一次",
          "flavor": "雷系反应主C",
          "image": "/artifacts/rulei-de-shengnu.png",
          "themeColor": "#a97ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "激化基础伤害直接吃精通"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "刻晴是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "刻晴 E+Q 激化高机动输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "纳西妲",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专武，精通+全队增益",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "800 – 1,000",
            "hint": "激化/绽放核心，且受天赋上限约束"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "精通达标后补双暴"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "纳西妲以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "纳西妲挂草"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "菲谢尔",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "奥兹后台持续雷伤，激化/超导队经典副C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之翼",
          "displayName": "天空之翼",
          "rarity": 5,
          "reason": "暴击率，奥兹输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "暴击后范围物伤，攻击力提升。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": ""
          },
          {
            "label": "元素精通",
            "value": "激化队 150 – 250",
            "hint": "激化队精通收益显著"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "菲谢尔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "菲谢尔后台雷"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 激化体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "钟离开盾"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "雷电将军爆发队": {
    "name": "雷电将军爆发队",
    "core": "雷九万班 · 一刀收割",
    "tip": "九条 E+Q 增攻 → 班尼特 Q 加攻 → 万叶扩散 → 雷神 Q 一刀收割，经典雷九万班。",
    "reaction": "爆发",
    "resonance": "双雷共鸣 · 触发雷系反应额外产球，充能更宽裕",
    "themeColor": "#ff7a59",
    "rotation": [
      {
        "text": "九条 E+Q 增攻",
        "owners": [
          "九条裟罗"
        ]
      },
      {
        "text": "班尼特 Q 加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "万叶扩散",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "雷神 Q 一刀收割",
        "owners": [
          "雷电将军"
        ]
      },
      {
        "text": "经典雷九万班。",
        "owners": [
          "雷电将军",
          "九条裟罗",
          "枫原万叶",
          "班尼特"
        ]
      }
    ],
    "members": [
      {
        "name": "雷电将军",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 爆发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「雷九万班 · 一刀收割」打满爆发窗口",
        "summary": "Q 高爆发+全队充能，充能 230%+ 叠双暴，开大无敌帧多。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "薙草之稻光",
          "displayName": "薙草之稻光",
          "rarity": 5,
          "reason": "专武，充能转攻",
          "type": "长柄武器",
          "stat": "副属性：元素充能效率",
          "desc": "充能效率超 100% 部分每 1% 转 0.4% 攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "渔获",
            "displayName": "渔获",
            "rarity": 4,
            "reason": "充能+Q 增伤，平民神器",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "钓鱼兑换，充能+Q 增伤，平民神器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素充能效率",
            "subValue": "45.9%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "230% – 270%",
            "hint": "充能转雷伤与愿力"
          },
          {
            "label": "攻击力",
            "value": "1,900 – 2,200",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140%",
            "hint": "双暴优先于增伤"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "雷电将军是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "雷神 Q 一刀收割",
          "经典雷九万班。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          true
        ]
      },
      {
        "name": "九条裟罗",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 爆发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造爆发条件",
        "summary": "雷系专拐，E/Q 为雷C大幅加攻，雷九万班核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之翼",
          "displayName": "天空之翼",
          "rarity": 5,
          "reason": "高白值+暴击，增攻副C",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "暴击后范围物伤，攻击力提升。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "元素战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "180% – 220%",
            "hint": "Q 循环"
          },
          {
            "label": "攻击力（白值）",
            "value": "越高越好",
            "hint": "加攻按基础攻击结算"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "满命后再考虑"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "九条裟罗以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "九条 E+Q 增攻",
          "经典雷九万班。"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 爆发体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "万叶扩散",
          "经典雷九万班。"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          true
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 爆发体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "班尼特 Q 加攻",
          "经典雷九万班。"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          true
        ]
      }
    ]
  },
  "赛诺激化队": {
    "name": "赛诺激化队",
    "core": "激化 · 长轴站场",
    "tip": "纳西妲+白术双草 → 菲谢尔后台雷 → 赛诺 Q 长轴激化站场，白术保生存。",
    "reaction": "激化",
    "resonance": "双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大",
    "themeColor": "#8fd14f",
    "rotation": [
      {
        "text": "纳西妲+白术双草",
        "owners": [
          "纳西妲",
          "白术"
        ]
      },
      {
        "text": "菲谢尔后台雷",
        "owners": [
          "菲谢尔"
        ]
      },
      {
        "text": "赛诺 Q 长轴激化站场",
        "owners": [
          "赛诺"
        ]
      },
      {
        "text": "白术保生存。",
        "owners": [
          "白术"
        ]
      }
    ],
    "members": [
      {
        "name": "赛诺",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 激化体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「激化 · 长轴站场」打满爆发窗口",
        "summary": "Q 变身长轴激化输出，配草系持续挂草。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "赤沙之杖",
          "displayName": "赤沙之杖",
          "rarity": 5,
          "reason": "专武，精通转攻",
          "type": "长柄武器",
          "stat": "副属性：元素精通",
          "desc": "基于精通提升攻击力，赛诺专武。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "决斗之枪",
            "displayName": "决斗之枪",
            "rarity": 4,
            "reason": "暴击率副属性",
            "type": "长柄武器",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，暴击副属性缓解双暴压力。",
            "atk1": 41,
            "atk90": 454,
            "subStat": "暴击率",
            "subValue": "36.8%"
          }
        ],
        "artifact": {
          "raw": "饰金之梦 4件套",
          "name": "饰金之梦",
          "twoPiece": "元素精通+80",
          "fourPiece": "触发元素反应后的8秒内，依据队伍中其他角色的元素类型使装备者获得强化：同元素角色使攻击力+14%，不同元素角色使元素精通+50；每类元素至多1层，至多3层",
          "flavor": "反应型主C",
          "image": "/artifacts/shijin-zhimeng.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "激化基础伤害直接吃精通"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "赛诺是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "赛诺 Q 长轴激化站场"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "纳西妲",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专武，精通+全队增益",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "800 – 1,000",
            "hint": "激化/绽放核心，且受天赋上限约束"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "精通达标后补双暴"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "纳西妲以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "纳西妲+白术双草"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "白术",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "治疗 / 续航位 · 激化体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "盾+治疗+后台挂草，绽放/激化队优质生存位。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "不灭月华",
          "displayName": "不灭月华",
          "rarity": 5,
          "reason": "治疗+生命",
          "type": "法器",
          "stat": "副属性：生命值",
          "desc": "治疗+生命加成，珊瑚宫心海专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "40,000 – 50,000",
            "hint": "治疗与增伤按生命结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "Q 循环"
          },
          {
            "label": "暴击率",
            "value": "可选",
            "hint": "非刚需"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "白术负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "纳西妲+白术双草",
          "白术保生存。"
        ],
        "stepMine": [
          true,
          false,
          false,
          true
        ]
      },
      {
        "name": "菲谢尔",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "奥兹后台持续雷伤，激化/超导队经典副C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之翼",
          "displayName": "天空之翼",
          "rarity": 5,
          "reason": "暴击率，奥兹输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "暴击后范围物伤，攻击力提升。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": ""
          },
          {
            "label": "元素精通",
            "value": "激化队 150 – 250",
            "hint": "激化队精通收益显著"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "菲谢尔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "菲谢尔后台雷"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "克洛琳德突进队": {
    "name": "克洛琳德突进队",
    "core": "突进雷伤 · 生命契约",
    "tip": "纳西妲挂草 → 菲谢尔后台雷 → 白术治疗 → 克洛琳德 E 突进激化输出。",
    "reaction": "直伤",
    "resonance": "双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大",
    "themeColor": "#7fb2e8",
    "rotation": [
      {
        "text": "纳西妲挂草",
        "owners": [
          "纳西妲"
        ]
      },
      {
        "text": "菲谢尔后台雷",
        "owners": [
          "菲谢尔"
        ]
      },
      {
        "text": "白术治疗",
        "owners": [
          "白术"
        ]
      },
      {
        "text": "克洛琳德 E 突进激化输出。",
        "owners": [
          "克洛琳德"
        ]
      }
    ],
    "members": [
      {
        "name": "克洛琳德",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 直伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「突进雷伤 · 生命契约」打满爆发窗口",
        "summary": "枪剑突进站场，依赖雷草反应（激化/超载），枫丹热门雷C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "赦罪之锏",
          "displayName": "赦罪之锏",
          "rarity": 5,
          "reason": "专武，突进雷伤",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "突进输出与雷伤全面契合，克洛琳德专武。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "匣里龙吟",
            "displayName": "匣里龙吟",
            "rarity": 4,
            "reason": "暴击副属性",
            "type": "单手剑",
            "stat": "副属性：攻击力",
            "desc": "对附着元素敌人增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "谐律的异想 4件套",
          "name": "谐律的异想",
          "twoPiece": "攻击力+18%",
          "fourPiece": "生命之契的数值发生变动时，角色造成的伤害提升18%，持续6秒，最多叠加3层",
          "flavor": "生命之契体系 · 阿蕾奇诺 / 克洛琳德",
          "image": "",
          "themeColor": "#d97a86",
          "matched": false
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素伤害加成",
            "value": "对应元素伤杯子",
            "hint": "直伤队杯子收益最高"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "克洛琳德是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "克洛琳德 E 突进激化输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "纳西妲",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 直伤体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造直伤条件",
        "summary": "E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专武，精通+全队增益",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "800 – 1,000",
            "hint": "激化/绽放核心，且受天赋上限约束"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "精通达标后补双暴"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "纳西妲以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "纳西妲挂草"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "菲谢尔",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 直伤体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造直伤条件",
        "summary": "奥兹后台持续雷伤，激化/超导队经典副C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之翼",
          "displayName": "天空之翼",
          "rarity": 5,
          "reason": "暴击率，奥兹输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "暴击后范围物伤，攻击力提升。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": ""
          },
          {
            "label": "元素精通",
            "value": "激化队 150 – 250",
            "hint": "激化队精通收益显著"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "菲谢尔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "菲谢尔后台雷"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "白术",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "治疗 / 续航位 · 直伤体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "盾+治疗+后台挂草，绽放/激化队优质生存位。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "不灭月华",
          "displayName": "不灭月华",
          "rarity": 5,
          "reason": "治疗+生命",
          "type": "法器",
          "stat": "副属性：生命值",
          "desc": "治疗+生命加成，珊瑚宫心海专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "40,000 – 50,000",
            "hint": "治疗与增伤按生命结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "Q 循环"
          },
          {
            "label": "暴击率",
            "value": "可选",
            "hint": "非刚需"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "白术负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕；双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "白术治疗"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "瓦蕾莎站场队": {
    "name": "瓦蕾莎站场队",
    "core": "站场雷伤 · 下落输出",
    "tip": "纳西妲挂草 → 菲谢尔后台雷 → 钟离开盾 → 瓦蕾莎站场激化输出。",
    "reaction": "下落",
    "resonance": "双雷共鸣 · 触发雷系反应额外产球，充能更宽裕",
    "themeColor": "#9ec5f0",
    "rotation": [
      {
        "text": "纳西妲挂草",
        "owners": [
          "纳西妲"
        ]
      },
      {
        "text": "菲谢尔后台雷",
        "owners": [
          "菲谢尔"
        ]
      },
      {
        "text": "钟离开盾",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "瓦蕾莎站场激化输出。",
        "owners": [
          "瓦蕾莎"
        ]
      }
    ],
    "members": [
      {
        "name": "瓦蕾莎",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 下落体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「站场雷伤 · 下落输出」打满爆发窗口",
        "summary": "纳塔雷C，夜魂体系站场输出，配希诺宁出伤。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "赤沙之王",
          "displayName": "赤沙之王",
          "rarity": 5,
          "reason": "夜魂雷C输出",
          "type": "双手剑",
          "stat": "副属性：暴击伤害",
          "desc": "火神玛薇卡专属，Q 爆发与夜魂体系完美契合。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "决斗之枪",
            "displayName": "决斗之枪",
            "rarity": 4,
            "reason": "暴击率副属性",
            "type": "长柄武器",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，暴击副属性缓解双暴压力。",
            "atk1": 41,
            "atk90": 454,
            "subStat": "暴击率",
            "subValue": "36.8%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "下落攻击伤害加成",
            "value": "按套装/武器",
            "hint": "下落流吃专属增伤区"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "下落攻击吃专属增伤，注意高度与落地判定",
          "护盾/抗打断位保证下落不被打断",
          "充能需覆盖主C的站场轴",
          "瓦蕾莎是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "瓦蕾莎站场激化输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "纳西妲",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 下落体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造下落条件",
        "summary": "E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专武，精通+全队增益",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "800 – 1,000",
            "hint": "激化/绽放核心，且受天赋上限约束"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "精通达标后补双暴"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "下落攻击吃专属增伤，注意高度与落地判定",
          "护盾/抗打断位保证下落不被打断",
          "充能需覆盖主C的站场轴",
          "纳西妲以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "纳西妲挂草"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "菲谢尔",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 下落体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造下落条件",
        "summary": "奥兹后台持续雷伤，激化/超导队经典副C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之翼",
          "displayName": "天空之翼",
          "rarity": 5,
          "reason": "暴击率，奥兹输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "暴击后范围物伤，攻击力提升。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": ""
          },
          {
            "label": "元素精通",
            "value": "激化队 150 – 250",
            "hint": "激化队精通收益显著"
          }
        ],
        "notes": [
          "下落攻击吃专属增伤，注意高度与落地判定",
          "护盾/抗打断位保证下落不被打断",
          "充能需覆盖主C的站场轴",
          "菲谢尔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "菲谢尔后台雷"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 下落体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "下落攻击吃专属增伤，注意高度与落地判定",
          "护盾/抗打断位保证下落不被打断",
          "充能需覆盖主C的站场轴",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "钟离开盾"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "菲林斯月感电队": {
    "name": "菲林斯月感电队",
    "core": "月感电 · 站场主C",
    "tip": "伊涅芙护盾+月感电 → 菈乌玛挂草 → 爱诺水兆 → 菲林斯站场驱动月感电，输出丝滑。",
    "reaction": "月感电",
    "resonance": "双雷共鸣 · 触发雷系反应额外产球，充能更宽裕",
    "themeColor": "#a78bfa",
    "rotation": [
      {
        "text": "伊涅芙护盾+月感电",
        "owners": [
          "伊涅芙"
        ]
      },
      {
        "text": "菈乌玛挂草",
        "owners": [
          "菈乌玛"
        ]
      },
      {
        "text": "爱诺水兆",
        "owners": [
          "爱诺"
        ]
      },
      {
        "text": "菲林斯站场驱动月感电",
        "owners": [
          "菲林斯"
        ]
      },
      {
        "text": "输出丝滑。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "菲林斯",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 月感电体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月感电 · 站场主C」打满爆发窗口",
        "summary": "月感电站场主C，幽焰显迹模式输出，驱动月感电反应的执灯人。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "血染荒城",
          "displayName": "血染荒城",
          "rarity": 5,
          "reason": "专武，月感电输出",
          "type": "长柄武器",
          "stat": "副属性：暴击率",
          "desc": "月感电输出核心长柄，菲林斯专武。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "匣里龙吟",
            "displayName": "匣里龙吟",
            "rarity": 4,
            "reason": "暴击副属性",
            "type": "单手剑",
            "stat": "副属性：攻击力",
            "desc": "对附着元素敌人增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "穹境示现之夜 4件套",
          "name": "穹境示现之夜",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后获得持续12秒的增伤与暴击率加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qiongjing-shixian-zhiye.png",
          "themeColor": "#8f9fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "月感电吃精通与双暴"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月感电按队伍雷/水角色数量与面板结算",
          "保持雷水同时在场，避免提前切走",
          "充能与精通需按队伍轴长平衡",
          "菲林斯是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "菲林斯站场驱动月感电"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "伊涅芙",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 月感电体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月感电 · 站场主C」打满爆发窗口",
        "summary": "月感电体系辅助，与菲林斯组成菲机组合的核心拐。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "镜中月",
          "displayName": "镜中月",
          "rarity": 5,
          "reason": "专武，月感电体系增伤",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "丝柯克核心武器，冰水体系输出上限极高。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "上场随机增伤，爆发",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "穹境示现之夜 4件套",
          "name": "穹境示现之夜",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后获得持续12秒的增伤与暴击率加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qiongjing-shixian-zhiye.png",
          "themeColor": "#8f9fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "月感电吃精通与双暴"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月感电按队伍雷/水角色数量与面板结算",
          "保持雷水同时在场，避免提前切走",
          "充能与精通需按队伍轴长平衡",
          "伊涅芙是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "伊涅芙护盾+月感电"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          false
        ]
      },
      {
        "name": "菈乌玛",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "站场主C · 月感电体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月感电 · 站场主C」打满爆发窗口",
        "summary": "月绽放体系核心，挂草触发月绽放，挪德卡莱「月」体系关键。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "纺夜天镜",
          "displayName": "纺夜天镜",
          "rarity": 5,
          "reason": "专武，月绽放核心",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "月绽放体系核心法器，菈乌玛与奈芙尔专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "祭礼残章",
            "displayName": "祭礼残章",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "战技概率重置，精通法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "纺月的夜歌 4件套",
          "name": "纺月的夜歌",
          "twoPiece": "元素精通+80",
          "fourPiece": "装备者触发元素反应后，依据队伍中月兆角色的数量为全队提供元素伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/fangyue-de-yege.png",
          "themeColor": "#a88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "月感电吃精通与双暴"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月感电按队伍雷/水角色数量与面板结算",
          "保持雷水同时在场，避免提前切走",
          "充能与精通需按队伍轴长平衡",
          "菈乌玛是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "菈乌玛挂草"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "爱诺",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 月感电体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造月感电条件",
        "summary": "挪德卡莱机械发明家，后台挂水+领域水伤，月反应水载体。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "冬极白星",
          "displayName": "冬极白星",
          "rarity": 5,
          "reason": "普攻增伤，后台挂水输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "普攻重击叠层增伤，达达利亚专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "元素战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "纺月的夜歌 4件套",
          "name": "纺月的夜歌",
          "twoPiece": "元素精通+80",
          "fourPiece": "装备者触发元素反应后，依据队伍中月兆角色的数量为全队提供元素伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/fangyue-de-yege.png",
          "themeColor": "#a88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "月感电吃精通与双暴"
          }
        ],
        "notes": [
          "月感电按队伍雷/水角色数量与面板结算",
          "保持雷水同时在场，避免提前切走",
          "充能与精通需按队伍轴长平衡",
          "爱诺以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "爱诺水兆"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "米提亚星超导队": {
    "name": "米提亚星超导队",
    "core": "星超导 · 后台雷伤",
    "tip": "奥黛塔挂冰触发星超导 → 瓦列里护盾增超导 → 米提亚战技+大招后台雷伤，至冬三战舰上限最高。",
    "reaction": "星超导",
    "resonance": "双雷共鸣 · 触发雷系反应额外产球，充能更宽裕",
    "themeColor": "#b39bff",
    "rotation": [
      {
        "text": "奥黛塔挂冰触发星超导",
        "owners": [
          "奥黛塔"
        ]
      },
      {
        "text": "瓦列里护盾增超导",
        "owners": [
          "瓦列里"
        ]
      },
      {
        "text": "米提亚战技+大招后台雷伤",
        "owners": [
          "米提亚"
        ]
      },
      {
        "text": "至冬三战舰上限最高。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "米提亚",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 星超导体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「星超导 · 后台雷伤」打满爆发窗口",
        "summary": "至冬星之楔雷法器角色，星烁反应体系输出。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "蝶变",
          "displayName": "蝶变",
          "rarity": 5,
          "reason": "星扩散体系输出",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "7.1 薇斯纳专武，触发星扩散后提升全队风伤与扩散伤害。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "爆发增伤",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "150 – 300",
            "hint": "后台雷伤兼顾精通"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "星超导以后台雷伤为主，保持触发条件",
          "后台角色充能与精通都需兼顾",
          "注意新机制与传统超导的区别",
          "米提亚是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "米提亚战技+大招后台雷伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "奥黛塔",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "后台副C · 星超导体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造星超导条件",
        "summary": "至冬首席芭蕾舞者，星之楔冰，后台触发星超导/星扩散，持续挂冰+星烁增伤。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "白湖冬羽",
          "displayName": "白湖冬羽",
          "rarity": 5,
          "reason": "专武，星烁反应增伤+回能",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "7.0 奥黛塔专武，提升冰伤与星烁反应伤害，后台挂冰时依然生效。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "雾切之回光",
            "displayName": "雾切之回光",
            "rarity": 5,
            "reason": "元素伤加成替代",
            "type": "单手剑",
            "stat": "副属性：暴击伤害",
            "desc": "获得元素伤害加成，普攻命中叠层进一步提高元素伤害。",
            "atk1": 48,
            "atk90": 674,
            "subStat": "暴击伤害",
            "subValue": "44.1%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 300",
            "hint": "后台雷伤兼顾精通"
          }
        ],
        "notes": [
          "星超导以后台雷伤为主，保持触发条件",
          "后台角色充能与精通都需兼顾",
          "注意新机制与传统超导的区别",
          "奥黛塔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "奥黛塔挂冰触发星超导"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "瓦列里",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 星超导体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造星超导条件",
        "summary": "至冬单手剑角色，后台挂雷副C，星烁反应辅助。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "西风剑",
          "displayName": "西风剑",
          "rarity": 4,
          "reason": "充能副属性，辅助循环",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "暴击回能，帮助全队循环。",
          "atk1": 44,
          "atk90": 565,
          "subStat": "元素充能效率",
          "subValue": "30.6%"
        },
        "altWeapons": [
          {
            "name": "匣里龙吟",
            "displayName": "匣里龙吟",
            "rarity": 4,
            "reason": "攻击副属性",
            "type": "单手剑",
            "stat": "副属性：攻击力",
            "desc": "对附着元素敌人增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 300",
            "hint": "后台雷伤兼顾精通"
          }
        ],
        "notes": [
          "星超导以后台雷伤为主，保持触发条件",
          "后台角色充能与精通都需兼顾",
          "注意新机制与传统超导的区别",
          "瓦列里以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "瓦列里护盾增超导"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "爱诺",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 星超导体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造星超导条件",
        "summary": "挪德卡莱机械发明家，后台挂水+领域水伤，月反应水载体。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "冬极白星",
          "displayName": "冬极白星",
          "rarity": 5,
          "reason": "普攻增伤，后台挂水输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "普攻重击叠层增伤，达达利亚专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "元素战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "纺月的夜歌 4件套",
          "name": "纺月的夜歌",
          "twoPiece": "元素精通+80",
          "fourPiece": "装备者触发元素反应后，依据队伍中月兆角色的数量为全队提供元素伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/fangyue-de-yege.png",
          "themeColor": "#a88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 300",
            "hint": "后台雷伤兼顾精通"
          }
        ],
        "notes": [
          "星超导以后台雷伤为主，保持触发条件",
          "后台角色充能与精通都需兼顾",
          "注意新机制与传统超导的区别",
          "爱诺以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [],
        "stepMine": [
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  "甘雨永冻队": {
    "name": "甘雨永冻队",
    "core": "范围永冻 · 蓄力狙杀",
    "tip": "心海挂水 → 万叶聚怪 → 申鹤增冰伤 → 甘雨远程蓄力箭逐个点名，永冻控场。",
    "reaction": "永冻",
    "resonance": "双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤",
    "themeColor": "#7fd3f5",
    "rotation": [
      {
        "text": "心海挂水",
        "owners": [
          "珊瑚宫心海"
        ]
      },
      {
        "text": "万叶聚怪",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "申鹤增冰伤",
        "owners": [
          "申鹤"
        ]
      },
      {
        "text": "甘雨远程蓄力箭逐个点名",
        "owners": [
          "甘雨"
        ]
      },
      {
        "text": "永冻控场。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "甘雨",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 永冻体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「范围永冻 · 蓄力狙杀」打满爆发窗口",
        "summary": "重击霜华矢二段伤害，操作上限高，怕打断可带盾辅。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "阿莫斯之弓",
          "displayName": "阿莫斯之弓",
          "rarity": 5,
          "reason": "蓄力箭增伤",
          "type": "弓",
          "stat": "副属性：攻击力",
          "desc": "普攻与瞄准射击伤害提升，箭矢飞行增伤。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "破魔之弓",
            "displayName": "破魔之弓",
            "rarity": 4,
            "reason": "满能量重击增伤",
            "type": "弓",
            "stat": "副属性：攻击力",
            "desc": "锻造获取，满能量重击增伤 32%。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "冰风迷途的勇士 4件套",
          "name": "冰风迷途的勇士",
          "twoPiece": "冰元素伤害加成+15%",
          "fourPiece": "攻击处于冰元素影响下的敌人时暴击率+20%；若敌人处于冻结状态，暴击率额外+20%",
          "flavor": "永冻冰C",
          "image": "/artifacts/bingfeng-mitu-yongshi.png",
          "themeColor": "#6fc7e8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "2,000 – 2,300",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 200%",
            "hint": "永冻下暴击率需求可降低"
          },
          {
            "label": "元素精通",
            "value": "融化队 100 – 200",
            "hint": "纯永冻队可不堆"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "甘雨是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "甘雨远程蓄力箭逐个点名"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "珊瑚宫心海",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "治疗 / 续航位 · 永冻体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "E 水母持续治疗+挂水，永冻与绽放队核心生存位。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "不灭月华",
          "displayName": "不灭月华",
          "rarity": 5,
          "reason": "专武，治疗+生命",
          "type": "法器",
          "stat": "副属性：生命值",
          "desc": "治疗+生命加成，珊瑚宫心海专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "32,000 – 40,000",
            "hint": "治疗与伤害同源"
          },
          {
            "label": "治疗加成",
            "value": "海染/千岩按套装",
            "hint": ""
          },
          {
            "label": "元素充能效率",
            "value": "150% – 180%",
            "hint": "保证 E/Q 覆盖"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "珊瑚宫心海负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "心海挂水"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          false
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 永冻体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "万叶聚怪"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "申鹤",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 永冻体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 冰翎增冰伤，冰系专拐，永冻/纯冰队核心。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：攻击% / 理之冠：攻击%",
        "weapon": {
          "name": "息灾",
          "displayName": "息灾",
          "rarity": 5,
          "reason": "专武，攻击力提升",
          "type": "长柄武器",
          "stat": "副属性：攻击力",
          "desc": "申鹤专武，攻击力提升，冰系辅助。",
          "atk1": 49,
          "atk90": 741,
          "subStat": "攻击力",
          "subValue": "16.5%"
        },
        "altWeapons": [
          {
            "name": "西风长枪",
            "displayName": "西风长枪",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "昔日宗室之仪 4件套",
          "name": "昔日宗室之仪",
          "twoPiece": "元素爆发造成的伤害+20%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒，该效果不可叠加",
          "flavor": "全队增伤辅助",
          "image": "/artifacts/xiri-zongshi-zhiyi.png",
          "themeColor": "#6f8fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "3,000 – 3,800",
            "hint": "冰翎加成按攻击结算"
          },
          {
            "label": "元素充能效率",
            "value": "150% – 180%",
            "hint": "Q 循环"
          },
          {
            "label": "暴击率",
            "value": "可选",
            "hint": "非刚需"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "申鹤提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "申鹤增冰伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "优菈物理队": {
    "name": "优菈物理队",
    "core": "物理爆发 · 核弹流",
    "tip": "雷神后台超导减物抗 → 罗莎莉亚暴击拐 → 班尼特加攻 → 优菈 E+Q 核弹爆发。",
    "reaction": "物理",
    "resonance": "双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤",
    "themeColor": "#cbd5e1",
    "rotation": [
      {
        "text": "雷神后台超导减物抗",
        "owners": [
          "雷电将军"
        ]
      },
      {
        "text": "罗莎莉亚暴击拐",
        "owners": [
          "罗莎莉亚"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "优菈 E+Q 核弹爆发。",
        "owners": [
          "优菈"
        ]
      }
    ],
    "members": [
      {
        "name": "优菈",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 物理体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「物理爆发 · 核弹流」打满爆发窗口",
        "summary": "光降之剑爆发，物理主C天花板，配雷电将军超导减抗。",
        "talents": "元素爆发 > 普通攻击 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：物伤% / 理之冠：暴击",
        "weapon": {
          "name": "松籁响起之时",
          "displayName": "松籁响起之时",
          "rarity": 5,
          "reason": "物伤，攻速攻击",
          "type": "双手剑",
          "stat": "副属性：物理伤害加成",
          "desc": "普攻叠层提升攻速与攻击力，物伤武器。",
          "atk1": 49,
          "atk90": 741,
          "subStat": "物理伤害加成",
          "subValue": "20.7%"
        },
        "altWeapons": [
          {
            "name": "雪葬的星银",
            "displayName": "雪葬的星银",
            "rarity": 4,
            "reason": "物伤副属性",
            "type": "双手剑",
            "stat": "副属性：物理伤害加成",
            "desc": "龙脊雪山锻造，普攻命中概率范围冰伤。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "物理伤害加成",
            "subValue": "34.5%"
          }
        ],
        "artifact": {
          "raw": "苍白之火 4件套",
          "name": "苍白之火",
          "twoPiece": "造成的物理伤害+25%",
          "fourPiece": "元素战技命中敌人后攻击力+9%，持续7秒，最多叠加2层；叠加2层时2件套的效果提升100%",
          "flavor": "物理主C",
          "image": "/artifacts/cangbai-zhihuo.png",
          "themeColor": "#c9d3e0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "物理伤害加成",
            "value": "优先杯子",
            "hint": "物理队靠杯子与超导减抗"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "超导减物抗是物理队核心，保持雷冰触发",
          "物理伤害杯子优先",
          "注意部分敌人物抗较高",
          "优菈是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "优菈 E+Q 核弹爆发。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "雷电将军",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 物理体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「物理爆发 · 核弹流」打满爆发窗口",
        "summary": "Q 高爆发+全队充能，充能 230%+ 叠双暴，开大无敌帧多。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "薙草之稻光",
          "displayName": "薙草之稻光",
          "rarity": 5,
          "reason": "专武，充能转攻",
          "type": "长柄武器",
          "stat": "副属性：元素充能效率",
          "desc": "充能效率超 100% 部分每 1% 转 0.4% 攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "渔获",
            "displayName": "渔获",
            "rarity": 4,
            "reason": "充能+Q 增伤，平民神器",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "钓鱼兑换，充能+Q 增伤，平民神器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素充能效率",
            "subValue": "45.9%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "230% – 270%",
            "hint": "充能转雷伤与愿力"
          },
          {
            "label": "攻击力",
            "value": "1,900 – 2,200",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140%",
            "hint": "双暴优先于增伤"
          }
        ],
        "notes": [
          "超导减物抗是物理队核心，保持雷冰触发",
          "物理伤害杯子优先",
          "注意部分敌人物抗较高",
          "雷电将军是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "雷神后台超导减物抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "罗莎莉亚",
        "element": "冰",
        "rarity": 4,
        "roleInTeam": "后台副C · 物理体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造物理条件",
        "summary": "Q 范围冰伤+全队暴击率加成，永冻/物伤队副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之脊",
          "displayName": "天空之脊",
          "rarity": 5,
          "reason": "充能+暴击，辅助副C",
          "type": "长柄武器",
          "stat": "副属性：元素充能效率",
          "desc": "普攻命中额外刃伤，Q 后移速提升。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风长枪",
            "displayName": "西风长枪",
            "rarity": 4,
            "reason": "充能副属性，暴击拐",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "昔日宗室之仪 4件套",
          "name": "昔日宗室之仪",
          "twoPiece": "元素爆发造成的伤害+20%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒，该效果不可叠加",
          "flavor": "全队增伤辅助",
          "image": "/artifacts/xiri-zongshi-zhiyi.png",
          "themeColor": "#6f8fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "物理伤害加成",
            "value": "优先杯子",
            "hint": "物理队靠杯子与超导减抗"
          }
        ],
        "notes": [
          "超导减物抗是物理队核心，保持雷冰触发",
          "物理伤害杯子优先",
          "注意部分敌人物抗较高",
          "罗莎莉亚以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "罗莎莉亚暴击拐"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 物理体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "超导减物抗是物理队核心，保持雷冰触发",
          "物理伤害杯子优先",
          "注意部分敌人物抗较高",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "神里绫华永冻队": {
    "name": "神里绫华永冻队",
    "core": "神鹤万心 · 冻结爆发",
    "tip": "心海挂水 → 万叶聚怪 → 申鹤 E 增冰伤 → 绫华霰步贴脸 Q+重击，经典神鹤万心。",
    "reaction": "永冻",
    "resonance": "双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤",
    "themeColor": "#7fd3f5",
    "rotation": [
      {
        "text": "心海挂水",
        "owners": [
          "珊瑚宫心海"
        ]
      },
      {
        "text": "万叶聚怪",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "申鹤 E 增冰伤",
        "owners": [
          "申鹤"
        ]
      },
      {
        "text": "绫华霰步贴脸 Q+重击",
        "owners": [
          "神里绫华"
        ]
      },
      {
        "text": "经典神鹤万心。",
        "owners": [
          "神里绫华",
          "申鹤",
          "枫原万叶",
          "珊瑚宫心海"
        ]
      }
    ],
    "members": [
      {
        "name": "神里绫华",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 永冻体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「神鹤万心 · 冻结爆发」打满爆发窗口",
        "summary": "重击+Q 站场，配莫娜/心海挂水永冻，霰步贴近开怪。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "雾切之回光",
          "displayName": "雾切之回光",
          "rarity": 5,
          "reason": "专武，冰伤加成",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "获得元素伤害加成，普攻命中叠层进一步提高元素伤害。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "天目影打刀",
            "displayName": "天目影打刀",
            "rarity": 4,
            "reason": "充能缓解 Q 压力",
            "type": "单手剑",
            "stat": "副属性：攻击力",
            "desc": "稻妻锻造，充能缓解 Q 启动压力。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "冰风迷途的勇士 4件套",
          "name": "冰风迷途的勇士",
          "twoPiece": "冰元素伤害加成+15%",
          "fourPiece": "攻击处于冰元素影响下的敌人时暴击率+20%；若敌人处于冻结状态，暴击率额外+20%",
          "flavor": "永冻冰C",
          "image": "/artifacts/bingfeng-mitu-yongshi.png",
          "themeColor": "#6fc7e8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "2,000 – 2,300",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "45% / 220%",
            "hint": "永冻+双冰共鸣，暴击率可压低"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "神里绫华是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "绫华霰步贴脸 Q+重击",
          "经典神鹤万心。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          true
        ]
      },
      {
        "name": "申鹤",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 永冻体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 冰翎增冰伤，冰系专拐，永冻/纯冰队核心。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：攻击% / 理之冠：攻击%",
        "weapon": {
          "name": "息灾",
          "displayName": "息灾",
          "rarity": 5,
          "reason": "专武，攻击力提升",
          "type": "长柄武器",
          "stat": "副属性：攻击力",
          "desc": "申鹤专武，攻击力提升，冰系辅助。",
          "atk1": 49,
          "atk90": 741,
          "subStat": "攻击力",
          "subValue": "16.5%"
        },
        "altWeapons": [
          {
            "name": "西风长枪",
            "displayName": "西风长枪",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "昔日宗室之仪 4件套",
          "name": "昔日宗室之仪",
          "twoPiece": "元素爆发造成的伤害+20%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒，该效果不可叠加",
          "flavor": "全队增伤辅助",
          "image": "/artifacts/xiri-zongshi-zhiyi.png",
          "themeColor": "#6f8fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "3,000 – 3,800",
            "hint": "冰翎加成按攻击结算"
          },
          {
            "label": "元素充能效率",
            "value": "150% – 180%",
            "hint": "Q 循环"
          },
          {
            "label": "暴击率",
            "value": "可选",
            "hint": "非刚需"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "申鹤提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "申鹤 E 增冰伤",
          "经典神鹤万心。"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          true
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 永冻体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "万叶聚怪",
          "经典神鹤万心。"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          true
        ]
      },
      {
        "name": "珊瑚宫心海",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "治疗 / 续航位 · 永冻体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "E 水母持续治疗+挂水，永冻与绽放队核心生存位。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "不灭月华",
          "displayName": "不灭月华",
          "rarity": 5,
          "reason": "专武，治疗+生命",
          "type": "法器",
          "stat": "副属性：生命值",
          "desc": "治疗+生命加成，珊瑚宫心海专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "32,000 – 40,000",
            "hint": "治疗与伤害同源"
          },
          {
            "label": "治疗加成",
            "value": "海染/千岩按套装",
            "hint": ""
          },
          {
            "label": "元素充能效率",
            "value": "150% – 180%",
            "hint": "保证 E/Q 覆盖"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "珊瑚宫心海负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "心海挂水",
          "经典神鹤万心。"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          true
        ]
      }
    ]
  },
  "莱欧斯利站场队": {
    "name": "莱欧斯利站场队",
    "core": "站场冰伤 · 近战拳击",
    "tip": "爱可菲减抗 → 芙宁娜增伤挂水 → 心海治疗 → 莱欧斯利站场冰伤拳击。",
    "reaction": "直伤",
    "resonance": "双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤；双水共鸣 · 提升生命与充能，缓解循环压力",
    "themeColor": "#7fb2e8",
    "rotation": [
      {
        "text": "爱可菲减抗",
        "owners": [
          "爱可菲"
        ]
      },
      {
        "text": "芙宁娜增伤挂水",
        "owners": [
          "芙宁娜"
        ]
      },
      {
        "text": "心海治疗",
        "owners": [
          "珊瑚宫心海"
        ]
      },
      {
        "text": "莱欧斯利站场冰伤拳击。",
        "owners": [
          "莱欧斯利"
        ]
      }
    ],
    "members": [
      {
        "name": "莱欧斯利",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 直伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「站场冰伤 · 近战拳击」打满爆发窗口",
        "summary": "拳套站场输出，生命波动强化，枫丹冰C。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "镜中月",
          "displayName": "镜中月",
          "rarity": 5,
          "reason": "冰水体系输出",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "丝柯克核心武器，冰水体系输出上限极高。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "黑剑",
            "displayName": "黑剑",
            "rarity": 4,
            "reason": "暴击率副属性",
            "type": "单手剑",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，普攻重击增伤+回血。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击率",
            "subValue": "27.6%"
          }
        ],
        "artifact": {
          "raw": "逐影猎人 4件套",
          "name": "逐影猎人",
          "twoPiece": "普通攻击与重击造成的伤害+15%",
          "fourPiece": "当前生命值提升或降低时，暴击率+12%，持续5秒，最多叠加3层",
          "flavor": "生命波动主C",
          "image": "/artifacts/zhuying-lieren.png",
          "themeColor": "#6f8fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素伤害加成",
            "value": "对应元素伤杯子",
            "hint": "直伤队杯子收益最高"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "莱欧斯利是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "莱欧斯利站场冰伤拳击。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "芙宁娜",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 直伤体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造直伤条件",
        "summary": "水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "静水流涌之辉",
          "displayName": "静水流涌之辉",
          "rarity": 5,
          "reason": "专武，生命+增伤",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "基于生命上限提升元素战技伤害，契合水神芙宁娜。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000+",
            "hint": "增伤幅度与生命挂钩"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队需堆充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": "副C伤害补充"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "芙宁娜以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "芙宁娜增伤挂水"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "爱可菲",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 直伤体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "盘活冰系的水冰减抗辅助，兼具副C输出，丝柯克等冰C核心拐。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "终末嗟叹之诗",
          "displayName": "终末嗟叹之诗",
          "rarity": 5,
          "reason": "精通+全队增益",
          "type": "弓",
          "stat": "副属性：元素充能效率",
          "desc": "精通+充能+全队精通增益，辅助最优。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风弓",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "苍金之翼 4件套",
          "name": "苍金之翼",
          "twoPiece": "攻击力+18%",
          "fourPiece": "队伍中角色触发夜魂相关效果时，装备者获得攻击力与伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/cangjin-zhiyi.png",
          "themeColor": "#d8b06a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通 / 攻击力",
            "value": "精通 800+ 或 攻击 2,000+",
            "hint": "按增伤方式二选一"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 210%",
            "hint": "保证 Q 增伤覆盖"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "辅助位非刚需"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "爱可菲提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "爱可菲减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "珊瑚宫心海",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "治疗 / 续航位 · 直伤体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "E 水母持续治疗+挂水，永冻与绽放队核心生存位。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "不灭月华",
          "displayName": "不灭月华",
          "rarity": 5,
          "reason": "专武，治疗+生命",
          "type": "法器",
          "stat": "副属性：生命值",
          "desc": "治疗+生命加成，珊瑚宫心海专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "32,000 – 40,000",
            "hint": "治疗与伤害同源"
          },
          {
            "label": "治疗加成",
            "value": "海染/千岩按套装",
            "hint": ""
          },
          {
            "label": "元素充能效率",
            "value": "150% – 180%",
            "hint": "保证 E/Q 覆盖"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "珊瑚宫心海负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "心海治疗"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "丝柯克冰水战舰": {
    "name": "丝柯克冰水战舰",
    "core": "冰水协同 · 断流爆发",
    "tip": "爱可菲减抗增伤 → 芙宁娜增伤挂水 → 申鹤增冰伤 → 丝柯克断流引爆，至冬冰C天花板。",
    "reaction": "爆发",
    "resonance": "双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤",
    "themeColor": "#ff7a59",
    "rotation": [
      {
        "text": "爱可菲减抗增伤",
        "owners": [
          "爱可菲"
        ]
      },
      {
        "text": "芙宁娜增伤挂水",
        "owners": [
          "芙宁娜"
        ]
      },
      {
        "text": "申鹤增冰伤",
        "owners": [
          "申鹤"
        ]
      },
      {
        "text": "丝柯克断流引爆",
        "owners": [
          "丝柯克"
        ]
      },
      {
        "text": "至冬冰C天花板。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "丝柯克",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 爆发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「冰水协同 · 断流爆发」打满爆发窗口",
        "summary": "冰水队核心主C，配芙宁娜+爱可菲组建丝柯克冰水队，纳塔强力输出。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "镜中月",
          "displayName": "镜中月",
          "rarity": 5,
          "reason": "专武，冰水体系核心",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "丝柯克核心武器，冰水体系输出上限极高。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "黑剑",
            "displayName": "黑剑",
            "rarity": 4,
            "reason": "暴击率副属性",
            "type": "单手剑",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，普攻重击增伤+回血。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击率",
            "subValue": "27.6%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "暴击伤害",
            "value": "160% – 220%",
            "hint": "爆发压单窗口，暴伤收益高"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "丝柯克是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "丝柯克断流引爆"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "爱可菲",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 爆发体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "盘活冰系的水冰减抗辅助，兼具副C输出，丝柯克等冰C核心拐。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "终末嗟叹之诗",
          "displayName": "终末嗟叹之诗",
          "rarity": 5,
          "reason": "精通+全队增益",
          "type": "弓",
          "stat": "副属性：元素充能效率",
          "desc": "精通+充能+全队精通增益，辅助最优。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风弓",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "苍金之翼 4件套",
          "name": "苍金之翼",
          "twoPiece": "攻击力+18%",
          "fourPiece": "队伍中角色触发夜魂相关效果时，装备者获得攻击力与伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/cangjin-zhiyi.png",
          "themeColor": "#d8b06a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通 / 攻击力",
            "value": "精通 800+ 或 攻击 2,000+",
            "hint": "按增伤方式二选一"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 210%",
            "hint": "保证 Q 增伤覆盖"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "辅助位非刚需"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "爱可菲提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "爱可菲减抗增伤"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          false
        ]
      },
      {
        "name": "芙宁娜",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 爆发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造爆发条件",
        "summary": "水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "静水流涌之辉",
          "displayName": "静水流涌之辉",
          "rarity": 5,
          "reason": "专武，生命+增伤",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "基于生命上限提升元素战技伤害，契合水神芙宁娜。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000+",
            "hint": "增伤幅度与生命挂钩"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队需堆充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": "副C伤害补充"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "芙宁娜以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "芙宁娜增伤挂水"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "申鹤",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 爆发体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 冰翎增冰伤，冰系专拐，永冻/纯冰队核心。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：攻击% / 理之冠：攻击%",
        "weapon": {
          "name": "息灾",
          "displayName": "息灾",
          "rarity": 5,
          "reason": "专武，攻击力提升",
          "type": "长柄武器",
          "stat": "副属性：攻击力",
          "desc": "申鹤专武，攻击力提升，冰系辅助。",
          "atk1": 49,
          "atk90": 741,
          "subStat": "攻击力",
          "subValue": "16.5%"
        },
        "altWeapons": [
          {
            "name": "西风长枪",
            "displayName": "西风长枪",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "昔日宗室之仪 4件套",
          "name": "昔日宗室之仪",
          "twoPiece": "元素爆发造成的伤害+20%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒，该效果不可叠加",
          "flavor": "全队增伤辅助",
          "image": "/artifacts/xiri-zongshi-zhiyi.png",
          "themeColor": "#6f8fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "3,000 – 3,800",
            "hint": "冰翎加成按攻击结算"
          },
          {
            "label": "元素充能效率",
            "value": "150% – 180%",
            "hint": "Q 循环"
          },
          {
            "label": "暴击率",
            "value": "可选",
            "hint": "非刚需"
          }
        ],
        "notes": [
          "把增伤与减抗技能压缩进主C爆发窗口",
          "爆发队对轴，充能按最短技能 CD 配平",
          "爆发外时间以挂元素和产球为主",
          "申鹤提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "申鹤增冰伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "洛恩站场队": {
    "name": "洛恩站场队",
    "core": "站场冰伤 · 至冬输出",
    "tip": "爱可菲减抗 → 芙宁娜增伤 → 奥黛塔挂冰 → 洛恩站场冰伤输出。",
    "reaction": "直伤",
    "resonance": "双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤",
    "themeColor": "#7fb2e8",
    "rotation": [
      {
        "text": "爱可菲减抗",
        "owners": [
          "爱可菲"
        ]
      },
      {
        "text": "芙宁娜增伤",
        "owners": [
          "芙宁娜"
        ]
      },
      {
        "text": "奥黛塔挂冰",
        "owners": [
          "奥黛塔"
        ]
      },
      {
        "text": "洛恩站场冰伤输出。",
        "owners": [
          "洛恩"
        ]
      }
    ],
    "members": [
      {
        "name": "洛恩",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 直伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「站场冰伤 · 至冬输出」打满爆发窗口",
        "summary": "西风骑士团远程小队副队长，管理「欢悦/争胜」双资源，遇强则强的冰C。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "灾悔",
          "displayName": "灾悔",
          "rarity": 5,
          "reason": "专武，战技后普攻重击增伤",
          "type": "长柄武器",
          "stat": "副属性：暴击率",
          "desc": "洛恩专武，战技后普攻重击与战技爆发增伤。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "决斗之枪",
            "displayName": "决斗之枪",
            "rarity": 4,
            "reason": "暴击率副属性",
            "type": "长柄武器",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，暴击副属性缓解双暴压力。",
            "atk1": 41,
            "atk90": 454,
            "subStat": "暴击率",
            "subValue": "36.8%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素伤害加成",
            "value": "对应元素伤杯子",
            "hint": "直伤队杯子收益最高"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "洛恩是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "洛恩站场冰伤输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "爱可菲",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 直伤体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "盘活冰系的水冰减抗辅助，兼具副C输出，丝柯克等冰C核心拐。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "终末嗟叹之诗",
          "displayName": "终末嗟叹之诗",
          "rarity": 5,
          "reason": "精通+全队增益",
          "type": "弓",
          "stat": "副属性：元素充能效率",
          "desc": "精通+充能+全队精通增益，辅助最优。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风弓",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "苍金之翼 4件套",
          "name": "苍金之翼",
          "twoPiece": "攻击力+18%",
          "fourPiece": "队伍中角色触发夜魂相关效果时，装备者获得攻击力与伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/cangjin-zhiyi.png",
          "themeColor": "#d8b06a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通 / 攻击力",
            "value": "精通 800+ 或 攻击 2,000+",
            "hint": "按增伤方式二选一"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 210%",
            "hint": "保证 Q 增伤覆盖"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "辅助位非刚需"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "爱可菲提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "爱可菲减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "芙宁娜",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 直伤体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造直伤条件",
        "summary": "水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "静水流涌之辉",
          "displayName": "静水流涌之辉",
          "rarity": 5,
          "reason": "专武，生命+增伤",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "基于生命上限提升元素战技伤害，契合水神芙宁娜。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000+",
            "hint": "增伤幅度与生命挂钩"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队需堆充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": "副C伤害补充"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "芙宁娜以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "芙宁娜增伤"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "奥黛塔",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "后台副C · 直伤体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造直伤条件",
        "summary": "至冬首席芭蕾舞者，星之楔冰，后台触发星超导/星扩散，持续挂冰+星烁增伤。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "白湖冬羽",
          "displayName": "白湖冬羽",
          "rarity": 5,
          "reason": "专武，星烁反应增伤+回能",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "7.0 奥黛塔专武，提升冰伤与星烁反应伤害，后台挂冰时依然生效。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "雾切之回光",
            "displayName": "雾切之回光",
            "rarity": 5,
            "reason": "元素伤加成替代",
            "type": "单手剑",
            "stat": "副属性：暴击伤害",
            "desc": "获得元素伤害加成，普攻命中叠层进一步提高元素伤害。",
            "atk1": 48,
            "atk90": 674,
            "subStat": "暴击伤害",
            "subValue": "44.1%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素伤害加成",
            "value": "对应元素伤杯子",
            "hint": "直伤队杯子收益最高"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "奥黛塔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "奥黛塔挂冰"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "魈下落队": {
    "name": "魈下落队",
    "core": "下落攻击 · 风伤爆发",
    "tip": "珐露珊风伤减抗 → 班尼特加攻 → 钟离开盾 → 魈 Q 后连续下落攻击爆发。",
    "reaction": "下落",
    "resonance": "双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺",
    "themeColor": "#9ec5f0",
    "rotation": [
      {
        "text": "珐露珊风伤减抗",
        "owners": [
          "珐露珊"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "钟离开盾",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "魈 Q 后连续下落攻击爆发。",
        "owners": [
          "魈"
        ]
      }
    ],
    "members": [
      {
        "name": "魈",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "站场主C · 下落体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「下落攻击 · 风伤爆发」打满爆发窗口",
        "summary": "Q 风轮两立下落攻击，持续耗血换高额风伤，配盾辅保命。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "和璞鸢",
          "displayName": "和璞鸢",
          "rarity": 5,
          "reason": "专武，叠层增攻",
          "type": "长柄武器",
          "stat": "副属性：暴击率",
          "desc": "命中叠层提高攻击力，满层额外增伤。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "决斗之枪",
            "displayName": "决斗之枪",
            "rarity": 4,
            "reason": "暴击率副属性",
            "type": "长柄武器",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，暴击副属性缓解双暴压力。",
            "atk1": 41,
            "atk90": 454,
            "subStat": "暴击率",
            "subValue": "36.8%"
          }
        ],
        "artifact": {
          "raw": "辰砂往生录 4件套",
          "name": "辰砂往生录",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后产生持续16秒的「潜光」效果：攻击力+8%；角色生命值降低时攻击力进一步提升10%，至多4次",
          "flavor": "生命波动主C",
          "image": "/artifacts/chensha-wangshenglu.png",
          "themeColor": "#e08a6a",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "下落攻击伤害加成",
            "value": "按套装/武器",
            "hint": "下落流吃专属增伤区"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "下落攻击吃专属增伤，注意高度与落地判定",
          "护盾/抗打断位保证下落不被打断",
          "充能需覆盖主C的站场轴",
          "魈是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "魈 Q 后连续下落攻击爆发。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "珐露珊",
        "element": "风",
        "rarity": 4,
        "roleInTeam": "增伤辅助 · 下落体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "风系专拐，大幅提升风C伤害，风队核心四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "终末嗟叹之诗",
          "displayName": "终末嗟叹之诗",
          "rarity": 5,
          "reason": "全队增攻+充能，风拐最优",
          "type": "弓",
          "stat": "副属性：元素充能效率",
          "desc": "精通+充能+全队精通增益，辅助最优。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风猎弓",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "210% – 250%",
            "hint": "Q 覆盖是风队核心"
          },
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补"
          }
        ],
        "notes": [
          "下落攻击吃专属增伤，注意高度与落地判定",
          "护盾/抗打断位保证下落不被打断",
          "充能需覆盖主C的站场轴",
          "珐露珊提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "珐露珊风伤减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 下落体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "下落攻击吃专属增伤，注意高度与落地判定",
          "护盾/抗打断位保证下落不被打断",
          "充能需覆盖主C的站场轴",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 下落体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "下落攻击吃专属增伤，注意高度与落地判定",
          "护盾/抗打断位保证下落不被打断",
          "充能需覆盖主C的站场轴",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "钟离开盾"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "流浪者风队": {
    "name": "流浪者风队",
    "core": "站场风伤 · 高机动",
    "tip": "珐露珊风伤减抗 → 班尼特加攻 → 钟离开盾 → 流浪者 E 站场风伤高机动输出。",
    "reaction": "直伤",
    "resonance": "双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺",
    "themeColor": "#7fb2e8",
    "rotation": [
      {
        "text": "珐露珊风伤减抗",
        "owners": [
          "珐露珊"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "钟离开盾",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "流浪者 E 站场风伤高机动输出。",
        "owners": [
          "流浪者"
        ]
      }
    ],
    "members": [
      {
        "name": "流浪者",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "站场主C · 直伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「站场风伤 · 高机动」打满爆发窗口",
        "summary": "E 悬浮普攻输出，配云堇/夜兰增伤，灵活风C。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "四风原典",
          "displayName": "四风原典",
          "rarity": 5,
          "reason": "站场叠层增伤",
          "type": "法器",
          "stat": "副属性：暴击率",
          "desc": "移动速度提升，站场叠层增元素伤。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "爆发增伤",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "沙上楼阁史话 4件套",
          "name": "沙上楼阁史话",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "重击命中敌人后，该角色的普通攻击速度+10%，普通攻击、重击与下落攻击造成的伤害+40%，持续15秒",
          "flavor": "风系重击C",
          "image": "/artifacts/shashang-louge-shihua.png",
          "themeColor": "#6fc7b0",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素伤害加成",
            "value": "对应元素伤杯子",
            "hint": "直伤队杯子收益最高"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "流浪者是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "流浪者 E 站场风伤高机动输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "珐露珊",
        "element": "风",
        "rarity": 4,
        "roleInTeam": "增伤辅助 · 直伤体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "风系专拐，大幅提升风C伤害，风队核心四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "终末嗟叹之诗",
          "displayName": "终末嗟叹之诗",
          "rarity": 5,
          "reason": "全队增攻+充能，风拐最优",
          "type": "弓",
          "stat": "副属性：元素充能效率",
          "desc": "精通+充能+全队精通增益，辅助最优。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风猎弓",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "210% – 250%",
            "hint": "Q 覆盖是风队核心"
          },
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "珐露珊提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "珐露珊风伤减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 直伤体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 直伤体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "钟离开盾"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "恰斯卡多元素队": {
    "name": "恰斯卡多元素队",
    "core": "多元素 · 龙息输出",
    "tip": "芙宁娜增伤 → 班尼特加攻 → 欧洛伦后台雷 → 恰斯卡多元素龙息输出。",
    "reaction": "多元素",
    "resonance": "四元素混编 · 无元素共鸣，充能与附着顺序需自行规划",
    "themeColor": "#c9a7f5",
    "rotation": [
      {
        "text": "芙宁娜增伤",
        "owners": [
          "芙宁娜"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "欧洛伦后台雷",
        "owners": [
          "欧洛伦"
        ]
      },
      {
        "text": "恰斯卡多元素龙息输出。",
        "owners": [
          "恰斯卡"
        ]
      }
    ],
    "members": [
      {
        "name": "恰斯卡",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "站场主C · 多元素体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「多元素 · 龙息输出」打满爆发窗口",
        "summary": "夜魂体系风C，E 随队染色打多元素伤害，纳塔热门主C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "攻击+风伤",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "150 – 250",
            "hint": "多元素反应队精通有收益"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "多元素队按可转化元素决定扩散/反应收益",
          "注意附着顺序，避免元素互相吞掉",
          "循环轴较长，充能需按最慢角色配置",
          "恰斯卡是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：四元素混编 · 无元素共鸣，充能与附着顺序需自行规划"
        ],
        "mySteps": [
          "恰斯卡多元素龙息输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "芙宁娜",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 多元素体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造多元素条件",
        "summary": "水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "静水流涌之辉",
          "displayName": "静水流涌之辉",
          "rarity": 5,
          "reason": "专武，生命+增伤",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "基于生命上限提升元素战技伤害，契合水神芙宁娜。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000+",
            "hint": "增伤幅度与生命挂钩"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队需堆充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": "副C伤害补充"
          }
        ],
        "notes": [
          "多元素队按可转化元素决定扩散/反应收益",
          "注意附着顺序，避免元素互相吞掉",
          "循环轴较长，充能需按最慢角色配置",
          "芙宁娜以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：四元素混编 · 无元素共鸣，充能与附着顺序需自行规划"
        ],
        "mySteps": [
          "芙宁娜增伤"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 多元素体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "多元素队按可转化元素决定扩散/反应收益",
          "注意附着顺序，避免元素互相吞掉",
          "循环轴较长，充能需按最慢角色配置",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：四元素混编 · 无元素共鸣，充能与附着顺序需自行规划"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "欧洛伦",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 多元素体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造多元素条件",
        "summary": "纳塔雷副C，夜魂体系后台雷，配恰斯卡等主C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "若水",
          "displayName": "若水",
          "rarity": 5,
          "reason": "后台夜魂输出，暴伤+生命",
          "type": "弓",
          "stat": "副属性：暴击伤害",
          "desc": "生命提升，夜兰专武，泛用输出弓。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击伤害",
          "subValue": "88.2%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "元素战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 250",
            "hint": "多元素反应队精通有收益"
          }
        ],
        "notes": [
          "多元素队按可转化元素决定扩散/反应收益",
          "注意附着顺序，避免元素互相吞掉",
          "循环轴较长，充能需按最慢角色配置",
          "欧洛伦以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：四元素混编 · 无元素共鸣，充能与附着顺序需自行规划"
        ],
        "mySteps": [
          "欧洛伦后台雷"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "法尔伽双魔导队": {
    "name": "法尔伽双魔导队",
    "core": "风火混伤 · 双持输出",
    "tip": "6.6 魔导套质变，法尔伽+杜林双核风火混伤，布伦妮增风伤、尼可增火伤，破盾优势大。",
    "reaction": "混伤",
    "resonance": "双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#f3a06a",
    "rotation": [
      {
        "text": "6.6 魔导套质变",
        "owners": []
      },
      {
        "text": "法尔伽+杜林双核风火混伤",
        "owners": [
          "法尔伽",
          "杜林"
        ]
      },
      {
        "text": "布伦妮增风伤、尼可增火伤",
        "owners": [
          "布伦妮",
          "尼可"
        ]
      },
      {
        "text": "破盾优势大。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "法尔伽",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "站场主C · 混伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「风火混伤 · 双持输出」打满爆发窗口",
        "summary": "西风骑士团大团长·北风骑士，双持双手剑同时打出风元素与队友对应元素伤害，魔导角色。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "狼的武功歌",
          "displayName": "狼的武功歌",
          "rarity": 5,
          "reason": "专武，攻速+四风诗系增伤",
          "type": "双手剑",
          "stat": "副属性：攻击力",
          "desc": "法尔伽专武，攻速提升，普攻/战技/重击叠「四风诗系」增伤，魔导体系叠暴伤。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "天空之傲",
            "displayName": "天空之傲",
            "rarity": 5,
            "reason": "充能+范围风伤替代",
            "type": "双手剑",
            "stat": "副属性：元素充能效率",
            "desc": "Q 后真空刃，普攻重击范围风伤。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "元素充能效率",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "混编队兼顾直伤与反应"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "混编队兼顾直伤与反应，词条不要极端化",
          "注意附着顺序与反应归属",
          "按主C爆发窗口安排增伤技能",
          "法尔伽是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "法尔伽+杜林双核风火混伤"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "杜林",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 混伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「风火混伤 · 双持输出」打满爆发窗口",
        "summary": "「不熄灭的火」，燃烧反应火C，挪德卡莱火系输出，配草系挂草出伤。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "黑蚀",
          "displayName": "黑蚀",
          "rarity": 5,
          "reason": "魔导体系输出法器",
          "type": "法器",
          "stat": "副属性：暴击伤害",
          "desc": "杜林相关法器，魔导体系输出武器。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "爆发增伤",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "混编队兼顾直伤与反应"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "混编队兼顾直伤与反应，词条不要极端化",
          "注意附着顺序与反应归属",
          "按主C爆发窗口安排增伤技能",
          "杜林是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "法尔伽+杜林双核风火混伤"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "布伦妮",
        "element": "风",
        "rarity": 4,
        "roleInTeam": "后台副C · 混伤体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造混伤条件",
        "summary": "「魔女猎人」，Q 召唤魅巫之铃后台风伤，触发扩散额外增伤。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之卷",
          "displayName": "天空之卷",
          "rarity": 5,
          "reason": "攻击+扩散输出",
          "type": "法器",
          "stat": "副属性：攻击力",
          "desc": "普攻命中额外伤害，触发风伤效果。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "攻击力",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "爆发增伤",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "混编队兼顾直伤与反应"
          }
        ],
        "notes": [
          "混编队兼顾直伤与反应，词条不要极端化",
          "注意附着顺序与反应归属",
          "按主C爆发窗口安排增伤技能",
          "布伦妮以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "布伦妮增风伤、尼可增火伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "尼可",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 混伤体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "魔女会「魔女」，E 全队加攻+炽光护盾，Q 召唤奥迹造影协同攻击，魔导体系核心辅助。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "尘光七谕",
          "displayName": "尘光七谕",
          "rarity": 5,
          "reason": "专武，护盾后按攻加伤+回能",
          "type": "法器",
          "stat": "副属性：攻击力",
          "desc": "尼可专武，护盾后按攻击力提升场上角色伤害，护盾时回能。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值 / 防御力",
            "value": "生命 35,000+ / 防御 2,000+",
            "hint": "护盾厚度来源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "走副C流时再堆"
          }
        ],
        "notes": [
          "混编队兼顾直伤与反应，词条不要极端化",
          "注意附着顺序与反应归属",
          "按主C爆发窗口安排增伤技能",
          "尼可负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "布伦妮增风伤、尼可增火伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "薇斯纳星扩散队": {
    "name": "薇斯纳星扩散队",
    "core": "星扩散 · 浮空输出",
    "tip": "奥黛塔挂冰触发星扩散 → 沃雅妮莎减抗治疗 → 珐露珊风伤拐 → 薇斯纳浮空星扩散输出。",
    "reaction": "星扩散",
    "resonance": "双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺",
    "themeColor": "#8fe0d8",
    "rotation": [
      {
        "text": "奥黛塔挂冰触发星扩散",
        "owners": [
          "奥黛塔"
        ]
      },
      {
        "text": "沃雅妮莎减抗治疗",
        "owners": [
          "沃雅妮莎"
        ]
      },
      {
        "text": "珐露珊风伤拐",
        "owners": [
          "珐露珊"
        ]
      },
      {
        "text": "薇斯纳浮空星扩散输出。",
        "owners": [
          "薇斯纳"
        ]
      }
    ],
    "members": [
      {
        "name": "薇斯纳",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "站场主C · 星扩散体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「星扩散 · 浮空输出」打满爆发窗口",
        "summary": "冬契军司令官，星之楔风，召唤灵剑触发星扩散，可飞行探索。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "蝶变",
          "displayName": "蝶变",
          "rarity": 5,
          "reason": "专武，战技爆发依次增伤",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "7.1 薇斯纳专武，触发星扩散后提升全队风伤与扩散伤害。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "雾切之回光",
            "displayName": "雾切之回光",
            "rarity": 5,
            "reason": "元素伤加成替代",
            "type": "单手剑",
            "stat": "副属性：暴击伤害",
            "desc": "获得元素伤害加成，普攻命中叠层进一步提高元素伤害。",
            "atk1": 48,
            "atk90": 674,
            "subStat": "暴击伤害",
            "subValue": "44.1%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "扩散链按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "星扩散依托浮空/扩散触发",
          "精通与风伤收益按队伍配置取舍",
          "保持聚怪与扩散链条",
          "薇斯纳是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "薇斯纳浮空星扩散输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "奥黛塔",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "后台副C · 星扩散体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造星扩散条件",
        "summary": "至冬首席芭蕾舞者，星之楔冰，后台触发星超导/星扩散，持续挂冰+星烁增伤。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "白湖冬羽",
          "displayName": "白湖冬羽",
          "rarity": 5,
          "reason": "专武，星烁反应增伤+回能",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "7.0 奥黛塔专武，提升冰伤与星烁反应伤害，后台挂冰时依然生效。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "雾切之回光",
            "displayName": "雾切之回光",
            "rarity": 5,
            "reason": "元素伤加成替代",
            "type": "单手剑",
            "stat": "副属性：暴击伤害",
            "desc": "获得元素伤害加成，普攻命中叠层进一步提高元素伤害。",
            "atk1": 48,
            "atk90": 674,
            "subStat": "暴击伤害",
            "subValue": "44.1%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "扩散链按精通结算"
          }
        ],
        "notes": [
          "星扩散依托浮空/扩散触发",
          "精通与风伤收益按队伍配置取舍",
          "保持聚怪与扩散链条",
          "奥黛塔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "奥黛塔挂冰触发星扩散"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "沃雅妮莎",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "治疗 / 续航位 · 星扩散体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "皇家剧团首席女高音，水妖形态演唱治疗，加攻+减抗，冻结/星扩散队辅助。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：治疗%",
        "weapon": {
          "name": "漩流颂歌",
          "displayName": "漩流颂歌",
          "rarity": 5,
          "reason": "专武，治疗+生命+加攻",
          "type": "法器",
          "stat": "副属性：生命值",
          "desc": "沃雅妮莎专武，治疗+生命上限提升+加攻，冻结/星扩散增益。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "不灭月华",
            "displayName": "不灭月华",
            "rarity": 5,
            "reason": "治疗+生命替代",
            "type": "法器",
            "stat": "副属性：生命值",
            "desc": "治疗+生命加成，珊瑚宫心海专武。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "生命值",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "30,000 – 40,000",
            "hint": "治疗量与部分伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "保证 E/Q 覆盖"
          },
          {
            "label": "治疗加成",
            "value": "按套装",
            "hint": "海染 / 少女等"
          }
        ],
        "notes": [
          "星扩散依托浮空/扩散触发",
          "精通与风伤收益按队伍配置取舍",
          "保持聚怪与扩散链条",
          "沃雅妮莎负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "沃雅妮莎减抗治疗"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "珐露珊",
        "element": "风",
        "rarity": 4,
        "roleInTeam": "增伤辅助 · 星扩散体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "风系专拐，大幅提升风C伤害，风队核心四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "终末嗟叹之诗",
          "displayName": "终末嗟叹之诗",
          "rarity": 5,
          "reason": "全队增攻+充能，风拐最优",
          "type": "弓",
          "stat": "副属性：元素充能效率",
          "desc": "精通+充能+全队精通增益，辅助最优。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风猎弓",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "210% – 250%",
            "hint": "Q 覆盖是风队核心"
          },
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补"
          }
        ],
        "notes": [
          "星扩散依托浮空/扩散触发",
          "精通与风伤收益按队伍配置取舍",
          "保持聚怪与扩散链条",
          "珐露珊提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺"
        ],
        "mySteps": [
          "珐露珊风伤拐"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "荒泷一斗岩队": {
    "name": "荒泷一斗岩队",
    "core": "站场岩伤 · 重击输出",
    "tip": "纯岩队：五郎增岩伤 → 阿贝多后台 → 钟离开盾 → 一斗 Q 后重击爆发，三岩共鸣。",
    "reaction": "直伤",
    "resonance": "双岩共鸣 · 护盾强效与岩伤提升，站场更稳",
    "themeColor": "#7fb2e8",
    "rotation": [
      {
        "text": "纯岩队：五郎增岩伤",
        "owners": [
          "五郎"
        ]
      },
      {
        "text": "阿贝多后台",
        "owners": [
          "阿贝多"
        ]
      },
      {
        "text": "钟离开盾",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "一斗 Q 后重击爆发",
        "owners": [
          "荒泷一斗"
        ]
      },
      {
        "text": "三岩共鸣。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "荒泷一斗",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "站场主C · 直伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「站场岩伤 · 重击输出」打满爆发窗口",
        "summary": "Q 变身鬼王重击输出，防御转攻，配五郎纯岩队。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "赤角石溃杵",
          "displayName": "赤角石溃杵",
          "rarity": 5,
          "reason": "专武，防御转攻",
          "type": "双手剑",
          "stat": "副属性：暴击伤害",
          "desc": "防御转攻击，重击增伤，一斗专武。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击伤害",
          "subValue": "88.2%"
        },
        "altWeapons": [
          {
            "name": "螭骨剑",
            "displayName": "螭骨剑",
            "rarity": 4,
            "reason": "暴击率副属性",
            "type": "双手剑",
            "stat": "副属性：暴击率",
            "desc": "叠层增伤，纪行高性价比双手剑。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击率",
            "subValue": "27.6%"
          }
        ],
        "artifact": {
          "raw": "华馆梦醒形骸记 4件套",
          "name": "华馆梦醒形骸记",
          "twoPiece": "防御力+30%",
          "fourPiece": "场上角色以岩元素攻击命中敌人后获得「问答」：防御力+6%、岩元素伤害加成+6%，持续15秒，最多4层；装备者处于后台时每3秒获得1层；满4层时该效果提升100%",
          "flavor": "防御型岩C",
          "image": "/artifacts/huaguan-mengxing.png",
          "themeColor": "#b9a3d8",
          "matched": true
        },
        "panel": [
          {
            "label": "防御力",
            "value": "2,300 – 2,800",
            "hint": "输出按防御结算"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 160%",
            "hint": ""
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "荒泷一斗是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "一斗 Q 后重击爆发"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "五郎",
        "element": "岩",
        "rarity": 4,
        "roleInTeam": "增伤辅助 · 直伤体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "岩系专拐，纯岩队增伤核心，配一斗/诺艾尔。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "终末嗟叹之诗",
          "displayName": "终末嗟叹之诗",
          "rarity": 5,
          "reason": "全队增攻+充能，岩拐最优",
          "type": "弓",
          "stat": "副属性：元素充能效率",
          "desc": "精通+充能+全队精通增益，辅助最优。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风猎弓",
            "displayName": "西风猎弓",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "弓",
            "stat": "副属性：元素充能效率",
            "desc": "充能副属性，帮助全队回能。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "华馆梦醒形骸记 4件套",
          "name": "华馆梦醒形骸记",
          "twoPiece": "防御力+30%",
          "fourPiece": "场上角色以岩元素攻击命中敌人后获得「问答」：防御力+6%、岩元素伤害加成+6%，持续15秒，最多4层；装备者处于后台时每3秒获得1层；满4层时该效果提升100%",
          "flavor": "防御型岩C",
          "image": "/artifacts/huaguan-mengxing.png",
          "themeColor": "#b9a3d8",
          "matched": true
        },
        "panel": [
          {
            "label": "防御力",
            "value": "2,000 – 2,600",
            "hint": "岩队加成按防御结算"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "Q 循环"
          },
          {
            "label": "暴击率",
            "value": "可选",
            "hint": "非刚需"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "五郎提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "纯岩队：五郎增岩伤"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          false
        ]
      },
      {
        "name": "阿贝多",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "后台副C · 直伤体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造直伤条件",
        "summary": "E 阳华后台岩伤，防转攻，配钟离双岩共鸣。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "磐岩结绿",
          "displayName": "磐岩结绿",
          "rarity": 5,
          "reason": "防御转攻，暴击率",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击率",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "华馆梦醒形骸记 4件套",
          "name": "华馆梦醒形骸记",
          "twoPiece": "防御力+30%",
          "fourPiece": "场上角色以岩元素攻击命中敌人后获得「问答」：防御力+6%、岩元素伤害加成+6%，持续15秒，最多4层；装备者处于后台时每3秒获得1层；满4层时该效果提升100%",
          "flavor": "防御型岩C",
          "image": "/artifacts/huaguan-mengxing.png",
          "themeColor": "#b9a3d8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素伤害加成",
            "value": "对应元素伤杯子",
            "hint": "直伤队杯子收益最高"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "阿贝多以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "阿贝多后台"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 直伤体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "钟离开盾"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "娜维娅结晶队": {
    "name": "娜维娅结晶队",
    "core": "结晶弹片 · 爆发输出",
    "tip": "双岩共鸣 → 班尼特加攻 → 香菱挂火产结晶 → 娜维娅收集弹片 E 炮击。",
    "reaction": "结晶",
    "resonance": "双岩共鸣 · 护盾强效与岩伤提升，站场更稳；双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#e0c078",
    "rotation": [
      {
        "text": "双岩共鸣",
        "owners": [
          "娜维娅",
          "钟离"
        ]
      },
      {
        "text": "班尼特加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "香菱挂火产结晶",
        "owners": [
          "香菱"
        ]
      },
      {
        "text": "娜维娅收集弹片 E 炮击。",
        "owners": [
          "娜维娅"
        ]
      }
    ],
    "members": [
      {
        "name": "娜维娅",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "站场主C · 结晶体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「结晶弹片 · 爆发输出」打满爆发窗口",
        "summary": "收集结晶弹片强化 E 炮击，对单极强，配钟离/班尼特出伤稳定。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "裁叶萃光",
          "displayName": "裁叶萃光",
          "rarity": 5,
          "reason": "专武，结晶弹片增伤",
          "type": "单手剑",
          "stat": "副属性：攻击力",
          "desc": "强化结晶弹片伤害，娜维娅核心武器。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "千岩长枪",
            "displayName": "千岩长枪",
            "rarity": 4,
            "reason": "攻击+岩伤",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "璃月限定，队伍中璃月角色越多增伤越高。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "回响之林 4件套",
          "name": "回响之林",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素战技后的20秒内，岩元素伤害加成+20%；处于结晶反应产生的护盾庇护下时，该效果提升150%",
          "flavor": "岩系爆发 · 娜维娅",
          "image": "",
          "themeColor": "#d6b070",
          "matched": false
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 140%",
            "hint": "结晶队以直伤为主"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "结晶反应产盾，注意及时拾取晶片",
          "岩队吃防御/岩伤，减抗位收益高",
          "护盾覆盖是站场输出的前提",
          "娜维娅是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "双岩共鸣",
          "娜维娅收集弹片 E 炮击。"
        ],
        "stepMine": [
          true,
          false,
          false,
          true
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 结晶体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "结晶反应产盾，注意及时拾取晶片",
          "岩队吃防御/岩伤，减抗位收益高",
          "护盾覆盖是站场输出的前提",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "双岩共鸣"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 结晶体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "结晶反应产盾，注意及时拾取晶片",
          "岩队吃防御/岩伤，减抗位收益高",
          "护盾覆盖是站场输出的前提",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特加攻"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "香菱",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "后台副C · 结晶体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造结晶条件",
        "summary": "旋火轮后台挂火+高蒸发，国家队核心，四星顶配副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "护摩之杖",
          "displayName": "护摩之杖",
          "rarity": 5,
          "reason": "暴伤副属性，爆发高",
          "type": "长柄武器",
          "stat": "副属性：暴击伤害",
          "desc": "生命值提升 20%，基于生命上限的 0.8% 获得攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "渔获",
            "displayName": "渔获",
            "rarity": 4,
            "reason": "充能+Q 增伤，平民神器",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "钓鱼兑换，充能+Q 增伤，平民神器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素充能效率",
            "subValue": "45.9%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 锁面板，循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 250",
            "hint": "蒸发/融化收益"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "结晶反应产盾，注意及时拾取晶片",
          "岩队吃防御/岩伤，减抗位收益高",
          "护盾覆盖是站场输出的前提",
          "香菱以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "香菱挂火产结晶"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "兹白月结晶队": {
    "name": "兹白月结晶队",
    "core": "月结晶 · 岩系完全体",
    "tip": "叶洛亚+希诺宁增岩减抗 → 钟离开盾 → 兹白月结晶爆发，岩系数值怪跨环境执法。",
    "reaction": "月结晶",
    "resonance": "双岩共鸣 · 护盾强效与岩伤提升，站场更稳",
    "themeColor": "#e3b873",
    "rotation": [
      {
        "text": "叶洛亚+希诺宁增岩减抗",
        "owners": [
          "叶洛亚",
          "希诺宁"
        ]
      },
      {
        "text": "钟离开盾",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "兹白月结晶爆发",
        "owners": [
          "兹白"
        ]
      },
      {
        "text": "岩系数值怪跨环境执法。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "兹白",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "站场主C · 月结晶体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月结晶 · 岩系完全体」打满爆发窗口",
        "summary": "月结晶反应输出，防御转攻，低配即可成型，配钟离或叶洛亚组建月结晶队。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "朏魄含光",
          "displayName": "朏魄含光",
          "rarity": 5,
          "reason": "专武，数值暴力大幅提升输出",
          "type": "单手剑",
          "stat": "副属性：防御力",
          "desc": "兹白专武，数值暴力，大幅提升月结晶输出。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "防御力",
          "subValue": "62.0%"
        },
        "altWeapons": [
          {
            "name": "磐岩结绿",
            "displayName": "磐岩结绿",
            "rarity": 5,
            "reason": "高双暴词条替代",
            "type": "单手剑",
            "stat": "副属性：暴击率",
            "desc": "生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。",
            "atk1": 44,
            "atk90": 542,
            "subStat": "暴击率",
            "subValue": "44.1%"
          }
        ],
        "artifact": {
          "raw": "穹境示现之夜 4件套",
          "name": "穹境示现之夜",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后获得持续12秒的增伤与暴击率加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qiongjing-shixian-zhiye.png",
          "themeColor": "#8f9fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 140%",
            "hint": "双暴是最稳的通用收益"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月结晶按岩系体系结算，注意新机制触发条件",
          "结晶护盾维持站场",
          "减抗与增伤按岩队配置",
          "兹白是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "兹白月结晶爆发"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "叶洛亚",
        "element": "岩",
        "rarity": 4,
        "roleInTeam": "增伤辅助 · 月结晶体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "岩系辅助，护盾+岩队增益。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：生命%",
        "weapon": {
          "name": "尘世之锁",
          "displayName": "尘世之锁",
          "rarity": 5,
          "reason": "护盾增攻，岩拐辅助",
          "type": "法器",
          "stat": "副属性：攻击力",
          "desc": "护盾下攻击力提升，效果翻倍。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通 / 攻击力",
            "value": "精通 800+ 或 攻击 2,000+",
            "hint": "按增伤方式二选一"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 210%",
            "hint": "保证 Q 增伤覆盖"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "辅助位非刚需"
          }
        ],
        "notes": [
          "月结晶按岩系体系结算，注意新机制触发条件",
          "结晶护盾维持站场",
          "减抗与增伤按岩队配置",
          "叶洛亚提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "叶洛亚+希诺宁增岩减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "希诺宁",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 月结晶体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "夜魂体系岩辅，减抗+增伤，玛薇卡战舰关键辅助。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "磐岩结绿",
          "displayName": "磐岩结绿",
          "rarity": 5,
          "reason": "暴击率，辅助",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击率",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通 / 攻击力",
            "value": "精通 800+ 或 攻击 2,000+",
            "hint": "按增伤方式二选一"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 210%",
            "hint": "保证 Q 增伤覆盖"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "辅助位非刚需"
          }
        ],
        "notes": [
          "月结晶按岩系体系结算，注意新机制触发条件",
          "结晶护盾维持站场",
          "减抗与增伤按岩队配置",
          "希诺宁提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "叶洛亚+希诺宁增岩减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 月结晶体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "月结晶按岩系体系结算，注意新机制触发条件",
          "结晶护盾维持站场",
          "减抗与增伤按岩队配置",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "钟离开盾"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "提纳里激化队": {
    "name": "提纳里激化队",
    "core": "激化 · 蓄力箭输出",
    "tip": "纳西妲挂草 → 菲谢尔+八重后台雷 → 提纳里蓄力箭激化输出。",
    "reaction": "激化",
    "resonance": "双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双雷共鸣 · 触发雷系反应额外产球，充能更宽裕",
    "themeColor": "#8fd14f",
    "rotation": [
      {
        "text": "纳西妲挂草",
        "owners": [
          "纳西妲"
        ]
      },
      {
        "text": "菲谢尔+八重后台雷",
        "owners": [
          "菲谢尔"
        ]
      },
      {
        "text": "提纳里蓄力箭激化输出。",
        "owners": [
          "提纳里"
        ]
      }
    ],
    "members": [
      {
        "name": "提纳里",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "站场主C · 激化体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「激化 · 蓄力箭输出」打满爆发窗口",
        "summary": "蓄力箭三段草伤，配雷电/菲谢尔打激化，常驻草C。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "猎人之径",
          "displayName": "猎人之径",
          "rarity": 5,
          "reason": "专武，精通转攻",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "基于精通提升普攻伤害，提纳里专武。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击率",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "激化基础伤害直接吃精通"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "提纳里是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "提纳里蓄力箭激化输出。"
        ],
        "stepMine": [
          false,
          false,
          true
        ]
      },
      {
        "name": "纳西妲",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专武，精通+全队增益",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "800 – 1,000",
            "hint": "激化/绽放核心，且受天赋上限约束"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "精通达标后补双暴"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "纳西妲以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "纳西妲挂草"
        ],
        "stepMine": [
          true,
          false,
          false
        ]
      },
      {
        "name": "菲谢尔",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "奥兹后台持续雷伤，激化/超导队经典副C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之翼",
          "displayName": "天空之翼",
          "rarity": 5,
          "reason": "暴击率，奥兹输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "暴击后范围物伤，攻击力提升。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": ""
          },
          {
            "label": "元素精通",
            "value": "激化队 150 – 250",
            "hint": "激化队精通收益显著"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "菲谢尔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "菲谢尔+八重后台雷"
        ],
        "stepMine": [
          false,
          true,
          false
        ]
      },
      {
        "name": "八重神子",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "E 杀生樱后台雷伤，Q 天狐霆雷爆发，激化队副C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "神乐之真意",
          "displayName": "神乐之真意",
          "rarity": 5,
          "reason": "专武，战技叠层",
          "type": "法器",
          "stat": "副属性：暴击伤害",
          "desc": "施放战技叠层增伤，八重神子专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "爆发增伤",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "激化基础伤害直接吃精通"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "八重神子以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [],
        "stepMine": [
          false,
          false,
          false
        ]
      }
    ]
  },
  "艾尔海森激化队": {
    "name": "艾尔海森激化队",
    "core": "站场激化 · 光幕输出",
    "tip": "纳西妲挂草 → 菲谢尔后台雷 → 白术治疗 → 艾尔海森 E+光幕站场激化。",
    "reaction": "激化",
    "resonance": "双草共鸣 · 元素精通提升，激化/绽放收益进一步放大",
    "themeColor": "#8fd14f",
    "rotation": [
      {
        "text": "纳西妲挂草",
        "owners": [
          "纳西妲"
        ]
      },
      {
        "text": "菲谢尔后台雷",
        "owners": [
          "菲谢尔"
        ]
      },
      {
        "text": "白术治疗",
        "owners": [
          "白术"
        ]
      },
      {
        "text": "艾尔海森 E+光幕站场激化。",
        "owners": [
          "艾尔海森"
        ]
      }
    ],
    "members": [
      {
        "name": "艾尔海森",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "站场主C · 激化体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「站场激化 · 光幕输出」打满爆发窗口",
        "summary": "光镜协同攻击草伤，激化队主C，操作灵活。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "图莱杜拉的回忆",
          "displayName": "图莱杜拉的回忆",
          "rarity": 5,
          "reason": "专武，激化输出",
          "type": "法器",
          "stat": "副属性：暴击伤害",
          "desc": "艾尔海森专武，激化输出。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "饰金之梦 4件套",
          "name": "饰金之梦",
          "twoPiece": "元素精通+80",
          "fourPiece": "触发元素反应后的8秒内，依据队伍中其他角色的元素类型使装备者获得强化：同元素角色使攻击力+14%，不同元素角色使元素精通+50；每类元素至多1层，至多3层",
          "flavor": "反应型主C",
          "image": "/artifacts/shijin-zhimeng.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "200 – 350",
            "hint": "激化基础伤害直接吃精通"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "艾尔海森是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "艾尔海森 E+光幕站场激化。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "纳西妲",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专武，精通+全队增益",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "800 – 1,000",
            "hint": "激化/绽放核心，且受天赋上限约束"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "精通达标后补双暴"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "纳西妲以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "纳西妲挂草"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "菲谢尔",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "奥兹后台持续雷伤，激化/超导队经典副C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之翼",
          "displayName": "天空之翼",
          "rarity": 5,
          "reason": "暴击率，奥兹输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "暴击后范围物伤，攻击力提升。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": ""
          },
          {
            "label": "元素精通",
            "value": "激化队 150 – 250",
            "hint": "激化队精通收益显著"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "菲谢尔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "菲谢尔后台雷"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "白术",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "治疗 / 续航位 · 激化体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "盾+治疗+后台挂草，绽放/激化队优质生存位。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "不灭月华",
          "displayName": "不灭月华",
          "rarity": 5,
          "reason": "治疗+生命",
          "type": "法器",
          "stat": "副属性：生命值",
          "desc": "治疗+生命加成，珊瑚宫心海专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风秘典",
            "displayName": "西风秘典",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "法器",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，辅助法器。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "40,000 – 50,000",
            "hint": "治疗与增伤按生命结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "Q 循环"
          },
          {
            "label": "暴击率",
            "value": "可选",
            "hint": "非刚需"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "白术负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "白术治疗"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "基尼奇燃烧队": {
    "name": "基尼奇燃烧队",
    "core": "燃烧 · 高爆发输出",
    "tip": "纳西妲挂草 → 班尼特+迪希雅触发燃烧 → 基尼奇燃烧高爆发。",
    "reaction": "燃烧",
    "resonance": "双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#ff9a3c",
    "rotation": [
      {
        "text": "纳西妲挂草",
        "owners": [
          "纳西妲"
        ]
      },
      {
        "text": "班尼特+迪希雅触发燃烧",
        "owners": [
          "班尼特",
          "迪希雅"
        ]
      },
      {
        "text": "基尼奇燃烧高爆发。",
        "owners": [
          "基尼奇"
        ]
      }
    ],
    "members": [
      {
        "name": "基尼奇",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "站场主C · 燃烧体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「燃烧 · 高爆发输出」打满爆发窗口",
        "summary": "纳塔草C，燃烧反应输出，配火系挂火。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "纺夜天镜",
          "displayName": "纺夜天镜",
          "rarity": 5,
          "reason": "燃烧输出",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "月绽放体系核心法器，菈乌玛与奈芙尔专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 140%",
            "hint": "双暴是最稳的通用收益"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "需持续草底 + 火触发维持燃烧",
          "燃烧队对精通与持续时间敏感",
          "注意燃烧会伤及自身，护盾/治疗位不可省",
          "基尼奇是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "基尼奇燃烧高爆发。"
        ],
        "stepMine": [
          false,
          false,
          true
        ]
      },
      {
        "name": "纳西妲",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 燃烧体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造燃烧条件",
        "summary": "E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专武，精通+全队增益",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "800 – 1,000",
            "hint": "激化/绽放核心，且受天赋上限约束"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "精通达标后补双暴"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "需持续草底 + 火触发维持燃烧",
          "燃烧队对精通与持续时间敏感",
          "注意燃烧会伤及自身，护盾/治疗位不可省",
          "纳西妲以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "纳西妲挂草"
        ],
        "stepMine": [
          true,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 燃烧体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "需持续草底 + 火触发维持燃烧",
          "燃烧队对精通与持续时间敏感",
          "注意燃烧会伤及自身，护盾/治疗位不可省",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特+迪希雅触发燃烧"
        ],
        "stepMine": [
          false,
          true,
          false
        ]
      },
      {
        "name": "迪希雅",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "后台副C · 燃烧体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造燃烧条件",
        "summary": "领域减伤+抗打断，后台挂火，常驻池火系辅C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "赤沙之王",
          "displayName": "赤沙之王",
          "rarity": 5,
          "reason": "专武，元素战技协同输出增伤",
          "type": "双手剑",
          "stat": "副属性：暴击伤害",
          "desc": "火神玛薇卡专属，Q 爆发与夜魂体系完美契合。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "螭骨剑",
            "displayName": "螭骨剑",
            "rarity": 4,
            "reason": "暴击率副属性，减伤型后台火",
            "type": "双手剑",
            "stat": "副属性：暴击率",
            "desc": "叠层增伤，纪行高性价比双手剑。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击率",
            "subValue": "27.6%"
          }
        ],
        "artifact": {
          "raw": "炽烈的炎之魔女 4件套",
          "name": "炽烈的炎之魔女",
          "twoPiece": "火元素伤害加成+15%",
          "fourPiece": "蒸发、融化反应造成的伤害+15%，超载、燃烧、烈绽放反应伤害+40%；施放元素战技后10秒内，2件套的效果提升50%，最多叠加3层",
          "flavor": "火系主C · 蒸发融化",
          "image": "/artifacts/xilie-yan-zhi-monv.png",
          "themeColor": "#e0604a",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 140%",
            "hint": "双暴是最稳的通用收益"
          }
        ],
        "notes": [
          "需持续草底 + 火触发维持燃烧",
          "燃烧队对精通与持续时间敏感",
          "注意燃烧会伤及自身，护盾/治疗位不可省",
          "迪希雅以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特+迪希雅触发燃烧"
        ],
        "stepMine": [
          false,
          true,
          false
        ]
      }
    ]
  },
  "奈芙尔月绽放队": {
    "name": "奈芙尔月绽放队",
    "core": "月绽放 · 高金数上限",
    "tip": "菈乌玛挂草触发月绽放 → 爱诺水兆 → 芙宁娜增伤 → 奈芙尔站场月绽放输出。",
    "reaction": "月绽放",
    "resonance": "双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双水共鸣 · 提升生命与充能，缓解循环压力",
    "themeColor": "#9be36a",
    "rotation": [
      {
        "text": "菈乌玛挂草触发月绽放",
        "owners": [
          "菈乌玛"
        ]
      },
      {
        "text": "爱诺水兆",
        "owners": [
          "爱诺"
        ]
      },
      {
        "text": "芙宁娜增伤",
        "owners": [
          "芙宁娜"
        ]
      },
      {
        "text": "奈芙尔站场月绽放输出。",
        "owners": [
          "奈芙尔"
        ]
      }
    ],
    "members": [
      {
        "name": "奈芙尔",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "站场主C · 月绽放体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月绽放 · 高金数上限」打满爆发窗口",
        "summary": "月绽放站场主C，消耗草露施放幻戏，配菈乌玛组建月绽放强队。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "纺夜天镜",
          "displayName": "纺夜天镜",
          "rarity": 5,
          "reason": "专武，月绽放主C",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "月绽放体系核心法器，菈乌玛与奈芙尔专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "穹境示现之夜 4件套",
          "name": "穹境示现之夜",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后获得持续12秒的增伤与暴击率加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qiongjing-shixian-zhiye.png",
          "themeColor": "#8f9fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "300 – 500",
            "hint": "月绽放继承精通收益"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月绽放不吃常规精通转化，按新体系堆对应主属性",
          "保持队伍挂元素循环，避免断轴",
          "注意月绽放专属机制的触发条件",
          "奈芙尔是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "奈芙尔站场月绽放输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "菈乌玛",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "站场主C · 月绽放体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月绽放 · 高金数上限」打满爆发窗口",
        "summary": "月绽放体系核心，挂草触发月绽放，挪德卡莱「月」体系关键。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "纺夜天镜",
          "displayName": "纺夜天镜",
          "rarity": 5,
          "reason": "专武，月绽放核心",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "月绽放体系核心法器，菈乌玛与奈芙尔专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "祭礼残章",
            "displayName": "祭礼残章",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "战技概率重置，精通法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "纺月的夜歌 4件套",
          "name": "纺月的夜歌",
          "twoPiece": "元素精通+80",
          "fourPiece": "装备者触发元素反应后，依据队伍中月兆角色的数量为全队提供元素伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/fangyue-de-yege.png",
          "themeColor": "#a88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "300 – 500",
            "hint": "月绽放继承精通收益"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月绽放不吃常规精通转化，按新体系堆对应主属性",
          "保持队伍挂元素循环，避免断轴",
          "注意月绽放专属机制的触发条件",
          "菈乌玛是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "菈乌玛挂草触发月绽放"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "芙宁娜",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 月绽放体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造月绽放条件",
        "summary": "水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "静水流涌之辉",
          "displayName": "静水流涌之辉",
          "rarity": 5,
          "reason": "专武，生命+增伤",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "基于生命上限提升元素战技伤害，契合水神芙宁娜。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000+",
            "hint": "增伤幅度与生命挂钩"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队需堆充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": "副C伤害补充"
          }
        ],
        "notes": [
          "月绽放不吃常规精通转化，按新体系堆对应主属性",
          "保持队伍挂元素循环，避免断轴",
          "注意月绽放专属机制的触发条件",
          "芙宁娜以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "芙宁娜增伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "爱诺",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 月绽放体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造月绽放条件",
        "summary": "挪德卡莱机械发明家，后台挂水+领域水伤，月反应水载体。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "冬极白星",
          "displayName": "冬极白星",
          "rarity": 5,
          "reason": "普攻增伤，后台挂水输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "普攻重击叠层增伤，达达利亚专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "元素战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "纺月的夜歌 4件套",
          "name": "纺月的夜歌",
          "twoPiece": "元素精通+80",
          "fourPiece": "装备者触发元素反应后，依据队伍中月兆角色的数量为全队提供元素伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/fangyue-de-yege.png",
          "themeColor": "#a88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "300 – 500",
            "hint": "月绽放继承精通收益"
          }
        ],
        "notes": [
          "月绽放不吃常规精通转化，按新体系堆对应主属性",
          "保持队伍挂元素循环，避免断轴",
          "注意月绽放专属机制的触发条件",
          "爱诺以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大；双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "爱诺水兆"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "哥伦比娅月反应队": {
    "name": "哥伦比娅月反应队",
    "core": "月反应 · 三系联动",
    "tip": "哥伦比娅 Q 开领域挂水 → 菈乌玛挂草触发月绽放 → 伊涅芙挂雷触发月感电 → 兹白结晶触发月结晶，三系月反应全覆盖。",
    "reaction": "月绽放",
    "resonance": "四元素混编 · 无元素共鸣，充能与附着顺序需自行规划",
    "themeColor": "#9be36a",
    "rotation": [
      {
        "text": "哥伦比娅 Q 开领域挂水",
        "owners": [
          "哥伦比娅"
        ]
      },
      {
        "text": "菈乌玛挂草触发月绽放",
        "owners": [
          "菈乌玛"
        ]
      },
      {
        "text": "伊涅芙挂雷触发月感电",
        "owners": [
          "伊涅芙"
        ]
      },
      {
        "text": "兹白结晶触发月结晶",
        "owners": [
          "兹白"
        ]
      },
      {
        "text": "三系月反应全覆盖。",
        "owners": []
      }
    ],
    "members": [
      {
        "name": "哥伦比娅",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "站场主C · 月绽放体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月反应 · 三系联动」打满爆发窗口",
        "summary": "「空月归乡」月之少女，Q 领域让全队可触发月感电 / 月绽放 / 月结晶，是月反应体系的核心挂水位。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专精精通与全队增益，月反应收益最高",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性，锻造即可入手",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "纺月的夜歌 4件套",
          "name": "纺月的夜歌",
          "twoPiece": "元素精通+80",
          "fourPiece": "装备者触发元素反应后，依据队伍中月兆角色的数量为全队提供元素伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/fangyue-de-yege.png",
          "themeColor": "#a88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "300 – 500",
            "hint": "月绽放继承精通收益"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月绽放不吃常规精通转化，按新体系堆对应主属性",
          "保持队伍挂元素循环，避免断轴",
          "注意月绽放专属机制的触发条件",
          "哥伦比娅是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：四元素混编 · 无元素共鸣，充能与附着顺序需自行规划"
        ],
        "mySteps": [
          "哥伦比娅 Q 开领域挂水"
        ],
        "stepMine": [
          true,
          false,
          false,
          false,
          false
        ]
      },
      {
        "name": "菈乌玛",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "站场主C · 月绽放体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月反应 · 三系联动」打满爆发窗口",
        "summary": "月绽放体系核心，挂草触发月绽放，挪德卡莱「月」体系关键。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "纺夜天镜",
          "displayName": "纺夜天镜",
          "rarity": 5,
          "reason": "专武，月绽放核心",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "月绽放体系核心法器，菈乌玛与奈芙尔专武。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "祭礼残章",
            "displayName": "祭礼残章",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "战技概率重置，精通法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "纺月的夜歌 4件套",
          "name": "纺月的夜歌",
          "twoPiece": "元素精通+80",
          "fourPiece": "装备者触发元素反应后，依据队伍中月兆角色的数量为全队提供元素伤害加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/fangyue-de-yege.png",
          "themeColor": "#a88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "300 – 500",
            "hint": "月绽放继承精通收益"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月绽放不吃常规精通转化，按新体系堆对应主属性",
          "保持队伍挂元素循环，避免断轴",
          "注意月绽放专属机制的触发条件",
          "菈乌玛是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：四元素混编 · 无元素共鸣，充能与附着顺序需自行规划"
        ],
        "mySteps": [
          "菈乌玛挂草触发月绽放"
        ],
        "stepMine": [
          false,
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "伊涅芙",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 月绽放体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月反应 · 三系联动」打满爆发窗口",
        "summary": "月感电体系辅助，与菲林斯组成菲机组合的核心拐。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "镜中月",
          "displayName": "镜中月",
          "rarity": 5,
          "reason": "专武，月感电体系增伤",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "丝柯克核心武器，冰水体系输出上限极高。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "上场随机增伤，爆发",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "穹境示现之夜 4件套",
          "name": "穹境示现之夜",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后获得持续12秒的增伤与暴击率加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qiongjing-shixian-zhiye.png",
          "themeColor": "#8f9fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "300 – 500",
            "hint": "月绽放继承精通收益"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月绽放不吃常规精通转化，按新体系堆对应主属性",
          "保持队伍挂元素循环，避免断轴",
          "注意月绽放专属机制的触发条件",
          "伊涅芙是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：四元素混编 · 无元素共鸣，充能与附着顺序需自行规划"
        ],
        "mySteps": [
          "伊涅芙挂雷触发月感电"
        ],
        "stepMine": [
          false,
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "兹白",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "站场主C · 月绽放体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「月反应 · 三系联动」打满爆发窗口",
        "summary": "月结晶反应输出，防御转攻，低配即可成型，配钟离或叶洛亚组建月结晶队。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "朏魄含光",
          "displayName": "朏魄含光",
          "rarity": 5,
          "reason": "专武，数值暴力大幅提升输出",
          "type": "单手剑",
          "stat": "副属性：防御力",
          "desc": "兹白专武，数值暴力，大幅提升月结晶输出。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "防御力",
          "subValue": "62.0%"
        },
        "altWeapons": [
          {
            "name": "磐岩结绿",
            "displayName": "磐岩结绿",
            "rarity": 5,
            "reason": "高双暴词条替代",
            "type": "单手剑",
            "stat": "副属性：暴击率",
            "desc": "生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。",
            "atk1": 44,
            "atk90": 542,
            "subStat": "暴击率",
            "subValue": "44.1%"
          }
        ],
        "artifact": {
          "raw": "穹境示现之夜 4件套",
          "name": "穹境示现之夜",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后获得持续12秒的增伤与暴击率加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qiongjing-shixian-zhiye.png",
          "themeColor": "#8f9fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "300 – 500",
            "hint": "月绽放继承精通收益"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "月绽放不吃常规精通转化，按新体系堆对应主属性",
          "保持队伍挂元素循环，避免断轴",
          "注意月绽放专属机制的触发条件",
          "兹白是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：四元素混编 · 无元素共鸣，充能与附着顺序需自行规划"
        ],
        "mySteps": [
          "兹白结晶触发月结晶"
        ],
        "stepMine": [
          false,
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "莉奈娅双岩队": {
    "name": "莉奈娅双岩队",
    "core": "蓄力岩伤 · 双岩共鸣",
    "tip": "钟离开盾减抗 → 希诺宁减抗加伤 → 班尼特 Q 加攻 → 莉奈娅蓄力结晶弹站场输出。",
    "reaction": "直伤",
    "resonance": "双岩共鸣 · 护盾强效与岩伤提升，站场更稳",
    "themeColor": "#7fb2e8",
    "rotation": [
      {
        "text": "钟离开盾减抗",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "希诺宁减抗加伤",
        "owners": [
          "希诺宁"
        ]
      },
      {
        "text": "班尼特 Q 加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "莉奈娅蓄力结晶弹站场输出。",
        "owners": [
          "莉奈娅"
        ]
      }
    ],
    "members": [
      {
        "name": "莉奈娅",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "站场主C · 直伤体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「蓄力岩伤 · 双岩共鸣」打满爆发窗口",
        "summary": "6.5 岩系弓角色，蓄力结晶弹高频输出，依赖双岩共鸣与护盾保证站场。",
        "talents": "普通攻击 > 元素战技 > 元素爆发",
        "mainStats": "时之沙：攻击% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "阿莫斯之弓",
          "displayName": "阿莫斯之弓",
          "rarity": 5,
          "reason": "蓄力箭增伤，结晶弹全额吃到",
          "type": "弓",
          "stat": "副属性：攻击力",
          "desc": "普攻与瞄准射击伤害提升，箭矢飞行增伤。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "破魔之弓",
            "displayName": "破魔之弓",
            "rarity": 4,
            "reason": "锻造获取，满能量重击增伤 32%",
            "type": "弓",
            "stat": "副属性：攻击力",
            "desc": "锻造获取，满能量重击增伤 32%。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "华馆梦醒形骸记 4件套",
          "name": "华馆梦醒形骸记",
          "twoPiece": "防御力+30%",
          "fourPiece": "场上角色以岩元素攻击命中敌人后获得「问答」：防御力+6%、岩元素伤害加成+6%，持续15秒，最多4层；装备者处于后台时每3秒获得1层；满4层时该效果提升100%",
          "flavor": "防御型岩C",
          "image": "/artifacts/huaguan-mengxing.png",
          "themeColor": "#b9a3d8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素伤害加成",
            "value": "对应元素伤杯子",
            "hint": "直伤队杯子收益最高"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "莉奈娅是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "莉奈娅蓄力结晶弹站场输出。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 直伤体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "钟离开盾减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "希诺宁",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 直伤体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "夜魂体系岩辅，减抗+增伤，玛薇卡战舰关键辅助。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "磐岩结绿",
          "displayName": "磐岩结绿",
          "rarity": 5,
          "reason": "暴击率，辅助",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击率",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "烬城勇者绘卷 4件套",
          "name": "烬城勇者绘卷",
          "twoPiece": "队伍中附近的角色触发「夜魂迸发」时，装备者恢复6点元素能量",
          "fourPiece": "装备者触发对应元素类型的反应后，队伍中该元素类型的角色获得12%元素伤害加成，持续15秒；装备者处于夜魂加持状态时该加成提升至28%",
          "flavor": "纳塔队伍增伤",
          "image": "/artifacts/jincheng-yongzhe-huijuan.png",
          "themeColor": "#e08a5b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通 / 攻击力",
            "value": "精通 800+ 或 攻击 2,000+",
            "hint": "按增伤方式二选一"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 210%",
            "hint": "保证 Q 增伤覆盖"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "辅助位非刚需"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "希诺宁提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "希诺宁减抗加伤"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 直伤体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "直伤队吃元素伤害加成与减抗，杯子优先元素伤",
          "反应收益有限，词条优先双暴与攻击/生命/防御主属性",
          "增伤辅助应覆盖主C完整站场时间",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "班尼特 Q 加攻"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      }
    ]
  },
  "桑多涅永冻队": {
    "name": "桑多涅永冻队",
    "core": "永冻 · 冰伤爆发",
    "tip": "芙宁娜 Q 增伤挂水 → 万叶扩散减抗聚怪 → 桑多涅后台挂冰 → 绫华重击与 Q 永冻收割。",
    "reaction": "永冻",
    "resonance": "双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤",
    "themeColor": "#7fd3f5",
    "rotation": [
      {
        "text": "芙宁娜 Q 增伤挂水",
        "owners": [
          "芙宁娜"
        ]
      },
      {
        "text": "万叶扩散减抗聚怪",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "桑多涅后台挂冰",
        "owners": [
          "桑多涅"
        ]
      },
      {
        "text": "绫华重击与 Q 永冻收割。",
        "owners": [
          "神里绫华"
        ]
      }
    ],
    "members": [
      {
        "name": "桑多涅",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "后台副C · 永冻体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造永冻条件",
        "summary": "「镜水析谬」愚人众执行官木偶，后台持续挂冰并提供减抗，是永冻与冰伤队的强力副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "狼的末路",
          "displayName": "狼的末路",
          "rarity": 5,
          "reason": "高白值攻击，后台冰伤收益稳定",
          "type": "双手剑",
          "stat": "副属性：攻击力",
          "desc": "命中低血敌人全队加攻，范围伤害。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "螭骨剑",
            "displayName": "螭骨剑",
            "rarity": 4,
            "reason": "暴击率副属性，纪行获取",
            "type": "双手剑",
            "stat": "副属性：暴击率",
            "desc": "叠层增伤，纪行高性价比双手剑。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击率",
            "subValue": "27.6%"
          }
        ],
        "artifact": {
          "raw": "冰风迷途的勇士 4件套",
          "name": "冰风迷途的勇士",
          "twoPiece": "冰元素伤害加成+15%",
          "fourPiece": "攻击处于冰元素影响下的敌人时暴击率+20%；若敌人处于冻结状态，暴击率额外+20%",
          "flavor": "永冻冰C",
          "image": "/artifacts/bingfeng-mitu-yongshi.png",
          "themeColor": "#6fc7e8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "暴击伤害",
            "value": "180% – 220%",
            "hint": "冻结+双冰共鸣下暴击率需求低"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "桑多涅以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "桑多涅后台挂冰"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "神里绫华",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 永冻体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「永冻 · 冰伤爆发」打满爆发窗口",
        "summary": "重击+Q 站场，配莫娜/心海挂水永冻，霰步贴近开怪。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "雾切之回光",
          "displayName": "雾切之回光",
          "rarity": 5,
          "reason": "专武，冰伤加成",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "获得元素伤害加成，普攻命中叠层进一步提高元素伤害。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "天目影打刀",
            "displayName": "天目影打刀",
            "rarity": 4,
            "reason": "充能缓解 Q 压力",
            "type": "单手剑",
            "stat": "副属性：攻击力",
            "desc": "稻妻锻造，充能缓解 Q 启动压力。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "冰风迷途的勇士 4件套",
          "name": "冰风迷途的勇士",
          "twoPiece": "冰元素伤害加成+15%",
          "fourPiece": "攻击处于冰元素影响下的敌人时暴击率+20%；若敌人处于冻结状态，暴击率额外+20%",
          "flavor": "永冻冰C",
          "image": "/artifacts/bingfeng-mitu-yongshi.png",
          "themeColor": "#6fc7e8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "2,000 – 2,300",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "45% / 220%",
            "hint": "永冻+双冰共鸣，暴击率可压低"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "神里绫华是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "绫华重击与 Q 永冻收割。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "芙宁娜",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 永冻体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造永冻条件",
        "summary": "水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "静水流涌之辉",
          "displayName": "静水流涌之辉",
          "rarity": 5,
          "reason": "专武，生命+增伤",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "基于生命上限提升元素战技伤害，契合水神芙宁娜。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000+",
            "hint": "增伤幅度与生命挂钩"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队需堆充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": "副C伤害补充"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "芙宁娜以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "芙宁娜 Q 增伤挂水"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 永冻体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "冻结需水+冰持续附着，挂水位不能断",
          "永冻下暴击率需求下降，可把词条让给暴伤",
          "BOSS 无法冻结，需准备爆发轴替代方案",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "万叶扩散减抗聚怪"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "艾莉丝蒸发队": {
    "name": "艾莉丝蒸发队",
    "core": "蒸发 · 火法站场",
    "tip": "班尼特 Q 加攻 → 万叶扩散减抗 → 芙宁娜挂水增伤 → 艾莉丝站场普攻与 Q 连续蒸发。",
    "reaction": "蒸发",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#ff8a5b",
    "rotation": [
      {
        "text": "班尼特 Q 加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "万叶扩散减抗",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "芙宁娜挂水增伤",
        "owners": [
          "芙宁娜"
        ]
      },
      {
        "text": "艾莉丝站场普攻与 Q 连续蒸发。",
        "owners": [
          "艾莉丝"
        ]
      }
    ],
    "members": [
      {
        "name": "艾莉丝",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 蒸发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「蒸发 · 火法站场」打满爆发窗口",
        "summary": "魔女会成员，火系法器站场主C，大范围火伤兼顾蒸发与融化，配水系辅助出伤最高。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "四风原典",
          "displayName": "四风原典",
          "rarity": 5,
          "reason": "站场叠层元素伤，暴击率副属性缓解双暴压力",
          "type": "法器",
          "stat": "副属性：暴击率",
          "desc": "移动速度提升，站场叠层增元素伤。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "33.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "三类增益轮换，爆发期收益极高",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "炽烈的炎之魔女 4件套",
          "name": "炽烈的炎之魔女",
          "twoPiece": "火元素伤害加成+15%",
          "fourPiece": "蒸发、融化反应造成的伤害+15%，超载、燃烧、烈绽放反应伤害+40%；施放元素战技后10秒内，2件套的效果提升50%，最多叠加3层",
          "flavor": "火系主C · 蒸发融化",
          "image": "/artifacts/xilie-yan-zhi-monv.png",
          "themeColor": "#e0604a",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "蒸发按精通放大，优先于攻击%"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "艾莉丝是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "艾莉丝站场普攻与 Q 连续蒸发。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "芙宁娜",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "水神，Q 依血量波动全队高额增伤，E 三沙龙后台挂水+治疗，直伤/绽放泛用。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "静水流涌之辉",
          "displayName": "静水流涌之辉",
          "rarity": 5,
          "reason": "专武，生命+增伤",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "基于生命上限提升元素战技伤害，契合水神芙宁娜。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000+",
            "hint": "增伤幅度与生命挂钩"
          },
          {
            "label": "元素充能效率",
            "value": "170% – 200%",
            "hint": "单水入队需堆充能"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": "副C伤害补充"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "芙宁娜以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "芙宁娜挂水增伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 蒸发体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "万叶扩散减抗"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 蒸发体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特 Q 加攻"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      }
    ]
  },
  "埃洛伊融化队": {
    "name": "埃洛伊融化队",
    "core": "融化 · 冰弓站场",
    "tip": "钟离开盾保站场 → 班尼特 Q 加攻 → 香菱 Q 后台挂火 → 埃洛伊 E 附魔普攻连续融化。",
    "reaction": "融化",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#ff6f91",
    "rotation": [
      {
        "text": "钟离开盾保站场",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "班尼特 Q 加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "香菱 Q 后台挂火",
        "owners": [
          "香菱"
        ]
      },
      {
        "text": "埃洛伊 E 附魔普攻连续融化。",
        "owners": [
          "埃洛伊"
        ]
      }
    ],
    "members": [
      {
        "name": "埃洛伊",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 融化体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「融化 · 冰弓站场」打满爆发窗口",
        "summary": "联动限定冰弓角色，E 冰弹附魔普攻并叠加线圈，融化 / 永冻皆可，绝版收藏向主C。",
        "talents": "普通攻击 > 元素战技 > 元素爆发",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "阿莫斯之弓",
          "displayName": "阿莫斯之弓",
          "rarity": 5,
          "reason": "蓄力与普攻增伤，冰弓输出最优",
          "type": "弓",
          "stat": "副属性：攻击力",
          "desc": "普攻与瞄准射击伤害提升，箭矢飞行增伤。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "破魔之弓",
            "displayName": "破魔之弓",
            "rarity": 4,
            "reason": "锻造获取，满能量重击增伤",
            "type": "弓",
            "stat": "副属性：攻击力",
            "desc": "锻造获取，满能量重击增伤 32%。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "冰风迷途的勇士 4件套",
          "name": "冰风迷途的勇士",
          "twoPiece": "冰元素伤害加成+15%",
          "fourPiece": "攻击处于冰元素影响下的敌人时暴击率+20%；若敌人处于冻结状态，暴击率额外+20%",
          "flavor": "永冻冰C",
          "image": "/artifacts/bingfeng-mitu-yongshi.png",
          "themeColor": "#6fc7e8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "融化倍率受精通影响"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "埃洛伊是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "埃洛伊 E 附魔普攻连续融化。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 融化体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特 Q 加攻"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "香菱",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "后台副C · 融化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造融化条件",
        "summary": "旋火轮后台挂火+高蒸发，国家队核心，四星顶配副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "护摩之杖",
          "displayName": "护摩之杖",
          "rarity": 5,
          "reason": "暴伤副属性，爆发高",
          "type": "长柄武器",
          "stat": "副属性：暴击伤害",
          "desc": "生命值提升 20%，基于生命上限的 0.8% 获得攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "渔获",
            "displayName": "渔获",
            "rarity": 4,
            "reason": "充能+Q 增伤，平民神器",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "钓鱼兑换，充能+Q 增伤，平民神器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素充能效率",
            "subValue": "45.9%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 锁面板，循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 250",
            "hint": "蒸发/融化收益"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "香菱以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "香菱 Q 后台挂火"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 融化体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "钟离开盾保站场"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      }
    ]
  },
  "风主扩散队": {
    "name": "风主扩散队",
    "core": "扩散 · 双风聚怪",
    "tip": "班尼特 Q 加攻 → 香菱 Q 挂火 → 万叶 E 聚怪扩散减抗 → 旅行者·风 Q 风涡卷持续扩散收尾。",
    "reaction": "扩散",
    "resonance": "双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#7fe3c0",
    "rotation": [
      {
        "text": "班尼特 Q 加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "香菱 Q 挂火",
        "owners": [
          "香菱"
        ]
      },
      {
        "text": "万叶 E 聚怪扩散减抗",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "旅行者·风 Q 风涡卷持续扩散收尾。",
        "owners": [
          "旅行者·风"
        ]
      }
    ],
    "members": [
      {
        "name": "旅行者·风",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "后台副C · 扩散体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造扩散条件",
        "summary": "与风元素共鸣，Q 风涡卷聚怪扩散、E 风刃击退；翠绿之影 4 件套减抗，平民泛用副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：风伤% / 理之冠：暴击",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通与全队增伤，扩散队最优",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "锻造获取，精通副属性扩散收益稳定",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 140%",
            "hint": "双暴是最稳的通用收益"
          }
        ],
        "notes": [
          "风角色优先扩散可被转化的元素",
          "精通决定扩散增伤幅度",
          "聚怪位置影响后续 AOE 命中",
          "旅行者·风以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "旅行者·风 Q 风涡卷持续扩散收尾。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 扩散体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "风角色优先扩散可被转化的元素",
          "精通决定扩散增伤幅度",
          "聚怪位置影响后续 AOE 命中",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "万叶 E 聚怪扩散减抗"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 扩散体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "风角色优先扩散可被转化的元素",
          "精通决定扩散增伤幅度",
          "聚怪位置影响后续 AOE 命中",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特 Q 加攻"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "香菱",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "后台副C · 扩散体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造扩散条件",
        "summary": "旋火轮后台挂火+高蒸发，国家队核心，四星顶配副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "护摩之杖",
          "displayName": "护摩之杖",
          "rarity": 5,
          "reason": "暴伤副属性，爆发高",
          "type": "长柄武器",
          "stat": "副属性：暴击伤害",
          "desc": "生命值提升 20%，基于生命上限的 0.8% 获得攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "渔获",
            "displayName": "渔获",
            "rarity": 4,
            "reason": "充能+Q 增伤，平民神器",
            "type": "长柄武器",
            "stat": "副属性：元素充能效率",
            "desc": "钓鱼兑换，充能+Q 增伤，平民神器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素充能效率",
            "subValue": "45.9%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 锁面板，循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 250",
            "hint": "蒸发/融化收益"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "风角色优先扩散可被转化的元素",
          "精通决定扩散增伤幅度",
          "聚怪位置影响后续 AOE 命中",
          "香菱以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双风共鸣 · 体力消耗降低、技能冷却缩短，跑图与循环更顺；双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "香菱 Q 挂火"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "岩主结晶队": {
    "name": "岩主结晶队",
    "core": "双岩共鸣 · 结晶护盾",
    "tip": "钟离开盾减抗 → 班尼特 Q 加攻 → 阿贝多 E 后台岩伤 → 旅行者·岩 荒星与 Q 结晶补伤。",
    "reaction": "结晶",
    "resonance": "双岩共鸣 · 护盾强效与岩伤提升，站场更稳",
    "themeColor": "#e0c078",
    "rotation": [
      {
        "text": "钟离开盾减抗",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "班尼特 Q 加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "阿贝多 E 后台岩伤",
        "owners": [
          "阿贝多"
        ]
      },
      {
        "text": "旅行者·岩 荒星与 Q 结晶补伤。",
        "owners": [
          "旅行者·岩"
        ]
      }
    ],
    "members": [
      {
        "name": "旅行者·岩",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "后台副C · 结晶体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造结晶条件",
        "summary": "与岩元素共鸣，E 荒星造物挡伤并共鸣、Q 岩潮结界控场；双岩队稳定副C，养成成本低。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "磐岩结绿",
          "displayName": "磐岩结绿",
          "rarity": 5,
          "reason": "生命与暴击率兼顾，泛用五星单手剑",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击率",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，缓解全队循环压力",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "华馆梦醒形骸记 4件套",
          "name": "华馆梦醒形骸记",
          "twoPiece": "防御力+30%",
          "fourPiece": "场上角色以岩元素攻击命中敌人后获得「问答」：防御力+6%、岩元素伤害加成+6%，持续15秒，最多4层；装备者处于后台时每3秒获得1层；满4层时该效果提升100%",
          "flavor": "防御型岩C",
          "image": "/artifacts/huaguan-mengxing.png",
          "themeColor": "#b9a3d8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 140%",
            "hint": "结晶队以直伤为主"
          }
        ],
        "notes": [
          "结晶反应产盾，注意及时拾取晶片",
          "岩队吃防御/岩伤，减抗位收益高",
          "护盾覆盖是站场输出的前提",
          "旅行者·岩以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "旅行者·岩 荒星与 Q 结晶补伤。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 结晶体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "结晶反应产盾，注意及时拾取晶片",
          "岩队吃防御/岩伤，减抗位收益高",
          "护盾覆盖是站场输出的前提",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "钟离开盾减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "阿贝多",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "后台副C · 结晶体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造结晶条件",
        "summary": "E 阳华后台岩伤，防转攻，配钟离双岩共鸣。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：防御% / 空之杯：岩伤% / 理之冠：暴击",
        "weapon": {
          "name": "磐岩结绿",
          "displayName": "磐岩结绿",
          "rarity": 5,
          "reason": "防御转攻，暴击率",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "生命值提升 20%，并基于生命上限的 1.2% 获得攻击力。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "暴击率",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "华馆梦醒形骸记 4件套",
          "name": "华馆梦醒形骸记",
          "twoPiece": "防御力+30%",
          "fourPiece": "场上角色以岩元素攻击命中敌人后获得「问答」：防御力+6%、岩元素伤害加成+6%，持续15秒，最多4层；装备者处于后台时每3秒获得1层；满4层时该效果提升100%",
          "flavor": "防御型岩C",
          "image": "/artifacts/huaguan-mengxing.png",
          "themeColor": "#b9a3d8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 140%",
            "hint": "结晶队以直伤为主"
          }
        ],
        "notes": [
          "结晶反应产盾，注意及时拾取晶片",
          "岩队吃防御/岩伤，减抗位收益高",
          "护盾覆盖是站场输出的前提",
          "阿贝多以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "阿贝多 E 后台岩伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 结晶体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "结晶反应产盾，注意及时拾取晶片",
          "岩队吃防御/岩伤，减抗位收益高",
          "护盾覆盖是站场输出的前提",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双岩共鸣 · 护盾强效与岩伤提升，站场更稳"
        ],
        "mySteps": [
          "班尼特 Q 加攻"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      }
    ]
  },
  "雷主激化队": {
    "name": "雷主激化队",
    "core": "激化 · 充能辅助",
    "tip": "钟离开盾 → 纳西妲 E 全场挂草 → 旅行者·雷 E 勾玉回能 → 菲谢尔奥兹后台雷触发激化。",
    "reaction": "激化",
    "resonance": "双雷共鸣 · 触发雷系反应额外产球，充能更宽裕",
    "themeColor": "#8fd14f",
    "rotation": [
      {
        "text": "钟离开盾",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "纳西妲 E 全场挂草",
        "owners": [
          "纳西妲"
        ]
      },
      {
        "text": "旅行者·雷 E 勾玉回能",
        "owners": [
          "旅行者·雷"
        ]
      },
      {
        "text": "菲谢尔奥兹后台雷触发激化。",
        "owners": [
          "菲谢尔"
        ]
      }
    ],
    "members": [
      {
        "name": "旅行者·雷",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "充能辅助 · 激化体系",
        "type": "battery",
        "duty": "产球供能，保证全队技能循环",
        "summary": "与雷元素共鸣，E 落雷勾玉为全队回能、Q 雷影斩后台挂雷；激化 / 超导队的充能功能位。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "充能副属性，开大循环最顺",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "产球辅助，全队充能无忧",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "充能位核心指标"
          },
          {
            "label": "攻击力",
            "value": "1,500+",
            "hint": "兼顾产球与伤害"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "可选",
            "hint": "非刚需"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "旅行者·雷负责产球充能，优先保证全队 Q 循环。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "旅行者·雷 E 勾玉回能"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "纳西妲",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专武，精通+全队增益",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "800 – 1,000",
            "hint": "激化/绽放核心，且受天赋上限约束"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "精通达标后补双暴"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "纳西妲以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "纳西妲 E 全场挂草"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "菲谢尔",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "后台副C · 激化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造激化条件",
        "summary": "奥兹后台持续雷伤，激化/超导队经典副C。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "天空之翼",
          "displayName": "天空之翼",
          "rarity": 5,
          "reason": "暴击率，奥兹输出",
          "type": "弓",
          "stat": "副属性：暴击率",
          "desc": "暴击后范围物伤，攻击力提升。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "绝弦",
            "displayName": "绝弦",
            "rarity": 4,
            "reason": "战技爆发增伤",
            "type": "弓",
            "stat": "副属性：元素精通",
            "desc": "元素战技与爆发增伤。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "黄金剧团 4件套",
          "name": "黄金剧团",
          "twoPiece": "元素战技造成的伤害+20%",
          "fourPiece": "元素战技造成的伤害+25%；装备者处于队伍后台时，元素战技造成的伤害额外+25%，登场后2秒移除",
          "flavor": "后台脱手副C",
          "image": "/artifacts/huangjin-jutuan.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,600 – 1,900",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "65% / 130%",
            "hint": ""
          },
          {
            "label": "元素精通",
            "value": "激化队 150 – 250",
            "hint": "激化队精通收益显著"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "菲谢尔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "菲谢尔奥兹后台雷触发激化。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 激化体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "先挂草再上雷建立原激化，后续雷/草命中触发超激化/蔓激化",
          "精通收益显著，副词条优先精通与双暴",
          "维持激化状态不要被其他元素打断",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双雷共鸣 · 触发雷系反应额外产球，充能更宽裕"
        ],
        "mySteps": [
          "钟离开盾"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      }
    ]
  },
  "草主绽放队": {
    "name": "草主绽放队",
    "core": "超绽放 · 双草挂草",
    "tip": "纳西妲 E 挂草 → 行秋 Q 挂水生成草原核 → 旅行者·草 Q 草灯莲续草 → 久岐忍 E 触发超绽放。",
    "reaction": "绽放",
    "resonance": "双草共鸣 · 元素精通提升，激化/绽放收益进一步放大",
    "themeColor": "#7bd88f",
    "rotation": [
      {
        "text": "纳西妲 E 挂草",
        "owners": [
          "纳西妲"
        ]
      },
      {
        "text": "行秋 Q 挂水生成草原核",
        "owners": [
          "行秋"
        ]
      },
      {
        "text": "旅行者·草 Q 草灯莲续草",
        "owners": [
          "旅行者·草"
        ]
      },
      {
        "text": "久岐忍 E 触发超绽放。",
        "owners": [
          "久岐忍"
        ]
      }
    ],
    "members": [
      {
        "name": "旅行者·草",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 绽放体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造绽放条件",
        "summary": "与草元素共鸣，Q 草灯莲持续挂草，配合水 / 雷触发绽放与激化；深林 4 件套减草抗。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：元素精通 / 空之杯：草伤% / 理之冠：元素精通",
        "weapon": {
          "name": "圣显之钥",
          "displayName": "圣显之钥",
          "rarity": 5,
          "reason": "生命转精通，绽放队辅助向",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "生命转精通，绽放队辅助法器。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，保证 Q 循环不断档",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "300 – 500",
            "hint": "绽放伤害只看精通与等级"
          }
        ],
        "notes": [
          "产种子后由雷/火触发超绽放/烈绽放",
          "触发者精通决定绽放伤害",
          "注意种子上限与触发节奏",
          "旅行者·草以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "旅行者·草 Q 草灯莲续草"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "纳西妲",
        "element": "草",
        "rarity": 5,
        "roleInTeam": "后台副C · 绽放体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造绽放条件",
        "summary": "E 全场挂草+Q 增伤，绽放/激化核心，精通收益极高。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：草伤% / 理之冠：暴击",
        "weapon": {
          "name": "千夜浮梦",
          "displayName": "千夜浮梦",
          "rarity": 5,
          "reason": "专武，精通+全队增益",
          "type": "法器",
          "stat": "副属性：元素精通",
          "desc": "按队伍元素类型数量提供精通与全队元素伤害。",
          "atk1": 44,
          "atk90": 542,
          "subStat": "元素精通",
          "subValue": "265"
        },
        "altWeapons": [
          {
            "name": "流浪的晚星",
            "displayName": "流浪的晚星",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "法器",
            "stat": "副属性：元素精通",
            "desc": "精通副属性+全队增伤，锻造法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "深林的记忆 4件套",
          "name": "深林的记忆",
          "twoPiece": "草元素伤害加成+15%",
          "fourPiece": "元素战技或元素爆发命中敌人后，使命中的敌人草元素抗性-30%，持续8秒；装备者处于后台时依然能触发该效果",
          "flavor": "草队减抗必备",
          "image": "/artifacts/shenlin-de-jiyi.png",
          "themeColor": "#6fc46a",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "800 – 1,000",
            "hint": "激化/绽放核心，且受天赋上限约束"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "精通达标后补双暴"
          },
          {
            "label": "元素充能效率",
            "value": "120% – 140%",
            "hint": "Q 循环"
          }
        ],
        "notes": [
          "产种子后由雷/火触发超绽放/烈绽放",
          "触发者精通决定绽放伤害",
          "注意种子上限与触发节奏",
          "纳西妲以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "纳西妲 E 挂草"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "行秋",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 绽放体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造绽放条件",
        "summary": "Q 雨帘剑后台水+减伤回血，蒸发/绽放万金油四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "祭礼剑",
          "displayName": "祭礼剑",
          "rarity": 5,
          "reason": "重置战技，双E回能",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "战技概率重置冷却，行秋/万叶常用。",
          "atk1": 41,
          "atk90": 454,
          "subStat": "元素充能效率",
          "subValue": "61.3%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "190% – 220%",
            "hint": "Q 是挂水核心，充能第一优先"
          },
          {
            "label": "攻击力",
            "value": "1,500 – 1,800",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "产种子后由雷/火触发超绽放/烈绽放",
          "触发者精通决定绽放伤害",
          "注意种子上限与触发节奏",
          "行秋以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "行秋 Q 挂水生成草原核"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "久岐忍",
        "element": "雷",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 绽放体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "E 雷环持续治疗+挂雷，超绽放队核心打火机。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "铁蜂刺",
          "displayName": "铁蜂刺",
          "rarity": 4,
          "reason": "精通副属性，超绽放",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "锻造获取，精通副属性，扩散收益稳定。",
          "atk1": 42,
          "atk90": 510,
          "subStat": "元素精通",
          "subValue": "165"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能辅助",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "饰金之梦 4件套",
          "name": "饰金之梦",
          "twoPiece": "元素精通+80",
          "fourPiece": "触发元素反应后的8秒内，依据队伍中其他角色的元素类型使装备者获得强化：同元素角色使攻击力+14%，不同元素角色使元素精通+50；每类元素至多1层，至多3层",
          "flavor": "反应型主C",
          "image": "/artifacts/shijin-zhimeng.png",
          "themeColor": "#d9b45b",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "30,000 – 40,000",
            "hint": "治疗量与部分伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "保证 E/Q 覆盖"
          },
          {
            "label": "治疗加成",
            "value": "按套装",
            "hint": "海染 / 少女等"
          }
        ],
        "notes": [
          "产种子后由雷/火触发超绽放/烈绽放",
          "触发者精通决定绽放伤害",
          "注意种子上限与触发节奏",
          "久岐忍负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双草共鸣 · 元素精通提升，激化/绽放收益进一步放大"
        ],
        "mySteps": [
          "久岐忍 E 触发超绽放。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      }
    ]
  },
  "水主蒸发队": {
    "name": "水主蒸发队",
    "core": "蒸发 · 双水挂水",
    "tip": "钟离开盾减抗 → 行秋 Q 挂水 → 旅行者·水 E+Q 持续挂水治疗 → 胡桃 E 后重击蒸发。",
    "reaction": "蒸发",
    "resonance": "双水共鸣 · 提升生命与充能，缓解循环压力",
    "themeColor": "#ff8a5b",
    "rotation": [
      {
        "text": "钟离开盾减抗",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "行秋 Q 挂水",
        "owners": [
          "行秋"
        ]
      },
      {
        "text": "旅行者·水 E+Q 持续挂水治疗",
        "owners": [
          "旅行者·水"
        ]
      },
      {
        "text": "胡桃 E 后重击蒸发。",
        "owners": [
          "胡桃"
        ]
      }
    ],
    "members": [
      {
        "name": "旅行者·水",
        "element": "水",
        "rarity": 5,
        "roleInTeam": "治疗 / 续航位 · 蒸发体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "与水元素共鸣，E 水球挂水、Q 潮汐领域持续治疗；蒸发 / 绽放队兼顾挂水与生存的功能位。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：水伤% / 理之冠：治疗加成",
        "weapon": {
          "name": "静水流涌之辉",
          "displayName": "静水流涌之辉",
          "rarity": 5,
          "reason": "生命副属性，战技伤害与治疗双收益",
          "type": "单手剑",
          "stat": "副属性：生命值",
          "desc": "基于生命上限提升元素战技伤害，契合水神芙宁娜。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "生命值",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "祭礼剑",
            "displayName": "祭礼剑",
            "rarity": 4,
            "reason": "重置战技，挂水覆盖更稳",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "战技概率重置冷却，行秋/万叶常用。",
            "atk1": 41,
            "atk90": 454,
            "subStat": "元素充能效率",
            "subValue": "61.3%"
          }
        ],
        "artifact": {
          "raw": "昔时之歌 4件套",
          "name": "昔时之歌",
          "twoPiece": "治疗效果+15%",
          "fourPiece": "装备者为队伍中角色恢复生命值时产生持续6秒的「渴求」，记录回复量；结束时转为「彼时的潮汐」，使队伍中角色的攻击命中敌人时造成的伤害提升，持续10秒，至多触发5次",
          "flavor": "奶辅增伤",
          "image": "/artifacts/xishi-zhige.png",
          "themeColor": "#8fd8c0",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "30,000 – 40,000",
            "hint": "治疗量与部分伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "保证 E/Q 覆盖"
          },
          {
            "label": "治疗加成",
            "value": "按套装",
            "hint": "海染 / 少女等"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "旅行者·水负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "旅行者·水 E+Q 持续挂水治疗"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "胡桃",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "站场主C · 蒸发体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「蒸发 · 双水挂水」打满爆发窗口",
        "summary": "E 生命转攻击，重击蒸发高额伤害，注意控血与行秋/夜兰挂水。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：生命% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "护摩之杖",
          "displayName": "护摩之杖",
          "rarity": 5,
          "reason": "生命转攻，契合低血输出",
          "type": "长柄武器",
          "stat": "副属性：暴击伤害",
          "desc": "生命值提升 20%，基于生命上限的 0.8% 获得攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击伤害",
          "subValue": "66.2%"
        },
        "altWeapons": [
          {
            "name": "决斗之枪",
            "displayName": "决斗之枪",
            "rarity": 4,
            "reason": "暴击率副属性，缓解双暴压力",
            "type": "长柄武器",
            "stat": "副属性：暴击率",
            "desc": "纪行获取，暴击副属性缓解双暴压力。",
            "atk1": 41,
            "atk90": 454,
            "subStat": "暴击率",
            "subValue": "36.8%"
          }
        ],
        "artifact": {
          "raw": "炽烈的炎之魔女 4件套",
          "name": "炽烈的炎之魔女",
          "twoPiece": "火元素伤害加成+15%",
          "fourPiece": "蒸发、融化反应造成的伤害+15%，超载、燃烧、烈绽放反应伤害+40%；施放元素战技后10秒内，2件套的效果提升50%，最多叠加3层",
          "flavor": "火系主C · 蒸发融化",
          "image": "/artifacts/xilie-yan-zhi-monv.png",
          "themeColor": "#e0604a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "28,000 – 32,000",
            "hint": "E 按生命上限转攻击"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "蒸发队精通收益高"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 200%",
            "hint": "护摩+暴伤头，双暴优先"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "胡桃是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "胡桃 E 后重击蒸发。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "行秋",
        "element": "水",
        "rarity": 4,
        "roleInTeam": "后台副C · 蒸发体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造蒸发条件",
        "summary": "Q 雨帘剑后台水+减伤回血，蒸发/绽放万金油四星。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：水伤% / 理之冠：暴击",
        "weapon": {
          "name": "祭礼剑",
          "displayName": "祭礼剑",
          "rarity": 5,
          "reason": "重置战技，双E回能",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "战技概率重置冷却，行秋/万叶常用。",
          "atk1": 41,
          "atk90": 454,
          "subStat": "元素充能效率",
          "subValue": "61.3%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "绝缘之旗印 4件套",
          "name": "绝缘之旗印",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "元素爆发造成的伤害提升，提升量相当于元素充能效率超出100%部分的25%，至多通过该效果提升75%",
          "flavor": "爆发流副C",
          "image": "/artifacts/jueyuan-zhiqinyin.png",
          "themeColor": "#8f7ee0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "190% – 220%",
            "hint": "Q 是挂水核心，充能第一优先"
          },
          {
            "label": "攻击力",
            "value": "1,500 – 1,800",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120%",
            "hint": "充能达标后补双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "行秋以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "行秋 Q 挂水"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 蒸发体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "保持「水底火触发」的附着顺序，反向蒸发会损失反应倍率",
          "挂水位优先保证 Q 覆盖率，充能优先级高于双暴",
          "本队以单体爆发为主，聚怪与站位会明显影响输出",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双水共鸣 · 提升生命与充能，缓解循环压力"
        ],
        "mySteps": [
          "钟离开盾减抗"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      }
    ]
  },
  "火主融化队": {
    "name": "火主融化队",
    "core": "融化 · 后台挂火",
    "tip": "钟离开盾保站场 → 班尼特 Q 加攻 → 旅行者·火 Q 火莲后台挂火 → 甘雨蓄力霜华矢连续融化。",
    "reaction": "融化",
    "resonance": "双火共鸣 · 攻击力提升，队内攻击加成收益更高",
    "themeColor": "#ff6f91",
    "rotation": [
      {
        "text": "钟离开盾保站场",
        "owners": [
          "钟离"
        ]
      },
      {
        "text": "班尼特 Q 加攻",
        "owners": [
          "班尼特"
        ]
      },
      {
        "text": "旅行者·火 Q 火莲后台挂火",
        "owners": [
          "旅行者·火"
        ]
      },
      {
        "text": "甘雨蓄力霜华矢连续融化。",
        "owners": [
          "甘雨"
        ]
      }
    ],
    "members": [
      {
        "name": "旅行者·火",
        "element": "火",
        "rarity": 5,
        "roleInTeam": "后台副C · 融化体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造融化条件",
        "summary": "与火元素共鸣，Q 火莲后台持续挂火，配合冰 / 水打融化与蒸发；纳塔火体系的功能副C。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：火伤% / 理之冠：暴击",
        "weapon": {
          "name": "雾切之回光",
          "displayName": "雾切之回光",
          "rarity": 5,
          "reason": "元素伤害加成与普攻增伤，火伤收益高",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "获得元素伤害加成，普攻命中叠层进一步提高元素伤害。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "锻造获取，精通副属性反应收益稳定",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "炽烈的炎之魔女 4件套",
          "name": "炽烈的炎之魔女",
          "twoPiece": "火元素伤害加成+15%",
          "fourPiece": "蒸发、融化反应造成的伤害+15%，超载、燃烧、烈绽放反应伤害+40%；施放元素战技后10秒内，2件套的效果提升50%，最多叠加3层",
          "flavor": "火系主C · 蒸发融化",
          "image": "/artifacts/xilie-yan-zhi-monv.png",
          "themeColor": "#e0604a",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "100 – 200",
            "hint": "融化倍率受精通影响"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "旅行者·火以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "旅行者·火 Q 火莲后台挂火"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "甘雨",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 融化体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「融化 · 后台挂火」打满爆发窗口",
        "summary": "重击霜华矢二段伤害，操作上限高，怕打断可带盾辅。",
        "talents": "普通攻击 > 元素爆发 > 元素战技",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "阿莫斯之弓",
          "displayName": "阿莫斯之弓",
          "rarity": 5,
          "reason": "蓄力箭增伤",
          "type": "弓",
          "stat": "副属性：攻击力",
          "desc": "普攻与瞄准射击伤害提升，箭矢飞行增伤。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "攻击力",
          "subValue": "49.6%"
        },
        "altWeapons": [
          {
            "name": "破魔之弓",
            "displayName": "破魔之弓",
            "rarity": 4,
            "reason": "满能量重击增伤",
            "type": "弓",
            "stat": "副属性：攻击力",
            "desc": "锻造获取，满能量重击增伤 32%。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "攻击力",
            "subValue": "41.3%"
          }
        ],
        "artifact": {
          "raw": "冰风迷途的勇士 4件套",
          "name": "冰风迷途的勇士",
          "twoPiece": "冰元素伤害加成+15%",
          "fourPiece": "攻击处于冰元素影响下的敌人时暴击率+20%；若敌人处于冻结状态，暴击率额外+20%",
          "flavor": "永冻冰C",
          "image": "/artifacts/bingfeng-mitu-yongshi.png",
          "themeColor": "#6fc7e8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "2,000 – 2,300",
            "hint": ""
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 200%",
            "hint": "永冻下暴击率需求可降低"
          },
          {
            "label": "元素精通",
            "value": "融化队 100 – 200",
            "hint": "纯永冻队可不堆"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "甘雨是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "甘雨蓄力霜华矢连续融化。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "班尼特",
        "element": "火",
        "rarity": 4,
        "roleInTeam": "治疗 / 续航位 · 融化体系",
        "type": "heal",
        "duty": "提供治疗与挂元素，维持队伍续航",
        "summary": "Q 领域大幅加攻+回血，六星战神，绝大多数队伍的增攻核心。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：充能% / 空之杯：生命% / 理之冠：治疗%",
        "weapon": {
          "name": "天空之刃",
          "displayName": "天空之刃",
          "rarity": 5,
          "reason": "高白值+充能，加攻最优",
          "type": "单手剑",
          "stat": "副属性：元素充能效率",
          "desc": "普攻与重击额外风伤，提升移速与攻击力。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素充能效率",
          "subValue": "55.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，辅助循环",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "宗室之仪 4件套",
          "name": "宗室之仪",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后，队伍中所有角色攻击力+20%，持续12秒（4 星版本）",
          "flavor": "早期增伤辅助",
          "image": "/artifacts/zongshi-zhiyi.png",
          "themeColor": "#7f9fe0",
          "matched": true
        },
        "panel": [
          {
            "label": "元素充能效率",
            "value": "200% – 240%",
            "hint": "Q 无缝覆盖是核心"
          },
          {
            "label": "基础攻击力（白值）",
            "value": "越高越好",
            "hint": "只吃武器白值+等级，不吃圣遗物攻击%"
          },
          {
            "label": "生命值",
            "value": "25,000+",
            "hint": "兼顾治疗量"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "班尼特负责治疗与续航，注意保持挂元素/治疗的持续时间。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "班尼特 Q 加攻"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      },
      {
        "name": "钟离",
        "element": "岩",
        "rarity": 5,
        "roleInTeam": "护盾 / 生存位 · 融化体系",
        "type": "shield",
        "duty": "提供护盾与抗打断，保障站场环境",
        "summary": "长按 E 玉璋护盾，全队减抗 20%，养成成本低，生命堆满即可。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：生命% / 空之杯：岩伤% / 理之冠：生命%",
        "weapon": {
          "name": "黑缨枪",
          "displayName": "黑缨枪",
          "rarity": 3,
          "reason": "生命%副属性，护盾拉满",
          "type": "长柄武器",
          "stat": "副属性：生命值",
          "desc": "对史莱姆类敌人增伤。",
          "atk1": 39,
          "atk90": 401,
          "subStat": "生命值",
          "subValue": "35.2%"
        },
        "altWeapons": [
          {
            "name": "贯虹之槊",
            "displayName": "贯虹之槊",
            "rarity": 5,
            "reason": "攻击提升盾伤与Q",
            "type": "长柄武器",
            "stat": "副属性：攻击力",
            "desc": "护盾下攻击力提升，效果翻倍。",
            "atk1": 46,
            "atk90": 608,
            "subStat": "攻击力",
            "subValue": "49.6%"
          }
        ],
        "artifact": {
          "raw": "千岩牢固 4件套",
          "name": "千岩牢固",
          "twoPiece": "生命值+20%",
          "fourPiece": "元素战技命中敌人后，使队伍中附近所有角色攻击力+20%、护盾强效+30%，持续3秒；装备者处于后台时依然能触发该效果",
          "flavor": "生命辅助 · 护盾",
          "image": "/artifacts/qianyan-laogu.png",
          "themeColor": "#d8b36a",
          "matched": true
        },
        "panel": [
          {
            "label": "生命值",
            "value": "35,000 – 45,000",
            "hint": "护盾厚度与 Q 伤害同源"
          },
          {
            "label": "元素充能效率",
            "value": "130% – 160%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "50% / 100%",
            "hint": "走副C流时再堆双暴"
          }
        ],
        "notes": [
          "融化倍率高于蒸发，但对冰/火附着顺序更敏感",
          "挂元素角色需覆盖主C的爆发窗口",
          "注意元素附着内置 CD，避免连续同元素吞反应",
          "钟离负责护盾与抗打断，护盾覆盖是主C安心站场的前提。",
          "队伍共鸣：双火共鸣 · 攻击力提升，队内攻击加成收益更高"
        ],
        "mySteps": [
          "钟离开盾保站场"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      }
    ]
  },
  "冰主星烁队": {
    "name": "冰主星烁队",
    "core": "星超导 · 星扩散双路线",
    "tip": "米提亚 Q 铺极星辉域 → 万叶扩散触发星扩散清群 → 奥黛塔后台挂冰增伤 → 旅行者·冰 站场星超导收割。",
    "reaction": "星超导",
    "resonance": "双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤",
    "themeColor": "#b39bff",
    "rotation": [
      {
        "text": "米提亚 Q 铺极星辉域",
        "owners": [
          "米提亚"
        ]
      },
      {
        "text": "万叶扩散触发星扩散清群",
        "owners": [
          "枫原万叶"
        ]
      },
      {
        "text": "奥黛塔后台挂冰增伤",
        "owners": [
          "奥黛塔"
        ]
      },
      {
        "text": "旅行者·冰 站场星超导收割。",
        "owners": [
          "旅行者·冰"
        ]
      }
    ],
    "members": [
      {
        "name": "旅行者·冰",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "站场主C · 星超导体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「星超导 · 星扩散双路线」打满爆发窗口",
        "summary": "7.0 至冬七天神像共鸣解锁冰元素：配雷走站场「星超导」、配风走后台「星扩散」；主线赠送五星专武「星锋剑」。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "星锋剑",
          "displayName": "星锋剑",
          "rarity": 5,
          "reason": "7.0 主线赠送专武，攻击/双暴/充能全面加成，随神像解锁层数强化",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "7.0 主线赠送的旅行者(冰)专武，攻击、双暴与充能全面加成，随至冬七天神像解锁层数强化。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "西风剑",
            "displayName": "西风剑",
            "rarity": 4,
            "reason": "充能副属性，速切循环更顺",
            "type": "单手剑",
            "stat": "副属性：元素充能效率",
            "desc": "暴击回能，帮助全队循环。",
            "atk1": 44,
            "atk90": 565,
            "subStat": "元素充能效率",
            "subValue": "30.6%"
          }
        ],
        "artifact": {
          "raw": "穹境示现之夜 4件套",
          "name": "穹境示现之夜",
          "twoPiece": "攻击力+18%",
          "fourPiece": "施放元素爆发后获得持续12秒的增伤与暴击率加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qiongjing-shixian-zhiye.png",
          "themeColor": "#8f9fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "150 – 300",
            "hint": "后台雷伤兼顾精通"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "星超导以后台雷伤为主，保持触发条件",
          "后台角色充能与精通都需兼顾",
          "注意新机制与传统超导的区别",
          "旅行者·冰是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "旅行者·冰 站场星超导收割。"
        ],
        "stepMine": [
          false,
          false,
          false,
          true
        ]
      },
      {
        "name": "米提亚",
        "element": "雷",
        "rarity": 5,
        "roleInTeam": "站场主C · 星超导体系",
        "type": "main",
        "duty": "承担本队主要输出，围绕「星超导 · 星扩散双路线」打满爆发窗口",
        "summary": "至冬星之楔雷法器角色，星烁反应体系输出。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：雷伤% / 理之冠：暴击",
        "weapon": {
          "name": "蝶变",
          "displayName": "蝶变",
          "rarity": 5,
          "reason": "星扩散体系输出",
          "type": "单手剑",
          "stat": "副属性：暴击率",
          "desc": "7.1 薇斯纳专武，触发星扩散后提升全队风伤与扩散伤害。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "暴击率",
          "subValue": "22.1%"
        },
        "altWeapons": [
          {
            "name": "流浪乐章",
            "displayName": "流浪乐章",
            "rarity": 4,
            "reason": "爆发增伤",
            "type": "法器",
            "stat": "副属性：暴击伤害",
            "desc": "上场随机增伤，爆发型法器。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "暴击伤害",
            "subValue": "55.1%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力 / 生命·防御主属性",
            "value": "1,800 – 2,300（或对应主属性 3万+）",
            "hint": "按角色吃攻击、生命还是防御决定"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "70% / 140% – 180%",
            "hint": "双暴 1:2 配比收益最优"
          },
          {
            "label": "元素精通",
            "value": "150 – 300",
            "hint": "后台雷伤兼顾精通"
          },
          {
            "label": "元素充能效率",
            "value": "110% – 140%",
            "hint": "站场主C充能需求较低"
          }
        ],
        "notes": [
          "星超导以后台雷伤为主，保持触发条件",
          "后台角色充能与精通都需兼顾",
          "注意新机制与传统超导的区别",
          "米提亚是本队站场核心，增伤与挂元素技能应优先服务于其爆发窗口。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "米提亚 Q 铺极星辉域"
        ],
        "stepMine": [
          true,
          false,
          false,
          false
        ]
      },
      {
        "name": "奥黛塔",
        "element": "冰",
        "rarity": 5,
        "roleInTeam": "后台副C · 星超导体系",
        "type": "sub",
        "duty": "后台脱手补伤害与挂元素，为主C创造星超导条件",
        "summary": "至冬首席芭蕾舞者，星之楔冰，后台触发星超导/星扩散，持续挂冰+星烁增伤。",
        "talents": "元素爆发 > 元素战技 > 普通攻击",
        "mainStats": "时之沙：攻击% / 空之杯：冰伤% / 理之冠：暴击",
        "weapon": {
          "name": "白湖冬羽",
          "displayName": "白湖冬羽",
          "rarity": 5,
          "reason": "专武，星烁反应增伤+回能",
          "type": "单手剑",
          "stat": "副属性：暴击伤害",
          "desc": "7.0 奥黛塔专武，提升冰伤与星烁反应伤害，后台挂冰时依然生效。",
          "atk1": 48,
          "atk90": 674,
          "subStat": "暴击伤害",
          "subValue": "44.1%"
        },
        "altWeapons": [
          {
            "name": "雾切之回光",
            "displayName": "雾切之回光",
            "rarity": 5,
            "reason": "元素伤加成替代",
            "type": "单手剑",
            "stat": "副属性：暴击伤害",
            "desc": "获得元素伤害加成，普攻命中叠层进一步提高元素伤害。",
            "atk1": 48,
            "atk90": 674,
            "subStat": "暴击伤害",
            "subValue": "44.1%"
          }
        ],
        "artifact": {
          "raw": "奇想乐章 4件套",
          "name": "奇想乐章",
          "twoPiece": "元素充能效率+20%",
          "fourPiece": "施放元素爆发后为队伍提供增伤与元素精通加成（版本较新，效果可在后台修正）",
          "flavor": "新版本套装 · 可修正",
          "image": "/artifacts/qixiang-yuezhang.png",
          "themeColor": "#b88fd8",
          "matched": true
        },
        "panel": [
          {
            "label": "攻击力",
            "value": "1,500 – 1,900",
            "hint": "后台输出基础"
          },
          {
            "label": "暴击率 / 暴击伤害",
            "value": "60% / 120% – 140%",
            "hint": "后台副C双暴"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 200%",
            "hint": "脱手 Q 循环刚需"
          },
          {
            "label": "元素精通",
            "value": "150 – 300",
            "hint": "后台雷伤兼顾精通"
          }
        ],
        "notes": [
          "星超导以后台雷伤为主，保持触发条件",
          "后台角色充能与精通都需兼顾",
          "注意新机制与传统超导的区别",
          "奥黛塔以脱手输出为主，Q 的覆盖与充能比对轴影响最大。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "奥黛塔后台挂冰增伤"
        ],
        "stepMine": [
          false,
          false,
          true,
          false
        ]
      },
      {
        "name": "枫原万叶",
        "element": "风",
        "rarity": 5,
        "roleInTeam": "增伤辅助 · 星超导体系",
        "type": "support",
        "duty": "上场铺垫增伤/减抗/聚怪，放大主C输出",
        "summary": "E 聚怪+扩散减抗，精通 800+ 全队增伤约 40%，泛用性极强。",
        "talents": "元素战技 > 元素爆发 > 普通攻击",
        "mainStats": "时之沙：精通 / 空之杯：精通 / 理之冠：精通",
        "weapon": {
          "name": "苍古自由之誓",
          "displayName": "苍古自由之誓",
          "rarity": 5,
          "reason": "精通+全队增伤",
          "type": "单手剑",
          "stat": "副属性：元素精通",
          "desc": "触发元素反应后全队普攻/重击伤害提升，持续 12s。",
          "atk1": 46,
          "atk90": 608,
          "subStat": "元素精通",
          "subValue": "198"
        },
        "altWeapons": [
          {
            "name": "铁蜂刺",
            "displayName": "铁蜂刺",
            "rarity": 4,
            "reason": "精通副属性",
            "type": "单手剑",
            "stat": "副属性：元素精通",
            "desc": "锻造获取，精通副属性，扩散收益稳定。",
            "atk1": 42,
            "atk90": 510,
            "subStat": "元素精通",
            "subValue": "165"
          }
        ],
        "artifact": {
          "raw": "翠绿之影 4件套",
          "name": "翠绿之影",
          "twoPiece": "风元素伤害加成+15%",
          "fourPiece": "扩散反应造成的伤害+60%；根据扩散的元素类型，降低受影响的敌人对应元素抗性40%，持续10秒",
          "flavor": "风系减抗辅助",
          "image": "/artifacts/cuilv-zhiying.png",
          "themeColor": "#4fc79b",
          "matched": true
        },
        "panel": [
          {
            "label": "元素精通",
            "value": "900 – 1,000",
            "hint": "扩散增伤按精通结算"
          },
          {
            "label": "元素充能效率",
            "value": "160% – 180%",
            "hint": "保证 Q 循环"
          },
          {
            "label": "暴击率（副C流）",
            "value": "60%",
            "hint": "精通达标后再考虑"
          }
        ],
        "notes": [
          "星超导以后台雷伤为主，保持触发条件",
          "后台角色充能与精通都需兼顾",
          "注意新机制与传统超导的区别",
          "枫原万叶提供增伤/减抗，需在主C上场前完成 buff 铺垫。",
          "队伍共鸣：双冰共鸣 · 攻击冻结/受冰影响敌人时暴击率提升，可适当降暴击堆暴伤"
        ],
        "mySteps": [
          "万叶扩散触发星扩散清群"
        ],
        "stepMine": [
          false,
          true,
          false,
          false
        ]
      }
    ]
  }
}
