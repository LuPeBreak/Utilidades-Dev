let arr = [1, 2, 3];
console.log(typeof arr); // mostra object

//podemos acessar um elemento especifico no array informando seu index
console.log(arr[0]); //mostra 1 pois é o elemento no index 0
console.log(arr[1]); //mostra 2 pois é o elemento no index 1
console.log(arr[2]); //mostra 3 pois é o elemento no index 2

// podemos inserir um elemento no fim do array ( no ultimo index ) com o metodo push
arr.push(4);
console.log(arr); // mostra [ 1, 2, 3, 4 ]

//podemos inserir no primeiro index do array e mudar todos os indexes para +1 com o metodo unshift
arr.unshift(0);
console.log(arr); //mostra

// podemos apagar o ultimo elemento do array com o metodo pop
arr.pop();
console.log(arr); // mostra [ 0, 1, 2, 3 ]

//podemos apagar o primeiro elemento do array (no index 0) subtraindo todos os indexes em -1 com o metodo shift
arr.shift();
console.log(arr); // mostra [ 1, 2, 3 ]

// podemos apagar um index especifico e inserir um elemento no lugar com o metodo splice
arr.splice(1, 1, 10); // splice(indexInicial, quantos elementos apagar, pelo que substituir)
console.log(arr); // mostra [ 1, 10, 3 ]
// podemos usar para apenas apagar um elemento tambem basta apenas nao informar um elemento para inserir
arr.splice(1, 1);
console.log(arr); // mostra [ 1, 3 ]
//podemos apenas inserir em um index sem apagar
arr.splice(1, 0, 2);
console.log(arr); //mostra [ 1, 2, 3 ]

// podemos verificar se existe algum valor dentro do array com o metodo includes
console.log(arr.includes(1)); //mostra true pois contem 2 nesse array que modificamos

// podemos retornar um array modificado da forma que precisamos com o metodo map
console.log(
  arr.map((elemento) => {
    return elemento + 1;
  })
); // mostra [ 2, 3, 4 ]

//podemos passar por todos os elementos de um array com o forEach e fazer algo com esses valores
arr.forEach((elemento) => {
  console.log(elemento); // ira mostrar em ordem 1 depois 2 depois 3
});

/* 
 existem ainda diversos outros metodos uteis para lidarmos com array 
 consulte a documentaçao do js para saber mais, alguns sao mais complexos
*/
