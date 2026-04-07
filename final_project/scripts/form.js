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

    // Handle Form Submission
    const appointmentForm = document.querySelector("form");
    if (appointmentForm) {
        appointmentForm.addEventListener("submit", (e) => {
            const userName = document.querySelector("#username").value;

            // Conditional Branching
            if (userName.trim() === "") {
                alert("Please enter a valid name.");
                e.preventDefault();
            } else {
                // LocalStorage
                localStorage.setItem("lastPatientName", userName);
                localStorage.setItem("appointmentCount", Number(localStorage.getItem("appointmentCount") || 0) + 1);
            }
        });
    }
});