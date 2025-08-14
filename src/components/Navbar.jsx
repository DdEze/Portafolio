import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useLanguage } from "../language/useLanguage";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, toggleLanguage, lang } = useLanguage();

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">De Dominicis Ezequiel</div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>{t("nav_home")}</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>{t("nav_about")}</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>{t("nav_projects")}</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{t("nav_contact")}</Link></li>
          <li>
            <a
              href="/C.V.pdf"
              download="De_Dominicis_CV.pdf"
              className="download-cv"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav_download")}
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
          <li>
            <button
              onClick={() => {
                toggleLanguage();
                setMenuOpen(false);
              }}
              className="toggle-lang"
            >
              🌐 {lang === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;