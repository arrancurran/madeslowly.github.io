function displayItem( itemID ) {
  var item = document.getElementById( itemID );
  if (item === undefined) {
    item = 'dropdownContent' ;
  } ;
  item.classList.toggle('display-none');
}
/*
var x = window.matchMedia("(max-width: 767px)") ;
if ( x.matches ) {

  var item = document.getElementById( 'itemID' );
  if (item === undefined) {
    item = 'dropdownContent' ;
  } ;
  window.onload = displayItem('dropdownContent') ;
}
*/
