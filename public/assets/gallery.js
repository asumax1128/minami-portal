// Native horizontal scrolling supports touch and remains usable without JavaScript.
document.querySelectorAll('.game-gallery').forEach(gallery=>{
 const track=gallery.querySelector('.gallery-track');
 const slides=[...track.querySelectorAll('.gallery-slide')];
 const previous=gallery.querySelector('.gallery-prev');
 const next=gallery.querySelector('.gallery-next');
 const count=gallery.querySelector('.gallery-count');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let index=0,frame;
 const position=i=>slides[i].offsetLeft-slides[0].offsetLeft;
 const update=()=>{
  index=slides.reduce((best,slide,i)=>Math.abs(position(i)-track.scrollLeft)<Math.abs(position(best)-track.scrollLeft)?i:best,0);
  count.textContent=`${index+1} / ${slides.length}`;
  // Keep controls focusable at either end so keyboard focus never disappears.
  previous.setAttribute('aria-disabled',String(index===0));
  next.setAttribute('aria-disabled',String(index===slides.length-1));
  slides.forEach((slide,i)=>{slide.querySelector('a').tabIndex=i===index?0:-1;});
 };
 const go=i=>track.scrollTo({left:position(Math.max(0,Math.min(slides.length-1,i))),behavior:reduced.matches?'instant':'smooth'});
 previous.addEventListener('click',()=>go(index-1));
 next.addEventListener('click',()=>go(index+1));
 track.addEventListener('scroll',()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(update);},{passive:true});
 track.addEventListener('keydown',event=>{
  const moves={ArrowLeft:index-1,ArrowRight:index+1,Home:0,End:slides.length-1};
  if(Object.hasOwn(moves,event.key)){event.preventDefault();go(moves[event.key]);}
 });
 // Re-align the active image after viewport/orientation changes.
 new ResizeObserver(()=>{track.scrollTo({left:position(index),behavior:'instant'});update();}).observe(track);
 gallery.querySelector('.gallery-controls').hidden=false;
 update();
});
