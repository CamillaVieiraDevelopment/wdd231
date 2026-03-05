const navButton = document.querySelector("#nav-button");
const navMenu = document.querySelector(".navigation");

navButton.addEventListener("click", () => {

    navButton.classList.toggle("show");
    navMenu.classList.toggle("show");

});

/* =========================
   FOOTER DYNAMIC DATES
========================= */

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();


const lastModified = document.querySelector("#lastModified");

lastModified.textContent = "Last Modified: " + document.lastModified;