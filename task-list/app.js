// Define UI Vars
let form = document.querySelector('#task-form');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('.clear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners (argument) {
	// DOM load event
	document.addEventListener('DOMContentLoaded', getTasks);
	// add task event
	form.addEventListener('submit', addTask);
	//remove task event
	taskList.addEventListener('click', removeTask);
	// clear tasks event
	clearBtn.addEventListener('click', clearTasks);
	// filter tasks event
	filter.addEventListener('keyup', filterTasks);
}

// Get tasks
function getTasks () {
	let tasks;

	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
	 	tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function (task) {
		createTask(task);
	});
}

// Add new task
function addTask (e) {

	if (taskInput.value === '') {
		alert('Add a task');
	}

	// Create li element
	createTask(null);

	// Store in LS
	storeTaskInLocalStorage(taskInput.value);

	// Clear input
	taskInput.value = '';
	e.preventDefault();
}

// Create li element
function createTask (task = null) {
	let li = document.createElement('li');
	li.className = 'collection-item';
	if (task === null) {
		li.appendChild(document.createTextNode(taskInput.value));	
	} 
	else {
		li.appendChild(document.createTextNode(task));
	}
	
	let link = document.createElement('a');
	link.className = 'delete-item secondary-content';
	link.innerHTML = '<i class="fa fa-remove"></i>';
	li.appendChild(link);

	// Append li element to ul
	taskList.appendChild(li);
}

// Store in LS
function storeTaskInLocalStorage (task) {
	 let tasks;

	 if (localStorage.getItem('tasks') === null) {
	 	tasks = [];
	 } else {
	 	tasks = JSON.parse(localStorage.getItem('tasks'));
	 }

	 tasks.push(task);

	 localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Remove task
function removeTask (e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are You sure?')) {
		e.target.parentElement.parentElement.remove();
		
		// Remove from LS
		removeTaskFromLocalStorage(e.target.parentElement.parentElement);
		}
	}
}

// Remove task from LS
function removeTaskFromLocalStorage (taskItem) {
	let tasks;

	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
	 	tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function (task, index) {
		if (taskItem.textContent === task) {
			tasks.splice(index, 1)
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks
function clearTasks () {
	// taskList.innerHTML = '';

	// faster way
	if (confirm('This will delete ALL tasks. Are You sure?')) {
		while (taskList.firstChild) {
			taskList.removeChild(taskList.firstChild);
		}
		clearItemFromLocalStorage('tasks');
	}
}

function clearItemFromLocalStorage (item) {
	localStorage.removeItem(item);
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