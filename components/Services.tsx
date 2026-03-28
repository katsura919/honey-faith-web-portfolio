import React from 'react';
import { ArrowRight, Database, CalendarClock, Mail, Globe, FileText, Headphones } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  active?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, active }) => {
  const [hovered, setHovered] = React.useState(false);
  const bg = active ? '#D4A843' : hovered ? 'rgba(212,168,67,0.12)' : '#FAF7F2';
  const border = 'rgba(212,168,67,0.35)';
  const textColor = '#1C1410';
  const mutedColor = '#7C6650';
  const iconBg = active ? '#B8892A' : '#FFF8EC';

  return (
    <div
      className="p-7 rounded-2xl flex flex-col gap-5 cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: bg, border: `1px solid ${border}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: iconBg, color: '#8C5F1A' }}>
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold mb-2 uppercase tracking-wide" style={{ color: textColor }}>{title}</h3>
        <p className="text-sm font-light leading-relaxed" style={{ color: mutedColor }}>{description}</p>
      </div>
      <div className="flex items-center gap-1 text-xs font-medium tracking-wide uppercase" style={{ color: '#8C5F1A' }}>
        Learn More <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="mb-14">
        <p className="text-xs font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#7C6650' }}>What I Offer</p>
        <h2 className="font-playfair text-4xl md:text-5xl font-normal" style={{ color: '#1C1410' }}>
          Services &amp; <span className="font-allura text-5xl md:text-6xl" style={{ color: '#8C5F1A' }}>Expertise</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ServiceCard
          active
          title="Data Entry & Analysis"
          description="Precision data management, spreadsheet organization, CRM updates, and database maintenance to keep your records immaculate."
          icon={<Database />}
        />
        <ServiceCard
          title="Executive Assistance"
          description="Calendar management, travel booking, meeting coordination, and personal task handling so you can reclaim your time."
          icon={<CalendarClock />}
        />
        <ServiceCard
          title="Email & Communication"
          description="Inbox management, professional correspondence drafting, and first-point-of-contact handling for your stakeholders."
          icon={<Mail />}
        />
        <ServiceCard
          title="Digital Content & SEO"
          description="Google My Business posting, Canva content creation, social media scheduling, and basic keyword research."
          icon={<Globe />}
        />
        <ServiceCard
          title="Real Estate Support"
          description="Property listing uploads, image management, CRM and dialer updates, and database maintenance for real estate teams."
          icon={<FileText />}
        />
        <ServiceCard
          title="Technical Support"
          description="Tier 1 &amp; 2 technical troubleshooting, router setup guidance, CRM documentation, and customer issue resolution."
          icon={<Headphones />}
        />
      </div>
    </section>
  );
};

export default Services;
