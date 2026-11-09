# -*- coding: utf-8 -*-
"""
圣遗物套装图标生成器
====================
按 springBootTest/sql/artifact_sets.sql 中的 55 套圣遗物，程序化生成统一风格、
带实物感的部件图标（生之花 / 死之羽 / 时之沙 / 空之杯 / 理之冠 五种造型轮换）。

输出：
  genshin-login-vue/public/artifacts/<slug>.png   —— 后端 image 字段 /artifacts/xxx.png 指向此目录
  genshin-login-vue/src/assets/artifacts/<slug>.png —— imageMap.js 的小图标映射指向此目录

依赖：Pillow（已装于 C:/Users/20285/.workbuddy/binaries/python/envs/default）
重跑即可按最新 SQL 重新生成全部图标。
"""
import io
import os
import re
import math
import random

from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.abspath(__file__))
SQL = os.path.join(ROOT, 'springBootTest', 'sql', 'artifact_sets.sql')
OUT_PUBLIC = os.path.join(ROOT, 'genshin-login-vue', 'public', 'artifacts')
OUT_ASSETS = os.path.join(ROOT, 'genshin-login-vue', 'src', 'assets', 'artifacts')
os.makedirs(OUT_PUBLIC, exist_ok=True)
os.makedirs(OUT_ASSETS, exist_ok=True)

FONT_BOLD = r'C:\Windows\Fonts\msyhbd.ttc'
FONT_REG = r'C:\Windows\Fonts\msyh.ttc'

S = 2                      # 超采样倍数（先画 2 倍再缩小，抗锯齿）
SIZE = 400                 # 最终边长
W = SIZE * S

# ---------------------------------------------------------------- 颜色工具
def hex2rgb(h):
    h = (h or '#888888').lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def mix(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def lighten(c, t):
    return mix(c, (255, 255, 255), t)


def darken(c, t):
    return mix(c, (10, 12, 24), t)


def radial_bg(size, base, glow):
    """深色底 + 主题色中心光晕，返回 RGB 图像"""
    img = Image.new('RGB', (size, size), (9, 12, 26))
    px = img.load()
    cx = cy = size / 2
    maxr = size * 0.72
    for y in range(size):
        for x in range(size):
            d = math.hypot(x - cx, y - cy) / maxr
            d = min(1.0, d)
            # 中心亮、边缘暗
            k = (1.0 - d) ** 1.7
            col = mix(darken(base, 0.62), glow, k * 0.85)
            # 轻微暗角
            col = mix(col, (6, 8, 18), max(0, d - 0.62) * 0.9)
            px[x, y] = col
    return img


def gold_ring(d, size, color):
    """双金环 + 方位刻痕"""
    cx = cy = size / 2
    gold = (232, 200, 122)
    for r, wdt, alpha in [(size * 0.445, 6, 255), (size * 0.415, 2, 150)]:
        d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=gold + (alpha,), width=int(wdt * S))
    # 8 个方位小菱形
    for i in range(8):
        a = math.pi * 2 * i / 8 - math.pi / 2
        rr = size * 0.445
        x, y = cx + math.cos(a) * rr, cy + math.sin(a) * rr
        s = 7 * S
        d.polygon([(x, y - s), (x + s * 0.7, y), (x, y + s), (x - s * 0.7, y)], fill=gold + (235,))


def star(d, cx, cy, r, fill):
    pts = []
    for i in range(10):
        a = math.pi * 2 * i / 10 - math.pi / 2
        rr = r if i % 2 == 0 else r * 0.45
        pts.append((cx + math.cos(a) * rr, cy + math.sin(a) * rr))
    d.polygon(pts, fill=fill)


def gradient_shape(base_poly, size, base, hi, outline, line_w=5):
    """给多边形做上亮下暗渐变 + 描边，返回 RGBA 图层"""
    layer = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    mask = Image.new('L', (size, size), 0)
    md = ImageDraw.Draw(mask)
    md.polygon(base_poly, fill=255)
    grad = Image.new('RGBA', (size, size))
    gp = grad.load()
    ys = [p[1] for p in base_poly]
    y0, y1 = min(ys), max(ys)
    for y in range(size):
        t = 0 if y1 == y0 else (y - y0) / (y1 - y0)
        c = mix(lighten(base, 0.35), darken(base, 0.35), t)
        for x in range(size):
            gp[x, y] = c + (255,)
    layer.paste(grad, (0, 0), mask)
    # 斜向高光
    hl = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    hd = ImageDraw.Draw(hl)
    hd.polygon([(p[0] - size * 0.02, p[1] - size * 0.02) for p in base_poly[:3]], fill=(255, 255, 255, 40))
    layer = Image.alpha_composite(layer, hl)
    # 描边
    od = ImageDraw.Draw(layer)
    od.line(list(base_poly) + [base_poly[0]], fill=outline + (255,), width=int(line_w * S), joint='curve')
    return layer


