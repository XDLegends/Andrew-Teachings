// //Canvas stuff
// var canvas = document.getElementById("imgCanvas");
// var ctx = canvas.getContext("2d");
// var width = canvas.width
// var height = canvas.height
// var blockSize = 10;
// var widthInBlocks = width / blockSize;
// var heightInBlocks = height / blockSize;
// var score = 0;
//
// var drawBorder = function(){
//  ctx.fillStyle = "Red";
//  ctx.fillRect(0, 0, width, blockSize); //x
//  ctx.fillRect(0, height - blockSize, width, blockSize);
//  ctx.fillRect(0, 0, blockSize, height);  //y
//  ctx.fillRect(width - blockSize, 0, blockSize, height);
// };
// // Making the Score and setting it to 0
// var drawScore = function(){
//   ctx.font = "20px Courier";
//   ctx.fillStyle = "Black";
//   ctx.textAlign = "left";
//   ctx.textBaseline = "top";
//   ctx.fillText("Score: " + score, blockSize, blockSize);
// };
// // Making a GameOver Screen
// var gameOver = function () {
// clearInterval(intervalId);
//     ctx.font = "60px Courier";
//     ctx.fillStyle = "Red";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText("Game Over", width / 2, height / 2);
// };
//
//   //Update every frame (interval)... in ..Seconds
//
// //Block constructor - created col and row Object
// var Block = function(col, row){
//   this.col = col;
//   this.row = row;
// }
// const gokuSize = 50;
// // drawing a Square
// Block.prototype.drawSquare = function (color) {
//     var x = this.col * blockSize;
//     var y = this.row * blockSize;
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, blockSize, blockSize);
//   };
//
//
// Block.prototype.drawGoku = function () {
//   var x = this.col * blockSize + blockSize/2 - gokuSize/2;
//   var y = this.row * blockSize + blockSize/2 - gokuSize/2;
//   var goku = document.getElementById("Goku");
//   ctx.drawImage(goku,x,y,gokuSize,gokuSize);
// };
//
// //circle variable
// var circle = function(x,y,radius,fillCircle){
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
// if (fillCircle) {
//     ctx.fill();
// } else {
//     ctx.stroke();
//   }
// };
//
// // drawing a Circle
// Block.prototype.drawCircle = function (color){
//   var centerX = this.col * blockSize + blockSize / 2;
//   var centerY = this.row * blockSize + blockSize / 2;
//   ctx.fillStyle = color;
//   circle(centerX, centerY, blockSize / 2, true);
// }
//
//
// //Equal Method, when snake = food location
// Block.prototype.equal = function (otherBlock) {
//     return this.col === otherBlock.col && this.row === otherBlock.row;
// };
//
// var Snake = function () {
//   this.segments = [
//       new Block(7,5),
//     ];
//
//     this.direction = "right";
//     this.nextDirection = "right";
// };
//
// //Food constructor
// var Food = function(){
//   this.position = new Block(10,10);
// };
// //Draw a circle at food's location
// Food.prototype.draw = function(){
//   this.position.drawCircle("LimeGreen");
// }
// //Move the food to a new random location
// Food.prototype.move = function() {
//   var randomRow = Math.floor(Math.random() * (widthInBlocks -2)) +1;
//   var randomCol = Math.floor(Math.random() * (heightInBlocks -2)) +1;
//   this.position = new Block(randomRow, randomCol);
// }
// var food = new Food();
//
// Snake.prototype.draw = function() {
//   for(var i = 0; i < this.segments.length; i++){
//     //goku head
//     if (i === 0){  //head = index 0 then draw goku
//       this.segments[i].drawGoku();
//     }
//     else {
//       this.segments[i].drawSquare("black");
//     }
//   }
// }
//
//
// Snake.prototype.move = function() {
//     var newHead;
//     var head = this.segments[0];
//
//     this.direction = this.nextDirection;
//     if(this.direction === "right"){      //GO RIGHT
//       newHead = new Block(head.col + 1, head.row);
//
//     }else if(this.direction === "left"){ //left
//       newHead = new Block(head.col - 1, head.row);
//
//     }else if(this.direction === "up"){ //up
//       newHead = new Block(head.col, head.row - 1);
//
//     }else if(this.direction === "down"){ //down
//       newHead = new Block(head.col, head.row + 1);
//     }
//     //if statement checkCollision (using checkCollision function
//     if(this.checkCollision(newHead)){
//       gameOver();
//       console.log("hit!");
//       return;
//     }
//     this.segments.unshift(newHead);
//     if(newHead.equal(food.position)) {
//        score++;
//        food.move();
//        } else {
//        this.segments.pop();
//      }
// };
//
// var directions = {
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down",
// };
// // The keydown handler for handling direction key presses
// $("body").keydown(function (event) {
//     var newDirection = directions[event.keyCode];
//     if (newDirection !== undefined) {
//          snake.setDirection(newDirection);
//     }
// });
// Snake.prototype.setDirection = function (newDirection) {
//     if (this.direction === "up" && newDirection === "down") {
//         return;
//     } else if (this.direction === "right" && newDirection === "left") {
//     return;
//     } else if (this.direction === "down" && newDirection === "up") {
//     return;
//     } else if (this.direction === "left" && newDirection === "right") {
//     return;
//     }
//     this.nextDirection = newDirection;
// };
// Snake.prototype.checkCollision = function(head){
//   var leftCollision = (head.col === 0);
//   var rightCollision = (head.row === widthInBlocks - 1);
//   var topCollision = (head.row === 0);
//   var bottomCollision = (head.col === heightInBlocks - 1);
//
//   var selfCollision = false;
//   var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
//
//
//   for(i = 0; i < this.segments.length; i++){
//     if(head.equal(this.segments[i])) {
//         selfCollision = true;
//     }
//   }
//   return selfCollision || wallCollision;
// };
//
// var snake = new Snake();
// var intervalId = setInterval(function(){
//     ctx.clearRect(0,0, width, height);
//     drawBorder();
//     drawScore();
//     snake.draw();
//     snake.move();
//     food.draw();
//   },50);
