import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Let's connect and create something amazing together. Feel free to reach out about opportunities or just to say hello!</p>
          <div className="contact-details">
            <p>📧 <strong>Email:</strong> kokacharan2003@gmail.com</p>
            <p>📱 <strong>Phone:</strong> 6301550164</p>
            <p>📍 <strong>Location:</strong> Visakhapatnam, India</p>
            <div className="social-links">
              <a href="https://github.com/saicharan1203" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/koka-venkata-sai-charan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://charan-techspace.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;