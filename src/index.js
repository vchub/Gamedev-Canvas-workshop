console.log('hello from index.js');

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
const X = canvas.width;
const Y = canvas.height;

// ball 1
b1 = { x: 200, y: Y / 2, r: 20, dx: -2, dy: 2 };
b2 = { x: 300, y: Y / 3, r: 20, dx: 2, dy: -2 };

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

function borderCollisions(b) {
  if (b.x + b.dx + b.r > X || b.x + b.dx - b.r < 0) {
    b.dx = -b.dx;
  }
  if (b.y + b.dy + b.r > Y || b.y + b.dy - b.r < 0) {
    b.dy = -b.dy;
  }
}
function paddleCollisions(b) {
  // top
  if (
    b.x + b.dx + b.r > px &&
    b.x + b.dx - b.r < px + pw &&
    b.dy > 0 &&
    b.y + b.dy + b.r > py &&
    b.y + b.dy + b.r < py + pzone
  ) {
    b.dy = -b.dy;
  }
  // bottom
  if (
    b.dy < 0 &&
    b.x + b.dx + b.r > px &&
    b.x + b.dx - b.r < px + pw &&
    b.y + b.dy - b.r < py + ph &&
    b.y + b.dy + b.r > py + ph - pzone
  ) {
    b.dy = -b.dy;
  }
}

function moveBall(b) {
  b.x += b.dx;
  b.y += b.dy;
}

function ballsCollision(b1, b2) {
  d = ((b1.x - b2.x) ** 2 + (b1.y - b2.y) ** 2) ** 0.5;
  if (d <= b1.r + b2.r) {
    let t = b1.dx;
    b1.dx = b2.dx;
    b2.dx = t;
    t = b1.dy;
    b1.dy = b2.dy;
    b2.dy = t;

    // [b1.dx, b2.dx] = [b2.dx, b1.dx][(b1.dy, b2.dy)] = [b2.dy, b1.dy];
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall(b1);
  drawBall(b2);

  // world borders collisions
  borderCollisions(b1);
  borderCollisions(b2);

  // ball paddle collision
  paddleCollisions(b1);
  paddleCollisions(b2);

  // ball ball collision
  ballsCollision(b1, b2);

  // move the balls
  moveBall(b1);
  moveBall(b2);

  // move the paddle
  if (rightPressed) {
    console.log('rightPressed', rightPressed);
  }
  if (rightPressed) {
    console.log('leftPressed', leftPressed);
  }
}

/**
 * Блок для управления клавишами
 */
var rightPressed = false;
var leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == 'Right' || e.key == 'ArrowRight') {
    rightPressed = true;
  } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == 'Right' || e.key == 'ArrowRight') {
    rightPressed = false;
  } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
    leftPressed = false;
  }
}
// End Блок для управления клавишами

setInterval(draw, 10);
