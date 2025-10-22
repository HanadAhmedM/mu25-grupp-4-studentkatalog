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
