//// Funkcijos 
// Funkcijų kūrimas
function sumosKvadratas(a, b) {
  var suma = a + b;
  return suma * suma;
}

function isvestiSumosKvadrata(x, y) {
  console.log(sumosKvadratas(x, y));
}
var pranesimas = function (text) {
  console.log("~* " + text + " *~");
}

//Funkcijų iškvietimas
isvestiSumosKvadrata(10, 15);
pranesimas("perduodu String");

var iksas = 5;
var ygrikas = 6;
var atsakymas = (function (x, y) {
  var grazinti = sumosKvadratas(x, y);
  console.log("Save iškviečianti funkcija kuri gražina " + x + " ir " + y + " sumos kvadratą.");
  return grazinti;
})(iksas, ygrikas)
console.log("atsakymas " + atsakymas);