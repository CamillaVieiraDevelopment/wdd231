const url = "data/members.json"
const cards = document.querySelector("#members")

async function getMembers() {
    const response = await fetch(url)
    const data = await response.json()
    displayMembers(data)
}

getMembers()

function displayMembers(members) {

    members.forEach(member => {

        let card = document.createElement("section")
        card.classList.add("card")

        let name = document.createElement("h3")
        name.textContent = member.name

        let address = document.createElement("p")
        address.textContent = member.address

        let phone = document.createElement("p")
        phone.textContent = member.phone

        let link = document.createElement("a")
        link.href = member.website
        link.textContent = "Visit Website"

        let logo = document.createElement("img")
        logo.src = `images/${member.image}`
        logo.alt = `${member.name} logo`
        logo.loading = "lazy"

        card.appendChild(logo)
        card.appendChild(name)
        card.appendChild(address)
        card.appendChild(phone)
        card.appendChild(link)

        cards.appendChild(card)

    })

}

const gridbutton = document.querySelector("#grid")
const listbutton = document.querySelector("#list")

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid")
    cards.classList.remove("list")
})

listbutton.addEventListener("click", () => {
    cards.classList.add("list")
    cards.classList.remove("grid")
})