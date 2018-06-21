function Person (firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
}

Person.prototype.computeAge = function () {
		const now = Date.now();
		let diff = now - this.birthday.getTime();
		let ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

let brad = new Person('Brad', 'Kavinsky', '9-10-1981');
let mary = new Person('Mary', 'Doe', '9-10-2000');

console.log(mary);