/* scripts/request.js - Confirmation page logic */
document.addEventListener("DOMContentLoaded", () => {
    console.log("URL Parameters:", window.location.search);
    const params = new URLSearchParams(window.location.search);
    const resultsContainer = document.getElementById('results');

    // Check if URL parameters exist
    if (window.location.search) {
        const service = params.get('service') || 'Not specified';
        const date = params.get('appointmentDate') || 'Not specified';
        const appointmentTime = params.get('appointmentTime') || 'Not specified';
        const period = params.get('period') || 'Not specified';
        const notes = params.get('notes') || 'None';
        const username = params.get('username') || 'Valued Client';
        const email = params.get('email') || 'Not specified';

        // Mapping IDs to readable names
        const serviceNames = {
            "assessment": "Psychopedagogical Assessment",
            "intervention": "Psychopedagogical Intervention",
            "family": "Family Guidance",
            "academic": "Academic Support",
            "difficulties": "Support for Learning Difficulties",
            "hospital": "Hospitalized Patient Support"
        };
        const readableService = serviceNames[service] || service;

        if (resultsContainer) {
            resultsContainer.innerHTML = `
                <p><strong>Name:</strong> ${username}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service:</strong> ${readableService}</p>
                <p><strong>Preferred Date:</strong> ${date}</p>
                <p><strong>Preferred Time:</strong> ${appointmentTime}</p>
                <p><strong>Additional Notes:</strong> ${notes}</p>
            `;
        }
    } else if (resultsContainer) {
        resultsContainer.innerHTML = "<p>No specific request details found.</p>";
        resultsContainer.innerHTML += `<p><strong>Preferred Time:</strong> ${appointmentTime}</p>`;
    }

    // Updates the counter (logic similar to form.js, but focused here)
    const counterElement = document.querySelector("#counter");
    if (counterElement) {
        counterElement.textContent = localStorage.getItem("appointmentCount") || 0;
    }
});