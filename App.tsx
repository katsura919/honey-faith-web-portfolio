import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden w-full" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Experience />
        <Skills />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;