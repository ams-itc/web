'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import AboutAMS from '../components/about/AboutAMS';
import Accreditation from '../components/about/Accreditation';
import BoardOfTrustees from '../components/about/BoardofTrustees';
import IndustrialPartners from '../components/about/IndustrialPartners';
import InitialImage from '../components/ui/InitialImage';
import ScrollSpySidebar from '../components/ScrollSpySidebar';
import { FiArrowRight, FiX } from 'react-icons/fi';

const sections = [
  { id: 'aboutAMS', labelEn: 'About AMS', labelKh: 'អំពី AMS' },
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
    labelKh: 'ដៃគូឧស្សាហកម្ម',
  },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('aboutAMS');
  const [sidebarOpen, setSidebarOpen] = useState(false); // toggle mobile drawer
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
        {/* Mobile sidebar toggle button */}
        <button
          className="lg:hidden fixed mt-5 left-2 z-50 p-2 rounded-r-md shadow-md hover:backdrop-brightness-110 transition backdrop-contrast-200 bg-gray-400/40 text-gray-700"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open Sidebar"
        >
          <FiArrowRight className="h-5 w-5" />
        </button>

        {/* Mobile sidebar overlay */}
        {/* Mobile sidebar and overlay */}
        {sidebarOpen && (
          <>
            {/* Overlay that covers content below header */}
            <div
              className="fixed left-0 w-full h-[calc(100vh-100px)] z-40"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar starting under header/initial image */}
            <div className="fixed left-0 z-50 bg-white h-[calc(100vh-100px)] shadow-lg">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close Sidebar"
              >
                <FiX className="h-6 w-6" />
              </button>

              <ScrollSpySidebar
                sections={sections.map((s) => ({
                  id: s.id,
                  label: language === 'en' ? s.labelEn : s.labelKh,
                }))}
                activeSection={activeSection}
                className="space-y-2 p-6"
                onLinkClick={() => setSidebarOpen(false)}
              />
            </div>
          </>
        )}

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
