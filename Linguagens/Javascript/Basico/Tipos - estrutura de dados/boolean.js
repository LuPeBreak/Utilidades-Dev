let checagem = false;
console.log(typeof checagem); //mostra boolean

let checaSeEhIgual = 10 === 10
console.log(checaSeEhIgual) // mostra true
checaSeEhIgual = 10 === "10"
console.log(checaSeEhIgual) // mostra false pois utilizamos o operador com === que checa tipo tambem

// podemos negar um boolean com ! tornando o valor contrario 
// ou seja se for false vira true se for true vira false
checaSeEhIgual = !true
console.log(checaSeEhIgual) //mostra false
checaSeEhIgual = !false
console.log(checaSeEhIgual) //mostra true