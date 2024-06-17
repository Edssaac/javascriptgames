class Botao {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botão = createButton(this.texto)
    this.botão.mousePressed(() => this._alteraCena())

    this.botão.addClass('botao-tela-inicial');

  }

  draw() {
    this.botão.position(this.x, this.y);
    this.botão.center('horizontal');
  }

  _alteraCena() {
    this.botão.remove();
    cenaAtual = 'jogo'
    intro.stop();
    somDoJogo.loop();
  }
}