/* join.js - Corrected and resilient version */

// 1. Define Timestamp (Ensures the form records the moment of access)
const timestampInput = document.getElementById('timestamp');
if (timestampInput) {
    timestampInput.value = new Date().toISOString();
}

// 2. Membership levels database (Content that will appear in the modal)
const membershipInfo = {
    "np": "Benefits: Access to community events and basic networking.",
    "bronze": "Benefits: NP benefits + Directory listing and business workshops.",
    "silver": "Benefits: Bronze benefits + Training sessions and spotlight ads.",
    "gold": "Benefits: Silver benefits + VIP events and premium homepage placement."
};

// 3. Selection of Modal elements
const modal = document.querySelector("#membership-modal");
const modalContent = document.querySelector("#modal-content");
const closeBtn = document.querySelector("#close-modal");

// 4. Function to open the modal
function openMembershipModal(level) {
    if (!modal || !modalContent) return; // Safety check in case the element does not exist

    // Fill the content based on the clicked ID
    modalContent.innerHTML = `
        <h2>${level.toUpperCase()} Membership</h2>
        <div class="modal-body">
            <p>${membershipInfo[level] || "Information not available."}</p>
        </div>
    `;

    modal.showModal(); // Opens the native HTML5 modal
}

// 5. Add Event Listeners to all "Learn More" buttons
document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Prevents any undesired default behavior
        const level = button.getAttribute("data-level");
        openMembershipModal(level);
    });
});

// 6. Close the modal (Close Button)
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.close();
    });
}

// 7. Close the modal when clicking outside of it (UX/Accessibility)
if (modal) {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}