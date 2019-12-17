function displayItem( itemID ) {
  var item = document.getElementById( itemID );
  if (item === undefined) {
    item = 'dropdownContent' ;
  } ;
  item.classList.toggle('display-none');
}
