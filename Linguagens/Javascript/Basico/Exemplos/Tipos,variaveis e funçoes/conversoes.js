
// Conversao implicita
const numero = 456;
const numeroString = "456";
// somamos um string com um numero e acabamos concatenando convertendo em uma string implicitamente
let soma = numeroString + numero


console.log( soma ) //456456
console.log(typeof soma) //string


// conversão explícita
//Number()
//String()
// convertemos explicitamente uma string para numero
const numeroStringConvertido = Number("456");
soma = numeroStringConvertido + numero

console.log( soma ) //912
console.log(typeof soma) //number ​​

