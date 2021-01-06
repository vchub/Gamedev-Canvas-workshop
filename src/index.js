console.log('hello from index.js');

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
const X = canvas.width;
const Y = canvas.height;
// ball
var x = X / 2;
var y = Y - 30;
r = 20;
var dx = 2;
var dy = -2;
// paddle
var pw = 300;
var ph = 10;
var px = X / 4;
// var py = Y - ph;
var py = (Y * 2) / 3;
var pzone = 2; // зона где происходит столкновение

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
  ctx.beginPath();
  ctx.rect(px, py, pw, ph);
  ctx.fillStyle = 'red';
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
  drawPadlle()
  drawBall();
  drawPaddle();

  // world end collisions
  if (x + dx + r > X || x + dx - r < 0) {
    dx = -dx;
  }

  if (y + dy + r > Y || y + dy - r < 0) {
    dy = -dy;
  }

  // ball rectange collision
  // top
  if (
    x + dx + r > px &&
    x + dx - r < px + pw &&
    dy > 0 &&
    y + dy + r > py &&
    y + dy + r < py + pzone
  ) {
    dy = -dy;
  }
  // bottom
  if (
    dy < 0 &&
    x + dx + r > px &&
    x + dx - r < px + pw &&
    y + dy - r < py + ph &&
    y + dy + r > py + ph - pzone
  ) {
    dy = -dy;
  }
  //проверка столкновения с платформой by y
  if (x + r >= px && x - r <= px + pw && y + r >= py) {
    dy = -dy
  }
  //try
  // if (y + r >= py && y - r <= py + ph && x + r > px && x - r < px + pw) {
  //   dx = -dx

  // }

  // if (x - r <= py + pw) {
  //   dy = -dy

  // }


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

// ball rectange collision
// let p = { x: px, y: py, pw: 3, ph: 3 };
// let b = { x: x, y: y, r: r, dx: dx, dy: dy };
// [dx, dy] = ballRectCollide(b, p);
