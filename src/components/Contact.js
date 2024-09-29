import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn symbol from react-icons

const Contact = () => {
  const [showLinkedInImage, setShowLinkedInImage] = useState(false);

  const handleLinkedInClick = () => {
    setShowLinkedInImage(!showLinkedInImage); // Toggle LinkedIn image display
  };

  return (
    <section id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Name: Megavath Venkatesh</p>
        <p>Email: <a href="mailto:venkateshmegavath75@gmail.com">venkateshmegavath75@gmail.com</a></p>
        <p>Phone: <a href="tel:+916305068227">+91 6305068227</a></p>
        <p>
          LinkedIn: 
          <FaLinkedin className="linkedin-icon" onClick={handleLinkedInClick} />
        </p>

        {/* LinkedIn image toggle */}
        {showLinkedInImage && (
          <div className="linkedin-image-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
              alt="LinkedIn Profile"
              className="linkedin-image"
            />
            <p>
              <a href="https://www.linkedin.com/in/megavathvenkatesh/" target="_blank" rel="noopener noreferrer">
                View LinkedIn Profile
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
