import React from "react";
import "../styles/Footer.css";
import { useLanguage } from "../language/useLanguage";

const Footer = ({ darkMode }) => {
  const { t } = useLanguage();

  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <div className="footer-content">
        <div className="footer-brand">
          <p className="footer-name">Ezequiel De Dominicis</p>
          <p className="footer-description">
            {t("footer_description")}
          </p>
        </div>

        <div className="footer-email">
          <a href="mailto:ezequieldedominicis@gmail.com">
            <span aria-hidden="true">📧</span>
            ezequieldedominicis@gmail.com
          </a>
        </div>

        <nav className="footer-social" aria-label={t("footer_social_label")}>
          <a
            href="https://www.linkedin.com/in/ezequiel-de-dominicis-435609205/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <img src="/linkedin.png" alt="" />
          </a>

          <a
            className="footer-social-github"
            href="https://github.com/DdEze"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <img src="/github.webp" alt="" />
          </a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ezequiel De Dominicis.
          {" "}{t("footer_rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;