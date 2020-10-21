var ball = [];
setInterval(animate, 10);
function animate(){
  var canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for (var n = 0; n < ball.length; n++){
    ball[ n ].update();
    ball[ n ].draw();
  }
}
class Ball{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 30;
    this.color = randomColor();
  }
  draw(){
   var canvas = document.getElementById("imgCanvas");
   var ctx = canvas.getContext("2d");
   ctx.fillStyle = randomColor() + "33";
   ctx.beginPath();
   ctx.arc(this.x,this.y,50,0,Math.PI*2);
   ctx.fill();
   ctx.arc(this.x, this.y, 50, 0, Math.PI*2)
   ctx.stroke();
 }
  update(){
  this.x += 100;
  this.y += 100;
  }
}
function randomColor(){
  var r = Math.round(Math.random() * 240 + 16);
  var g = Math.round(Math.random() * 240 + 16);
  var b = Math.round(Math.random() * 240 + 16);
  var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

function draw(e){
  var canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  var rect = canvas.getBoundingClientRect();
  var posx = e.clientX - rect.left;
  var posy = e.clientY - rect.top;


var newBall = new Ball(posx, posy);
newBall.draw();
// ball.push [ newBall ];
ball.push(newBall);
}
