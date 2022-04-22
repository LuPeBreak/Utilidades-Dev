//0     //1     2
const listaDeChamada = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// assim a partir do index 1 apagariamos 2 elementos e colocariamos 'carlos' no lugar modificando o index de todos os elementos no array
// nesse caso apagamos ana(index 1) e caio(index 1+1 (especificamos que queriamos 2 indexes a partir do index informado)) e colocamos 'carlos no lugar'
listaDeChamada.splice(1, 2, "Carlos"); 
console.log(listaDeChamada); //[ 'João', 'Carlos', 'Lara', 'Marjorie', 'Leo' ]

// assim movemos todos os outros elementos a partir do index 2 para o index posterior (+1) e adicionamos no index 2 'Rodrigo'
listaDeChamada.splice(2, 0, "Rodrigo");

console.log(`Lista de chamada: ${listaDeChamada}`); //Lista de chamada: João,Carlos,Rodrigo,Lara,Marjorie,Leo
