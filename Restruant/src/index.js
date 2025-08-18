import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

// Default load = Home page
loadHome();

// Event listeners for nav buttons
document.getElementById("homeBtn").addEventListener("click", () => {
  clearContent();
  loadHome();
});

document.getElementById("menuBtn").addEventListener("click", () => {
  clearContent();
  loadMenu();
});

document.getElementById("contactBtn").addEventListener("click", () => {
  clearContent();
  loadContact();
});
