import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faCodeBranch, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-intro">
        <h2>Acerca de mí</h2>
        <p>
          Soy estudiante avanzado de la Licenciatura en Sistemas de la UNLP, con sólida formación en algoritmos, organización de datos, programación orientada a objetos y desarrollo de software.
        </p>
        <p>
          Durante mi carrera, he adquirido conocimientos en diseño de bases de datos, ingeniería de software, sistemas operativos, redes y desarrollo de sistemas distribuidos. 
        </p>
        <p>
          Además, me apasiona la implementación de soluciones prácticas que integren calidad de software, patrones de diseño y buenas prácticas profesionales.
        </p>
        <p>
          Mi formación incluye tanto fundamentos teóricos sólidos como experiencia en desarrollo de proyectos con tecnologías como React, Node.js, Python, Ruby y bases de datos MySQL y MongoDB.
        </p>
      </div>
      <div className="skills-section">
        <h2>Habilidades</h2>
        <h3>Lenguajes de Programación</h3>
        <div className="skills-grid">
          <img src="/images/java.png" alt="Java" title="Java" />
          <img src="/images/javascript.png" alt="JavaScript" title="JavaScript" />
          <img src="/images/python.png" alt="Python" title="Python" />
          <img src="/images/ruby.png" alt="Ruby" title="Ruby" />
          <img src="/images/typescript.webp" alt="TypeScript" title="TypeScript" />
        </div>
      </div>
      <div className="skills-section">
        <h3>Frameworks y Librerías</h3>
        <div className="skills-grid">
          <img src="/images/react.png" alt="React" title="React" />
          <img src="/images/ruby_on_rails.png" alt="Ruby on Rails" title="Ruby on Rails" />
          <img src="/images/nodejs.png" alt="Node.js" title="Node.js" />
        </div>
      </div>

      <div className="skills-section">
        <h3>Bases de Datos</h3>
        <div className="skills-grid">
          <img src="/images/mysql.png" alt="MySQL" title="MySQL" />
          <img src="/images/mongodb.png" alt="MongoDB" title="MongoDB" />
        </div>
      </div>

      <div className="skills-section">
        <h3>Herramientas y Tecnologías</h3>
        <div className="skills-grid">
          <img src="/images/git.png" alt="Git" title="Git" />
          <img src="/images/html.png" alt="HTML" title="HTML" />
          <img src="/images/css.png" alt="CSS" title="CSS" />
        </div>
      </div>

      <div className="skills-section">
        <h3>Patrones de Diseño y Arquitectura</h3>
        <div className="skills-list">
          <div className="skill-item">
            <FontAwesomeIcon icon={faLayerGroup} size="2x" />
            <span>MVC (Model-View-Controller)</span>
          </div>
          {/* <div className="skill-item">
            <FontAwesomeIcon icon={faNetworkWired} size="2x" />
            <span>Arquitectura de Microservicios</span>
          </div> */}
          <div className="skill-item">
            <FontAwesomeIcon icon={faCogs} size="2x" />
            <span>Patrón Repositorio</span>
          </div>
          {/* <div className="skill-item">
            <FontAwesomeIcon icon={faPlug} size="2x" />
            <span>Dependency Injection</span>
          </div> */}
          <div className="skill-item">
            <FontAwesomeIcon icon={faCodeBranch} size="2x" />
            <span>RESTful API Design</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;