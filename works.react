import React from 'react';
import './Works.css';
import githubLogo from './github-logo.jpg';

const projects = [
  {
    title: 'My Digital Showcase',
    githubLink: 'https://github.com/YourGithub/my-digital-showcase',
    description: 'I crafted a digital showcase - my portfolio website - to flaunt my projects and skills.',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
    image: 'portfolio-image.jpg'
  },
  {
    title: 'SkyWatch',
    githubLink: 'https://github.com/YourGithub/skywatch',
    description: 'SkyWatch is a dynamic React JS weather app showcasing temperature, region, and local time display.',
    skills: ['React'],
    image: 'weather-icons.png'
  }
];

function Works() {
  return (
    <section className="works-section">
      <h2>Works</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="project-link">
                <span>Have a look</span>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub Link" />
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
