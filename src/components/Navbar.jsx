import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">De Dominicis Ezequiel</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca de mí</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
        <li>
          <a href="/C.V.pdf" download="De_Dominicis_CV.pdf" className="download-cv">
            Descargar CV
          </a>
        </li>
        <li>
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-dark">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;