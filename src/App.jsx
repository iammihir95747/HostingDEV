import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Components/Home/Home'
import Signup from './Components/Auth/Signup'
import Navbar from './Components/Home/Navbar'
import Products from './Pages/Products'
import Chatbot from './Pages/Chatbot'
import About from './Masterpages/About'
  
function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-right" />
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    
    </Router>

  )
}

export default App