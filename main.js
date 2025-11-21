const navMenu = document.getElementById('nav-menu');
const menuBtn = document.getElementById('menu-btn');
const navHeader = document.querySelector('.nav__header');
const navLinks = document.querySelectorAll('#nav-menu a');
const contactBtn = document.querySelector('.nav__btn');
let menuOpen = false;


menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  navMenu.classList.toggle('open', menuOpen);
  navHeader.classList.toggle('hide', menuOpen);
  document.body.classList.toggle('no-scroll', menuOpen);

  menuBtn.innerHTML = menuOpen
  ? '<i class="ri-close-line"></i>'
  : '<i class="ri-menu-line"></i>';
});

function closeMenu(){
  navMenu.classList.remove('open');
  navHeader.classList.remove('hide');
  document.body.classList.remove('no-scroll');
  menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
  menuOpen = false;
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      const section = document.querySelector(href);
      if(section){
        section.scrollIntoView({ behavior: 'smooth'});
      }
    }
    closeMenu();
  });
});

if(contactBtn){
  contactBtn.addEventListener('click', () => {
    closeMenu();
  });
}