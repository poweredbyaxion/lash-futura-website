import React from 'react';
import './Services.css';
import { Eye, Sparkles, Feather, Droplets } from 'lucide-react';

const services = [
  {
    icon: <Eye size={32} />,
    title: 'Classic Extensions',
    description: 'A perfect 1:1 ratio. One extension applied to one natural lash for a flawless, everyday authentic look.'
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Volume Lashes',
    description: 'Multiple lightweight extensions fanned and applied to a single natural lash for bold, standout drama.'
  },
  {
    icon: <Feather size={32} />,
    title: 'Hybrid Sets',
    description: 'The best of both worlds. A customized blend of Classic and Volume for a textured, futuristic flutter.'
  },
  {
    icon: <Droplets size={32} />,
    title: 'Lash Lift & Tint',
    description: 'Elevate your natural lashes. A semi-permanent lift and color boost that makes your eyes pop.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our <span className="text-accent">Services</span></h2>
        <p className="section-subtitle">Tailored artistry for the modern gaze.</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
