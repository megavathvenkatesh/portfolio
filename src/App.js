import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header will be displayed on every page */}
        <Header />
        
        {/* Define the routes for different pages */}
        <Routes>
          <Route path="/" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
