let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

main();

function convertToWord(letter) {
  switch (letter) {
    case "r":
      return "Rock";
    case "p":
      return "Paper";
    case "s":
      return "Scissors";
  }
}

function win(userChoice, ComputerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )} ${smallUserWord} beats ${convertToWord(
    ComputerChoice
  )} ${smallCompWord} you win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 300);
}

function lose(userChoice, ComputerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    ComputerChoice
  )}  ${smallCompWord} beats ${convertToWord(
    userChoice
  )}  ${smallUserWord} you lose!`;
  document.getElementById(userChoice).classList.add("black-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("black-glow");
  }, 300);
}

function draw(userChoice, ComputerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    ComputerChoice
  )}  ${smallCompWord} equals ${convertToWord(userChoice)}  ${smallUserWord} !`;
  document.getElementById(userChoice).classList.add("blue-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("blue-glow");
  }, 300);
}

function game(userChoice) {
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, ComputerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, ComputerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, ComputerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

/*
  IT IS AN ES5 CODE EXAMPLE!
  
  scissors_div.addEventListener("click", function() {
    game("s");
    
  });
}
*/
