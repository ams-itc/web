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
      <span className={type === "heading" ? "font-playfair_display" : "font-raleway"}>
        {text}
      </span>
    );
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/).filter(Boolean);
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

interface Collaboration {
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

export default function PreviousCollaborationsSection() {
  const { language } = useLanguage();

  const text = {
    en: {
      heading: "Previous Collaborations",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      labels: {
        duration: "Collaborative Partnership Duration",
        investigators: "Principal Investigators",
        partner: "Industry Partner",
        funding: "Funding",
        students: "Student Involvement",
      },
    },
    kh: {
      heading: "កិច្ចសហប្រតិបត្តិការមុន",
      intro:
        "អត្ថបទណែនាំសម្រាប់បង្ហាញអំពីការសហការមុននេះ រួមមានព័ត៌មានសំខាន់ៗនៃគម្រោងស្រាវជ្រាវ និងការចូលរួមរបស់អ្នកទទួលបន្ទុក។",
      labels: {
        duration: "រយៈពេលសហការ",
        investigators: "អ្នកទទួលបន្ទុកស្រាវជ្រាវ",
        partner: "ដៃគូឧស្សាហកម្ម",
        funding: "ថវិកា",
        students: "ការចូលរួមរបស់និស្សិត",
      },
    },
  };

  const collaborations: Collaboration[] = [
    {
      title: "មុខវិជ្ជាវិទ្យាសាស្ត្រទិន្នន័យជីវវិទ្យា Stanford",
      duration: "មីនា 2023 – កុម្ភៈ 2024",
      investigators: [
        "ឌ្រី សារ៉ា ចិន (មេដិក Stanford)",
        "ឌ្រី មីខេល រ៉ូដ្រីហ្គេស (វិទ្យាសាស្ត្រកុំព្យូទ័រ Stanford)",
      ],
      partner: "សហគមន៍ដំណោះស្រាយវិភាគឆ្លាតវៃ",
      funding: "$3.5M នៃគម្រោងរួម",
      students: "និស្សិតបរិញ្ញាបត្រ 12 នាក់, និស្សិតក្រោមបរិញ្ញាបត្រ 8 នាក់",
      description:
        "ផ្នែកវិទ្យាសាស្ត្រជីវវិទ្យាស្ថិតិ និងទិន្នន័យរបស់យើងបានសហការជោគជ័យជាមួយមុខវិជ្ជាវិទ្យាសាស្ត្រទិន្នន័យជីវវិទ្យា Stanford ក្នុងការសហការដ៏ច្នៃប្រឌិត ដែលបង្ហាញពីអំណាចនៃការសហការមហាវិទ្យាល័យ-ឧស្សាហកម្មក្នុងការលើកកម្ពស់ការស្រាវជ្រាវសុខាភិបាល។",
      lists: [
        {
          title: "ច្នៃប្រឌិតស្រាវជ្រាវ និងកម្រិតសិក្សាឧត្តម",
          description: [
            "ការសហការជាអន្តរក្សាតម្លាភាពនេះបានបំបែកដីថ្មីក្នុងវិទ្យាសាស្ត្រទិន្នន័យបម្លែង ដោយបញ្ចូលជំនាញវេជ្ជសាស្ត្រជាមួយវិធីសាស្ត្រគណនាចុងក្រោយ។",
            "ស៊េរីសហការនេះបានផ្តោតលើការអភិវឌ្ឍន៍វិធីសាស្ត្រយ៉ាងតឹងរឹង និងការអនុវត្តវេជ្ជសាស្ត្រពិតប្រាកដ។",
          ],
        },
      ],
      link: [
        {
          title: "ទាញយករបាយការណ៍ពេញលេញនៅទីនេះ",
          url: "https://www.facebook.com/lyhor.luy.9",
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full">
      <h1 className="text-3xl font-playfair_display text-black font-semibold">
        {renderTextWithFont(text[language].heading, language, "heading")}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      <p className="mt-6 text-lg text-[#767676] font-raleway">
        {renderTextWithFont(text[language].intro, language, "body")}
      </p>

      {collaborations.map((item: Collaboration, index: number) => {
        const bgColor = index % 2 === 0 ? "#C41E3A" : "#3A3B5C";

        return (
          <div key={index} className="my-3 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              style={{ backgroundColor: bgColor }}
              className="w-full flex items-center py-3 px-4 text-left font-semibold text-white hover:opacity-90 transition"
            >
              <div className="flex-1">
                {renderTextWithFont(item.title, language, "heading")}
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
                          {renderTextWithFont(text[language].labels.duration, language, "body")}:
                        </strong>{" "}
                        {item.duration}
                      </p>
                      <p className="mb-2">
                        <strong>
                          {renderTextWithFont(text[language].labels.investigators, language, "body")}:
                        </strong>{" "}
                        {item.investigators.join(", ")}
                      </p>
                      <p className="mb-2">
                        <strong>
                          {renderTextWithFont(text[language].labels.partner, language, "body")}:
                        </strong>{" "}
                        {item.partner}
                      </p>
                      <p className="mb-2">
                        <strong>
                          {renderTextWithFont(text[language].labels.funding, language, "body")}:
                        </strong>{" "}
                        {item.funding}
                      </p>
                      <p className="mb-2">
                        <strong>
                          {renderTextWithFont(text[language].labels.students, language, "body")}:
                        </strong>{" "}
                        {item.students}
                      </p>
                    </div>

                    <p className="text-[#2E2E2E]/80">{item.description}</p>

                    {item.lists?.map((listItem, listIndex) => (
                      <div key={listIndex} className="mt-4 text-[#2E2E2E]/80">
                        <h3 className="text-lg font-bold mb-2">
                          {renderTextWithFont(listItem.title, language, "body")}
                        </h3>
                        {Array.isArray(listItem.description) &&
                          typeof listItem.description[0] === "string" &&
                          (listItem.description as string[]).map((desc, descIndex) => (
                            <p key={descIndex} className="mb-2 text-base">
                              {desc}
                            </p>
                          ))}
                      </div>
                    ))}

                    {item.link?.map((linkItem: LinkItem, linkIndex: number) => (
                      <div key={linkIndex} className="mt-4">
                        <a
                          href={linkItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#C41E3A] hover:underline"
                        >
                          {renderTextWithFont(linkItem.title, language, "body")}{" "}
                          <i className="fa-solid fa-arrow-up-right-from-square pl-2"></i>
                        </a>
                      </div>
                    ))}
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
