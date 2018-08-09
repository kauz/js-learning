// Init weaher class
const weather = new Weather('Boston', 'MA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather () {
	weather.getWeather()
		.then(results => {
			console.log(results)
		})
		.catch(err => console.log(err)); 
}