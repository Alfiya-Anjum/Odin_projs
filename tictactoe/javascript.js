const startBtn = document.getElementById("startGame");
const header = document.querySelector(".header");
const grid = document.querySelector(".grid-container");
const result = document.querySelector(".result");

startBtn.addEventListener("click", () => {
  // hide the form
  header.style.display = "none";

  // show the game board + result area
  grid.style.display = "grid";
  result.style.display = "block";
});

let currentPlayer = "X";
