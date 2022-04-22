// sao valores que sao considerados true ou false pelo javascript

const x = 0;

if('x'){
  console.log('true')
}else {
  console.log('false') // ira executar codigo mostrando false
}


//Exemplos:
  // Exemplos de valores truthy em JavaScript (que se traduzirão em true, e então executar o bloco if):
  // if (true)
  // objetos ou arrays vazios
    // if ({})
    // if ([])
    // if (new Date())
  // numeros positivos ou negativos ( 0 nao é positivo nem negativo )
    // if (42)
    // if (-42)
    // if (3.14)
    // if (-3.14)
  // Strings com conteudo
    // if ("foo")
  // Outros
    // if (Infinity)
    // if (-Infinity)
// ----------------------
  // Exemplos de valores falsy em JavaScript (que se traduzirá em false e assim ignorar o bloco if e executar o else se tiver):
  // if (false)
  // if (null)
  // if (undefined)
  // if (0)
  // if (NaN)
  // if ('')

