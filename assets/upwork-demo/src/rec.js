const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920,height:1080}});
await p.goto('file://'+process.cwd()+'/intro.html',{waitUntil:'networkidle'});await p.waitForTimeout(500);
await p.evaluate(()=>document.getAnimations().forEach(a=>a.pause()));
const fps=30,dur=5.5;for(let i=0;i<fps*dur;i++){const t=i*1000/fps;
await p.evaluate(t=>document.getAnimations().forEach(a=>{a.currentTime=t}),t);
await p.screenshot({path:`frames/f${String(i).padStart(4,'0')}.png`});}
await b.close();})();
