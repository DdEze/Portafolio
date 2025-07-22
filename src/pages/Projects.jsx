import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import "../styles/Projects.css";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
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
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;