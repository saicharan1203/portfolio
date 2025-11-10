import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Driven Student Attendance & Performance Tracking',
      description: 'An intelligent system to monitor attendance, analyze performance trends, predict at-risk students, and provide dashboards for teachers and admins.',
      technologies: ['Python', 'SQL', 'Flask', 'Power BI', 'MongoDB']
    },
    {
      id: 2,
      title: 'Brain Tumor Detection System',
      description: 'Advanced medical imaging system using CNN and RNN for accurate tumor classification with skull stripping preprocessing.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'MATLAB']
    },
    {
      id: 3,
      title: 'Facial Expression Recognition System',
      description: 'Real-time emotion detection Flask application with face tracking, blurring, and data export capabilities.',
      technologies: ['Python', 'Flask', 'DeepFace', 'MediaPipe', 'OpenCV']
    },
    {
      id: 4,
      title: 'CareerVista AI - Career Guidance Platform',
      description: 'AI-powered platform providing personalized, data-based career guidance for 10th & 12th grade students using real-time exam data.',
      technologies: ['Python', 'Flask', 'React', 'MongoDB', 'AI/ML']
    }
  ];

  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <div className="projects-wrapper">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;