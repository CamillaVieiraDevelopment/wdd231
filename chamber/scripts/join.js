// join.js - Conteúdo atualizado

// 1. Definir Timestamp
// Captura a data/hora atual no formato ISO quando a página é carregada.
const timestampInput = document.getElementById('timestamp');
if (timestampInput) {
    timestampInput.value = new Date().toISOString();
}

// 2. Dados dos Níveis para o Modal
const membershipInfo = {
    "np": "Benefits: Access to community events and basic networking.",
    "bronze": "Benefits: NP benefits + Directory listing and business workshops.",
    "silver": "Benefits: Bronze benefits + Training sessions and spotlight ads.",
    "gold": "Benefits: Silver benefits + VIP events and premium homepage placement."
};

// 3. Lógica do Modal
const modal = document.querySelector("#membership-modal");
const modalContent = document.querySelector("#modal-content");
const closeBtn = document.querySelector("#close-modal");

// Abrir Modal ao clicar em "Learn More"
document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", () => {
        const level = button.getAttribute("data-level");
        if (modal && modalContent && membershipInfo[level]) {
            modalContent.innerHTML = `
                <h2>${level.toUpperCase()} Membership</h2>
                <p>${membershipInfo[level]}</p>
            `;
            modal.showModal();
        }
    });
});

// Fechar Modal ao clicar no botão "Close"
if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
        modal.close();
    });
}

// --- MELHORIA DE ACESSIBILIDADE/UX ---
// Fechar Modal ao clicar no backdrop (fundo escuro)
if (modal) {
    modal.addEventListener('click', (event) => {
        // O elemento 'dialog' ocupa a tela inteira com o backdrop.
        // Se o clique foi diretamente no 'modal' (e não dentro do seu conteúdo),
        // significa que o usuário clicou no fundo escuro.
        if (event.target === modal) {
            modal.close();
        }
    });
}