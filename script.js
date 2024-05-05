const myLibrary = [];


// define the book constructor
function Book(title, author, pages, read) {  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;    
}

// add methods to the prototype to save memory
Book.prototype.info = function() {
    // determine response based on read bool
    let readresponse = this.read ? "read" : "not read yet";

    // return desired info
    return `${this.title} by ${this.author}, ${this.pages}, ${readresponse}`
}

function addBookToLibrary() {
  // do stuff here
}
