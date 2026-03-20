// Select elements HTML 
const currentTemp = document.querySelector('#weather-info');
const weatherIcon = document.createElement('img'); // Dynamic icon
const forecastContainer = document.querySelector('#forecast-details');

// Variables
const key = '568206686bbc5d0dd21d87d4c3b3d035';
const lat = '-25.43';
const lon = '-49.27';

// URLS
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

async function apiFetch() {
    try {
        const response = await fetch(url);[cite: 37]
        if (response.ok) {
            const data = await response.json();[cite: 39]
            displayResults(data);
        } else {
            throw Error(await response.text());[cite: 52]
        }

        // Preview 3 days
        const fResponse = await fetch(forecastUrl);
        if (fResponse.ok) {
            const fData = await fResponse.json();
            displayForecast(fData);
        }
    } catch (error) {
        console.log(error);[cite: 53]
    }
}

function displayResults(data) {
    // Format the description: first letter uppercase
    const desc = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;[cite: 119, 120]

    currentTemp.innerHTML = `
        <img src="${iconsrc}" alt="${desc}" id="weather-icon">
        <p><strong>${data.main.temp.toFixed(0)}°C</strong> - ${desc}</p>
        <p>Umidade: ${data.main.humidity}%</p>
    `;
}

function displayForecast(data) {
    forecastContainer.innerHTML = '';
    // A API 5-day return for datas each 3 hours. Filter to took a time of day.
    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyData.forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short' });
        const temp = day.main.temp.toFixed(0);

        const dayDiv = document.createElement('div');
        dayDiv.className = 'forecast-day';
        dayDiv.innerHTML = `<span>${date}:</span> <strong>${temp}°C</strong>`;
        forecastContainer.appendChild(dayDiv);
    });
}

apiFetch();