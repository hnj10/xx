// 七国元素定义：名称 / CSS 变量名 / 代表色 / 简化符文 SVG（仅内部 path 片段）
export const NATIONS = [
  {
    name: '蒙德',
    varName: '--anemo',
    hex: '#6fd6c0',
    svg: '<path d="M12 2c3 3 3 6 0 9-3-3-3-6 0-9Zm0 11c-3 3-3 6 0 9 3-3 3-6 0-9Z" />'
  },
  {
    name: '璃月',
    varName: '--geo',
    hex: '#f6c35b',
    svg: '<path d="M12 2 22 12 12 22 2 12Z" />'
  },
  {
    name: '稻妻',
    varName: '--electro',
    hex: '#a781e0',
    svg: '<path d="M12 2 14 9 21 9 15 14 17 21 12 16 7 21 9 14 3 9 10 9Z" />'
  },
  {
    name: '须弥',
    varName: '--dendro',
    hex: '#5fd08a',
    svg: '<path d="M12 2C8 8 8 14 12 22 16 14 16 8 12 2Zm0 6c-2 3-2 7 0 12 2-5 2-9 0-12Z" />'
  },
  {
    name: '枫丹',
    varName: '--hydro',
    hex: '#4ec6f0',
    svg: '<path d="M12 2C7 9 5 13 5 16a7 7 0 0 0 14 0c0-3-2-7-7-14Z" />'
  },
  {
    name: '纳塔',
    varName: '--pyro',
    hex: '#ff7a59',
    svg: '<path d="M12 2c2 4-1 5 0 8 1-1 2-1 3 0 2 4 1 9-3 12-4-3-5-8-3-12 1-1 2-1 3 0-1-3 2-4 0-8Z" />'
  },
  {
    name: '至冬',
    varName: '--cryo',
    hex: '#bfe6f2',
    svg: '<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" stroke-width="2"/>'
  }
]

// 生成完整的 <svg> 字符串（用于 v-html，确保 SVG 命名空间正确）
export function svgFull(inner) {
  return `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">${inner}</svg>`
}
