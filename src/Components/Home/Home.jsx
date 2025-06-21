import React from 'react';
import './Home.css';
import Dashboardillu from '../../Images/Dashboardillu.jpg';

const Home = () => {
  return (
    <div className="homepage-container">
      {/* Enhanced Animated Background */}
      <div className="homepage-animated-bg">
        {/* Parallax Background Layers */}
        <div className="parallax-bg">
          <div className="parallax-layer"></div>
          <div className="parallax-layer"></div>
          <div className="parallax-layer"></div>
        </div>
        
        {/* Animated Grid Pattern */}
        <div className="grid-pattern"></div>
        
        {/* Particle System */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="glow-orb"></div>
        <div className="glow-orb"></div>
        <div className="glow-orb"></div>
        
        {/* Floating Shapes */}
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        
        {/* Original Animated Background Circles */}
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>

      {/* Hero Section with Animated Text and Image */}
      <div className="homepage-hero">
        <h1 className="homepage-title animated-title">
          <span className="glow">Flomatix</span>
        </h1>
        <h2 className="homepage-main-slogan animated-slogan">
          <span className="gradient-text">Elevate Your Workflow</span>
        </h2>
        <p className="homepage-subtitle animated-subtitle">
          <span>
            Experience the future of productivity with <b>stunning animations</b>, <b>AI-powered tools</b>, and a <b>sleek, modern interface</b>.
          </span>
        </p>
        <a href="#" className="homepage-btn animated-btn">
          Get Started
        </a>
        {/* Animated Hero Image */}
        
      </div>

      {/* Features Section */}
      <div className="homepage-features">
        <div className="feature-card animate-fadein feature-card-hover">
          <div className="feature-icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h3>Ultra Fast</h3>
          <p>Lightning-fast load times and seamless experience on any device.</p>
        </div>
        <div className="feature-card animate-fadein-delay1 feature-card-hover">
          <div className="feature-icon">
            <i className="fas fa-magic"></i>
          </div>
          <h3>Modern Animations</h3>
          <p>Engaging, smooth animations that bring your site to life.</p>
        </div>
        <div className="feature-card animate-fadein-delay2 feature-card-hover">
          <div className="feature-icon">
            <i className="fas fa-lock"></i>
          </div>
          <h3>Secure</h3>
          <p>Top-notch security to keep your data safe and private.</p>
        </div>
        <div className="feature-card animate-fadein-delay3 feature-card-hover">
          <div className="feature-icon">
            <i className="fas fa-brain"></i>
          </div>
          <h3>AI Powered</h3>
          <p>Smart suggestions and automation to boost your productivity.</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="homepage-cta animated-cta">
        <h2 className="cta-title">
          <span className="gradient-text">Ready to get started?</span>
        </h2>
        <a href="#" className="homepage-btn homepage-btn-cta">
          Try Flomatix Free
        </a>
      </div>
    </div>
  );
};

export default Home;
