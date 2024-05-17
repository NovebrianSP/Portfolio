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
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}