const membersUrl = "data/members.json";

async function loadSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const members = await response.json();
            displaySpotlights(members);
        }
    } catch (error) {
        console.error("Erro ao carregar spotlights:", error);
    }
}

function displaySpotlights(members) {
    const container = document.querySelector("#business-spotlights");
    // Filtra apenas membros Silver (2) e Gold (3)
    const eligible = members.filter(m => m.membership === 2 || m.membership === 3);

    // Embaralha e pega 3
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        const section = document.createElement("section");
        section.className = "spotlight-card";
        section.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="Logo de ${member.name}" loading="lazy" width="150">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Website</a>
            <p><strong>Level:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
        `;
        container.appendChild(section);
    });
}

loadSpotlights();