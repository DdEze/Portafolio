import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../language/useLanguage";
import "../styles/NotFound.css";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <section className="not-found">
      <div className="not-found-content">
        <span className="not-found-code">404</span>

        <h1>{t("not_found_title")}</h1>

        <p>{t("not_found_description")}</p>

        <Link to="/" className="not-found-button">
          {t("not_found_button")}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;