"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import AboutAMS from "../components/about/AboutAMS";
import Accreditation from "../components/about/Accreditation";
import BoardOfTrustees from "../components/about/BoardofTrustees";
import IndustrialPartners from "../components/about/IndustrialPartners";
import InitialImage from "../components/ui/InitialImage";
import ScrollSpySidebar from "../components/ScrollSpySidebar";

const sections = [
  { id: "aboutAMS", labelEn: "About AMS", labelKh: "អំពី AMS" },
  { id: "boardoftrustees", labelEn: "Board of Trustees", labelKh: "ក្រុមប្រឹក្សាភិបាល" },
  { id: "accreditation", labelEn: "Accreditation", labelKh: "សញ្ញាបត្រទទួលស្គាល់" },
  { id: "industrialpartners", labelEn: "Industrial Partners", labelKh: "ដៃគូឧស្សាហកម្ម" },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("aboutAMS");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const { language } = useLanguage(); // ✅ Only read language, no setLanguage here

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
      <InitialImage
        imagePath="/image.png"
        textEn="About Us"
        textKh="អំពីយើង"
      />

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
          <div id="aboutAMS"><AboutAMS /></div>
          <div id="boardoftrustees"><BoardOfTrustees /></div>
          <div id="accreditation"><Accreditation /></div>
          <div id="industrialpartners"><IndustrialPartners /></div>
        </section>
      </div>
    </div>
  );
}
