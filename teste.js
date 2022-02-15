// let arr1 = [
//   { id: "abdc4051", date: "2017-01-24" },
//   { id: "abdc4052", date: "2017-01-22" },
// ];

// let arr2 = [
//   { id: "abdc4051", name: "ab" },
//   { id: "abdc4052", name: "abc" },
// ];

// let arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));

// console.log(arr3);

// let arr1 = [
//     { id: "abdc4051", date: "2017-01-24" },
//     { id: "abdc4052", date: "2017-01-22" }
// ];

// let arr2 = [
//     { id: "abdc4051", name: "ab" },
//     { id: "abdc4052", name: "abc" }
// ];

// let arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));

// console.log(arr3);

let arr2 = [
  {
    id: 1,
    name: "Saúde",
  },
  {
    id: 2,
    name: "Financeiro",
  },
  {
    id: 3,
    name: "Profissional",
  },
  {
    id: 4,
    name: "Aprendizado",
  },
  {
    id: 5,
    name: "Lazer",
  },
];

let arr1 = [
  {
    id: 1,
    title: "Concluir um curso",
    description: "Concluir pelo menos 1 curso em 2022 sobre UX",
    category: 4,
    createdAt: "2022-01-01",
    status: "active",
  },
  {
    id: 2,
    title: "Aprender a tocar violão",
    description: "Aprender a tocar evidências no violão",
    category: 4,
    createdAt: "2022-01-10",
    status: "active",
  },
  {
    id: 3,
    title: "Praticar esporte",
    description: "Começar a praticar algum esporte aquático em 2022",
    category: 1,
    createdAt: "2021-12-14",
    status: "active",
  },
  {
    id: 4,
    title: "Ler dez livros",
    description: "Ler pelo menos dez livros em 2022",
    category: 5,
    createdAt: "2022-01-02",
    status: "active",
  },
  {
    id: 5,
    title: "Guardar 100 reais por mês",
    description:
      "Economizar pelo menos 1200 reais em 2022 para a viagem de virada do ano de 2023",
    category: 5,
    createdAt: "2022-01-02",
    status: "active",
  },
  {
    id: 6,
    title: "Conhecer a Itália",
    description: "Conhecer pelo menos 3 cidades",
    category: 5,
    createdAt: "2021-07-01",
    achievedAt: "2021-12-14",
    status: "done",
  },
];

let merged = [];

for (let i = 0; i < arr1.length; i++) {
  merged.push({
    ...arr1[i],
    ...arr2.find((itmInner) => itmInner.id === arr1[i].category),
  });
}

console.log(merged);
