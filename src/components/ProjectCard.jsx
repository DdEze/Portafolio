import React, { useState } from "react";
import "../styles/Projects.css";

const ProjectCard = ({ project }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = project.images;

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-item">
      <div className="image-carousel">
        <img
          src={images[imageIndex]}
          alt={`${project.title} ${imageIndex + 1}`}
        />
        {images.length > 1 && (
          <div className="carousel-buttons">
            <button onClick={prevImage}>‹</button>
            <button onClick={nextImage}>›</button>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list">
          <strong>Tecnologías y Lenguajes:</strong>{" "}
          {project.tech.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;