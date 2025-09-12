"use client";
import { useEffect, useRef, useState } from "react";
import Alumini from "../components/students/Alumini";
import Studentachievements from "../components/students/StudentAchievements";
import Studentactivity from "../components/students/StudentActivity";
import StudentResource from "../components/students/StudentResource";
import InitialImage from "../components/ui/InitialImage";
import ScrollSpySidebar from "../components/ScrollSpySidebar";

export default function StudentsPage() {
  const sections = [
    { id: "achievement", label: "Student’s Achievement" },
    { id: "activity", label: "Student’s Life" },
    { id: "resource", label: "Student’s Resources" },
    { id: "alumini", label: "Alumni" },
  ];

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
      <InitialImage imagePath="/image.png" text="Students" />

      <div className="w-full grid grid-cols-5 gap-x-2">
        {/* Sidebar Navigation */}
        <ScrollSpySidebar
          sections={sections}
          activeSection={activeSection}
          className="hidden lg:block col-span-1 border-r border-gray-300"
        />

        {/* Content Sections */}
        <section className="col-span-4 px-10 py-8">
          <div id="achievement">
            <Studentachievements />
          </div>
          <div id="activity">
            <Studentactivity />
          </div>
          <div id="resource">
            <StudentResource />
          </div>
          <div id="alumini">
            <Alumini />
          </div>
        </section>
      </div>
    </div>
  );
}
