let form = document.querySelector('form');
let taskInput = document.getElementById('task');

form.addEventListener('submit', runEvent);

function runEvent (e) {
	console.log(`Event Type: ${e.type}`);

	console.log(taskInput.value);
	taskInput.value = '';
	e.preventDefault();
}

// taskInput.addEventListener('keydown', inputEvent);
// taskInput.addEventListener('keyup', inputEvent);
// taskInput.addEventListener('keypress', inputEvent);

taskInput.addEventListener('focus', inputEvent);
taskInput.addEventListener('blur', inputEvent);


taskInput.addEventListener('cut', inputEvent);
taskInput.addEventListener('paste', inputEvent);

taskInput.addEventListener('input', inputEvent);

function inputEvent (e) {
	console.log(`Event Type: ${e.type}`);
	console.log(e.target.value);

}