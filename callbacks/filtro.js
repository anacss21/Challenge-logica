// Filtro de caracteres: Faça um programa que percorra um
// array com nomes de cidades e retorne um novo array somente com nomes
// que contenham até 8 caracteres.

const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

console.log(
  cidades.filter((x) => {
    return x.length <= 8;
  })
);

// Filtro de números positivos
// Filtro de números pares
// Filtro de nome por letra
// Filtro de usuários
// Filtro de números únicos
