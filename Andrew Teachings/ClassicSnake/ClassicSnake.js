var canvas = document.getElementById("imgCanvas");
var ctx = canvas.getContext("2d");
var width = canvas.width
var height = canvas.height
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;
var score = 0;
var drawBorder = function(){
 ctx.fillStyle = "Red";
 ctx.fillRect(0, 0, width, blockSize);
 ctx.fillRect(0, height - blockSize, width, blockSize);
 ctx.fillRect(0, 0, blockSize, height);
 ctx.fillRect(width - blockSize, 0, blockSize, height);
};
var drawScore = function(){
  ctx.font = "20px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Score: " + score, blockSize, blockSize);
};

var gameOver = function () {
clearInterval(intervalId);
    ctx.font = "60px Courier";
    ctx.fillStyle = "Red";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over", width / 2, height / 2);
};

  //Update every frame (interval)... in ..Seconds
  var interval = setInterval(function(){
    drawBorder();
    drawScore();
  },1000);
//Block constructor - created col and row Object
var Block = function(col, row){
  this.col = col;
  this.row = row;
}
//
Block.prototype.drawSquare = function (color) { var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
  };

Block.prototype.drawCircle = function (color){
  var centerX = this.col * blockSize + blockSize / 2;
  var centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
}