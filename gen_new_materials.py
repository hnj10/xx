# -*- coding: utf-8 -*-
"""为新增 12 位角色 / 4 把武器补养成材料兜底（沿用同元素同星级模板，口径与原生成器一致）"""
import io, re, json, copy, sys, os
sys.path.insert(0, r'C:\Users\20285\IdeaProjects\xx')
from gen_new_chars import ALL_CHARS, NEW_WEAPONS

p = r'C:\Users\20285\IdeaProjects\xx\genshin-login-vue\src\data\materialsData.js'
src = io.open(p, encoding='utf-8').read()

def load_obj(varname):
    m = re.search(r'export const %s = (\{.*\})' % varname, src)
    if not m: raise RuntimeError('not found ' + varname)
    return json.loads(m.group(1)), m

cm, m1 = load_obj('CHARACTER_MATERIALS')
wm, m2 = load_obj('WEAPON_MATERIALS')

# 同元素模板（优先五星）
tpl_by_ele = {}
for k, v in cm.items():
    if not tpl_by_ele.get(v.get('element')) or v.get('rarity') == 5:
        tpl_by_ele[v.get('element')] = v

added_c = []
for c in ALL_CHARS:
    if c['name'] in cm: continue
    tpl = tpl_by_ele.get(c['element'])
    if not tpl:
        print('  [warn] 无模板', c['name'], c['element']); continue
    v = copy.deepcopy(tpl)
    v['name'] = c['name']
    v['element'] = c['element']
    v['rarity'] = c['rarity']
    cm[c['name']] = v
    added_c.append(c['name'])

# 同类型武器模板（优先五星）
tpl_by_type = {}
for k, v in wm.items():
    t = v.get('type')
    if not tpl_by_type.get(t) or v.get('rarity') == 5:
        tpl_by_type[t] = v
added_w = []
for w in NEW_WEAPONS:
    if w['name'] in wm: continue
    tpl = tpl_by_type.get(w['type'])
    if not tpl:
        print('  [warn] 无武器模板', w['name'], w['type']); continue
    v = copy.deepcopy(tpl)
    v['name'] = w['name']
    v['type'] = w['type']
    v['rarity'] = w['rarity']
    wm[w['name']] = v
    added_w.append(w['name'])

dumps = lambda o: json.dumps(o, ensure_ascii=False, separators=(',', ':'))
src = src[:m1.start(1)] + dumps(cm) + src[m1.end(1):]
# 重新定位第二处（第一处替换后偏移变化）
m2 = re.search(r'export const WEAPON_MATERIALS = (\{.*\})', src)
src = src[:m2.start(1)] + dumps(wm) + src[m2.end(1):]
io.open(p, 'w', encoding='utf-8', newline='\n').write(src)
print('新增角色材料:', len(added_c), added_c)
print('新增武器材料:', len(added_w), added_w)
print('CHARACTER_MATERIALS =', len(cm), ' WEAPON_MATERIALS =', len(wm))
