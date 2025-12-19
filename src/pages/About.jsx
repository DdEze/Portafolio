import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faCodeBranch, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import "../styles/About.css";
import { useLanguage } from "../language/useLanguage";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="about-intro">
        <h2>{t("about_title")}</h2>
        <p>{t("about_intro_1")}</p>
        <p>{t("about_intro_2")}</p>
        <p>{t("about_intro_3")}</p>
        <p>{t("about_intro_4")}</p>
      </div>

      <div className="skills-section skills">
        <h2>{t("skills_title")}</h2>
        <h3>{t("skills_languages")}</h3>
        <div className="skills-grid">
          <img src="/images/java.webp" alt="Java" title="Java" />
          <img src="/images/javascript.webp" alt="JavaScript" title="JavaScript" />
          <img src="/images/python.webp" alt="Python" title="Python" />
          <img src="/images/ruby.webp" alt="Ruby" title="Ruby" />
          <img src="/images/typescript.webp" alt="TypeScript" title="TypeScript" />
        </div>
      </div>
      <div className="skills-section">
        <h3>{t("skills_frameworks")}</h3>
        <div className="skills-grid">
          <img src="/images/react.webp" alt="React" title="React" />
          <img src="/images/react-native.webp" alt="TypeScript" title="TypeScript" />
          <img src="/images/ruby_on_rails.webp" alt="Ruby on Rails" title="Ruby on Rails" />
          <img src="/images/nodejs.webp" alt="Node.js" title="Node.js" class="tech-image"/>
        </div>
      </div>

      <div className="skills-section">
        <h3>{t("skills_databases")}</h3>
        <div className="skills-grid">
          <img src="/images/mysql.webp" alt="MySQL" title="MySQL"/>
          <img src="/images/mongodb.webp" alt="MongoDB" title="MongoDB" class="tech-image"/>
        </div>
      </div>

      <div className="skills-section">
        <h3>{t("skills_tools")}</h3>
        <div className="skills-grid">
          <img src="/images/git.webp" alt="Git" title="Git" />
          <img src="/images/html.webp" alt="HTML" title="HTML" />
          <img src="/images/css.webp" alt="CSS" title="CSS" />
        </div>
      </div>

      <div className="skills-section">
        <h3>{t("skills_patterns")}</h3>
        <div className="skills-list">
          <div className="skill-item">
            <FontAwesomeIcon icon={faLayerGroup} size="2x" />
            <span>MVC (Model-View-Controller)</span>
          </div>
          {/* <div className="skill-item">
            <FontAwesomeIcon icon={faNetworkWired} size="2x" />
            <span>Arquitectura de Microservicios</span>
          </div> */}
          {/* <div className="skill-item">
            <FontAwesomeIcon icon={faPlug} size="2x" />
            <span>Dependency Injection</span>
          </div> */}
          <div className="skill-item">
            <FontAwesomeIcon icon={faCogs} size="2x" />
            <span>Patrón Repositorio</span>
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faCodeBranch} size="2x" />
            <span>RESTful API Design</span>
          </div>
        </div>
      </div>

      <div className="current-state">
        <h2>{t("current_state_title")}</h2>
        <p>{t("current_state_1")}</p>
        <p>{t("current_state_2")}</p>
        <p>{t("current_state_3")}</p>
        <p>{t("current_state_4")}</p>
      </div>

      <div className="background" id="education">
        <h2>{t("education_title")}</h2>

        <div className="item">
          <h3>{t("education_3_title")}</h3>
          <p><strong>{t("education_3_institution")}</strong></p>
          <p>{t("education_3_desc")}</p>
        </div>

        <div className="item">
          <h3>{t("education_2_title")}</h3>
          <p><strong>{t("education_2_institution")}</strong></p>
          <p>{t("education_2_desc")}</p>
        </div>

        <div className="item">
          <h3>{t("education_1_title")}</h3>
          <p><strong>{t("education_1_institution")}</strong></p>
          <p>{t("education_1_desc")}</p>
        </div>

      </div>
    </section>
  );
};

export default About;