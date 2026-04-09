/* scripts/main.js - Global Functionality */

// 1. Importando as funções do seu ES Module (Requisito da Rubrica)
import { getFormattedDate, updateLastModified } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {

    // 2. Aplicando as funções importadas do utils.js no rodapé
    const yearSpan = document.querySelector("#year");
    if (yearSpan) yearSpan.textContent = getFormattedDate();

    const lastMod = document.querySelector("#lastModified");
    if (lastMod) lastMod.textContent = updateLastModified();

    // 3. Lógica do Menu Hambúrguer
    const hamburgerBtn = document.getElementById("hamburger-menu");
    const navList = document.getElementById("nav-list");

    if (hamburgerBtn && navList) {
        hamburgerBtn.addEventListener("click", () => {
            // Alterna a classe 'open' na lista de navegação
            navList.classList.toggle("open");

            // Alterna o ícone de hambúrguer (☰) para o 'X' (✖) quando aberto
            if (navList.classList.contains("open")) {
                hamburgerBtn.textContent = "✖";
            } else {
                hamburgerBtn.textContent = "☰";
            }
        });
    }
});