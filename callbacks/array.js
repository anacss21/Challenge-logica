// Faça um programa que, a partir de um array, cria um novo array com os mesmos elementos
//mas que todos os elementos comecem com letras maiúsculas e em cada elemento seja adicionado
// o número do índice correspondente.

// const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

// const arrayTratado = frutas
//   .toString()
//   .toLowerCase()
//   .split(",")
//   .toLowerCase(frutas[0]);
// // transformar em minuscula,
// // transformar apenas a primeira letra do array em maiuscula.
// // ser um array

// let novoArray = frutas.reduce(function (todasfrutas, fruta) {
//   if (fruta in todasfrutas) {
//     todasfrutas[fruta]++;
//   } else {
//     todasfrutas[fruta] = 1;
//   }
//   return todasfrutas;
// }, {});
// // quantidade de nomes:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// console.log(arrayTratado);

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArray = frutas.map(function (valor, index) {
  let fruta = valor.toLowerCase();
  let primeiraLetra = fruta.substr(0, 1).toUpperCase();
  let semPrimeiraLetra = fruta.substr(1);
  let nomeFruta = `${index} - ${primeiraLetra}${semPrimeiraLetra}`;

  return nomeFruta;
});

console.log(novoArray);
