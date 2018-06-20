// Define UI Vars
let form = document.querySelector('#task-form');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('.clear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners (argument) {
	// add task event
	form.addEventListener('submit', addTask)
}

// Add new task
function addTask (e) {

	if (taskInput.value === '') {
		alert('Add a task');
	}

	// Create li element
	let li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));
	let link = document.createElement('a');
	link.className = 'delete-item secondary-content';
	link.innerHTML = '<i class="fa fa-remove"></i>';
	li.appendChild(link);

	// Append li element to ul
	taskList.appendChild(li);

	// Clear input
	taskInput.value = '';
	e.preventDefault();
}