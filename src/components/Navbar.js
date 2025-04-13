import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isDarkMode,setIsDarkMode] = useState(false);
  const darkmode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    
    <div className="App">
      <div className="burger-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div><ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <a href="#" 
            onClick={darkmode} 
            className={`${isDarkMode ? 'on': ''}`}>Dark mode</a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
