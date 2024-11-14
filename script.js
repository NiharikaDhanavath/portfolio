// Smooth scroll for navigation buttons
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', event => {
    const section = document.getElementById(event.target.id);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Skill progress values
const skillProgress = {
  "html-bar": 80,
  "python-bar": 80,
  "css-bar": 70,
  "javascript-bar": 85,
  "angular-bar": 75,
  "devops-bar": 80,
  "node-bar": 60,
  "react-bar": 65,
  "git-bar": 90,
  "artificialintelligence-bar": 90,
  "machinelearning-bar": 70
};

// Function to animate the progress bars
function animateProgressBars() {
  Object.keys(skillProgress).forEach(id => {
    const bar = document.getElementById(id);
    bar.style.width = skillProgress[id] + '%';
  });
}

// Function to check if the Skills section is in view
function isSkillsSectionInView() {
  const skillsSection = document.querySelector('.skills-section');
  const rect = skillsSection.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Event listener for scrolling to trigger the skill animation
window.addEventListener('scroll', () => {
  if (isSkillsSectionInView()) {
    if (!skillsAnimated) {
      animateProgressBars();
      skillsAnimated = true;
    }
  } else {
    // Reset animation flag when section is out of view
    skillsAnimated = false;
    // Reset bar widths if you want them to animate again
    Object.keys(skillProgress).forEach(id => {
      const bar = document.getElementById(id);
      bar.style.width = '0%';
    });
  }
});
