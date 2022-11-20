//// Ciklai
var amzius = 5;

for (var i=0; i < 15 ; i++ ) {
  continue;
  break;
}

while( amzius < 18 ){
  amzius++;
  break;
}

do {    // atlieka viska bent karta.
  console.log(amzius++);
} while( amzius < 18 );


var meniuPasirinkimas = 1;

////Sąlygos sakiniai
if ( meniuPasirinkimas === 0) {
    // Sukurti nauja vartotoja
} else if (meniuPasirinkimas === 1) {
    // Isvesttu vartotojo duomenis
} else if (meniuPasirinkimas === 2) {
  // Pakeisti vartotojo duomenis   
} else if (meniuPasirinkimas === 3) {
  // Istrintu vartotoja      
} else {
  // exit
}

switch (meniuPasirinkimas) {
  case 0 : 
    console.log("Sukurti nauja vartotoja");
    break;
  case 1 :
    console.log("Isvesttu vartotojo duomenis");
    break;
  case 2 :
    console.log("Pakeisti vartotojo duomenis");
    break;
  case 3 :
    console.log("Istrintu vartotoja");
    break;
  default : 
    console.log("exit")
}