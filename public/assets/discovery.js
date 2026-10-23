// Progressive enhancement: all cards remain available without JavaScript.
const discovery=document.querySelector('.game-discovery');
if(discovery){
 const cards=[...document.querySelectorAll('#game-results .game-card')];
 const options=[...discovery.querySelectorAll('[data-category]')];
 const reset=discovery.querySelector('.discovery-reset');
 const count=discovery.querySelector('.discovery-count');
 let selected=null;
 const apply=category=>{
  selected=category;
  let visible=0;
  cards.forEach(card=>{
   card.hidden=!!selected&&!card.dataset.categories.split(' ').includes(selected);
   if(!card.hidden)visible++;
  });
  options.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.category===selected)));
  reset.setAttribute('aria-pressed',String(selected===null));
  count.textContent=`該当するゲーム：${visible}作品`;
 };
 options.forEach(button=>button.addEventListener('click',()=>apply(selected===button.dataset.category?null:button.dataset.category)));
 reset.addEventListener('click',()=>apply(null));
 // Do not persist filters in the URL or storage.
 apply(null);
 discovery.querySelector('.discovery-controls').hidden=false;
}
