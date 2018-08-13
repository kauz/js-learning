// From Blur event listeners
document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zip').addEventListener('blur', validateZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);




function validateName () {
	let name = document.querySelector('#name');
	let re = /^[a-zA-z]{2,10}$/;
	validateInput(name, re);
}

function validateZip () {
	let zip = document.querySelector('#zip');
	let re = /^[0-9]{5}(-[0-9]{4})?$/;
	validateInput(zip, re);
}

function validateEmail () {
	let mail = document.querySelector('#email');
	let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	validateInput(mail, re);
}

function validatePhone () {
	let phone = document.querySelector('#phone');
	let re = /^\+\d{1,3}\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{2}[-. ]?\d{2}$/;
	validateInput(phone, re);
}

function validateInput(input, regExp) {
	if (!regExp.test(input.value)) {
		input.classList.add('is-invalid');
	} else {
		input.classList.remove('is-invalid');
	}
}