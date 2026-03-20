// Spotlights Logic of members (Chamber Commerce)
const membersUrl = "data/members.json";

async function loadSpotlightData() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const members = await response.json();
            displaySpotlights(members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Erro ao carregar membros para Spotlight:", error);
    }
}

function displaySpotlights(members) {
    const spotlightContainer = document.querySelector("#business-spotlights");
    spotlightContainer.innerHTML = ""; // Clean of container before inserting

    // Filter members Gold (Level 3) or Silver (Level 2)
    const eligibleMembers = members.filter(m => m.membership === 3 || m.membership === 2);

    // Prize down and select 2 or 3 members randomly
    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement("div");
        card.className = "spotlight-card";

        // Show nome, logo, number of celphone, adress, website and nível
        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="Logo de ${member.name}" loading="lazy" width="150">
            <p><strong>Fone:</strong> ${member.phone}</p>
            <p><strong>Endereço:</strong> ${member.address}</p>
            <p><strong>Nível:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
            <a href="${member.website}" target="_blank">Visitar Website</a>
        `;
        spotlightContainer.appendChild(card);
    });
}

// Inicialization the load of spotlights
loadSpotlightData();