// import React from 'react';

// const Header = () => {
//   return (
//     <header className="header-container">
//       <nav className="nav-menu">
//         <a href="#portfolio">Work experience</a>
//         <a href="#projects">Projects</a>
//         <a href="#skills">Skills</a>
//         <a href="#about">About Me</a>
//         <a href="#contact">Contact</a>
//       </nav>

//       <div className="header-content">
//         <div className="header-left">
//           <img src={require('./image.jpg')} alt="Venkatesh Megavath" className="profile-image" />
//         </div>
//         <div className="header-right">
//           <h1>Venkatesh Megavath</h1>
//           <p>Full Stack Developer</p>

//           {/* Download Resume Button */}
//           <a href={require('./Megavath_venkatesh_Resume.pdf')} download="Megavath_venkatesh_Resume.pdf">
//             <button className="download-resume-btn">Download Resume</button>
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
//import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <nav className="nav-menu">
        {/* Use Link from react-router-dom for internal navigation */}
        <Link to="/">Work experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/home">Home</Link>
      </nav>

      <div className="header-content">
        <div className="header-left">
          <img src={require('./image.jpg')} alt="Venkatesh Megavath" className="profile-image" />
        </div>
        <div className="header-right">
          <h1>Venkatesh Megavath</h1>
          <p>Full Stack Developer</p>

          {/* Download Resume Button */}
          <a href={require('./Megavath_venkatesh_Resume.pdf')} download="Megavath_venkatesh_Resume.pdf">
            <button className="download-resume-btn">Download Resume</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
