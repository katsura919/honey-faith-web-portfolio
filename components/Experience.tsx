import React from 'react';

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

const entries: ExperienceEntry[] = [
  {
    title: 'Data Entry Specialist',
    company: 'AVSPH · Remote · USA',
    period: '2024 – Present',
    bullets: [
      'Sorts and organizes real estate property listings (houses for sale) for U.S.-based clients',
      'Accurately inputs property details into CRM and dialer systems to support outbound sales and appointment setting',
      'Uploads photos, descriptions, pricing, and other essential data for active property listings',
      'Maintains up-to-date database and coordinates with the marketing team to ensure clean, verified listings',
    ],
  },
  {
    title: 'Digital Content & SEO Assistant',
    company: 'Garage Door Company & Sunny Builders Group · Remote · USA',
    period: '2023 – 2024',
    bullets: [
      'Created Google My Business (GMB) posts using Canva for both companies to improve online visibility',
      'Scheduled and published content across Facebook, Instagram, and GMB',
      'Performed basic SEO tasks including keyword research and on-page content optimization',
      'Handled general administrative tasks, content planning, and performance tracking',
    ],
  },
  {
    title: 'Technical Support Representative (Voice and Chat)',
    company: 'Linksys (Client Account) · Remote · Philippines',
    period: '2022 – 2024',
    bullets: [
      'Provided Tier 1 and Tier 2 technical support for internet connectivity and router setup',
      'Handled customer complaints and resolved issues via phone, chat, and email',
      'Worked cross-functionally with escalation teams and followed up on unresolved issues',
      'Developed strong communication, troubleshooting, and CRM management skills',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="mb-14">
        <p className="text-xs font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#7C6650' }}>
          Work History
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl font-normal" style={{ color: '#1C1410' }}>
          My <span className="font-allura text-5xl md:text-6xl" style={{ color: '#8C5F1A' }}>Experience</span>
        </h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
          style={{ backgroundColor: 'rgba(212,168,67,0.4)' }}
        />

        <div className="flex flex-col gap-12">
          {entries.map((entry, i) => (
            <div key={i} className="relative pl-14 md:pl-20">
              {/* Dot */}
              <div
                className="absolute left-2 md:left-4 top-1.5 w-4 h-4 rounded-full border-2"
                style={{ backgroundColor: '#FAF7F2', borderColor: '#8C5F1A' }}
              />

              <div
                className="p-7 rounded-2xl"
                style={{ backgroundColor: '#FFF8EC', border: '1px solid rgba(212,168,67,0.35)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-base font-semibold" style={{ color: '#1C1410' }}>
                      {entry.title}
                    </h3>
                    <p className="text-xs font-light mt-0.5" style={{ color: '#7C6650' }}>
                      {entry.company}
                    </p>
                  </div>
                  <span
                    className="text-xs font-medium tracking-wide px-3 py-1 rounded-full w-fit flex-shrink-0"
                    style={{ backgroundColor: 'rgba(212,168,67,0.2)', color: '#8C5F1A' }}
                  >
                    {entry.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {entry.bullets.map((b, j) => (
                    <li key={j} className="text-sm font-light flex items-start gap-2" style={{ color: '#6B5440' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#D4A843' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
