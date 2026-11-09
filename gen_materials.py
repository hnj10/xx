# -*- coding: utf-8 -*-
"""
生成原神「角色 / 武器养成材料」数据。

产物：
  1) springBootTest/sql/materials_data.sql      建表 + 全量 INSERT（可重复执行）
  2) genshin-login-vue/src/data/materialsData.js  前端本地兜底数据

数据口径（重要）：
  项目里的 118 位角色包含未实装 / 未来版本角色，公开资料查不到它们的真实突破材料。
  因此数量采用原神官方统一的养成曲线（经验书、精锻用魔矿、摩拉、各突破阶段消耗），
  材料名称按「元素 / 武器系列 / 国度」规则映射，属于通用模板估算，不是逐角色实测数据。
  界面会明确标注这一点；将来要换成真实数据，只需替换本脚本的映射表后重新生成，
  前端与后端代码都不用改。

运行： python gen_materials.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SQL_OUT = ROOT / "springBootTest" / "sql" / "materials_data.sql"
JS_OUT = ROOT / "genshin-login-vue" / "src" / "data" / "materialsData.js"

NOTICE = "养成消耗按官方通用模板估算：数量依据统一等级曲线，元素宝石按元素、特产按国度、武器突破系列按来源关键词推断（未命中时按名称规则分配），具体以游戏内为准。"

# ---------------------------------------------------------------- 角色规则

GEMS = {
    "火": ("燃愿玛瑙", "碎屑", "断片", "块", "玛瑙"),
    "水": ("涤净青金", "碎屑", "断片", "块", "青金"),
    "雷": ("最胜紫晶", "碎屑", "断片", "块", "紫晶"),
    "草": ("生长碧翡", "碎屑", "断片", "块", "碧翡"),
    "风": ("自在松石", "碎屑", "断片", "块", "松石"),
    "岩": ("坚牢黄玉", "碎屑", "断片", "块", "黄玉"),
    "冰": ("哀叙冰玉", "碎屑", "断片", "块", "冰玉"),
}
BOSS = {
    "火": "阴燃之珠", "水": "净水之心", "雷": "雷霆数珠", "草": "孢囊晶尘",
    "风": "飓风之种", "岩": "玄岩之塔", "冰": "极寒之核",
}
SPECIALTY = {
    "火": "纳塔地区特产", "水": "湖光铃兰", "雷": "海露花", "草": "月莲",
    "风": "塞西莉亚花", "岩": "清心", "冰": "至冬地区特产",
}
MOB_SERIES = [
    ("史莱姆凝液", "史莱姆清", "史莱姆原浆"),
    ("骗骗花蜜", "微光花蜜", "原素花蜜"),
    ("导能绘卷", "封魔绘卷", "禁咒绘卷"),
    ("破损的面具", "污秽的面具", "不祥的面具"),
    ("新兵的徽记", "士官的徽记", "尉官的徽记"),
    ("混沌装置", "混沌回路", "混沌炉心"),
]
REGION_RULE = [
    ("蒙德", ("狮牙斗士", "高塔孤王", "凛风奔狼", "狮牙斗士", "王器")),
    ("璃月", ("雾海云间", "孤云寒林", "雾海云间", "漆黑陨铁", "金纹")),
    ("稻妻", ("今昔剧画", "远海夷地", "鸣神御灵", "今昔剧画", "虎啮")),
    ("须弥", ("谧林涓露", "谧林涓露", "烈日威权", "金纹拓印", "王器")),
    ("枫丹", ("悠古弦音", "悠古弦音", "纯圣露滴", "异界生命核", "王器")),
    ("纳塔", ("贡祭炽心", "贡祭炽心", "谵妄秘面", "秘刻金纹", "王器")),
    ("至冬", ("寒月之辉", "寒月之辉", "霜轮之芯", "极夜之核", "王器")),
    ("挪德卡莱", ("寒月之辉", "寒月之辉", "霜轮之芯", "极夜之核", "王器")),
]
REGION_KEYWORDS = [
    ("挪德卡莱", ("挪德卡莱", "月之", "月绽放", "月结晶", "星烁", "星之楔")),
    ("至冬", ("至冬", "冬契", "星扩散", "星超导")),
    ("纳塔", ("纳塔", "夜魂", "5.8", "5.6", "5.4", "5.2")),
    ("枫丹", ("枫丹", "钓鱼", "4.5", "4.3", "4.7")),
    ("须弥", ("须弥", "3.1", "3.3", "3.5", "3.7")),
    ("稻妻", ("稻妻", "2.1", "2.5", "2.7")),
    ("璃月", ("璃月", "雪山", "龙脊")),
    ("蒙德", ("蒙德", "1.2", "1.4", "1.6")),
]

# 官方统一的角色突破阶段（等级上限 20/40/50/60/70/80）
CHAR_STAGES = [
    (20, 20000, {"gem": (0, 1), "specialty": 3, "mob": (0, 3)}),
    (40, 40000, {"gem": (1, 3), "specialty": 10, "boss": 2, "mob": (0, 15)}),
    (50, 60000, {"gem": (1, 6), "specialty": 20, "boss": 4, "mob": (1, 12)}),
    (60, 80000, {"gem": (2, 3), "specialty": 30, "boss": 8, "mob": (1, 18)}),
    (70, 100000, {"gem": (2, 6), "specialty": 45, "boss": 12, "mob": (2, 12)}),
    (80, 120000, {"gem": (3, 6), "specialty": 60, "boss": 20, "mob": (2, 24)}),
]
# 官方统一的武器突破阶段（等级上限 20/40/50/60/70/80）
WEAPON_STAGES = [
    (20, 10000, {"series": (0, 5), "mob": (0, 5)}),
    (40, 20000, {"series": (1, 5), "mob": (0, 18)}),
    (50, 30000, {"series": (1, 9), "mob": (1, 9)}),
    (60, 45000, {"series": (2, 5), "mob": (1, 18)}),
    (70, 55000, {"series": (2, 9), "mob": (2, 14)}),
    (80, 65000, {"series": (3, 6), "mob": (2, 27)}),
]
ORE_BY_RARITY = {5: 907, 4: 605, 3: 405}
WEAPON_MORA_LEVEL = {5: 2265000, 4: 1512000, 3: 1012000}
CHAR_MORA_LEVEL = 2092530
CHAR_MORA_ASCENSION = sum(s[1] for s in CHAR_STAGES)          # 420000
WEAPON_MORA_ASCENSION = sum(s[1] for s in WEAPON_STAGES)      # 225000


def pick_region(weapon):
    """从武器描述推断所属地区的突破材料系列。"""
    text = (weapon.get("desc") or "") + (weapon.get("name") or "")
    for region, keys in REGION_KEYWORDS:
        if any(k in text for k in keys):
            for name, series in REGION_RULE:
                if name == region:
                    return region, series
    idx = (sum(ord(c) for c in weapon.get("name", ""))) % len(REGION_RULE)
    return REGION_RULE[idx][0], REGION_RULE[idx][1]


def build_character(ch):
    name, element, rarity = ch["name"], ch.get("element", "风"), ch.get("rarity", 5)
    gem = GEMS.get(element, GEMS["风"])
    mob = MOB_SERIES[sum(ord(c) for c in name) % len(MOB_SERIES)]
    boss, specialty = BOSS.get(element, BOSS["风"]), SPECIALTY.get(element, "地区特产")
    items = []

    def add(category, item_name, count, stage=0):
        items.append({"category": category, "name": item_name, "count": count, "stage": stage})

    # 升级消耗（官方统一曲线）
    add("升级消耗", "大英雄的经验", 419)
    add("升级消耗", "摩拉（角色升级）", CHAR_MORA_LEVEL)
    add("升级消耗", "摩拉（角色突破）", CHAR_MORA_ASCENSION)
    add("升级消耗", "摩拉（合计）", CHAR_MORA_LEVEL + CHAR_MORA_ASCENSION)

    # 突破材料合计
    gem_names = [gem[0] + gem[1], gem[0] + gem[2], gem[0] + gem[3], gem[0]]
    add("元素宝石", gem_names[0], 1)
    add("元素宝石", gem_names[1], 9)
    add("元素宝石", gem_names[2], 9)
    add("元素宝石", gem_names[3], 6)
    add("首领材料", boss, 46)
    add("地区特产", specialty, 168)
    add("怪物掉落", mob[0], 18)
    add("怪物掉落", mob[1], 30)
    add("怪物掉落", mob[2], 36)

    # 逐阶段明细（stage 1..6）
    for idx, (level, mora, rule) in enumerate(CHAR_STAGES, start=1):
        add("摩拉", "摩拉", mora, idx)
        gi, gc = rule["gem"]
        add("元素宝石", gem_names[gi], gc, idx)
        add("地区特产", specialty, rule["specialty"], idx)
        if "boss" in rule:
            add("首领材料", boss, rule["boss"], idx)
        mi, mc = rule["mob"]
        add("怪物掉落", mob[mi], mc, idx)

    return {
        "name": name, "element": element, "rarity": rarity,
        "summary": {
            "books": 419, "bookName": "大英雄的经验", "ore": 0, "oreName": "",
            "moraLevel": CHAR_MORA_LEVEL,
            "moraAscension": CHAR_MORA_ASCENSION,
            "moraTotal": CHAR_MORA_LEVEL + CHAR_MORA_ASCENSION,
        },
        "stages": [{"level": s[0], "mora": s[1]} for s in CHAR_STAGES],
        "items": items,
    }


def build_weapon(w):
    name, rarity = w["name"], w.get("rarity", 5)
    rarity = rarity if rarity in ORE_BY_RARITY else 5
    region, series = pick_region(w)
    series_names = [series[1] + "的碎片", series[2] + "的断片", series[3] + "的块", series[0] + "之证"]
    mob = MOB_SERIES[(sum(ord(c) for c in name) + 3) % len(MOB_SERIES)]
    ore, mora_level = ORE_BY_RARITY[rarity], WEAPON_MORA_LEVEL[rarity]
    items = []

    def add(category, item_name, count, stage=0):
        items.append({"category": category, "name": item_name, "count": count, "stage": stage})

    add("升级消耗", "精锻用魔矿", ore)
    add("升级消耗", "摩拉（武器升级）", mora_level)
    add("升级消耗", "摩拉（武器突破）", WEAPON_MORA_ASCENSION)
    add("升级消耗", "摩拉（合计）", mora_level + WEAPON_MORA_ASCENSION)

    add("武器突破材料", series_names[0], 5)
    add("武器突破材料", series_names[1], 14)
    add("武器突破材料", series_names[2], 14)
    add("武器突破材料", series_names[3], 6)
    add("怪物掉落", mob[0], 23)
    add("怪物掉落", mob[1], 27)
    add("怪物掉落", mob[2], 41)

    for idx, (level, mora, rule) in enumerate(WEAPON_STAGES, start=1):
        add("摩拉", "摩拉", mora, idx)
        si, sc = rule["series"]
        add("武器突破材料", series_names[si], sc, idx)
        mi, mc = rule["mob"]
        add("怪物掉落", mob[mi], mc, idx)

    return {
        "name": name, "rarity": rarity, "type": w.get("type", ""), "region": region,
        "summary": {
            "books": 0, "bookName": "", "ore": ore, "oreName": "精锻用魔矿",
            "moraLevel": mora_level,
            "moraAscension": WEAPON_MORA_ASCENSION,
            "moraTotal": mora_level + WEAPON_MORA_ASCENSION,
        },
        "stages": [{"level": s[0], "mora": s[1]} for s in WEAPON_STAGES],
        "items": items,
    }


def esc(value):
    return str(value).replace("\\", "\\\\").replace("'", "\\'")


def main():
    chars = json.loads((ROOT / "chars.json").read_text(encoding="utf-8-sig"))["data"]
    weapons = json.loads((ROOT / "weapons.json").read_text(encoding="utf-8-sig"))["data"]
    char_mats = {c["name"]: build_character(c) for c in chars}
    weapon_mats = {w["name"]: build_weapon(w) for w in weapons}

    # ---------------- SQL ----------------
    lines = [
        "-- 自动生成：角色 / 武器养成材料明细（由 gen_materials.py 生成，勿手工编辑）",
        "-- 口径：" + NOTICE,
        "CREATE TABLE IF NOT EXISTS t_material_item (",
        "  id BIGINT NOT NULL AUTO_INCREMENT COMMENT '主键',",
        "  owner_type VARCHAR(16) NOT NULL COMMENT '归属类型 character/weapon',",
        "  owner_name VARCHAR(64) NOT NULL COMMENT '角色名或武器名',",
        "  category VARCHAR(32) NOT NULL COMMENT '材料类别',",
        "  item_name VARCHAR(128) NOT NULL COMMENT '材料名称',",
        "  item_count INT NOT NULL DEFAULT 0 COMMENT '数量',",
        "  stage TINYINT NOT NULL DEFAULT 0 COMMENT '0=汇总，1..6=突破阶段',",
        "  sort_order INT NOT NULL DEFAULT 0 COMMENT '展示顺序',",
        "  PRIMARY KEY (id),",
        "  KEY idx_owner (owner_type, owner_name),",
        "  KEY idx_stage (owner_type, owner_name, stage)",
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='养成材料明细';",
        "",
        "DELETE FROM t_material_item WHERE owner_type IN ('character','weapon');",
        "",
    ]
    rows = []
    for owner_type, mapping in (("character", char_mats), ("weapon", weapon_mats)):
        for owner_name, data in mapping.items():
            for order, item in enumerate(data["items"]):
                rows.append(
                    "('{}','{}','{}','{}',{},{},{})".format(
                        owner_type, esc(owner_name), esc(item["category"]),
                        esc(item["name"]), item["count"], item["stage"], order)
                )
    for i in range(0, len(rows), 200):
        lines.append("INSERT INTO t_material_item (owner_type,owner_name,category,item_name,item_count,stage,sort_order) VALUES")
        lines.append(",\n".join(rows[i:i + 200]) + ";")
        lines.append("")
    SQL_OUT.write_text("\n".join(lines), encoding="utf-8")

    # ---------------- JS ----------------
    payload = {
        "notice": NOTICE,
        "characters": char_mats,
        "weapons": weapon_mats,
    }
    body = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    JS_OUT.write_text(
        "// 自动生成：养成材料本地兜底数据（由 gen_materials.py 生成，勿手工编辑）\n"
        "// 口径：" + NOTICE + "\n"
        "export const MATERIAL_NOTICE = " + json.dumps(NOTICE, ensure_ascii=False) + "\n"
        "export const CHARACTER_MATERIALS = " + json.dumps(char_mats, ensure_ascii=False, separators=(",", ":")) + "\n"
        "export const WEAPON_MATERIALS = " + json.dumps(weapon_mats, ensure_ascii=False, separators=(",", ":")) + "\n",
        encoding="utf-8",
    )

    print("characters:", len(char_mats), "weapons:", len(weapon_mats), "material rows:", len(rows))
    print("SQL:", SQL_OUT, SQL_OUT.stat().st_size, "bytes")
    print("JS :", JS_OUT, JS_OUT.stat().st_size, "bytes")


if __name__ == "__main__":
    main()
