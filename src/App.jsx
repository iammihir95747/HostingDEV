import React from 'react';
import Navbar from './Components/Home/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Auth/Signup';

const AppContent = () => {
  const location = useLocation();
  const isSignupPage = location.pathname === '/signup';

  return (
    <div>
      {isSignupPage ? (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '80px',
        }}>
          <h1 style={{ margin: 0, color: '#667eea', fontSize: '24px' }}>LOGO</h1>
        </div>
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path='/' element={<Home />} />
    
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
};

export default App;
