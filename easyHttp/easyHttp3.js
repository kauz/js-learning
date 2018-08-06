class EasyHTTP {
	// Make an HTTP GET request
	async get(url) {
		let response = await fetch(url);
		let resData = await response.json();
		return resData; 
	}
	// Make an HTTP POST request
	async post(url, data) {
		let response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			});
		let resData = await response.json();
		return resData;
	}
	// Make an HTTP PUT request
	async put(url, data) {
		let response = await fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			});
		let resData = await response.json();
		return resData;
	}

		// Make an HTTP DELETE request
	async delete(url) {
		let response = await fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json'
				}
			})
		let resData = await 'Resource Deleted';
		return resData;
	}
}