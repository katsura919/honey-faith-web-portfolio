import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12 flex justify-between items-center transition-all duration-500 ${
        isScrolled
          ? 'border-b'
          : 'border-b border-transparent'
      }`}
      style={isScrolled ? { backgroundColor: 'rgba(246,240,240,0.92)', backdropFilter: 'blur(10px)', borderColor: '#D5C7A3' } : {}}
    >
      {/* Logo */}
      <a href="#home" className="font-allura text-3xl" style={{ color: '#7A6038' }}>
        Honey Faith
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium tracking-wide transition-colors duration-200"
            style={{ color: '#6B5A4E' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#7A6038')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6B5A4E')}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
          style={{ backgroundColor: '#D5C7A3', color: '#3B2D27' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#BDB395')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#D5C7A3')}
        >
          Hire Me
        </a>
      </nav>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-2"
        style={{ color: '#6B5A4E' }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 w-full p-6 flex flex-col gap-5 md:hidden shadow-lg border-t"
          style={{ backgroundColor: '#F6F0F0', borderColor: '#D5C7A3' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium"
              style={{ color: '#4A3728' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;