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
