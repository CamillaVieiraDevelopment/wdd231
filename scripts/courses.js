/* ===== COURSE DATA ARRAY ===== */
const courses = [
    { code: "CSE 110", subject: "CSE", credits: 2, completed: true },
    { code: "WDD 130", subject: "WDD", credits: 2, completed: true },
    { code: "CSE 111", subject: "CSE", credits: 2, completed: true },
    { code: "CSE 210", subject: "CSE", credits: 2, completed: false },
    { code: "WDD 131", subject: "WDD", credits: 2, completed: true },
    { code: "WDD 231", subject: "WDD", credits: 2, completed: false }
];

/* ===== SELECT HTML ELEMENTS ===== */
const container = document.querySelector("#course-container");
const totalCreditsDisplay = document.querySelector("#total");

/* ===== FUNCTION TO DISPLAY COURSES ===== */
function displayCourses(filteredCourses) {
    container.innerHTML = "";

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.textContent = course.code;

        if (course.completed) {
            card.classList.add("completed");
        }
        container.appendChild(card);
    });

    /* ===== CALCULATE TOTAL CREDITS USING REDUCE ===== */
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsDisplay.textContent = `Total Credits: ${total}`;
}

/* ===== FILTER BUTTON EVENTS ===== */
document.querySelector("#all").addEventListener("click", () => displayCourses(courses));

document.querySelector("#wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

document.querySelector("#cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});

/* ===== INITIAL COURSE DISPLAY ===== */
displayCourses(courses);