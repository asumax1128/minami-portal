(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');
  if (!button || !menu) return;
  button.hidden = false;
  document.documentElement.classList.add('menu-ready');
  function setOpen(open, restoreFocus = false) {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    menu.hidden = !open;
    if (restoreFocus) button.focus();
  }
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) setOpen(false, true);
  });
  document.addEventListener('click', event => {
    if (!menu.hidden && !menu.contains(event.target) && !button.contains(event.target)) setOpen(false);
  });
  const desktop = matchMedia('(min-width: 651px)');
  desktop.addEventListener('change', () => setOpen(false));
})();
