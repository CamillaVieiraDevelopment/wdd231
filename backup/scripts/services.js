/* =====================================================
   scripts/services.js - Fetch and Dynamic Generation
   ===================================================== */

/**
 * Async function to fetch services data from the JSON file
 */
async function getServicesData() {
    try {
        // Fetching the JSON data from the data folder
        const response = await fetch('data/services.json');

        // Check if the network response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Call the function to render items on the screen
        displayServices(data.services);

    } catch (error) {
        console.error("Failed to fetch services data:", error);
        const container = document.querySelector('#services-container');
        if (container) {
            container.innerHTML = `
                <p style="text-align: center; width: 100%; color: red;">
                    Sorry, we couldn't load the services at this time. Please try again later.
                </p>`;
        }
    }
}

/**
 * Function to dynamically generate HTML with the Flip Effect
 * @param {Array} services - Array of service objects from JSON
 */
function displayServices(services) {
    const container = document.querySelector('#services-container');
    if (!container) return;

    container.innerHTML = "";

    services.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('service-card');

        // Structure for Front and Back (Card Inner, Card Front, Card Back)
        // Includes the new service-note element to display the hint from JSON
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="circle-icon">
                        <img src="images/${service.id}.png" alt="${service.name}" loading="lazy" onerror="this.src='images/logo.png'">
                    </div>
                    <h3>${service.name}</h3>
                    <p><strong>Duration:</strong> ${service.duration}</p>
                    <p><strong>Price:</strong> ${service.price}</p>
                    
                    <p class="service-note">${service.note || "Click to view description"}</p>
                    
                    <span class="click-hint">Click to read more ↺</span>
                </div>
                
                <div class="card-back">
                    <h3>${service.name}</h3>
                    <p>${service.description || "Description coming soon."}</p>
                    <span class="click-hint">Click to go back ↺</span>
                </div>
            </div>
        `;

        // Click Event to toggle the 'flipped' class
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        container.appendChild(card);
    });
}

/* =====================================================
   Initialization
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    getServicesData();
});