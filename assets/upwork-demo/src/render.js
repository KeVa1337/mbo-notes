const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:750},deviceScaleFactor:2});
await p.goto('file://'+process.cwd()+'/slides.html',{waitUntil:'networkidle'});await p.waitForTimeout(800);
for(const id of ['s1','s2','s3']){await (await p.$('#'+id)).screenshot({path:`portfolio-${id}.png`});}
await b.close();})();
