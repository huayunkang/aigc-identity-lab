function roundedRect(ctx,x,y,w,h,r) { ctx.beginPath(); ctx.roundRect(x,y,w,h,r) }
function textWrap(ctx,text,x,y,maxWidth,lineHeight,maxLines=3) {
  const lines=['']
  for (const char of text) {
    const last=lines.length-1
    if (ctx.measureText(lines[last]+char).width > maxWidth && lines[last]) lines.push('')
    lines[lines.length-1]+=char
  }
  if (lines.length>1 && [...lines.at(-1)].length<4) {
    const prev=[...lines.at(-2)]
    const moved=prev.splice(-Math.min(9,Math.floor(prev.length/2))).join('')
    lines[lines.length-2]=prev.join('')
    lines[lines.length-1]=moved+lines.at(-1)
  }
  lines.slice(0,maxLines).forEach((line,i)=>ctx.fillText(line,x,y+i*lineHeight))
}

export function exportCard(identity) {
  const canvas=document.createElement('canvas'); canvas.width=1080; canvas.height=1880
  const c=canvas.getContext('2d'); const {width:w,height:h}=canvas
  const bg=c.createLinearGradient(0,0,w,h); bg.addColorStop(0,'#0d1e31'); bg.addColorStop(.52,'#10152c'); bg.addColorStop(1,'#07141d'); c.fillStyle=bg; c.fillRect(0,0,w,h)
  const aura=c.createRadialGradient(540,420,20,540,420,470); aura.addColorStop(0,identity.palette[0]+'88'); aura.addColorStop(.58,identity.palette[1]+'25'); aura.addColorStop(1,'#00000000'); c.fillStyle=aura; c.fillRect(0,0,w,850)
  c.strokeStyle='#ffffff12'; c.lineWidth=1; for(let x=0;x<w;x+=54){c.beginPath();c.moveTo(x,0);c.lineTo(x,850);c.stroke()} for(let y=0;y<850;y+=54){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke()}
  // Draw the selected identity's bundled original illustration into the card.
  const img=document.querySelector('#result-art img'); if(img) {
    if (!img.complete || !img.naturalWidth) throw Error('Artwork has not loaded')
    const targetWidth=850,targetHeight=880
    const targetRatio=targetWidth/targetHeight, sourceRatio=img.naturalWidth/img.naturalHeight
    let sx=0,sy=0,sw=img.naturalWidth,sh=img.naturalHeight
    if(sourceRatio>targetRatio){sw=img.naturalHeight*targetRatio;sx=(img.naturalWidth-sw)/2}
    else{sh=img.naturalWidth/targetRatio;sy=(img.naturalHeight-sh)/2}
    c.drawImage(img,sx,sy,sw,sh,115,126,targetWidth,targetHeight)
  }
  c.fillStyle='#a8c2d2'; c.font='600 25px Arial, sans-serif'; c.fillText('AIGC IDENTITY LAB  /  东海幻想档案',76,86)
  c.fillStyle=identity.color; c.font='700 25px Arial, sans-serif'; c.fillText(identity.tag.toUpperCase(),76,1048)
  c.fillStyle='#f1f8fc'; c.font='bold 82px "Microsoft YaHei", sans-serif'; c.fillText(identity.name,72,1154)
  c.fillStyle='#abc2d1'; c.font='32px "Microsoft YaHei", sans-serif'; textWrap(c,identity.blurb,76,1223,925,50,2)
  c.strokeStyle='#ffffff24'; c.beginPath();c.moveTo(76,1316);c.lineTo(1004,1316);c.stroke()
  const labels=['创造力','洞察力','行动力','共鸣力']; labels.forEach((label,i)=>{
    const x=76+(i%2)*500,y=1387+Math.floor(i/2)*104
    c.fillStyle='#b7ccd6';c.font='27px "Microsoft YaHei", sans-serif';c.fillText(label,x,y)
    c.fillStyle='#eef7fa';c.font='bold 30px Arial, sans-serif';c.fillText(String(identity.stats[i]),x+398,y)
    c.fillStyle='#ffffff20';roundedRect(c,x,y+18,430,9,5);c.fill();c.fillStyle=identity.color;roundedRect(c,x,y+18,430*identity.stats[i]/100,9,5);c.fill()
  })
  c.fillStyle=identity.color;c.font='bold 27px "Microsoft YaHei", sans-serif';c.fillText('专属技能',76,1614)
  c.fillStyle='#e1eef3';c.font='26px "Microsoft YaHei", sans-serif';textWrap(c,identity.skill,210,1614,780,38,2)
  c.strokeStyle='#ffffff24'; c.beginPath();c.moveTo(76,1690);c.lineTo(1004,1690);c.stroke()
  c.fillStyle=identity.color;c.font='bold 22px Arial, sans-serif';c.fillText('PROMPT FRAGMENT',76,1740)
  c.fillStyle='#b8ced7';c.font='22px Arial, sans-serif';textWrap(c,identity.prompt,76,1780,930,30,2)
  c.fillStyle='#7893a5';c.font='21px Arial, sans-serif';c.fillText(`ID ${identity.serial}  •  #DonghaiIdentityLab`,76,1840)
  return canvas.toDataURL('image/png')
}
