let person = {
	firstName: 'Steve',
	lastName: 'Smith',
	age: 31,
	email: 'steve@aol.com',
	hobbies: ['music', 'sports'],
	address: {
		city: 'Miami',
		state: 'FL'
	},
	getBirthYear: function(){
		return 2018 - this.age;
	}
}

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[0];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);