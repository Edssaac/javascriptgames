// Elemento Dino:
const dino = document.getElementById("dino");

// Elemento Background:
const background = document.getElementById("background");

// Elemento Score:
const scorePoints = document.getElementById("score_points");

var scoreInterval;

// Verificar se o dino está no ar:
let isJumping = false;

// Pontuação do jogo:
let score = 0;

// Função responsável por verificar se o pulo foi requisitado:
function handleKeyUp(key) {

    switch (key.keyCode) {
        case 32: // Espaço
        case 38: // ArrowUp
        case 87: // W
            handleClick();
            break;
    }

}

// Função responsável por verificar se pode pular:
function handleClick() {
    if (!isJumping) // Pulando apenas quando não estiver pulando
        jump(); // Pular
}

// Função responsável por realizar o pulo:
function jump() {

    let position = 0; // Tamanho do pulo
    isJumping = true; // Pulando

    let upInterval = setInterval(() => {

        if (position >= 180) {   // Se estiver maior que essa altura

            clearInterval(upInterval); // Parar o intervalo

            // Descendo:
            let downInterval = setInterval(() => {

                if (position <= 15) {
                    dino.style.backgroundImage = "url('assets/dino_running.gif')";
                    clearInterval(downInterval); // Parar o intervalo
                    isJumping = false; // Parou de pular
                }
                else {
                    position -= 16; // voltando para o chão
                    dino.style.bottom = position + "px";
                }
            }, 20);

        }
        else {
            // Subindo:
            position += 20; // Pulando
            dino.style.backgroundImage = "url('assets/dino_jumping.png')";
            dino.style.bottom = position + "px";
        }

    }, 20);

}

// Função responsável por criar os cactus na tela:
function createCactus() {

    const cactus = document.createElement("div") // Criando uma div
    let cactusPosition = window.screen.width + 200; // Posição do cactus
    let randomTime = Math.random() * 4000;

    cactus.classList.add("cactus"); // Adicionando uma classe ao elemento criado
    cactus.style.left = cactusPosition + "px"; // Passando a posição do cactus
    background.appendChild(cactus); // Adicionando o cactus ao background

    let leftInterval = setInterval(() => {

        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus); // Removendo o cactus que foi passado

        } else if (!isJumping && cactusPosition > 0 && cactusPosition < 60) {
            clearInterval(leftInterval);
            clearInterval(scoreInterval);
            document.body.innerHTML =
                `<div class='game_over'>
                <h1 class='game_over_message'>Fim de Jogo</h1>
                <p class='game_over_score'>Pontuação: ${("00" + score).slice(-3)}</p>
                <button class='game_over_button' type='button' onclick='restart()'>Tentar Novamente</button>
            </div>`;

        } else {
            cactusPosition -= 10; // Movendo para a esquerda
            cactus.style.left = cactusPosition + "px";
        }

    }, 20)

    setTimeout(createCactus, randomTime); // Chamando a função para gerar um novo cactu em um tempo aleatório
}

// Função responsável por recomeçar o jogo:
function restart() {
    window.location.reload();
}

// Função responsável por atualizar o score:
function updateScore() {

    scoreInterval = setInterval(() => {
        score++;
        scorePoints.innerText = ("00" + score).slice(-3);
    }, 100);

}

// Chamando a função dos cactus:
createCactus();

// Gerando a pontuação do jogo:
updateScore();

// Escutando o evento de apertar uma tecla:
document.addEventListener("keyup", handleKeyUp);

// Escutando clicks:
document.addEventListener("click", handleClick);

