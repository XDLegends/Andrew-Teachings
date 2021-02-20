var answer = Math.round(Math.random()*100);
var guess = "";
    while (guess !== answer) {
        guess = prompt("what is you guess?");
        guess = parseInt(guess);
        console.log(guess);

      if(isNaN(guess))
      msg = "Your guess is not a number!!!"
      else if(guess > answer)
      msg = "Your guess is should be lower";
      else if (guess < answer)
      msg = "Your guess is should be higher";
      else
      msg = "You Win";
      alert(msg);
  }
      // while (guess != answer){
// }



// else
// msg = "You Win!";


          //if(answer == guess){
            //alert("You guessed correctly");
            //break;
          //} else{
            //guess = alert("Please Try Again");
          //}
//}
