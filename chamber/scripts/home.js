// Configurações da API de Clima
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-25.42&lon=-49.27&units=metric&appid=SUA_API_KEY';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-25.42&lon=-49.27&units=metric&appid=SUA_API_KEY';

// Lógica de Spotlights de Membros
const membersUrl = "data/members.json";

async function loadHomeData() {
    try {
        // Fetch Clima (Exemplo simplificado)
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        displayWeather(weatherData);

        // Fetch Membros para Spotlight
        const membersResponse = await fetch(membersUrl);
        const members = await membersResponse.json();
        displaySpotlights(members);
    } catch (error) {
        console.error("Erro ao carregar dados da Home:", error);
    }
}

function displaySpotlights(members) {
    const spotlightContainer = document.querySelector("#business-spotlights");
    // Filtra membros Gold (3) ou Silver (2)
    const eligibleMembers = members.filter(m => m.membership === 3 || m.membership === 2);

    // Sorteia 3 aleatórios
    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        const div = document.createElement("div");
        div.className = "spotlight-card";
        div.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}">Website</a>
        `;
        spotlightContainer.appendChild(div);
    });
}

function displayWeather(data) {
    const weatherInfo = document.querySelector("#weather-info");
    weatherInfo.innerHTML = `
        <p><strong>${data.main.temp}°C</strong> - ${data.weather[0].description}</p>
        <p>Umidade: ${data.main.humidity}%</p>
    `;
}

loadHomeData();