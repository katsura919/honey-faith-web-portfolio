import React from 'react';
import { Sparkles } from 'lucide-react';

const Marquee: React.FC = () => {
  const skills = [
    'DATA ENTRY', 'VIRTUAL ASSISTANCE', 'CALENDAR MANAGEMENT',
    'EMAIL HANDLING', 'RESEARCH', 'CANVA DESIGN',
    'CUSTOMER SUPPORT', 'SEO BASICS', 'CRM SYSTEMS'
  ];

  return (
    <div className="py-5 overflow-hidden relative flex z-20" style={{ backgroundColor: '#D6B8A5' }}>
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #D6B8A5, transparent)' }} />
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center mx-6">
            <Sparkles className="w-4 h-4 mr-5" style={{ color: '#8C6A55', opacity: 0.7 }} />
            <span className="text-xl md:text-2xl font-semibold tracking-widest uppercase" style={{ color: '#3B2D27' }}>
              {skill}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #D6B8A5, transparent)' }} />
    </div>
  );
};

export default Marquee;