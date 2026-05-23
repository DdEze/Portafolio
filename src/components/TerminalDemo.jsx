import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../language/useLanguage";
import "../styles/TerminalDemo.css";

const TerminalDemo = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [history, setHistory] = useState([
    {
      command: "welcome",
      output: t("welcome"),
    },
  ]);

  const [input, setInput] = useState("");

  // Navegación interna
  const routes = {
    home: "/",
    about: "/about",
    projects: "/projects",
    contact: "/contact",
  };

  // Links externos
  const externalLinks = {
    github: "https://github.com/DdEze",
    linkedin: "https://www.linkedin.com/in/ezequiel-de-dominicis-435609205/",
  };

  // Comandos normales
  const commands = {
    help: t("help"),

    whoami:
      "Ezequiel De Dominicis | Full-Stack Developer",

    skills:
      "React, Node.js, MongoDB, JavaScript, React Native, TypeScript, Java, Python, Ruby, Ruby On Rails, MySQL, Git",

    stack: `
Frontend:
- React
- TypeScript
- React Native

Backend:
- Node.js
- Express
- Ruby on Rails

Database:
- MongoDB
- MySQL
    `,

    projects:
      "TaskSprint, WalletWise, ReservEase, ChefNow, iTunes, WeatherOn, Confidant",

    email:
      "ezequieldedominicis@email.com",

    resume:
      "Opening CV...",
  };

  const handleCommand = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim().toLowerCase();

    if (!trimmedInput) return;

    // Clear terminal
    if (trimmedInput === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    // Navegación interna
    if (routes[trimmedInput]) {
      navigate(routes[trimmedInput]);

      setHistory((prev) => [
        ...prev,
        {
          command: trimmedInput,
          output: `Navigating to ${trimmedInput}...`,
        },
      ]);

      setInput("");
      return;
    }

    // Links externos
    if (externalLinks[trimmedInput]) {
      window.open(externalLinks[trimmedInput], "_blank");

      setHistory((prev) => [
        ...prev,
        {
          command: trimmedInput,
          output: `Opening ${trimmedInput}...`,
        },
      ]);

      setInput("");
      return;
    }

    // Resume / CV
    if (trimmedInput === "resume") {
      window.open("/C.V.pdf", "_blank");

      setHistory((prev) => [
        ...prev,
        {
          command: trimmedInput,
          output: commands.resume,
        },
      ]);

      setInput("");
      return;
    }

    // Comandos normales
    const output =
      commands[trimmedInput] ||
      `Command not found: ${trimmedInput}`;

    setHistory((prev) => [
      ...prev,
      {
        command: trimmedInput,
        output,
      },
    ]);

    setInput("");
  };

  return (
    <section className="terminal-section">

      <div className="terminal-heading">
        <span>Interactive Developer Console</span>
      </div>

      <div className="terminal-window">

        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className="terminal-body">

          {history.map((item, index) => (
            <div key={index} className="terminal-line">

              {item.command !== "welcome" && (
                <p>
                  <span className="prompt">$</span> {item.command}
                </p>
              )}

              <p className="output">
                {item.output}
              </p>

            </div>
          ))}

          <form
            onSubmit={handleCommand}
            className="terminal-input-line"
          >

            <span className="prompt">$</span>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              placeholder={t("terminal_placeholder")}
            />

          </form>

        </div>
      </div>

      {/* Suggestions */}
      <div>
          <p>{t("command")}</p>
      </div>
      <div className="terminal-suggestions">
        {[
          "about",
          "projects",
          "skills",
          "github",
          "linkedin",
          "resume",
        ].map((cmd) => (
          <button
            key={cmd}
            onClick={() => setInput(cmd)}
            className="suggestion-btn"
          >
            {cmd}
          </button>
        ))}

      </div>

    </section>
  );
};

export default TerminalDemo;