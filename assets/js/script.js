const menuToggle = document.querySelector('#menu-toggler');
const html = document.querySelector('html');
const menuContent = document.querySelector('.nav-content');
const headerHeight = document.querySelector('header').scrollHeight;
const navBar = document.querySelector('nav');
const menuToggleIcon = menuToggle.children;

document.addEventListener('DOMContentLoaded', () => {
    html.classList.toggle('js');
});

/*
window.onscroll = function() {
    if ((document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) && (!menuContent.classList.contains('show'))) {
        navBar.classList.add('shrink');
    } else if (navBar.classList.contains('shrink')) {
        navBar.classList.remove('shrink');
    }
}
*/

menuToggle.addEventListener('click', () => {
   menuContent.classList.toggle('show'); 
   if (menuContent.classList.contains('show')) {
       menuToggleIcon.item(0).innerHTML = 'Close';
       menuToggleIcon.item(1).classList.replace('fa-bars', 'fa-window-close');
   } else {
       menuToggleIcon.item(0).innerHTML = 'Menu';
       menuToggleIcon.item(1).classList.replace('fa-window-close', 'fa-bars');
   }
});

