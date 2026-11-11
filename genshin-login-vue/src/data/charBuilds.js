// ============================================================
// 角色圣遗物副词条优先级 / 毕业面板（130 位角色全覆盖）
// 由 gen_char_builds.mjs 生成，勿手工逐条改动
// 依据 homeData.js 的 mainStats / role / summary 做机制画像后逐人定制
// 数据优先来自 /api/home/char-builds（后台可维护），此文件为后端不可用时的兜底
// ============================================================

export const BUILD_NOTICE = "副词条优先级与毕业面板为攻略向整理（非游戏内技能原文），依据角色主词条依赖、定位与反应机制逐人定制；目标值为常见成型口径，实际以武器、圣遗物套装与队伍配置微调。可在后台管理系统逐条修改。"

export const SUBSTAT_TIERS = ["核心", "重要", "可用", "低收益"]

// { 角色名: { scale, category, role, list: [{ name, tier, reason, sortOrder }] } }
export const CHAR_SUBSTATS = {
  "迪卢克": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 蒸发",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "蒸发/融化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 蒸发）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 蒸发）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 蒸发）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "蒸发/融化 · 反应覆盖率高，精通提供额外增伤（主C · 蒸发）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 蒸发）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 蒸发）",
        "sortOrder": 6
      }
    ]
  },
  "可莉": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 站场）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 站场）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 站场）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 站场）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 站场）",
        "sortOrder": 5
      }
    ]
  },
  "胡桃": {
    "scale": "生命值%",
    "category": "直伤输出",
    "role": "主C · 蒸发",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "重击蒸发需稳定暴击，建议 70%+",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "护摩之杖下收益最高，建议 200%+",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "重要",
        "reason": "E 生命转化攻击，收益远高于攻击%",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "蒸发反应提供额外倍率，100~200 为宜",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "低收益",
        "reason": "生命转化机制下攻击%收益低",
        "sortOrder": 5
      }
    ]
  },
  "宵宫": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 普攻",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 普攻）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 普攻）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 普攻）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 普攻）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 普攻）",
        "sortOrder": 5
      }
    ]
  },
  "迪希雅": {
    "scale": "生命值%",
    "category": "直伤输出",
    "role": "副C · 减伤",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 减伤）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 减伤）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "重要",
        "reason": "技能与治疗/护盾随生命上限提升（副C · 减伤）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 减伤）",
        "sortOrder": 4
      },
      {
        "name": "生命值",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 减伤）",
        "sortOrder": 5
      }
    ]
  },
  "林尼": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 蓄力",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "蒸发/融化 · 套装已提供大量暴击率，堆到 55~60% 即可，优先补暴击伤害（主C · 蓄力）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 蓄力）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 蓄力）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "蒸发/融化 · 反应覆盖率高，精通提供额外增伤（主C · 蓄力）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 蓄力）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 蓄力）",
        "sortOrder": 6
      }
    ]
  },
  "阿蕾奇诺": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 战技",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "生命转化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 战技）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 战技）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 战技）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 战技）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 战技）",
        "sortOrder": 5
      }
    ]
  },
  "玛薇卡": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 火神",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 火神）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 火神）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 火神）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 火神）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 火神）",
        "sortOrder": 5
      }
    ]
  },
  "安柏": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 破盾",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 破盾）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 破盾）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 破盾）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 破盾）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 破盾）",
        "sortOrder": 5
      }
    ]
  },
  "班尼特": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "增攻 · 治疗",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "治疗量与护盾厚度按生命上限结算，最高优先（增攻 · 治疗）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（增攻 · 治疗）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（增攻 · 治疗）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（增攻 · 治疗）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（增攻 · 治疗）",
        "sortOrder": 5
      }
    ]
  },
  "香菱": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 后台火",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "蒸发/融化 · Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 后台火）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 后台火）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 后台火）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 后台火）",
        "sortOrder": 4
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "蒸发/融化 · 反应伤害提供额外收益（副C · 后台火）",
        "sortOrder": 5
      }
    ]
  },
  "辛焱": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "盾辅 · 物伤",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（盾辅 · 物伤）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（盾辅 · 物伤）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（盾辅 · 物伤）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（盾辅 · 物伤）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（盾辅 · 物伤）",
        "sortOrder": 5
      }
    ]
  },
  "烟绯": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 重击",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 重击）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 重击）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 重击）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 重击）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 重击）",
        "sortOrder": 5
      }
    ]
  },
  "嘉明": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 下落",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "蒸发/融化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 下落）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 下落）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 下落）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "蒸发/融化 · 反应覆盖率高，精通提供额外增伤（主C · 下落）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 下落）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 下落）",
        "sortOrder": 6
      }
    ]
  },
  "托马": {
    "scale": "生命值%",
    "category": "生命生存辅助",
    "role": "盾辅 · 挂火",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "蒸发/融化 · 护盾厚度 / 技能效果随生命上限提升，最高优先（盾辅 · 挂火）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（盾辅 · 挂火）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（盾辅 · 挂火）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 挂火）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 挂火）",
        "sortOrder": 5
      }
    ]
  },
  "夏沃蕾": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "增攻 · 奶",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "治疗量与护盾厚度按生命上限结算，最高优先（增攻 · 奶）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（增攻 · 奶）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（增攻 · 奶）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（增攻 · 奶）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（增攻 · 奶）",
        "sortOrder": 5
      }
    ]
  },
  "莫娜": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "增伤 · 控制",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "永冻 · Q 循环优先，达标前高于双暴（建议 180~220%）（增伤 · 控制）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（增伤 · 控制）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（增伤 · 控制）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（增伤 · 控制）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（增伤 · 控制）",
        "sortOrder": 5
      }
    ]
  },
  "达达利亚": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 断流",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "蒸发/融化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 断流）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 断流）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 断流）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "蒸发/融化 · 反应覆盖率高，精通提供额外增伤（主C · 断流）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 断流）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 断流）",
        "sortOrder": 6
      }
    ]
  },
  "珊瑚宫心海": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 挂水",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "绽放 / 永冻 · 治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 挂水）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 挂水）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 挂水）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂水）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂水）",
        "sortOrder": 5
      }
    ]
  },
  "神里绫人": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 站场）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 站场）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 站场）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 站场）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 站场）",
        "sortOrder": 5
      }
    ]
  },
  "夜兰": {
    "scale": "生命值%",
    "category": "直伤输出",
    "role": "副C · 增伤",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 增伤）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 增伤）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "重要",
        "reason": "技能与治疗/护盾随生命上限提升（副C · 增伤）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 增伤）",
        "sortOrder": 4
      },
      {
        "name": "生命值",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 增伤）",
        "sortOrder": 5
      }
    ]
  },
  "妮露": {
    "scale": "生命值%",
    "category": "生命生存辅助",
    "role": "绽放核心",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "丰穰之核伤害按生命上限结算，建议 5.5 万+",
        "sortOrder": 1
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "绽放反应补充收益",
        "sortOrder": 2
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "Q 循环够用即可",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "丰穰之核不吃双暴",
        "sortOrder": 4
      }
    ]
  },
  "那维莱特": {
    "scale": "生命值%",
    "category": "直伤输出",
    "role": "主C · 重击",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "套装已提供大量暴击率，堆到 55~60% 即可，优先补暴击伤害（主C · 重击）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 重击）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "重要",
        "reason": "技能与治疗/护盾随生命上限提升（主C · 重击）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 重击）",
        "sortOrder": 4
      },
      {
        "name": "生命值",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 重击）",
        "sortOrder": 5
      }
    ]
  },
  "芙宁娜": {
    "scale": "生命值%",
    "category": "直伤输出",
    "role": "增伤辅 · 后台水",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "绽放 · 双暴按 1:2 配比，建议 65~75% 暴击率（增伤辅 · 后台水）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（增伤辅 · 后台水）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "重要",
        "reason": "技能与治疗/护盾随生命上限提升（增伤辅 · 后台水）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "绽放 · 反应覆盖率高，精通提供额外增伤（增伤辅 · 后台水）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（增伤辅 · 后台水）",
        "sortOrder": 5
      },
      {
        "name": "生命值",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（增伤辅 · 后台水）",
        "sortOrder": 6
      }
    ]
  },
  "希格雯": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 副C",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 副C）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 副C）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 副C）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 副C）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 副C）",
        "sortOrder": 5
      }
    ]
  },
  "玛拉妮": {
    "scale": "生命值%",
    "category": "直伤输出",
    "role": "主C · 蒸发",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "蒸发/融化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 蒸发）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 蒸发）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "重要",
        "reason": "技能与治疗/护盾随生命上限提升（主C · 蒸发）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "蒸发/融化 · 反应覆盖率高，精通提供额外增伤（主C · 蒸发）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 蒸发）",
        "sortOrder": 5
      },
      {
        "name": "生命值",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 蒸发）",
        "sortOrder": 6
      }
    ]
  },
  "芭芭拉": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 挂水",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 挂水）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 挂水）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 挂水）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂水）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂水）",
        "sortOrder": 5
      }
    ]
  },
  "塔利雅": {
    "scale": "生命值%",
    "category": "生命生存辅助",
    "role": "盾辅 · 挂水",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "护盾厚度 / 技能效果随生命上限提升，最高优先（盾辅 · 挂水）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（盾辅 · 挂水）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（盾辅 · 挂水）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 挂水）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 挂水）",
        "sortOrder": 5
      }
    ]
  },
  "行秋": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 减伤",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "蒸发/融化 / 绽放 · Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 减伤）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 减伤）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 减伤）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 减伤）",
        "sortOrder": 4
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "蒸发/融化 / 绽放 · 反应伤害提供额外收益（副C · 减伤）",
        "sortOrder": 5
      }
    ]
  },
  "坎蒂丝": {
    "scale": "生命值%",
    "category": "生命生存辅助",
    "role": "盾辅 · 附魔",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "护盾厚度 / 技能效果随生命上限提升，最高优先（盾辅 · 附魔）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（盾辅 · 附魔）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（盾辅 · 附魔）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 附魔）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 附魔）",
        "sortOrder": 5
      }
    ]
  },
  "爱诺": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 挂水",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "月反应 · Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 挂水）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 挂水）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 挂水）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 挂水）",
        "sortOrder": 4
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "月反应 · 反应伤害提供额外收益（副C · 挂水）",
        "sortOrder": 5
      }
    ]
  },
  "刻晴": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 激化",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "激化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 激化）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 激化）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 激化）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "激化 · 反应覆盖率高，精通提供额外增伤（主C · 激化）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 激化）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 激化）",
        "sortOrder": 6
      }
    ]
  },
  "雷电将军": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "主C · 充能辅",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "Q「梦想一心」伤害随充能提升，绝缘 4 件套建议 250%+",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "充能达标后的第一优先级，建议 65%+",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直伤部分基础白值",
        "sortOrder": 4
      },
      {
        "name": "元素精通",
        "tier": "低收益",
        "reason": "非反应队，精通收益低",
        "sortOrder": 5
      }
    ]
  },
  "八重神子": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 杀生樱",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "激化 · 双暴按 1:2 配比，建议 65~75% 暴击率（副C · 杀生樱）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 杀生樱）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 杀生樱）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "激化 · 反应覆盖率高，精通提供额外增伤（副C · 杀生樱）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 杀生樱）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 杀生樱）",
        "sortOrder": 6
      }
    ]
  },
  "赛诺": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "主C · 激化",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "激化 · 反应伤害随精通提升，主词条已锁精通，副词条继续补（主C · 激化）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 激化）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（主C · 激化）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（主C · 激化）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（主C · 激化）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（主C · 激化）",
        "sortOrder": 6
      }
    ]
  },
  "克洛琳德": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 突进",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "激化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 突进）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 突进）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 突进）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "激化 · 反应覆盖率高，精通提供额外增伤（主C · 突进）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 突进）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 突进）",
        "sortOrder": 6
      }
    ]
  },
  "瓦蕾莎": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 站场）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 站场）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 站场）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 站场）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 站场）",
        "sortOrder": 5
      }
    ]
  },
  "伊涅芙": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "辅助 · 月感电",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "月反应 · Q 循环优先，达标前高于双暴（建议 180~220%）（辅助 · 月感电）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（辅助 · 月感电）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（辅助 · 月感电）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（辅助 · 月感电）",
        "sortOrder": 4
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "月反应 · 反应伤害提供额外收益（辅助 · 月感电）",
        "sortOrder": 5
      }
    ]
  },
  "菲林斯": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 月感电",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "月反应 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 月感电）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 月感电）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 月感电）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "月反应 · 反应覆盖率高，精通提供额外增伤（主C · 月感电）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 月感电）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 月感电）",
        "sortOrder": 6
      }
    ]
  },
  "丽莎": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "副C · 破防",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "反应伤害随精通提升，主词条已锁精通，副词条继续补（副C · 破防）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 破防）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（副C · 破防）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（副C · 破防）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（副C · 破防）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（副C · 破防）",
        "sortOrder": 6
      }
    ]
  },
  "雷泽": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 物理",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 物理）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 物理）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 物理）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 物理）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 物理）",
        "sortOrder": 5
      }
    ]
  },
  "菲谢尔": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 奥兹",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "激化 · 双暴按 1:2 配比，建议 65~75% 暴击率（副C · 奥兹）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 奥兹）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 奥兹）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "激化 · 反应覆盖率高，精通提供额外增伤（副C · 奥兹）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 奥兹）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 奥兹）",
        "sortOrder": 6
      }
    ]
  },
  "北斗": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 反击",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 反击）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 反击）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 反击）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 反击）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 反击）",
        "sortOrder": 5
      }
    ]
  },
  "九条裟罗": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "增攻 · 副C",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "Q 循环优先，达标前高于双暴（建议 180~220%）（增攻 · 副C）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（增攻 · 副C）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（增攻 · 副C）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（增攻 · 副C）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（增攻 · 副C）",
        "sortOrder": 5
      }
    ]
  },
  "久岐忍": {
    "scale": "元素精通",
    "category": "生命治疗",
    "role": "治疗 · 挂雷",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "超绽放伤害按精通结算，建议 900+",
        "sortOrder": 1
      },
      {
        "name": "生命值%",
        "tier": "重要",
        "reason": "E 治疗量按生命上限结算",
        "sortOrder": 2
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 E 覆盖",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "绽放反应不吃双暴",
        "sortOrder": 4
      }
    ]
  },
  "多莉": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 充能",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 充能）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 充能）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 充能）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 充能）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 充能）",
        "sortOrder": 5
      }
    ]
  },
  "赛索斯": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "主C · 蓄力",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "激化 · 反应伤害随精通提升，主词条已锁精通，副词条继续补（主C · 蓄力）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 蓄力）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（主C · 蓄力）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（主C · 蓄力）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（主C · 蓄力）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（主C · 蓄力）",
        "sortOrder": 6
      }
    ]
  },
  "欧洛伦": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 夜魂",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 夜魂）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 夜魂）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 夜魂）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 夜魂）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 夜魂）",
        "sortOrder": 5
      }
    ]
  },
  "伊安珊": {
    "scale": "生命值%",
    "category": "生命生存辅助",
    "role": "辅助 · 增攻",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "护盾厚度 / 技能效果随生命上限提升，最高优先（辅助 · 增攻）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（辅助 · 增攻）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（辅助 · 增攻）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（辅助 · 增攻）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（辅助 · 增攻）",
        "sortOrder": 5
      }
    ]
  },
  "七七": {
    "scale": "攻击力%",
    "category": "攻击治疗",
    "role": "治疗 · 挂冰",
    "list": [
      {
        "name": "攻击力%",
        "tier": "核心",
        "reason": "治疗量按攻击力结算，攻击%收益最高",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "Q 循环刚需，建议 160~180%",
        "sortOrder": 2
      },
      {
        "name": "攻击力",
        "tier": "可用",
        "reason": "固定攻击作补充",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴",
        "sortOrder": 4
      }
    ]
  },
  "甘雨": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 蓄力狙",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "套装已提供大量暴击率，堆到 55~60% 即可，优先补暴击伤害（主C · 蓄力狙）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 蓄力狙）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 蓄力狙）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 蓄力狙）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 蓄力狙）",
        "sortOrder": 5
      }
    ]
  },
  "优菈": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 物理",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 物理）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 物理）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 物理）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "反应覆盖率高，精通提供额外增伤（主C · 物理）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 物理）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 物理）",
        "sortOrder": 6
      }
    ]
  },
  "神里绫华": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 永冻",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "永冻 · 套装已提供大量暴击率，堆到 55~60% 即可，优先补暴击伤害（主C · 永冻）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 永冻）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 永冻）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 永冻）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 永冻）",
        "sortOrder": 5
      }
    ]
  },
  "申鹤": {
    "scale": "攻击力%",
    "category": "攻击增益辅助",
    "role": "冰辅 · 增伤",
    "list": [
      {
        "name": "攻击力%",
        "tier": "核心",
        "reason": "E 冰翎增伤按自身攻击力结算，攻击越高拐力越强",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "name": "攻击力",
        "tier": "可用",
        "reason": "固定攻击作补充",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位冰拐，不靠自身直伤",
        "sortOrder": 4
      }
    ]
  },
  "莱欧斯利": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "套装已提供大量暴击率，堆到 55~60% 即可，优先补暴击伤害（主C · 站场）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 站场）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 站场）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 站场）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 站场）",
        "sortOrder": 5
      }
    ]
  },
  "茜特菈莉": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "盾辅 · 减抗",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "Q 循环优先，达标前高于双暴（建议 180~220%）（盾辅 · 减抗）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（盾辅 · 减抗）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（盾辅 · 减抗）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（盾辅 · 减抗）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（盾辅 · 减抗）",
        "sortOrder": 5
      }
    ]
  },
  "爱可菲": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "冰辅 · 减抗",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（冰辅 · 减抗）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（冰辅 · 减抗）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（冰辅 · 减抗）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（冰辅 · 减抗）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（冰辅 · 减抗）",
        "sortOrder": 5
      }
    ]
  },
  "丝柯克": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 冰水强队",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 冰水强队）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 冰水强队）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 冰水强队）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 冰水强队）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 冰水强队）",
        "sortOrder": 5
      }
    ]
  },
  "凯亚": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 挂冰",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "永冻 · Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 挂冰）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "套装已提供大量暴击率，堆到 55~60% 即可，优先补暴击伤害（副C · 挂冰）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 挂冰）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 挂冰）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 挂冰）",
        "sortOrder": 5
      }
    ]
  },
  "迪奥娜": {
    "scale": "生命值%",
    "category": "生命生存辅助",
    "role": "盾辅 · 治疗",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "护盾厚度 / 技能效果随生命上限提升，最高优先（盾辅 · 治疗）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（盾辅 · 治疗）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（盾辅 · 治疗）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 治疗）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 治疗）",
        "sortOrder": 5
      }
    ]
  },
  "罗莎莉亚": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 暴击",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "永冻 · Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 暴击）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 暴击）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 暴击）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 暴击）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 暴击）",
        "sortOrder": 5
      }
    ]
  },
  "米卡": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 攻速",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 攻速）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 攻速）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 攻速）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 攻速）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 攻速）",
        "sortOrder": 5
      }
    ]
  },
  "重云": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 附魔",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "套装已提供大量暴击率，堆到 55~60% 即可，优先补暴击伤害（副C · 附魔）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 附魔）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 附魔）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 附魔）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 附魔）",
        "sortOrder": 5
      }
    ]
  },
  "莱依拉": {
    "scale": "生命值%",
    "category": "生命生存辅助",
    "role": "盾辅 · 挂冰",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "永冻 · 护盾厚度 / 技能效果随生命上限提升，最高优先（盾辅 · 挂冰）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（盾辅 · 挂冰）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（盾辅 · 挂冰）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 挂冰）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 挂冰）",
        "sortOrder": 5
      }
    ]
  },
  "菲米尼": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 物伤",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 物伤）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 物伤）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 物伤）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "反应覆盖率高，精通提供额外增伤（主C · 物伤）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 物伤）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 物伤）",
        "sortOrder": 6
      }
    ]
  },
  "夏洛蒂": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 挂冰",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "永冻 · 治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 挂冰）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 挂冰）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 挂冰）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂冰）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂冰）",
        "sortOrder": 5
      }
    ]
  },
  "琴": {
    "scale": "攻击力%",
    "category": "攻击治疗",
    "role": "治疗 · 聚怪",
    "list": [
      {
        "name": "攻击力%",
        "tier": "核心",
        "reason": "Q 领域治疗量按攻击力结算",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "name": "攻击力",
        "tier": "可用",
        "reason": "固定攻击作补充",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "扩散反应补充收益",
        "sortOrder": 4
      }
    ]
  },
  "温迪": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "聚怪 · 充能辅",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "扩散 · 反应伤害随精通提升，主词条已锁精通，副词条继续补（聚怪 · 充能辅）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（聚怪 · 充能辅）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（聚怪 · 充能辅）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（聚怪 · 充能辅）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（聚怪 · 充能辅）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（聚怪 · 充能辅）",
        "sortOrder": 6
      }
    ]
  },
  "魈": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 下落",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 下落）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 下落）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 下落）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 下落）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 下落）",
        "sortOrder": 5
      }
    ]
  },
  "枫原万叶": {
    "scale": "元素精通",
    "category": "精通辅助",
    "role": "聚怪 · 增伤辅",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "扩散伤害与全队元素增伤按精通结算，建议 900+",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~180%",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直伤占比低，作补充",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "扩散不吃双暴",
        "sortOrder": 4
      }
    ]
  },
  "流浪者": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "扩散 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 站场）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 站场）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 站场）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 站场）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 站场）",
        "sortOrder": 5
      }
    ]
  },
  "闲云": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "增伤 · 下落辅",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "扩散 · 双暴按 1:2 配比，建议 65~75% 暴击率（增伤 · 下落辅）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（增伤 · 下落辅）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（增伤 · 下落辅）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（增伤 · 下落辅）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（增伤 · 下落辅）",
        "sortOrder": 5
      }
    ]
  },
  "恰斯卡": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 多元素",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 多元素）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 多元素）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 多元素）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 多元素）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 多元素）",
        "sortOrder": 5
      }
    ]
  },
  "梦见月瑞希": {
    "scale": "元素精通",
    "category": "精通辅助",
    "role": "辅助 · 治疗",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "扩散 · 扩散伤害与全队元素增伤按精通结算，堆到 800+ 收益最高（辅助 · 治疗）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~180%（辅助 · 治疗）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "可用",
        "reason": "兼顾生存与治疗量，副词条中的补充项（辅助 · 治疗）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（辅助 · 治疗）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（辅助 · 治疗）",
        "sortOrder": 5
      }
    ]
  },
  "砂糖": {
    "scale": "元素精通",
    "category": "精通辅助",
    "role": "增伤 · 聚怪",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "扩散 · 扩散伤害与全队元素增伤按精通结算，堆到 800+ 收益最高（增伤 · 聚怪）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~180%（增伤 · 聚怪）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "可用",
        "reason": "兼顾生存与治疗量，副词条中的补充项（增伤 · 聚怪）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（增伤 · 聚怪）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（增伤 · 聚怪）",
        "sortOrder": 5
      }
    ]
  },
  "蓝砚": {
    "scale": "元素精通",
    "category": "精通辅助",
    "role": "盾辅 · 挂风",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "扩散 · 扩散伤害与全队元素增伤按精通结算，堆到 800+ 收益最高（盾辅 · 挂风）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~180%（盾辅 · 挂风）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "可用",
        "reason": "兼顾生存与治疗量，副词条中的补充项（盾辅 · 挂风）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（盾辅 · 挂风）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（盾辅 · 挂风）",
        "sortOrder": 5
      }
    ]
  },
  "鹿野院平藏": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 拳法",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 拳法）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 拳法）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 拳法）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 拳法）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 拳法）",
        "sortOrder": 5
      }
    ]
  },
  "早柚": {
    "scale": "攻击力%",
    "category": "攻击治疗",
    "role": "治疗 · 滚地",
    "list": [
      {
        "name": "攻击力%",
        "tier": "核心",
        "reason": "治疗量按攻击力结算，攻击%收益最高（治疗 · 滚地）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~180%（治疗 · 滚地）",
        "sortOrder": 2
      },
      {
        "name": "攻击力",
        "tier": "可用",
        "reason": "固定攻击作补充，收益低于百分比词条（治疗 · 滚地）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "反应队可作补充，非治疗刚需（治疗 · 滚地）",
        "sortOrder": 4
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，低优先级（治疗 · 滚地）",
        "sortOrder": 5
      }
    ]
  },
  "珐露珊": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "增伤 · 风拐",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "扩散 · Q 循环优先，达标前高于双暴（建议 180~220%）（增伤 · 风拐）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（增伤 · 风拐）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（增伤 · 风拐）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（增伤 · 风拐）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（增伤 · 风拐）",
        "sortOrder": 5
      }
    ]
  },
  "琳妮特": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 挂风",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 挂风）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 挂风）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 挂风）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 挂风）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 挂风）",
        "sortOrder": 5
      }
    ]
  },
  "伊法": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "辅助 · 治疗",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "扩散 · Q 循环优先，达标前高于双暴（建议 180~220%）（辅助 · 治疗）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（辅助 · 治疗）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（辅助 · 治疗）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（辅助 · 治疗）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（辅助 · 治疗）",
        "sortOrder": 5
      }
    ]
  },
  "雅珂达": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 挂风",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "扩散 · Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 挂风）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 挂风）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 挂风）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 挂风）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 挂风）",
        "sortOrder": 5
      }
    ]
  },
  "钟离": {
    "scale": "生命值%",
    "category": "生命生存辅助",
    "role": "盾辅 · 减抗",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "护盾厚度 / 技能效果随生命上限提升，最高优先（盾辅 · 减抗）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（盾辅 · 减抗）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（盾辅 · 减抗）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 减抗）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（盾辅 · 减抗）",
        "sortOrder": 5
      }
    ]
  },
  "阿贝多": {
    "scale": "防御力%",
    "category": "直伤输出",
    "role": "副C · 后台",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 后台）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 后台）",
        "sortOrder": 2
      },
      {
        "name": "防御力%",
        "tier": "重要",
        "reason": "技能效果随防御力提升（副C · 后台）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 后台）",
        "sortOrder": 4
      },
      {
        "name": "防御力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 后台）",
        "sortOrder": 5
      }
    ]
  },
  "荒泷一斗": {
    "scale": "防御力%",
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "防御转化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 站场）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 站场）",
        "sortOrder": 2
      },
      {
        "name": "防御力%",
        "tier": "重要",
        "reason": "防御转化攻击机制，收益远高于攻击%（主C · 站场）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 站场）",
        "sortOrder": 4
      },
      {
        "name": "防御力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 站场）",
        "sortOrder": 5
      }
    ]
  },
  "娜维娅": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 结晶弹片",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 结晶弹片）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 结晶弹片）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 结晶弹片）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 结晶弹片）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 结晶弹片）",
        "sortOrder": 5
      }
    ]
  },
  "千织": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 后台",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 后台）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 后台）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 后台）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 后台）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 后台）",
        "sortOrder": 5
      }
    ]
  },
  "希诺宁": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "辅助 · 减抗",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "Q 循环优先，达标前高于双暴（建议 180~220%）（辅助 · 减抗）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（辅助 · 减抗）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（辅助 · 减抗）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（辅助 · 减抗）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（辅助 · 减抗）",
        "sortOrder": 5
      }
    ]
  },
  "诺艾尔": {
    "scale": "防御力%",
    "category": "直伤输出",
    "role": "盾辅 · 奶",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "防御转化 · 双暴按 1:2 配比，建议 65~75% 暴击率（盾辅 · 奶）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（盾辅 · 奶）",
        "sortOrder": 2
      },
      {
        "name": "防御力%",
        "tier": "重要",
        "reason": "防御转化攻击机制，收益远高于攻击%（盾辅 · 奶）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（盾辅 · 奶）",
        "sortOrder": 4
      },
      {
        "name": "防御力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（盾辅 · 奶）",
        "sortOrder": 5
      }
    ]
  },
  "凝光": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 重击",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 重击）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 重击）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 重击）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 重击）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 重击）",
        "sortOrder": 5
      }
    ]
  },
  "云堇": {
    "scale": "防御力%",
    "category": "防御辅助",
    "role": "增伤 · 普攻拐",
    "list": [
      {
        "name": "防御力%",
        "tier": "核心",
        "reason": "增伤 / 技能效果随防御力提升，最高优先（增伤 · 普攻拐）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 170~200%（增伤 · 普攻拐）",
        "sortOrder": 2
      },
      {
        "name": "防御力",
        "tier": "可用",
        "reason": "固定防御作补充，收益低于百分比词条（增伤 · 普攻拐）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位为防御辅助，双暴收益低（增伤 · 普攻拐）",
        "sortOrder": 4
      }
    ]
  },
  "五郎": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "增伤 · 岩拐",
    "list": [
      {
        "name": "防御力%",
        "tier": "核心",
        "reason": "E 大将旗指物按防御提供增益，纯岩队拐力核心",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "Q 循环刚需，建议 180~200%",
        "sortOrder": 2
      },
      {
        "name": "防御力",
        "tier": "可用",
        "reason": "固定防御作补充",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位岩拐，不靠自身直伤",
        "sortOrder": 4
      }
    ]
  },
  "卡齐娜": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "辅助 · 岩拐",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "Q 循环优先，达标前高于双暴（建议 180~220%）（辅助 · 岩拐）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（辅助 · 岩拐）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（辅助 · 岩拐）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（辅助 · 岩拐）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（辅助 · 岩拐）",
        "sortOrder": 5
      }
    ]
  },
  "叶洛亚": {
    "scale": "生命值%",
    "category": "生命生存辅助",
    "role": "辅助 · 岩拐",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "护盾厚度 / 技能效果随生命上限提升，最高优先（辅助 · 岩拐）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（辅助 · 岩拐）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（辅助 · 岩拐）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（辅助 · 岩拐）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "定位为生命生存辅助，双暴收益低（辅助 · 岩拐）",
        "sortOrder": 5
      }
    ]
  },
  "提纳里": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "主C · 激化",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "激化 · 反应伤害随精通提升，主词条已锁精通，副词条继续补（主C · 激化）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 激化）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（主C · 激化）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（主C · 激化）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（主C · 激化）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（主C · 激化）",
        "sortOrder": 6
      }
    ]
  },
  "纳西妲": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "副C · 草辅",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "激化 / 绽放 · 反应伤害随精通提升，主词条已锁精通，副词条继续补（副C · 草辅）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 草辅）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（副C · 草辅）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（副C · 草辅）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（副C · 草辅）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（副C · 草辅）",
        "sortOrder": 6
      }
    ]
  },
  "艾尔海森": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "主C · 站场",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "激化 · 反应伤害随精通提升，主词条已锁精通，副词条继续补（主C · 站场）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 站场）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（主C · 站场）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（主C · 站场）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（主C · 站场）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（主C · 站场）",
        "sortOrder": 6
      }
    ]
  },
  "白术": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 挂草",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "激化 / 绽放 · 治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 挂草）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 挂草）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 挂草）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂草）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂草）",
        "sortOrder": 5
      }
    ]
  },
  "艾梅莉埃": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 后台草",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "激化 / 燃烧 · 双暴按 1:2 配比，建议 65~75% 暴击率（副C · 后台草）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 后台草）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 后台草）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "激化 / 燃烧 · 反应覆盖率高，精通提供额外增伤（副C · 后台草）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 后台草）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 后台草）",
        "sortOrder": 6
      }
    ]
  },
  "基尼奇": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 燃烧",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "燃烧 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 燃烧）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 燃烧）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 燃烧）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "燃烧 · 反应覆盖率高，精通提供额外增伤（主C · 燃烧）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 燃烧）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 燃烧）",
        "sortOrder": 6
      }
    ]
  },
  "菈乌玛": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "月绽放 · 核心辅",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "绽放 / 月反应 · 反应伤害随精通提升，主词条已锁精通，副词条继续补（月绽放 · 核心辅）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（月绽放 · 核心辅）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（月绽放 · 核心辅）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（月绽放 · 核心辅）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（月绽放 · 核心辅）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（月绽放 · 核心辅）",
        "sortOrder": 6
      }
    ]
  },
  "奈芙尔": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "月绽放 · 站场主C",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "绽放 / 月反应 · 反应伤害随精通提升，主词条已锁精通，副词条继续补（月绽放 · 站场主C）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（月绽放 · 站场主C）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（月绽放 · 站场主C）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（月绽放 · 站场主C）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（月绽放 · 站场主C）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（月绽放 · 站场主C）",
        "sortOrder": 6
      }
    ]
  },
  "瑶瑶": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 挂草",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "激化 · 治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 挂草）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 挂草）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 挂草）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂草）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂草）",
        "sortOrder": 5
      }
    ]
  },
  "柯莱": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 挂草",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "激化 / 绽放 · Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 挂草）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 挂草）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 挂草）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 挂草）",
        "sortOrder": 4
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "激化 / 绽放 · 反应伤害提供额外收益（副C · 挂草）",
        "sortOrder": 5
      }
    ]
  },
  "卡维": {
    "scale": "元素精通",
    "category": "精通反应输出",
    "role": "主C · 绽放",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "绽放 · 反应伤害随精通提升，主词条已锁精通，副词条继续补（主C · 绽放）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 绽放）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比（主C · 绽放）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "长轴站场角色需保证 Q 循环，建议 130~150%（主C · 绽放）",
        "sortOrder": 4
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "技能直伤部分的补充收益（主C · 绽放）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益最低（主C · 绽放）",
        "sortOrder": 6
      }
    ]
  },
  "绮良良": {
    "scale": "元素精通",
    "category": "精通辅助",
    "role": "盾辅 · 挂草",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "激化 · 绽放/激化反应伤害按精通结算，堆到 800+ 收益最高（盾辅 · 挂草）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~180%（盾辅 · 挂草）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "可用",
        "reason": "兼顾生存与治疗量，副词条中的补充项（盾辅 · 挂草）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（盾辅 · 挂草）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（盾辅 · 挂草）",
        "sortOrder": 5
      }
    ]
  },
  "法尔伽": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 双持",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 双持）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 双持）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 双持）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 双持）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 双持）",
        "sortOrder": 5
      }
    ]
  },
  "尼可": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "后台辅 · 护盾",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（后台辅 · 护盾）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（后台辅 · 护盾）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（后台辅 · 护盾）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（后台辅 · 护盾）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（后台辅 · 护盾）",
        "sortOrder": 5
      }
    ]
  },
  "杜林": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 燃烧",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "燃烧 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 燃烧）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 燃烧）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 燃烧）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "燃烧 · 反应覆盖率高，精通提供额外增伤（主C · 燃烧）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 燃烧）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 燃烧）",
        "sortOrder": 6
      }
    ]
  },
  "兹白": {
    "scale": "防御力%",
    "category": "直伤输出",
    "role": "主C · 月结晶",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "月反应 / 防御转化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 月结晶）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 月结晶）",
        "sortOrder": 2
      },
      {
        "name": "防御力%",
        "tier": "重要",
        "reason": "防御转化攻击机制，收益远高于攻击%（主C · 月结晶）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "月反应 / 防御转化 · 反应覆盖率高，精通提供额外增伤（主C · 月结晶）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 月结晶）",
        "sortOrder": 5
      },
      {
        "name": "防御力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 月结晶）",
        "sortOrder": 6
      }
    ]
  },
  "洛恩": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 站场）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 站场）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 站场）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 站场）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 站场）",
        "sortOrder": 5
      }
    ]
  },
  "布伦妮": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 扩散",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "扩散 · 双暴按 1:2 配比，建议 65~75% 暴击率（副C · 扩散）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 扩散）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 扩散）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 扩散）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 扩散）",
        "sortOrder": 5
      }
    ]
  },
  "奥黛塔": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 星超导",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 星超导）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 星超导）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 星超导）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "反应覆盖率高，精通提供额外增伤（副C · 星超导）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 星超导）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 星超导）",
        "sortOrder": 6
      }
    ]
  },
  "阿罗夏": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 挂雷",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 挂雷）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 挂雷）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 挂雷）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂雷）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 挂雷）",
        "sortOrder": 5
      }
    ]
  },
  "薇斯纳": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 星扩散",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "扩散 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 星扩散）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 星扩散）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 星扩散）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 星扩散）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 星扩散）",
        "sortOrder": 5
      }
    ]
  },
  "沃雅妮莎": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "治疗 · 辅助",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "永冻 · 治疗量与护盾厚度按生命上限结算，最高优先（治疗 · 辅助）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（治疗 · 辅助）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（治疗 · 辅助）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 辅助）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（治疗 · 辅助）",
        "sortOrder": 5
      }
    ]
  },
  "米提亚": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 星之楔",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 星之楔）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 星之楔）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 星之楔）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 星之楔）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 星之楔）",
        "sortOrder": 5
      }
    ]
  },
  "瓦列里": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "副C · 挂雷",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "Q 循环优先，达标前高于双暴（建议 180~220%）（副C · 挂雷）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 挂雷）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（副C · 挂雷）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（副C · 挂雷）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 挂雷）",
        "sortOrder": 5
      }
    ]
  },
  "哥伦比娅": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 月反应核心",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "绽放 / 月反应 · 双暴按 1:2 配比，建议 65~75% 暴击率（副C · 月反应核心）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 月反应核心）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 月反应核心）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "绽放 / 月反应 · 反应覆盖率高，精通提供额外增伤（副C · 月反应核心）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 月反应核心）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 月反应核心）",
        "sortOrder": 6
      }
    ]
  },
  "莉奈娅": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 结晶狙击",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 结晶狙击）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 结晶狙击）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 结晶狙击）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 结晶狙击）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 结晶狙击）",
        "sortOrder": 5
      }
    ]
  },
  "桑多涅": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 后台挂冰",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "永冻 · 双暴按 1:2 配比，建议 65~75% 暴击率（副C · 后台挂冰）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 后台挂冰）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 后台挂冰）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 后台挂冰）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 后台挂冰）",
        "sortOrder": 5
      }
    ]
  },
  "艾莉丝": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 火法站场",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "蒸发/融化 · 双暴按 1:2 配比，建议 65~75% 暴击率（主C · 火法站场）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 火法站场）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 火法站场）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "蒸发/融化 · 反应覆盖率高，精通提供额外增伤（主C · 火法站场）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 火法站场）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 火法站场）",
        "sortOrder": 6
      }
    ]
  },
  "埃洛伊": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 冰弓",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "蒸发/融化 / 永冻 · 套装已提供大量暴击率，堆到 55~60% 即可，优先补暴击伤害（主C · 冰弓）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 冰弓）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 冰弓）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "蒸发/融化 / 永冻 · 反应覆盖率高，精通提供额外增伤（主C · 冰弓）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 冰弓）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 冰弓）",
        "sortOrder": 6
      }
    ]
  },
  "旅行者·风": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 聚怪扩散",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "扩散 · 双暴按 1:2 配比，建议 65~75% 暴击率（副C · 聚怪扩散）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 聚怪扩散）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 聚怪扩散）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 聚怪扩散）",
        "sortOrder": 4
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 聚怪扩散）",
        "sortOrder": 5
      }
    ]
  },
  "旅行者·岩": {
    "scale": "防御力%",
    "category": "直伤输出",
    "role": "副C · 岩造物",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（副C · 岩造物）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 岩造物）",
        "sortOrder": 2
      },
      {
        "name": "防御力%",
        "tier": "重要",
        "reason": "技能效果随防御力提升（副C · 岩造物）",
        "sortOrder": 3
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 岩造物）",
        "sortOrder": 4
      },
      {
        "name": "防御力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 岩造物）",
        "sortOrder": 5
      }
    ]
  },
  "旅行者·雷": {
    "scale": "攻击力%",
    "category": "充能循环输出",
    "role": "辅助 · 全队充能",
    "list": [
      {
        "name": "元素充能效率",
        "tier": "核心",
        "reason": "激化 · Q 循环优先，达标前高于双暴（建议 180~220%）（辅助 · 全队充能）",
        "sortOrder": 1
      },
      {
        "name": "暴击率",
        "tier": "重要",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（辅助 · 全队充能）",
        "sortOrder": 2
      },
      {
        "name": "暴击伤害",
        "tier": "重要",
        "reason": "与暴击率按 1:2 配比，充能达标后主堆（辅助 · 全队充能）",
        "sortOrder": 3
      },
      {
        "name": "攻击力%",
        "tier": "可用",
        "reason": "直接放大技能倍率收益（辅助 · 全队充能）",
        "sortOrder": 4
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "激化 · 反应伤害提供额外收益（辅助 · 全队充能）",
        "sortOrder": 5
      }
    ]
  },
  "旅行者·草": {
    "scale": "元素精通",
    "category": "精通辅助",
    "role": "副C · 持续挂草",
    "list": [
      {
        "name": "元素精通",
        "tier": "核心",
        "reason": "激化 / 绽放 · 绽放/激化反应伤害按精通结算，堆到 800+ 收益最高（副C · 持续挂草）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~180%（副C · 持续挂草）",
        "sortOrder": 2
      },
      {
        "name": "生命值%",
        "tier": "可用",
        "reason": "兼顾生存与治疗量，副词条中的补充项（副C · 持续挂草）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（副C · 持续挂草）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "扩散与绽放反应不吃双暴，无需堆叠（副C · 持续挂草）",
        "sortOrder": 5
      }
    ]
  },
  "旅行者·水": {
    "scale": "生命值%",
    "category": "生命治疗",
    "role": "辅助 · 挂水治疗",
    "list": [
      {
        "name": "生命值%",
        "tier": "核心",
        "reason": "蒸发/融化 / 绽放 · 治疗量与护盾厚度按生命上限结算，最高优先（辅助 · 挂水治疗）",
        "sortOrder": 1
      },
      {
        "name": "元素充能效率",
        "tier": "重要",
        "reason": "保证 Q 循环覆盖，建议 160~200%（辅助 · 挂水治疗）",
        "sortOrder": 2
      },
      {
        "name": "生命值",
        "tier": "可用",
        "reason": "固定生命作补充，收益低于百分比词条（辅助 · 挂水治疗）",
        "sortOrder": 3
      },
      {
        "name": "暴击率",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（辅助 · 挂水治疗）",
        "sortOrder": 4
      },
      {
        "name": "暴击伤害",
        "tier": "低收益",
        "reason": "治疗量不吃双暴，仅输出流才考虑（辅助 · 挂水治疗）",
        "sortOrder": 5
      }
    ]
  },
  "旅行者·火": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "副C · 后台挂火",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "蒸发/融化 · 双暴按 1:2 配比，建议 65~75% 暴击率（副C · 后台挂火）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（副C · 后台挂火）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（副C · 后台挂火）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "重要",
        "reason": "蒸发/融化 · 反应覆盖率高，精通提供额外增伤（副C · 后台挂火）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（副C · 后台挂火）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（副C · 后台挂火）",
        "sortOrder": 6
      }
    ]
  },
  "旅行者·冰": {
    "scale": "攻击力%",
    "category": "直伤输出",
    "role": "主C · 星烁反应",
    "list": [
      {
        "name": "暴击率",
        "tier": "核心",
        "reason": "双暴按 1:2 配比，建议 65~75% 暴击率（主C · 星烁反应）",
        "sortOrder": 1
      },
      {
        "name": "暴击伤害",
        "tier": "核心",
        "reason": "与暴击率按 1:2 配比，直伤收益最高（主C · 星烁反应）",
        "sortOrder": 2
      },
      {
        "name": "攻击力%",
        "tier": "重要",
        "reason": "直接放大技能倍率收益（主C · 星烁反应）",
        "sortOrder": 3
      },
      {
        "name": "元素精通",
        "tier": "可用",
        "reason": "反应覆盖率高，精通提供额外增伤（主C · 星烁反应）",
        "sortOrder": 4
      },
      {
        "name": "元素充能效率",
        "tier": "可用",
        "reason": "保证 Q 循环顺畅即可，110~130% 足够（主C · 星烁反应）",
        "sortOrder": 5
      },
      {
        "name": "攻击力",
        "tier": "低收益",
        "reason": "固定值词条收益低于百分比，仅作过渡（主C · 星烁反应）",
        "sortOrder": 6
      }
    ]
  }
}

