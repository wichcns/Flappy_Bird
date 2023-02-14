const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
//we will need the gamecontainer to make it blurry
//when we display the end menu
const gameContainer = document.getElementById('game-container');

const flappImg = new Image();
flappImg.src = 'assets/images_bird.png';

//Game constants
const FLAP_SPEED = -5;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT = 30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 125;

// BIRD variables
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAcceleration = 0.1;

// Pipe veriables
let pipeX = 400;
let pipeY = canvas.height - 200;

// scor and highscore variables
let scorDiv = document.getElementById('score-display');
let scor = 0;
let highscore = 0;

document.body.onkeyup = function(e){
    if (e.code == 'Space'){
        birdVelocity = FLAP_SPEED;
    }
}

function increasScore() {
    // TODO : 
}

function collisionCheck() {
     // TODO :
}

function hideEndMenu () {
    document.getElementById('end-menu').style.display = 'none';
    gameContainer.classList.remove('backdrop-blur');
}

function showEndMenu() {
    document.getElementById('end-menu').style.display = 'block';
    gameContainer.classList.add('backdrop-blur');
    document.getElementById('end-scor').inertHTML = scor;
}

function resetGame() {
    // TODO : 
}


function endGame() {
    // TODO : 
}

function loop() {
    // reset the ctx after every loop iteration
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // Dreaw Flappy Bird
    ctx.drawImage(flappImg, birdX, birdY);

    // Dreaw Pipes
    // ctx.fillstyle = '#333';

    // apply gravity to the bird and let it move
    birdVelocity += birdAcceleration;
    birdY += birdVelocity;

    requestAnimationFrame(loop);
}

loop();