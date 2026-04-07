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
});