// { 角色名: { category, role, list: [{ label, target, note, sortOrder }] } }
export const CHAR_PANELS = {
  "迪卢克": {
    "category": "直伤输出",
    "role": "主C · 蒸发",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "火伤直伤基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "75%+",
        "note": "三段 E 稳定出伤",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "150~200",
        "note": "配合行秋/夜兰打蒸发",
        "sortOrder": 4
      }
    ]
  },
  "可莉": {
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "label": "攻击力",
        "target": "2000+",
        "note": "重击与诡雷直伤",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "重击爆发需暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      }
    ]
  },
  "胡桃": {
    "category": "直伤输出",
    "role": "主C · 蒸发",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "E「蝶引来生」按生命上限转攻击",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "重击蒸发需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "200%+",
        "note": "护摩之杖 / 匣里灭辰加成下收益最高",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "100~200",
        "note": "蒸发反应提供额外倍率",
        "sortOrder": 4
      }
    ]
  },
  "宵宫": {
    "category": "直伤输出",
    "role": "主C · 普攻",
    "list": [
      {
        "label": "攻击力",
        "target": "2000+",
        "note": "E 附魔普攻高频输出",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "75%+",
        "note": "普攻段数多，暴击收益稳定",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "80~150",
        "note": "蒸发队补充收益",
        "sortOrder": 4
      }
    ]
  },
  "迪希雅": {
    "category": "直伤输出",
    "role": "副C · 减伤",
    "list": [
      {
        "label": "生命值",
        "target": "3.5 万+",
        "note": "领域减伤与协同攻击按生命结算",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60%+",
        "note": "副C 输出需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      }
    ]
  },
  "林尼": {
    "category": "直伤输出",
    "role": "主C · 蓄力",
    "list": [
      {
        "label": "攻击力",
        "target": "2200+",
        "note": "蓄力箭与猫猫弹直伤",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "55~60%",
        "note": "逐影猎人 4 件套提供大量暴击率",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "190%+",
        "note": "套装暴击率溢出后主堆爆伤",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "80~150",
        "note": "配合芙宁娜打蒸发",
        "sortOrder": 4
      }
    ]
  },
  "阿蕾奇诺": {
    "category": "直伤输出",
    "role": "主C · 战技",
    "list": [
      {
        "label": "攻击力",
        "target": "2200+",
        "note": "生命之契强化重击的直伤白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "印记引爆需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "170%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "80~150",
        "note": "蒸发队补充收益",
        "sortOrder": 4
      }
    ]
  },
  "玛薇卡": {
    "category": "直伤输出",
    "role": "主C · 火神",
    "list": [
      {
        "label": "攻击力",
        "target": "2200+",
        "note": "Q 夜魂爆发直伤",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "65~70%",
        "note": "单段高倍率需暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "170%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "100~200",
        "note": "融化/蒸发队补充",
        "sortOrder": 4
      }
    ]
  },
  "安柏": {
    "category": "直伤输出",
    "role": "副C · 破盾",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "班尼特": {
    "category": "生命治疗",
    "role": "增攻 · 治疗",
    "list": [
      {
        "label": "元素充能效率",
        "target": "200~220%",
        "note": "Q「美妙旅程」循环刚需",
        "sortOrder": 1
      },
      {
        "label": "生命值",
        "target": "2.5 万+",
        "note": "兼顾奶量，Q 加攻按基础攻击力结算",
        "sortOrder": 2
      },
      {
        "label": "基础攻击力",
        "target": "800+",
        "note": "Q 加攻只按基础攻击力结算，优先选高白值武器",
        "sortOrder": 3
      }
    ]
  },
  "香菱": {
    "category": "充能循环输出",
    "role": "副C · 后台火",
    "list": [
      {
        "label": "元素充能效率",
        "target": "200%+",
        "note": "Q「旋火轮」循环刚需",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60%+",
        "note": "后台锁面板，双暴收益稳定",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "150~250",
        "note": "高蒸发覆盖率",
        "sortOrder": 4
      }
    ]
  },
  "辛焱": {
    "category": "直伤输出",
    "role": "盾辅 · 物伤",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "烟绯": {
    "category": "直伤输出",
    "role": "主C · 重击",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "嘉明": {
    "category": "直伤输出",
    "role": "主C · 下落",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "150~250",
        "note": "蒸发/融化反应提供额外倍率",
        "sortOrder": 4
      }
    ]
  },
  "托马": {
    "category": "生命生存辅助",
    "role": "盾辅 · 挂火",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "护盾厚度按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "200%+",
        "note": "Q 循环刚需",
        "sortOrder": 2
      }
    ]
  },
  "夏沃蕾": {
    "category": "生命治疗",
    "role": "增攻 · 奶",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "治疗量按生命上限结算，优先堆满",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条，配合生命拉高奶量",
        "sortOrder": 3
      }
    ]
  },
  "莫娜": {
    "category": "充能循环输出",
    "role": "增伤 · 控制",
    "list": [
      {
        "label": "元素充能效率",
        "target": "200%+",
        "note": "Q 泡影增伤循环刚需",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "50%+",
        "note": "核爆流双暴补充",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "120%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      }
    ]
  },
  "达达利亚": {
    "category": "直伤输出",
    "role": "主C · 断流",
    "list": [
      {
        "label": "攻击力",
        "target": "1900+",
        "note": "断流近战直伤白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "高频群伤需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "80~150",
        "note": "蒸发队补充收益",
        "sortOrder": 4
      }
    ]
  },
  "珊瑚宫心海": {
    "category": "生命治疗",
    "role": "治疗 · 挂水",
    "list": [
      {
        "label": "生命值",
        "target": "3.5 万+",
        "note": "治疗量与 E 水母伤害按生命结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "150~170%",
        "note": "保证 Q 覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条",
        "sortOrder": 3
      }
    ]
  },
  "神里绫人": {
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "label": "攻击力",
        "target": "2000+",
        "note": "E 瞬水剑直伤白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "高频水剑需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      }
    ]
  },
  "夜兰": {
    "category": "直伤输出",
    "role": "副C · 增伤",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "Q 协同攻击倍率按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "180%+",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "后台高频水伤",
        "sortOrder": 3
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 4
      }
    ]
  },
  "妮露": {
    "category": "生命生存辅助",
    "role": "绽放核心",
    "list": [
      {
        "label": "生命值",
        "target": "5.5 万+",
        "note": "丰穰之核伤害按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素精通",
        "target": "150~250",
        "note": "绽放反应补充收益",
        "sortOrder": 2
      },
      {
        "label": "元素充能效率",
        "target": "120%+",
        "note": "Q 循环够用即可",
        "sortOrder": 3
      }
    ]
  },
  "那维莱特": {
    "category": "直伤输出",
    "role": "主C · 重击",
    "list": [
      {
        "label": "生命值",
        "target": "3.5 万+",
        "note": "重击水炮倍率按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "55~60%",
        "note": "逐影猎人 4 件套提供暴击率",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "190%+",
        "note": "套装暴击溢出后主堆爆伤",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "120%+",
        "note": "保证重击循环",
        "sortOrder": 4
      }
    ]
  },
  "芙宁娜": {
    "category": "直伤输出",
    "role": "增伤辅 · 后台水",
    "list": [
      {
        "label": "生命值",
        "target": "4.0 万+",
        "note": "Q 增伤与 E 三沙龙均按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "180%+",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "暴击率",
        "target": "65~70%",
        "note": "后台直伤需双暴",
        "sortOrder": 3
      },
      {
        "label": "暴击伤害",
        "target": "140%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 4
      }
    ]
  },
  "希格雯": {
    "category": "生命治疗",
    "role": "治疗 · 副C",
    "list": [
      {
        "label": "生命值",
        "target": "4.0 万+",
        "note": "治疗与后台协同按生命结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160%+",
        "note": "保证 Q 循环",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条",
        "sortOrder": 3
      }
    ]
  },
  "玛拉妮": {
    "category": "直伤输出",
    "role": "主C · 蒸发",
    "list": [
      {
        "label": "生命值",
        "target": "3.5 万+",
        "note": "冲浪重击倍率按生命结算",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60%",
        "note": "黑曜秘典提供暴击率",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "180%+",
        "note": "套装暴击溢出后主堆爆伤",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "100~200",
        "note": "蒸发反应补充",
        "sortOrder": 4
      }
    ]
  },
  "芭芭拉": {
    "category": "生命治疗",
    "role": "治疗 · 挂水",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "治疗量按生命上限结算，优先堆满",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条，配合生命拉高奶量",
        "sortOrder": 3
      }
    ]
  },
  "塔利雅": {
    "category": "生命生存辅助",
    "role": "盾辅 · 挂水",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "护盾 / 技能效果按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      }
    ]
  },
  "行秋": {
    "category": "充能循环输出",
    "role": "副C · 减伤",
    "list": [
      {
        "label": "元素充能效率",
        "target": "200%+",
        "note": "Q 雨帘剑循环刚需",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60%+",
        "note": "后台协同攻击需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤基础白值",
        "sortOrder": 4
      }
    ]
  },
  "坎蒂丝": {
    "category": "生命生存辅助",
    "role": "盾辅 · 附魔",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "护盾 / 技能效果按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      }
    ]
  },
  "爱诺": {
    "category": "充能循环输出",
    "role": "副C · 挂水",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "刻晴": {
    "category": "直伤输出",
    "role": "主C · 激化",
    "list": [
      {
        "label": "攻击力",
        "target": "1900+",
        "note": "激化队直伤白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "高频重击需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "150~250",
        "note": "激化反应补充收益",
        "sortOrder": 4
      }
    ]
  },
  "雷电将军": {
    "category": "充能循环输出",
    "role": "主C · 充能辅",
    "list": [
      {
        "label": "元素充能效率",
        "target": "250~270%",
        "note": "绝缘 4 件套 + Q「梦想一心」伤害随充能提升",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "65%+",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "140%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "2000+",
        "note": "直伤部分基础白值",
        "sortOrder": 4
      }
    ]
  },
  "八重神子": {
    "category": "直伤输出",
    "role": "副C · 杀生樱",
    "list": [
      {
        "label": "攻击力",
        "target": "1900+",
        "note": "杀生樱后台雷伤",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "65%+",
        "note": "后台锁面板需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "100~200",
        "note": "激化队补充收益",
        "sortOrder": 4
      }
    ]
  },
  "赛诺": {
    "category": "精通反应输出",
    "role": "主C · 激化",
    "list": [
      {
        "label": "元素精通",
        "target": "300~400",
        "note": "Q 长轴激化输出",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "65%+",
        "note": "长轴站场需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "140%+",
        "note": "Q 循环刚需",
        "sortOrder": 4
      }
    ]
  },
  "克洛琳德": {
    "category": "直伤输出",
    "role": "主C · 突进",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "200~300",
        "note": "激化反应提供额外倍率",
        "sortOrder": 4
      }
    ]
  },
  "瓦蕾莎": {
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "伊涅芙": {
    "category": "充能循环输出",
    "role": "辅助 · 月感电",
    "list": [
      {
        "label": "元素充能效率",
        "target": "200~260%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1900+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "菲林斯": {
    "category": "直伤输出",
    "role": "主C · 月感电",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "丽莎": {
    "category": "精通反应输出",
    "role": "副C · 破防",
    "list": [
      {
        "label": "元素精通",
        "target": "800+",
        "note": "激化反应核心词条",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "激化队直伤部分仍需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130~150%",
        "note": "保证长轴站场期间的 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "雷泽": {
    "category": "直伤输出",
    "role": "主C · 物理",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "菲谢尔": {
    "category": "直伤输出",
    "role": "副C · 奥兹",
    "list": [
      {
        "label": "攻击力",
        "target": "1700+",
        "note": "奥兹后台雷伤直伤白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "65%+",
        "note": "激化队双暴收益高",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "100~200",
        "note": "激化反应补充收益",
        "sortOrder": 4
      }
    ]
  },
  "北斗": {
    "category": "充能循环输出",
    "role": "副C · 反击",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~200%",
        "note": "Q「斫雷」循环刚需",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60%+",
        "note": "后台闪雷需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1600+",
        "note": "直伤基础白值",
        "sortOrder": 4
      }
    ]
  },
  "九条裟罗": {
    "category": "充能循环输出",
    "role": "增攻 · 副C",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "久岐忍": {
    "category": "生命治疗",
    "role": "治疗 · 挂雷",
    "list": [
      {
        "label": "元素精通",
        "target": "900+",
        "note": "超绽放伤害按精通结算",
        "sortOrder": 1
      },
      {
        "label": "生命值",
        "target": "2.5 万+",
        "note": "E 治疗量按生命上限结算",
        "sortOrder": 2
      },
      {
        "label": "元素充能效率",
        "target": "140%+",
        "note": "保证 E 覆盖",
        "sortOrder": 3
      }
    ]
  },
  "多莉": {
    "category": "生命治疗",
    "role": "治疗 · 充能",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "治疗量按生命上限结算，优先堆满",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条，配合生命拉高奶量",
        "sortOrder": 3
      }
    ]
  },
  "赛索斯": {
    "category": "精通反应输出",
    "role": "主C · 蓄力",
    "list": [
      {
        "label": "元素精通",
        "target": "300~400",
        "note": "激化反应核心词条",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "激化队直伤部分仍需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130~150%",
        "note": "保证长轴站场期间的 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "欧洛伦": {
    "category": "充能循环输出",
    "role": "副C · 夜魂",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "伊安珊": {
    "category": "生命生存辅助",
    "role": "辅助 · 增攻",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "护盾 / 技能效果按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      }
    ]
  },
  "七七": {
    "category": "攻击治疗",
    "role": "治疗 · 挂冰",
    "list": [
      {
        "label": "攻击力",
        "target": "2200+",
        "note": "治疗量按攻击力结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~180%",
        "note": "Q 循环刚需",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条",
        "sortOrder": 3
      }
    ]
  },
  "甘雨": {
    "category": "直伤输出",
    "role": "主C · 蓄力狙",
    "list": [
      {
        "label": "攻击力",
        "target": "2200+",
        "note": "霜华矢二段重击直伤",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "55~65%",
        "note": "冰套/双冰提供暴击率，蓄力需稳定",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "200%+",
        "note": "重击单段高倍率，爆伤收益最高",
        "sortOrder": 3
      }
    ]
  },
  "优菈": {
    "category": "直伤输出",
    "role": "主C · 物理",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "光降之剑物理爆发直伤",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "单段爆发必须暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130%+",
        "note": "保证 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "神里绫华": {
    "category": "直伤输出",
    "role": "主C · 永冻",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "重击与 Q 直伤白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "40~45%",
        "note": "冰风迷途 4 件套 + 双冰共鸣提供大量暴击率",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "220%+",
        "note": "暴击率溢出后主堆爆伤",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "120%+",
        "note": "保证 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "申鹤": {
    "category": "攻击增益辅助",
    "role": "冰辅 · 增伤",
    "list": [
      {
        "label": "攻击力",
        "target": "3000+",
        "note": "E 冰翎增伤按自身攻击力结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~180%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      }
    ]
  },
  "莱欧斯利": {
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "label": "攻击力",
        "target": "2000+",
        "note": "拳套站场直伤白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "55~60%",
        "note": "逐影猎人 4 件套提供暴击率",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "180%+",
        "note": "套装暴击溢出后主堆爆伤",
        "sortOrder": 3
      }
    ]
  },
  "茜特菈莉": {
    "category": "充能循环输出",
    "role": "盾辅 · 减抗",
    "list": [
      {
        "label": "元素充能效率",
        "target": "200~260%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1900+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "爱可菲": {
    "category": "直伤输出",
    "role": "冰辅 · 减抗",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "丝柯克": {
    "category": "直伤输出",
    "role": "主C · 冰水强队",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "凯亚": {
    "category": "充能循环输出",
    "role": "副C · 挂冰",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "迪奥娜": {
    "category": "生命生存辅助",
    "role": "盾辅 · 治疗",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "护盾与治疗按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "180%+",
        "note": "Q 循环刚需",
        "sortOrder": 2
      }
    ]
  },
  "罗莎莉亚": {
    "category": "充能循环输出",
    "role": "副C · 暴击",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "米卡": {
    "category": "生命治疗",
    "role": "治疗 · 攻速",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "治疗量按生命上限结算，优先堆满",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条，配合生命拉高奶量",
        "sortOrder": 3
      }
    ]
  },
  "重云": {
    "category": "直伤输出",
    "role": "副C · 附魔",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "55~60%",
        "note": "套装提供暴击率，面板无需堆满",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "190%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "莱依拉": {
    "category": "生命生存辅助",
    "role": "盾辅 · 挂冰",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "护盾 / 技能效果按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      }
    ]
  },
  "菲米尼": {
    "category": "直伤输出",
    "role": "主C · 物伤",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "夏洛蒂": {
    "category": "生命治疗",
    "role": "治疗 · 挂冰",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "治疗量按生命上限结算，优先堆满",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条，配合生命拉高奶量",
        "sortOrder": 3
      }
    ]
  },
  "琴": {
    "category": "攻击治疗",
    "role": "治疗 · 聚怪",
    "list": [
      {
        "label": "攻击力",
        "target": "2000+",
        "note": "Q 领域治疗量按攻击力结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160%+",
        "note": "保证 Q 循环",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条",
        "sortOrder": 3
      }
    ]
  },
  "温迪": {
    "category": "精通反应输出",
    "role": "聚怪 · 充能辅",
    "list": [
      {
        "label": "元素精通",
        "target": "800~900",
        "note": "扩散伤害按精通结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160%+",
        "note": "Q 聚怪循环刚需",
        "sortOrder": 2
      },
      {
        "label": "暴击率",
        "target": "50%+",
        "note": "Q 直伤部分的补充收益",
        "sortOrder": 3
      },
      {
        "label": "暴击伤害",
        "target": "120%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 4
      }
    ]
  },
  "魈": {
    "category": "直伤输出",
    "role": "主C · 下落",
    "list": [
      {
        "label": "攻击力",
        "target": "2000+",
        "note": "下落攻击直伤白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "持续下落需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130%+",
        "note": "Q 循环刚需",
        "sortOrder": 4
      }
    ]
  },
  "枫原万叶": {
    "category": "精通辅助",
    "role": "聚怪 · 增伤辅",
    "list": [
      {
        "label": "元素精通",
        "target": "900~1000",
        "note": "扩散减抗 + 全队元素增伤约 40%",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~180%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      }
    ]
  },
  "流浪者": {
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "label": "攻击力",
        "target": "1900+",
        "note": "E 悬浮普攻直伤白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "75%+",
        "note": "高频普攻需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      }
    ]
  },
  "闲云": {
    "category": "直伤输出",
    "role": "增伤 · 下落辅",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "恰斯卡": {
    "category": "直伤输出",
    "role": "主C · 多元素",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "梦见月瑞希": {
    "category": "精通辅助",
    "role": "辅助 · 治疗",
    "list": [
      {
        "label": "元素精通",
        "target": "850+",
        "note": "扩散收益的核心指标",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~180%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "生命值",
        "target": "2.5 万+",
        "note": "兼顾护盾厚度 / 治疗量",
        "sortOrder": 3
      }
    ]
  },
  "砂糖": {
    "category": "精通辅助",
    "role": "增伤 · 聚怪",
    "list": [
      {
        "label": "元素精通",
        "target": "900+",
        "note": "扩散与全队精通加成",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160%+",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "攻击力",
        "target": "1200+",
        "note": "非核心，直伤占比低",
        "sortOrder": 3
      }
    ]
  },
  "蓝砚": {
    "category": "精通辅助",
    "role": "盾辅 · 挂风",
    "list": [
      {
        "label": "元素精通",
        "target": "850+",
        "note": "扩散收益的核心指标",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~180%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "生命值",
        "target": "2.5 万+",
        "note": "兼顾护盾厚度 / 治疗量",
        "sortOrder": 3
      }
    ]
  },
  "鹿野院平藏": {
    "category": "直伤输出",
    "role": "主C · 拳法",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "早柚": {
    "category": "攻击治疗",
    "role": "治疗 · 滚地",
    "list": [
      {
        "label": "攻击力",
        "target": "1800+",
        "note": "治疗量按攻击力结算，攻击越高奶量越足",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~180%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条",
        "sortOrder": 3
      }
    ]
  },
  "珐露珊": {
    "category": "充能循环输出",
    "role": "增伤 · 风拐",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "琳妮特": {
    "category": "充能循环输出",
    "role": "副C · 挂风",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "伊法": {
    "category": "充能循环输出",
    "role": "辅助 · 治疗",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "雅珂达": {
    "category": "充能循环输出",
    "role": "副C · 挂风",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "钟离": {
    "category": "生命生存辅助",
    "role": "盾辅 · 减抗",
    "list": [
      {
        "label": "生命值",
        "target": "4.0 万+",
        "note": "玉璋护盾厚度按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "130%+",
        "note": "保证 Q 石化循环",
        "sortOrder": 2
      }
    ]
  },
  "阿贝多": {
    "category": "直伤输出",
    "role": "副C · 后台",
    "list": [
      {
        "label": "防御力",
        "target": "2500+",
        "note": "E 阳华刹那之花按防御结算",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60%+",
        "note": "后台协同攻击需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      }
    ]
  },
  "荒泷一斗": {
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "label": "防御力",
        "target": "2500+",
        "note": "Q 鬼王重击按防御转化攻击",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "重击连段需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "120~130%",
        "note": "保证 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "娜维娅": {
    "category": "直伤输出",
    "role": "主C · 结晶弹片",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "千织": {
    "category": "直伤输出",
    "role": "副C · 后台",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "希诺宁": {
    "category": "充能循环输出",
    "role": "辅助 · 减抗",
    "list": [
      {
        "label": "元素充能效率",
        "target": "200~260%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1900+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "诺艾尔": {
    "category": "直伤输出",
    "role": "盾辅 · 奶",
    "list": [
      {
        "label": "防御力",
        "target": "2300+",
        "note": "六命防御转化攻击",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "65%+",
        "note": "站场输出需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130%+",
        "note": "保证 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "凝光": {
    "category": "直伤输出",
    "role": "主C · 重击",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "云堇": {
    "category": "防御辅助",
    "role": "增伤 · 普攻拐",
    "list": [
      {
        "label": "防御力",
        "target": "2300+",
        "note": "Q 增伤按防御力结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "180~200%",
        "note": "Q 循环刚需",
        "sortOrder": 2
      }
    ]
  },
  "五郎": {
    "category": "充能循环输出",
    "role": "增伤 · 岩拐",
    "list": [
      {
        "label": "防御力",
        "target": "2000+",
        "note": "E 大将旗指物按防御提供增益",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "180~200%",
        "note": "Q 循环刚需",
        "sortOrder": 2
      }
    ]
  },
  "卡齐娜": {
    "category": "充能循环输出",
    "role": "辅助 · 岩拐",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "叶洛亚": {
    "category": "生命生存辅助",
    "role": "辅助 · 岩拐",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "护盾 / 技能效果按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      }
    ]
  },
  "提纳里": {
    "category": "精通反应输出",
    "role": "主C · 激化",
    "list": [
      {
        "label": "元素精通",
        "target": "250~350",
        "note": "激化反应核心词条",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "三段蓄力箭需稳定暴击",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1700+",
        "note": "直伤部分基础白值",
        "sortOrder": 4
      }
    ]
  },
  "纳西妲": {
    "category": "精通反应输出",
    "role": "副C · 草辅",
    "list": [
      {
        "label": "元素精通",
        "target": "900~1000",
        "note": "E 灭净三业与 Q 增伤均按精通结算",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "55~60%",
        "note": "激化队直伤部分需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130%+",
        "note": "保证 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "艾尔海森": {
    "category": "精通反应输出",
    "role": "主C · 站场",
    "list": [
      {
        "label": "元素精通",
        "target": "300~400",
        "note": "光镜协同攻击激化收益",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "站场持续输出需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130%+",
        "note": "保证 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "白术": {
    "category": "生命治疗",
    "role": "治疗 · 挂草",
    "list": [
      {
        "label": "生命值",
        "target": "4.0 万+",
        "note": "治疗与护盾按生命上限结算",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "180%+",
        "note": "Q 循环刚需",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "30%+",
        "note": "理之冠主词条",
        "sortOrder": 3
      }
    ]
  },
  "艾梅莉埃": {
    "category": "直伤输出",
    "role": "副C · 后台草",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "200~300",
        "note": "激化反应提供额外倍率",
        "sortOrder": 4
      }
    ]
  },
  "基尼奇": {
    "category": "直伤输出",
    "role": "主C · 燃烧",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "100~200",
        "note": "燃烧反应提供额外倍率",
        "sortOrder": 4
      }
    ]
  },
  "菈乌玛": {
    "category": "精通反应输出",
    "role": "月绽放 · 核心辅",
    "list": [
      {
        "label": "元素精通",
        "target": "800+",
        "note": "绽放 / 月反应反应核心词条",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "激化队直伤部分仍需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130~150%",
        "note": "保证长轴站场期间的 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "奈芙尔": {
    "category": "精通反应输出",
    "role": "月绽放 · 站场主C",
    "list": [
      {
        "label": "元素精通",
        "target": "800+",
        "note": "绽放 / 月反应反应核心词条",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "激化队直伤部分仍需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130~150%",
        "note": "保证长轴站场期间的 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "瑶瑶": {
    "category": "生命治疗",
    "role": "治疗 · 挂草",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "治疗量按生命上限结算，优先堆满",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条，配合生命拉高奶量",
        "sortOrder": 3
      }
    ]
  },
  "柯莱": {
    "category": "充能循环输出",
    "role": "副C · 挂草",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "卡维": {
    "category": "精通反应输出",
    "role": "主C · 绽放",
    "list": [
      {
        "label": "元素精通",
        "target": "800+",
        "note": "绽放反应核心词条",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "激化队直伤部分仍需双暴",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "元素充能效率",
        "target": "130~150%",
        "note": "保证长轴站场期间的 Q 循环",
        "sortOrder": 4
      }
    ]
  },
  "绮良良": {
    "category": "精通辅助",
    "role": "盾辅 · 挂草",
    "list": [
      {
        "label": "元素精通",
        "target": "850+",
        "note": "激化收益的核心指标",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~180%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "生命值",
        "target": "2.5 万+",
        "note": "兼顾护盾厚度 / 治疗量",
        "sortOrder": 3
      }
    ]
  },
  "法尔伽": {
    "category": "直伤输出",
    "role": "主C · 双持",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "尼可": {
    "category": "直伤输出",
    "role": "后台辅 · 护盾",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "杜林": {
    "category": "直伤输出",
    "role": "主C · 燃烧",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "100~200",
        "note": "燃烧反应提供额外倍率",
        "sortOrder": 4
      }
    ]
  },
  "兹白": {
    "category": "直伤输出",
    "role": "主C · 月结晶",
    "list": [
      {
        "label": "防御力",
        "target": "2500+",
        "note": "防御转化攻击，防御力直接决定输出",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "洛恩": {
    "category": "直伤输出",
    "role": "主C · 站场",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "布伦妮": {
    "category": "直伤输出",
    "role": "副C · 扩散",
    "list": [
      {
        "label": "攻击力",
        "target": "1750+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "奥黛塔": {
    "category": "直伤输出",
    "role": "副C · 星超导",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "阿罗夏": {
    "category": "生命治疗",
    "role": "治疗 · 挂雷",
    "list": [
      {
        "label": "生命值",
        "target": "3.0 万+",
        "note": "治疗量按生命上限结算，优先堆满",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条，配合生命拉高奶量",
        "sortOrder": 3
      }
    ]
  },
  "薇斯纳": {
    "category": "直伤输出",
    "role": "主C · 星扩散",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "沃雅妮莎": {
    "category": "生命治疗",
    "role": "治疗 · 辅助",
    "list": [
      {
        "label": "生命值",
        "target": "3.5 万+",
        "note": "治疗量按生命上限结算，优先堆满",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条，配合生命拉高奶量",
        "sortOrder": 3
      }
    ]
  },
  "米提亚": {
    "category": "直伤输出",
    "role": "主C · 星之楔",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "瓦列里": {
    "category": "充能循环输出",
    "role": "副C · 挂雷",
    "list": [
      {
        "label": "元素充能效率",
        "target": "180~220%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "130%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1500+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "哥伦比娅": {
    "category": "直伤输出",
    "role": "副C · 月反应核心",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "莉奈娅": {
    "category": "直伤输出",
    "role": "主C · 结晶狙击",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "桑多涅": {
    "category": "直伤输出",
    "role": "副C · 后台挂冰",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "艾莉丝": {
    "category": "直伤输出",
    "role": "主C · 火法站场",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "150~250",
        "note": "蒸发/融化反应提供额外倍率",
        "sortOrder": 4
      }
    ]
  },
  "埃洛伊": {
    "category": "直伤输出",
    "role": "主C · 冰弓",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "55~60%",
        "note": "套装提供暴击率，面板无需堆满",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "190%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "150~250",
        "note": "蒸发/融化反应提供额外倍率",
        "sortOrder": 4
      }
    ]
  },
  "旅行者·风": {
    "category": "直伤输出",
    "role": "副C · 聚怪扩散",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "旅行者·岩": {
    "category": "直伤输出",
    "role": "副C · 岩造物",
    "list": [
      {
        "label": "防御力",
        "target": "2500+",
        "note": "技能倍率按防御力结算",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  },
  "旅行者·雷": {
    "category": "充能循环输出",
    "role": "辅助 · 全队充能",
    "list": [
      {
        "label": "元素充能效率",
        "target": "200~260%",
        "note": "Q 循环刚需，绝缘 4 件套收益上限更高",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "60~70%",
        "note": "充能达标后的第一优先级",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "150%+",
        "note": "与暴击率按 1:2 配比",
        "sortOrder": 3
      },
      {
        "label": "攻击力",
        "target": "1900+",
        "note": "直伤部分的基础白值",
        "sortOrder": 4
      }
    ]
  },
  "旅行者·草": {
    "category": "精通辅助",
    "role": "副C · 持续挂草",
    "list": [
      {
        "label": "元素精通",
        "target": "900+",
        "note": "激化 / 绽放收益的核心指标",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~180%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      }
    ]
  },
  "旅行者·水": {
    "category": "生命治疗",
    "role": "辅助 · 挂水治疗",
    "list": [
      {
        "label": "生命值",
        "target": "3.5 万+",
        "note": "治疗量按生命上限结算，优先堆满",
        "sortOrder": 1
      },
      {
        "label": "元素充能效率",
        "target": "160~200%",
        "note": "保证 Q 循环覆盖",
        "sortOrder": 2
      },
      {
        "label": "治疗加成",
        "target": "35%+",
        "note": "理之冠主词条，配合生命拉高奶量",
        "sortOrder": 3
      }
    ]
  },
  "旅行者·火": {
    "category": "直伤输出",
    "role": "副C · 后台挂火",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      },
      {
        "label": "元素精通",
        "target": "150~250",
        "note": "蒸发/融化反应提供额外倍率",
        "sortOrder": 4
      }
    ]
  },
  "旅行者·冰": {
    "category": "直伤输出",
    "role": "主C · 星烁反应",
    "list": [
      {
        "label": "攻击力",
        "target": "2100+",
        "note": "直伤倍率的基础白值",
        "sortOrder": 1
      },
      {
        "label": "暴击率",
        "target": "70%+",
        "note": "与暴击伤害按 1:2 配比",
        "sortOrder": 2
      },
      {
        "label": "暴击伤害",
        "target": "160%+",
        "note": "直伤收益最高的乘区",
        "sortOrder": 3
      }
    ]
  }
}
