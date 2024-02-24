import React, { useState } from "react";
import logo from "./images/logo.svg";
import { pageLinks } from "./data";
import { socialLinks } from "./data";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <nav>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <ul className="nav-links">
        {pageLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="nav-items" onClick={closeMobileMenu}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="nav-icons">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} target="_blank" className="nav-icon">
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <button
        id="menu-btn"
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        type="button"
        onClick={toggleMobileMenu}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        id="menu"
      >
        <ul className="mobile-nav-links">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="nav-items"
                onClick={closeMobileMenu}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        
        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} target="_blank" className="nav-icon">
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;