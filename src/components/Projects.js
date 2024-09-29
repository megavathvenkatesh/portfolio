import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Personal Projects</h2>
      <ul>
        <li>
          <h3>Edusity Learning Platform</h3>
          <p>Technologies: HTML, CSS, JavaScript</p>
          <p>
            Description: Developed a comprehensive web application with detailed information on university
            professors, academic programs, campus facilities, and a gallery of campus photos.
          </p>
          <a href="https://edusity-proj.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </li>

        <li>
          <h3>Food Delivery App – Tomato</h3>
          <p>Technologies: HTML, CSS, ReactJS</p>
          <p>
            Description: Experience culinary convenience with our food delivery platform. It includes user-friendly login
            and signup features to explore culinary delights.
          </p>
          <a href="https://food-delivery-37mx.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </li>

        <li>
          <h3>Library Management System</h3>
          <p>Technologies: FastAPI, MongoDB, React.js</p>
          <p>
            Description: Developed RESTful APIs and integrated MongoDB Atlas for efficient data handling, improving
            performance with optimized queries and endpoints.
          </p>
          <a href="https://cosmocloud-1-x4bl.onrender.com/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
