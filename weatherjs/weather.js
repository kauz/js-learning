class Weather {
	constructor (city, state) {
		this.apiKey = "99dfe35fcb7de1ee";
		this.city = city;
		this.state = state;
	}

	// Fetch weater from API
	async getWeather() {
		let response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
		let responseData = await response.json();
		return responseData.current_observation;
	}

	// Change weather location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}