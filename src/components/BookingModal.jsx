import React from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content ghl-modal animate-fade-in" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {/* GoHighLevel Calendar Embed Code Placeholder */}
        {/* Replace the src URL below with your actual GHL Calendar URL */}
        <div className="ghl-iframe-container">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID"
            style={{ width: '100%', border: 'none', overflow: 'hidden' }}
            scrolling="no"
            id="YOUR_CALENDAR_ID"
            title="Booking Calendar"
          ></iframe>
          <script src="https://api.leadconnectorhq.com/js/form_embed.js" type="text/javascript"></script>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
