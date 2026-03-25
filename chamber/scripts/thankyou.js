// Capturar parâmetros da URL [cite: 41, 493]
const urlParams = new URLSearchParams(window.location.search);
const resultsContainer = document.querySelector("#results");

if (urlParams.has('fname')) {
    resultsContainer.innerHTML = `
        <p><strong>Name:</strong> ${urlParams.get('fname')} ${urlParams.get('lname')}</p>
        <p><strong>Email:</strong> ${urlParams.get('email')}</p>
        <p><strong>Phone:</strong> ${urlParams.get('phone')}</p>
        <p><strong>Organization:</strong> ${urlParams.get('business')}</p>
        <p><strong>Application Date:</strong> ${urlParams.get('timestamp')}</p>
    `;
}