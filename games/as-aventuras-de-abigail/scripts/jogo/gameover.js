class Gameover {

  exibe() {
    damage.stop();
    somDoJogo.stop();

    noLoop();

    fundasso.exibe();
    fundo.exibe();
    meio.exibe();
    frente.exibe();

    die.play();
    image(imagemGameOver, width / 2 - 200, height / 3);

    textFont(fonteTelaInicial);
    pontuação.total();

    textSize(50);
    fill('#fff');
    textAlign(CENTER);
    text('Pressione  ENTER  para voltar', width / 2, 500);
  }
}