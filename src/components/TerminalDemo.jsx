import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../language/useLanguage";
import "../styles/TerminalDemo.css";

const TerminalDemo = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const navigationTimer = useRef(null);

  const routes = {
    home: "/",
    about: "/about",
    projects: "/projects",
    contact: "/contact",
  };

  const externalLinks = {
    github: "https://github.com/DdEze",
    linkedin:
      "https://www.linkedin.com/in/ezequiel-de-dominicis-435609205/",
  };

  const commands = {
    help: t("terminal_help"),
    whoami: t("terminal_whoami"),
    skills: t("terminal_skills"),
    stack: t("terminal_stack"),
    email: t("terminal_email"),
  };

  useEffect(() => {
    setHistory([
      {
        id: "welcome",
        command: null,
        output: t("welcome"),
      },
    ]);
  }, [t]);

  useEffect(() => {
    return () => {
      if (navigationTimer.current) {
        clearTimeout(navigationTimer.current);
      }
    };
  }, []);

  const addHistory = (command, output) => {
    setHistory((previous) => [
      ...previous,
      {
        id: `${Date.now()}-${Math.random()}`,
        command,
        output,
      },
    ]);
  };

  const handleCommand = (event) => {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) return;

    setInput("");

    if (navigationTimer.current) {
      clearTimeout(navigationTimer.current);
      navigationTimer.current = null;
    }

    if (command === "clear") {
      setHistory([]);
      return;
    }

    // Navegación con mensaje previo
    if (routes[command]) {
      const pageName = t(`nav_${command}`);

      addHistory(
        command,
        t("terminal_navigating").replace("{page}", pageName)
      );

      navigationTimer.current = setTimeout(() => {
        navigate(routes[command]);
        navigationTimer.current = null;
      }, 800);

      return;
    }

    // Abrir enlaces externos
    if (externalLinks[command]) {
      window.open(
        externalLinks[command],
        "_blank",
        "noopener,noreferrer"
      );

      addHistory(
        command,
        t("terminal_opening").replace("{item}", command)
      );

      return;
    }

    // Abrir el CV actual
    if (command === "resume") {
      window.open(
        "/C.V.pdf",
        "_blank",
        "noopener,noreferrer"
      );

      addHistory(command, t("terminal_resume"));
      return;
    }

    // Comandos informativos
    const output =
      commands[command] ??
      (command === "about"
        ? t("terminal_about")
        : command === "projects"
          ? t("terminal_projects")
          : command === "contact"
            ? t("terminal_contact")
            : t("terminal_not_found").replace(
                "{command}",
                command
              ));

    addHistory(command, output);
  };

  const suggestedCommands = [
    "help",
    "about",
    "projects",
    "contact",
    "skills",
    "github",
    "linkedin",
    "resume",
  ];

  const handleSuggestion = (command) => {
    setInput(command);
  };

  return (
    <section className="terminal-section">
      <div className="terminal-heading">
        <span>{t("terminal_title")}</span>
        <p>{t("terminal_subtitle")}</p>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dots" aria-hidden="true">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <span className="terminal-window-title">
            {t("terminal_window")}
          </span>
        </div>

        <div className="terminal-body" aria-live="polite">
          {history.map((item) => (
            <div key={item.id} className="terminal-line">
              {item.command && (
                <p className="terminal-command">
                  <span className="prompt">$</span>{" "}
                  {item.command}
                </p>
              )}

              <p className="output">{item.output}</p>
            </div>
          ))}

          <form
            onSubmit={handleCommand}
            className="terminal-input-line"
          >
            <label className="prompt" htmlFor="terminal-input">
              $
            </label>

            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              autoComplete="off"
              spellCheck="false"
              aria-label={t("terminal_input_label")}
              placeholder={t("terminal_placeholder")}
            />

            <button
              type="submit"
              className="terminal-submit"
              aria-label={t("terminal_execute")}
            >
              ↵
            </button>
          </form>
        </div>
      </div>

      <div className="terminal-command-help">
        <p>{t("command")}</p>

        <div className="terminal-suggestions">
          {suggestedCommands.map((command) => (
            <button
              key={command}
              type="button"
              onClick={() => handleSuggestion(command)}
              className="suggestion-btn"
            >
              {command}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TerminalDemo;