const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];
// console.log(cidades.reduce((x, y) => (x.length > y.length ? x : y)));

console.log(
  cidades.reduce((x, y) => {
    if (x.length > y.length) {
      return x;
    } else {
      return y;
    }
  })
);

const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

// const proibido = palavras.includes("cerveja", "vodka");
// console.log(
//   proibido ? "revise sua lista, João. Possui bebida com venda proibida!" : ""
// );

const proibido = palavras.some((x) => x === "cerveja" || x === "vodka");
console.log(
  proibido ? "revise sua lista, João. Possui bebida com venda proibida!" : ""
);
