import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "TaskSprint",
      description: "TaskSprint es una aplicación web para administrar tus tareas diarias. Con ella puedes crear, filtrar, marcar como completadas y reordenar tareas con drag & drop de manera sencilla y rápida. La persistencia se maneja con LocalStorage, por lo que tus tareas se mantienen entre sesiones.",
      link: "https://github.com/DdEze/TaskSprint",
      images: ["https://imgur.com/oaHCATp", "https://imgur.com/RDbHISU", 
               "https://imgur.com/ex2c1Az", "https://imgur.com/yl1AkM0",
               "https://imgur.com/sDhFn5h", "https://imgur.com/P2lhwU0" ],
    },
    {
      title: "WalletWise",
      description: "Aplicación web para administrar transacciones financieras y categorías, con funcionalidades para crear, editar, eliminar y filtrar datos. También permite gestionar el perfil de usuario (cambiar contraseña y eliminar cuenta). La interfaz está desarrollada en React y la base de datos utiliza MongoDB. Para la visualización de datos se usa Chart.js.",
      link: "https://github.com/DdEze/WalletWise",
      images: ["https://imgur.com/DwysHBK", "https://imgur.com/V571ErF",
               "https://imgur.com/TxI5ZSz", "https://imgur.com/AqMPvaR",
               "https://imgur.com/Mb2n9i3", "https://imgur.com/NJqOT2Z",
               "https://imgur.com/B0PmqSV"
      ],
    },
    {
      title: "ChefNow",
      description: "ChefNow es una aplicación web que permite a los usuarios explorar recetas de cocina, crear sus propias recetas y ver detalles de cada una, tanto desde una base de datos, como desde la API pública de TheMealDB.",
      link: "https://github.com/DdEze/ChefNow",
      images: [
        "/ChefNow/ChefNow 1.png", "/ChefNow/ChefNow 2.png",
        "/ChefNow/ChefNow 3.png", "/ChefNow/ChefNow 4.png",
        "/ChefNow/ChefNow 5.png", "/ChefNow/ChefNow 6.png",
        "/ChefNow/ChefNow 7.png", "/ChefNow/ChefNow 8.png",
        "/ChefNow/ChefNow 9.png", "/ChefNow/ChefNow 10.png",
        "/ChefNow/ChefNow 11.png"
      ],
    },
    {
      title: "ReservEase",
      description: "Este proyecto es un sistema de reservas para espacios, que permite a los usuarios registrarse, iniciar sesión, visualizar espacios disponibles, crear y gestionar reservas, y para los administradores, gestionar usuarios, roles, espacios y visualizar todas las reservas. Cuenta con autenticación basada en JWT, un calendario interactivo, gestión de roles y notificaciones visuales para mejorar la experiencia de usuario.",
      link: "https://github.com/DdEze/ReservEase",
      images: [
        "/ReservEase/ReservEase 1.png", "/ReservEase/ReservEase 2.png",
        "/ReservEase/ReservEase 3.png", "/ReservEase/ReservEase 4.png",
        "/ReservEase/ReservEase 5.png", "/ReservEase/ReservEase 6.png",
        "/ReservEase/ReservEase 7.png", "/ReservEase/ReservEase 8.png",
        "/ReservEase/ReservEase 9.png", "/ReservEase/ReservEase 10.png",
        "/ReservEase/ReservEase 11.png", "/ReservEase/ReservEase 12.png",
        "/ReservEase/ReservEase 13.png"
      ],
    },
  ];

 const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projectList.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projectList.length / projectsPerPage);

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