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
    <div className="px-6 md:px-16 lg:px-24 py-8 bg-gray-50">
      {/* About AMS */}
      <section className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#2E2E2E]">
          {renderTextWithFont(language === "en" ? "About AMS" : "អំពី AMS", language, "heading")}
        </h2>
        <p className="text-[#4d4d4d] leading-relaxed text-sm md:text-base">
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
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-10">
        {statsCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Icon className="mx-auto h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 text-red-600 mb-1 sm:mb-2 md:mb-2" />
              <p className="text-xl sm:text-2xl md:text-2xl font-medium text-[#3A3B5C] font-inter mb-1">
                {card.value}
              </p>
              <p
                className={
                  language === "en"
                    ? "text-sm sm:text-base md:text-sm text-gray-600 font-medium"
                    : "text-sm sm:text-base md:text-sm text-gray-600 font-kantumruy_pro font-medium"
                }
              >
                {renderTextWithFont(card.label[language], language, "body")}
              </p>
            </div>
          );
        })}
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-startn">
        {/* Text */}
        <div className="order-1 md:order-1 content-start">
          <h3 className="text-xl sm:text-2xl md:text-3xl  font-bold text-[#2E2E2E] mb-4">
            {renderTextWithFont(
              language === "en"
                ? "Why Choose Us?"
                : "ហេតុអ្វីបានជាជ្រើសរើសយើង?",
              language,
              "heading"
            )}
          </h3>

          {/* Desktop image between heading and paragraph */}
          <div className="lg:hidden flex mb-6">
            <img
              src="/students.jpg"
              alt={
                language === "en"
                  ? "Students working together"
                  : "និស្សិតកំពុងធ្វើការងារជាក្រុម"
              }
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          <p className="text-gray-600 mb-6 text-sm md:text-base">
            {renderTextWithFont(
              language === "en"
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                : "អត្ថបទនេះជាអត្ថបទគំរូ សម្រាប់ពិពណ៌នាហេតុផលដែលនិស្សិតរើសយើង។",
              language,
              "body"
            )}
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
            {whyChooseUsList[language].map((item, idx) => (
              <li key={idx}>{renderTextWithFont(item, language, "body")}</li>
            ))}
          </ul>
        </div>

        {/* Mobile/Tablet image below text */}
        <div className="order-2 hidden lg:flex justify-center">
          <img
            src="/students.jpg"
            alt={
              language === "en"
                ? "Students working together"
                : "និស្សិតកំពុងធ្វើការងារជាក្រុម"
            }
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </section>
    </div>
  );
}
