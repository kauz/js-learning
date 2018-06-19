// REPLACE ELEMENT

// Create Element
let newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Tasks'));


// Get old heading
let oldHeading = document.querySelector('h5#task-title');
// Parent
let cardAction = document.querySelector('.card-action')

// Replace
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT

let lis = document.querySelectorAll('li');
let list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
let firstLi = document.querySelector('li:first-child');
let link = firstLi.children[0];

link.classList.add('test');
link.classList.remove('test');

let val;
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com/');
val = link.hasAttribute('href');
link.removeAttribute('title');


console.log(val);