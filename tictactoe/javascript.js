const startBtn = document.getElementById("startGame");
const header = document.querySelector(".header");
const grid = document.querySelector(".grid-container");
const result = document.querySelector(".result");
const turnMessage = document.getElementById("turnMessage");
const resetBtn = document.getElementById("resetGame");


let player1Name = "";
let player2Name = "";
let currentPlayer = "X";

const cards = document.querySelectorAll(".card");

startBtn.addEventListener("click", () => {
  player1Name = document.getElementById("player1").value || "Player 1";
  player2Name = document.getElementById("player2").value || "Player 2";

  header.style.display = "none";
  grid.style.display = "grid";
  result.style.display = "block";

  displayTurn();
});

// show whose turn it is
function displayTurn() {
  turnMessage.textContent = currentPlayer === "X"
    ? player1Name + "'s turn (X)"
    : player2Name + "'s turn (O)";
}

// click on squares
cards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.textContent === "") {
      card.textContent = currentPlayer;
      card.style.fontSize = "3em";
      card.style.textAlign = "center";

      // check for winner
      if (checkWinner()) {
        document.getElementById("resultMessage").textContent =
          (currentPlayer === "X" ? player1Name : player2Name) + " wins!";
        return;
      }

      // switch turns
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      displayTurn();
    }
  });
});

// check winner
function checkWinner() {
  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  return winningCombos.some(combo => {
    const [a,b,c] = combo;
    return (
      cards[a].textContent &&
      cards[a].textContent === cards[b].textContent &&
      cards[a].textContent === cards[c].textContent
    );
  });
}

// reset game
resetBtn.addEventListener("click", () => {
  cards.forEach(card => {
    card.textContent = "";
    card.style.fontSize = "1em"; // reset font size
  });
  
  currentPlayer = "X";
  displayTurn();
  document.getElementById("resultMessage").textContent = "";
  
  header.style.display = "block";
  grid.style.display = "none";
  result.style.display = "none";
  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";  
  player1Name = "";
  player2Name = "";
  turnMessage.textContent = "";
});