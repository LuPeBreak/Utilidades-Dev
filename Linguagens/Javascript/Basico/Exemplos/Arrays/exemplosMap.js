const arrayParaSerMultiplicado = [1, 2, 3, 4, 5];

let arrayMultiplicado = arrayParaSerMultiplicado.map((numero) => numero * 2);

console.log(arrayMultiplicado); // [ 2, 4, 6, 8, 10 ]

//usando map com o thisArg ( onde podemos passar um objeto para definir como o this )
arrayMultiplicado = [];
let calculadora = {
  multiplicador: 2,
};

arrayMultiplicado = arrayParaSerMultiplicado.map(function (numero) {
  return numero * this.multiplicador;
}, calculadora);

console.log(arrayMultiplicado); // [ 2, 4, 6, 8, 10 ]
