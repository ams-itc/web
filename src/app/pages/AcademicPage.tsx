import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import BachelorDegree from "../components/academics/BachelorDegree";
import MasterDegree from "../components/academics/MasterDegree";
import HowtoApply from "../components/academics/HowtoApply";
import Scholarships from "../components/academics/Scholarships";
import AcademicCalendar from "../components/academics/AcademicCalendar";
import InitialImage from "../components/ui/InitialImage";
import ScrollSpySidebar from "../components/ScrollSpySidebar";

const sections = [
  { id: "bachelor-degree", labelEn: "Bachelor's Degree", labelKh: "បរិញ្ញាបត្រ" },
  { id: "master-degree", labelEn: "Master’s Degree", labelKh: "អនុបណ្ឌិត" },
  { id: "how-to-apply", labelEn: "How to Apply", labelKh: "របៀបដាក់ពាក្យ" },
  { id: "scholarship", labelEn: "Scholarships", labelKh: "អាហារូបករណ៍" },
  { id: "academic-calendar", labelEn: "Academic Calendar", labelKh: "ប្រតិទិនសិក្សា" },
];

export default function AcademicPage() {
  const [activeSection, setActiveSection] = useState("bachelor-degree");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  // Read query param lang
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langFromUrl = params.get("lang");
    if (langFromUrl === "en" || langFromUrl === "kh") {
      if (langFromUrl !== language) setLanguage(langFromUrl);
    }
  }, [location.search, language, setLanguage]);

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
    <section className="min-h-screen bg-white">
      <InitialImage imagePath="/image.png" textEn="Academics" textKh="កម្មវិធីសិក្សា" />
      <div className="w-full grid grid-cols-5 gap-x-2">
        <ScrollSpySidebar
          sections={sections.map((s) => ({
            id: s.id,
            label: language === "en" ? s.labelEn : s.labelKh,
          }))}
          activeSection={activeSection}
          className="hidden lg:block col-span-1 border-r border-gray-300"
        />

        <section className="col-span-4 px-10 py-8 space-y-10">
          <div id="bachelor-degree"><BachelorDegree /></div>
          <div id="master-degree"><MasterDegree /></div>
          <div id="how-to-apply"><HowtoApply /></div>
          <div id="scholarship"><Scholarships /></div>
          <div id="academic-calendar"><AcademicCalendar /></div>
        </section>
      </div>
    </section>
  );
}
