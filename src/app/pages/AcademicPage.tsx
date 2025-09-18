"use client";

import { useEffect, useRef, useState } from "react";
import BachelorDegree from "../components/academics/BachelorDegree";
import HowtoApply from "../components/academics/HowtoApply";
import MasterDegree from "../components/academics/MasterDegree";
import Scholarships from "../components/academics/Scholarships";
import InitialImage from "../components/ui/InitialImage";
import ScrollSpySidebar from "../components/ScrollSpySidebar";
import AcademicCalendar from "../components/academics/AcademicCalendar";

const sections = [
  { id: "bachelor-degree", label: "Bachelor's Degree" },
  { id: "master-degree", label: "Master’s Degree" },
  { id: "how-to-apply", label: "How to Apply" },
  { id: "scholarship", label: "Scholarships" },
  { id: "academic-calendar", label: "Academic Calendar" },
];

export default function AcademictPage() {
  const [activeSection, setActiveSection] = useState<string>("bachelor-degree");
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
      <InitialImage imagePath="/image.png" textEn="Academics" textKh="កម្មវិធីសិក្សា"/>

      <div className="w-full grid grid-cols-5 gap-x-2">
        {/* Sidebar Navigation */}
        <ScrollSpySidebar
          sections={sections}
          activeSection={activeSection}
          className="hidden lg:block col-span-1 border-r border-gray-300"
        />

        {/* Content Sections */}
        <section className="col-span-4 px-10 py-8">
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
