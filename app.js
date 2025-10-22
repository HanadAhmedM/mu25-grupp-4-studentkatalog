 
 // --- Studentdata ---
const students = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 22, active: true },
  ];
  
  // --- Elementreferenser ---
  const main = document.querySelector("main");
  const infoBox = document.getElementById("info-box");
  const addButton = document.getElementById("add-student");
  const studentList = document.getElementById("student-list");
  
  
  
  // --- Rendera dynamiska studentrutor ---
  function renderStudentBoxes() {
    // Ta bort tidigare dynamiska rutor
    document.querySelectorAll(".dynamic-person").forEach((el) => el.remove());
  
    students.forEach((student, index) => {
      const div = document.createElement("div");
      div.classList.add("person", "dynamic-person");
      div.dataset.name = student.name;
      div.dataset.age = student.age;
      div.dataset.index = index;
      div.textContent = `${student.name} ${student.active ? "🟢" : "🔴"}`;
      div.style.border = student.active ? "2px solid #2ecc71" : "2px solid #e74c3c";
  
      // Klicka för att ändra aktiv status
      div.addEventListener("click", () => {
        student.active = !student.active;
        renderStudentList();
        renderStudentBoxes();
      });
  
      main.appendChild(div);
    });
  
    attachHoverEvents(); // gör så hover fungerar
  }
  
  // --- Hover-effekt för alla rutor (även statiska) ---
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
  
  // --- Lägg till ny student ---
  addButton.addEventListener("click", () => {
    const newStudent = { name: "Ny Student", age: 20, active: false };
    students.push(newStudent);
    renderStudentList();
    renderStudentBoxes();
  });
  
  // --- Kör vid sidladdning ---

  renderStudentBoxes();