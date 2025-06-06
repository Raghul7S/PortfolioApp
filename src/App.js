import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Contact from './components/Contactme/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import './App.css'
import Projects from './components/Project/Projects';

function App() {
  return (
   <div>
      <Navbar />
      <div className='container'>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      </div>
      <Footer />
   </div>
  );
}

export default App;
