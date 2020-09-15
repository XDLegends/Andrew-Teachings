alert('You have infinite guesses.');

var answer = Math.floor(Math.random()*100);
var guess = "";

while (guess != answer){
      guess = prompt("what is you guess?");
      if(guess > answer)
      msg = "Your guess is too high";
      else if (guess < answer)
      msg = "Your guess is too low";
      else
      msg = "You Win";
      alert(msg);
}



// else
// msg = "You Win!";


          //if(answer == guess){
            //alert("You guessed correctly");
            //break;
          //} else{
            //guess = alert("Please Try Again");
          //}
//}
