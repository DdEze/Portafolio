import React, { useRef, useState } from 'react';
import { useLanguage } from "../language/useLanguage";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          setSuccess(true);
      }, (error) => {
          setSuccess(false);
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>{t("contact")}</h2>
      <p>{t("contact_description")}</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder={t("your_name")} required />
        <input type="email" name="email" placeholder={t("your_email")} required />
        <textarea name="message" placeholder={t("your_message")} required></textarea>
        <button type="submit">{t("send")}</button>
      </form>
      {success && <p className="success">{t("success_message")}</p>}
    </section>
  );
};

export default Contact;