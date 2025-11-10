import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Koka Venkata Sai Charan</h1>
      <p>Full Stack Developer | AI & Data Science Enthusiast</p>
      <div className="hero-contact-info">
        <span>📧 kokacharan2003@gmail.com</span>
        <span>📱 6301550164</span>
      </div>
      <div className="hero-btns">
        <button className="btn">View My Work</button>
        <button className="btn">Contact Me</button>
      </div>
    </div>
  );
};

export default HeroSection;