"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import Alumini from "../components/students/Alumini";
import Studentachievements from "../components/students/StudentAchievements";
import Studentactivity from "../components/students/StudentActivity";
import StudentResource from "../components/students/StudentResource";
import InitialImage from "../components/ui/InitialImage";
import ScrollSpySidebar from "../components/ScrollSpySidebar";

const sections = [
  { id: "achievement", labelEn: "Student’s Achievement", labelKh: "សមិទ្ធិផល" },
  { id: "activity", labelEn: "Student’s Life", labelKh: "សកម្មភាព" },
  { id: "resource", labelEn: "Student’s Resources", labelKh: "ធនធាន" },
  { id: "alumini", labelEn: "Alumni", labelKh: "អតីតសិស្ស" },
];

export default function StudentsPage() {
  const [activeSection, setActiveSection] = useState("achievement");
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
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
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
    <div className="min-h-screen bg-white">
      {/* Initial Image Section */}
      <InitialImage imagePath="/image.png" textEn="Students" textKh="សិស្ស" />

      <div className="w-full grid grid-cols-5 gap-x-2">
        {/* Sidebar Navigation */}
        <ScrollSpySidebar
          sections={sections.map((s) => ({
            id: s.id,
            label: language === "en" ? s.labelEn : s.labelKh,
          }))}
          activeSection={activeSection}
          className="hidden lg:block col-span-1 border-r border-gray-300"
        />

        {/* Content Sections */}
        <section className="col-span-4 px-10 py-8 space-y-10">
          <div id="achievement"><Studentachievements /></div>
          <div id="activity"><Studentactivity /></div>
          <div id="resource"><StudentResource /></div>
          <div id="alumini"><Alumini /></div>
        </section>
      </div>
    </div>
  );
}
