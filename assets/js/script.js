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

const colorSwitch = document.querySelector('#colorSwitch');

if(colorSwitch) {
  colorSwitch.addEventListener('click', (e) => {
    let target = e.target.nextElementSibling;

    if(target.hasAttribute('hidden')) {
      target.removeAttribute('hidden');
      e.target.setAttribute('aria-expanded', 'true');
      target.addEventListener('click', (e) => changeColor(e))
    } else {
      target.setAttribute('hidden', '');
      e.target.setAttribute('aria-expanded', 'false');
    }
  });

  function changeColor(e) {
    if (e.target.classList.contains('orange-hue')) {
      document.documentElement.classList.add('color-in-transition');
      document.documentElement.style.setProperty('--main-hue', 'var(--red-hue');
      document.documentElement.style.setProperty('--accent-hue', 'var(--yellow-hue');
      window.setTimeout(function() {
        document.documentElement.classList.remove('color-in-transition') }, 1000
      );
    } else if (e.target.classList.contains('blue-hue')) {
      document.documentElement.classList.add('color-in-transition');
      document.documentElement.style.setProperty('--main-hue', 'var(--blue-hue');
      document.documentElement.style.setProperty('--accent-hue', 'var(--pink-hue');
      window.setTimeout(function() {
        document.documentElement.classList.remove('color-in-transition') }, 1000
      );
    } else if (e.target.classList.contains('pink-hue')) {
      document.documentElement.classList.add('color-in-transition');
      document.documentElement.style.setProperty('--main-hue', 'var(--pink-hue');
      document.documentElement.style.setProperty('--accent-hue', 'var(--green-hue');
      window.setTimeout(function() {
        document.documentElement.classList.remove('color-in-transition') }, 1000
      );
    }
  }
}