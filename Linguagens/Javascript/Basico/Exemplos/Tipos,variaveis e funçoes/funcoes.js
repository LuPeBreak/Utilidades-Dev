// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      //2 -> valor de soma()
function imprimeTexto(texto) {
  console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(somaDeclaraçao(2,2));
// imprimeTexto("outro texto");



// três formas de escrever funções
// Declaraçao, expressao e arrow function
// declaraçao
function somaDeclaraçao(num1,num2){
  //outros códigos
  return num1+num2;
}
// expressao
const somaExpressao = function(num1, num2) { return num1 + num2 }
// arrow function
const somaArrowFunction = (num1,num2) => num1+num2

// console.log(somaDeclaraçao(1,2))    //3
// console.log(somaExpressao(1,2))     //3
// console.log(somaArrowFunction(1,2)) //3