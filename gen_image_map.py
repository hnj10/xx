# -*- coding: utf-8 -*-
"""从前端侧清单生成 imageMap.js：中文名 -> 图片文件名映射 + 圣遗物套装映射"""
import json

with open(r'C:/Users/20285/IdeaProjects/xx/gen_manifest.json', encoding='utf-8') as f:
    chars = json.load(f)

# 圣遗物套装 -> 图标文件名（生成图标时按此命名）
ARTIFACTS = {
    '炽烈的炎之魔女': 'xilie-yan-zhi-monv',
    '追忆之注连': 'zhuiyi-zhulian',
    '逐影猎人': 'zhuying-lieren',
    '谐律的异想': 'xielv-yixiang',
    '烬城勇者绘卷': 'jincheng-yongzhe-huijuan',
    '宗室之仪': 'zongshi-zhiyi',
    '昔日宗室之仪': 'xiri-zongshi-zhiyi',
    '绝缘之旗印': 'jueyuan-zhiqinyin',
    '千岩牢固': 'qianyan-laogu',
    '流浪大地的乐团': 'liulang-dadi-yuetuan',
    '黄金剧团': 'huangjin-jutuan',
    '沉沦之心': 'chenlun-zhixin',
    '回声之林夜话': 'huisheng-zhlin-yehua',
    '被怜爱的少女': 'beilianai-shaonv',
    '冰风迷途的勇士': 'bingfeng-mitu-yongshi',
    '苍白之火': 'cangbai-zhihuo',
    '华馆梦醒形骸记': 'huaguan-mengxing',
    '回响之林': 'huixiang-zhlin',
    '饰金之梦': 'shijin-zhimeng',
    '翠绿之影': 'cuilv-zhiying',
    '辰砂往生录': 'chensha-wangshenglu',
    '沙上楼阁史话': 'shashang-louge-shihua',
    '昔时之歌': 'xishi-zhige',
    '深林的记忆': 'shenlin-de-jiyi',
    '如雷的盛怒': 'rulei-de-shengnu',
    '纺月的夜歌': 'fangyue-de-yege',
    '穹境示现之夜': 'qiongjing-shixian-zhiye',
    '苍金之翼': 'cangjin-zhiyi',
    '奇想乐章': 'qixiang-yuezhang',
}

L = []
A = L.append
A('// 自动生成：角色中文名 -> assets/chars 文件名 映射')
A('// 由 gen_image_map.py 生成，勿手工编辑')
A('const charFiles = import.meta.glob("../assets/chars/*.png", { eager: true, import: "default" })')
A('const artifactFiles = import.meta.glob("../assets/artifacts/*.png", { eager: true, import: "default" })')
A('')
A('// 中文名 -> 拼音文件名（不含扩展名）')
A('export const CHAR_NAME_TO_FILE = {')
for c in chars:
    A("  '%s': '%s'," % (c['name'], c['file']))
A('}')
A('')
A('// 圣遗物套装名 -> assets/artifacts 图标文件名')
A('export const ARTIFACT_NAME_TO_FILE = {')
for k, v in ARTIFACTS.items():
    A("  '%s': '%s'," % (k, v))
A('}')
A('')
A('// 取角色立绘 URL；没有图片时返回空字符串（模板里 v-if 判断）')
A('export function charImg(name) {')
A('  const f = CHAR_NAME_TO_FILE[name]')
A("  if (!f) return ''")
A('  return charFiles[`../assets/chars/${f}.png`] || \'\'')
A('}')
A('')
A('// 从「圣遗物 4件套」等文案中解析套装名并返回图标 URL；没有则返回空')
A('export function artifactImg(text) {')
A("  if (!text) return ''")
A('  for (const [k, f] of Object.entries(ARTIFACT_NAME_TO_FILE)) {')
A('    if (text.includes(k)) {')
A('      return artifactFiles[`../assets/artifacts/${f}.png`] || \'\'')
A('    }')
A('  }')
A("  return ''")
A('}')

out = r'C:/Users/20285/IdeaProjects/xx/genshin-login-vue/src/data/imageMap.js'
with open(out, 'w', encoding='utf-8') as f:
    f.write('\n'.join(L) + '\n')
print('written', out, len(chars), 'chars,', len(ARTIFACTS), 'artifacts')
