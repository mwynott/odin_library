const myLibrary = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true),
    new Book("To Kill a Mockingbird", "Harper Lee", 281, false),
    new Book("1984", "George Orwell", 328, true),
    new Book("Pride and Prejudice", "Jane Austen", 432, false),
    new Book("The Catcher in the Rye", "J.D. Salinger", 214, true),
    new Book("The Hobbit", "J.R.R. Tolkien", 310, false)
];


function Book(title, author, pages, isread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value, 10);
    const isread = document.getElementById("isread").checked;

    const newBook = new Book(title, author, pages, isread);
    myLibrary.push(newBook);
    displayLibrary();
}

function displayLibrary() {
    myLibrary.forEach(book => {
        (`${book.title} by ${book.author}, ${book.pages} pages, ${book.isread ? "read" : "not read yet"}`);
    });
}

