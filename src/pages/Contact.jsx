import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>¡Hablemos! Estoy disponible para proyectos o colaboraciones.</p>
      <form className="contact-form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo electrónico" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-info">
        <h3>Información de contacto</h3>
        <p>Email: ezequieldedominicis@gmail.com</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ezequiel-de-dominicis-435609205/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/DdEze" target="_blank" rel="noopener noreferrer">
            <img src="/github.webp" alt="GitHub" className="social-icon" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;