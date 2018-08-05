/*let sayHello = function () {
	console.log('Hello');
}
*/

/*let sayHello = () => {
	console.log('Hello');
}
*/

// One line does need braces
let sayHello = () => console.log('Hello');

let returnFunction = () => 'Hello';
let returnObject = () => ({msg: 'Hello object'});


//single param does not need parenthesis
let greetUser = name => console.log(`Hello, ${name}`);
// though multiple does need
let greetPolitely = (firstName, lastName) => console.log(`Hello, mr. ${firstName} ${lastName}`);

sayHello();
console.log(returnObject());

let users = ['Nathan', 'John', 'William'];

/*let nameLenghts = users.map(function (name) {
	return name.length;
});*/

// Shorter
/*let nameLenghts = users.map((name) => {
	return name.length;
});*/

// Shortest
let nameLenghts = users.map(name => name.length);
