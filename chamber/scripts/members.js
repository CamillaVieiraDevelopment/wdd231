const url = "data/members.json";
const cards = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        }
    } catch (error) {
        console.error("Erro ao buscar membros:", error);
    }
}

function displayMembers(members) {
    cards.innerHTML = "";
    members.forEach(member => {
        let card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="Logo de ${member.name}" loading="lazy" width="200" height="100">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        cards.appendChild(card);
    });
}

// Buttons Logic for Layout Toggle
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

getMembers();