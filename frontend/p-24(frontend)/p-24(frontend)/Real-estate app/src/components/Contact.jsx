import React from 'react';
import Navbar from './Navbar';

function Contact() {
  return (
    <>
      <Navbar hideAuthLinks={true} />
      <div className="main-contact">
        <div className="contact-container">
          <h1 className="contact-header">Contact Us</h1>
          <p className="contact-description">
            We'd love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out.
          </p>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="inputs" placeholder="Your Full Name" required/>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="inputs" placeholder="Your Email Address" required/>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" className="inputs" placeholder="Your Message..." required></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Our Office</h2>
            <p><strong>Address:</strong> 123 Travel Street, Wanderlust City, 45678</p>
            <p><strong>Email:</strong> <a href="mailto:support@traveler.com">support@homehive.com</a></p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
