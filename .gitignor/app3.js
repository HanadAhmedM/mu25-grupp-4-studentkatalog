// --- Data ---
const students = [
  { name: 'Anna Svensson', age: 24, active: true },
  { name: 'Kalle Karlsson', age: 22, active: false },
  { name: 'Sara Lind', age: 27, active: true },
];

// --- Tooltip-element ---
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

// --- Rendera studenter ---
function renderStudents() {
  const list = document.getElementById('student-list');
  list.innerHTML = '';

  students.forEach(student => {
    const li = document.createElement('li');
    li.className = student.active ? 'active' : 'inactive';

    const text = document.createElement('span');
    text.textContent = student.name;

    // --- Tooltip: visa åldern när musen går över namnet ---
    text.addEventListener('mouseover', (e) => {
      tooltip.textContent = `${student.age} år gammal`;
      tooltip.style.left = e.pageX + 'px';
      tooltip.style.top = (e.pageY - 30) + 'px';
      tooltip.classList.add('show');
    });

    text.addEventListener('mousemove', (e) => {
      tooltip.style.left = e.pageX + 'px';
      tooltip.style.top = (e.pageY - 30) + 'px';
    });

    text.addEventListener('mouseleave', () => {
      tooltip.classList.remove('show');
    });

    // --- Knapp för status ---
    const button = document.createElement('button');
    button.textContent = student.active ? '🟢 Aktiv' : '🔴 Inaktiv';
    button.addEventListener('click', () => {
      student.active = !student.active;
      renderStudents();
    });

    // --- Lägg till i listan ---
    li.appendChild(text);
    li.appendChild(button);
    list.appendChild(li);
  });
}

// --- Lägg till ny student ---
const addButton = document.getElementById('add-student-btn');
addButton.addEventListener('click', () => {
  const newStudent = { name: 'Ny Student', age: 20, active: false };
  students.push(newStudent);
  renderStudents();
});

// --- Kör direkt vid sidladdning ---
renderStudents();
