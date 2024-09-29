import React from 'react';
//import './Skills.css'; // Make sure to import your CSS file for styling

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages and Frameworks:</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C++ (basic)</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>REST APIs</li>
            <li>FastAPI</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Technical Skills:</h3>
          <ul>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>Full Stack Developer</li>
            <li>Object-Oriented Programming</li>
            <li>Operating Systems</li>
            <li>AWS</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools:</h3>
          <ul>
            <li>Visual Studio</li>
            <li>VSCode</li>
            <li>Kaggle</li>
            <li>Postman</li>
            <li>Power BI</li>
            <li>Git</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
