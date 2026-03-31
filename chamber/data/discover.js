import { places } from '../data/places.mjs';

// 1. Lógica de Mensagem de Visita
const visitDisplay = document.querySelector("#visit-info");
const msToDays = 86400000;
const lastVisit = localStorage.getItem("lastVisitDate");
const now = Date.now();

if (!lastVisit) {
    visitDisplay.textContent = "Bem-vindo! Deixe-nos saber se você tiver alguma dúvida.";
} else {
    const daysSince = Math.floor((now - lastVisit) / msToDays);
    if (daysSince < 1) {
        visitDisplay.textContent = "De volta tão cedo! Que bom ver você!";
    } else {
        visitDisplay.textContent = `Sua última visita foi há ${daysSince} ${daysSince === 1 ? 'dia' : 'dias'}.`;
    }
}
localStorage.setItem("lastVisitDate", now);

// 2. Gerar Cards da Galeria
const gallery = document.querySelector("#places-gallery");

places.forEach(place => {
    const card = document.createElement("div");
    card.className = "place-card";

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.photo_url}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Saiba Mais</button>
    `;
    gallery.appendChild(card);
});