import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const threshold = 10; // Lower threshold for more responsive feel
    
    if (scrollTop > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    // Check initial scroll position
    handleScroll();
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Left: Logo */}
      <div className="navbar-logo">
        <span> <Link to="/">Flomatix</Link></span>
      </div>
      
      {/* Center: Menu */}
      <div className="navbar-menu">
        <div className="dropdown">
          <Link to="/about" className="dropdown-trigger">Platform</Link>
          <div className="dropdown-content">
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/integrations">Integrations</Link>
          </div>
        </div>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
      {/* Right: Button */}
      <div className="navbar-action">
        <button 
          onClick={handleSignUpClick} 
          className='signup-btn'
          type="button"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
