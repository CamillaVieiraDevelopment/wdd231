import { places } from '../data/places.mjs';

// 1. Lógica de Mensagem de Visita (Critério 7 e 11) [cite: 42, 45, 47]
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
            // Cálculo de dias com tratamento de singular/plural [cite: 47, 48]
            const dayText = daysSince === 1 ? "day" : "days";
            visitDisplay.textContent = `You last visited ${daysSince} ${dayText} ago.`;
        }
    }
}
localStorage.setItem("lastVisitDate", now.toString());

// 2. Gerar 8 Cards da Galeria (Critério 9 e 10) [cite: 24, 36]
const gallery = document.querySelector("#places-gallery");

if (gallery) {
    gallery.innerHTML = ""; // Limpa a galeria antes de popular

    places.forEach(place => {
        const card = document.createElement("section");
        card.className = "place-card";

        // Estrutura obrigatória: h2, figure (com img), address, p, button 
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