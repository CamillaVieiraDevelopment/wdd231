import { places } from '../data/places.mjs';

// 1. Lógica de Mensagem de Visita (LocalStorage)
const visitDisplay = document.querySelector("#visitor-message");
const msToDays = 86400000;
const lastVisit = localStorage.getItem("lastVisitDate");
const now = Date.now();

if (visitDisplay) {
    if (!lastVisit) {
        // Primeira visita [cite: 45]
        visitDisplay.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSince = Math.floor((now - parseInt(lastVisit)) / msToDays);

        if (daysSince < 1) {
            // Menos de um dia [cite: 46]
            visitDisplay.textContent = "Back so soon! Awesome!";
        } else {
            // Mais de um dia (cuida do plural/singular) [cite: 47, 48]
            const dayText = daysSince === 1 ? "day" : "days";
            visitDisplay.textContent = `You last visited ${daysSince} ${dayText} ago.`;
        }
    }
}
// Armazena a data atual em milissegundos [cite: 51]
localStorage.setItem("lastVisitDate", now.toString());

// 2. Gerar Cards da Galeria de Curitiba
const gallery = document.querySelector("#places-gallery");

if (gallery) {
    gallery.innerHTML = ""; // Limpa a galeria antes de renderizar

    places.forEach(place => {
        const card = document.createElement("div");
        card.className = "place-card";

        // Estrutura exigida: h2, figure, address, p, button [cite: 36]
        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.photo_url}" alt="${place.name}" loading="lazy" width="300" height="200">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `;
        gallery.appendChild(card);
    });
}