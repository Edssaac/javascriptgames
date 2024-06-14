class Personagem extends Animacao {
  constructor(matriz, imagem, x, varY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, varY, largura, altura, larguraSprite, alturaSprite)

    this.varY = varY;

    this.yInicial = height - 146;
    this.y = this.yInicial;

    this.x = 25;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;

    this.invencivel = false;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      somDoPulo.play();
      this.pulos++
    }

  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;

    }
  }

  tornarInvencivel() {
    this.invencivel = true
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }

  estaColidindo(inimigo) {

    if (this.invencivel) {
      return false
    }

    const precisão = 0.7;
    // noFill();
    // rect(      this.x,
    //   this.y,
    //   this.largura * precisão,
    //   this.altura * precisão);
    const colisão = collideRectRect(
      this.x,
      this.y,
      this.largura * precisão,
      this.altura * precisão,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisão,
      inimigo.altura * precisão
    );

    return colisão;
  }
}