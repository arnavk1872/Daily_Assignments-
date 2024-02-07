let number = Math.floor(Math.random() * 100) + 1;
let guessNum = 0;
let end = 0;
let guess=0;
let arr = [];

function playGame() {
 do{
  guess = prompt("Enter your Guess: (Between 1-100)");
  guess = parseInt(guess);
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
  
}while(guess!==number)
  arr.push(guessNum);
  guessNum=0;
}

function playAgain() {
  end = prompt("Enter: 1 to play again, 2 to end");
  end = parseInt(end);
}

while (end !== 2) {
  playGame();
  playAgain();
}

alert("List of scores: " + arr);
  
