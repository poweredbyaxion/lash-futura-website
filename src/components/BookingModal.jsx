import React from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content ghl-modal animate-fade-in" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {/* Square Appointments Embed Code Placeholder */}
        {/* Replace the src URL below with your actual Square Appointments Booking Link */}
        <div className="ghl-iframe-container" style={{ WebkitOverflowScrolling: 'touch' }}>
          <iframe
            src="https://squareup.com/appointments/book/YOUR_SQUARE_LINK"
            style={{ width: '100%', height: '100%', minHeight: '500px', border: 'none' }}
            title="Square Booking Calendar"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
