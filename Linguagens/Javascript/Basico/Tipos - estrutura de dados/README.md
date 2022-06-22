# Tipos / Estrutura de Dados

Javascript é uma linguagem de tipagem fraca e dinamica ou seja as variaveis/objetos se adaptam e nao possuem um tipo fixo, nao tendo necessidade de definir tipos de dados e podendo mudar de acordo com o codigo necessario.

## Tipos Primitivos

### String

Sao valores de textos ( pode ate ter numeros ou valores booleanos mas serão tratado como texto )
`let nome = 'luis'`
para passar uma string a uma variavel sempre envolvemos o texto com aspas simples '' duplas"" ou crase``( no caso criando uma template string que aceita variaveis injetadas/interpoladas dentro dela ) podemos concatenar strings com o operador `+`

```
let nome = 'luis felipe'
let sobrenome = ' de paula costa'
let nomeCompleto = nome+sobrenome
```

Voce pode ver isso e mais no arquivo de string.js

### Numbers

Sao valores numericos podendo ter valores inteiros negativos e positivos (ex: 1, -1, 0, 10 ...) ou valores decimais/float( de ponto flutuante ex:3.14)
`let numero = 6`
`let pi = 3.14`
Voce pode ver mais no arquivo de number.js

### Boolean

Sao valores binarios representados por true ou false ( verdadeiro ou falso )
`let checagem = false`
Voce pode ver mais no arquivo de boolean.js

### Outros Tipos compostos/Estrutura de dados

## Array

Sao listas iteraveis de elementos
Um array pode conter qualquer tipo de dado;

```
  let arr = [];
  let arrDeNumbers = [1,2,3]
  let arrDeStrings = ["ola", "mundo"]
  let arrDeBoolean = [true,false]
  let arrayDeObjetos = [{nome:'luis'},{nome:'joao'}]
  let arrDeTudo = ["ola","mundo",1,2,3,true,{nome:'luis'}]
```

Voce pode ver mais no arquivo de array.js

### Objetos
Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).
`let pessoa = {name:'luis', idade:24}`


## empty, undefined, null
### empty = vazio 
a variavel foi definida mas nao teve um valor real atribuido ex: `let nome = ''`
### undefined = indefinido
quando a variavel nao foi definida por acidente ou seja sem a intençao 
ex: `let nome` 

### null = nula vazia indefinida
quando a variavel é definida intencionalmente nulla
ex: `let nome = null`