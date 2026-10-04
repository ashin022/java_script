const studentName = document.getElementById("studentName");
const studentAge = document.getElementById("studentAge");
const courseName = document.getElementById("courseName");
const skillsList = document.getElementById("skillsList");
const studentCard = document.getElementById("studentCard");
const detailsDiv = document.getElementById("details");

// 1. Change Name
document.getElementById("changeName").addEventListener("click", () => {
    let newName = prompt("Enter new name:");
    if (newName) studentName.textContent = newName;
});

// 2. Change Course
document.getElementById("changeCourse").addEventListener("click", () => {
    let newCourse = prompt("Enter new course:");
    if (newCourse) courseName.textContent = newCourse;
});

// 3. Show Details
document.getElementById("showDetails").addEventListener("click", () => {
    detailsDiv.style.display = "block";
    detailsDiv.innerHTML = `
        <strong>Name:</strong> ${studentName.textContent} <br>
        <strong>Age:</strong> ${studentAge.textContent} <br>
        <strong>Course:</strong> ${courseName.textContent} <br>
        <strong>Total Skills:</strong> ${skillsList.children.length}
    `;
});

// 4. Highlight
document.getElementById("highlight").addEventListener("click", () => {
    studentCard.classList.add("highlight");
});

// 5. Remove Highlight
document.getElementById("removeHighlight").addEventListener("click", () => {
    studentCard.classList.remove("highlight");
});

// 6. Toggle Theme
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// 7. Add Skill
document.getElementById("addSkill").addEventListener("click", () => {
    let skill = prompt("Enter skill to add:");
    if (skill) {
        let li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    }
});

// 8. Remove Skill (last)
document.getElementById("removeSkill").addEventListener("click", () => {
    if (skillsList.lastElementChild) {
        skillsList.removeChild(skillsList.lastElementChild);
    }
});

// 9. Replace Skill
document.getElementById("replaceSkill").addEventListener("click", () => {
    let oldSkill = prompt("Which skill to replace? (e.g., CSS)");
    let newSkill = prompt("Enter new skill name:");
    const items = [...skillsList.children];
    const target = items.find(li => li.textContent.toLowerCase() === oldSkill.toLowerCase());
    if (target && newSkill) {
        target.textContent = newSkill;
    } else {
        alert("Skill not found!");
    }
});