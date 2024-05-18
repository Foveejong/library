class Library {
    constructor() {
        this.books = [];
    }

    // create book, push book to library array
    addBookToLibrary(title, author, pages, read) {
        // make new book with contents
        const book = new Book(title, author, pages, read);

        // append to library arr
        this.books.push(book);
    }

    // loop through array and display book on page
    displayAllBooks() {
        console.log(this.books);
        for (let book of this.books) {
            // create book
            book.makeBook(this.books.length - 1);
        }
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    // determine response based on read bool
    static hasRead(read) {
        return read ? "Read \u2713" : "Not Read Yet \u2718";
    }
    
    toggleRead() {
        return this.read === "Read \u2713" ? this.read = "Not Read Yet \u2718" : this.read = "Read \u2713";
    }

    makeBook(data) {
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
            library.books.splice(data, 1);
    
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
}

const lib = document.querySelector(".library");
const dialog = document.querySelector('#dialog');
const form = document.querySelector('form');
const openModalBtn = document.querySelector('#openModalBtn')
const library = new Library();

// when page loads, load book and prompt to input book
window.addEventListener("load", (e) => {
    // display book
    library.displayAllBooks();

    // prompt using modal
    dialog.showModal();
})

// open Modal when button pressed
openModalBtn.addEventListener("click", () => {
        form.reset();
        dialog.showModal();
    });

// on dialog submit, add book to library and display book
form.addEventListener("submit", () => {
    // read or notread bool
    let readresponse = Book.hasRead(form.read.value === "true");
    let books = library.books;

    // pass book info to addBookToLibrary function to add book
    library.addBookToLibrary(form.title.value, form.author.value, form.pages.value, readresponse);
    
    // add new book to display
    books[books.length - 1].makeBook(books.length - 1);

    // reset form
    form.reset();
})