import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`sticky top-0 z-50 w-full backdrop-blur-md shadow-lg transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 border-b border-gray-200' 
        : 'bg-white/70'
    }`}>
      <div className="nav-container flex justify-between items-center px-8 py-4">
        {/* Left Side - Logo and Menu */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="nav-logo">
            <h1 className='text-3xl font-extrabold cursor-pointer'>
              <Link to="/" onClick={handleLinkClick} className="text-gray-900 hover:text-blue-600 transition-colors">
                Formatix
              </Link>
            </h1>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-900 flex items-center focus:outline-none font-medium"
                type="button"
                tabIndex={0}  
              >
                <Link to="/products" className='text-gray-900 hover:text-blue-600 transition-colors'>Products</Link>
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md text-gray-900 rounded-lg shadow-lg z-20 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-100 border border-gray-200">
                <Link
                  to="/products/chatbot"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-900"
                  onClick={handleLinkClick}
                >
                  Chatbot
                </Link>
              </div>
            </div>
            
            <Link to="/about" className='text-gray-900 hover:text-blue-600 transition-colors font-medium' onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className='text-gray-900 hover:text-blue-600 transition-colors font-medium' onClick={handleLinkClick}>Contact</Link>
          </div>
        </div>

        {/* Right Side - Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className='text-black px-4 py-2 rounded-lg text-lg font-semibold transition-colors hover:text-blue-600' 
          onClick={() => navigate('/login')}>Login</button>
          <button className='bg-black text-white px-6 py-2 rounded-lg text-lg font-semibold transition-colors hover:bg-gray-800' 
          onClick={() => navigate('/signup')}>Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 focus:outline-none transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Links */}
        <div className={`absolute top-full left-0 w-full md:hidden transition-all duration-500 ease-in-out transform ${
          isMenuOpen 
            ? 'opacity-100 max-h-96 translate-y-0' 
            : 'opacity-0 max-h-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-4 p-4 border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-lg">
            <Link to="/products" className='text-gray-900 hover:text-blue-600 transition-colors font-medium' onClick={handleLinkClick}>Products</Link>
            <Link to="/about" className='text-gray-900 hover:text-blue-600 transition-colors font-medium' onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className='text-gray-900 hover:text-blue-600 transition-colors font-medium' onClick={handleLinkClick}>Contact</Link>
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <button className='text-black px-4 py-2 rounded-lg text-lg font-semibold transition-colors hover:text-blue-600' 
              onClick={() => navigate('/login')}>Login</button>
              <button className='bg-black text-white px-6 py-2 rounded-lg text-lg font-semibold transition-colors hover:bg-gray-800' 
              onClick={() => navigate('/signup')}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar