import React from 'react';

const languages = [
  { name: 'English (American)', flag: '🇺🇸', level: 'Fluent' },
  { name: 'English (UK)', flag: '🇬🇧', level: 'Fluent' },
  { name: 'Filipino', flag: '🇵🇭', level: 'Native' },
];

const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-16 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#7C6650' }}>
          Communication
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl font-normal" style={{ color: '#1C1410' }}>
          <span className="font-allura text-5xl md:text-6xl" style={{ color: '#8C5F1A' }}>Languages</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{ backgroundColor: '#FFF8EC', border: '1px solid rgba(212,168,67,0.35)' }}
          >
            <span className="text-2xl">{lang.flag}</span>
            <div>
              <p className="text-sm font-medium" style={{ color: '#1C1410' }}>{lang.name}</p>
              <p className="text-xs font-light" style={{ color: '#7C6650' }}>{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
