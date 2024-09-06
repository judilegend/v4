import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are passionate about delivering delicious food to your doorstep.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@foodapp.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              Facebook
            </a>
            <a href="#" className="social-icon">
              Twitter
            </a>
            <a href="#" className="social-icon">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 FoodApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
