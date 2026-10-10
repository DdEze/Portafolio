import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects_es from "../data/projects_es.json";
import projects_en from "../data/projects_en.json";
import "../styles/Projects.css";
import { useLanguage } from "../language/useLanguage";

// Lista controlada de tecnologías relevantes para el filtro.
const availableFilters = [
  "React",
  "Node.js",
  "MongoDB",
  "JavaScript",
  "Python",
  "Java",
  "MySQL",
  "Material UI",
];

const Projects = () => {
  const { lang, t } = useLanguage();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTech, setSelectedTech] = useState("all");

  const projectsPerPage = 6;
  const projects = lang === "es" ? projects_es : projects_en;

  // Mostrar únicamente filtros que tengan proyectos asociados.
  const activeFilters = availableFilters.filter((technology) =>
    projects.some((project) =>
      (project.filters ?? []).includes(technology)
    )
  );

  // Un proyecto puede pertenecer a varios filtros.
  const filteredProjects =
    selectedTech === "all"
      ? projects
      : projects.filter((project) =>
          (project.filters ?? []).includes(selectedTech)
        );

  // Calcular la paginación después de filtrar.
  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;

  const currentProjects = filteredProjects.slice(
    indexOfFirst,
    indexOfLast
  );

  // Reiniciar el filtro al cambiar de idioma.
  useEffect(() => {
    setCurrentPage(1);
    setSelectedTech("all");
  }, [lang]);

  const handleTechChange = (technology) => {
    setSelectedTech(technology);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="projects">
      <h2>{t("projects_title")}</h2>

      <div className="project-filters">
        <p className="filter-label">
          {t("projects_filter_label")}
        </p>

        <div
          className="filter-buttons"
          role="group"
          aria-label={t("projects_filter_label")}
        >
          <button
            type="button"
            className={`filter-button ${
              selectedTech === "all" ? "active" : ""
            }`}
            onClick={() => handleTechChange("all")}
            aria-pressed={selectedTech === "all"}
          >
            {t("projects_filter_all")}
          </button>

          {activeFilters.map((technology) => (
            <button
              key={technology}
              type="button"
              className={`filter-button ${
                selectedTech === technology ? "active" : ""
              }`}
              onClick={() => handleTechChange(technology)}
              aria-pressed={selectedTech === technology}
            >
              {technology}
            </button>
          ))}
        </div>
      </div>

      {currentProjects.length > 0 ? (
        <div className="project-list">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.link}
              project={project}
            />
          ))}
        </div>
      ) : (
        <p className="projects-empty">
          {t("projects_no_results")}
        </p>
      )}

      {totalPages > 1 && (
        <nav
          className="pagination"
          aria-label={t("pagination_label")}
        >
          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              type="button"
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
              aria-label={`${t("pagination_page")} ${page}`}
              aria-current={
                currentPage === page ? "page" : undefined
              }
            >
              {page}
            </button>
          ))}
        </nav>
      )}
    </section>
  );
};

export default Projects;