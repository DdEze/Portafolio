import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(serviceId, templateId, publicKey)
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>¡Hablemos! Estoy disponible para proyectos o colaboraciones.</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo electrónico" required />
        <textarea name="message" placeholder="Tu mensaje" required></textarea>
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