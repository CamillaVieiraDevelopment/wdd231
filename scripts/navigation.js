/* ===== SELECT ELEMENTS ===== */

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

navButton.addEventListener("click", () => {

    navButton.classList.toggle("show");
    navMenu.classList.toggle("show");

});


/* =========================
TOGGLE MOBILE MENU 
========================= */

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});

/* =========================
   FOOTER DYNAMIC DATES
========================= */

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();


const lastModified = document.querySelector("#lastModified");

lastModified.textContent = "Last Modified: " + document.lastModified;