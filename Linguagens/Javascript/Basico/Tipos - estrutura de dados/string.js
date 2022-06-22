let nome = "luis felipe";
let sobrenome = " de paula costa";
console.log(typeof nome); //mostra string

//concatenaçao de string
let nomeCompleto = nome + sobrenome;
// let nomeCompleto2 = 'luis felipe' + ' de paula costa' é equivalente
console.log(nomeCompleto); // mostra luis felipe de paula costa

//podemos concatenar strings com variaveis da nossa aplicaçao de uma forma mais simples com template strings
let numero = 2; // isso é um number
let text = `o numero é ${numero} e isso é uma template string`; // usamos crase para criar template strings
console.log(text); // mostra o numero é 2 e isso é uma template string

//podemos pegar o tamanho de uma string ( numero de caracteres ) com o metodo lenght
console.log(nomeCompleto.length); //mostra 26

//podemos pegar um pedaço da string com o metodo substring(indexInicial, quantosCaracteresPegar)
console.log(nomeCompleto.substring(0, 5)); //mostra luis
console.log(nomeCompleto.substr(0, 5)); //mostra luis mas esse metodo substr esta sendo considerado deprecated

//podemos dividir nossas strings de acordo com regras proprias utilizando o metodo split
// por exemplo se quisermos separar todoas as palavras de uma frase que recebemos
let frase = "isso é uma frase inteira de exemplo";
let palavrasDaFrase = frase.split(" "); // separamos por espaço , o metodo split retorna um array ( uma estrutura de dados que veremos depois )
console.log(palavrasDaFrase); // mostra [ 'isso', 'é', 'uma', 'frase', 'inteira', 'de', 'exemplo' ]
console.log(typeof palavrasDaFrase); // ira mostrar object (arrays sao tratados diretamente como objetos)

//uma strings pode ser tratada de certa forma como um array de caracteres  ( veremos mais sobre array mais a frente )
console.log(nomeCompleto[0]); //mostra l

/*
Strings ainda possuem diversos outros metodos acessiveis voce pode 
consultar uma documentaçao ou utilizar o .__proto__ no navegador 

nome.__proto__
String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
Symbol(padStart): ƒ (b,c)
[[Prototype]]: Object
[[PrimitiveValue]]: ""
*/

// podemos declarar um objeto string e nao apenas um tipo primitivo
let texto = new String("text");
console.log(texto);
// ira mostrar
// String 'text' { [Iterator]  0: 't', 1: 'e', 2: 'x', 3: 't' }
console.log(typeof texto); // ira retornar object ao inves de string
