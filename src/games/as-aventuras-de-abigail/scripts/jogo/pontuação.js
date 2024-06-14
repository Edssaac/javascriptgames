class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textFont(fonteTelaInicial);
    textAlign(RIGHT);
    // fill('#fff');
    textSize(50);
    text('Pontos: ' + parseInt(this.pontos), width - 30, 50);
  }

  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
  }

  removerPonto() {
    this.pontos = this.pontos - 10;
    fill('red'); // ou preto ou vermelho? 
    setTimeout(() => {
      fill('#fff');
    }, 450);
    textSize(40);
    textAlign(CENTER);
    text('Pontos: ' + parseInt(this.pontos), width - 30, 50);
  }

  total() {
    fill('#fff');
    textSize(40);
    textAlign(CENTER);
    text('Pontos: ' + parseInt(this.pontos), width / 2, (height / 2) + 20);
  }

}