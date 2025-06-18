function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0, 0, 0];
let yJogador = [50, 100, 150, 200,250,300];
let jogador = ["👨🏾‍🌾","📱","🌲","🐎","🌱","👩‍🌾"];
let teclas = ["r", "o", "b", "t","e","m"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#795548");
  } else {
    background("#1C3642");
  }
}
function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("#f2fcf2f5");
  rect(350, 0, 10, 400);
  fill("rbg(39,39,36)");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " venceu!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(0, 350, 400, 10);
  }
}