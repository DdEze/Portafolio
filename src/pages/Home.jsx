import React from "react";
import "../styles/Home.css";
import { useLanguage } from "../language/useLanguage";

const Home = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="home">
      <h1>{t("home_title")}</h1>
      <p>{t("home_desc")}</p>
    </section>
  );
};

export default Home;