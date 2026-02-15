import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden w-full">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-200 via-purple-200 to-yellow-200 rounded-full blur-[100px] opacity-40 -z-10 pointer-events-none" />

      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;