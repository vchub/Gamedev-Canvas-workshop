console.log('hello from index.js');

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
const X = canvas.width;
const Y = canvas.height;
var x = X / 2;
var y = Y - 30;
var r = 30;
var dx = 2;
var dy = -2;
// block paddle
var ph = 50
var pw = 250
var px = 100
var py = Y - ph

/**
 * Блок для управления клавишами
 */
var rightPressed = false;
var leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}
// End Блок для управления клавишами

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}
function drawPadlle() {
  h = 50
  ctx.beginPath();
  ctx.rect(px, py, pw, ph);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPadlle()
  drawBall();


  if (x + r > X || x - r < 0) {
    dx = -dx;
  }

  if (y + r > Y || y - r < 0) {
    dy = -dy;
  }
  

  // key pressed check block
  if (rightPressed) {
    console.log('rightPressed', rightPressed);
  }
  if (rightPressed) {
    console.log('leftPressed', leftPressed);
  }
  // End key pressed check block

  x += dx;
  y += dy;
}

setInterval(draw, 10);
