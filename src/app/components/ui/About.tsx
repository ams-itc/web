"use client";

import { Users, BookOpen, GraduationCap, Building2, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Utility function to apply font based on language and character type
function renderTextWithFont(
  text: string,
  language: "en" | "kh",
  type: "heading" | "body"
) {
  if (language === "en") {
    return <span className={type === "heading" ? "font-playfair_display" : "font-raleway"}>{text}</span>;
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/); // match non-Khmer sequences
    return (
      <>
        {parts.map((part, i) => {
          const isKhmer = /[\u1780-\u17FF]/.test(part);
          const fontClass =
            isKhmer
              ? type === "heading"
                ? "font-preahvihear"
                : "font-kantumruy_pro"
              : type === "heading"
              ? "font-playfair_display"
              : "font-raleway";
          return (
            <span key={i} className={fontClass}>
              {part}
            </span>
          );
        })}
      </>
    );
  }
}

// Static data for stats cards
const statsCards = [
  {
    icon: Users,
    value: "20+",
    label: { en: "Faculty Members", kh: "បុគ្គលិកអប់រំ" },
  },
  {
    icon: BookOpen,
    value: "400+",
    label: { en: "Students Enrolled", kh: "និស្សិតចូលរៀន" },
  },
  {
    icon: Building2,
    value: "100+",
    label: { en: "Research Projects", kh: "គម្រោងស្រាវជ្រាវ" },
  },
  {
    icon: GraduationCap,
    value: "80+",
    label: { en: "Graduated", kh: "និស្សិតបញ្ចប់ការ​សិក្សា" },
  },
  {
    icon: Handshake,
    value: "50+",
    label: { en: "Industry Partners", kh: "ដៃគូឧស្សាហកម្ម" },
  },
];

// Static data for Why Choose Us list
const whyChooseUsList = {
  en: [
    "Excepteur sint occaecat cupidatat non proident.",
    "Ut enim ad minim veniam, quis nostrud exercitation.",
    "Duis aute irure dolor in reprehenderit in voluptate.",
  ],
  kh: [
    "គ្មានការត្រូវទទួលខុសត្រូវលើកិច្ចការនេះ។",
    "ការប្រើប្រាស់ដោយគ្មានការបញ្ចេញអនុញ្ញាត។",
    "ការចូលរួមក្នុងសកម្មភាពដោយស្វ័យប្រវត្តិ។",
  ],
};

export default function About() {
  const { language } = useLanguage();

  return (
    <div className="px-6 md:px-16 lg:px-24 py-8 bg-gray-50 min-h-screen">
      {/* About AMS */}
      <section className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl font-bold mb-4 text-[#2E2E2E]">
          {renderTextWithFont(language === "en" ? "About AMS" : "អំពី AMS", language, "heading")}
        </h2>
        <p className="text-[#4d4d4d] leading-relaxed">
          {renderTextWithFont(
            language === "en"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              : "អត្ថបទនេះជាអត្ថបទគំរូ សម្រាប់ពិពណ៌នាអំពី AMS ដែលអាចផ្លាស់ប្តូរតាមភាសា។",
            language,
            "body"
          )}
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
        {statsCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Icon className="mx-auto h-10 w-10 text-red-600 mb-2" />
              <p className="text-2xl font-medium text-[#3A3B5C] font-inter">{card.value}</p>
              <p
                className={
                  language === "en"
                    ? "text-gray-600 font-medium"
                    : "text-gray-600 font-kantumruy_pro font-medium"
                }
              >
                {renderTextWithFont(card.label[language], language, "body")}
              </p>
            </div>
          );
        })}
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Text */}
        <div className="content-start">
          <h3 className="text-3xl font-bold mb-4 text-[#2E2E2E]">
            {renderTextWithFont(language === "en" ? "Why Choose Us?" : "ហេតុអ្វីបានជាជ្រើសរើសយើង?", language, "heading")}
          </h3>
          <p className="text-gray-600 mb-6">
            {renderTextWithFont(
              language === "en"
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                : "អត្ថបទនេះជាអត្ថបទគំរូ សម្រាប់ពិពណ៌នាហេតុផលដែលនិស្សិតរើសយើង។",
              language,
              "body"
            )}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {whyChooseUsList[language].map((item, idx) => (
              <li key={idx}>{renderTextWithFont(item, language, "body")}</li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="content-center">
          <img
            src="/students.jpg"
            alt={language === "en" ? "Students working together" : "និស្សិតកំពុងធ្វើការងារជាក្រុម"}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
}
