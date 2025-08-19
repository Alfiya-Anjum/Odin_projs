export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // clear old stuff

  // ---- Header ----
  const header = document.createElement("header");

  // Navigation buttons
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", () => import("./home.js").then(mod => mod.default()));

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", () => loadMenu()); // reload menu

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", () => import("./contact.js").then(mod => mod.default()));

  nav.append(homeBtn, menuBtn, contactBtn);

  // Page title
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Our Menu 🍴";

  header.append(nav, pageTitle);
  content.appendChild(header);

  // ---- Menu Grid ----
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-grid"); // grid container

  const menuItems = [
    { title: "Pizza", desc: "Cheesy and delicious", img: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg" },
    { title: "Burger", desc: "Juicy and fresh", img: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg" },
    { title: "Pasta", desc: "Italian classic", img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" },
    { title: "Salad", desc: "Healthy & green", img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
    { title: "Sushi", desc: "Fresh from the sea", img: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg" },
    { title: "Dessert", desc: "Sweet and tasty", img: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg" },
  ];

  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    card.innerHTML = `
      <div class="card-image">
        <img src="${item.img}" alt="${item.title}">
        <div class="card-overlay">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    `;

    menuContainer.appendChild(card);
  });

  content.appendChild(menuContainer);
}
