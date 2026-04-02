import { places } from '../data/places.mjs';

// VISIT MESSAGE LOGIC
const visitDisplay = document.querySelector("#visitor-message");
const msToDays = 86400000;
const lastVisit = localStorage.getItem("lastVisitDate");
const now = Date.now();

if (visitDisplay) {
    if (!lastVisit) {
        // First visit
        visitDisplay.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSince = Math.floor((now - parseInt(lastVisit)) / msToDays);

        if (daysSince < 1) {
            // Less than one day
            visitDisplay.textContent = "Back so soon! Awesome!";
        } else {
            // Days calculation with singular/plural handling
            const dayText = daysSince === 1 ? "day" : "days";
            visitDisplay.textContent = `You last visited ${daysSince} ${dayText} ago.`;
        }
    }
}

localStorage.setItem("lastVisitDate", now.toString());


// GALLERY CARDS GENERATION
const gallery = document.querySelector("#places-gallery");

if (gallery) {
    gallery.innerHTML = ""; // Clear gallery before populating

    places.forEach(place => {
        const card = document.createElement("section");
        card.className = "place-card";

        // Required structure: h2, figure (with img), address, p, button
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