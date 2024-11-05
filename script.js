document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', event => {
    const section = document.getElementById(event.target.id);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
