/*
async function myFunc () {

	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Hello'), 1000);
	});

	let error = false;
	if(!error) {
		let res = await promise; // Wait until promise is resolved
		return res;		
	} else {
		await Promise.reject(new Error('Something went wrong'));
	}


}

myFunc()
.then(res => console.log(res))
.catch(err => console.log(err));
*/

async function getUsers() {
	// await responce of the fetch call
	let response = await fetch('https://jsonplaceholder.typicode.com/users');
	// only proceed once its resolved
	let data = await response.json();
	// only proceed once second promice is resolved
	return data;
}

getUsers().then(users => console.log(users));