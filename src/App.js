import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certification';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <Header />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
