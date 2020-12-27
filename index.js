console.log("hello from index.js");

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const X = canvas.width;
const Y = canvas.height;
var x = X / 2;
var y = Y - 30;
r = 30;
var dx = 2;
var dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (x + r > X || x - r < 0) {
    dx = -dx
  }

  if (y + r > Y || y - r < 0) {
    dy = -dy
  }

  drawBall();
  x += dx;
  y += dy;

}

setInterval(draw, 10);
