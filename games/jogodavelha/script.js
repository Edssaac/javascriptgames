const jogadorSelecionado = document.getElementById('jogador-selecionado');
const vencedorSelecionado = document.getElementById('vencedor-selecionado');
const quadrados = document.getElementsByClassName('quadrado');
var jogador, vencedor = null;

mudarJogador('X');

function escolherQuadrado(quadrado) {
    if (vencedor !== null) {
        return;
    }

    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {

    validarPosicoes(0, 1, 2);
    validarPosicoes(3, 4, 5);
    validarPosicoes(6, 7, 8);
    validarPosicoes(0, 3, 6);
    validarPosicoes(1, 4, 7);
    validarPosicoes(2, 5, 8);
    validarPosicoes(0, 4, 8);
    validarPosicoes(2, 4, 6);
}

function validarPosicoes(x, y, z) {
    if (checaSequencia(quadrados[x], quadrados[y], quadrados[z])) {
        mudaCorQuadrado(quadrados[x], quadrados[y], quadrados[z]);
        mudarVencedor(quadrados[x]);
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}