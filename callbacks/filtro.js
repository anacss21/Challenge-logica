// Filtro de caracteres:
// Faça um programa que percorra um array com nomes de cidades e retorne um novo array somente com nomes que contenham até 8 caracteres.

const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

console.log(
  cidades.filter((menorqueoito) => {
    return menorqueoito.length <= 8;
  })
);

// Filtro de números positivos:
// Faça um programa que filtra um array de números inteiros e retorne um novo array apenas com os números positivos.

const numeros = [
  10, 987, -886, 0, 12, 199, -45, -67, 1, 98, -76, 0, 12, 19, 5, 60, 44,
];

const novoNumero = numeros.filter((positivos) => {
  return positivos > 0;
});

// Filtro de números pares

const pares = function (novoNumero) {
  return !(novoNumero % 2);
};

console.log(novoNumero.filter(pares));

// Filtro de nome por letra.
// Faça um programa que filtra um array de strings e retorne um novo array apenas com aqueles que começam com a letra a, maiúscula ou minúscula.

const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
  "Amanda",
];

console.log(
  nomes.filter((a) => {
    return a[0] === "a" || a[0] === "A";
  })
);
// Filtro de usuários

const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];
// Filtre o array e retorne apenas os programadores que sejam maiores de 20 anos;
console.log(
  pessoas.filter((programadores) => {
    return (
      programadores.idade > 20 && programadores.profissao === "Programador"
    );
  })
);

// Filtre o array e retorne apenas os jornalistas que tenha mais de 30 anos;
console.log(
  pessoas.filter((jornalista) => {
    return jornalista.idade > 30 && jornalista.profissao === "Jornalista";
  })
);

// Filtre o array e retorne os jornalistas e programadores que sejam jovens.
// Sabendo que, segundo o IBGE, é considerado jovem aquele que tem até 29 anos;

console.log(
  pessoas.filter((jovens) => {
    return (
      (jovens.idade <= 29 && jovens.profissao === "Jornalista") ||
      (jovens.idade <= 29 && jovens.profissao === "Programador")
    );
  })
);

// Filtro de números únicos
// No array abaixo é possível observar que alguns números se repetem.
// Faça um programa que retorne os números apenas uma vez, sem que esteja repetido.