# ---------------------------------------------------------------- 五种部件造型
def shape_flower(cx, cy, u):
    """生之花：花心 + 6 花瓣"""
    polys = []
    R = u * 0.62
    for i in range(6):
        a = math.pi * 2 * i / 6 - math.pi / 2
        px, py = cx + math.cos(a) * R * 0.6, cy + math.sin(a) * R * 0.6
        p = []
        for j in range(9):
            t = math.pi * 2 * j / 8
            rad = R * 0.52 * (1 + 0.18 * math.cos(t * 2))
            ang = a + t * 0.16
            p.append((px + math.cos(ang) * rad * math.cos(t) - math.sin(ang) * rad * math.sin(t) * 0.55,
                      py + math.sin(ang) * rad * math.cos(t) + math.cos(ang) * rad * math.sin(t) * 0.55))
        polys.append(p)
    return polys


def shape_feather(cx, cy, u):
    """死之羽：羽片 + 羽轴"""
    R = u * 0.78
    left, right, shaft = [], [], []
    # 羽片轮廓（柳叶形，上宽下窄）
    for i in range(16):
        t = i / 15
        y = cy - R + 2 * R * t
        wdt = R * 0.34 * math.sin(math.pi * (0.12 + t * 0.82)) * (1 - t * 0.35)
        left.append((cx - wdt - R * 0.10 * math.sin(t * 3), y))
    for i in range(16):
        t = 1 - i / 15
        y = cy - R + 2 * R * t
        wdt = R * 0.34 * math.sin(math.pi * (0.12 + t * 0.82)) * (1 - t * 0.35)
        right.append((cx + wdt + R * 0.10 * math.sin(t * 3), y))
    shaft = [(cx, cy - R * 0.92), (cx + R * 0.03, cy + R * 1.0)]
    return [left + right]


def shape_hourglass(cx, cy, u):
    """时之沙：沙漏上下梯形 + 束腰"""
    R = u * 0.66
    top = [(cx - R, cy - R), (cx + R, cy - R), (cx + R * 0.13, cy), (cx - R * 0.13, cy)]
    bot = [(cx - R * 0.13, cy), (cx + R * 0.13, cy), (cx + R, cy + R), (cx - R, cy + R)]
    return [top, bot]


def shape_goblet(cx, cy, u):
    """空之杯：杯身 + 杯柄 + 底座"""
    R = u * 0.6
    cup = [(cx - R, cy - R), (cx + R, cy - R), (cx + R * 0.72, cy + R * 0.12),
           (cx, cy + R * 0.42), (cx - R * 0.72, cy + R * 0.12)]
    stem = [(cx - R * 0.12, cy + R * 0.35), (cx + R * 0.12, cy + R * 0.35),
            (cx + R * 0.12, cy + R * 0.82), (cx - R * 0.12, cy + R * 0.82)]
    foot = [(cx - R * 0.62, cy + R * 0.82), (cx + R * 0.62, cy + R * 0.82),
            (cx + R * 0.78, cy + R), (cx - R * 0.78, cy + R)]
    return [cup, stem, foot]


def shape_crown(cx, cy, u):
    """理之冠：王冠尖齿 + 冠带"""
    R = u * 0.68
    crown = [(cx - R, cy + R * 0.55), (cx - R, cy - R * 0.2),
             (cx - R * 0.5, cy + R * 0.05), (cx - R * 0.52, cy - R * 0.62),
             (cx, cy - R * 0.05), (cx + R * 0.52, cy - R * 0.62),
             (cx + R * 0.5, cy + R * 0.05), (cx + R, cy - R * 0.2),
             (cx + R, cy + R * 0.55)]
    band = [(cx - R, cy + R * 0.55), (cx + R, cy + R * 0.55),
            (cx + R, cy + R * 0.86), (cx - R, cy + R * 0.86)]
    return [crown, band]


SHAPES = [shape_flower, shape_feather, shape_hourglass, shape_goblet, shape_crown]
SHAPE_LABEL = ['生之花', '死之羽', '时之沙', '空之杯', '理之冠']


