console.log('hello from index.js');

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
const X = canvas.width;
const Y = canvas.height;

// block paddle
var ph = 30
var pw = 150
var px = X / 2 - pw / 2
var py = Y - ph
// var py = Y/3
// end block paddle

// block balls
var r = ph / 2;
// var x = X / 3;
var x = X / 3
var y = Y - ph - r - 1;

var dx = 2;
var dy = -2;
// end block balls

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


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPadlle()
  drawBall();


  // check world borders
  if (x + r > X || x - r < 0) {
    dx = -dx;
  }

  if (y + r > Y || y - r < 0) {
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
