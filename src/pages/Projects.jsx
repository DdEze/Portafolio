import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "TaskSprint",
      description: "TaskSprint es una aplicación web para administrar tus tareas diarias. Con ella puedes crear, filtrar, marcar como completadas y reordenar tareas con drag & drop de manera sencilla y rápida. La persistencia se maneja con LocalStorage, por lo que tus tareas se mantienen entre sesiones.",
      link: "https://github.com/DdEze/TaskSprint",
      images: ["https://i.imgur.com/oaHCATp.png", "https://i.imgur.com/RDbHISU.png", 
               "https://i.imgur.com/ex2c1Az.png", "https://i.imgur.com/yl1AkM0.png",
               "https://i.imgur.com/sDhFn5h.png", "https://i.imgur.com/P2lhwU0.png" ],
    },
    {
      title: "WalletWise",
      description: "Aplicación web para administrar transacciones financieras y categorías, con funcionalidades para crear, editar, eliminar y filtrar datos. También permite gestionar el perfil de usuario (cambiar contraseña y eliminar cuenta). La interfaz está desarrollada en React y la base de datos utiliza MongoDB. Para la visualización de datos se usa Chart.js.",
      link: "https://github.com/DdEze/WalletWise",
      images: ["https://i.imgur.com/DwysHBK.png", "https://i.imgur.com/V571ErF.png",
               "https://i.imgur.com/TxI5ZSz.png", "https://i.imgur.com/AqMPvaR.png",
               "https://i.imgur.com/Mb2n9i3.png", "https://i.imgur.com/NJqOT2Z.png",
               "https://i.imgur.com/B0PmqSV.png"
      ],
    },
    {
      title: "ChefNow",
      description: "ChefNow es una aplicación web que permite a los usuarios explorar recetas de cocina, crear sus propias recetas y ver detalles de cada una, tanto desde una base de datos, como desde la API pública de TheMealDB.",
      link: "https://github.com/DdEze/ChefNow",
      images: [
        "https://i.imgur.com/R5KbuEo.png", "https://i.imgur.com/8Bg8PCM.png",
        "https://i.imgur.com/AhFT0jt.png", "https://i.imgur.com/IkmNbpj.png",
        "https://i.imgur.com/UtGIBz8.png", "https://i.imgur.com/Vsg3wo6.png",
        "https://i.imgur.com/laspkPv.png", "https://i.imgur.com/kBtlmlX.png",
        "https://i.imgur.com/rf4hDQZ.png", "https://i.imgur.com/S0tPduY.png",
        "https://i.imgur.com/q6Wa9TN.png"
      ],
    },
    {
      title: "ReservEase",
      description: "Este proyecto es un sistema de reservas para espacios, que permite a los usuarios registrarse, iniciar sesión, visualizar espacios disponibles, crear y gestionar reservas, y para los administradores, gestionar usuarios, roles, espacios y visualizar todas las reservas. Cuenta con autenticación basada en JWT, un calendario interactivo, gestión de roles y notificaciones visuales para mejorar la experiencia de usuario.",
      link: "https://github.com/DdEze/ReservEase",
      images: [
        "https://i.imgur.com/ScuVXlJ.png", "https://i.imgur.com/LOuaY54.png",
        "https://i.imgur.com/lUBOZXW.png", "https://i.imgur.com/2nPKbem.png",
        "https://i.imgur.com/o6ATW86.png", "https://i.imgur.com/9GzhhrY.png",
        "https://i.imgur.com/ngZBUfI.png", "https://i.imgur.com/p7g8X1O.png",
        "https://i.imgur.com/clUgEeG.png", "https://i.imgur.com/vmCIbT9.png",
        "https://i.imgur.com/SMbyvWi.png", "https://i.imgur.com/w44dNUF.png",
        "https://i.imgur.com/O1LYX9X.png"
      ],
    },
    {
      title: "iTunes",
      description: "Aplicación móvil creada con React Native que permite buscar canciones usando la API de iTunes, marcarlas como favoritas y compartirlas en redes sociales.",
      link: "https://github.com/DdEze/iTunes",
      images: [
        "https://i.imgur.com/mrOeeR8.jpeg", "https://i.imgur.com/hhPveQo.jpeg",
        "https://i.imgur.com/WmmY6b2.jpeg", "https://i.imgur.com/jjqOXd3.jpeg"
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