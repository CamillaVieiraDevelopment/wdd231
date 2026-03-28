/* --- GLOBAL VARIABLES --- */
const membersUrl = "data/members.json";

/* --- NAVIGATION & WAYFINDING --- */
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation a');

// Toggle mobile menu
if (menuButton) {
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('show');
        menuButton.classList.toggle('show');
    });
}

// Active link highlighting (Wayfinding)
const currentHref = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentHref) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

/* --- BUSINESS SPOTLIGHTS --- */
async function loadSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const members = await response.json();
            displaySpotlights(members);
        }
    } catch (error) {
        console.error("Error loading spotlights:", error);
    }
}

function displaySpotlights(members) {
    const container = document.querySelector("#business-spotlights");
    if (!container) return;

    // Filter Silver (2) and Gold (3) members
    const eligible = members.filter(m => m.membership === 2 || m.membership === 3);

    // Shuffle and pick 3
    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    selected.forEach(member => {
        const section = document.createElement("section");
        section.className = "spotlight-card";
        section.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy" width="150">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Website</a>
            <p><strong>Level:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
        `;
        container.appendChild(section);
    });
}

/* --- INITIALIZATION --- */
loadSpotlights();