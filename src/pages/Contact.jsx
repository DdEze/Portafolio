import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from "../language/useLanguage";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    const lastSent = localStorage.getItem("lastEmailSent");
    const now = Date.now();

    if (lastSent && now - parseInt(lastSent) < 300000) {
      setErrorMessage(t("email_throttle_error"));
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          setSuccess(true);
          localStorage.setItem("lastEmailSent", now.toString());
      }, (error) => {
          setSuccess(false);
      });

    e.target.reset();
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

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
      {success && <div className="alert-success">{t("success_message")}</div>}
      {errorMessage && <div className="alert-error">{errorMessage}</div>}
    </section>
  );
};

export default Contact;