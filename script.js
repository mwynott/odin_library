const myLibrary = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true, 1),
    new Book("To Kill a Mockingbird", "Harper Lee", 281, false, 2),
    new Book("1984", "George Orwell", 328, true, 3),
    new Book("Pride and Prejudice", "Jane Austen", 432, false, 4),
    new Book("The Catcher in the Rye", "J.D. Salinger", 214, true, 5),
    new Book("The Hobbit", "J.R.R. Tolkien", 310, false, 6)
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
    const pages = parseInt(document.getElementById("pages").value);
    const isread = document.getElementById("isread").checked;
}

function displayLibrary() {
    myLibrary.forEach(book => {
        console.log(`${book.title} by ${book.author}, ${book.pages} pages, ${book.isread ? "read" : "not read yet"}`);
    });
}

displayLibrary();