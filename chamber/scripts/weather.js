/* --- Weather API Elements Selection --- */
const currentTemp = document.querySelector('#weather-info');
const forecastContainer = document.querySelector('#forecast-details');

/* --- OpenWeatherMap API Credentials and Location --- */
const key = '568206686bbc5d0dd21d87d4c3b3d035';
const lat = '-25.43'; // Latitude for Curitiba
const lon = '-49.27'; // Longitude for Curitiba

/* --- API URL Construction --- */
// Current weather data URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
// 5-day forecast data URL
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

/* --- Asynchronous Function to Fetch Weather Data --- */
async function apiFetch() {
    try {
        // Fetch current weather
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCurrent(data);
        } else {
            throw Error(await response.text());
        }

        // Fetch forecast data
        const fResponse = await fetch(forecastUrl);
        if (fResponse.ok) {
            const fData = await fResponse.json();
            displayForecast(fData);
        } else {
            throw Error(await fResponse.text());
        }
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}

/* --- Function to Display Current Weather Results --- */
function displayCurrent(data) {
    // Construct the icon source URL
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // Update HTML with City Name, Temperature, and Description
    currentTemp.innerHTML = `
        <h3>${data.name}</h3> <img src="${iconsrc}" alt="${data.weather[0].description}" width="100">
        <p><strong>${data.main.temp.toFixed(0)}°C</strong> - ${data.weather[0].description}</p>
    `;
}

/* --- Function to Display 3-Day Forecast Results --- */
function displayForecast(data) {
    forecastContainer.innerHTML = '';

    // Filter the list to get daily readings at 12:00 PM for the next 3 days
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    daily.forEach(day => {
        // Create date object and format it to English (en-US)
        const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });

        const p = document.createElement('p');
        p.innerHTML = `${date}: <strong>${day.main.temp.toFixed(0)}°C</strong>`;
        forecastContainer.appendChild(p);
    });
}

/* --- Execute the Weather Fetch Process --- */
apiFetch();