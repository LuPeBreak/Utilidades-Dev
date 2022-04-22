const notas = [10, 6, 8]; // 7

// adicionamos 9 na nova ultima posiçao do array utilizando a funçao push
notas.push(9);
console.log(notas); //[ 10, 6, 8, 9 ]

// Adicionamos 1 na primeira posiçao do array e modificamos os indexes de todos os elementos para +1 ( ja que agora o primeiro elemento de index 0 é o 1 que adicionamos)
notas.unshift(1);
console.log(notas); // [ 1, 10, 6, 8, 9 ]

// no atualizando-lista.js podemos ver uma forma de adicionar no index que desejamos e nao somente no ultimo ou primeiro
