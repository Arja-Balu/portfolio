import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const updateURLHashOnScroll = () => {
  const sections = document.querySelectorAll('section');
  let currentSection = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section.id;
    }
  });

  if (currentSection && window.location.hash.substring(1) !== currentSection) {
    window.history.replaceState(null, null, `#${currentSection}`);
  }
};

function App() {
  useEffect(() => {
    window.addEventListener('scroll', updateURLHashOnScroll);
    return () => {
      window.removeEventListener('scroll', updateURLHashOnScroll);
    };
  }, []);

 

  return (
    <Router>
      <ScrollToTop />
      <div className="nav1">
        <ul className="nav">
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#skills">Skills</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </div>
      <div className="App">
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </Router>
  );
}

export default App;
