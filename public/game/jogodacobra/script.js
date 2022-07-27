let canvas = document.getElementById('snake'); // Pegando referência ao canvas;
let context = canvas.getContext('2d'); // Pegando o contexto;
let box = 32; // Definindo o tamanho de cada pixel;
let size = 16; // Definindo o tamanho do tabuleiro;

let snake = []; // Corpo da cobra;
snake[0] = { // Valores iniciais (cabeça) da cobra:
    x: (size / 2) * box,
    y: (size / 2) * box
};


food = {
    x: Math.floor(Math.random() * size) * box,
    y: Math.floor(Math.random() * size) * box
}

let direction = 'up'; // Definindo a direção inicial;

// Método responsável por desenhar o fundo do tabuleiro:
function drawBackground() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, size * box, size * box);
}

// Método responsável por desenhar a cobra:
function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = 'black';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// Método responsável por desenhar a maçã no tabuleiro:
function drawApple() {
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
}

// Pegando o valor de cada tecla pressionada:
document.addEventListener('keydown', updateDirection);
// Verificando se foi pressionada alguma tecla que deve mudar a direção:
function updateDirection(event) {
    if ((event.keyCode == 38 || event.keyCode == 87) && direction != 'down') {
        direction = 'up';
    }
    else if ((event.keyCode == 40 || event.keyCode == 83) && direction != 'up') {
        direction = 'down';
    }
    else if ((event.keyCode == 37 || event.keyCode == 65) && direction != 'right') {
        direction = 'left';
    }
    else if ((event.keyCode == 39 || event.keyCode == 68) && direction != 'left') {
        direction = 'right';
    }
}

// Método responsável por mudar a direção da cobra com base no botão clicado:
function updateDirectionButton(opost, newDirection) {
    direction = newDirection;
    let buttons = document.querySelectorAll('div button');

    buttons.forEach(button => {
        button.classList.remove('disabled');
    });

    buttons[opost].classList.add('disabled');
}

// Método responsável por impedir que a cobra desapareça da tela após ultrapassar os limites da tela:
function infiniteWalk(snakeX, snakeY) {
    if (snakeX > ((size - 1) * box)) {
        snake[0].x = 0;
    }
    else if (snakeX < 0) {
        snake[0].x = ((size - 1) * box);
    }

    if (snakeY > ((size - 1) * box)) {
        snake[0].y = 0;
    }
    else if (snakeY < 0) {
        snake[0].y = ((size - 1) * box);
    }
}

// Método responsável por iniciar e controlar o jogo:
function startGame() {
    drawBackground(); // Desenhando o background;
    drawSnake(); // Desenhando a cobra;
    drawApple(); // Desenhando a comida;

    // Verificando se houve colisão:
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(match); // Parando com a repetição;
            // Mensagem de fim de jogo:
            if (confirm('Fim de Jogo!\nDeseja tentar novamente?')) {
                location.reload();
            }
        }
    }

    // Pegando a posição atual da cobra:
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Fazendo com que a cobra ande para direção escolhida no momento:
    switch (direction) {
        case 'right':
            snakeX += box;
            break;

        case 'left':
            snakeX -= box;
            break;

        case 'up':
            snakeY -= box;
            break;

        case 'down':
            snakeY += box;
            break;
    }

    if (snakeX != food.x || snakeY != food.y) // Se não encostar na comida então não cresça:
        snake.pop();
    else // Se encostar na comida então cresça e faça com que a maçã seja gerada em uma nova posição:
    {
        food.x = Math.floor(Math.random() * size) * box;
        food.y = Math.floor(Math.random() * size) * box;
    }

    // Mudando a posição da cabeça:
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // Adicionando a nova cabeça na nova posição, dando a impressão de movimento: 
    snake.unshift(newHead);

    // Impedindo que a cobra suma do mapa se ultrapassar os limites:
    infiniteWalk(snakeX, snakeY);
}

// Iniciando o jogo e fazendo com que ele se repita a cada 100ms:
let match = setInterval(startGame, 80);