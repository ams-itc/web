'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import BachelorDegree from '../components/academics/BachelorDegree';
import MasterDegree from '../components/academics/MasterDegree';
import HowtoApply from '../components/academics/HowtoApply';
import Scholarships from '../components/academics/Scholarships';
import AcademicCalendar from '../components/academics/AcademicCalendar';
import InitialImage from '../components/ui/InitialImage';
import ScrollSpySidebar from '../components/ScrollSpySidebar';

const sections = [
  {
    id: 'bachelor-degree',
    labelEn: "Bachelor's Degree",
    labelKh: 'កម្រិតបរិញ្ញាបត្រ',
  },
  {
    id: 'master-degree',
    labelEn: 'Master’s Degree',
    labelKh: 'កម្រិតអនុបណ្ឌិត',
  },
  {
    id: 'how-to-apply',
    labelEn: 'How to Apply',
    labelKh: 'របៀបដាក់ពាក្យ',
  },
  {
    id: 'scholarship',
    labelEn: 'Scholarships',
    labelKh: 'អាហារូបករណ៍',
  },
  {
    id: 'academic-calendar',
    labelEn: 'Academic Calendar',
    labelKh: 'ប្រតិទិនសិក្សា',
  },
];

export default function AcademicPage() {
  const [activeSection, setActiveSection] = useState('bachelor-degree');
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
      {/* Header Image */}
      <InitialImage
        imagePath="/image.jpg"
        textEn="Academics"
        textKh="កម្មវិធីសិក្សា"
      />

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

        {/* Main Content */}
        <section className="flex-1 px-4 lg:px-10 py-8 space-y-10">
          <div id="bachelor-degree">
            <BachelorDegree />
          </div>
          <div id="master-degree">
            <MasterDegree />
          </div>
          <div id="how-to-apply">
            <HowtoApply />
          </div>
          <div id="scholarship">
            <Scholarships />
          </div>
          <div id="academic-calendar">
            <AcademicCalendar />
          </div>
        </section>
      </div>
    </div>
  );
}
