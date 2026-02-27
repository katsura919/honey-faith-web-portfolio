import React from 'react';
import { MapPin, GraduationCap, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { value: '2+', label: 'Years of Experience' },
    { value: '3', label: 'Career Roles' },
    { value: '100%', label: 'Remote & Reliable' },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* Left */}
        <div className="flex-1">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#9C8070' }}>About Me</p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: '#3B2D27' }}>
            The person behind<br />
            <span className="font-allura text-5xl md:text-6xl" style={{ color: '#7A6038' }}>your workflow</span>
          </h2>

          <p className="text-base font-light leading-relaxed mb-5" style={{ color: '#6B5A4E' }}>
            I'm Honey Faith, a dedicated Virtual Assistant and Digital Support Specialist based in Philippines. With over 2 years of hands-on experience in administrative
            support, real estate data entry, SEO, and technical assistance, I help
            clients stay organized, efficient, and focused on growth.
          </p>
          <p className="text-base font-light leading-relaxed mb-8" style={{ color: '#6B5A4E' }}>
            My background in BS Accountancy sharpened my eye for accuracy and detail — qualities
            I bring to every task, from managing CRM databases to scheduling and client communication.
          </p>

          <div className="flex flex-col gap-3">
            {[
              { icon: <MapPin className="w-4 h-4" />, text: 'Cagayan de Oro, Philippines' },
              { icon: <GraduationCap className="w-4 h-4" />, text: 'BS in Accountancy' },
              { icon: <Globe className="w-4 h-4" />, text: 'Serving clients across the world' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3" style={{ color: '#9C8070' }}>
                <span style={{ color: '#BDB395' }}>{item.icon}</span>
                <span className="text-sm font-light">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Stats */}
        <div className="flex-1 grid grid-cols-1 gap-4 w-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: '#F2E2B1', border: '1px solid #D5C7A3' }}
            >
              <p className="text-5xl font-light mb-2" style={{ color: '#7A6038' }}>{stat.value}</p>
              <p className="text-sm font-medium tracking-wide uppercase" style={{ color: '#9C8070' }}>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
