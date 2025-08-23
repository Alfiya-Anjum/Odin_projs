const addinput = document.getElementById("myInput");
const addBtn = document.querySelector(".addBtn");
const list = document.getElementById("myUL");
let todos = [];

// add todo
addBtn.addEventListener("click", () => {
  const text = addinput.value.trim();
  if (text === "") return;

  todos.push(text);      // 1. add to array
  saveTodos();           // 2. save to localStorage
  renderTodo(text);      // 3. show on page
  addinput.value = "";
});

// save todos in localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// load todos when page loads
function loadTodos() {
  const stored = localStorage.getItem("todos");
  if (stored) {
    todos = JSON.parse(stored); // restore array
    todos.forEach(todo => renderTodo(todo)); // rebuild DOM
  }
}

// render a single todo
function renderTodo(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const span = document.createElement("span");
  span.textContent = "×";
  span.className = "close";

  // delete functionality
  span.addEventListener("click", () => {
    list.removeChild(li); // remove from DOM
    todos = todos.filter(todo => todo !== text); // remove from array
    saveTodos(); // update localStorage
  });

  li.appendChild(span);
  list.appendChild(li);
}


// 🟢 load existing todos when page opens
loadTodos();
