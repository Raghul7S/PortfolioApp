import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Project/Projects';
import Contact from './components/Contactme/Contact';
import Footer from './components/Footer/Footer';

import './App.css'

function App() {

  useEffect(()=> {
    Aos.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
   <>
      <Navbar />
      <div className='container'>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      </div>
      <Footer />
   </>
  );
}

export default App;
