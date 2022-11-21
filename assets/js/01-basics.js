//Komentaras

/*
  Komentaru blokas
*/

// Kintamojo kurimas
var kintamasis = 'reiksme';

/*
"String"  String
'String'  String
'15'      String
15        Number
15.15     Number
true      Boolean
false     Boolean
undefined Kai kintamajam nepriskirta reiksme
null      Kintamasis turi "nieko" reiksme
*/

/*
  Kintamojo varduose galimi simboliai
  _$a-Z0-9 , rasoma camelCase formatu
*/

// Aritmetiniai operatoriai
var skaicius = 15 + 5; // Sudeties
 skaicius = 15 - 5; // Atimties
 skaicius = 15 / 5; // Dalybos
 skaicius = 15 * 5; // Daugybos
 skaicius = 15 % 5; // Liekanos

'15' + 15 // '1515' | Sudeties operatoriu galima naudoti sujungiant String tipo objektus.

// Priskirimas greiciau:
 skaicius += 5; 
 skaicius -= 5; 
 skaicius /= 5; 
 skaicius *= 5; 
 skaicius %= 5; 
 skaicius++; // pirma isveda, tada prideda
 skaicius--;
 ++skaicius; // pirma prideda, tada isveda
 --skaicius;

// Loginiai operatoriai
var bool = false && true; // false | antros reiksmes netikrina
    bool = false & true;  // 0 | tikrina ir antra reiksme
    bool = true || false; // true | antros netikrina
    bool = true | false;  // 1 | bet tikrina ir antraja reiksme

// Palyginimo operatoriai
var bool = 15 > 10;  // true
    bool = 15 < 10;  // false
    bool = 15 >= 10; // true | 15 daugiau ARBA lygu 10
    bool = 15 <= 10; // false| maziau arba lygu
    bool = 15 == 10; // false
    bool = 15 === 10;// false
    bool = '10' == 10;// true
    bool = '10' === 10;// false

// Veiksmai su String obejektu.
var pavadinimas = "KlPvM";
    pavadinimas.length; // 5 
    pavadinimas.toUpperCase; // KLPVM 
    pavadinimas.toLowerCase; // klpvm 

// Masyvai (Arrays)
var masyvas = []; // naujas tuscias masyvas
    masyvas = ['Vilnius', 'Kaunas', 'Klaipeda']; // naujas su reiksmemis.
    
    // Elementu indeksai skaiciuojami nuo 0;
    masyvas[0];// 'Vilnius'
    masyvas[1];// 'Kaunas'
    masyvas[3];// 'Klaipeda'
    
    masyvas.length; // 3 | Isveda kiek masyve yra nariu 
    masyvas.push('Siauliai'); // prideda i pabaiga 
    masyvas.unshift('Panevezys'); //prideda i pradzia

    masyvas.pop(); // ismeta nuo galo. 
    masyvas.shift(); //ismeta nuo pradzios
    
    var nuoKelintoIsmest = 0;
    var kiekIsmest = 1;
    var kaPridet1 = 'Palanga';
    var kaPrider2 = 'Visaginas';
    masyvas.splice(nuoKelintoIsmest, kiekIsmest, kaPridet1, kaPrider2); // Leidzia ismesti elementus nuo nurodytos vietos, ir ten ideti naujus.

    var masyvas2 = ['Rukla', 'Druskininkai'];
    var sujungti = masyvas.concat(masyvas2); // Sujungia du masyvus i viena.
    
    // .indexOf() grazina elemento indeksa masyve.
    var elementoIndeksasMasyve = sujungti.indexOf("Rukla");

    // .join() sujungia narius per nurodyta reiksme ir grazina string.
    var miestai = masyvas2.join("~*~"); // Rukla~*~Druskininkai