 feature/us1-student-list
// Initial student list
let students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];


const main = document.querySelector("main"); // We'll append boxes here
// --- Render all students as boxes ---
function renderStudents() {
    // Remove existing dynamically added boxes (keep static ones like Lisa/Erik/Sara)
    const dynamicBoxes = document.querySelectorAll(".dynamic-person");
    dynamicBoxes.forEach(box => box.remove());
  
    // Add each student as a box
    students.forEach(student => {
      const div = document.createElement("div");
      div.classList.add("person", "dynamic-person");
      div.dataset.name = student.name;
      div.dataset.age = student.age;
      div.textContent = student.name;
  
     
  
      
  
    
  
      // Append after the button and UL (or at the end of main)
      main.appendChild(div);
    });
  }

  // Kör render-funktionen vid sidladdning
renderStudents();
=======
const persons = document.querySelectorAll(".person");
const infoBox = document.getElementById("info-box");

persons.forEach(person => {
  person.addEventListener("mouseenter", (e) => {
    const name = e.target.dataset.name;
    const age = e.target.dataset.age;

    infoBox.textContent = `${name} ${age} år`;
    infoBox.classList.add("show"); 
  });

  person.addEventListener("mousemove", (e) => {
    infoBox.style.top = e.pageY + 10 + "px";
    infoBox.style.left = e.pageX + 10 + "px";
  });

  person.addEventListener("mouseleave", () => {
    infoBox.classList.remove("show"); 
  });
});

