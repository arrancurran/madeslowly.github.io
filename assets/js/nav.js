navbar = document.querySelector('nav');
burger = document.querySelector('.burger div');
var a = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// get color of navbar
var navColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-bg-var')

// load nav color if reloading and pageYOffset != 0
window.onload = function() { navBarScroll() };

window.onscroll = function() { navBarScroll() };

function navBarScroll() {
  var currentScrollPos = window.pageYOffset;
  if (window.pageYOffset != 0) {
    navbar.style.background = navColor ;
    //navbar.style.color = "white";
  } else {
    navbar.style.background = "rgba(0,0,0,0)" ;
    //navbar.style.color = "black";
  }
}
