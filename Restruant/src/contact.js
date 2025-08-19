export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactPage = document.createElement("div");
  contactPage.innerHTML = `
    <header>
      <nav class="navbar">
        <button id="homeBtn">Home</button>
        <button id="menuBtn">Menu</button>
        <button id="contactBtn">Contact</button>
      </nav>
    </header>

    <h2>Contact Us</h2>
    <p>📍 123 Flavor Street, Foodtown</p>
    <p>📞 (123) 456-7890</p>
    <p>📧 hello@restaurant.com</p>
  `;

  content.appendChild(contactPage);
}
