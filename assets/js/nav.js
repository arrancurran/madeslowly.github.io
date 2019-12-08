navbar = document.querySelector('nav');
burger = document.querySelector('.burger div');
var a = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// get color of navbar
var navColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-bg-var')

// load nav color if reloading and pageYOffset != 0
window.onload = function() {
  var currentScrollPos = window.pageYOffset;
  if (window.pageYOffset != 0) {
    //burger.style.background = linkColorScrolled;
    navbar.style.background = navColor ;
  } else {
    navbar.style.background = "rgba(0,0,0,0)" ;
  }
}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (window.pageYOffset != 0) {
    //burger.style.background = linkColorScrolled;
    navbar.style.background = navColor ;
  } else {
    navbar.style.background = "rgba(0,0,0,0)" ;
  }
}
