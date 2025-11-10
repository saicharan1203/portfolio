import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-wrapper">
        <div className="about-info">
          <h2>About Me</h2>
          <p>
            B.Tech in Computer Science & Engineering (Data Science) student from Anil Neerukonda Institute of Technology & Sciences.
            I'm passionate about developing AI-driven solutions and full-stack applications.
          </p>
          <p>
            With experience in frontend development, AI/ML, and data science, I've worked on projects ranging from brain tumor detection systems to AI-powered career guidance platforms.
            My goal is to create innovative, scalable applications that solve real-world problems.
          </p>
          <div className="about-links">
            <a href="https://charan-techspace.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio Site</a>
            <a href="https://github.com/saicharan1203" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/koka-venkata-sai-charan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="about-skills">
          <h3>Skills</h3>
          <ul>
            <li>Python</li>
            <li>React & JavaScript</li>
            <li>HTML/CSS</li>
            <li>Flask</li>
            <li>MongoDB & SQL</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Power BI</li>
            <li>C & C++</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;