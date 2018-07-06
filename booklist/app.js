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

UI.prototype.clearFields = function () {
	let inputs = document.querySelectorAll('#book-form div input[type=text]')
	inputs.forEach(function (node) {
		node.value = '';
	});
}

// Event Listeners
document.querySelector('#book-form').addEventListener('submit', function (e) {
	
	// Get form values
	let title = document.querySelector('#title').value,
		author = document.querySelector('#author').value,
		isbn = document.querySelector('#isbn').value;
	
	// Instantiate book
	let book = new Book(title, author, isbn);

	// Instantiate UI object
	let ui = new UI();

	// Add book list
	ui.addBookToList(book);
	// Clear fields
	ui.clearFields();


	e.preventDefault();	
});