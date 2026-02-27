import React from 'react';

interface ExperienceEntry {
  title: string;
  period: string;
  bullets: string[];
}

const entries: ExperienceEntry[] = [
  {
    title: 'Data Entry Specialist',
    period: '2024 – Present',
    bullets: [
      'Real estate property listing management',
      'CRM and dialer system updates',
      'Uploading property data and images',
      'Database maintenance and quality checks',
    ],
  },
  {
    title: 'Digital Content & SEO Assistant',
    period: '2023 – 2024',
    bullets: [
      'Google My Business posting and optimization',
      'Canva content creation for social media',
      'Social media scheduling and management',
      'Basic SEO and keyword research',
    ],
  },
  {
    title: 'Technical Support Representative – Linksys',
    period: '2022 – 2024',
    bullets: [
      'Tier 1 & Tier 2 customer support',
      'Router setup and network troubleshooting',
      'CRM documentation and ticket management',
      'Customer issue resolution and escalation handling',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="mb-14">
        <p className="text-xs font-medium tracking-[0.3em] uppercase mb-3" style={{ color: '#9C8070' }}>
          Work History
        </p>
        <h2 className="text-4xl md:text-5xl font-light" style={{ color: '#3B2D27' }}>
          My <span className="font-allura text-5xl md:text-6xl" style={{ color: '#8C6A55' }}>Experience</span>
        </h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
          style={{ backgroundColor: '#D6B8A5' }}
        />

        <div className="flex flex-col gap-12">
          {entries.map((entry, i) => (
            <div key={i} className="relative pl-14 md:pl-20">
              {/* Dot */}
              <div
                className="absolute left-2 md:left-4 top-1.5 w-4 h-4 rounded-full border-2"
                style={{ backgroundColor: '#F5EDE6', borderColor: '#8C6A55' }}
              />

              <div
                className="p-7 rounded-2xl"
                style={{ backgroundColor: '#EAD9C8', border: '1px solid #D6B8A5' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                  <h3 className="text-base font-semibold" style={{ color: '#3B2D27' }}>
                    {entry.title}
                  </h3>
                  <span
                    className="text-xs font-medium tracking-wide px-3 py-1 rounded-full w-fit"
                    style={{ backgroundColor: '#D6B8A5', color: '#3B2D27' }}
                  >
                    {entry.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {entry.bullets.map((b, j) => (
                    <li key={j} className="text-sm font-light flex items-start gap-2" style={{ color: '#6B5A4E' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#C9A88F' }} />
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
