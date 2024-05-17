// Ham
const ham = document.querySelector('#ham');
const navMenu = document.querySelector('#nav-menu');

ham.addEventListener('click', function () {
    ham.classList.toggle('ham-active');
    navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const top = document.querySelector('#top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        top.classList.remove('hidden');
        top.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        top.classList.remove('flex');
        top.classList.add('hidden');
    }
}

// Outside Ham
window.addEventListener('click', function(e){
    if(e.target !=ham && e.target != navMenu){
        ham.classList.remove('ham-active');
        navMenu.classList.add('hidden');
    }
})

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
   if (darkToggle.checked){
    html.classList.add('dark');
    localStorage.theme = 'dark'
   } else {
    html.classList.remove('dark');
    localStorage.theme = 'light'
   }
})

// Toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }