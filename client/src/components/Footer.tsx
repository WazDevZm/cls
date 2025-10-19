import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo.png" alt="CLS Logo" className="footer-logo-image" />
            <span>CLS</span>
          </div>
          <p>Code That Serves. Software That Delivers.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Software Development</li>
            <li>YouTube Services</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>hello@cls.com</p>
          <p>+1 (555) 123-4567</p>
          <p>Remote & Global</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 CLS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
