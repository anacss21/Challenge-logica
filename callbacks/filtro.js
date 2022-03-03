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

const numeros = [
  10, 987, -886, 0, 12, 199, -45, -67, 1, 98, -76, 0, 12, 19, 5, 60, 44,
];

const novoNumero = numeros.filter((positivos) => {
  return positivos > 0;
});

const pares = function (novoNumero) {
  return !(novoNumero % 2);
};

console.log(novoNumero.filter(pares));

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

console.log(
  pessoas.filter((programadores) => {
    return (
      programadores.idade > 20 && programadores.profissao === "Programador"
    );
  })
);

console.log(
  pessoas.filter((jornalista) => {
    return jornalista.idade > 30 && jornalista.profissao === "Jornalista";
  })
);

console.log(
  pessoas.filter((jovens) => {
    return (
      (jovens.idade <= 29 && jovens.profissao === "Jornalista") ||
      (jovens.idade <= 29 && jovens.profissao === "Programador")
    );
  })
);
