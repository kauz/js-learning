/* ES 6

@Symbols

*/

// Create a symbol
// let sym1 = Symbol();
// let sym2 = Symbol('sym2');

// console.log(typeof sym2); // symbol

// console.log(Symbol('123') === Symbol('123')) // false
// console.log(`Hello, ${sym2.toString()}`);


// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

let myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj);

// Symbols are not enumerablel in for...in

for (let i in myObj) {
	console.log(`${i}: ${myObj[i]}`);
}


// Symbols are ignored when using JSON.stringify()

console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));