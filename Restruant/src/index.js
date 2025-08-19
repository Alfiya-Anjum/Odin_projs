import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function addNavEvents() {
  document.getElementById("homeBtn").addEventListener("click", () => {
    loadHome();
    addNavEvents(); // re-attach events after reload
  });

  document.getElementById("menuBtn").addEventListener("click", () => {
    loadMenu();
    addNavEvents();
  });

  document.getElementById("contactBtn").addEventListener("click", () => {
    loadContact();
    addNavEvents();
  });
}

// Load homepage first
loadHome();
addNavEvents();
