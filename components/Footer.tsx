import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact-footer" className="px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden" style={{ backgroundColor: '#3B2D27', color: '#EAD9C8' }}>

      {/* Decorative large text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none" style={{ opacity: 0.04 }}>
        <h1 className="text-[12rem] font-light whitespace-nowrap leading-none font-allura" style={{ color: '#EAD9C8' }}>
          Honey Faith
        </h1>
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Left */}
        <div className="max-w-lg">
          <h2 className="font-allura text-5xl mb-4" style={{ color: '#D6B8A5' }}>Honey Faith</h2>
          <p className="text-sm font-light leading-relaxed mb-6" style={{ color: '#C4AA97' }}>
            Detail-oriented Virtual Assistant and Digital Support Specialist based in the Philippines, serving North American clients with reliability and care.
          </p>
          <a
            href="mailto:honeyfaith.avs@gmail.com"
            className="inline-flex items-center gap-2 text-base font-light border-b pb-0.5 transition-colors duration-200"
            style={{ color: '#D6B8A5', borderColor: '#D6B8A5' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#EAD9C8'; e.currentTarget.style.borderColor = '#EAD9C8'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#D6B8A5'; e.currentTarget.style.borderColor = '#D6B8A5'; }}
          >
            honeyfaith.avs@gmail.com
          </a>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Experience', href: '#experience' },
              { label: 'Contact', href: '#contact' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-light transition-colors duration-200"
                style={{ color: '#C4AA97' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#EAD9C8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#C4AA97')}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid #6B5A4E', color: '#C4AA97' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#D6B8A5'; e.currentTarget.style.color = '#3B2D27'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#C4AA97'; }}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-xs font-light"
        style={{ borderTop: '1px solid #6B5A4E', color: '#9C8070' }}
      >
        <p>&copy; {new Date().getFullYear()} Honey Faith. All rights reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-[#D6B8A5] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#D6B8A5] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
