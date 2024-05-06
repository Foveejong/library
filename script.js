const myLibrary = [];
const dialog = document.querySelector('#dialog');
const form = document.querySelector('form');

// define the book constructor
function Book(title, author, pages, read) {  
    // under the hood, "new" keyword does this: const this = Object.create(Book.prototype)
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;  
    // return this -- done by "new" keyword
}

// add methods to the prototype to save memory
Book.prototype.makeBook = function() {
    // create new div to display new book
    const bookDiv = document.createElement('div');
        
    // make flex-container
    const bookContainer = document.createElement('div');

    // create h1, h3, 2 para and div elements
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');
    const pagesPara = document.createElement('p');
    const readPara = document.createElement('p');
    const btnContainer = document.createElement('div');

    // create buttons
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    // add books class to new div
    bookDiv.classList.toggle('books');

    // add book-container class to new div
    bookContainer.classList.toggle('book-container');

    // add btn-container class
    btnContainer.classList.toggle('btn-container');

    // append buttons to button-container
    btnContainer.append(removeBtn, readBtn);

    // append h1, h3, 2p and btn-container to book-container
    bookContainer.append(h1, h3, pagesPara, readPara, btnContainer);

    // append book-container to books
    bookDiv.appendChild(bookContainer);

    // show book's info
    h1.textContent = this.title;
    h3.textContent = this.author;
    readPara.textContent = this.read;
    pagesPara.textContent = this.pages;
    readBtn.textContent = "Toggle Read";
    removeBtn.textContent = "Remove";

    // append new book to library
    document.querySelector('.library').appendChild(bookDiv);
}

form.addEventListener("submit", () => {
    // this will return true if the conditional is true 
    let readresponse = hasRead(form.read.value === "true");

    // pass book info to addBookToLibrary function to add book
    addBookToLibrary(form.title.value, form.author.value, form.pages.value, readresponse)
})

// determine response based on read bool
function hasRead(read) {
    return read ? "read" : "not read yet";
}

// create book, push book to library array
function addBookToLibrary(title, author, pages, read) {
    // make new book with contents
    const book = new Book(title, author, pages, read);

    // append to library arr
    myLibrary.push(book);
}

// loop through array and display book on page
function displayBooks() {
    for (let book of myLibrary) {
        // create a div
        book.makeBook();

        // edit textcontent of the div

        // add CSS class to display properly
    }
}
