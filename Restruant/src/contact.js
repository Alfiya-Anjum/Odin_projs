import "./style.css";

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


    <div class="contact">
    <h2>Contact Us</h2>
    <p>📍 123 Flavor Street, Foodtown</p>
    <p>📞 (123) 456-7890</p>
    <p>📧 hello@restaurant.com</p>

    <p>🕒 Open Daily: 10 AM - 10 PM</p>

    </div>
  `;

  content.appendChild(contactPage);
}
