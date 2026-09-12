const button=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');
button?.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');button?.setAttribute('aria-expanded','false');}));
