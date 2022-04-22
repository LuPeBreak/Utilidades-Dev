const cliente = {
  nome: "Ana Julia",
  idade: 23,
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

cliente.depositar(100);

// { nome: 'Ana Julia',
//   idade: 23,
//   saldo: 200,
//   depositar: [λ: depositar] }

console.log(Object.entries(cliente));

// [ [ 'nome', 'Ana Julia' ],
//   [ 'idade', 23 ],
//   [ 'saldo', 200 ],
//   [ 'depositar', [λ: depositar] ] ]

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
};

const objPersonagem2 = objPersonagem;

objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagem.nome); //Gandalf, o Cinzento
console.log(objPersonagem2.nome); //Gandalf, o Cinzento

for (const key in objPersonagem) {
  console.log(key + "" + objPersonagem[key]);
}

const objeto = {
  listaDeObjetos: [
    {
      nome: "luis",
      idade: 23,
    },
    {
      nome: "carlos",
      idade: 23,
    },
  ],
  listaDeObjetos2: [
    {
      nome: "joao",
      idade: 23,
    },
    {
      nome: "sarah",
      idade: 23,
    },
  ],
};

const novoArray = [...objeto.listaDeObjetos, ...objeto.listaDeObjetos2];
console.table(novoArray);
// ┌─────────┬──────────┬───────┐
// │ (index) │   nome   │ idade │
// ├─────────┼──────────┼───────┤
// │    0    │  'luis'  │  23   │
// │    1    │ 'carlos' │  23   │
// │    2    │  'joao'  │  23   │
// │    3    │ 'sarah'  │  23   │
// └─────────┴──────────┴───────┘

let objeto2 = Object.create({
  nome: "luis",
  idade: 23,
});

console.log(objeto2.__proto__);
// {
//   nome:"luis",
//   idade:23
// }
//no devtools so o objeto.__proto__ sem ter usado create
// retorna
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

function Cliente(nome, idade, cpf, saldo) {
  this.nome = nome;
  this.idade = idade;
  this.cpf = cpf;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

const luis = new Cliente("luis", "23", "122222222", "2000");
console.log(luis);
// Cliente {
//   nome: 'luis',
//   idade: '23',
//   cpf: '122222222',
//   saldo: '2000',
//   depositar: [Function (anonymous)]
// }

function ClientePoupanca(nome, idade, cpf, saldo, saldoPoup) {
  Cliente.call(this, nome, idade, cpf, saldo);
  this.saldoPoup = saldoPoup;
}
ClientePoupanca.prototype.depositarPoup = function(valor){
  this.saldoPoup +=valor;
}

const ju = new ClientePoupanca("Ju",23, "12312312312", 100, 200)
console.log(luis.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(luis instanceof Cliente)
console.log(typeof luis)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)

