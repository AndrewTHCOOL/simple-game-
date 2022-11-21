// document === window.document


//// pagrindiniai veiksmai su elementais
  // elemento suradimas
var elem = document.querySelector('#CSS.selektorius');      // grąžina vieną narį  
    elem = document.querySelectorAll('#CSS.selektorius');   // grąžina sąrašą
    elem = document.getElementById('elementoID');           // grąžina vieną narį
    elem = document.getElementsByClassName('elementuKlase');// grąžina sąrašą 
    elem = document.getElementsByTagNam('p');               // grąžina sąrašą
          
  // elemento sukūrimas
var naujasElementas = document.createElement('span');

  // elemento keitimas
  //* turinys
  naujasElementas.innerHTML = "<i>wow</i>";
  naujasElementas.innerText = "wow";
  //* atributai
  naujasElementas.setAttribute('class', 'box red');
  naujasElementas.setAttribute('style', 'color : red');

  // elemento prijungimas
  elem.append(naujasElementas);

  // elemento ištrinimas
  naujasElementas.remove();

////// įvykiai
  //// funkcijos iškvietimas sukūrus DOM
  function pranesk(){
    alert("DOM buvo sukurtas");
  }
  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    pranesk();
  } else {
    document.addEventListener('DOMContentLoaded', pranesk);
  }
  //// funkcijos priskirimas elemento įvykiui
  function paspaude(){
    alert('Iškvietei funkciją įvykus įvykiui.');
  }
  // 1 būdas
  naujasElementas.onclick = paspaude;
  // 2 būdas
  naujasElementas.addEventListener('dblclick', paspaude);
  

