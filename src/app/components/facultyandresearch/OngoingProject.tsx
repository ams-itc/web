"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

function renderTextWithFont(
  text: string,
  language: "en" | "kh",
  type: "heading" | "body"
) {
  if (language === "en") {
    return (
      <span
        className={type === "heading" ? "font-playfair_display" : "font-raleway"}
      >
        {text}
      </span>
    );
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/).filter(Boolean);
    return (
      <>
        {parts.map((part, i) => {
          const isKhmer = /[\u1780-\u17FF]/.test(part);
          const fontClass = isKhmer
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

interface DescriptionItem {
  title: string;
  description: string | string[];
}

interface ListItem {
  title: string;
  description?: string[] | DescriptionItem[];
  sub_description?: string;
}

interface LinkItem {
  title: string;
  url: string;
}

interface OngoingProjectLang {
  title: string;
  duration: string;
  investigators: string[];
  partner: string;
  funding: string;
  students: string;
  description: string;
  lists?: ListItem[];
  link?: LinkItem[];
}

interface OngoingProject {
  en: OngoingProjectLang;
  kh: OngoingProjectLang;
}

export default function OngoingProjectsSection() {
  const { language } = useLanguage();

  const ongoingproject: OngoingProject[] = [
    {
      en: {
        title: "Stanford Bioinformatics Project",
        duration: "March 2023 – February 2024",
        investigators: [
          "Dr. Sarah Chen (Stanford Medicine)",
          "Dr. Michael Rodriguez (Stanford Computer Science)",
        ],
        partner: "Intelligent Analytics Solutions Consortium",
        funding: "$3.5M joint project",
        students: "12 graduate students, 8 undergraduates",
        description:
          "Our bioinformatics and statistical data science division successfully collaborated with Stanford’s bioinformatics program...",
      },
      kh: {
        title: "មុខវិជ្ជាវិទ្យាសាស្ត្រទិន្នន័យជីវវិទ្យា Stanford",
        duration: "មីនា 2023 – កុម្ភៈ 2024",
        investigators: [
          "ឌ្រី សារ៉ា ចិន (មេដិក Stanford)",
          "ឌ្រី មីខែល រ៉ូដ្រីហ្គេស (វិទ្យាសាស្ត្រកុំព្យូទ័រ Stanford)",
        ],
        partner: "សហគមន៍ដំណោះស្រាយវិភាគឆ្លាតវៃ",
        funding: "$3.5M នៃគម្រោងរួម",
        students: "និស្សិតបរិញ្ញាបត្រ 12 នាក់, និស្សិតក្រោមបរិញ្ញាបត្រ 8 នាក់",
        description:
          "ផ្នែកវិទ្យាសាស្ត្រជីវវិទ្យាស្ថិតិ និងទិន្នន័យរបស់យើងបានសហការជោគជ័យជាមួយមុខវិជ្ជាវិទ្យាសាស្ត្រទិន្នន័យជីវវិទ្យា Stanford ...",
      },
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full">
      <h1 className="text-3xl font-playfair_display text-black font-semibold">
        {renderTextWithFont(
          language === "en" ? "Ongoing Projects" : "គម្រោងកំពុងដំណើរ",
          language,
          "heading"
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
      <p className="mt-6 text-base text-[#767676] font-raleway">
        {renderTextWithFont(
          language === "en"
            ? "This is an introductory text for ongoing projects."
            : "អត្ថបទណែនាំនេះអាចប្រើ Lorem ipsum ជា placeholder.",
          language,
          "body"
        )}
      </p>

      {ongoingproject.map((project, index) => {
        const item = language === "en" ? project.en : project.kh;
        const bgColor = index % 2 === 0 ? "#C41E3A" : "#3A3B5C";

        return (
          <div key={index} className="my-3 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              style={{ backgroundColor: bgColor }}
              className="w-full flex items-center py-3 px-4 text-left font-semibold text-white hover:opacity-90 transition"
            >
              <div className={`flex-1 ${language === "en" ? "font-raleway" : "font-preahvihear"}`}>
                {
                  language === "en"
                  ? `${item.title}`
                  : `${item.title}`
                }
              </div>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-gray-700 font-raleway">
                    <div className="text-[#2E2E2E]/80">
                      <p className="mb-2">
                        <strong>
                          {renderTextWithFont(
                            language === "en"
                              ? "Project Duration:"
                              : "រយៈពេលគម្រោង:",
                            language,
                            "body"
                          )}
                        </strong>{" "}
                        {item.duration}
                      </p>
                      <p className="mb-2">
                        <strong>
                          {renderTextWithFont(
                            language === "en"
                              ? "Principal Investigators:"
                              : "អ្នកស្រាវជ្រាវសំខាន់:",
                            language,
                            "body"
                          )}
                        </strong>{" "}
                        {item.investigators.join(", ")}
                      </p>
                      <p className="mb-2">
                        <strong>
                          {renderTextWithFont(
                            language === "en"
                              ? "Industry Partner:"
                              : "ដៃគូឧស្សាហកម្ម:",
                            language,
                            "body"
                          )}
                        </strong>{" "}
                        {item.partner}
                      </p>
                      <p className="mb-2">
                        <strong>
                          {renderTextWithFont(
                            language === "en" ? "Funding:" : "ថវិកាសហការ:",
                            language,
                            "body"
                          )}
                        </strong>{" "}
                        {item.funding}
                      </p>
                      <p className="mb-2">
                        <strong>
                          {renderTextWithFont(
                            language === "en"
                              ? "Student Team:"
                              : "ក្រុមនិស្សិត:",
                            language,
                            "body"
                          )}
                        </strong>{" "}
                        {item.students}
                      </p>
                    </div>
                    <p className="text-[#2E2E2E]/80">
                      {renderTextWithFont(item.description, language, "body")}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}
