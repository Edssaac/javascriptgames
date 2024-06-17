class TelaInicial {
  constructor() {
    botão = new Botao('INICIAR', width / 2, height / 2);
    intro.loop();
  }

  draw() {
    this._imagemDeFundo();
    this._text();
    botão.draw();
    this._botão();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _text() {
    textFont(fonteTelaInicial);
    fill('#000');
    textSize(50);
    textAlign(CENTER);
    text('As aventuras de', width / 2, 150);
    textSize(70);
    // textAlign(LEFT);
    text('Abigail', width / 2, 210);
  }

  _botão() {
    botão.y = height / 2 + 80;
    botão.draw();
    fill('#fff'); //Modifica a cor dos pontos
  }
}