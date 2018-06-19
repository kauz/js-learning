// Anonymous callback func on click
/*
document.querySelector('.clear-tasks').addEventListener('click', function(e) {

console.log('Hello wolrd')
e.preventDefault();
});*/


// Named func
document.querySelector('.clear-tasks').addEventListener('click', onClick);


function onClick(e) {
let val;
val = e.target;
val = e.type;
val = e.timeStamp;
val = e.clientY;
val = e.clientX;
e.target.innerText = 'Clicked!';

val !== undefined ? console.log(val) : val = 0;
e.preventDefault();
}