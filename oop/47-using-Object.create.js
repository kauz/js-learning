const personPrototypes = {
	greeting: function () {
		return `Hello there ${this.firstName} ${this.lastName}`;
	},
	getsMarried: function (newLastName) {
		this.lastName = newLastName;
	}
}

let mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Smith');
console.log(mary.greeting());


let brad = Object.create(personPrototypes, {
	firstName: {value: 'Brad'},
	lastName: {value: 'Traversy'},
	age: {value: 36}
});

console.log(brad);