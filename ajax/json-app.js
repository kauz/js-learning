document.querySelector("#button1").addEventListener('click', loadCustomer);

document.querySelector("#button2").addEventListener('click', loadCustomers);


function loadCustomer (e) {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', '/ajax/data/customer.json', true);

	xhr.onload = function () {
		if (this.status === 200) {
			let customer = JSON.parse(this.responseText);
			let output = `
			<ul>
				<li>ID: ${customer.id}</li>
				<li>name: ${customer.name}</li>
				<li>company: ${customer.company}</li>
				<li>phone: ${customer.phone}</li>
			</ul>`
			document.querySelector('#customer').innerHTML = output;
		}
	}

	xhr.send();
}

function loadCustomers (e) {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', '/ajax/data/customers.json', true);

	xhr.onload = function () {
		if (this.status === 200) {
			let customers = JSON.parse(this.responseText);
			let output = ``;

			customers.forEach(function(customer) {
				output += `
			<ul>
				<li>ID: ${customer.id}</li>
				<li>name: ${customer.name}</li>
				<li>company: ${customer.company}</li>
				<li>phone: ${customer.phone}</li>
			</ul>`;
			});
			document.querySelector('#customers').innerHTML = output;
		}
	}

	xhr.send();
}