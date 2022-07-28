function setup() {
  createCanvas(windowWidth, windowHeight);
  // intro.loop();

  telaInicial = new TelaInicial();
  // botão = new Botao('INICIAR', width/2, height/2);

  jogo = new Jogo();
  jogo.setup();

  frameRate(40);

  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  };

}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}