//      projcet id : #CC9887

const apiKey = "daa605729e630593d8ae0fd8261fa302";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&appid=' + apiKey + '&units=metric&q=';
async function getWeatherData(city) {
    const response = await fetch(apiUrl + city);
    const data = await response.json();
    return data;
}
function updateUI(weatherData) {
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    document.getElementById('temperature').textContent = `Temperature: ${weatherData.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${weatherData.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
    document.getElementById('sky-condition').textContent = `Sky Condition: ${weatherData.weather[0].description}`;
}

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            updateUI(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        }
    } else {
        alert('Please enter a city name.');
    }
}