let numero1 = 10;
let numero2 = 35;
const PI = 3.1415;
console.log(typeof numero1); // mostra number

// podemos utilizar todos os operadores aritimeticos para realizar operaçoes com numeros
let soma = numero1 + numero2;
console.log(soma); // mostra 45

let multiplicacao = numero1 * numero2;
console.log(multiplicacao); // mostra 350

let divisao = numero2 / numero1;
console.log(divisao); // mostra 3.5 ( um numero decimal )

let subtracao = numero1 - numero2;
console.log(subtracao); // mostra -25

let resto = numero2 % numero1;
console.log(resto); // mostra 5

let exponencial = numero1 ** 2;
console.log(exponencial); // mostra 100

// podemos utilizar o objeto Math para realizar outras operaçoes com numeros/numbers
console.log(Math.floor(divisao)); // mostra 3  ( arredonda para baixo)
console.log(Math.ceil(divisao)); // mostra 4 ( arredonda para cima )
//...