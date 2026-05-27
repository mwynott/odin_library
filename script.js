/* Initial library with 6 books */
const myLibrary = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true),
    new Book("To Kill a Mockingbird", "Harper Lee", 281, false),
    new Book("1984", "George Orwell", 328, true),
    new Book("Pride and Prejudice", "Jane Austen", 432, false),
    new Book("The Catcher in the Rye", "J.D. Salinger", 214, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 310, false)
];

/* Book constructor function */
function Book(title, author, pages, isread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
    this.id = crypto.randomUUID();
}

/* Function to place new book to the library */
function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value, 10);
    const isread = document.getElementById("isread").checked

    const newBook = new Book(title, author, pages, isread);
    myLibrary.push(newBook);
    displayLibrary();
}


const addBookForm = document.getElementById("add-book-form");
const addBookBtn = document.getElementById("add-book-btn");
const bookFormContainer = document.getElementById("book-form-container");
const cancelBtn = document.getElementById("cancel-btn");

/* Event listeners for buttons and form submission */
addBookBtn.addEventListener("click", () => {
    if (bookFormContainer) {
        bookFormContainer.style.display = "block";
    }
});

/* Event listener for cancel button to hide the form and reset it */
cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (bookFormContainer) {
        bookFormContainer.style.display = "none";
    }
    addBookForm.reset();
});

/* Event listener for form submission to add a new book and reset the form */
addBookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
    addBookForm.reset();
    if (bookFormContainer) {
        bookFormContainer.style.display = "none";
    }
})


/* Function to display content of the library in the table */
function displayLibrary() {
    const tableBody = document.getElementById("book-list-body");
    tableBody.replaceChildren();

    const headers = ["Title", "Author", "Pages", "Status", "ID"];
    
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        tableBody.appendChild(th);
    });

    myLibrary.forEach(book => {
        
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        
        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        
        const pagesCell = document.createElement("td");
        pagesCell.textContent = book.pages;
        
        const statusCell = document.createElement("td");
        statusCell.textContent = book.isread ? "Read" : "Not Read";
        
        const idCell = document.createElement("td");
        idCell.textContent = book.id;

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(statusCell);
        row.appendChild(idCell);
        tableBody.appendChild(row);
    });
}
