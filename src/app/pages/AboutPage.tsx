"use client";

import { useEffect, useRef, useState } from "react";
import FAQs from "../components/about/FAQs";
import AboutAMS from "../components/about/AboutAMS";
import Accreditation from "../components/about/Accreditation";
import BoardOfTrustees from "../components/about/BoardofTrustees";
import IndustrialPartners from "../components/about/IndustrialPartners";
import InitialImage from "../components/ui/InitialImage";
import ScrollSpySidebar from "../components/ScrollSpySidebar";

const sections = [
  { id: "aboutAMS", label: "About AMS" },
  { id: "boardoftrustees", label: "Board of Trustees" },
  { id: "accreditation", label: "Accreditation" },
  { id: "industrialpartners", label: "Industrial Partners" },
  { id: "faqs", label: "FAQs" },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string>("aboutAMS");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new window.IntersectionObserver(handleObserve, {
      root: null,
      rootMargin: "0px 0px -60% 0px", // triggers when section is 40% from top
      threshold: 0.1,
    });

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        sectionRefs.current[section.id] = el;
        observer.observe(el);
      }
    });

    return () => {
      sections.forEach((section) => {
        const el = sectionRefs.current[section.id];
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Initial Image Section */}
      <InitialImage imagePath="/image.png" text="About Us" />

      <div className="w-full grid grid-cols-5 gap-x-2">
        {/* Sidebar Navigation */}
        <ScrollSpySidebar
          sections={sections}
          activeSection={activeSection}
          className="hidden lg:block col-span-1 border-r border-gray-300"
        />

        {/* Content Sections */}
        <section className="col-span-4 px-10 py-8">
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
          <div id="faqs">
            <FAQs />
          </div>
        </section>
      </div>
    </div>
  );
}