import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faCodeBranch,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../language/useLanguage";
import "../styles/About.css";

const About = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      id: "languages",
      title: t("skills_languages"),
      technologies: [
        { name: "Java", image: "/images/java.webp", imageClass: "logo-java" },
        { name: "JavaScript", image: "/images/javascript.webp", imageClass: "logo-javascript" },
        { name: "TypeScript", image: "/images/typescript.webp" },
        { name: "Python", image: "/images/python.webp" },
      ],
    },
    {
      id: "frontend",
      title: t("skills_frontend"),
      technologies: [
        { name: "React", image: "/images/react.webp", imageClass: "logo-react" },
        { name: "React Native", image: "/images/react-native.webp" },
        { name: "HTML", image: "/images/html.webp" },
        { name: "CSS", image: "/images/css.webp" },
      ],
    },
    {
      id: "backend",
      title: t("skills_backend"),
      technologies: [
        { name: "Node.js", image: "/images/nodejs.png", imageClass: "logo-node" },
        { name: "Express", image: "/images/express.png", imageClass: "logo-express" },
      ],
    },
    {
      id: "databases",
      title: t("skills_databases"),
      technologies: [
        { name: "MySQL", image: "/images/mysql.webp" },
        { name: "MongoDB", image: "/images/mongodb.webp" },
      ],
    },
    {
      id: "tools",
      title: t("skills_tools"),
      technologies: [
        { name: "Git", image: "/images/git.webp" },
        { name: "GitHub", image: "/github.webp" },
      ],
    },
  ];

  const patterns = [
    {
      icon: faLayerGroup,
      label: t("skill_mvc"),
    },
    {
      icon: faCogs,
      label: t("skill_repository"),
    },
    {
      icon: faCodeBranch,
      label: t("skill_rest"),
    },
  ];

  return (
    <section id="about" className="about">

      <nav className="about-index" aria-label={t("about_index_title")}>
        <span className="about-index-label">
          {t("about_index_title")}
        </span>

        <div className="about-index-links">
          <a href="#skills">{t("skills_title")}</a>
          <a href="#technical-knowledge">{t("skills_patterns")}</a>
          <a href="#current-state">{t("current_state_title")}</a>
          <a href="#education">{t("education_title")}</a>
          <a href="#publications">{t("publications_title")}</a>
        </div>
      </nav>

      <section
        id="about-intro"
        className="about-intro about-section"
      >
        <h2>{t("about_title")}</h2>

        <div className="about-intro-content">
          <p>{t("about_intro_1")}</p>
          <p>{t("about_intro_2")}</p>
        </div>
      </section>

      <section
        id="skills"
        className="skills-section about-section"
      >
        <h2>{t("skills_title")}</h2>

        <div className="skills-categories">
          {skillGroups.map((group) => (
            <div className="skills-category" key={group.id}>
              <h3>{group.title}</h3>

              <div className="skills-grid">
                {group.technologies.map((tech) => (
                  <div className="tech-card" key={tech.name}>
                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt={tech.name}
                        title={tech.name}
                        loading="lazy"
                        className={tech.imageClass || ""}
                      />
                    ) : (
                      <span
                        className="tech-text-logo"
                        aria-hidden="true"
                      >
                        {tech.name === "Express" ? "Ex" : "GH"}
                      </span>
                    )}

                    <span className="tech-name">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="technical-knowledge"
        className="technical-section about-section"
      >
        <h2>{t("skills_patterns")}</h2>

        <div className="skills-list">
          {patterns.map((pattern) => (
            <div className="skill-item" key={pattern.label}>
              <FontAwesomeIcon
                icon={pattern.icon}
                aria-hidden="true"
              />
              <span>{pattern.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="current-state"
        className="current-state about-section"
      >
        <h2>{t("current_state_title")}</h2>

        <div className="about-text-content">
          <p>{t("current_state_1")}</p>
          <p>{t("current_state_2")}</p>
          <p>{t("current_state_3")}</p>
          <p>{t("current_state_4")}</p>
        </div>
      </section>

      <section
        id="education"
        className="background about-section"
      >
        <h2>{t("education_title")}</h2>

        <div className="education-timeline">
          {[3, 2, 1].map((number) => (
            <article className="education-item" key={number}>
              <h3>{t(`education_${number}_title`)}</h3>

              <p className="education-institution">
                {t(`education_${number}_institution`)}
              </p>

              <p>{t(`education_${number}_desc`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="publications-section about-section">
        <h2>{t("publications_title")}</h2>

        <article className="publication-item">
          <p className="publication-event">
            {t("publication_1_event")}
          </p>

          <h3>{t("publication_1_title")}</h3>

          <p>{t("publication_1_desc")}</p>

          <a
            href="https://55jaiio.sadio.org.ar/wp-content/uploads/2026/07/328.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("publication_read_more")}
          </a>
        </article>
      </section>

    </section>
  );
};

export default About;