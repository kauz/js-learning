document.querySelector('#button').addEventListener('click', loadData);

function loadData () {
	// Create an XHR object
	let xhr = new XMLHttpRequest();

	// OPEN
	xhr.open('GET', '/ajax/data/data.txt', true);

	// Optional - used for spinner/loaders
	xhr.onprogress = function () {
		console.log('READYSTATE:', xhr.readyState);
	}

	xhr.onload = function () {
		if (this.status === 200) {
			document.querySelector('#output').innerHTML = `<h1>${this.response}</h1>`;
		}
	}

	xhr.onerror = function () {
		console.log('request error');
	}

	xhr.send();

}

// readyState values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request is finished and response is ready