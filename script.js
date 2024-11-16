
 document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");

  skills.forEach(skill => {
    const percentage = skill.getAttribute("data-skill");
    const color = skill.getAttribute("data-color");

    const circle = skill.querySelector(".circle");
    circle.style.setProperty("--percentage", percentage);
    circle.style.setProperty("border-color

