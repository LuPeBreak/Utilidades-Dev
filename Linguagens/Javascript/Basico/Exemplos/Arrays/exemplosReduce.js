const arrDeNumeros = [1, 2, 3];

const somaDosNumeros = arrDeNumeros.reduce(function (prevValue, currentValue) {
  return prevValue + currentValue;
});

console.log(somaDosNumeros) // 6