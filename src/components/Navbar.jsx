import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">De Dominicis Ezequiel</div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>Acerca de mí</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
        <li>
          <a
            href="/C.V.pdf"
            download="De_Dominicis_CV.pdf"
            className="download-cv"
            onClick={() => setMenuOpen(false)}
          >
            Descargar CV
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="toggle-dark"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;