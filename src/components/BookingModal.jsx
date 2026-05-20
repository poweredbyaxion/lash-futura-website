import React, { useState } from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    service: 'Full Set (Classic/Volume)',
    name: '',
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment Request Sent for ${formData.date} at ${formData.time}!`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Book Your <span className="text-accent">Session</span></h2>
        <p>Select a date and time to reserve your spot.</p>
        
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" name="time" required value={formData.time} onChange={handleChange} />
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="service">Service</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange}>
              <option>Full Set (Classic/Volume) - $130</option>
              <option>Half Set / Fill - $65</option>
              <option>Lash Lift & Tint - $80</option>
              <option>Removal - $30</option>
            </select>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
