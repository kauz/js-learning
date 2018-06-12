// Create element

const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item'

// Add attribute
li.setAttribute('title', 'new item')

// Create text node and append
li.appendChild(document.createTextNode('Hello world'))

// Create new link element

let link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content'
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);