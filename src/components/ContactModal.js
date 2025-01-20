import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [referral, setReferral] = useState('');

  const handleSubmit = () => {
    // Here you would normally handle the form submission
    // For now, just close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-body">
          <h2>How can we help<span className="dot">.</span></h2>
          
          <div className="form-group">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              rows={5}
            />
          </div>

          <div className="form-group">
            <label>How did you find us</label>
            <input
              type="text"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              placeholder="Enter referral source..."
            />
          </div>

          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 