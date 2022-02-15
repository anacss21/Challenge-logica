const ordenadas = duracoes.sort((a, b) => a - b);
const filmesTotais = duracoes.length;
let dias = 0;
let primeiroFilme = 0;
let ultimoFilme = filmesTotais - 1;

while (ultimoFilme - primeiroFilme > 0) {
  let maiorDuracao = ordenadas[ultimoFilme];
  let menorDuracao = ordenadas[primeiroFilme];

  if (maiorDuracao > 1.99 || maiorDuracao + menorDuracao > 3) {
    dias++;
    ultimoFilme--;
  } else {
    dias++;
    primeiroFilme++;
  }
  if (primeiroFilme === ultimoFilme) {
    dias++;
  }
}
console.log(dias);
