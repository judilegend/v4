import React, { useState } from "react";
import Contact from "./contact";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">
          Logo
        </a>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>
              Products
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>
              About us
            </a>
          </li>
          <li className="nav-contact">
            <Contact />
          </li>
        </ul>
      </div>
    </nav>
  );
}
