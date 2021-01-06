console.log('hello from index.js');

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
const X = canvas.width;
const Y = canvas.height;

// balls
var balls = [
  { x: 200, y: Y / 2, r: 20, dx: -2, dy: 2 },
  { x: 240, y: Y / 2, r: 20, dx: -2, dy: 2 },
  { x: 100, y: Y - 20, r: 20, dx: 2, dy: -2 },
  { x: 50, y: Y - 120, r: 20, dx: 2, dy: -2 },
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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  len = balls.length;
  for (var i = 0; i < len; i++) {
    drawBall(balls[i]);
  }

  drawPaddle();

  for (var i = 0; i < len; i++) {
    checkBallBorders(balls[i]);
  }

  // check collision with paddle
  balls.forEach(checkBallRect);

  // check collision with each other
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      checkBallBallCollide(balls[i], balls[j]);
    }
  }
  // if (x + dx + r > X || x + dx - r < 0) {
  //   dx = -dx;
  // }

  // if (y + dy + r > Y || y + dy - r < 0) {
  //   dy = -dy;
  // }

  // key pressed check block
  if (rightPressed) {
    console.log('rightPressed', rightPressed);
  }
  if (rightPressed) {
    console.log('leftPressed', leftPressed);
  }
  // End key pressed check block

  for (var i = 0, len = balls.length; i < len; i++) {
    balls[i].x += balls[i].dx;
    balls[i].y += balls[i].dy;
  }
}

setInterval(draw, 10);

// ball rectange collision
// let p = { x: px, y: py, pw: 3, ph: 3 };
// let b = { x: x, y: y, r: r, dx: dx, dy: dy };
// [dx, dy] = ballRectCollide(b, p);
