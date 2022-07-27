const player1 = "X";
const player2 = "O";

var playTime = player1;
var gameOver = false;

var vencedor = "";
var placarE = 0;
var placarX = 0;
var placarY = 0;

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador() {
    if (gameOver) {
        return;
    }

    if (playTime == player1) {
        var player = document.querySelectorAll("div#head img")[0];
        player.setAttribute("src", "assets/X.png");
    } else {
        var player = document.querySelectorAll("div#head img")[0];
        player.setAttribute("src", "assets/O.svg");
    }
}

function pontuacao() {
    var X = document.getElementById("X");
    X.innerHTML = ("X:" + placarX);

    var Y = document.getElementById("Y");
    Y.innerHTML = ("O:" + placarY);

    var E = document.getElementById("E");
    E.innerHTML = ("E:" + placarE);
}

function inicializarEspacos() {
    var espacos = document.getElementsByClassName("espaco");

    for (var i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function () {

            if (gameOver) {
                return;
            }

            if (this.getElementsByTagName("img").length == 0) {
                if (playTime == player1) {
                    this.innerHTML = "<img src='assets/X.png' height='55'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                } else {
                    this.innerHTML = "<img src='assets/O.svg' height='55'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }

                atualizaMostrador();
                verificarVencedor();
            }
        });
    }
}

async function verificarVencedor() {
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    vencedor = "";

    if (((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1 != "") {
        vencedor = a1;

    } else if (((b1 == b2 && b1 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1)) && b2 != "") {
        vencedor = b2;

    } else if (((c1 == c2 && c1 == c3) || (c3 == b3 && c3 == a3)) && c3 != "") {
        vencedor = c3;
    }

    if (vencedor != "") {
        gameOver = true;

        await sleep(40);
        alert("O vencedor foi: " + vencedor);
    }

    if ((a1 != "") && (a2 != "") && (a3 != "") && (b1 != "") && (b2 != "") && (b3 != "") && (c1 != "") && (c2 != "") && (c3 != "") && (vencedor == "")) {
        placarE += 1;
        gameOver = true;

        await sleep(20);
        alert("Empate!");
    }

    if (vencedor == "X") {
        placarX += 1;
    } else if (vencedor == "O") {
        placarY += 1;
    }

    pontuacao();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function restart() {
    gameOver = false;
    playTime = player1;

    var player = document.querySelectorAll("div#head img")[0];
    player.setAttribute("src", "assets/X.png");

    var reset = document.getElementsByClassName("espaco");
    for (var i = 0; i < reset.length; i++) {
        if (reset[i].getElementsByTagName("img").length != 0) {
            reset[i].innerHTML = "<img src=''>";
            reset[i].innerHTML = "<a>"
            reset[i].setAttribute("jogada", "");
        }
    }
}
