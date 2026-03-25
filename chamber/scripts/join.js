// 1. Definir Timestamp [cite: 472]
document.getElementById('timestamp').value = new Date().toISOString();

// 2. Dados dos Níveis para o Modal
const membershipInfo = {
    "np": "Benefits: Access to community events and basic networking.",
    "bronze": "Benefits: NP benefits + Directory listing and business workshops.",
    "silver": "Benefits: Bronze benefits + Training sessions and spotlight ads.",
    "gold": "Benefits: Silver benefits + VIP events and premium homepage placement."
};

// 3. Lógica do Modal [cite: 305, 365]
const modal = document.querySelector("#membership-modal");
const modalContent = document.querySelector("#modal-content");
const closeBtn = document.querySelector("#close-modal");

document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", () => {
        const level = button.getAttribute("data-level");
        modalContent.innerHTML = `
            <h2>${level.toUpperCase()} Membership</h2>
            <p>${membershipInfo[level]}</p>
        `;
        modal.showModal();
    });
});

closeBtn.addEventListener("click", () => {
    modal.close();
});