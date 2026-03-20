const currentTemp = document.querySelector('#weather-info');
const forecastContainer = document.querySelector('#forecast-details');

const key = '568206686bbc5d0dd21d87d4c3b3d035';
const lat = '-25.43';
const lon = '-49.27';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCurrent(data);
        }
        const fResponse = await fetch(forecastUrl);
        if (fResponse.ok) {
            const fData = await fResponse.json();
            displayForecast(fData);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrent(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    currentTemp.innerHTML = `
        <img src="${iconsrc}" alt="${data.weather[0].description}" width="100">
        <p><strong>${data.main.temp.toFixed(0)}°C</strong> - ${data.weather[0].description}</p>
    `;
}

function displayForecast(data) {
    forecastContainer.innerHTML = '';
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    daily.forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short' });
        const p = document.createElement('p');
        p.innerHTML = `${date}: <strong>${day.main.temp.toFixed(0)}°C</strong>`;
        forecastContainer.appendChild(p);
    });
}

apiFetch();