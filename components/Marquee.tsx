import React from 'react';
import { Sparkles } from 'lucide-react';

const Marquee: React.FC = () => {
  const skills = [
    'DATA ENTRY', 'VIRTUAL ASSISTANCE', 'COLD CALLING',
    'CALENDAR MANAGEMENT', 'EMAIL HANDLING', 'CANVA DESIGN',
    'CUSTOMER SUPPORT', 'SEO BASICS', 'CRM SYSTEMS', 'ADMIN ASSISTANCE'
  ];

  return (
    <div className="py-5 overflow-hidden relative flex z-20" style={{ backgroundColor: '#1C1410' }}>
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #1C1410, transparent)' }} />
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center mx-6">
            <Sparkles className="w-4 h-4 mr-5" style={{ color: '#D4A843' }} />
            <span className="text-xl md:text-2xl font-semibold tracking-widest uppercase" style={{ color: '#FAF7F2' }}>
              {skill}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #1C1410, transparent)' }} />
    </div>
  );
};

export default Marquee;
