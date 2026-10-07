export const questions = [
  { key: 'major', eyebrow: '01 / YOUR FIELD', title: '你来自哪种知识领域？', options: [
    { label: '机械与工程', icon: '⚙', hint: '精密构造与创造' }, { label: '数字与科技', icon: '⌘', hint: '代码、信号与未来' },
    { label: '艺术与设计', icon: '✦', hint: '感知、色彩与想象' }, { label: '人文与探索', icon: '◇', hint: '故事、观察与发现' }
  ] },
  { key: 'personality', eyebrow: '02 / YOUR NATURE', title: '你最像哪一种行动者？', options: [
    { label: '冷静观察者', icon: '◉', hint: '先看清，再出手' }, { label: '热血开拓者', icon: '↗', hint: '向未知迈出第一步' },
    { label: '温柔共鸣者', icon: '☾', hint: '读懂他人的光' }, { label: '自由幻想家', icon: '✧', hint: '总能想到新可能' }
  ] },
  { key: 'world', eyebrow: '03 / YOUR WORLD', title: '哪一扇异世界之门吸引你？', options: [
    { label: '机械蒸汽城', icon: '⚙', hint: '齿轮和雾气' }, { label: '霓虹赛博城', icon: '⌁', hint: '信息和夜色' },
    { label: '秘法森林', icon: '❋', hint: '古老而鲜活' }, { label: '星际边境', icon: '✺', hint: '无垠的远方' }
  ] },
  { key: 'color', eyebrow: '04 / YOUR SIGNAL', title: '选择你的能量颜色。', options: [
    { label: '电光青', icon: '●', hint: '#65F0E2', hex: '#65f0e2' }, { label: '星云紫', icon: '●', hint: '#B5A0FF', hex: '#b5a0ff' },
    { label: '日冕金', icon: '●', hint: '#F5C979', hex: '#f5c979' }, { label: '暮光粉', icon: '●', hint: '#FFA7C2', hex: '#ffa7c2' }
  ] },
  { key: 'ability', eyebrow: '05 / YOUR POWER', title: '如果只能带走一项能力？', options: [
    { label: '创造万物', icon: '✳', hint: '让构想成为现实' }, { label: '解读秘密', icon: '◇', hint: '看见隐藏的线索' },
    { label: '守护同伴', icon: '⬡', hint: '为别人撑起光' }, { label: '穿越边界', icon: '↗', hint: '去往地图之外' }
  ] }
]

