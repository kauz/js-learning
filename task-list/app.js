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
	//remove task event
	taskList.addEventListener('click', removeTask)
	// clear tasks event
	clearBtn.addEventListener('click', clearTasks)
	// filter tasks event
	filter.addEventListener('keyup', filterTasks)
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

// Remove task
function removeTask (e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are You sure?')) {
		e.target.parentElement.parentElement.remove();
		}
	}
}

// Clear all tasks
function clearTasks () {
	// taskList.innerHTML = '';

	// faster way
	if (confirm('This will delete ALL tasks. Are You sure?')) {
		while (taskList.firstChild) {
			taskList.removeChild(taskList.firstChild);
		}
	}
}


// Filter tasks
function filterTasks (e) {
	let text = e.target.value.toLowerCase();
	document.querySelectorAll('.collection-item').forEach(function (task) {
		let item = task.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}