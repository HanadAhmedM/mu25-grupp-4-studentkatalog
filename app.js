 const students = [
  { name: 'Anna Svensson', age: 24, active: true },
  { name: 'Kalle Karlsson', age: 22, active: false },
  { name: 'Sara Lind', age: 27, active: true },
];

function renderStudents() {
  const list = document.getElementById('student-list');
  list.innerHTML = '';

  students.forEach((student, index) => {
    const li = document.createElement('li');
    li.className = student.active ? 'active' : 'inactive';
    
    // Skapa texten
    const text = document.createElement('span');
    text.textContent = `${student.name}`;
    
    // Skapa statusknappen
    const button = document.createElement('button');
    button.textContent = student.active ? '🟢 Aktiv' : '🔴 Inaktiv';
    button.style.marginLeft = '1rem';
    
    // Lägg till klick-funktion
    button.addEventListener('click', () => {
      student.active = !student.active; // Växla status
      renderStudents(); // Rendera om listan
    });

    li.appendChild(text);
    li.appendChild(button);
    list.appendChild(li);
  });
  attachHoverEvents(); // gör så hover fungerar
}

// Lägg till student
document.getElementById('add-student-btn').addEventListener('click', () => {
  students.push({ name: 'Ny Student', age: 20, active: false });
  renderStudents();
});

renderStudents();


  
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