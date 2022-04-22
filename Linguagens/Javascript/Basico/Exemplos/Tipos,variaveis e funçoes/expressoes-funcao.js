
// expressão de função
const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(1, 1))




// diferença principal: HOISTING
// funções declarativas e var são "listadas"/"carregadas" no topo do arquivo.
// note que com declaraçoes podemos chamar a funçao mesmo antes de declararmos elas devido ao HOISTING
console.log(apresentar())

function apresentar() {
  return "olá";
}

// ira dar error se chamarmos em cima
// console.log(somaOutroExemplo(1, 1))
const somaOutroExemplo = function(num1, num2) { return num1 + num2 }
console.log(somaOutroExemplo(1, 1))