import React, { useState } from 'react';
import './Signup.css';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSuccess(true);
    
    try{
      const response = await axios.post('http://localhost:5001/api/users' , {username, email, password})
      console.log(response.data);
      // Keep success state for animation
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }
    catch(error){
      console.log(error);
      setIsSuccess(false);
    }
  };

  return (
    <div className='signup-container'>
      <div className="signup-box">
        <h1 className="signup-title">Create Account</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              id="username"
              className="signup-input"
              type="text"
              placeholder=" "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-group">
            <input
              id="email"
              className="signup-input"
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <input
              id="password"
              className="signup-input"
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className={`signup-button ${isSuccess ? 'success' : ''}`}>
            <span>{isSuccess ? 'Success!' : 'Sign Up'}</span>
          </button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <div className="social-signup">
          <button className="social-btn google-btn" style={{ backgroundColor: 'black', color: 'white' , fontFamily: 'sans-serif' }}>
            <FcGoogle size={18} />
            <span>Sign Up with Google</span>
          </button>
        </div>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;