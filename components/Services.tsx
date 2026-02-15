import React from 'react';
import { ArrowRight, Database, CalendarClock, Mail } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  active?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, active }) => {
  return (
    <div 
      className={`
        aspect-square p-8 flex flex-col justify-between border border-black transition-all duration-300 group cursor-pointer
        ${active ? 'bg-black text-white hover:bg-gray-900' : 'bg-white text-black hover:bg-black hover:text-white'}
      `}
    >
      <div className={`
        w-14 h-14 rounded-full flex items-center justify-center border-2
        ${active ? 'border-white' : 'border-black group-hover:border-white'}
      `}>
        {React.cloneElement(icon as React.ReactElement, { 
             className: `w-7 h-7 ${active ? 'text-white' : 'text-black group-hover:text-white'}`
        })}
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-3 uppercase leading-tight">{title}</h3>
        <p className={`text-sm opacity-80 mb-6 line-clamp-3 ${active ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-300'}`}>
            {description}
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
        Read More 
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto relative">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-0.5 bg-black"></span>
                <span className="uppercase font-bold tracking-widest text-sm text-gray-500">My Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none mb-6">
                What I'm <br/> Offering
            </h2>
        </div>

        <div className="md:max-w-xs lg:max-w-md">
            <p className="text-gray-600 mb-6 text-sm md:text-base">
                I provide comprehensive virtual assistance tailored to your business needs, allowing you to focus on growth while I handle the details.
            </p>
            <button className="px-8 py-3 bg-black text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gray-800 transition-colors">
                All Services
            </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="relative flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Scroll Down Indicator (Absolute Left) */}
        <div className="hidden lg:flex flex-col items-center absolute -left-16 top-0 h-full">
            <span className="text-xs font-bold tracking-[0.3em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
                Scroll Down
            </span>
            <div className="w-px h-24 bg-black mt-4 mb-4"></div>
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                <ArrowRight className="w-4 h-4 rotate-90" />
            </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pl-0 lg:pl-12">
            
            <ServiceCard 
                active={true}
                title="Data Entry & Analysis"
                description="Precision-focused data management, spreadsheet organization, CRM updates, and insightful data cleaning services to keep your records immaculate."
                icon={<Database />}
            />

            <ServiceCard 
                title="Executive Assistance"
                description="Managing complex calendars, booking travel, coordinating meetings, and handling personal tasks so you can reclaim your time."
                icon={<CalendarClock />}
            />

            <ServiceCard 
                title="Email & Communication"
                description="Inbox zero strategies, drafting professional correspondence, and acting as the first point of contact for your stakeholders."
                icon={<Mail />}
            />
        </div>
      </div>
    </section>
  );
};

export default Services;