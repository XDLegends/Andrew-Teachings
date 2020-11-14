//Canvas stuff
var canvas2 = document.getElementById("canvas2");
var ctx = canvas2.getContext("2d");
var width2 = canvas.width
var height2 = canvas.height
var blockSize = 10;
var widthInBlocks = width2 / blockSize;
var heightInBlocks = height2 / blockSize;
var score2 = 0;

//border width="1500" height="1000
var drawBorder = function(){
 ctx.fillStyle = "Blue";
 ctx.fillRect(0, 0, width, blockSize); //x
 ctx.fillRect(0, height - blockSize, width, blockSize);
 ctx.fillRect(0, 0, blockSize, height);  //y
 ctx.fillRect(width - blockSize, 0, blockSize, height);
};
//Making the Score and setting it to 0
var drawScore2 = function(){
  ctx.font = "20px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
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

  //Update every frame (interval)... in ..Seconds

//Block constructor - created col and row Object
var Block = function(col, row){
  this.col = col;
  this.row = row;
}
const vegetaSize = 50;
// drawing a Square
Block.prototype.drawSquare = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
  };


Block.prototype.drawVegeta = function () {
  var x = this.col * blockSize + blockSize/2 - vegetaSize/2;
  var y = this.row * blockSize + blockSize/2 - vegetaSize/2;
  var vegeta = document.getElementById("Vegeta");
  ctx.drawImage(vegeta,x,y,vegetaSize,vegetaSize);
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

// drawing a Circle
Block.prototype.drawCircle = function (color){
  var centerX = this.col * blockSize + blockSize / 2;
  var centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
}


//Equal Method, when snake = food location
Block.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};

var Snake = function () {
  this.segments = [
      new Block(50,5),
    ];

    this.direction = "d";
    this.nextDirection = "d";
};

//Food constructor
var Food2 = function(){
  this.position = new Block(10,10);
};
//Draw a circle at food's location
Food2.prototype.draw = function(){
  this.position.drawCircle("DarkGreen");
}
//Move the food to a new random location
Food2.prototype.move = function() {
  var randomRow = Math.floor(Math.random() * (widthInBlocks -2)) +1;
  var randomCol = Math.floor(Math.random() * (heightInBlocks -2)) +1;
  this.position = new Block(randomRow, randomCol);
}
var food2 = new Food2();

Snake.prototype.draw = function() {
  for(var i = 0; i < this.segments.length; i++){
    //vegeta head
    if (i === 0){  //head = index 0 then draw vegeta
      this.segments[i].drawVegeta();
    }
    else {
      this.segments[i].drawSquare("black");
    }
  }
}


Snake.prototype.move = function() {
    var newHead;
    var head = this.segments[0];

    this.direction = this.nextDirection;
    if(this.direction === "d"){      //GO RIGHT
      newHead = new Block(head.col + 1, head.row);

    }else if(this.direction === "a"){ //left
      newHead = new Block(head.col - 1, head.row);

    }else if(this.direction === "w"){ //up
      newHead = new Block(head.col, head.row - 1);

    }else if(this.direction === "s"){ //down
      newHead = new Block(head.col, head.row + 1);
    }
    //if statement checkCollision (using checkCollision function
    if(this.checkCollision(newHead)){
      gameOver();
      console.log("hit!");
      return;
    }
    this.segments.unshift(newHead);
    if(newHead.equal(food.position)) {
       score++;
       food2.move();
       } else {
       this.segments.pop();
     }
};

var directions = {
    87: "w",
    65: "a",
    83: "s",
    68: "d",
};
// The keydown handler for handling direction key presses
$("body").keydown(function (event) {
    var newDirection2 = directions2[event.keyCode];
    if (newDirection2 !== undefined) {
         snake.setDirection(newDirection2);
    }
});
Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "w" && newDirection === "s") {
        return;
    } else if (this.direction === "d" && newDirection === "a") {
    return;
  } else if (this.direction === "s" && newDirection === "w") {
    return;
  } else if (this.direction === "a" && newDirection === "d") {
    return;
    }
    this.nextDirection = newDirection;
};
Snake.prototype.checkCollision = function(head){
  var leftCollision = (head.col === 0);
  var rightCollision = (head.row === widthInBlocks - 1);
  var topCollision = (head.row === 0);
  var bottomCollision = (head.col === heightInBlocks - 1);

  var selfCollision = false;
  var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;


  for(i = 0; i < this.segments.length; i++){
    if(head.equal(this.segments[i])) {
        selfCollision = true;
    }
  }
  return selfCollision || wallCollision;
};

var snake = new Snake();
var intervalId = setInterval(function(){
    ctx.clearRect(0,0, width, height);
    drawBorder();
    drawScore();
    snake.draw();
    snake.move();
    food2.draw();
  },1000);
