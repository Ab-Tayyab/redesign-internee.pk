import React, { useState, useEffect } from "react";
import "./Navbar.css";
import img from "../../assest/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
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
          <img src={img} alt="logo" />
        </div>
        <div>
          <ul className="navbar-list">
            <li>Internship</li>
            <li>Company Collaboration</li>
            <li>Contact Us</li>
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
          <li>Internship</li>
          <li>Company Collaboration</li>
          <li>Contact Us</li>
          <li className="menu-portal">Job Portal</li>
          <li className="menu-login">Internee Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
