class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greeting() {
		return `Hello there ${this.firstName} ${this.lastName}`;
	}

	static addNumbers(x, y) {
		return x + y;
	}
}

class Customer extends Person {
	constructor (firstName, lastName, phone, membership) {
		super(firstName, lastName);
		this.phone = phone;
		this.membership = membership;
	}
}


let mary = new Person('Mary', 'Smith');
let brad = new Customer('Brad', 'Smith', '555-555-5555', 'Standard');

console.log(mary.greeting());
console.log(Person.addNumbers(1, 2));


console.log(brad.greeting());