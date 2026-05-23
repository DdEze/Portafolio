import React from "react";
import { Link } from "react-router-dom";
import TerminalDemo from "../components/TerminalDemo";
import { useLanguage } from "../language/useLanguage";
import "../styles/Home.css";

const Home = () => {
  const { t } = useLanguage();

  const techStack = [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "React Native",
    
  ];

  return (
    <section id="home" className="home">
      <div className="hero-content">

        <h1>
          <span>De Dominicis</span> Ezequiel
        </h1>

        <h2>{t("home_role")}</h2>

        <p className="hero-description">
          {t("home_desc_1")}
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary-btn">
            {t("home_projects")}
          </Link>

          <a
            href="/C.V.pdf"
            download="De_Dominicis_CV.pdf"
            className="btn secondary-btn"
          >
            {t("home_download_cv")}
          </a>
        </div>

        <div className="home-extra">
           <p>{t("home_desc_2")}</p>
        </div>

        <div className="tech-stack">
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