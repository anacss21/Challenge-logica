//Crie uma função que localize um endereço em um array através do CEP e imprima o nome da rua.

function acharCep(cep) {
  const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];

  const novoEndereco = enderecos.find((valor) => {
    return valor.cep == cep;
  });

  console.log(novoEndereco.rua);
}

acharCep(00222444);
