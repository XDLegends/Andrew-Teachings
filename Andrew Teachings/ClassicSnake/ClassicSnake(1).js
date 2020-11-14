//Canvas stuff
var canvas = document.getElementById("imgCanvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var blockSize = 10;
var gokuSize = 50;
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
//Making the Score and setting it to 0
var drawScore = function(){
  ctx.font = "20px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Score: " + score, blockSize, blockSize);
};
// Making a GameOver Screen
var gameOver = function () {
clearInterval(intervalId);
    ctx.font = "60px Courier";
    ctx.fillStyle = "Red";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over", width / 2, height / 2);
};

//Block constructor - created col and row Object
var Block = function(row, col){
  this.row = row;
  this.col = col;
}
// drawing a Square
Block.prototype.drawSquare = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
  };
//circle variable
var circle = function(x,y,radius,fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
    ctx.fill();
    } else {
    ctx.stroke();
  }
};
//draw goku
// Block.prototype.drawGoku = function(){
//    var x = this.col * blockSize;
//    var y = this.row * blockSize;
//    var img = document.getElementById("Goku");
//    ctx.drawImage(img,x,y,gokuSize,gokuSize);  //context.drawImage(img,x,y,width,height)
// }

// drawing a Circle
Block.prototype.drawCircle = function (color){
  var centerX = this.col * blockSize + blockSize / 2;
  var centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
}
// var sampleCircle = new Block (4,3);
// sampleCircle.drawCircle("blue");

//Equal Method, when snake = food location
Block.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};

var Snake = function () {
  this.segments = [
      new Block(7,5),
      new Block(6,5),
      new Block(5,5),
    ];

    this.direction = "right";
    this.nextDirection = "right";
};


Snake.prototype.draw = function() {
  for(var i = 0; i < this.segments.length; i++){  //8 segment
    this.segments[i].drawSquare("black");
  }
}


Snake.prototype.move = function() {
    var newHead;
    var head = this.segments[0];
    this.direction = this.nextDirection;
 //  ["0,0", "0,1",   ]
    if(this.direction === "right"){      //GO RIGHT
      newHead = new Block(head.row, head.col + 1);
    }else if(this.direction === "left"){ //left
      newHead = new Block(head.row, head.col - 1);
    }else if(this.direction === "up"){ //up
      newHead = new Block(head.row - 1, head.col);
    }else if(this.direction === "down"){ //down
      newHead = new Block(head.row + 1, head.col);
    }
    this.segments.unshift(newHead);
};

var directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
};
// The keydown handler for handling direction key presses
$("body").keydown(function(event) {
    var newDirection = directions[event.keyCode];
    if (newDirection !== undefined) {
         snake.setDirection(newDirection);
    }
});
Snake.prototype.setDirection = function (newDirection) {
   // check if opposite direction, if true return (meaning skip)
    if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "right" && newDirection === "left") {
    return;
    } else if (this.direction === "down" && newDirection === "up") {
    return;
    } else if (this.direction === "left" && newDirection === "right") {
    return;
    }
    this.nextDirection = newDirection;
};

//FOOD
var food = function () {
    this.position = new Block(10, 10);
};
food.prototype.draw = function () {
    this.position.drawCircle("LimeGreen");
};
food.prototype.move = function () {
  var randomCol = Math.floor(Math.random() * (widthInBlocks));
  var randomRow = Math.floor(Math.random() * (heightInBlocks));
  this.position = new Block(randomCol, randomRow);

var snake = new Snake();

var interval = setInterval(function(){
    ctx.clearRect(0,0, width, height);
    drawBorder();
    drawScore();
    snake.draw();
    snake.move();
  },50);
}
