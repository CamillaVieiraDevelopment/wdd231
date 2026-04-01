import { places } from '../data/places.mjs';

// 1. Lógica de Mensagem de Visita
const visitDisplay = document.querySelector("#visitor-message");
const msToDays = 86400000;
const lastVisit = localStorage.getItem("lastVisitDate");
const now = Date.now();

if (visitDisplay) {
    if (!lastVisit) {
        visitDisplay.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSince = Math.floor((now - parseInt(lastVisit)) / msToDays);
        if (daysSince < 1) {
            visitDisplay.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysSince === 1 ? "day" : "days";
            visitDisplay.textContent = `You last visited ${daysSince} ${dayText} ago.`;
        }
    }
}
localStorage.setItem("lastVisitDate", now.toString());

// 2. Gerar Cards da Galeria
const gallery = document.querySelector("#places-gallery");

if (gallery) {
    gallery.innerHTML = "";

    places.forEach(place => {
        const card = document.createElement("section"); // Usando section para semântica
        card.className = "place-card";

        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.photo_url}" alt="${place.name}" loading="lazy" width="300" height="200">
            </figure>
            <p>${place.description}</p>
            <address>${place.address}</address>
            <button>Learn More</button>
        `;
        gallery.appendChild(card);
    });
}