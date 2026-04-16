/* scripts/main.js - Global Functionality */

// 1. Importing functions from your ES Module (Rubric Requirement)
import { getFormattedDate, updateLastModified } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {

    // 2. Applying the functions imported from utils.js to the footer
    const yearSpan = document.querySelector("#year");
    if (yearSpan) yearSpan.textContent = getFormattedDate();

    const lastMod = document.querySelector("#lastModified");
    if (lastMod) lastMod.textContent = updateLastModified();

    // 3. Hamburger Menu Logic
    const hamburgerBtn = document.getElementById("hamburger-menu");
    const navList = document.getElementById("nav-list");

    if (hamburgerBtn && navList) {
        hamburgerBtn.addEventListener("click", () => {
            // Toggles the 'open' class on the navigation list
            navList.classList.toggle("open");

            // Toggles the hamburger icon (☰) to 'X' (✖) when open
            if (navList.classList.contains("open")) {
                hamburgerBtn.textContent = "✖";
            } else {
                hamburgerBtn.textContent = "☰";
            }
        });
    }
});