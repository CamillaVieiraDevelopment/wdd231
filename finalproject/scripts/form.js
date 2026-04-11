/* =====================================================
   JavaScript for Decole Clinic - W06 Project
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Configuration (Year and Last Modified)
    const yearSpan = document.querySelector("#year");
    const lastMod = document.querySelector("#lastModified");

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastMod) lastMod.textContent = `Last Modification: ${document.lastModified}`;

    // 2. DYNAMIC SERVICES FETCH (Replaces the fixed clinicData object)
    const serviceSelect = document.querySelector("#service");

    async function loadServicesIntoForm() {
        try {
            // Fetches the 15 services from your JSON file
            const response = await fetch('data/services.json');
            if (!response.ok) throw new Error("Failed to fetch services");

            const data = await response.json();

            if (serviceSelect) {
                // Keeps only the first default option
                serviceSelect.innerHTML = '<option value="" disabled selected>Select a Service ...</option>';

                // Dynamically generates the 15 options
                data.services.forEach(service => {
                    const option = document.createElement("option");
                    option.value = service.id;
                    option.textContent = `${service.name}`; // Template Literal
                    serviceSelect.appendChild(option);
                });
            }
        } catch (error) {
            console.error("Error loading services for form:", error);
        }
    }

    // Call the function to populate the services
    loadServicesIntoForm();

    // 3. POPULATE APPOINTMENT TIMES (Maintained exactly as your original)
    const timeSelect = document.querySelector("#appointmentTime");
    if (timeSelect) {
        const businessHours = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

        businessHours.forEach(hour => {
            const option = document.createElement("option");
            option.value = hour;
            option.textContent = `${hour}`;
            timeSelect.appendChild(option);
        });
    }

    // 4. MODAL LOGIC (Maintained exactly as your original)
    const errorModal = document.querySelector('#errorModal');
    const closeModal = document.querySelector('#closeModal');

    if (closeModal && errorModal) {
        closeModal.addEventListener('click', () => {
            errorModal.close();
        });
    }

    // 5. FORM SUBMISSION AND LOCAL STORAGE (Maintained exactly as your original)
    const appointmentForm = document.querySelector("form");
    if (appointmentForm) {
        appointmentForm.addEventListener("submit", (e) => {
            const userName = document.querySelector("#username").value;

            if (userName.trim() === "") {
                e.preventDefault();
                if (errorModal) {
                    errorModal.showModal();
                } else {
                    alert("Please enter a valid name.");
                }
            } else {
                // Data Persistence
                localStorage.setItem("lastPatientName", userName);
                localStorage.setItem("appointmentCount", Number(localStorage.getItem("appointmentCount") || 0) + 1);
            }
        });
    }

    // 6. COUNTER UPDATE (Maintained exactly as your original)
    const counterElement = document.querySelector("#counter");
    if (counterElement) {
        counterElement.textContent = localStorage.getItem("appointmentCount") || 0;
    }
});