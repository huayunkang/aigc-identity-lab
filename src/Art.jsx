import React from 'react'

export default function Art({ identity, id = 'art', className = '' }) {
  const first = identity?.palette?.[0] || '#79e5df'
  const second = identity?.palette?.[1] || '#b4a0ff'
  const symbol = identity?.symbol || 'orbital'
  const stars = Array.from({ length: 26 }, (_, i) => ({ x: (i * 109 + 41) % 520, y: (i * 73 + 26) % 620, r: i % 6 === 0 ? 2 : 1 }))
  return <svg className={className} viewBox="0 0 520 620" role="img" aria-label={`${identity?.name || '幻想角色'}原创抽象插画`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`${id}-bg`} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#102139"/><stop offset=".53" stopColor="#12132d"/><stop offset="1" stopColor="#08131e"/></linearGradient>
      <radialGradient id={`${id}-aura`}><stop stopColor={first} stopOpacity=".62"/><stop offset=".5" stopColor={second} stopOpacity=".16"/><stop offset="1" stopColor={second} stopOpacity="0"/></radialGradient>
      <linearGradient id={`${id}-metal`} x1="0" x2="1" y1="0" y2="1"><stop stopColor={first}/><stop offset=".5" stopColor="#ecf8f5"/><stop offset="1" stopColor={second}/></linearGradient>
      <filter id={`${id}-glow`}><feGaussianBlur stdDeviation="8"/></filter>
      <pattern id={`${id}-grid`} width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="#a9d3ed" strokeOpacity=".1"/></pattern>
    </defs>
    <rect width="520" height="620" fill={`url(#${id}-bg)`}/>
    <rect width="520" height="620" fill={`url(#${id}-grid)`}/>
    <ellipse cx="260" cy="274" rx="265" ry="260" fill={`url(#${id}-aura)`}/>
    <g fill="#e8f8ff">{stars.map((s,i)=><circle key={i} cx={s.x} cy={s.y} r={s.r} opacity={i % 3 === 0 ? .8 : .35}/>)}</g>
    <g fill="none" stroke={first} strokeOpacity=".2"><circle cx="260" cy="286" r="198"/><circle cx="260" cy="286" r="154"/><path d="M20 286H500M260 42V540"/></g>
    <g transform="translate(260 284)">
      <circle r="110" fill={first} opacity=".08" filter={`url(#${id}-glow)`}/>
      {symbol === 'gear' && <g><circle r="110" fill="none" stroke={`url(#${id}-metal)`} strokeWidth="8" strokeDasharray="42 18"/><circle r="83" fill="none" stroke={second} strokeWidth="2"/><circle r="30" fill="none" stroke={first} strokeWidth="4"/><path d="M-78-78L78 78M78-78L-78 78" stroke={first} strokeWidth="2" opacity=".7"/></g>}
      {symbol === 'circuit' && <g stroke={`url(#${id}-metal)`} fill="none" strokeWidth="3"><path d="M-112-72h65l47 47v78l-40 40h-73M112-80H45L12-47v90l43 45h60M-124 18h57l38-39M123 20H66L36 50"/><rect x="-39" y="-42" width="78" height="84" rx="16"/><circle r="17" fill={first} opacity=".65"/></g>}
      {symbol === 'orbital' && <g fill="none" stroke={`url(#${id}-metal)`}><ellipse rx="130" ry="50" transform="rotate(-34)" strokeWidth="3"/><ellipse rx="128" ry="50" transform="rotate(48)" strokeWidth="2"/><circle r="48" strokeWidth="3"/><circle r="23" fill={first} fillOpacity=".34"/><circle cx="-105" cy="63" r="7" fill={first}/><circle cx="98" cy="-78" r="5" fill={second}/></g>}
      {symbol === 'leaf' && <g fill="none" stroke={`url(#${id}-metal)`} strokeWidth="3"><path d="M0 110C-130 68-110-72 0-118C110-72 130 68 0 110Z"/><path d="M0 110V-93M0 45L-67-25M0 18L67-48"/><circle r="12" fill={first}/></g>}
      {symbol === 'bloom' && <g fill="none" stroke={`url(#${id}-metal)`} strokeWidth="3">{Array.from({length:8},(_,i)=><ellipse key={i} cy="-57" rx="29" ry="66" transform={`rotate(${i*45})`}/>)}<circle r="26" fill={first} fillOpacity=".38"/></g>}
      {symbol === 'eye' && <g fill="none" stroke={`url(#${id}-metal)`} strokeWidth="3"><path d="M-140 0Q0-132 140 0Q0 132-140 0Z"/><circle r="57"/><circle r="25" fill={first} fillOpacity=".48"/><path d="M0-155V-112M0 112V155M-167 0h-28M167 0h28"/></g>}
      {symbol === 'sun' && <g fill="none" stroke={`url(#${id}-metal)`} strokeWidth="4"><circle r="76"/><circle r="52" fill={first} fillOpacity=".17"/>{Array.from({length:12},(_,i)=><path key={i} d="M0-98V-137" transform={`rotate(${i*30})`}/>)}</g>}
      {symbol === 'moon' && <g fill="none" stroke={`url(#${id}-metal)`} strokeWidth="4"><path d="M60-113C-2-108-54-53-54 13c0 64 48 112 106 112-92 29-178-34-178-127 0-83 67-151 151-151 13 0 25 2 35 5Z"/><path d="M92-70v55M65-43h55M105 55v35M87 72h36"/></g>}
    </g>
    <g fill="none" stroke={first} opacity=".55"><path d="M24 22h42M24 22v42M496 22h-42M496 22v42M24 598h42M24 598v-42M496 598h-42M496 598v-42" strokeWidth="2"/></g>
    <text x="32" y="572" fill="#d9eef4" fontFamily="monospace" fontSize="12" letterSpacing="3" opacity=".7">IDENTITY / {identity?.serial || '000'}</text>
  </svg>
}
