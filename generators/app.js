/*// Iterator Example
function nameIterator (names) {
	let nextIndex = 0;
	return {
		next: function () {
			return nextIndex < names.length ? 
			{ value:names[nextIndex++], done: false } :
			{ done: true }
		}
	}
}


// Create an array of names
let namesArr = ['Jack', 'Jill', 
'John'];
// Init iterator and pass in the names array
let names = nameIterator(namesArr);


console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());*/


// Generator example
function* sayNames() {
	yield 'Jack';
	yield 'Jill';
	yield 'John';
}

let name = sayNames();

console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());



// ID creator
function* createIds() {
	let index = 0;
	while (true) {
		yield index++;
	}
}

const gen = createIds();
console.log(gen.next().value);