// Person constructor

function Person (name, dob) {
	this.name = name;
	this.birthday = new Date(dob);
	this.computeAge = function () {
		const now = Date.now();
		let diff = now - this.birthday.getTime();
		let ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}

const brad = new Person('Brad', '9-10-1981');

console.log(brad.computeAge());