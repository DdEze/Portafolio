import React from "react";
import "../styles/Footer.css";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <div className="email">
        <p>Email: ezequieldedominicis@gmail.com</p>
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/ezequiel-de-dominicis-435609205/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/DdEze" target="_blank" rel="noopener noreferrer">
          <img src="/github.webp" alt="GitHub" />
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Ezequiel De Dominicis</p>
      </div>
    </footer>
  );
};

export default Footer;