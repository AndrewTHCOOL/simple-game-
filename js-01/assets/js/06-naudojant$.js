 /*
  * Prieš naudojant jQuery biblioteką nepamirškite ją įsitraukti į HTML dokumentą.
  */

//// pagrindiniai veiksmai su elementais
  // elemento suradimas
var elem = $('#CSS.selektorius');      // grąžina vieną narį 
          
  // elemento sukūrimas
var naujasElementas = $('<span></span>');

  // elemento keitimas
  //* turinys
  naujasElementas.html("<i>wow</i>");
  naujasElementas.text("wow");
  //* atributai
  naujasElementas.attr('class', 'box red');
  naujasElementas.attr('style', 'color : red');

  // elemento prijungimas
  elem.append(naujasElementas);

  // elemento ištrinimas
  naujasElementas.remove();

////// įvykiai
  //// funkcijos iškvietimas sukūrus DOM
  function pranesk(){
    alert("DOM buvo sukurtas");
  }
  $(document).ready(pranesk);

  //// funkcijos priskirimas elemento įvykiui
  function paspaude(){
    alert('Iškvietei funkciją įvykus įvykiui.');
  }
  naujasElementas.on('click', paspaude);