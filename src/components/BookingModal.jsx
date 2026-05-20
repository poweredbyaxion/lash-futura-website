import React from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content ghl-modal animate-fade-in" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {/* Safety Net Fallback Message (Behind the iframe) */}
        <div className="ghl-fallback">
          <h3>Loading Calendar...</h3>
          <p>If the calendar doesn't load or if you have an ad-blocker on, you can book securely below.</p>
          <a href="https://squareup.com/appointments/book/0v2i4j667ase9t/L88F5TGCMWV1E/start" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Directly on Square</a>
        </div>

        {/* Square Appointments Embed Code */}
        <div className="ghl-iframe-container" style={{ WebkitOverflowScrolling: 'touch' }}>
          <iframe
            src="https://app.squareup.com/appointments/buyer/widget/0v2i4j667ase9t/L88F5TGCMWV1E"
            style={{ width: '100%', height: '100%', minHeight: '500px', border: 'none' }}
            title="Square Booking Calendar"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
