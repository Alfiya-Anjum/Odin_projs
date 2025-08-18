export default function loadHome() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to My Restaurant 🍴";

  const desc = document.createElement("p");
  desc.textContent = "The best food in town, made with love.";

  content.appendChild(headline);
  content.appendChild(desc);
}
