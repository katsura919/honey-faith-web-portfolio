import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
    >
      {/* Soft decorative ring */}
      <div
        className="absolute w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          border: '1px solid #D6B8A5',
          opacity: 0.35,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{
          border: '1px solid #D6B8A5',
          opacity: 0.18,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Label */}
        <p
          className="text-xs font-medium tracking-[0.3em] uppercase mb-6 animate-fade-in-up"
          style={{ color: '#9C8070' }}
        >
          Virtual Assistant &amp; Digital Support Specialist
        </p>

        {/* Name */}
        <h1
          className="font-allura leading-none mb-6 animate-fade-in-up-2"
          style={{ fontSize: 'clamp(5rem, 14vw, 10rem)', color: '#8C6A55' }}
        >
          Honey Faith
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg font-light tracking-wide mb-4 animate-fade-in-up-3"
          style={{ color: '#6B5A4E' }}
        >
          Data Entry Specialist &nbsp;&bull;&nbsp; Digital Content &amp; SEO Support &nbsp;&bull;&nbsp; Admin Assistance
        </p>

        {/* Tagline */}
        <p
          className="text-sm md:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up-3"
          style={{ color: '#9C8070' }}
        >
          Detail-oriented and reliable support for real estate, marketing, and technical teams.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up-4">
          <a
            href="#services"
            className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: '#D6B8A5', color: '#3B2D27' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#C9A88F')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#D6B8A5')}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 flex items-center gap-2"
            style={{ borderColor: '#D6B8A5', color: '#6B5A4E', backgroundColor: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#EAD9C8'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <Mail className="w-4 h-4" /> Contact Me
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in-up-4">
        <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: '#9C8070' }}>Scroll</span>
        <ArrowDown className="w-3.5 h-3.5" style={{ color: '#9C8070' }} />
      </div>
    </section>
  );
};

export default Hero;
