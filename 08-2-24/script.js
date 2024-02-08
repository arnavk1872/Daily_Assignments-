let library = [];
function Book(id, title, author) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.isBorrowed = false;
}

function addBook(id, title, author) {
  const book = new Book(id, title, author);
  library.push(book);
}

function borrowBook(id) {
  const book = findBook(id);
  if (book) {
    if (book.isBorrowed) {
      alert('The book has been borrowed.');
    } else {
      book.isBorrowed = true;
      alert('The book is available.');
    }
  } else {
    alert('The book does not exist in the library.');
  }
}

function returnBook(id) {
  const book = findBook(id);
  if (book) {
    if (book.isBorrowed) {
      book.isBorrowed = false;
      alert("The book was returned successfully.");
    } else {
      alert("This book hasn't been borrowed yet.");
    }
  } else {
    alert('The book does not exist in the library.');
  }
}

function listAvailableBooks() {
  let availableBooks = "";
  for (let i = 0; i < library.length; i++) {
    if (!library[i].isBorrowed) {
      availableBooks += library[i].title + ' ' + library[i].author + '\n';
    }
  }
  if (availableBooks) {
    alert("The available books are:\n" + availableBooks);
  } else {
    alert("No available books.");
  }
}

function searchBook(title) {
  if (title) {
    const books = library.filter(book => book.title.toLowerCase() === title.toLowerCase());
    if (books.length) {
      alert("The book is present in the library.");
    } else {
      alert("Not Present.");
    }
  } else {
    alert("Please enter a title to search.");
  }
}

function findBook(id) {
  return library.find(book => book.id === id) || null;
}

function run() {
  alert("Welcome to the library");

  do {
    input = prompt("Select: 1 to add a Book, 2 to borrow a Book, 3 to return Book, 4 to list available Books, 5 to Search for a Book, 0 to exit");
  
    input = parseInt(input);

    switch (input) {
      case 1:
        const id = library.length + 1;
        const title = prompt("Enter the title of the book");
        const author = prompt("Enter the author of the book");
        addBook(id, title, author);
        break;
      case 2:
        const idToBorrow = parseInt(prompt("Enter the id of the book to borrow"));
        borrowBook(idToBorrow);
        break;
      case 3:
        const idToReturn = parseInt(prompt("Enter the id of the book to return"));
        returnBook(idToReturn);
        break;
      case 4:
        listAvailableBooks();
        break;
      case 5:
        const searchTitle = prompt("Enter the title of the book to search");
        searchBook(searchTitle);
        break;
      default:
        if (input !== 0) {
          alert("Invalid input. Please try again.");
        }
    }
  } while (input !== 0);
}


addBook(1,'The Catcher in the Rye', 'J.D. Salinger');
addBook(2,'To Kill a Mockingbird', 'Harper Lee');
addBook(3,'1984', 'George Orwell');

run();