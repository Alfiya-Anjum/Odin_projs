import "./style.css";

export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // clear previous page

  
  const homePage = document.createElement("div");
  homePage.innerHTML = `
    <header class="header1">
      <nav class="navbar">
        <button id="homeBtn">Home</button>
        <button id="menuBtn">Menu</button>
        <button id="contactBtn">Contact</button>
      </nav>
      <h1>Welcome to Our Restaurant</h1>
      <p>Experience the best dining in town!</p>
      <button id="orderBtn">Order Now</button>
    </header>

    <div class="main-section">
      <div class="container1">
        <div class="card">
          <h2>Delicious Dishes</h2>
          <p>Explore our menu of mouth-watering dishes.</p>
        </div>
        <div class="card">
          <h2>Special Offers</h2>
          <p>Check out our special offers and discounts.</p>
        </div>
        <div class="card">
          <h2>Customer Reviews</h2>
          <p>See what our customers are saying about us.</p>
        </div>
      </div>

      <div class="about">
        <h2>About Us</h2>
        <p>We are dedicated to providing the best dining experience with fresh ingredients and exceptional service.</p>
        <p>Our chefs are passionate about creating delicious meals that will leave you coming back for more.</p>
        <p>Join us for a meal and experience the warmth of our hospitality.</p>
      </div>
    </div>

    <div class="slogan">
      <h2>Our Slogan</h2>
      <p>"Where every meal is a celebration!"</p>
    </div>

    <footer>
      <p>123 Flavor Street, Foodtown</p>
      <p>📞 (123) 456-7890</p>
      <p>Follow us: Instagram | Facebook</p>
    </footer>
  `;

  content.appendChild(homePage);
}
