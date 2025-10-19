import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <div className="logo-icon">CLS</div>
        CLS
      </Link>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      
      <Link to="/contact" className="cta-button">
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
