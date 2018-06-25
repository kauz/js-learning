// Person
function Person (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}


// Person Greeting
Person.prototype.greeting = function () {
	return `Hello there, ${this.firstName} ${this.lastName}!`;
}

let person1 = new Person ('John', 'Doe');

// console.log(person1.greeting());

// Customer
function Customer (firstName, lastName, phone, membership) {
	Person.call(this, firstName, lastName);

	this.phone = phone;
	this.membership = membership;
} 

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer
Customer.prototype.constructor = Customer;

// Create customer
let customer1 = new Customer ('Tom', 'Smith', '555-555-5555', 'Standard');

// Customer greeting
Customer.prototype.greeting = function () {
	return `Welcome to our store, ${this.firstName} ${this.lastName}!`;
}

console.log(customer1);
console.log(customer1.greeting());