def draw_icon(name, color, rarity, idx):
    base = hex2rgb(color)
    glow = lighten(base, 0.28)
    img = radial_bg(W, base, glow).convert('RGBA')

    # 中心柔光
    halo = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    hd = ImageDraw.Draw(halo)
    r = W * 0.30
    hd.ellipse([W / 2 - r, W / 2 - r, W / 2 + r, W / 2 + r], fill=glow + (90,))
    halo = halo.filter(ImageFilter.GaussianBlur(28 * S))
    img = Image.alpha_composite(img, halo)

    d = ImageDraw.Draw(img, 'RGBA')
    gold_ring(d, W, base)

    # 部件造型
    fn = SHAPES[idx % 5]
    polys = fn(W / 2, W / 2 - W * 0.02, W * 0.30)
    outline = lighten(base, 0.45)
    for p in polys:
        img = Image.alpha_composite(img, gradient_shape(p, W, base, glow, outline, 5))
    d = ImageDraw.Draw(img, 'RGBA')

    # 部件中心宝石
    jr = W * 0.052
    d.ellipse([W / 2 - jr, W / 2 - W * 0.02 - jr, W / 2 + jr, W / 2 - W * 0.02 + jr],
              fill=lighten(base, 0.6) + (235,), outline=(255, 244, 210, 255), width=int(2.5 * S))

    # 顶部星级
    n = 5 if rarity >= 5 else 4 if rarity == 4 else 3
    sr = W * 0.021
    gap = sr * 2.6
    sx0 = W / 2 - (n - 1) * gap / 2
    for i in range(n):
        star(d, sx0 + i * gap, W * 0.145, sr, (255, 214, 120, 255))

    # 底部名称条
    bar_h = W * 0.135
    bar = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    bd = ImageDraw.Draw(bar)
    bd.rectangle([0, W - bar_h, W, W], fill=(8, 11, 24, 205))
    bd.line([(0, W - bar_h), (W, W - bar_h)], fill=lighten(base, 0.3) + (200,), width=int(2 * S))
    img = Image.alpha_composite(img, bar)
    d = ImageDraw.Draw(img, 'RGBA')

    fsize = int(W * 0.072)
    font = ImageFont.truetype(FONT_BOLD, fsize)
    txt = name
    bbox = d.textbbox((0, 0), txt, font=font)
    tw = bbox[2] - bbox[0]
    if tw > W * 0.9:
        fsize = int(fsize * W * 0.9 / tw)
        font = ImageFont.truetype(FONT_BOLD, fsize)
        bbox = d.textbbox((0, 0), txt, font=font)
        tw = bbox[2] - bbox[0]
    tx = (W - tw) / 2
    ty = W - bar_h + (bar_h - (bbox[3] - bbox[1])) / 2 - bbox[1] - W * 0.006
    d.text((tx + 2 * S, ty + 2 * S), txt, font=font, fill=(0, 0, 0, 180))
    d.text((tx, ty), txt, font=font, fill=(245, 240, 228, 255))

    # 部件小标签：居中放在名称条上方，避免被外环裁切
    try:
        lf = ImageFont.truetype(FONT_REG, int(W * 0.040))
        lab = SHAPE_LABEL[idx % 5]
        lb = d.textbbox((0, 0), lab, font=lf)
        lw = lb[2] - lb[0]
        lx = (W - lw) / 2
        ly = W - bar_h - W * 0.072
        # 胶囊底衬，保证在亮背景上也可读
        pad = W * 0.018
        d.rounded_rectangle([lx - pad, ly - pad * 0.4, lx + lw + pad, ly + (lb[3] - lb[1]) + pad * 0.6],
                            radius=W * 0.022, fill=(8, 11, 24, 170))
        d.text((lx, ly - lb[1]), lab, font=lf, fill=lighten(base, 0.6) + (235,))
    except Exception:
        pass

    img = img.convert('RGB').resize((SIZE, SIZE), Image.LANCZOS)
    return img


# ---------------------------------------------------------------- 解析 SQL
def parse_rows():
    txt = io.open(SQL, encoding='utf-8').read()
    rows = []
    for m in re.finditer(r"\((\d+),'([^']+)',(\d+),'([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)',(\d+),(\d+)\)", txt):
        _id, name, rarity, _el, _rg, _2p, _4p, _fl, image, color, _so, _st = m.groups()
        slug = os.path.basename(image).replace('.png', '')
        rows.append((name, slug, color, int(rarity)))
    return rows


def main():
    rows = parse_rows()
    # imageMap.js 里额外引用、但 SQL 未包含的别名，补生成同名文件
    extra = {
        'huixiang-zhlin': ('回响之林', '#d9c07a', 5),
    }
    print('SQL sets:', len(rows))
    made = 0
    for i, (name, slug, color, rarity) in enumerate(rows):
        img = draw_icon(name, color, rarity, i)
        for out in (OUT_PUBLIC, OUT_ASSETS):
            img.save(os.path.join(out, slug + '.png'), optimize=True)
        made += 1
    for slug, (name, color, rarity) in extra.items():
        idx = len(rows)
        img = draw_icon(name, color, rarity, idx)
        for out in (OUT_PUBLIC, OUT_ASSETS):
            img.save(os.path.join(out, slug + '.png'), optimize=True)
        made += 1
    print('generated:', made, 'icons -> ', OUT_PUBLIC)


if __name__ == '__main__':
    main()
