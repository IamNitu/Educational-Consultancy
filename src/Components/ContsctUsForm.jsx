import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="banner">
        <h2>Talk To Our Professional Team Now</h2>
      </div>
      <div className="form-wrapper">
        <h3>Send Us A Message</h3>
        <form className="contact-form">
          <div className="form-group double">
            <div className="form-field">
              <label>Name*</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-field">
              <label>Phone*</label>
              <input type="text" name="phone" required />
            </div>
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5"></textarea>
          </div>
          <button type="submit" className="send-button">Send Now →</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
