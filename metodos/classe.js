// Sistema de filtro de comentários
const comentario = "Esse COVID é muito perigoso!";

// console.log(
//   comentario.toLowerCase().includes("covid", "pandemia")
//     ? "Comentário bloqueado por conter palavras proibidas"
//     : "Comentário autorizado"
// );

// Sistema para formatar números

const cpf = "12345678900";
const cnpj = "12345678900";

function novoCpf(cpf) {
  let formatado = cpf.split("");

  if (cpf.length === 11) {
    formatado.splice(3, 0, ".");
    formatado.splice(7, 0, ".");
    formatado.splice(11, 0, "-");

    let formatadoFinal = formatado.join("");
    console.log(formatadoFinal);
  } else {
    console.log(`CPF Inválido`);
  }
}

function novoCnpj(cnpj) {
  let formatado = cnpj.split("");

  if (cnpj.length === 14) {
    formatado.splice(2, 0, ".");
    formatado.splice(6, 0, ".");
    formatado.splice(10, 0, "/");
    formatado.splice(15, 0, "-");

    let formatadoFinal = formatado.join("");
    console.log(formatadoFinal);
  } else {
    console.log(`CNPJ Inválido`);
  }
}

// novoCpf(cpf);
// novoCnpj(cnpj);

// URL amigável

const texto = "Aprenda programar do zero na Cubos Academy";
// console.log(texto.split(" ").join("-").toLowerCase());

// Sistema de formatação de dados do formulário
const identificador = "123";
const nome = "José silva costa";
const email = "      jose@email.com  ";
const tags = ["financeiro", "administrativo", "geral"];

function identificadorFormatado(identificador) {
  let formatado = identificador.padStart(6, "0");
  console.log(formatado);
}

function formatadoNome(nome) {
  console.log((nome = nome.split("")));

  for (i = 0; i < nome.length; i++) {
    if (nome[i] == " ") {
      nome[i + 1] = nome[i + 1].toUpperCase();
    }
  }

  let formatnome = "";

  for (let nomes of nome) {
    formatnome += nomes;
  }

  nome = formatnome;
  console.log(nome);
}

function formatadoEmail(email) {
  console.log(email.trim());
}

function tagsFormatada(tags) {
  let string = tags.join(",");
  console.log(string);
}

// identificadorFormatado(identificador);
// formatadoNome(nome);
// formatadoEmail(email);
// tagsFormatada(tags);

// Sistema para biblioteca
const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Dom Quixote";
const index = livros.indexOf(nomeDoLivro);
// console.log(`O livro está na posição ${index + 1}`)

// Teste suas habilidades
const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

function inversoFrutas(frutas) {
  invertido = frutas.reverse();
  console.log(invertido.join(","));
}

function novasFrutas(frutas) {
  frutasNovas = frutas.splice([
    frutas.pop(),
    frutas.shift(),
    frutas.push("Melão"),
  ]);
  console.log(frutasNovas);
}

// inversoFrutas(frutas)
// novasFrutas(frutas.reverse())

// Formatar número de celular
// const celular = 71999918888;
// const text = celular.toString();
// const arrayNumber = text.split("");

// if (arrayNumber.length === 9) {
//   arrayNumber.splice(4, 0, " ");
//   arrayNumber.splice(6, 0, " ");
//   arrayNumber.splice(11, 0, "-");

//   console.log(arrayNumber.join(""));
// } else if (arrayNumber.length === 11) {
//   arrayNumber.splice(0, 0, "(");
//   arrayNumber.splice(3, 0, ")");
//   arrayNumber.splice(4, 0, " ");
//   arrayNumber.splice(6, 0, " ");
//   arrayNumber.splice(11, 0, "-");

//   console.log(arrayNumber.join(""));
// } else {
//   console.log(`Esse número esta errado, verifique e digite novamente. `);
// }

// Validação de e-mail
const newEmail = "jose@cubos.academy";

function emailValido(email) {
  valido = newEmail.includes("@") && newEmail.includes(".");

  if (valido === true) {
    if (email.indexOf(".") != 0 && email.lastIndexOf(".") != email.length - 1) {
      console.log(`E-mail válido`);
    } else {
      console.log(`E-mail inválido`);
    }
  } else {
    console.log(`E-mail inválido`);
  }
}
// emailValido(newEmail);

// Divisão de grupos
const newName = [
  "Juninho",
  "Léo",
  "Guido",
  "Dina",
  "Vitinho",
  "Nanda",
  "Julia",
  "Maria",
  "Isabel",
];

const tamanhoDoGrupo = 6;
let novoGrupo = [];
let numeroGrupos = 1;

for (let i = 0; i < newName.length; i++) {
  novoGrupo = newName.splice(0, tamanhoDoGrupo);
  console.log(`Grupo:${numeroGrupos}: ${novoGrupo.join(", ")}`);
  numeroGrupos++;
}

// Remover pontuação
// Grupos de carros
// Gerador de Nickname
// Validação de arquivos
