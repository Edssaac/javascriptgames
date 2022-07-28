// Ordem das cores jogo:
let order = [];

// Ordem dos clicks:
let clickedOrder = [];

// Pontuação:
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amarelo
// 3 - Azul

// Obtendo os elementos das cores:
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

// Função responsável por embaralhar a ordem das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); // Pegando um número aleatório entre 0 e 3
    order[order.length] = colorOrder; // Adicionando o número a última posição do array
    clickedOrder = []; // Zerando a ordem de clicks

    // Acendendo cada uma das cores do array
    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Função responsável por acender a cor escolhida:
let lightColor = (element, time) => {
    time *= 500;

    // Adicionando a classe de destaque na cor:
    setTimeout(() => {
        element.classList.add('selected');
    }, time - 250);

    // Removendo a classe de destaque na cor:
    setTimeout(() => {
        element.classList.remove('selected');
    }, time + 200);
}

// Função responsável por verificar se a ordem dos clicks está correta:
let checkOrder = () => {
    for (let i in clickedOrder) {
        // Verificando se a ordem dos clicks é diferente da ordem certa:
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    // Verifica se o tamamho dos arrays são iguais
    // e vai para a próxima fase se forem
    if (clickedOrder.length == order.length) {
        alert(`Você acertou!\nPontuação: ${score}\n\nIniciando próximo nível.`);
        nextLevel();
    }
}

// Função responsável por interagir com o click do usuário:
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');

        // Verificando se a ordem está correta
        checkOrder();
    }, 250);
}

// Função responsável por retornar o elemento da cor:
let createColorElement = (color) => {
    let colors = [green, red, yellow, blue];

    return colors[color];
}

// Função responsável por gerar uma nova ordem:
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Função responsável pelo game_over:
let gameOver = () => {
    alert(`Fim de Jogo\nPontuação: ${score}\n\nAperte em OK para tentar novamente!`);

    // Limpando as ordens:
    order = [];
    clickedOrder = [];

    playGame();
}

// Função responsável por iniciar o jogo:
let playGame = () => {
    alert("Bem vindo ao Gênesis");
    score = 0;

    nextLevel();
}

// Adicionando os eventos de click:
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Iniciando o jogo:
playGame();