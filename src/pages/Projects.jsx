import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects_es from "../data/projects_es.json";
import projects_en from "../data/projects_en.json";
import "../styles/Projects.css";
import { useLanguage } from "../language/useLanguage";

const Projects = () => {
  const { lang, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = lang === "es" ? projects_es : projects_en;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section id="projects" className="projects">
      <h2>{t("projects_title")}</h2>
      <div className="project-list">
        {currentProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
            aria-label={`${t("pagination_page")} ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;