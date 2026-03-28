import React from 'react';
import { Check, Hand, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12">

      {/* Left Content */}
      <div className="flex-1 max-w-xl z-10">
        <div className="flex items-center gap-2 mb-4">
          <Hand className="w-8 h-8 text-amber-500 rotate-12" />
          <span className="text-[#7C6650] font-medium">Welcome to my portfolio</span>
        </div>

        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-4">
          Hello! <br />
          I'm <span className="relative">Honey<svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D4A843] -z-10" fill="currentColor" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" /></svg></span>
        </h1>

        <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-16 bg-[#2D2015]"></span>
            <h2 className="text-2xl md:text-3xl font-light italic">Virtual Assistant <span className="not-italic font-bold"> &amp; Data Entry Specialist</span></h2>
            <span className="text-2xl">✨</span>
        </div>

        <p className="text-[#6B5440] text-lg leading-relaxed mb-8 max-w-md">
          I am Honey Faith, a dedicated <strong>Virtual Assistant</strong> and <strong>Data Entry Specialist</strong>.
          I help executives and businesses streamline their operations, manage chaos, and ensure data accuracy with elegance and efficiency.
        </p>

        <div className="space-y-2 mb-10">
          {[
            'Accurate & Reliable Data Management',
            'Executive Scheduling & Calendar Control',
            'Seamless Communication Handling'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#1C1410] text-[#FAF7F2] flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
              <span className="font-medium text-[#2D2015]">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a href="#contact" className="px-8 py-4 bg-[#1C1410] text-[#FAF7F2] rounded-full font-bold hover:scale-105 transition-transform duration-200">
            Let's Talk
          </a>
          <a href="#" className="flex items-center gap-2 font-semibold border-b border-[#2D2015] pb-0.5 hover:text-[#7C6650] hover:border-[#7C6650] transition-colors">
            Download CV <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Image/Visuals */}
      <div className="flex-1 relative self-stretch flex items-end justify-center lg:justify-end mt-12 lg:mt-0 min-h-[400px]">
        {/* Abstract Shapes */}
        <div className="absolute top-1/4 left-0 z-0">
          <svg width="100" height="100" viewBox="0 0 100 100" className="animate-spin-slow opacity-20">
            <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" fill="#1C1410" />
          </svg>
        </div>

        {/* Hello Circle */}
        <div className="absolute left-0 bottom-1/3 w-32 h-32 bg-[#1C1410] rounded-full flex items-center justify-center text-[#FAF7F2] font-bold text-xl z-20 shadow-xl border-4 border-white hidden md:flex">
          Hello
        </div>

        {/* Squiggle */}
        <svg className="absolute bottom-0 right-0 w-24 h-24 text-[#D4A843] z-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
          <path d="M10 50 Q 25 10 50 50 T 90 50" />
        </svg>

        {/* Image - transparent PNG, no card */}
        <img
          src="/hero-image.png"
          alt="Honey Faith Portrait"
          className="relative z-10 h-full w-auto object-bottom"
        />
      </div>
    </section>
  );
};

export default Hero;
