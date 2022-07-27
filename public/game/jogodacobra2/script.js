var stage = document.getElementById('stage');
var ctx = stage.getContext('2d');

document.addEventListener('keydown', keyPush);

setInterval(game, 1000 / 15);

const speed = 1; // amount of squares the snake goes through
// var spx = spy = 0; // initial speed
var spx = 1;
var spy = 0;
var px = py = 10; // snake initial position
var ax = ay = 6; // apple position
var square = 20; // square size
var len = 20; // amount of squares

var trail = [];
tail = 5; // snake sizing

var score = tail; // score
var highScore = 0;

var a = 0; // direction's controller 

function game() {
    px += spx;
    py += spy;

    if (px < 0) { // border left
        px = len + 4;
    }
    if (px > len + 4) { // border right
        px = 0;
    }

    if (py < 2) { // border top
        py = len + 4;
    }
    if (py > len + 4) { // border bottom
        py = 1;
    }

    // drawing the background
    ctx.fillStyle = "#c0dfed";
    ctx.fillRect(0, 0, stage.width, stage.height);

    // drawing the apple
    ctx.fillStyle = "red";
    ctx.fillRect(ax * len, ay * len, square, square);

    // drawing the snake
    for (var i = 0; i < trail.length; i++) {
        // a new color to the head 
        if (i == tail - 1) {
            ctx.fillStyle = '#2c3e50';
        } else {
            ctx.fillStyle = 'grey'; // and for his body
        }

        // drawing
        ctx.fillRect(trail[i].x * square, trail[i].y * len, len - 1, len - 1);

        // analyzing a possible collision
        if (trail[i].x == px && trail[i].y == py) {
            spx = spy = 0;
            a = 0;

            // 
            if (highScore < score) {
                highScore = score;
            }

            tail = 5;
            score = tail;
        }

    }

    // drawing the score
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, 0, 500, 40);

    ctx.fillStyle = '#000000';
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 380, 28);
    ctx.fillText(`High Score: ${highScore}`, 20, 28);

    // snake movement
    trail.push({ x: px, y: py }) // 
    while (trail.length > tail) {
        trail.shift(); // 
    }

    if (ax == px && ay == py) {
        // increasing the snake
        tail++;
        score++;

        // respawning the apple in a random position
        // .floor transform a float into an integer
        ax = Math.floor(Math.random() * len)
        ay = Math.floor(Math.random() * len + 2)
    }
}

function keyPush(event) {

    switch (event.keyCode) {
        case 65: //left
        case 37: //left
            if (a != 68) {
                a = 65;
                spy = 0;
                spx = -speed;
                break;
            } break

        case 87: //up
        case 38: //up
            if (a != 83) {
                a = 87;
                spx = 0;
                spy = -speed;
                break;
            } break

        case 68: //right
        case 39: //right
            if (a != 65) {
                a = 68;
                spy = 0;
                spx = +speed;
                break;
            } break

        case 83: //down
        case 40: //down
            if (a != 87) {
                a = 83;
                spx = 0;
                spy = +speed;
                break;
            } break

        default:
            break;
    }
}