
import { useState, createContext, useContext, useCallback } from "react";
import { translations } from "./i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es");

  const t = useCallback(
    (key) => translations[lang][key] || key,
    [lang]
  );

  const toggleLanguage = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);