const menuToggle = document.querySelector('#menu-toggler');
const html = document.querySelector('html');
const menuContent = document.querySelector('.nav-content');
const navBar = document.querySelector('nav');

document.addEventListener('DOMContentLoaded', () => {
  html.classList.toggle('js');
});

const toggle = document.querySelector('[aria-pressed]');

if(toggle) {
  initTheme();
  
  toggle.addEventListener('click', (e) => {  
    let pressed = e.target.getAttribute('aria-pressed') === 'true';
    e.target.setAttribute('aria-pressed', String(!pressed));
    resetTheme(pressed);
  });
  
  function initTheme() {
    let mediaQueryList = window.matchMedia('(prefers-dark-theme)');
    let darkThemeSelected = ((localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark') || (mediaQueryList.matches)); 
    
    toggle.setAttribute('aria-pressed', darkThemeSelected);
    
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  }
  
  function resetTheme(pressed) {
    if (!pressed) {
      document.documentElement.classList.add('color-in-transition');
      document.body.setAttribute('data-theme', 'dark'); 
      window.setTimeout(function() {
        document.documentElement.classList.remove('color-in-transition') }, 1000
      );
      localStorage.setItem('themeSwitch', 'dark');  
    } else {
      document.documentElement.classList.add('color-in-transition');
      document.body.removeAttribute('data-theme');
      window.setTimeout(function() {
        document.documentElement.classList.remove('color-in-transition') }, 1000
      );
      localStorage.removeItem('themeSwitch');
    }
  }; 
}