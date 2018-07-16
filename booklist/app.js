// Book Constructor
function Book (title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
	let list = document.querySelector('#book-list');
	// Create tr element
	let row = document.createElement('tr');
	// Insert cols
	row.innerHTML = `
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.isbn}</td>
	<td><a href="#" class="delete">X</a></td>
	`;

	list.appendChild(row);
}

UI.prototype.deleteBook = function (target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
}

UI.prototype.clearFields = function () {
	let inputs = document.querySelectorAll('#book-form div input[type=text]')
	inputs.forEach(function (node) {
		node.value = '';
	});
}

// Show Error
UI.prototype.showAlert = function (text, className) {
  let container = document.querySelector('.container');
  let form = document.querySelector('#book-form');
  let div = document.createElement('div');

  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(text));

  // Insert above heading
  container.insertBefore(div, form);
  div.style.opacity = 0;
  div.style.display = "block";

  (function fade() {
    var val = parseFloat(div.style.opacity);
    if (!((val += .1) > 1)) {
      div.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();

  // Clear after 3 seconds
  setTimeout(UI.prototype.clearAlert, 3000);
}

// Clear error
UI.prototype.clearAlert = function () {
  let alert = document.querySelector('.alert');

  alert.style.opacity = 1;

  (function fade() {
    if ((alert.style.opacity -= .1) < 0) {
      alert.style.display = "none";
      document.querySelector('.alert').remove();
    } else {
      requestAnimationFrame(fade);
    }
  })();

}

// Event Listener for add book
document.querySelector('#book-form').addEventListener('submit', function (e) {
	
	// Get form values
	let title = document.querySelector('#title').value,
		author = document.querySelector('#author').value,
		isbn = document.querySelector('#isbn').value;
	
	// Instantiate book
	let book = new Book(title, author, isbn);

	// Instantiate UI object
	let ui = new UI();


	// Validate 
	if (title === '' || author === '' || isbn === '') {
		// Show error
		ui.showAlert('Please fill in all fields.', 'error');
	}	else {
		// Add book list
		ui.addBookToList(book);
		// Clear fields
		ui.clearFields();
		ui.showAlert('Book added!', 'success');
	}

	e.preventDefault();	
});

// Event listener for delete
document.querySelector('#book-list').addEventListener('click', function(e) {
	let ui = new UI();
	if (e.target.className === 'delete') {
	ui.deleteBook(e.target);
	ui.showAlert('Book removed.', 'success');	
	}
	e.preventDefault();
});