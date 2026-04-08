const courses = [
    {
        code: "WDD 130",
        subject: "WDD",
        credits: 2,
        completed: true
    },
    {
        code: "WDD 131",
        subject: "WDD",
        credits: 2,
        completed: true
    },
    {
        code: "WDD 231",
        subject: "WDD",
        credits: 2,
        completed: false
    }
];

const container = document.querySelector("#course-container");
const totalCredits = document.querySelector("#total");

function displayCourses(courseList) {

    container.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.textContent = course.code;

        if (course.completed) {
            card.classList.add("completed");
        }

        container.appendChild(card);

    });

    const credits = courseList.reduce((sum, course) => sum + course.credits, 0);

    totalCredits.textContent = `Total Credits: ${credits}`;

}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {

    const wdd = courses.filter(course => course.subject === "WDD");

    displayCourses(wdd);

});

document.querySelector("#cse").addEventListener("click", () => {

    const cse = courses.filter(course => course.subject === "CSE");

    displayCourses(cse);

});