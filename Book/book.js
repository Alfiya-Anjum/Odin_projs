const addBookBtn = document.getElementById("addBook");
const bookForm = document.getElementById("bookForm");
const libraryDiv = document.getElementById("library");

let myLibrary = JSON.parse(localStorage.getItem("library")) || [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
};

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    saveLibrary();
    displayLibrary();
}

function saveLibrary() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
}

function deleteBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
    saveLibrary();
    displayLibrary();
}

function toggleReadStatus(id) {
    const book = myLibrary.find(book => book.id === id);
    if (book) {
        book.toggleRead();
        saveLibrary();
        displayLibrary();
    }
}

function displayLibrary() {
    libraryDiv.innerHTML = "";
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>Status: ${book.isRead ? "✅ Read" : "⏳ Not Read"}</p>
            <button onclick="toggleReadStatus('${book.id}')">Toggle Read</button>
            <button onclick="deleteBook('${book.id}')">❌ Delete</button>
        `;
        libraryDiv.appendChild(bookCard);
    });
}

// Toggle form display
addBookBtn.addEventListener("click", () => {
    bookForm.style.display = bookForm.style.display === "block" ? "none" : "block";
});

// Form submit
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

    addBookToLibrary(title, author, pages, isRead);

    bookForm.reset();
    bookForm.style.display = "none";
});

// Show books when page loads
displayLibrary();
