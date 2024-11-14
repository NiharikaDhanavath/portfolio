// Smooth scroll for navigation buttons
document.querySelectorAll('nav a').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const section = document.querySelector(button.getAttribute('href'));
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

// Flag to ensure the animation is triggered only once per view
let skillsAnimated = false;

// Function to animate the progress bars
function animateProgressBars() {
  Object.keys(skillProgress).forEach(id => {
    const bar = document.getElementById(id);
    if (bar) {
      bar.style.width = skillProgress[id] + '%';
    }
  });
}

// Function to check if the Skills section is in view
function isSkillsSectionInView() {
  const skillsSection = document.querySelector('.skills-section');
  if (!skillsSection) return false;
  const rect = skillsSection.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Scroll event listener to trigger the skill animation once
window.addEventListener('scroll', () => {
  if (isSkillsSectionInView() && !skillsAnimated) {
    animateProgressBars();
    skillsAnimated = true;
  } else if (!isSkillsSectionInView() && skillsAnimated) {
    skillsAnimated = false;
    // Reset bar widths for re-animation if desired
    Object.keys(skillProgress).forEach(id => {
      const bar = document.getElementById(id);
      if (bar) {
        bar.style.width = '0%';
      }
    });
  }
});
