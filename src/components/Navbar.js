import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      {/* Overlay for blur and blocking clicks */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      {/*burger icons*/}
      <div className="navbar">
        <div className="burger-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className ="arrow" onClick={toggleMenu}>Back</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <a href="#" onClick={toggleDarkMode} className={isDarkMode ? 'on' : ''}>
                Dark Mode
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
