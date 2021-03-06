// podemos criar um set com
const setDeFrutas = new Set(["π", "π", "π", "π"]);

console.log(setDeFrutas); //Set { 'π', 'π', 'π', 'π' }

// podemos ter o tamanho de um set com o metodo size
console.log(setDeFrutas.size); // 4

// podemos adicionar vlaores com add
// Create a set - saladSet
const setDeSalada = new Set();
setDeSalada.add("π");
setDeSalada.add("π₯");
setDeSalada.add("π₯");
setDeSalada.add("π₯");
console.log(setDeSalada); //Set { 'π', 'π₯', 'π₯', 'π₯' }
// se tentarmos adicionar um elemento repetido nada acontece
setDeSalada.add("π₯");
console.log(setDeSalada); //Set { 'π', 'π₯', 'π₯', 'π₯' }
// pois o set Γ© uma coleΓ§Γ£o de dados unicos

// podemos checar a existencia de um elemento em set com o metodo has
console.log(setDeSalada.has("π")); // true
console.log(setDeSalada.has("π")); // false

// podemos utilizar o metodo delete para deletar um elemento
console.log(setDeSalada); //Set { 'π', 'π₯', 'π₯', 'π₯' }
setDeSalada.delete("π₯");
console.log(setDeSalada); //Set { 'π', 'π₯', 'π₯' }

// podemos iterar por todos os valores de um set com o metodo values que retorna um iterator
console.log(setDeSalada.values());

// o metodo keys retorna um setiterator para retornar seus valores
console.log(setDeSalada.keys());

// podemos enumerar os valores com os metodos forEach e for
//  forEach
setDeSalada.forEach((value) => {
  console.log(value);
});
//  for-of
for (const value of setDeSalada) {
  console.log(value);
}

// Podemos converter um set em array
const arr = [...setDeSalada];
console.log(arr); // [ 'π', 'π₯', 'π₯' ]

// e podemos fazer o contrario muito facilmente tambem
const novoSetDeSalada = new Set(arr);
console.log(novoSetDeSalada); //Set { 'π', 'π₯', 'π₯' }
