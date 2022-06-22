//um objeto é criado com {chave:valor} ou seja os valores de um objeto seguem o padrao de chave(nome da variavel) e valor(valor da)
let pessoa = { nome: "Luis" }; 
console.log(typeof pessoa); // mostra object
console.log(pessoa); // mostra { nome: 'Luis' }

// podemos acessar uma propriedade de um objeto com .nomedapropriedade
console.log(pessoa.nome); // mostra luis

// podemos acrescentar uma propriedade em um objeto ja criado apenas usando .nomedapropriedadenova
pessoa.idade = 24;
console.log(pessoa); // mostra { nome: 'Luis', idade: 24 }

// podemos deletar uma propriedade com delete
delete pessoa.idade;
console.log(pessoa); // mostra { nome: 'Luis' }

// podemos usar a biblioteca Object para ter acesso a alguns metodos uteis de objeto
console.log(Object.keys(pessoa)); // mostra ['nome'] pois retorna um array com as chaves de todas as propriedades do objeto

// dentre outros diversos metodos
