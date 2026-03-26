/* join.js - Versão corrigida e resiliente */

// 1. Definir Timestamp (Garante que o formulário registre o momento do acesso)
const timestampInput = document.getElementById('timestamp');
if (timestampInput) {
    timestampInput.value = new Date().toISOString();
}

// 2. Base de dados dos níveis (Conteúdo que aparecerá no modal)
const membershipInfo = {
    "np": "Benefits: Access to community events and basic networking.",
    "bronze": "Benefits: NP benefits + Directory listing and business workshops.",
    "silver": "Benefits: Bronze benefits + Training sessions and spotlight ads.",
    "gold": "Benefits: Silver benefits + VIP events and premium homepage placement."
};

// 3. Seleção dos elementos do Modal
const modal = document.querySelector("#membership-modal");
const modalContent = document.querySelector("#modal-content");
const closeBtn = document.querySelector("#close-modal");

// 4. Função para abrir o modal
function openMembershipModal(level) {
    if (!modal || !modalContent) return; // Segurança caso o elemento não exista

    // Preenche o conteúdo com base no ID clicado
    modalContent.innerHTML = `
        <h2>${level.toUpperCase()} Membership</h2>
        <div class="modal-body">
            <p>${membershipInfo[level] || "Information not available."}</p>
        </div>
    `;

    modal.showModal(); // Abre o modal nativo do HTML5
}

// 5. Adicionar Event Listeners em todos os botões "Learn More"
// Usamos querySelectorAll para garantir que todos os botões dentro dos novos cards sejam detectados
document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Evita qualquer comportamento padrão indesejado
        const level = button.getAttribute("data-level");
        openMembershipModal(level);
    });
});

// 6. Fechar o modal (Botão Close)
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.close();
    });
}

// 7. Fechar o modal ao clicar fora dele (UX/Acessibilidade)
if (modal) {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}