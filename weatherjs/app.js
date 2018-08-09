// Init UI class
const ui = new UI();
// Init Local Storage
const storage = new Storage();
// Get stored location data
let weatherLocation = storage.getLocationData();
// Init weaher class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// Change location evene
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
	let city = document.querySelector('#city').value;
	let state = document.querySelector('#state').value;
	// Change location
	weather.changeLocation(city, state);
	// Set location in LS
	storage.setLocationData(city, state);
	getWeather();
	$('#locModal').modal('hide');
});


function getWeather () {
	weather.getWeather()
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err)); 
}