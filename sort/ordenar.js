const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

console.log(
  numeros.sort((numeroA, numeroB) => {
    return numeroB - numeroA;
  })
);

console.log(
  numeros.sort((numeroA, numeroB) => {
    return numeroA - numeroB;
  })
);

console.log(
  frutas.sort((frutasA, frutasB) => {
    return frutasB.localeCompare(frutasA);
  })
);

console.log(
  frutas.sort((frutasA, frutasB) => {
    return frutasA.localeCompare(frutasB);
  })
);
