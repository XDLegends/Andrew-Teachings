prompt('You have 10 guesses. Guess 1-10');

var answer = Math.floor(Math.random()*100);
var guess = prompt("What's your guess?");

for(i = 0; i < 10; i++){
          if(answer == guess){
            alert("You guessed correctly");
            break;
          } else{
            guess = alert("Please Try Again");
          }
}
