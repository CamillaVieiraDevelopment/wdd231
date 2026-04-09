/* scripts/services.js - Fetch and Dynamic Generation */

// Função assíncrona para buscar os dados JSON
async function getServicesData() {
    try {
        // AQUI FOI A CORREÇÃO: Adicionado o 'data/' antes do nome do arquivo
        const response = await fetch('data/services.json');

        // Verifica se a resposta da rede foi bem-sucedida
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Chama a função para exibir os itens na tela
        displayServices(data.services);

    } catch (error) {
        console.error("Failed to fetch services data:", error);
        const container = document.querySelector('#services-container');
        if (container) {
            container.innerHTML = `<p style="text-align: center; width: 100%; color: red;">Sorry, we couldn't load the services at this time. Please make sure you are using Live Server.</p>`;
        }
    }
}

// Função para gerar o HTML dinamicamente
function displayServices(services) {
    const container = document.querySelector('#services-container');

    // Esvazia o contêiner (garantia)
    container.innerHTML = "";

    // Array Method: forEach iterando sobre os 15 itens
    services.forEach(service => {
        // Cria o elemento card
        const card = document.createElement('div');
        card.classList.add('service-card');

        // Usa Template Literals para estruturar o conteúdo
        card.innerHTML = `
            <div class="circle-icon">
                <img src="images/${service.id}.png" alt="${service.name}" loading="lazy" onerror="this.src='images/logo.png'">
            </div>
            <h3>${service.name}</h3>
            <p><strong>Duration:</strong> ${service.duration}</p>
            <p><strong>Price:</strong> ${service.price}</p>
        `;

        // Adiciona o card ao contêiner principal
        container.appendChild(card);
    });
}

// Inicia o processo quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    getServicesData();
});