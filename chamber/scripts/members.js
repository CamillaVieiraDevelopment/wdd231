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
        console.error("Error fetching members:", error);
    }
}

getMembers();

function displayMembers(members) {
    cards.innerHTML = ""; 

    members.forEach(member => {
        let card = document.createElement("section");
        card.classList.add("card");

        let name = document.createElement("h3");
        name.textContent = member.name;

        let address = document.createElement("p");
        address.textContent = member.address;

        let phone = document.createElement("p");
        phone.textContent = member.phone;

        let link = document.createElement("a");
        link.href = member.website;
        link.textContent = "Visit Website";
        link.target = "_blank";

        let logo = document.createElement("img");
        logo.src = `images/${member.image}`;
        logo.alt = `${member.name} logo`;
        logo.loading = "lazy";
        logo.width = 200;
        logo.height = 100;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(link);

        cards.appendChild(card);
    });
}

// Layout Buttons
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

/* --- Hamburger Menu Logic --- */
const menuButton = document.querySelector('#menu');
const navList = document.querySelector('.navigation');

menuButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    menuButton.classList.toggle('show');
    navList.classList.toggle('show');
});