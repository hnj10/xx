# -*- coding: utf-8 -*-
"""原神角色图片批量生成清单生成器
从后端接口数据读取角色列表，生成 manifest.json：中文名 -> 文件名(拼音)
"""
import json, re, unicodedata

with open(r'C:/Users/user/IdeaProjects/xx/chars.json', encoding='utf-8') as f:
    chars = json.load(f)['data']

# 拼音映射表：手工维护 118 个角色的拼音（含特殊名）
PINYIN = {
    '胡桃':'hutao','迪卢克':'diluke','钟离':'zhongli','可莉':'keli','纳西妲':'naxida',
    '雷电将军':'leidian-jiangjun','宵宫':'xiaogong','神里绫华':'shenli-linghua','迪希雅':'dixiya',
    '甘雨':'ganyu','林尼':'linni','枫原万叶':'fengyuan-wanye','阿蕾奇诺':'aleiqinuo','温迪':'wendi',
    '玛薇卡':'maweika','安柏':'anbai','班尼特':'bannite','香菱':'xiangling','辛焱':'xinyan',
    '烟绯':'yanfei','嘉明':'jiaming','托马':'tuoma','夏沃蕾':'xiawolei','莫娜':'mona',
    '达达利亚':'dadaliya','珊瑚宫心海':'shanhugong-xinhai','神里绫人':'shenli-lingren','夜兰':'yelan',
    '妮露':'nilu','那维莱特':'naweilaike','芙宁娜':'funingna','希格雯':'xigewen','玛拉妮':'malanni',
    '芭芭拉':'babala','塔利雅':'taliya','行秋':'xingqiu','坎蒂丝':'kandisi','爱诺':'ainuo',
    '刻晴':'keqing','八重神子':'bazhong-shenzi','赛诺':'sainuo','克洛琳德':'keluolinde',
    '瓦蕾莎':'waleisha','伊涅芙':'yineifu','菲林斯':'feilinsi','丽莎':'lisha','雷泽':'leize',
    '菲谢尔':'feixieer','北斗':'beidou','九条裟罗':'jiutiao-shaluo','久岐忍':'jiuqiren','多莉':'duoli',
    '赛索斯':'saisuosi','欧洛伦':'oluolun','伊安珊':'yianshan','七七':'qiqi','优菈':'youla',
    '申鹤':'shenhe','莱欧斯利':'laiousili','茜特菈莉':'xitelali','爱可菲':'aikefei','丝柯克':'sikeke',
    '凯亚':'kaiya','迪奥娜':'diaona','罗莎莉亚':'luosaliya','米卡':'mika','重云':'zhongyun',
    '莱依拉':'layila','菲米尼':'feimini','夏洛蒂':'xialuodi','琴':'qin','魈':'xiao',
    '流浪者':'liulangzhe','闲云':'xianyun','恰斯卡':'qiasika','梦见月瑞希':'mengjian-yue Ruixi',
    '砂糖':'shatang','蓝砚':'lanyan','鹿野院平藏':'luyeyuan-pingcang','早柚':'zaoYou',
    '珐露珊':'falushan','琳妮特':'linnite','伊法':'yifa','雅珂达':'yakeda','阿贝多':'abeiduo',
    '荒泷一斗':'huanglong-yidou','娜维娅':'naweiya','千织':'qianzhi','希诺宁':'xinuoning',
    '诺艾尔':'nuoaier','凝光':'ningguang','云堇':'yunjin','五郎':'wulang','卡齐娜':'kaqina',
    '叶洛亚':'yeluoya','提纳里':'tinali','艾尔海森':'aierhaisen','白术':'baizhu','艾梅莉埃':'aimolie',
    '基尼奇':'jiniqi','菈乌玛':'lawuma','奈芙尔':'naifuer','瑶瑶':'yaoyao','柯莱':'kelai',
    '卡维':'kawei','绮良良':'qiliangliang','法尔伽':'faerjia','尼可':'nike','杜林':'dulin','兹白':'zibai','洛恩':'luoen',
    '布伦妮':'bulunni','奥黛塔':'aodaita','阿罗夏':'aluoxia','薇斯纳':'weisina',
    '沃雅妮莎':'woyanisha','米提亚':'mitiya','瓦列里':'walieili'
}

manifest = []
missing = []
for c in chars:
    name = c['name']
    py = PINYIN.get(name)
    if not py:
        missing.append(name)
        py = 'unknown-' + str(c.get('id', len(manifest)))
    manifest.append({
        'id': c['id'], 'name': name, 'file': py,
        'element': c.get('element',''), 'role': c.get('role',''), 'rarity': c.get('rarity',4)
    })

with open(r'C:/Users/user/IdeaProjects/xx/gen_manifest.json','w',encoding='utf-8') as f:
    json.dump(manifest, f, ensure_ascii=False, indent=1)

print('total:', len(manifest))
print('missing pinyin:', missing if missing else 'none')
