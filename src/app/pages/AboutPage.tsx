'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import AboutAMS from '../components/about/AboutAMS';
import Accreditation from '../components/about/Accreditation';
import BoardOfTrustees from '../components/about/BoardofTrustees';
import IndustrialPartners from '../components/about/IndustrialPartners';
import InitialImage from '../components/ui/InitialImage';
import ScrollSpySidebar from '../components/ScrollSpySidebar';

const sections = [
  {
    id: 'aboutAMS',
    labelEn: 'About AMS',
    labelKh: 'អំពី AMS',
  },
  {
    id: 'boardoftrustees',
    labelEn: 'Board of Trustees',
    labelKh: 'ក្រុមប្រឹក្សាភិបាល',
  },
  {
    id: 'accreditation',
    labelEn: 'Accreditation',
    labelKh: 'សញ្ញាបត្រទទួលស្គាល់',
  },
  {
    id: 'industrialpartners',
    labelEn: 'Industrial Partners',
    labelKh: 'ដៃគូក្នុងវិស័យ',
  },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('aboutAMS');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const { language } = useLanguage();

  // ScrollSpy observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        sectionRefs.current[s.id] = el;
        observer.observe(el);
      }
    });

    return () => {
      sections.forEach((s) => {
        const el = sectionRefs.current[s.id];
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Initial Image Section */}
      <InitialImage imagePath="/image.jpg" textEn="About Us" textKh="អំពីយើង" />

      <div className="w-full lg:flex relative">
        {/* Desktop sidebar */}
        <div className="hidden lg:block w-64 border-r border-gray-300">
          <ScrollSpySidebar
            sections={sections.map((s) => ({
              id: s.id,
              label: language === 'en' ? s.labelEn : s.labelKh,
            }))}
            activeSection={activeSection}
            className="p-4"
          />
        </div>

        {/* Content Sections */}
        <section className="flex-1 px-4 lg:px-10 py-8 space-y-10">
          <div id="aboutAMS">
            <AboutAMS />
          </div>
          <div id="boardoftrustees">
            <BoardOfTrustees />
          </div>
          <div id="accreditation">
            <Accreditation />
          </div>
          <div id="industrialpartners">
            <IndustrialPartners />
          </div>
        </section>
      </div>
    </div>
  );
}
