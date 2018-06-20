// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '24');

// set session storage item
// sessionStorage.setItem('name', 'TempItem');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// clear storage
// localStorage.clear();
// console.log(name, age);

/////////////////////////////////////////////////////////////////////////////////

document.querySelector('form').addEventListener('submit', function (e) {
	let task = document.getElementById('task');
	let tasks;

	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task.value);

	localStorage.setItem('tasks', JSON.stringify(tasks));
	
	task.value = '';

	e.preventDefault();
});

let tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
	console.log(task);
});