export const archetypes = [
  { name: '机械星图师', tag: '机械 / 星空', symbol: 'orbital', blurb: '把废弃齿轮排成星图，在轰鸣的工坊里计算下一次黎明。', skill: '星轨校准：为团队找出混乱中最清晰的路线。', prompt: 'mechanical astronomer, brass astrolabe, luminous star charts', palette: ['#e9b96f','#77d8e7'], accent: '#e9b96f' },
  { name: '霓虹协议师', tag: '赛博 / 信号', symbol: 'circuit', blurb: '在午夜的光纤雨里编写新的规则，让失联的声音再次相遇。', skill: '信号共振：连接分散的线索与伙伴。', prompt: 'cyber signal architect, neon data rain, holographic circuits', palette: ['#67e8e0','#ad8cff'], accent: '#67e8e0' },
  { name: '雾港发明家', tag: '蒸汽朋克 / 发明', symbol: 'gear', blurb: '口袋里总有一颗螺丝和一个大胆的想法，足以让旧机器重新起飞。', skill: '奇想装配：把不可能拼成可运行的原型。', prompt: 'steampunk inventor, copper workshop, tiny airship', palette: ['#f6c77a','#e88b73'], accent: '#f6c77a' },
  { name: '秘林咏光者', tag: '奇幻 / 自然', symbol: 'leaf', blurb: '能听懂树叶之间的低语，并让微光在迷路的人脚下延伸。', skill: '微光引路：在陌生环境中守护同行者。', prompt: 'fantasy forest luminary, bioluminescent leaves, soft magic', palette: ['#7ce0ac','#b8a2ff'], accent: '#7ce0ac' },
  { name: '星门远航员', tag: '星空 / 探索', symbol: 'orbital', blurb: '将地图边缘当作起点，把每一颗陌生的星都称作可能。', skill: '跃迁直觉：发现别人尚未看见的方向。', prompt: 'star gate voyager, deep space horizon, glowing constellations', palette: ['#a3b6ff','#76e6ee'], accent: '#a3b6ff' },
  { name: '水彩造梦师', tag: '水彩 / 幻想', symbol: 'bloom', blurb: '把平凡的午后晕染成会呼吸的风景，让色彩替沉默开口。', skill: '灵感显影：将朦胧感受变成可见的故事。', prompt: 'watercolor dreamweaver, flowing pigments, ethereal paper texture', palette: ['#ffaac4','#b6a5f9'], accent: '#ffaac4' },
  { name: '夜幕寻迹者', tag: '侦探 / 都市', symbol: 'eye', blurb: '注意到雨滴停在窗边的角度，也记得每个细小故事的来处。', skill: '细节回声：从碎片里还原事情的真相。', prompt: 'noir detective, rain soaked futuristic city, subtle clues', palette: ['#a9c4ec','#e7b27a'], accent: '#a9c4ec' },
  { name: '荒原拾光者', tag: '废土 / 希望', symbol: 'sun', blurb: '在旧世界留下的裂缝里种下新芽，寻找仍值得守护的东西。', skill: '余烬新生：让失效之物拥有第二次生命。', prompt: 'wasteland light collector, reclaimed technology, hopeful sunrise', palette: ['#f1a77c','#d4d98a'], accent: '#f1a77c' },
  { name: '时钟档案官', tag: '蒸汽朋克 / 记忆', symbol: 'gear', blurb: '替城市保管走失的时间，在钟声响起前找回关键的一页。', skill: '瞬时回溯：从旧记录中找到新答案。', prompt: 'clockwork archivist, grand library, floating brass gears', palette: ['#e5bf89','#8fbed4'], accent: '#e5bf89' },
  { name: '量子织梦者', tag: '赛博 / 艺术', symbol: 'circuit', blurb: '把算法织成有温度的画布，让冰冷的像素也学会讲故事。', skill: '像素编织：将信息重组为动人的表达。', prompt: 'quantum visual artist, iridescent pixels, futuristic studio', palette: ['#e5a9ff','#6ee4d7'], accent: '#e5a9ff' },
  { name: '月影守望者', tag: '奇幻 / 守护', symbol: 'moon', blurb: '在无人注意的角落点亮灯塔，温柔地挡住夜色最深的地方。', skill: '月光屏障：让同行者拥有继续前行的勇气。', prompt: 'moonlit guardian, silver cloak, enchanted lighthouse', palette: ['#b8bbff','#a3e8d9'], accent: '#b8bbff' },
  { name: '星尘译码员', tag: '星空 / 侦探', symbol: 'eye', blurb: '倾听宇宙背景里的微弱讯号，把遥远文明的问候译成诗。', skill: '星语解码：理解不同世界留下的讯息。', prompt: 'cosmic codebreaker, observatory, stardust data streams', palette: ['#f4cb98','#95b8ff'], accent: '#f4cb98' }
]

export const palette = ['#65f0e2', '#b5a0ff', '#f5c979', '#ffa7c2']

export function calculateIdentity(answers) {
  if (!Array.isArray(answers) || answers.length !== 5 || answers.some(n => !Number.isInteger(n) || n < 0 || n > 3)) return null
  const [major, personality, world, color, ability] = answers
  // The world selects a family; the other choices select one of three identities.
  // All 12 are reachable and every answer influences the card below.
  const index = (major * 3 + personality * 2 + ability + color) % 3
  const families = [[2, 8, 0], [1, 9, 6], [3, 10, 5], [4, 11, 7]]
  const archetype = archetypes[families[world][index]]
  const stats = [
    48 + ((major * 13 + ability * 9 + personality * 5) % 49),
    46 + ((personality * 15 + world * 6 + color * 5) % 51),
    45 + ((world * 17 + major * 7 + ability * 4) % 52),
    50 + ((ability * 15 + color * 8 + personality * 3) % 47)
  ]
  const serial = (major * 256 + personality * 64 + world * 16 + color * 4 + ability).toString(16).toUpperCase().padStart(3, '0')
  return { ...archetype, answers, serial, color: palette[color], stats, constellation: ['构造', '解码', '共鸣', '远航'][ability], temperament: ['沉静', '炽热', '温柔', '自由'][personality], field: ['工程', '科技', '艺术', '人文'][major] }
}

export function encodeAnswers(answers) { return answers.join('') }
export function decodeAnswers(value) {
  if (!/^[0-3]{5}$/.test(value || '')) return null
  return [...value].map(Number)
}
