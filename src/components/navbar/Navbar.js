import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../../assest/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Close menu on selecting a link
  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1150 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={img} alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="navbar-list">
            <Link to="/internship" className="list-style" onClick={closeMenu}>
              <li className="navbar-list-item">Internship</li>
            </Link>
            <Link to="/company" className="list-style" onClick={closeMenu}>
              <li className="navbar-list-item">Company Collaboration</li>
            </Link>
            <Link to="/contact" className="list-style" onClick={closeMenu}>
              <li className="navbar-list-item">Contact Us</li>
            </Link>
            <li className="portal">Job Portal</li>
            <li className="login">Internee Login</li>
          </ul>
        </div>
        <div className="toggle-btn" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? "open" : "close"}`}>
        <ul className="mobile-menu-list">
          <Link to="/internship" className="list-style" onClick={closeMenu}>
            <li className="mobile-list-item">Internship</li>
          </Link>
          <Link to="/company" className="list-style" onClick={closeMenu}>
            <li className="mobile-list-item">Company Collaboration</li>
          </Link>
          <Link to="/contact" className="list-style" onClick={closeMenu}>
            <li className="mobile-list-item">Contact Us</li>
          </Link>
          <li className="menu-portal">Job Portal</li>
          <li className="menu-login">Internee Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
