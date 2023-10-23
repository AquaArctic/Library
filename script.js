const myLibrary = [];

function Book(name,author, pages, read) {

   this.name = name;
   this.author = author;
   this.pages = pages;
   this.read = read;
}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read; // Toggle the read status (from true to false or vice versa)
  };

function addBookToLibrary(event) {
    event.preventDefault();
  
    const titleInput = document.getElementById('title').value;
    const authorInput = document.getElementById('author').value;
    const pagesInput = document.getElementById('pages').value; 
    const readStatusInput = document.getElementById('read-status').value;
  
    if (titleInput && authorInput && pagesInput && readStatusInput) {
      const newBook = {
        title: titleInput,
        author: authorInput,
        pages: pagesInput, 
        readStatus: readStatusInput
      };
  
      myLibrary.push(newBook);
     displayBooks();
  
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read-status').value = 'read';

     
  
      printLibrary();
      closeForm();
    } else {
      console.log("Failed to add book. One or more fields are empty.");
    }
  }
  
 
  function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteBook(index);

        const titleInfo = document.createElement('p');
        titleInfo.textContent = `Title: ${book.title}`;

        const authorInfo = document.createElement('p');
        authorInfo.textContent = `Author: ${book.author}`;

        const pagesInfo = document.createElement('p');
        pagesInfo.textContent = `Pages: ${book.pages}`;

        // const readStatusInfo = document.createElement('p');
        // readStatusInfo.textContent = `Read Status: ${book.readStatus}`;

        const readStatusDropdown = document.createElement('select');
readStatusDropdown.classList.add('read-status-dropdown');

const readOption = document.createElement('option');
readOption.value = 'Read';
readOption.textContent = 'Read';

const unreadOption = document.createElement('option');
unreadOption.value = 'Not Read';
unreadOption.textContent = 'Not Read';

readStatusDropdown.appendChild(readOption);
readStatusDropdown.appendChild(unreadOption);

// Set the initial value based on the book's read status
readStatusDropdown.value = book.read ? 'Read' : 'Not Read';

readStatusDropdown.onchange = () => {
  book.read = readStatusDropdown.value === 'Read';
};

        bookCard.appendChild(deleteButton);
        bookCard.appendChild(titleInfo);
        bookCard.appendChild(authorInfo);
        bookCard.appendChild(pagesInfo);
        bookCard.appendChild(readStatusDropdown);
        //bookCard.appendChild(readStatusInfo);
        bookList.appendChild(bookCard);
    });
}
   


// Function to open the form
function openForm() {
    const addBookForm = document.getElementById('add-book-form');
    addBookForm.style.display = 'block';
  }
  
  // Function to close the form
  function closeForm() {
    const addBookForm = document.getElementById('add-book-form');
   addBookForm.style.display = 'none'; 
    printLibrary(); 
  }
  
  
  function deleteBook(index) {
    if (index >= 0 && index < myLibrary.length) {
      myLibrary.splice(index, 1);
      displayBooks();
    }
  }

  
  function printLibrary() {
    console.log("Printing Library:");
    myLibrary.forEach((book, index) => {
      console.log(`Book ${index + 1}:`);
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log(`Pages: ${book.pages}`);
      console.log(`Read Status: ${book.readStatus}`);
    }); }