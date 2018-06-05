// document.getElementById()

let val;
val = document.getElementById('task-title');

// Get things from the element

val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;


// Change styling

document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';


// Change content
document.getElementById('task-title').textContent = 'Tasks List';
document.getElementById('task-title').innerText = 'My tasks';
document.getElementById('task-title').innerHTML = '<span>Task List</span>';



// document.querySelector()
val = document.querySelector('#task-title');
val = document.querySelector('.card-title');
val = document.querySelector('h5');

val = document.querySelector('ul li').style.color = 'red';
// document.getElementsByClassName()

let items = document.getElementsByClassName('collection-item');
items = document.getElementsByTagName('li');
// console.log(val);
console.log(items);
items[0].textContent = 'red';


// document.querySelectorAll()

let nodes = document.querySelectorAll('ul.collection li.collection-item:nth-child(even)');

console.log(nodes);

nodes.forEach( function(node, index) {
	node.style.background = '#ffc';
});