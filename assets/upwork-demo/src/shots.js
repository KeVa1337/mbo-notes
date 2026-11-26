const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();
for(const v of ['broken','fixed']){
 const p=await b.newPage({viewport:{width:375,height:812},deviceScaleFactor:3,isMobile:false});
 await p.goto('http://localhost:8765/examples/en/coffee.html',{waitUntil:'networkidle'});
 await p.addStyleTag({content:fs.readFileSync(v+'.css','utf8')});
 await p.waitForTimeout(2500);
 await p.screenshot({path:`hero-${v}.png`});
 await p.evaluate(()=>{document.querySelectorAll('.reveal').forEach(e=>e.classList.add('is-in','in','visible'))});
 const adds=await p.$$('#menu .add'); for(const a of adds.slice(0,2)){await a.click({force:true});await p.waitForTimeout(200);}
 await p.evaluate(()=>{const o=document.querySelector('#order .total');window.scrollTo(0,o.getBoundingClientRect().top+window.scrollY-90)});
 await p.waitForTimeout(1500);
 await p.evaluate(()=>{document.querySelectorAll('.reveal').forEach(e=>e.classList.add('is-in','in','visible'))});
 await p.waitForTimeout(800);
 await p.screenshot({path:`form-${v}.png`});
 await p.close();}
await b.close();})();
