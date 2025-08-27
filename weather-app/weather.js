const weatherForm = document.querySelector('.weatherForm');
const locationInput = document.getElementById('locationInput');

const card = document.getElementById('weather-info');

const apiKey = '42e022337ddb902443c2601aadd9346d'; // Replace with your OpenWeatherMap API key

weatherForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = locationInput.value;
    if (location) {
       try{
        const weatherData = await getWeatherData(location);
        displayWeatherInfo(weatherData);
       }
        catch(error){
            console.error(error);
            displayError(error)
        }
    } else {
        displayError('Please enter a location');
    }
});

async function getWeatherData(location) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Location not found');
    }
    const data = await response.json();
    return data;

}

function displayWeatherInfo(data) {
 const {name: location, main: {temp, humidity}, weather: [{description, id}]} = data;

 card.textContent = '';
 card.style.display = 'flex';

 const cityDisplay = document.createElement('h2');
 const tempDisplay = document.createElement('p');
 const humidityDisplay = document.createElement('p');
 const descDisplay = document.createElement('p');
 const weatherEmogi = document.createElement('p');

 cityDisplay.textContent = `Weather in ${location}`;
tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(1)}°C`;
humidityDisplay.textContent = `Humidity: ${humidity}%`;
descDisplay.textContent = `Description: ${description}`;
weatherEmogi.textContent = getWeatherEmogi(id);

 cityDisplay.classList.add("cityDisplay")
 tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descDisplay")
    weatherEmogi.classList.add("weatherEmogi")


     card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmogi);
}


function getWeatherEmogi(waetherID){
    if(waetherID >= 200 && waetherID < 300){
        return '⛈️'; // Thunderstorm
    } else if(waetherID >= 300 && waetherID < 500){
        return '🌦️'; // Drizzle
    } else if(waetherID >= 500 && waetherID < 600){
        return '🌧️'; // Rain
    } else if(waetherID >= 600 && waetherID < 700){
        return '❄️'; // Snow
    } else if(waetherID >= 700 && waetherID < 800){
        return '🌫️'; // Atmosphere (fog, mist, etc.)
    } else if(waetherID === 800){
        return '☀️'; // Clear
    } else if(waetherID > 800 && waetherID < 900){
        return '☁️'; // Clouds
    } else {
        return '🌈'; // Unknown
    }

}

function displayError(message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
   
    errorDisplay.classList.add("errorDisplay")

    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay);
}