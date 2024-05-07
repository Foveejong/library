const myLibrary = [new Book("Harry Potter", "A", 1234, hasRead("true")), new Book("Harry Potter", "A", 1234, hasRead("true")), new Book("Harry Potter", "A", 1234, hasRead("true"))];
const lib = document.querySelector(".library");
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

Book.prototype.toggleRead = function() {
    return this.read === "Read" ? this.read = "Not Read Yet" : this.read = "Read";
}

// add methods to the prototype to save memory
Book.prototype.makeBook = function(data) {
    // create new div to display new book
    const bookDiv = document.createElement('div');
        
    // make flex-container
    const bookContainer = document.createElement('div');

    // create h2, h3, 2 para and div elements
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const pagesPara = document.createElement('p');
    const readPara = document.createElement('p');
    const btnContainer = document.createElement('div');

    // create buttons
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    // add data attribute number to enumerate books
    bookDiv.setAttribute("data", data);

    // add books class to new div
    bookDiv.classList.toggle('books');

    // add book-container class to new div
    bookContainer.classList.toggle('book-container');

    // add btn-container class
    btnContainer.classList.toggle('btn-container');

    // add removebutton class
    removeBtn.classList.toggle('removeBtn');

    // add readbutton class
    readBtn.classList.toggle('readBtn');

    // append buttons to button-container
    btnContainer.append(removeBtn, readBtn);

    // append h2, h3, 2p and btn-container to book-container
    bookContainer.append(h2, h3, pagesPara, readPara, btnContainer);

    // append book-container to books
    bookDiv.appendChild(bookContainer);

    // show book's info
    h2.textContent = this.title;
    h3.textContent = this.author;
    readPara.textContent = this.read;
    pagesPara.textContent = this.pages + " pages";
    readBtn.textContent = "Toggle Read";
    removeBtn.textContent = "Remove";

    // addeventlistener to remove specified card
    removeBtn.addEventListener("click", (e) => {
        // delete card of this index
        myLibrary.splice(data, 1);

        // remove parent book node
        bookDiv.remove();
    })

    // addeventlistener to toggle read
    readBtn.addEventListener("click", (e) => {
        readPara.textContent = this.toggleRead();
    })

    // // append new book to library
    lib.appendChild(bookDiv);
}

// when page loads, load book and prompt to input book
window.addEventListener("load", (e) => {
    // display book
    displayAllBooks();

    // prompt using modal
    dialog.showModal();
})

// on dialog submit, add book to library and display book
form.addEventListener("submit", () => {
    // read or notread bool
    let readresponse = hasRead(form.read.value === "true");

    // pass book info to addBookToLibrary function to add book
    addBookToLibrary(form.title.value, form.author.value, form.pages.value, readresponse);
    
    // add new book to display
    myLibrary[myLibrary.length - 1].makeBook(myLibrary.length - 1);

    // reset form
    form.reset();
})

// determine response based on read bool
function hasRead(read) {
    return read ? "Read" : "Not Read Yet";
}

// create book, push book to library array
function addBookToLibrary(title, author, pages, read) {
    // make new book with contents
    const book = new Book(title, author, pages, read);

    // append to library arr
    myLibrary.push(book);
}

// loop through array and display book on page
function displayAllBooks() {
    for (let book of myLibrary) {
        // create book
        book.makeBook(myLibrary.length - 1);
    }
}