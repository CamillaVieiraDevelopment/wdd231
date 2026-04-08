import byuiCourse from './course.mjs'; // Importação padrão [cite: 105]
import { setSectionSelection } from './sections.mjs'; // Importação nomeada [cite: 106]
import { setTitle, renderSections } from './output.mjs'; // Importações nomeadas [cite: 112]

// Configuração inicial
setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);

// Ouvintes de Eventos (Event Listeners)
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections); // Chamada manual após a mudança [cite: 114, 116]
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections); // Chamada manual após a mudança [cite: 124]
});