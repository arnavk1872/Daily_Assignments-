let number = Math.floor(Math.random()*100) + 1;
let guess;
let guessNum = 0;
let end = 0;

do{
    do{
      guess = prompt("Enter your Guess: (Between 1-100)");
      guess = parseInt(guess)
        if (guess === number) {
          alert("Congratulations! You are correct!");
          guessNum++;
          break;
        } else if (guess < number) {
          alert("Too Low");
          guessNum++;
        } else {
          alert("Too High");
          guessNum++;
        }
    }while(true);

    end = prompt("Enter: 1 to play again, 2 to end");
    end = parseInt(end);

    }while(end===1);
  
    alert("Number of Guesses: " + guessNum);
  
  
