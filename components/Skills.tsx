import React from 'react';
import { Database, Headphones, Palette, MapPin, PhoneCall, Search, ClipboardList, Globe } from 'lucide-react';

const skills = [
  { label: 'Real Estate Data Entry', icon: <Database className="w-5 h-5" /> },
  { label: 'CRM & Dialer Systems', icon: <ClipboardList className="w-5 h-5" /> },
  { label: 'Canva Design', icon: <Palette className="w-5 h-5" /> },
  { label: 'GMB Posting', icon: <MapPin className="w-5 h-5" /> },
  { label: 'Cold Calling', icon: <PhoneCall className="w-5 h-5" /> },
  { label: 'Basic SEO', icon: <Search className="w-5 h-5" /> },
  { label: 'Admin Assistance', icon: <Globe className="w-5 h-5" /> },
  { label: 'Technical Support', icon: <Headphones className="w-5 h-5" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="mb-14">
        <p className="text-xs font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#9C8070' }}>
          What I Do
        </p>
        <h2 className="text-4xl md:text-5xl font-light" style={{ color: '#3B2D27' }}>
          Core <span className="font-allura text-5xl md:text-6xl" style={{ color: '#8C6A55' }}>Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="group p-6 rounded-2xl flex flex-col items-center text-center gap-3 transition-all duration-200 cursor-default hover:-translate-y-1"
            style={{ backgroundColor: '#EAD9C8', border: '1px solid #D6B8A5' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#D6B8A5')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#EAD9C8')}
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#F5EDE6', color: '#8C6A55' }}
            >
              {skill.icon}
            </div>
            <p className="text-sm font-medium leading-snug" style={{ color: '#3B2D27' }}>
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
