// Cria um Map
const anyMap = new Map();

// podemos colocar qualquer tipo de dado como chave de um map.
anyMap.set(360, "Numero da minha casa"); // numero como chave
anyMap.set(true, "eu escrevo blogs"); // boolean como chave
let obj = { nome: "Luis" };
anyMap.set(obj, true); // Objeto como chave
console.log(anyMap);
/*
Map { 360 => 'Numero da minha casa',
  true => 'eu escrevo blogs',
  { nome: 'Luis' } => true }
*/

//podemos pegar valores de um map com o metodo get
console.log(anyMap.get(360)); // Numero da minha casa

//podemos checar se o map possui uma chave
console.log(anyMap.has(360)); // true
console.log(anyMap.has(320)); // false

// podemos ter o tamanho do map com o metodo size(semelhante ao length)
console.log(anyMap.size) // 3

// podemos deletar um valor com o metodo delete
console.log(anyMap);
/*
Map { 360 => 'Numero da minha casa',
  true => 'eu escrevo blogs',
  { nome: 'Luis' } => true }
*/
anyMap.delete(true);
console.log(
  anyMap
); /* { 360 => 'Numero da minha casa', { nome: 'Luis' } => true } */

// podemos ter um iterator que passa por todas as chaves
console.log(anyMap.keys());
// um que passa por todos os valores
console.log(anyMap.values());
// um que passa por todas as entradas de chave e valor
console.log(anyMap.entries());

const ageMap = new Map([
  ["Jack", 20],
  ["Alan", 34],
  ["Bill", 10],
  ["Sam", 9],
]);
// como iterar por map
// com forEach
ageMap.forEach((valor, chave) => {
  console.log(`${chave} tem ${valor} anos!`);
});

// com for-of
for (const [chave, valor] of ageMap) {
  console.log(`${chave} tem ${valor} anos!`);
}

//podemos transformar um objeto em um map
const estados = {
  "Rio de Janeiro": "Brasil",
  "Sao Paulo": "Brasil",
  California: "EUA",
};

const estadosMap = new Map(Object.entries(estados));
console.log(estadosMap);
/**
   Map { 'Rio de Janeiro' => 'Brasil',
  'Sao Paulo' => 'Brasil',
  'California' => 'EUA' }
*/
// podemos fazer o contrario com 
let estadosObjeto = Object.fromEntries(estadosMap)
console.log(estadosObjeto); 

/**
 * { 'Rio de Janeiro': 'Brasil',
 * 'Sao Paulo': 'Brasil',
 * California: 'EUA' }
 */


