
import React from "react";
import { Link } from "react-router-dom";
import TerminalDemo from "../components/TerminalDemo";
import { useLanguage } from "../language/useLanguage";
import "../styles/Home.css";

const Home = () => {
  const { t } = useLanguage();

  const techStack = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <section id="home" className="home">
      <div className="hero-content">
        <header className="hero-header">
          <h1>Ezequiel De Dominicis</h1>
          <h2>{t("home_role")}</h2>
        </header>

        <p className="hero-description">
          {t("home_desc_1")}
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary-btn">
            {t("home_projects")}
          </Link>

          <a
            href="/C.V.pdf"
            download="Ezequiel_De_Dominicis_CV.pdf"
            className="btn secondary-btn"
          >
            {t("home_download_cv")}
          </a>
        </div>

        <p className="home-extra">
          {t("home_desc_2")}
        </p>

        <div
          className="tech-stack"
          aria-label="Technologies"
        >
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <TerminalDemo />
      </div>
    </section>
  );
};

export default Home;