console.log('hello from index.js');

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
const X = canvas.width;
const Y = canvas.height;

// balls
var balls = [
  { x: 200, y: Y / 2, r: 20, dx: -2, dy: 2 },
  // { x: 240, y: Y / 3, r: 20, dx: 2, dy: -2 },
  // { x: 100, y: Y - 50, r: 20, dx: 2, dy: -2 },
  // { x: 50, y: Y - 120, r: 20, dx: 2, dy: -2 },
];

var pzone = 2; // зона где происходит столкновение

// paddle
var pw = 200;
var ph = 10;
var px = X / 4;
// var py = Y - ph;
var py = (Y * 2) / 3;

/**
 * Блок для управления клавишами
 */
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) rightPressed = true;
  if (e.keyCode == 37) leftPressed = true;
  if (e.keyCode == 38) upPressed = true;
  if (e.keyCode == 40) downPressed = true;
}

function keyUpHandler(e) {
  if (e.keyCode == 39) rightPressed = false;
  if (e.keyCode == 37) leftPressed = false;
  if (e.keyCode == 38) upPressed = false;
  if (e.keyCode == 40) downPressed = false;
}
// End Блок для управления клавишами

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

function checkBallBorders(b) {
  if (b.x + b.dx + b.r > X || b.x + b.dx - b.r < 0) {
    b.dx = -b.dx;
  }
  if (b.y + b.dy + b.r > Y || b.y + b.dy - b.r < 0) {
    b.dy = -b.dy;
  }
}

function checkBallRect(b) {
  // ball rectange collision
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

function checkBallBallCollide(b1, b2) {
  d2 = ((b1.x - b2.x) ** 2 + (b1.y - b2.y) ** 2) ** 0.5;
  // console.log(d2);
  if (d2 < b1.r + b2.r) {
    // swap
    var t = b1.dx;
    b1.dx = b2.dx;
    b2.dx = t;
    t = b1.dy;
    b1.dy = b2.dy;
    b2.dy = t;
  }
}

function checkGameOver(b) {
  if (b.y + b.r >= Y) {
    alert('GAME OVER');
    document.location.reload();
    clearInterval(interval);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // len = balls.length;
  // for (var i = 0; i < len; i++) {
  //   drawBall(balls[i]);
  // }
  balls.forEach(drawBall);

  drawPaddle();

  // for (var i = 0; i < len; i++) {
  //   checkBallBorders(balls[i]);
  // }
  balls.forEach(checkBallBorders);

  // check collision with paddle
  balls.forEach(checkBallRect);

  balls.forEach(checkGameOver);

  // check collision with each other
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      checkBallBallCollide(balls[i], balls[j]);
    }
  }

  // key pressed check block
  if (rightPressed && px + pw < X - 7) px += 7;
  if (leftPressed && px > 7) px -= 7;
  if (upPressed && py > 7) py -= 7;
  if (downPressed && py + ph < Y - 7) py += 7;
  // End key pressed check block

  for (var i = 0, len = balls.length; i < len; i++) {
    balls[i].x += balls[i].dx;
    balls[i].y += balls[i].dy;
  }
}

const interval = setInterval(draw, 10);
