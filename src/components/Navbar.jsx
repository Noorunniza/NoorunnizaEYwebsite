import React, { useState } from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin,FaInstagram, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu after clicking
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <h2 className="nav-logo">Noorunniza</h2>

      {/* DESKTOP MENU */}
      <ul className="nav-menu">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("experience")}>Experience</li>
        <li onClick={() => scrollToSection("education")}>Education</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="nav-social">
        <a href="https://github.com/Noorunniza" target="_blank" rel="noreferrer">
          <FaGithub className="nav-icon" />
        </a>

        <a href="https://linkedin.com/in/noorunniza-e-y" target="_blank" rel="noreferrer">
          <FaLinkedin className="nav-icon" />
        </a>
        <a href="https://instagram.com/noorunniza_" target="_blank" rel="noreferrer">
    <FaInstagram className="nav-icon" />
  </a>
      </div>

      {/* MOBILE MENU ICON */}
      <div 
        className="hamburger-icon" 
        onClick={() => setMenuOpen(true)}
      >
        <FaBars size={24} />
      </div>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <FaTimes className="close-btn" onClick={() => setMenuOpen(false)} />

        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("experience")}>Experience</li>
          <li onClick={() => scrollToSection("education")}>Education</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <div className="mobile-social">
          <a href="https://github.com/Noorunniza" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/noorunniza-e-y" target="_blank"><FaLinkedin /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
