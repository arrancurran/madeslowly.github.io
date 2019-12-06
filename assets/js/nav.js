navbar = document.querySelector('nav');
burger = document.querySelector('.burger div');
var a = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// get color of navbar

if (a < 768) {
  // if mobile -> lighter nav
  var navColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--mobile-nav-bg-var')
} else {
  var navColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--desktop-nav-bg-var')
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
