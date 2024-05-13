// Ham
const ham = document.querySelector('#ham');

ham.addEventListener('click', function(){
    ham.classList.toggle('ham-active');
});

// Navbar Fixed
window.onscroll = function()
{
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
}