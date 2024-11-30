import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/Contactme/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';

function App() {
  return (
   <div>
      <Navbar />
      <div className='container'>
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      </div>
      <Footer />
   </div>
  );
}

export default App;
