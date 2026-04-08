// URL do JSON com os dados
const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

// seleciona o container onde os cards serão inseridos
const cards = document.querySelector("#cards");

// função assíncrona para buscar os dados
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets);
}

// função que cria os cards
const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

        // cria os elementos
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");
        let portrait = document.createElement("img");

        // conteúdo do nome
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // informações adicionais
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // imagem
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // adiciona elementos ao card
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // adiciona card ao HTML
        cards.appendChild(card);
    });
}

// executa a função
getProphetData();