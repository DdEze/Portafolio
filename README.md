# 🌐 Portafolio Web

![React](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react&style=flat-square)
![JavaScript](https://img.shields.io/badge/javascript-ES6+-F7DF1E?logo=javascript&logoColor=black&style=flat-square)
![CSS3](https://img.shields.io/badge/css3-1572B6?logo=css3&logoColor=white&style=flat-square)
![HTML5](https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=flat-square)
![FontAwesome](https://img.shields.io/badge/fontawesome-6.4.2-339AF0?logo=fontawesome&style=flat-square)
![React Router](https://img.shields.io/badge/React%20Router-6.17.0-EA4335?logo=reactrouter&style=flat-square)
![Status](https://img.shields.io/badge/status-en%20desarrollo-yellow?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ezequiel_De_Dominicis-0A66C2?logo=linkedin&logoColor=white&style=flat-square)](https://www.linkedin.com/in/ezequiel-de-dominicis-435609205/)
[![GitHub](https://img.shields.io/badge/GitHub-DdEze-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/DdEze)

Este es un portafolio personal desarrollado con **React**, donde muestro información sobre mí, mis habilidades, proyectos destacados y formas de contacto. También cuenta con modo oscuro, navegación SPA y diseño adaptable.

---

## Tecnologías Utilizadas

- **React**
- **React Router DOM** para navegación entre páginas
- **EmailJS** – envío de formularios sin backend
- **CSS** modular para estilos
- **FontAwesome** para íconos
- **HTML5 / CSS3**
- **Imágenes locales** (GitHub, LinkedIn, logos de tecnologías, etc.)

---

## Características

- Navegación entre secciones: Inicio, Acerca de mí, Proyectos y Contacto
- 🌙/☀️ Modo Claro / Oscuro con botón en el Navbar
- 🌐 Soporte para idiomas: Español e Inglés
- 🎨 Fondo animado sutil en modo claro y oscuro
- 💻 Proyectos con carrusel de imágenes y paginación
- 📄 Descarga de Curriculum (PDF)
- 📬 Formulario de contacto funcional con confirmación visual
- 📱 Diseño totalmente adaptable (responsive)

---

## Estructura del Proyecto

```
src/
├── assets/ # Imágenes (logos, capturas de proyectos, íconos)
├── components/
│ ├── Navbar.jsx
│ ├── ProjectCard.jsx
│ └── Footer.jsx
├── data/
│ ├── projects_en.json
│ └── projects_es.json
├── languaje/
│ ├── i18n.js
│ └── useLanguaje.js
├── pages/
│ ├── About.jsx
│ ├── Home.jsx
│ ├── Contact.jsx
│ └── Projects.jsx
├── styles/
│ ├── About.css
│ ├── Contact.css
│ ├── Footer.css
│ ├── Home.css
│ ├── Navbar.css
│ └── Projects.css
├── App.jsx
├── App.css
├── index.js
└── index.css
```

---

## 🔗 Enlaces

- [Mi perfil de LinkedIn](https://www.linkedin.com/in/ezequiel-de-dominicis-435609205/)
- [Mis proyectos en GitHub](https://github.com/DdEze)

---

## Instalación y Ejecución Local

```bash
git clone https://github.com/DdEze/mi-portafolio.git
cd mi-portafolio

npm install

npm run start
```

Asegurate de crear un archivo .env con tus claves de EmailJS:

REACT_APP_EMAIL_SERVICE_ID=tu_service_id
REACT_APP_TEMPLATE_ID=tu_template_id
REACT_APP_PUBLIC_KEY=tu_public_key

---

## Licencia

Este proyecto es de código abierto y puede utilizarse con fines personales o educativos.

Autor:
Desarrollado por Ezequiel De Dominicis – ezequieldedominicis@gmail.com