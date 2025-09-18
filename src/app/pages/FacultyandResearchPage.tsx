"use client";

import { useEffect, useRef, useState } from "react";
import AcademicSupportStaffSection from "../components/facultyandresearch/AcademicandSupportStaff";
import ReDALabSection from "../components/facultyandresearch/ReDALab";
import PreviousCollaborationsSection from "../components/facultyandresearch/PreviousCollaboration";
import OngoingProjectsSection from "../components/facultyandresearch/OngoingProject";
import InitialImage from "../components/ui/InitialImage";
import ScrollSpySidebar from "../components/ScrollSpySidebar";

// Define sections for ScrollSpy
const sections = [
  { id: "academic-support-staff", label: "Academic & Support Staff" },
  { id: "redalab", label: "ReDa Lab" },
  { id: "previous-collaborations", label: "Previous Collaborations" },
  { id: "ongoing-projects", label: "Ongoing Projects" },
];

export default function FacultyandResearchPage() {
  const [activeSection, setActiveSection] = useState<string>("academic-support-staff");
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
      rootMargin: "0px 0px -60% 0px", // trigger when section is 40% from top
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
      <InitialImage imagePath="/image.png" textEn="Faculty and Research" textKh="គ្រូបង្រៀន និងការស្រាវជ្រាវ"/>

      <div className="w-full grid grid-cols-5 gap-x-2">
        {/* Sidebar Navigation */}
        <ScrollSpySidebar
          sections={sections}
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
    </div>
  );
}
