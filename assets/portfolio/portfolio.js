(()=>{'use strict';
const filters=[...document.querySelectorAll('[data-filter]')];
const projects=[...document.querySelectorAll('[data-category]')];
for(const control of filters){control.addEventListener('click',()=>{const value=control.dataset.filter;for(const b of filters){const active=b===control;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));}for(const p of projects)p.hidden=value!=='all'&&p.dataset.category!==value;});}
const dialog=document.getElementById('lightbox');const pic=document.getElementById('lightboxImage');const title=document.getElementById('lightboxTitle');
if(dialog&&pic&&title&&typeof dialog.showModal==='function'){
 document.querySelectorAll('[data-view-image]').forEach(b=>b.addEventListener('click',()=>{pic.src=b.dataset.viewImage;title.textContent=b.dataset.viewTitle||'Просмотр работы';dialog.showModal();}));
 document.getElementById('closeLightbox').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>pic.removeAttribute('src'));
}
const brief='Здравствуйте! Хочу обсудить задачу.\n1. Что требуется: \n2. Где будет использоваться: \n3. Исходные материалы и референсы: \n4. Объём / количество страниц или экранов: \n5. Срок: \n6. Желаемый формат файлов: \n7. Бюджет / порядок оплаты: ';
const copy=document.getElementById('copyBrief');const result=document.getElementById('copyResult');
if(copy&&result){copy.addEventListener('click',async()=>{try{if(!navigator.clipboard?.writeText)throw new Error('unavailable');await navigator.clipboard.writeText(brief);result.textContent='Шаблон ТЗ скопирован — вставьте в переписку.';}catch(e){result.textContent='Не удалось скопировать автоматически. Укажите задачу, сроки, формат и исходники в Telegram.';}});}
})();
