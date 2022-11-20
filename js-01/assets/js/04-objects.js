//// objektai

//// objekto kurimas
  // 1 būdas
var zmogus00 = new Object();
  // 2 būdas
var zmogus01 = {};
var zmogus02 = {
  vardas: "Dalia",
  amzius: 61,
  seneti: function () {
    this.amzius++;
  },
  prisistatyk: function () {
    console.log("Sveiki, as vardu " + this.vardas);
  }
};
  // 3 būdas
function Zmogus(vardas, amzius) {
  this.vardas = vardas;
  this.amzius = amzius;
  this.seneti = function () {
      this.amzius++;
    },
    this.prisistatyk = function () {
      console.log("Sveiki, as vardu " + this.vardas);
    }
}
var zmogus03 = new Zmogus("Vytautas", 85);

//// objekto laukų reikšmių gavimas
  console.log(zmogus03.vardas);
  console.log(zmogus03['vardas']);

//// objekto funkcijos/metodo iškvietimas
  zmogus03.prisistatyk();
  console.log(zmogus03.amzius);
  zmogus03.seneti();
  console.log(zmogus03.amzius);