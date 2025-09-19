"use client";

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import AcademicSupportStaffSection from "../components/facultyandresearch/AcademicandSupportStaff";
import ReDALabSection from "../components/facultyandresearch/ReDALab";
import PreviousCollaborationsSection from "../components/facultyandresearch/PreviousCollaboration";
import OngoingProjectsSection from "../components/facultyandresearch/OngoingProject";
import InitialImage from "../components/ui/InitialImage";
import ScrollSpySidebar from "../components/ScrollSpySidebar";

const sections = [
  { id: "academic-support-staff", labelEn: "Academic & Support Staff", labelKh: "គ្រូបង្រៀន និងបុគ្គលិកគាំទ្រ" },
  { id: "redalab", labelEn: "ReDa Lab", labelKh: "ពហុមណ្ឌល ReDa" },
  { id: "previous-collaborations", labelEn: "Previous Collaborations", labelKh: "កិច្ចសហប្រតិបត្តិការមុន" },
  { id: "ongoing-projects", labelEn: "Ongoing Projects", labelKh: "គម្រោងកំពុងបន្ត" },
];

export default function FacultyandResearchPage() {
  const [activeSection, setActiveSection] = useState<string>("academic-support-staff");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  // Set language from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langFromUrl = params.get("lang");
    if (langFromUrl === "en" || langFromUrl === "kh") {
      if (langFromUrl !== language) setLanguage(langFromUrl);
    }
  }, [location.search, language, setLanguage]);

  // ScrollSpy IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
    );

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
    <section className="min-h-screen bg-white">
      {/* Initial Image */}
      <InitialImage
        imagePath="/image.png"
        textEn="Faculty and Research"
        textKh="គ្រូបង្រៀន និងការស្រាវជ្រាវ"
      />

      <div className="w-full grid grid-cols-5 gap-x-2">
        {/* Sidebar */}
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
          <div id="academic-support-staff">
            <AcademicSupportStaffSection />
          </div>
          <div id="redalab">
            <ReDALabSection />
          </div>
          <div id="previous-collaborations">
            <PreviousCollaborationsSection />
          </div>
          <div id="ongoing-projects">
            <OngoingProjectsSection />
          </div>
        </section>
      </div>
    </section>
  );
}
