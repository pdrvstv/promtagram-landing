const fs=require('fs'),vm=require('vm'),assert=require('assert');
class El{
 constructor(tag='DIV'){this.tagName=tag;this.children=[];this.dataset={};this.attrs={};this.events={};this.classes=new Set();this.classList={add:(...x)=>x.forEach(a=>this.classes.add(a)),toggle:(x,on)=>on?this.classes.add(x):this.classes.delete(x),contains:x=>this.classes.has(x)};this.style={setProperty:(k,v)=>this.style[k]=v};this.clientWidth=800;this.offsetHeight=350;this.tabIndex=-1;}
 set innerHTML(v){if(v.includes('Предыдущая')){this.buttons=[new El('BUTTON'),new El('BUTTON')];this.count=new El('SPAN');}}
 querySelector(s){return s==='span'?this.count:s==='h3'?{textContent:this.title}:s==='a[href]'?this.link:null;}
 querySelectorAll(s){return s==='button'?this.buttons:s==='a,button'?(this.link?[this.link]:[]):[];}
 setAttribute(k,v){this.attrs[k]=v;} addEventListener(k,fn){(this.events[k]??=[]).push(fn);} after(x){this.controls=x;} focus(){this.focused=true;} closest(s){return s==='.ptg-cf-item'?this:s==='a,button'?(this.tagName==='A'?this:null):null;}
 click(){this.clicks=(this.clicks||0)+1;}setPointerCapture(id){this.capture=id;}hasPointerCapture(id){return this.capture===id;}releasePointerCapture(){this.capture=null;}
 fire(type,props={}){let e={target:this,preventDefault(){this.prevented=true},stopImmediatePropagation(){this.stopped=true},...props};for(const fn of this.events[type]||[])fn(e);return e;}
}
function section(n){let stage=new El();stage.children=Array.from({length:n},(_,i)=>{let c=new El();c.title='Card '+i;c.link=new El('A');return c});return {stage,classList:new El().classList,querySelector:s=>s==='.carousel-controls'?null:stage};}
const cases=section(9),media=section(8);let resizes=[];const doc={body:{classList:{contains:()=>true}},readyState:'complete',querySelector:s=>s==='#cases'?cases:media,createElement:()=>new El()};
vm.runInNewContext(fs.readFileSync(require('path').join(__dirname,'../assets/coverflow.js'),'utf8'),{document:doc,window:{},ResizeObserver:class{constructor(cb){resizes.push(cb)}observe(){}},performance:{now:()=>1000},setTimeout});
assert.equal(cases.stage.controls.count.textContent,'1 / 9');assert.equal(media.stage.controls.count.textContent,'1 / 8');
cases.stage.controls.buttons[1].fire('click');assert.equal(cases.stage.controls.count.textContent,'2 / 9');assert.equal(media.stage.controls.count.textContent,'1 / 8');
let side=cases.stage.children[3];assert(cases.stage.fire('click',{target:side}).prevented);assert.equal(cases.stage.controls.count.textContent,'4 / 9');assert.equal(side.link.clicks,undefined);
cases.stage.fire('click',{target:side});assert.equal(side.link.clicks,1);
cases.stage.fire('keydown',{key:'ArrowLeft'});assert.equal(cases.stage.controls.count.textContent,'3 / 9');
const ev={isPrimary:true,button:0,pointerId:1,clientX:200,clientY:100};cases.stage.fire('pointerdown',ev);cases.stage.fire('pointermove',{...ev,clientX:100});cases.stage.fire('pointerup',{...ev,clientX:100});assert.equal(cases.stage.controls.count.textContent,'4 / 9');assert(cases.stage.fire('click',{target:side}).prevented);assert.equal(side.link.clicks,1);
media.stage.fire('wheel',{deltaY:100,deltaX:0});assert.equal(media.stage.controls.count.textContent,'2 / 8');assert.equal(cases.stage.controls.count.textContent,'4 / 9');
for(let i=0;i<20;i++)cases.stage.controls.buttons[1].fire('click');assert(cases.stage.controls.buttons[1].disabled);assert(!cases.stage.fire('wheel',{deltaY:100,deltaX:0}).prevented);
for(const w of [360,390,430,768,1024,1440,1920]){cases.stage.clientWidth=w;resizes[0]();assert(parseFloat(cases.stage.style['--cf-width'])<=w);}
assert.equal(cases.stage.children.filter(x=>x.tabIndex===0).length,1);
console.log('PASS: independent state; arrow buttons; keyboard; side/active click; drag suppresses navigation; wheel; edge release; resize calculations; tab order. No browser layout validation.');
