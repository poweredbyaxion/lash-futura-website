import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // IMPORTANT: Replace "YOUR_FORMSPREE_ID" with your actual Formspree endpoint ID
    const formspreeEndpoint = 'https://formspree.io/f/meedebyz';
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Thank you for reaching out! Your message has been sent to the owner.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Oops! Please replace the Formspree ID in the code before submitting.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Get In <span className="text-accent">Touch</span></h2>
          <p>Ready to redefine your look? Book a consultation or appointment today.</p>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message">Message / Desired Service</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
