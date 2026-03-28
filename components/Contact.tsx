import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xovejdly', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: '#FFF8EC',
    border: '1px solid rgba(212,168,67,0.35)',
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '14px',
    color: '#1C1410',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="mb-14">
        <p className="text-xs font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#7C6650' }}>
          Get In Touch
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl font-normal" style={{ color: '#1C1410' }}>
          Let's <span className="font-allura text-5xl md:text-6xl" style={{ color: '#8C5F1A' }}>work together</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left — Contact Details */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-base font-light leading-relaxed" style={{ color: '#6B5440' }}>
            Ready to streamline your operations? I'd love to hear about your project. Send me a message and I'll get back to you as soon as possible.
          </p>

          {[
            { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'honeyfaith.avs@gmail.com', href: 'mailto:honeyfaith.avs@gmail.com' },
            { icon: <Phone className="w-4 h-4" />, label: 'Phone', value: '+63 963 575 3042', href: 'tel:+639635753042' },
            { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: 'Cagayan de Oro, Philippines', href: undefined },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#FFF8EC', color: '#8C5F1A' }}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#7C6650' }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-light hover:underline" style={{ color: '#1C1410' }}>
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-light" style={{ color: '#1C1410' }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right — Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = '#D4A843')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(212,168,67,0.35)')}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = '#D4A843')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(212,168,67,0.35)')}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => (e.currentTarget.style.borderColor = '#D4A843')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(212,168,67,0.35)')}
            />

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#D4A843', color: '#1C1410' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#B8892A')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#D4A843')}
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-center" style={{ color: '#7C6650' }}>
                Something went wrong. Please email me directly at honeyfaith.avs@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
