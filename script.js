document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', event => {
    const section = document.getElementById(event.target.id);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
// Skill progress values
const skillProgress = {
  "html-bar": 80,
  "css-bar": 70,
  "js-bar": 85,
  "angular-bar": 75,
  "node-bar": 60,
  "react-bar": 65,
  "git-bar": 90,
  "gaming-bar": 50
};

// Function to animate the progress bars
function animateProgressBars() {
  Object.keys(skillProgress).forEach(id => {
    const bar = document.getElementById(id);
    bar.style.width = skillProgress[id] + '%';
  });
}

// Event listener for scrolling to trigger the skill animation
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills-section');
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    animateProgressBars();
  }
});
