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

      <div className="skills-section skills">
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
          <img src="/images/react-native.webp" alt="TypeScript" title="TypeScript" />
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

      <div className="current-state">
        <h2>Estado Actual</h2>
        <p>
          Actualmente estoy desarrollando proyectos para mi portafolio utilizando <strong>React</strong> y <strong>MongoDB</strong>, enfocándome en buenas prácticas y experiencia de usuario.
        </p>
        <p>
          Estoy aprendiendo <strong>React Native</strong> para crear aplicaciones móviles.
        </p>
        <p>
          Me encuentro terminando mi carrera en Sistemas, con especial interés en <strong>UX/UI</strong>, <strong>desarrollo fullstack</strong> y la integración entre diseño y programación.
        </p>
        <p>
          Estoy abierto a nuevas oportunidades y con muchas ganas de iniciar mi primera experiencia laboral como desarrollador.
        </p>
      </div>

      <div className="background" id="education">
        <h2>Experiencia Académica</h2>

        <div class="item">
          <h3>Técnico Informático</h3>
          <p><strong>Escuela Técnica N° 2 "Santiago de Liniers"</strong> — Secundario técnico completo</p>
          <p>
            Formación técnica con orientación práctica hardware, software y programación. Título secundario con salida laboral como técnico informático.
          </p>
        </div>

        <div class="item">
          <h3>Analista Programador Universitario</h3>
          <p><strong>UNLP Informática</strong></p>
          <p>
            Carrera de 3 años enfocada en fundamentos de programación, bases de datos, estructuras de datos y desarrollo de aplicaciones.
          </p>
        </div>

        <div className="item">
          <h3>Licenciatura en Sistemas</h3>
          <p><strong>UNLP Informática</strong> — 2025 - Actualidad</p>
          <p>
            En curso. Actualmente realizando la tesina.
            He desarrollado proyectos integradores en equipo aplicando metodologías ágiles, y actualmente estoy trabajando en mi tesina.
          </p>
        </div>

      </div>


    </section>
  );
};

export default About;