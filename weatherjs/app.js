// Init weaher class
const weather = new Weather('Boston', 'MA');
// Init UI class
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather () {
	weather.getWeather()
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err)); 
}