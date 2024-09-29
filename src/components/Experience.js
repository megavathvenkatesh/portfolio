import React from 'react';
const Portfolio = () => {
  return (
    <section id="experience" className='experience-section'>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <h3>Local Farmers</h3>
          <p>Location: Bengaluru, Karnataka</p>
          <p>Role: Web Developer</p>
          <p>Duration: 6/2024 – 7/2024</p>
          <ul>
            <li>
              Enhanced user interface and performance by utilizing Next.js, TypeScript, 
              and Tailwind CSS, resulting in a 20% increase in user engagement and a 
              30% reduction in page load times.
              Integrated REST API functionalities, improving data retrieval processes 
              and achieving a 40% faster response time for user requests.
              Developed reusable components and modular code, leading to a 50% reduction 
              in development time for future features and updates.
            </li>
          </ul>
        </li>

        <li>
          <h3>Exposys Data Labs</h3>
          <p>Location: City, State</p>
          <p>Role: Web Developer</p>
          <p>Duration: 1/2024 – 2/2024</p>
          <ul>
            <li>
              Developed an entropy-based detection system to identify DDoS attacks, achieving 
              a 90% detection accuracy by analyzing the randomness of incoming data packets.
              Implemented a Flask server and packet sniffer to monitor network traffic and 
              compute packet entropy, leading to a 50% reduction in false positives compared 
              to traditional methods.
          
              Enhanced system reliability by integrating NumPy and SciPy for entropy computation, 
              ensuring real-time attack detection and improved server accessibility for legitimate users.
            </li>
          </ul>
        </li>
        {/* Add more projects here if needed */}
      </ul>
    </section>
  );
};

export default Portfolio;
