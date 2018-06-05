let val;

let list = document.querySelector('ul.collection');
let listItem = document.querySelector('li.collection-item:first-child');

val = list;

// Get child nodes 

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children elements

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;
val = list.children;
val = list.children[0];

// Children of children

val = list.children[3].children;
list.children[3].children[0].id = 'test-link';

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);