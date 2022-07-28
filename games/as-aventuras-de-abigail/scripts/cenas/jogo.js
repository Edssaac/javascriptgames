class Jogo {
  constructor() {
    this.inimigoAtual = 0;
    // intro.loop();
  }

  setup() {

    vida = new Vida(3, 3);
    pontuação = new Pontuacao();

    fundasso = new Cenario(imagemFundasso);
    fundo = new Cenario(imagemFundo, 2);
    meio = new Cenario(imagemMeio, 4);
    frente = new Cenario(imagemFrente, 8);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width - 52, -15, 200, 200, 400, 400, 25, 80);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 5, 52, 52, 104, 104, 42, 85);
    const inimigo2 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 2, 104, 104, 104, 104, 42, 85);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 30, 100, 75, 200, 150, 53, 105);
    const inimigoVoador2 = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 135, 150, 125, 200, 150, 53, 105);

    gameover = new Gameover();

    inimigos.push(inimigoGrande);
    inimigos.push(inimigo);
    inimigos.push(inimigo2);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoVoador2);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      personagem.pula();
    }

    if (key === "UP_ARROW") {
      personagem.pula()
    }

    if (key === "w") {
      personagem.pula();
    }

    if (keyCode == 32) {
      personagem.pula();
    }

    if (keyCode == 13) {
      if (vida.vidas === -1) {
        window.location.reload()
      }
    }
    
    
  }

  draw() {
    fundasso.exibe();
    fundo.exibe();
    fundo.move();
    meio.exibe();
    meio.move();
    frente.exibe();
    frente.move();

    vida.draw();

    pontuação.exibe();
    pontuação.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisível = inimigo.x < -inimigo.largura;

    if (inimigoVisível) {
      // console.log(inimigoAtual)
      this.inimigoAtual = this.inimigoAtual + parseInt(random(0, 4));
      if (this.inimigoAtual > 4) {
        this.inimigoAtual = 0;
      }

      inimigo.velocidade = parseInt(random(25, 35)) + parseInt(random(50, 100) / 3);
      // console.log(this.inimigoAtual);
      // console.log(this.inimigoAtual);
    }

    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      pontuação.removerPonto();
      personagem.tornarInvencivel();

      if (vida.vidas === -1) {
        gameover.exibe();
      }
    }
  }
}


// if (key === "Enter") {
//   somDoJogo.stop();
//   cenaAtual = 'telaInicial';
//   // intro.loop();
// }