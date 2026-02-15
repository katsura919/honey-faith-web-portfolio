import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'My Projects', href: '#projects', subtitle: 'See my recent work' },
    { name: 'About Me', href: '#about', subtitle: 'Learn who I am' },
    { name: 'Contact Me', href: '#contact', subtitle: 'Get in touch' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-start">
      {/* Logo Area */}
      <div className="flex flex-col">
        <span className="text-xl font-medium border-b-2 border-black pb-1 inline-block w-fit">
          it's me
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-12">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="group flex flex-col items-start">
            <div className="flex items-center gap-1 font-semibold text-sm uppercase tracking-wide border-b border-transparent group-hover:border-black transition-colors">
              {link.name}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <span className="text-[10px] text-gray-500 mt-1">{link.subtitle}</span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-6 md:hidden shadow-xl">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="flex items-center justify-between font-semibold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              <ArrowUpRight className="w-5 h-5" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;