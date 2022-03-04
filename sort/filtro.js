const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: false,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

function validos() {
  validado = usuarios.filter((idade) => idade.idade >= 18 && idade.idade <= 65);
  habilitado = usuarios.every((habilitado) => habilitado.habilitado === false);
  console.log(
    habilitado ? `todos passaram no teste` : `todos precisam estar habilitados`
  );
}

validos();
