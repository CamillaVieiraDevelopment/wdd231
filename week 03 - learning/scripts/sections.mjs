export function setSectionSelection(sections) {
    const sectionSelect = document.querySelector("#sectionNumber");
    // Agora usamos 'sections' que vem por parâmetro, sem o prefixo 'byuiCourse' [cite: 95]
    sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
}