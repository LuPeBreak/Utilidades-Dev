const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("cerveja")
} else {
  console.log("suco") //executa esse codigo mostrando suco
}

// podemos nesse caso substituir esse if por um operador ternario
            //condição                    //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco") // mostra suco

// podemos tambem executar uma cadeia de operadores ternarios ( um dentro do outro )