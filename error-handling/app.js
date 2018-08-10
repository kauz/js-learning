let user = {
	email: 'jdoe@gmail.com'
};

try {
	// ReferenceError (no such function declared)
	// myFunction();
	// TypeError
	// null.myFunction();
	// SyntaxError
	// console.log(eval('Hello World'));
	// URIError
	// decodeURIComponent('%');

	if (!user.name) {
		// throw 'User has no name';
		throw new SyntaxError('User has no name');
	}
} catch(e) {
	console.log(e); // ReferenceError: myFunction is not defined at app.js:3
	// console.log(e.message); // myFunction is not defined
	// console.log(e.name); // ReferenceError
	// console.log(e instanceof ReferenceError); // true
} finally {
	console.log('Finally runs reguardless of result...')
}

console.log('Program continues');