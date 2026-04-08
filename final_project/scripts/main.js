/* scripts/main.js - Global Functionality */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Function for Footer Dates
    const updateFooter = () => {
        const yearSpan = document.querySelector("#year");
        const lastMod = document.querySelector("#lastModified");

        if (yearSpan) yearSpan.textContent = new Date().getFullYear();
        if (lastMod) {
            // Template Literal
            lastMod.textContent = `Last Modification: ${document.lastModified}`;
        }
    };
    updateFooter();

    // 2. Hamburger Menu Logic
    const hamburgerBtn = document.getElementById("hamburger-menu");
    const navList = document.getElementById("nav-list");

    if (hamburgerBtn && navList) {
        hamburgerBtn.addEventListener("click", () => {
            // Toggles the 'open' class on the navigation list
            navList.classList.toggle("open");

            // Toggles the hamburger icon (☰) to an 'X' (✖) when open
            if (navList.classList.contains("open")) {
                hamburgerBtn.textContent = "✖";
            } else {
                hamburgerBtn.textContent = "☰";
            }
        });
    }
});