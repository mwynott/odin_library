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


/* Function to display content of the library in the table - Reset between instances*/
function displayLibrary() {
    const tableBody = document.getElementById("book-list-body");
    tableBody.replaceChildren();

    const headers = ["Title", "Author", "Pages", "Read", "ID", "Delete"];
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    tableBody.appendChild(headerRow);

    myLibrary.forEach(book => {
        
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        
        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        
        const pagesCell = document.createElement("td");
        pagesCell.textContent = book.pages;
        
        /* Create a checkbox for the read status and update upon change */
        const readCell = document.createElement("td");
        const readBtn = document.createElement("input");
        readBtn.addEventListener("change", () => {
            book.isread = readBtn.checked;
        });
        readBtn.type = "checkbox";
        readBtn.checked = book.isread;
        readCell.appendChild(readBtn);
        
        const idCell = document.createElement("td");
        idCell.textContent = book.id;

        /* Create a delete button for each book and remove it from the library upon click */
        const deleteCell = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "X";
        
        deleteBtn.addEventListener("click", () => {
            deleteBtn.parentElement.parentElement.remove();
            const bookIndex = myLibrary.findIndex(book => book.id === book.id);
            if (bookIndex !== -1) {
                myLibrary.splice(bookIndex, 1);
            }
        });
        
        /* Append all cells to the row and the row to the table body */
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);
        row.appendChild(idCell);
        deleteCell.appendChild(deleteBtn);
        row.appendChild(deleteCell);
        tableBody.appendChild(row);
    });
}
