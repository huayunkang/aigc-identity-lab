function roundedRect(ctx,x,y,w,h,r) { ctx.beginPath(); ctx.roundRect(x,y,w,h,r) }
function textWrap(ctx,text,x,y,maxWidth,lineHeight,maxLines=3) {
  let line=''; let count=0
  for (const char of text) {
    if (ctx.measureText(line+char).width > maxWidth && line) { ctx.fillText(line,x,y); y+=lineHeight; line=''; count++; if (count>=maxLines) break }
    line+=char
  }
  if (line && count<maxLines) ctx.fillText(line,x,y)
}

export async function exportCard(identity) {
  const canvas=document.createElement('canvas'); canvas.width=1080; canvas.height=1680
  const c=canvas.getContext('2d'); const {width:w,height:h}=canvas
  const bg=c.createLinearGradient(0,0,w,h); bg.addColorStop(0,'#0d1e31'); bg.addColorStop(.52,'#10152c'); bg.addColorStop(1,'#07141d'); c.fillStyle=bg; c.fillRect(0,0,w,h)
  const aura=c.createRadialGradient(540,420,20,540,420,470); aura.addColorStop(0,identity.palette[0]+'88'); aura.addColorStop(.58,identity.palette[1]+'25'); aura.addColorStop(1,'#00000000'); c.fillStyle=aura; c.fillRect(0,0,w,850)
  c.strokeStyle='#ffffff12'; c.lineWidth=1; for(let x=0;x<w;x+=54){c.beginPath();c.moveTo(x,0);c.lineTo(x,850);c.stroke()} for(let y=0;y<850;y+=54){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke()}
  // Reuse the exact original SVG artwork, including its symbol and palette.
  const svg=document.querySelector('#result-art svg'); if(svg) {
    const serialized=new XMLSerializer().serializeToString(svg); const src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(serialized)
    const img=new Image(); await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=reject;img.src=src})
    c.drawImage(img,115,126,850,710)
  }
  c.fillStyle='#a8c2d2'; c.font='600 25px Arial, sans-serif'; c.fillText('AIGC IDENTITY LAB  /  东海幻想档案',76,86)
  c.fillStyle=identity.color; c.font='700 25px Arial, sans-serif'; c.fillText(identity.tag.toUpperCase(),76,858)
  c.fillStyle='#f1f8fc'; c.font='bold 82px "Microsoft YaHei", sans-serif'; c.fillText(identity.name,72,964)
  c.fillStyle='#abc2d1'; c.font='32px "Microsoft YaHei", sans-serif'; textWrap(c,identity.blurb,76,1033,925,50,2)
  c.strokeStyle='#ffffff24'; c.beginPath();c.moveTo(76,1126);c.lineTo(1004,1126);c.stroke()
  const labels=['创造力','洞察力','行动力','共鸣力']; labels.forEach((label,i)=>{
    const x=76+(i%2)*500,y=1197+Math.floor(i/2)*104
    c.fillStyle='#b7ccd6';c.font='27px "Microsoft YaHei", sans-serif';c.fillText(label,x,y)
    c.fillStyle='#eef7fa';c.font='bold 30px Arial, sans-serif';c.fillText(String(identity.stats[i]),x+398,y)
    c.fillStyle='#ffffff20';roundedRect(c,x,y+18,430,9,5);c.fill();c.fillStyle=identity.color;roundedRect(c,x,y+18,430*identity.stats[i]/100,9,5);c.fill()
  })
  c.fillStyle=identity.color;c.font='bold 27px "Microsoft YaHei", sans-serif';c.fillText('专属技能',76,1424)
  c.fillStyle='#e1eef3';c.font='26px "Microsoft YaHei", sans-serif';textWrap(c,identity.skill,210,1424,780,38,2)
  c.strokeStyle='#ffffff24'; c.beginPath();c.moveTo(76,1500);c.lineTo(1004,1500);c.stroke()
  c.fillStyle=identity.color;c.font='bold 22px Arial, sans-serif';c.fillText('PROMPT FRAGMENT',76,1550)
  c.fillStyle='#b8ced7';c.font='22px Arial, sans-serif';textWrap(c,identity.prompt,76,1590,930,30,2)
  c.fillStyle='#7893a5';c.font='21px Arial, sans-serif';c.fillText(`ID ${identity.serial}  •  #DonghaiIdentityLab`,76,1650)
  return new Promise(resolve=>canvas.toBlob(blob=>resolve(blob),'image/png'))
}
