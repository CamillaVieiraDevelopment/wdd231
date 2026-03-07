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
const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedPara = document.querySelector("#lastModified");
if (lastModifiedPara) {
    lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
}