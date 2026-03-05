// Date formatting
const today = new Date();

const options = {
    month: "short",
    day: "2-digit",
    year: "numeric"
};

document.querySelector("#date").textContent =
    today.toLocaleDateString("en-US", options);


// Template literal example
let volume = 3;

document.querySelector("#volume").innerHTML =
    `<strong>Volume</strong>: ${volume} liters`;


// Quantity from input element
let quantity = document.querySelector("#q").value;


// Output message to first aside
document.querySelector("aside").innerHTML =
    "Welcome to <em>our</em> neighborhood!";


// Convert temperature from Fahrenheit to Celsius
document.querySelector("#temp").value = getCelsius(33);


// Select all div elements
const divs = document.querySelectorAll("div");

document.querySelector("#divs").textContent =
    `There are ${divs.length} div elements in this document.`;


// Array filtering example
let citynames = [
    "Paris",
    "Chicago",
    "London",
    "Cairo",
    "Tokyo",
    "Calgary",
    "Madrid"
];

let filterC = citynames.filter(city => city.charAt(0) === "C");

document.querySelector("#cities").textContent =
    filterC.join(", ");