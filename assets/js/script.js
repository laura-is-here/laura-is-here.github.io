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
    resetTheme(e, pressed);
  });
  
  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark'); 
    
    toggle.setAttribute('aria-pressed', darkThemeSelected);
    
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  }
  
  function resetTheme(e, pressed) {
    if (pressed !== true) {
      document.body.setAttribute('data-theme', 'dark'); 
      localStorage.setItem('themeSwitch', 'dark');  
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('theme-switch');
    }
  } 
}

/*

const themeSwitch = document.querySelector('#themeSwitch');
if(themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it
  
  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });
  
  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark'); 
    // update checkbox
    themeSwitch.setAttribute('aria-pressed', 'true');
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  };
  
  function resetTheme() {
    if(themeSwitch.getAttribute('aria-pressed', 'true')) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  };
}
window.onscroll = function() {
  if ((document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) && (!menuContent.classList.contains('show'))) {
    navBar.classList.add('shrink');
  } else if (navBar.classList.contains('shrink')) {
    navBar.classList.remove('shrink');
  }
}

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
*/