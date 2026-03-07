/* ===== SELECT ELEMENTS ===== */

const navButton = document.querySelector("#nav-button");
const navigation = document.querySelector(".navigation");


/* ===== TOGGLE NAVIGATION ===== */

if (navButton && navigation) {

    navButton.addEventListener("click", () => {

        navigation.classList.toggle("open");
        navButton.classList.toggle("open");

    });

}


/* ===== FOOTER DYNAMIC DATES ===== */

const year = document.querySelector("#currentyear");

if (year) {
    year.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = "Last Modified: " + document.lastModified;
}