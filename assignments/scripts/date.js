/* ===== SELECT FOOTER ELEMENTS ===== */

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");


/* ===== DISPLAY CURRENT YEAR ===== */

year.textContent = new Date().getFullYear();


/* ===== DISPLAY LAST MODIFIED DATE ===== */

lastModified.textContent =
    "Last Modification: " + document.lastModified;