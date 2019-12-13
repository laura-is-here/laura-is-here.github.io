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
    
    let colorThemeSelected = localStorage.getItem('colorSwitch');
    if(colorThemeSelected) {
      setColor(colorThemeSelected);
    }
    console.log(colorThemeSelected);
    
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
    
    function setColor(colorThemeSelected) {
      localStorage.setItem('colorSwitch', colorThemeSelected);  
      document.documentElement.style.setProperty('--main-hue', ['var(--' + colorThemeSelected + ')']);
    }
    
    const colorSwitch = document.querySelector('#colorSwitch');
    
    if(colorSwitch) {
      colorSwitch.addEventListener('click', (e) => {
        let target = e.target.nextElementSibling;
        
        document.querySelector('.close').addEventListener('click', () => {
          target.setAttribute('hidden', '');
          colorSwitch.setAttribute('aria-expanded', 'false');
        });
        
        if(target.hasAttribute('hidden')) {
          target.removeAttribute('hidden');
          e.target.setAttribute('aria-expanded', 'true');
          target.addEventListener('click', (e) => {
            changeColor(e);
          });
        } else {
          target.setAttribute('hidden', '');
          e.target.setAttribute('aria-expanded', 'false');
        }
      });
      
      function close(e, target) {
        if(e.target.classList.contains('close')) {
        }
      }
      
      function changeColor(e) {
        document.documentElement.classList.add('color-in-transition');
        if (e.target.classList.contains('orange-hue')) {
          colorThemeSelected = 'orange-hue';
          setColor(colorThemeSelected);
        } else if (e.target.classList.contains('blue-hue')) {
          colorThemeSelected = 'blue-hue';
          setColor(colorThemeSelected);
        } else if (e.target.classList.contains('pink-hue')) {
          colorThemeSelected = 'pink-hue';
          setColor(colorThemeSelected);
        }
        window.setTimeout(function() {
          document.documentElement.classList.remove('color-in-transition') }, 1000
          );
        }
      }