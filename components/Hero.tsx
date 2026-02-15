import React from 'react';
import { ArrowDown, Check, Hand, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-16 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Content */}
      <div className="flex-1 max-w-xl z-10">
        <div className="flex items-center gap-2 mb-4">
          <Hand className="w-8 h-8 text-yellow-500 rotate-12" />
          <span className="text-gray-500 font-medium">Welcome to my portfolio</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-4">
          Hello! <br /> 
          I'm <span className="relative">Honey<svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10" fill="currentColor" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" /></svg></span>
        </h1>

        <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-16 bg-black"></span>
            <h2 className="text-2xl md:text-3xl font-light italic">Virtual Assistant <span className="not-italic font-bold"> &amp; Data Expert</span></h2>
            <span className="text-2xl">✨</span>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
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
              <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
              <span className="font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a href="#contact" className="px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform duration-200">
            Let's Talk
          </a>
          <a href="#" className="flex items-center gap-2 font-semibold border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
            Download CV <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Image/Visuals */}
      <div className="flex-1 relative flex justify-center lg:justify-end mt-12 lg:mt-0 w-full">
        {/* Abstract Shapes */}
        <div className="absolute top-1/4 -left-10 lg:left-0 z-0">
             <svg width="100" height="100" viewBox="0 0 100 100" className="animate-spin-slow opacity-20">
                <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" fill="black" />
             </svg>
        </div>
        
        {/* Main Portrait Container */}
        <div className="relative z-10 w-[350px] h-[450px] md:w-[450px] md:h-[550px] lg:w-[500px] lg:h-[600px]">
             {/* Black Circle "Hello" */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-32 h-32 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl z-20 shadow-xl border-4 border-white hidden md:flex">
                Hello
            </div>

            {/* Squiggle */}
            <svg className="absolute -bottom-10 -right-10 w-24 h-24 text-black z-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
                <path d="M10 50 Q 25 10 50 50 T 90 50" />
            </svg>

            {/* Image */}
            <div className="w-full h-full rounded-[3rem] overflow-hidden bg-gray-200 relative border-2 border-black/5 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                    alt="Honey Faith Portrait" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
            </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;