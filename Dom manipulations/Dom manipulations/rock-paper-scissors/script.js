// user Input
let userChoice = prompt("Enter your choice ie. rock, paper, scissors");

let computerOptions = ["rock", "paper", "scissors"];

let randomIndex = Math.floor(Math.random() * 3);

// computer input
let computerChoice = computerOptions[randomIndex];

const resultPara = document.getElementById("result-para");

// check who won
if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "scissors" && computerChoice === "paper") ||
  (userChoice === "paper" && computerChoice === "rock")
) {
  resultPara.innerText = "You won";
  resultPara.style.color = "green";
  resultPara.style.fontWeight = "bold";
} else if (
  (computerChoice === "rock" && userChoice === "scissors") ||
  (computerChoice === "scissors" && userChoice === "paper") ||
  (computerChoice === "paper" && userChoice === "rock")
) {
  resultPara.innerText = "You lost";
  resultPara.style.color = "red";
} else {
  resultPara.innerText = "Draw";
}
