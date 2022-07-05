const arrDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

let arrDeNumerosPares = arrDeNumeros.filter((numero) => {
  return numero % 2 === 0;
});

console.log(arrDeNumerosPares); // [ 2, 4, 6, 8 ]

//usando filter com o thisArg ( onde podemos passar um objeto para definir como o this )
arrDeNumerosPares = [];

const par = {
  divisorComum: 2,
};

arrDeNumerosPares = arrDeNumeros.filter(function (numero) { // temos que usar anonymous function pois arrow function nao aceita a modificacaçao do this
  return numero % this.divisorComum === 0;
}, par);

console.log(arrDeNumerosPares); //[ 2, 4, 6, 8 ]
