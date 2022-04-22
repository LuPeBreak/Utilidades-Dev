const nomes = ["Ana","Ju","Leo","Paula"]


// a funçao foreach recebe um callback como primeiro parametro passando para ele (valorNoIndexAtual, indexAtual, arrayCompleto)
nomes.forEach(ImprimeNomes)

// nesse caso so recebemos o primeiro parametro ValorNoIndexAtual e para cada index no array executamos o console.log para mostrar seu valor
function ImprimeNomes(nome){
    console.log(nome)
}