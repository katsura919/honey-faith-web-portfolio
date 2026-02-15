import React from 'react';
import { Sparkles } from 'lucide-react';

const Marquee: React.FC = () => {
  const skills = [
    "DATA ENTRY", "VIRTUAL ASSISTANCE", "CALENDAR MANAGEMENT", 
    "EMAIL HANDLING", "RESEARCH", "MICROSOFT EXCEL", 
    "CUSTOMER SUPPORT", "PROJECT COORDINATION", "TRANSCRIPTION"
  ];

  return (
    <div className="bg-black py-6 overflow-hidden relative flex z-20">
        {/* Left decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>
        
        <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...skills, ...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex items-center mx-6">
                    <Sparkles className="text-white w-5 h-5 mr-6 opacity-50" />
                    <span className="text-white text-2xl md:text-4xl font-bold tracking-wider uppercase font-outline-2">
                        {skill}
                    </span>
                </div>
            ))}
        </div>

        {/* Right decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};

export default Marquee;