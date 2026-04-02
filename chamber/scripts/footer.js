/* scripts/footer.js */

// 1. Atualizar Ano e Data de Modificação
const yearSpan = document.querySelector("#year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastMod = document.querySelector("#lastModified");
if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;

// 2. Funcionalidade do Menu Hambúrguer (Toggle)
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (hamButton && navigation) {
    hamButton.addEventListener('click', (e) => {
        e.preventDefault();
        navigation.classList.toggle('show');
        hamButton.classList.toggle('show');
    });
}