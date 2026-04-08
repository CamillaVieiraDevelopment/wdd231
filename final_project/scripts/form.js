/* =====================================================
   JavaScript for Decole Clinic - W06 Project
===================================================== */

// 1. Object and Array of Services
const clinicData = {
    clinicName: "Decole Psychopedagogical Clinic",
    services: [
        { id: "assessment", name: "Psychopedagogical Assessment" },
        { id: "intervention", name: "Psychopedagogical Intervention" },
        { id: "family", name: "Family Guidance" },
        { id: "academic", name: "Academic Support" },
        { id: "difficulties", name: "Support for Learning Difficulties" },
        { id: "hospital", name: "Hospitalized Patient Support" }
    ]
};

// 2. DOM Manipulation & Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Set Year and Last Modified in Footer
    const yearSpan = document.querySelector("#year");
    const lastMod = document.querySelector("#lastModified");

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastMod) lastMod.textContent = `Last Modification: ${document.lastModified}`;

    // Populate Service Select
    const serviceSelect = document.querySelector("#service");
    if (serviceSelect) {
        clinicData.services.forEach(service => {
            const option = document.createElement("option");
            option.value = service.id;
            // Template Literal
            option.textContent = `${service.name}`;
            serviceSelect.appendChild(option);
        });
    }

    // --- LÓGICA DO MODAL ---
    const errorModal = document.querySelector('#errorModal');
    const closeModal = document.querySelector('#closeModal');

    // Fechar o modal quando o botão for clicado
    if (closeModal && errorModal) {
        closeModal.addEventListener('click', () => {
            errorModal.close();
        });
    }

    // Handle Form Submission
    const appointmentForm = document.querySelector("form");
    if (appointmentForm) {
        appointmentForm.addEventListener("submit", (e) => {
            const userName = document.querySelector("#username").value;

            // Conditional Branching (Validação usando o Modal em vez do alert)
            if (userName.trim() === "") {
                e.preventDefault(); // Impede o envio do formulário para a próxima página
                if (errorModal) {
                    errorModal.showModal(); // Abre o Modal HTML
                } else {
                    alert("Please enter a valid name."); // Prevenção caso o HTML do modal falte
                }
            } else {
                // LocalStorage: Atualiza contagem de agendamentos
                localStorage.setItem("lastPatientName", userName);
                localStorage.setItem("appointmentCount", Number(localStorage.getItem("appointmentCount") || 0) + 1);
            }
        });
    }

    // --- ATUALIZAR CONTADOR NA PÁGINA DE CONFIRMAÇÃO ---
    const counterElement = document.querySelector("#counter");
    if (counterElement) {
        counterElement.textContent = localStorage.getItem("appointmentCount") || 0;
    }
});