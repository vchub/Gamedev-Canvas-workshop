console.log('hello from index.js');

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
const X = canvas.width;
const Y = canvas.height;

// ball 1
b1 = { x: 200, y: Y / 2, r: 20, dx: -2, dy: 2 };

var pzone = 2; // зона где происходит столкновение

// paddle
var pw = 200;
var ph = 10;
var px = X / 3;
// var py = Y - ph;
var py = (Y * 2) / 3;

function drawBall(b) {
  ctx.beginPath();
  ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(px, py, pw, ph);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall(b1);

  // world borders collisions
  if (b1.x + b1.dx + b1.r > X || b1.x + b1.dx - b1.r < 0) {
    b1.dx = -b1.dx;
  }
  if (b1.y + b1.dy + b1.r > Y || b1.y + b1.dy - b1.r < 0) {
    b1.dy = -b1.dy;
  }

  // ball paddle collision
  // top
  if (
    b1.x + b1.dx + b1.r > px &&
    b1.x + b1.dx - b1.r < px + pw &&
    b1.dy > 0 &&
    b1.y + b1.dy + b1.r > py &&
    b1.y + b1.dy + b1.r < py + pzone
  ) {
    b1.dy = -b1.dy;
  }
  // b1ottom
  if (
    b1.dy < 0 &&
    b1.x + b1.dx + b1.r > px &&
    b1.x + b1.dx - b1.r < px + pw &&
    b1.y + b1.dy - b1.r < py + ph &&
    b1.y + b1.dy + b1.r > py + ph - pzone
  ) {
    b1.dy = -b1.dy;
  }

  // move the b1
  b1.x += b1.dx;
  b1.y += b1.dy;

  // key pressed check block
  // if (rightPressed) {
  //   console.log('rightPressed', rightPressed);
  // }
  // if (rightPressed) {
  //   console.log('leftPressed', leftPressed);
  // }
  // End key pressed check block
}

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

setInterval(draw, 10);
