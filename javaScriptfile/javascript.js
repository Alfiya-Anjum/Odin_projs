let playScore = 0;
let computerScore = 0;
let round = 1;

const buttons = document.querySelectorAll('button');
const roundDisplay = document.querySelector('.round');
const resetButton = document.querySelector('.reset');
const resultDisplay = document.querySelector('.result p');
const scoreDisplay = document.querySelector('.score'); // Moved outside

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.className;
    const computerChoice = getComputerChoice();

    let result;
    if (userChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win!";
      playScore++;
    } else {
      result = "You lose!";
      computerScore++;
    }

    // Update result and scores
    resultDisplay.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    scoreDisplay.textContent = `Player: ${playScore} | Computer: ${computerScore}`;
    roundDisplay.textContent = `Round: ${round}`;
    round++;

    // End game after 10 rounds
    if (round > 10) {
      resultDisplay.textContent += " Game over!";
      buttons.forEach(btn => btn.disabled = true);
    }
  });
});

// ✅ Reset button (OUTSIDE the loop)
resetButton.addEventListener('click', () => {
  playScore = 0;
  computerScore = 0;
  round = 1;

  scoreDisplay.textContent = `Player: ${playScore} | Computer: ${computerScore}`;
  roundDisplay.textContent = `Round: ${round}`;
  resultDisplay.textContent = "Result will be displayed here.";

  buttons.forEach(btn => btn.disabled = false);
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
