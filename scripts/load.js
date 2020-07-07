function preload() {
  intro = loadSound('sons/intro.mp3');
  imagemTelaInicial = loadImage('imagens/cenário/telaInicial.png');
  fonteTelaInicial = loadFont('assets/fonteTelaInicial.otf');
  
  imagemFundasso = loadImage('imagens/cenário/fundasso.png');
  imagemFundo = loadImage('imagens/cenário/fundo.png');
  imagemMeio = loadImage('imagens/cenário/meio.png');
  imagemFrente = loadImage('imagens/cenário/frente.png');

  imagemVida = loadImage('assets/coracao.png');  
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');

  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');

  imagemGameOver = loadImage('assets/game-over.png');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  damage = loadSound('sons/damage.mp3');
  die = loadSound('sons/mario.mp3');
}