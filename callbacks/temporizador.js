// Num determinado jogo, cada rodada dura 10 segundos.
// Faça um programa que imprima o nome de cada jogador em seu devido momento.
// Para saber quanto tempo cada jogador terá para jogar, basta saber quantos
// jogadores participarão e dividir o tempo de cada rodada pela quantidade de jogadores, que
// no caso desse jogo é 10.

const jogadores = ["Guido", "Dina", "Léo", "Nanda", "Juninho"];

let i = 0;

function intervalo() {
  if (i < jogadores.length) {
    console.log(jogadores[i]);
    i++;
  } else {
    console.log("A rodada Acabou");
    clearInterval(jogada);
  }
}

const jogada = setInterval(intervalo, (10 / jogadores.length) * 1000);
