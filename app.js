// --- Elementreferenser ---
const main = document.querySelector("main");
const infoBox = document.getElementById("info-box");
const addButton = document.getElementById("add-student");

// --- Läs in statiska studenter från HTML ---
const htmlStudents = Array.from(document.querySelectorAll(".person")).map((el, i) => ({
  name: el.dataset.name,
  age: el.dataset.age,
  active: i % 2 === 0 // startstatus: Lisa & Sara aktiva, Erik inaktiv
}));

// --- Lägg till dynamiska studenter ---
const students = [ // ändrad av branch app.js
  ...htmlStudents, // Lisa, Erik, Sara från HTML
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 22, active: true },
];

// --- Uppdatera alla studenter (HTML + dynamiska) ---
function renderStudentBoxes() {
  // Ta bort tidigare dynamiska rutor
  document.querySelectorAll(".dynamic-person").forEach((el) => el.remove());

  // Rensa eventListeners från HTML-elementen så de inte dubblas
  document.querySelectorAll(".person").forEach((el) => {
    const newEl = el.cloneNode(true);
    el.parentNode.replaceChild(newEl, el);
  });

  students.forEach((student, index) => {
    // Om studenten redan finns i HTML, uppdatera bara utseendet
    const existingEl = document.querySelector(`.person[data-name="${student.name}"]`);
    if (existingEl) {
      existingEl.textContent = `${student.name} ${student.active ? "🟢" : "🔴"}`;
      existingEl.style.border = student.active
        ? "2px solid #2ecc71"
        : "2px solid #e74c3c";

      existingEl.addEventListener("click", () => {
        student.active = !student.active;
        renderStudentBoxes(); // Uppdatera allt
      });
      return;
    }

    // Annars skapa en ny dynamisk studentruta
    const div = document.createElement("div");
    div.classList.add("person", "dynamic-person");
    div.dataset.name = student.name;
    div.dataset.age = student.age;
    div.textContent = `${student.name} ${student.active ? "🟢" : "🔴"}`;
    div.style.border = student.active
      ? "2px solid #2ecc71"
      : "2px solid #e74c3c";

    div.addEventListener("click", () => {
      student.active = !student.active;
      renderStudentBoxes();
    });

    main.appendChild(div);
  });

  attachHoverEvents();
}

// --- Tooltip (hover) för namn och ålder ---
function attachHoverEvents() {
  document.querySelectorAll(".person").forEach((person) => {
    person.addEventListener("mousemove", (e) => {
      const name = person.dataset.name;
      const age = person.dataset.age;
      infoBox.textContent = `${name}, ${age} år`;
      infoBox.style.left = e.pageX + 10 + "px";
      infoBox.style.top = e.pageY + 10 + "px";
      infoBox.classList.add("show");
    });

    person.addEventListener("mouseleave", () => {
      infoBox.classList.remove("show");
    });
  });
}



renderStudentBoxes();
