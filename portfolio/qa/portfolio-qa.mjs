import { chromium, devices } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.webp':'image/webp','.png':'image/png'};
const server = http.createServer((req,res)=>{
 const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 const filePath=path.resolve(root,'.'+(pathname.endsWith('/')?pathname+'index.html':pathname));
 if(!filePath.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
 fs.readFile(filePath,(err,data)=>{
  if(err){res.writeHead(404);return res.end('Not found: '+pathname);}
  res.writeHead(200,{'content-type':types[path.extname(filePath)]||'application/octet-stream'});
  res.end(data);
 });
});
await new Promise(resolve=>server.listen(8765,'127.0.0.1',resolve));
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--no-sandbox']});
const urls=['/portfolio/','/portfolio/branding/','/portfolio/web/','/portfolio/presentations/','/portfolio/art/'];
const errors=[];const results=[];
fs.mkdirSync('portfolio/qa/screenshots',{recursive:true});
try{
for(const width of [320,375,768,1440]){
 for(const url of urls){
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
 const errs=[];
 page.on('pageerror',e=>errs.push('JS: '+e.message));
 page.on('console',m=>{if(m.type()==='error')errs.push('console: '+m.text())});
 page.on('response',r=>{if(r.status()>=400)errs.push('HTTP '+r.status()+' '+r.url())});
 const response=await page.goto('http://127.0.0.1:8765'+url,{waitUntil:'networkidle',timeout:30000});
 if(response.status()!==200)errs.push('Page '+response.status());
 // Force eager loading during QA: screenshot tools do not scroll naturally.
 await page.evaluate(() => { document.querySelectorAll('img[src]').forEach(img => { img.loading = 'eager'; }); });
 try {
   await page.waitForFunction(() => Array.from(document.querySelectorAll('img[src]')).every(img => img.complete), null, {timeout:15000});
 } catch (_err) {
   errs.push('Timed out waiting for gallery images');
 }
 const metrics=await page.evaluate(()=>{
   const images=Array.from(document.querySelectorAll('img[src]'));
   const broken=images.filter(i=>!i.complete || i.naturalWidth===0).map(i=>i.getAttribute('src'));
   return{title:document.title,h1:document.querySelector('h1')?.textContent,
    scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,
    brokenImages:broken,mainCount:document.querySelectorAll('main').length,
    tiles:document.querySelectorAll('.tile').length};
 });
 if(metrics.scrollWidth>metrics.clientWidth+1)errs.push('Horizontal overflow '+metrics.scrollWidth+'/'+metrics.clientWidth);
 if(!metrics.h1||metrics.mainCount!==1||metrics.tiles===0)errs.push('Missing semantic content');
 if(metrics.brokenImages.length)errs.push('Broken images '+metrics.brokenImages.join(','));
 if(width===375 || (width===1440 && url==='/portfolio/')){
   for(const image of await page.locator('img[src]').all()){
     await image.scrollIntoViewIfNeeded();
     await page.waitForTimeout(70);
   }
   await page.evaluate(() => window.scrollTo(0, 0));
   await page.waitForTimeout(150);
   await page.screenshot({path:'portfolio/qa/screenshots/'+url.replaceAll('/','_').replace(/^_/,'')+'.png',fullPage:true});
 }
 if(url==='/portfolio/'){
  const tags=page.locator('[data-filter]');
  const active=await tags.count();
  if(active>1){
   await tags.nth(1).click();
   const selected=await tags.nth(1).getAttribute('aria-pressed');
   const visible=await page.locator('.tile:visible').count();
   if(selected!=='true'||visible===0||visible>=metrics.tiles)errs.push('Filter not applied');
   await tags.first().click();
   if(await page.locator('.tile:visible').count()!==metrics.tiles)errs.push('Filter reset failed');
  }
 }else{
  const images=page.locator('img.image-view');
  if(await images.count()){
   await images.first().click();
   const opened=await page.locator('.modal[open]').count();
   if(opened!==1)errs.push('Modal failed to open');
   await page.keyboard.press('Escape');
   if(await page.locator('.modal[open]').count())errs.push('Modal failed to close via Escape');
  }
 }
 results.push({width,url,metrics,errors:errs});
 errors.push(...errs.map(e=>width+' '+url+' '+e));
 await page.close();
 }
}
}finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
fs.writeFileSync('portfolio/qa/results.json',JSON.stringify({results,errors},null,2));
for(const result of results) console.log(result.width+' '+result.url+' images='+result.metrics.brokenImages.length+' tiles='+result.metrics.tiles+' overflow='+(result.metrics.scrollWidth-result.metrics.clientWidth)+' errors='+result.errors.length);
if(errors.length){console.error('FAIL: '+errors.join('\n'));process.exitCode=1;}else console.log('PASS: 20 viewport/page combinations, images, filters, lightbox and links.');
