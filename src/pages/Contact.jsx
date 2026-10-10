import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "../language/useLanguage";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef(null);

  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setSuccess(false);
    setErrorMessage("");

    const lastSent = localStorage.getItem("lastEmailSent");
    const now = Date.now();
    const cooldown = 300000;

    if (lastSent && now - Number(lastSent) < cooldown) {
      setErrorMessage(t("email_throttle_error"));
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      localStorage.setItem("lastEmailSent", Date.now().toString());
      form.current.reset();
      setSuccess(true);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setErrorMessage(t("email_send_error"));
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (!success && !errorMessage) return;

    const timer = setTimeout(() => {
      setSuccess(false);
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [success, errorMessage]);

  return (
    <section id="contact" className="contact">
      <header className="contact-header">

        <h2>{t("contact")}</h2>

        <p>{t("contact_description")}</p>
      </header>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        aria-busy={isSending}
      >
        <div className="contact-field">
          <label htmlFor="contact-name">
            {t("your_name")}
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder={t("your_name")}
            autoComplete="name"
            required
            disabled={isSending}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">
            {t("your_email")}
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder={t("your_email")}
            autoComplete="email"
            required
            disabled={isSending}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">
            {t("your_message")}
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder={t("your_message")}
            rows={5}
            required
            disabled={isSending}
          />
        </div>

        <button type="submit" disabled={isSending}>
          {isSending ? t("sending") : t("send")}
        </button>
      </form>

      <div className="contact-feedback" aria-live="polite">
        {success && (
          <p className="alert-success" role="status">
            {t("success_message")}
          </p>
        )}

        {errorMessage && (
          <p className="alert-error" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;